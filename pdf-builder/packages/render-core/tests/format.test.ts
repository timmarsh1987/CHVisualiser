import { describe, expect, it } from "vitest";
import { FormatError, applyFormat, stringifyPlain } from "../src/index.js";

describe("applyFormat", () => {
  it("stringifies plain values", () => {
    expect(stringifyPlain("Bolt")).toBe("Bolt");
    expect(stringifyPlain(12)).toBe("12");
    expect(stringifyPlain(true)).toBe("true");
    expect(applyFormat("Bolt")).toBe("Bolt");
    expect(() => stringifyPlain({ nope: true })).toThrow(FormatError);
    expect(() => stringifyPlain(Number.NaN)).toThrow(/not a number/);
  });

  it("formats the two supported date patterns in UTC", () => {
    expect(applyFormat("2024-03-05", { kind: "date", pattern: "YYYY-MM-DD" })).toBe("2024-03-05");
    expect(applyFormat("2024-03-05T15:04:05.000Z", { kind: "date", pattern: "DD MMM YYYY" })).toBe("05 Mar 2024");
    expect(() => applyFormat("March", { kind: "date", pattern: "YYYY-MM-DD" })).toThrow(/not a date/);
    expect(() => applyFormat("2024-02-31", { kind: "date", pattern: "YYYY-MM-DD" })).toThrow(/not a date/);
  });

  it("reads a localized string and an option list", () => {
    expect(stringifyPlain({ "en-US": "Test product for duplicate images" }, "en")).toBe(
      "Test product for duplicate images",
    );
    expect(stringifyPlain({})).toBe("");
    expect(
      applyFormat(
        { identifier: "Published", labels: { "en-US": "Published" } },
        undefined,
        "en",
      ),
    ).toBe("Published");
    expect(applyFormat({ "fr-FR": "Publié" }, { kind: "case", case: "upper" }, "en")).toBe("PUBLIÉ");
  });

  it("formats numbers, case, prefix, and suffix", () => {
    expect(applyFormat(1.5, { kind: "number", decimals: 2 })).toBe("1.50");
    expect(applyFormat("3", { kind: "number" })).toBe("3");
    expect(applyFormat("ny", { kind: "case", case: "upper" })).toBe("NY");
    expect(applyFormat("NY", { kind: "case", case: "lower" })).toBe("ny");
    expect(applyFormat("10", { kind: "prefix", text: "Rev " })).toBe("Rev 10");
    expect(applyFormat("HCS", { kind: "suffix", text: ".pdf" })).toBe("HCS.pdf");
    expect(() => applyFormat("nope", { kind: "number", decimals: 1 })).toThrow(/not a number/);
  });
});
