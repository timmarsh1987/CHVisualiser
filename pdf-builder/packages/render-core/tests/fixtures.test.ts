import { readFile } from "node:fs/promises";
import { PDFDocument } from "pdf-lib";
import { describe, expect, it } from "vitest";
import { loadDefaultFonts, parseDataContext, parseTemplate, renderDocument } from "../src/index.js";

const examples = new URL("../../../fixtures/examples/", import.meta.url);
const generatedAt = "2024-01-02T03:04:05.000Z";

describe("example column fixtures", () => {
  it("renders the sample entity through the column template", async () => {
    const [templateJson, dataJson, fieldJson, fonts] = await Promise.all([
      readFile(new URL("flow-template.json", examples), "utf8"),
      readFile(new URL("entity.json", examples), "utf8"),
      readFile(new URL("fields.json", examples), "utf8"),
      loadDefaultFonts(),
    ]);
    const catalog = JSON.parse(fieldJson) as { fields: { kind: string; path: string }[] };
    expect(catalog.fields.find((field) => field.path === "ProductName")?.kind).toBe("text");
    expect(catalog.fields.find((field) => field.path === "ProductShortDescription")?.kind).toBe("localized");
    expect(catalog.fields.find((field) => field.path === "PublishStatus")?.kind).toBe("option");
    expect(catalog.fields.find((field) => field.path === "PCMProductToMasterAsset")?.kind).toBe("relation");
    const template = parseTemplate(JSON.parse(templateJson) as unknown);
    const data = parseDataContext(JSON.parse(dataJson) as unknown);
    expect(data.ProductName).toBe("Dupe Test Product");
    const resources = { fonts, generatedAt };
    const first = await renderDocument(template, data, resources);
    const second = await renderDocument(template, data, resources);
    expect(Buffer.from(first.bytes).equals(Buffer.from(second.bytes))).toBe(true);
    const pdf = await PDFDocument.load(first.bytes);
    expect(pdf.getPageCount()).toBe(1);
    expect(first.report.regions.map((region) => [region.regionId, region.status])).toEqual([
      ["product-name", "ok"],
      ["publish-status", "ok"],
      ["short-description", "ok"],
    ]);
  });
});
