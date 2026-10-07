import { describe, expect, it } from "vitest";
import { emptyRegionReport } from "../src/index.js";

describe("emptyRegionReport", () => {
  it("starts a region report with no layout flags", () => {
    expect(emptyRegionReport("title", "unbound", "Field Title is unbound.")).toEqual({
      regionId: "title",
      status: "unbound",
      fontSizeUsed: null,
      truncated: false,
      overflow: false,
      missingGlyphs: [],
      unboundFields: [],
      message: "Field Title is unbound.",
    });
  });
});
