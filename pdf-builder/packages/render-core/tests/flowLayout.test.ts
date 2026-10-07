import { describe, expect, it } from "vitest";
import { LIBERATION_SANS, columnWidth, layoutFlow, parseTemplate, readImageSize, spanWidth } from "../src/index.js";
import type { Template } from "../src/index.js";

const measure = (text: string, fontSize: number): number => text.length * fontSize;

const defaults = { fontFamily: "Liberation Sans", fontSize: 12, color: "#000000" };

function flowTemplate(rows: unknown[], pageHeight = 792): Template {
  return parseTemplate({
    id: "flow-test",
    name: "Flow test",
    version: 1,
    fonts: [LIBERATION_SANS],
    defaults,
    pages: [{ pageIndex: 0, size: { width: 612, height: pageHeight }, regions: [] }],
    layout: {
      columnCount: 12,
      margin: 36,
      columnGap: 6,
      rowGap: 8,
      rows,
    },
  });
}

function place(template: Template, data: Record<string, unknown>, pageHeight = 792) {
  const layout = template.layout;
  if (!layout) throw new Error("Expected a flow layout.");
  return layoutFlow({
    pageWidth: 612,
    pageHeight,
    layout,
    data,
    defaults,
    measure,
  });
}

describe("column geometry", () => {
  it("derives column and span widths for a letter page", () => {
    const contentWidth = 612 - 36 * 2;
    const width = columnWidth(contentWidth, 12, 6);
    expect(contentWidth).toBe(540);
    expect(spanWidth(12, width, 6)).toBe(540);
    expect(spanWidth(6, width, 6)).toBe(267);
  });

  it("places side by side spans on the same row", () => {
    const template = flowTemplate([
      {
        id: "row-1",
        blocks: [
          {
            id: "left",
            label: "Left",
            type: "text",
            span: 6,
            binding: { kind: "property", path: "Left" },
          },
          {
            id: "right",
            label: "Right",
            type: "text",
            span: 6,
            binding: { kind: "property", path: "Right" },
          },
        ],
      },
    ]);
    const laid = place(template, { Left: "One", Right: "Two" });
    const blocks = laid.pages[0] ?? [];
    expect(blocks.map((block) => [block.blockId, block.x, block.width])).toEqual([
      ["left", 36, 267],
      ["right", 309, 267],
    ]);
  });
});

describe("layoutFlow", () => {
  it("grows a row when the text gets longer", () => {
    const row = {
      id: "row-1",
      blocks: [
        {
          id: "body",
          label: "Body",
          type: "text",
          span: 12,
          binding: { kind: "property", path: "Body" },
        },
      ],
    };
    const short = place(flowTemplate([row]), { Body: "Hi" });
    const longText = "Bolt ".repeat(40).trim();
    const long = place(flowTemplate([row]), { Body: longText });
    const shortHeight = short.pages[0]?.[0]?.height ?? 0;
    const longHeight = long.pages[0]?.[0]?.height ?? 0;
    expect(longHeight).toBeGreaterThan(shortHeight);
  });

  it("continues a table on the next page and repeats the header", () => {
    const rows = Array.from({ length: 10 }, (_, index) => ({ Size: `S${index}`, Value: String(index) }));
    const template = flowTemplate(
      [
        {
          id: "row-1",
          blocks: [
            {
              id: "dims",
              label: "Dimensions",
              type: "table",
              span: 12,
              binding: { kind: "repeating", path: "Dimensions" },
              columns: [
                { header: "Size", binding: { kind: "property", path: "Size" }, width: 1 },
                { header: "Value", binding: { kind: "property", path: "Value" }, width: 1 },
              ],
            },
          ],
        },
      ],
      200,
    );
    const laid = place(template, { Dimensions: rows }, 200);
    expect(laid.pages).toHaveLength(2);
    const first = laid.pages[0]?.[0]?.draw;
    const second = laid.pages[1]?.[0]?.draw;
    expect(first?.type).toBe("table");
    expect(second?.type).toBe("table");
    if (first?.type !== "table" || second?.type !== "table") return;
    expect(first.headers).toEqual(["Size", "Value"]);
    expect(second.headers).toEqual(["Size", "Value"]);
    expect(first.rows.length).toBeGreaterThan(0);
    expect(second.rows.length).toBeGreaterThan(0);
    expect(first.rows.length + second.rows.length).toBe(10);
    expect(laid.reports[0]?.message).toContain("Continued on the next page.");
  });

  it("reads chosen product fields as one table row when the table has no repeating group", () => {
    const template = flowTemplate([
      {
        id: "row-1",
        blocks: [
          {
            id: "facts",
            label: "Facts",
            type: "table",
            span: 12,
            columns: [
              { header: "Name", binding: { kind: "property", path: "ProductName" }, width: 1 },
              {
                header: "Status",
                binding: { kind: "property", path: "PublishStatus" },
                width: 1,
              },
            ],
          },
        ],
      },
    ]);
    const laid = place(template, {
      ProductName: "Dupe Test Product",
      PublishStatus: { identifier: "Published", labels: { "en-US": "Published" } },
    });
    const draw = laid.pages[0]?.[0]?.draw;
    expect(draw?.type).toBe("table");
    if (draw?.type !== "table") return;
    expect(draw.headers).toEqual(["Name", "Status"]);
    expect(draw.rows).toEqual([["Dupe Test Product", "Published"]]);
    expect(laid.reports[0]?.status).toBe("ok");
  });

  it("reads PNG pixel size", () => {
    const png = Uint8Array.from(
      Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
        "base64",
      ),
    );
    expect(readImageSize(png)).toEqual({ width: 1, height: 1 });
  });
});
