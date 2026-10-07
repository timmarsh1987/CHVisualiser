import { describe, expect, it } from "vitest";
import { resolveStyle } from "../src/index.js";

const defaults = { fontFamily: "Liberation Sans", fontSize: 12, color: "#111111" };

describe("resolveStyle", () => {
  it("fills omitted style fields from the template defaults", () => {
    expect(resolveStyle({}, defaults)).toEqual({
      fontFamily: "Liberation Sans",
      fontSize: 12,
      minSize: 12,
      color: "#111111",
      align: "left",
      lineHeight: 1.2,
      bold: false,
      italic: false,
    });
  });

  it("keeps explicit style fields", () => {
    expect(
      resolveStyle(
        {
          fontFamily: "Other",
          fontSize: 18,
          minSize: 9,
          color: "#abcdef",
          align: "right",
          lineHeight: 1.4,
          bold: true,
          italic: true,
        },
        defaults,
      ).fontSize,
    ).toBe(18);
  });
});
