import { describe, expect, it } from "vitest";
import { parseColor } from "../src/index.js";

describe("parseColor", () => {
  it("parses #RRGGBB into unit rgb", () => {
    expect(parseColor("#000000")).toEqual({ red: 0, green: 0, blue: 0 });
    expect(parseColor("#ffffff")).toEqual({ red: 1, green: 1, blue: 1 });
    expect(parseColor("#ff0000").red).toBeCloseTo(1);
  });

  it("rejects other color forms", () => {
    expect(() => parseColor("red")).toThrow(/#RRGGBB/);
    expect(() => parseColor("#fff")).toThrow(/#RRGGBB/);
  });
});
