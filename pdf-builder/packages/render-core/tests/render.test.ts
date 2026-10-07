import { describe, expect, it } from "vitest";
import {
  FontResolutionError,
  PdfSafetyError,
  loadDefaultFonts,
  renderDocument,
} from "../src/index.js";
import { blankPdf, decodeAsciiHex, markedPdf, pageContent, staticRegion, textRegion, textTemplate } from "./helpers.js";

const generatedAt = "2024-01-02T03:04:05.000Z";

describe("renderDocument", () => {
  it("is byte stable for the same inputs and keeps the background text", async () => {
    const [background, fonts] = await Promise.all([markedPdf(), loadDefaultFonts()]);
    const template = textTemplate(staticRegion("Overlay"));
    const resources = { backgroundPdf: background, fonts, generatedAt };
    const first = await renderDocument(template, {}, resources);
    const second = await renderDocument(template, {}, resources);
    expect(Buffer.from(first.bytes).equals(Buffer.from(second.bytes))).toBe(true);
    expect(Buffer.from(first.bytes).subarray(0, 5).toString()).toBe("%PDF-");
    expect(decodeAsciiHex(await pageContent(first.bytes))).toContain("BACKGROUND");
    expect(first.report.regions[0]?.status).toBe("ok");
    expect(first.report.inputHash).toMatch(/^[0-9a-f]{64}$/);

    const later = await renderDocument(template, {}, { ...resources, generatedAt: "2024-02-02T03:04:05.000Z" });
    expect(Buffer.from(later.bytes).equals(Buffer.from(first.bytes))).toBe(false);
  });

  it("draws bound text, flags unbound fields, and skips computed expressions", async () => {
    const [background, fonts] = await Promise.all([blankPdf(), loadDefaultFonts()]);
    const template = textTemplate(textRegion());
    const resources = { backgroundPdf: background, fonts, generatedAt };
    const drawn = await renderDocument(template, { Product: { Name: '3/8"-16 \u00B1 \u00B0' } }, resources);
    expect(drawn.report.regions[0]?.status).toBe("ok");
    expect(drawn.report.regions[0]?.missingGlyphs).toEqual([]);

    const missing = await renderDocument(template, {}, resources);
    expect(missing.report.regions[0]?.status).toBe("unbound");
    expect(missing.report.regions[0]?.unboundFields).toEqual(["Product.Name"]);

    const computed = textTemplate({
      ...textRegion(),
      binding: { kind: "computed", expression: "process.exit(1)" },
    });
    const skipped = await renderDocument(computed, {}, resources);
    expect(skipped.report.regions[0]?.status).toBe("unsupported");
  });

  it("reports shrink overflow, truncation, and error overflow", async () => {
    const [background, fonts] = await Promise.all([blankPdf(), loadDefaultFonts()]);
    const resources = { backgroundPdf: background, fonts, generatedAt };
    const long = "This sentence is far too long for the region and should not be clipped silently.";
    const box = { x: 72, y: 72, width: 40, height: 12 };
    const shrink = await renderDocument(
      textTemplate({ ...textRegion({ overflow: "shrink", rect: box }), rect: box, overflow: "shrink" }),
      { Product: { Name: long } },
      resources,
    );
    expect(shrink.report.regions[0]?.status).toBe("overflow");

    const truncated = await renderDocument(
      textTemplate({ ...textRegion(), rect: box, overflow: "truncate" }),
      { Product: { Name: long } },
      resources,
    );
    expect(truncated.report.regions[0]?.status).toBe("truncated");
    expect(truncated.report.regions[0]?.truncated).toBe(true);

    const errored = await renderDocument(
      textTemplate({ ...textRegion(), rect: box, overflow: "error" }),
      { Product: { Name: long } },
      resources,
    );
    expect(errored.report.regions[0]?.status).toBe("error");
    expect(errored.report.regions[0]?.overflow).toBe(true);
  });

  it("paints a white cover only when the region draws", async () => {
    const [background, fonts] = await Promise.all([blankPdf(), loadDefaultFonts()]);
    const resources = { backgroundPdf: background, fonts, generatedAt };
    const covered = await renderDocument(
      textTemplate({ ...staticRegion("Covered"), coverFill: true }),
      {},
      resources,
    );
    expect(await pageContent(covered.bytes)).toContain("1 1 1 rg");

    const open = await renderDocument(textTemplate(staticRegion("Open")), {}, resources);
    expect(await pageContent(open.bytes)).not.toContain("1 1 1 rg");
  });

  it("reports a missing glyph and still returns a PDF", async () => {
    const [background, fonts] = await Promise.all([blankPdf(), loadDefaultFonts()]);
    const result = await renderDocument(textTemplate(staticRegion("\u5b57")), {}, {
      backgroundPdf: background,
      fonts,
      generatedAt,
    });
    expect(result.report.regions[0]?.missingGlyphs).toEqual(["\u5b57"]);
    expect(result.bytes[0]).toBe(0x25);
  });

  it("reports a missing page, a missing font family, a bad value, and a missing font file", async () => {
    const [background, fonts] = await Promise.all([blankPdf(), loadDefaultFonts()]);
    const resources = { backgroundPdf: background, fonts, generatedAt };
    const missingPage = textTemplate(staticRegion());
    missingPage.pages[0] = { ...missingPage.pages[0], pageIndex: 3, regions: missingPage.pages[0]?.regions ?? [] };
    const pageResult = await renderDocument(missingPage, {}, resources);
    expect(pageResult.report.regions[0]?.message).toMatch(/not in the background PDF/);

    const missingFamily = textTemplate({
      ...staticRegion(),
      style: { fontFamily: "Nope", fontSize: 12, color: "#000000", align: "left", lineHeight: 1.2 },
    });
    const familyResult = await renderDocument(missingFamily, {}, resources);
    expect(familyResult.report.regions[0]?.status).toBe("error");

    const badDate = textTemplate({
      ...textRegion(),
      format: { kind: "date", pattern: "YYYY-MM-DD" },
    });
    const dateResult = await renderDocument(badDate, { Product: { Name: "yesterday" } }, resources);
    expect(dateResult.report.regions[0]?.message).toMatch(/not a date/);

    const repeating = textTemplate({
      ...textRegion(),
      binding: { kind: "repeating", path: "Product>Rows" },
    });
    const rows = await renderDocument(repeating, { Product: { Rows: [{ Size: "1/4" }] } }, resources);
    expect(rows.report.regions[0]?.message).toMatch(/did not resolve to text/);

    await expect(
      renderDocument(textTemplate(staticRegion()), {}, { ...resources, fonts: {} }),
    ).rejects.toBeInstanceOf(FontResolutionError);
  });

  it("rejects an unsafe background before drawing", async () => {
    const fonts = await loadDefaultFonts();
    const bytes = new TextEncoder().encode("%PDF-1.4\n<< /JavaScript (alert) >>\n");
    await expect(
      renderDocument(textTemplate(staticRegion()), {}, { backgroundPdf: bytes, fonts, generatedAt }),
    ).rejects.toBeInstanceOf(PdfSafetyError);
  });

  it("uses bold and italic faces and a visibleWhen value without evaluating it", async () => {
    const [background, fonts] = await Promise.all([blankPdf(), loadDefaultFonts()]);
    const result = await renderDocument(
      textTemplate({
        ...staticRegion("Styled"),
        visibleWhen: { op: "notEmpty" },
        style: { fontSize: 14, color: "#000000", align: "center", lineHeight: 1.2, bold: true, italic: true },
      }),
      {},
      { backgroundPdf: background, fonts, generatedAt },
    );
    expect(result.report.regions[0]?.status).toBe("ok");
    expect(result.report.regions[0]?.fontSizeUsed).toBe(14);
  });
});
