import { describe, expect, it } from "vitest";
import { firstBaseline, topLeftRectToPdf } from "../src/index.js";

describe("coordinates", () => {
  it("converts a top-left rect into PDF user space", () => {
    expect(topLeftRectToPdf({ x: 72, y: 72, width: 100, height: 20 }, 792)).toEqual({
      x: 72,
      y: 700,
      width: 100,
      height: 20,
    });
  });

  it("places the first baseline below the top by the ascent", () => {
    expect(firstBaseline(700, 8)).toBe(692);
  });
});
