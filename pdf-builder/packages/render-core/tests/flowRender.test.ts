import { PDFDocument } from "pdf-lib";
import { describe, expect, it } from "vitest";
import { LIBERATION_SANS, loadDefaultFonts, parseTemplate, renderDocument } from "../src/index.js";
import { decodeAsciiHex, markedPdf, pageContent, staticRegion, textTemplate } from "./helpers.js";

const generatedAt = "2024-01-02T03:04:05.000Z";

const png = Uint8Array.from(
  Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
    "base64",
  ),
);

const dimensions = Array.from({ length: 50 }, (_, index) => ({
  Size: `S${index}`,
  Value: (index / 10).toFixed(2),
}));

function flowTemplate() {
  return parseTemplate({
    id: "flow-render",
    name: "Flow render",
    version: 1,
    language: "en",
    fonts: [LIBERATION_SANS],
    defaults: { fontFamily: "Liberation Sans", fontSize: 12, color: "#000000" },
    pages: [{ pageIndex: 0, size: { width: 612, height: 792 }, regions: [] }],
    layout: {
      columnCount: 12,
      margin: 36,
      columnGap: 6,
      rowGap: 8,
      rows: [
        {
          id: "row-title",
          blocks: [
            {
              id: "title",
              label: "Title",
              type: "text",
              span: 8,
              binding: { kind: "property", path: "Title" },
            },
            {
              id: "cover",
              label: "Cover",
              type: "image",
              span: 4,
              binding: { kind: "property", path: "CoverImage" },
            },
          ],
        },
        {
          id: "row-table",
          blocks: [
            {
              id: "dims",
              label: "Dimensions",
              type: "table",
              span: 12,
              binding: { kind: "repeating", path: "Dimensions" },
              columns: [
                { header: "Size", binding: { kind: "property", path: "Size" }, width: 1 },
                { header: "Value", binding: { kind: "property", path: "Value" }, width: 1, align: "right" },
              ],
            },
          ],
        },
      ],
    },
  });
}

describe("flow renderDocument", () => {
  it("is byte stable, ignores the background PDF, and splits a long table", async () => {
    const [background, fonts] = await Promise.all([markedPdf(), loadDefaultFonts()]);
    const template = flowTemplate();
    const data = { Title: "Hex nut 3/8", CoverImage: "cover", Dimensions: dimensions };
    const resources = {
      backgroundPdf: background,
      fonts,
      images: { cover: png },
      generatedAt,
    };
    const first = await renderDocument(template, data, resources);
    const second = await renderDocument(template, data, resources);
    expect(Buffer.from(first.bytes).equals(Buffer.from(second.bytes))).toBe(true);
    expect(Buffer.from(first.bytes).subarray(0, 5).toString()).toBe("%PDF-");
    expect(decodeAsciiHex(await pageContent(first.bytes))).not.toContain("BACKGROUND");
    const pdf = await PDFDocument.load(first.bytes);
    expect(pdf.getPageCount()).toBeGreaterThan(1);
    expect(first.report.regions.find((region) => region.regionId === "dims")?.message).toContain(
      "Continued on the next page.",
    );
    expect(first.report.regions.find((region) => region.regionId === "title")?.status).toBe("ok");
    expect(first.report.regions.find((region) => region.regionId === "cover")?.status).toBe("ok");

    const later = await renderDocument(template, data, { ...resources, generatedAt: "2024-02-02T03:04:05.000Z" });
    expect(Buffer.from(later.bytes).equals(Buffer.from(first.bytes))).toBe(false);
  });

  it("draws an empty frame when the image bytes are missing", async () => {
    const fonts = await loadDefaultFonts();
    const result = await renderDocument(
      flowTemplate(),
      { Title: "Hex nut", CoverImage: "cover", Dimensions: [] },
      { fonts, generatedAt },
    );
    expect(result.report.regions.find((region) => region.regionId === "cover")?.status).toBe("error");
    expect(result.report.regions.find((region) => region.regionId === "cover")?.message).toBe("Image was not provided.");
    const pdf = await PDFDocument.load(result.bytes);
    expect(pdf.getPageCount()).toBe(1);
  });

  it("still requires a background PDF for overlay templates", async () => {
    const fonts = await loadDefaultFonts();
    await expect(renderDocument(textTemplate(staticRegion()), {}, { fonts, generatedAt })).rejects.toThrow(
      /background PDF is required/,
    );
  });
});
