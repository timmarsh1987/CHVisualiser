import { describe, expect, it } from "vitest";
import { FormatError, TemplateValidationError, formatSchemaIssues, parseDataContext, parseTemplate } from "../src/index.js";
import { ZodError } from "zod";
import { staticRegion, textRegion, textTemplate } from "./helpers.js";

describe("parseTemplate", () => {
  it("accepts text and static regions and keeps visibleWhen", () => {
    const template = textTemplate({
      ...textRegion(),
      visibleWhen: { op: "notEmpty", binding: { kind: "property", path: "Product.Name" } },
    });
    const region = template.pages[0]?.regions[0];
    expect(region?.visibleWhen).toEqual({
      op: "notEmpty",
      binding: { kind: "property", path: "Product.Name" },
    });
  });

  it("rejects image, table, and unknown region types", () => {
    for (const type of ["image", "table", "shape"]) {
      expect(() => textTemplate({ ...textRegion(), type })).toThrow(TemplateValidationError);
    }
  });

  it("rejects unknown fields, duplicate ids, duplicate pages, and an oversized minimum", () => {
    expect(() => textTemplate({ ...staticRegion(), extra: true })).toThrow(/Unrecognized key/);
    expect(() =>
      parseTemplate({
        ...textTemplate(staticRegion()),
        pages: [
          {
            pageIndex: 0,
            size: { width: 612, height: 792 },
            regions: [staticRegion(), { ...staticRegion(), id: "static-1", label: "Again" }],
          },
        ],
      }),
    ).toThrow(/duplicated/);
    expect(() =>
      parseTemplate({
        ...textTemplate(staticRegion()),
        pages: [
          { pageIndex: 0, size: { width: 612, height: 792 }, regions: [] },
          { pageIndex: 0, size: { width: 612, height: 792 }, regions: [] },
        ],
      }),
    ).toThrow(/duplicated/);
    expect(() =>
      textTemplate({
        ...textRegion(),
        style: { fontSize: 10, minSize: 14, color: "#000000", align: "left", lineHeight: 1.2 },
      }),
    ).toThrow(/Minimum size/);
  });

  it("rejects empty binding segments and unsupported date patterns", () => {
    expect(() => textTemplate({ ...textRegion(), binding: { kind: "property", path: "Product..Name" } })).toThrow(
      /cannot be empty/,
    );
    expect(() =>
      textTemplate({
        ...textRegion(),
        format: { kind: "date", pattern: "MM/DD/YYYY" },
      }),
    ).toThrow(TemplateValidationError);
  });

  it("rejects a non-positive version", () => {
    expect(() => parseTemplate({ ...textTemplate(staticRegion()), version: 0 })).toThrow(TemplateValidationError);
  });

  it("rejects a flow row whose spans add up to more than 12", () => {
    expect(() =>
      parseTemplate({
        ...textTemplate(staticRegion()),
        pages: [{ pageIndex: 0, size: { width: 612, height: 792 }, regions: [] }],
        layout: {
          columnCount: 12,
          margin: 36,
          columnGap: 6,
          rowGap: 8,
          rows: [
            {
              id: "row-1",
              blocks: [
                {
                  id: "a",
                  label: "A",
                  type: "text",
                  span: 8,
                  binding: { kind: "property", path: "Title" },
                },
                {
                  id: "b",
                  label: "B",
                  type: "text",
                  span: 6,
                  binding: { kind: "property", path: "Title" },
                },
              ],
            },
          ],
        },
      }),
    ).toThrow(/more than 12/);
  });
});

describe("parseDataContext", () => {
  it("accepts an object and rejects arrays", () => {
    expect(parseDataContext({ Product: { Name: "Bolt" } })).toEqual({ Product: { Name: "Bolt" } });
    expect(() => parseDataContext(["Bolt"])).toThrow(TemplateValidationError);
    expect(() => parseDataContext(null)).toThrow(TemplateValidationError);
  });
});

describe("formatSchemaIssues", () => {
  it("joins issue paths and messages", () => {
    const error = new ZodError([
      { code: "custom", path: ["pages", 0], message: "Page index 0 is duplicated." },
    ]);
    expect(formatSchemaIssues(error)).toBe("pages.0: Page index 0 is duplicated.");
  });
});

describe("format errors stay separate from schema errors", () => {
  it("uses FormatError for values, not template JSON", () => {
    expect(new FormatError("Value is not a date.").name).toBe("FormatError");
  });
});
