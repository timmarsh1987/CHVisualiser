import { describe, expect, it } from "vitest";
import {
  ellipsizeLine,
  fontSizeCandidates,
  layoutText,
  lineX,
  maxLinesThatFit,
  truncateToFit,
  wrapLines,
} from "../src/index.js";

const charWidth = (text: string, fontSize = 10) => text.length * fontSize;

describe("wrapLines", () => {
  it("wraps on spaces and keeps non-breaking spaces together", () => {
    expect(wrapLines("", 100, (line) => charWidth(line))).toEqual([]);
    expect(wrapLines("aaaa bbbb", 80, (line) => charWidth(line, 10))).toEqual(["aaaa", "bbbb"]);
    expect(wrapLines("aaaa\u00A0bbbb cccc", 90, (line) => charWidth(line, 10))).toEqual(["aaaa\u00A0bbbb", "cccc"]);
    expect(wrapLines("one\n\ntwo", 100, (line) => charWidth(line))).toEqual(["one", "", "two"]);
  });

  it("keeps fastener marks on one token", () => {
    expect(wrapLines('3/8"-16', 200, (line) => charWidth(line))).toEqual(['3/8"-16']);
  });
});

describe("layoutText", () => {
  const base = {
    measure: charWidth,
    maxWidth: 40,
    maxHeight: 20,
    fontSize: 20,
    minSize: 10,
    lineHeight: 1,
    overflow: "shrink" as const,
  };

  it("shrinks until the line fits", () => {
    const layout = layoutText({ ...base, text: "abcd" });
    expect(layout.fontSize).toBe(10);
    expect(layout.draw).toBe(true);
    expect(layout.overflow).toBe(false);
    expect(layout.lines.map((line) => line.text)).toEqual(["abcd"]);
  });

  it("reports overflow and still returns lines when shrink cannot fit", () => {
    const layout = layoutText({ ...base, text: "abcdef", maxWidth: 40, minSize: 10, fontSize: 10 });
    expect(layout.overflow).toBe(true);
    expect(layout.draw).toBe(true);
    expect(layout.fontSize).toBe(10);
  });

  it("does not draw when overflow is error", () => {
    const layout = layoutText({ ...base, text: "abcdef", overflow: "error", fontSize: 10, minSize: 10 });
    expect(layout.draw).toBe(false);
    expect(layout.overflow).toBe(true);
    expect(layout.lines).toEqual([]);
  });

  it("truncates with an ellipsis", () => {
    const layout = layoutText({
      ...base,
      text: "abcd efgh ijkl",
      overflow: "truncate",
      fontSize: 10,
      minSize: 10,
      maxWidth: 40,
      maxHeight: 10,
    });
    expect(layout.truncated).toBe(true);
    expect(layout.draw).toBe(true);
    expect(layout.lines[0]?.text.endsWith("...")).toBe(true);
  });

  it("honors maxLines and an empty string", () => {
    const limited = layoutText({
      text: "aa bb",
      measure: charWidth,
      maxWidth: 20,
      maxHeight: 100,
      fontSize: 10,
      minSize: 10,
      lineHeight: 1,
      overflow: "error",
      maxLines: 1,
    });
    expect(limited.draw).toBe(false);
    expect(layoutText({ ...base, text: "" }).draw).toBe(false);
  });

  it("lists missing glyphs from the measurer", () => {
    const layout = layoutText({
      ...base,
      text: "a",
      maxWidth: 100,
      maxHeight: 40,
      fontSize: 10,
      missingGlyphs: () => ["a"],
    });
    expect(layout.missingGlyphs).toEqual(["a"]);
  });
});

describe("text helpers", () => {
  it("builds font size candidates down to the minimum", () => {
    expect(fontSizeCandidates(10.5, 10)).toEqual([10.5, 10.25, 10]);
    expect(fontSizeCandidates(10, 10)).toEqual([10]);
    expect(() => fontSizeCandidates(0, 10)).toThrow(/positive/);
  });

  it("counts lines that fit the box", () => {
    expect(maxLinesThatFit(20, 10, 1)).toBe(2);
    expect(maxLinesThatFit(20, 10, 1, 1)).toBe(1);
    expect(maxLinesThatFit(0, 10, 1)).toBe(0);
  });

  it("ellipsizes and truncates", () => {
    expect(ellipsizeLine("abcdef", 50, (line) => line.length * 10)).toBe("ab...");
    expect(ellipsizeLine("ab", 10, () => 20)).toBe("");
    expect(truncateToFit("aa bb cc", 20, 1, (line) => line.length * 10).truncated).toBe(true);
    expect(truncateToFit("aa", 20, 1, (line) => line.length * 10)).toEqual({ lines: ["aa"], truncated: false });
    expect(truncateToFit("aa", 20, 0, (line) => line.length * 10)).toEqual({ lines: [], truncated: true });
  });

  it("places lines for each alignment", () => {
    expect(lineX("left", 10, 100, 40)).toBe(10);
    expect(lineX("center", 0, 100, 40)).toBe(30);
    expect(lineX("right", 0, 100, 40)).toBe(60);
  });
});
