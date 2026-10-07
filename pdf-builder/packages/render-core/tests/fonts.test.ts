import { describe, expect, it } from "vitest";
import { FontResolutionError, LIBERATION_SANS, createFontMetrics, loadDefaultFonts, resolveFontFace } from "../src/index.js";

describe("resolveFontFace", () => {
  it("selects the face that matches bold and italic", () => {
    expect(resolveFontFace([LIBERATION_SANS], "Liberation Sans", false, false).fileName).toBe(
      "LiberationSans-Regular.ttf",
    );
    expect(resolveFontFace([LIBERATION_SANS], "Liberation Sans", true, false).fileName).toBe(
      "LiberationSans-Bold.ttf",
    );
    expect(resolveFontFace([LIBERATION_SANS], "Liberation Sans", false, true).fileName).toBe(
      "LiberationSans-Italic.ttf",
    );
    expect(resolveFontFace([LIBERATION_SANS], "Liberation Sans", true, true).fileName).toBe(
      "LiberationSans-BoldItalic.ttf",
    );
  });

  it("falls back to regular when the requested face is missing", () => {
    const fonts = [{ family: "Plain", regular: "Plain-Regular.ttf" }];
    const selected = resolveFontFace(fonts, "Plain", true, false);
    expect(selected.fileName).toBe("Plain-Regular.ttf");
    expect(selected.fallback).toMatch(/bold was requested/);
  });

  it("reports a family that is not on the template", () => {
    expect(() => resolveFontFace([LIBERATION_SANS], "Missing", false, false)).toThrow(FontResolutionError);
  });
});

describe("createFontMetrics", () => {
  it("measures fastener characters and reports a missing glyph", async () => {
    const fonts = await loadDefaultFonts();
    const regular = fonts["LiberationSans-Regular.ttf"];
    expect(regular).toBeDefined();
    const metrics = createFontMetrics(regular as Uint8Array);
    const sample = '3/8"-16 \u00B1 \u00B0';
    expect(metrics.missingGlyphs(sample)).toEqual([]);
    expect(metrics.widthOf(sample, 12)).toBeGreaterThan(0);
    expect(metrics.widthOf("", 12)).toBe(0);
    expect(metrics.ascent(12)).toBeGreaterThan(0);
    expect(metrics.missingGlyphs("\u5b57")).toEqual(["\u5b57"]);
  });
});
