import { describe, expect, it } from "vitest";
import { loadDefaultFonts } from "../src/index.js";

describe("loadDefaultFonts", () => {
  it("loads the four Liberation Sans faces", async () => {
    const fonts = await loadDefaultFonts();
    expect(Object.keys(fonts).sort()).toEqual([
      "LiberationSans-Bold.ttf",
      "LiberationSans-BoldItalic.ttf",
      "LiberationSans-Italic.ttf",
      "LiberationSans-Regular.ttf",
    ]);
    for (const bytes of Object.values(fonts)) {
      expect(bytes.byteLength).toBeGreaterThan(1000);
    }
  });
});
