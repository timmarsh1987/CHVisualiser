import { describe, expect, it } from "vitest";
import { PDFDocument } from "pdf-lib";
import { PdfSafetyError, assertPdfSafe, bytesInclude } from "../src/index.js";

function pdfWith(body: string): Uint8Array {
  return new TextEncoder().encode(`%PDF-1.4\n${body}\n`);
}

describe("assertPdfSafe", () => {
  it("accepts a normal PDF", async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const bytes = await pdf.save();
    expect(() => assertPdfSafe(bytes)).not.toThrow();
  });

  it("rejects files that are not PDFs", () => {
    expect(() => assertPdfSafe(new TextEncoder().encode("hello"))).toThrow(/not a PDF/);
  });

  it("rejects encryption, JavaScript, launch actions, and open actions", () => {
    expect(() => assertPdfSafe(pdfWith("<< /Encrypt 2 0 R >>"))).toThrow(PdfSafetyError);
    expect(() => assertPdfSafe(pdfWith("<< /Encrypt 2 0 R >>"))).toThrow(/encrypted/);
    expect(() => assertPdfSafe(pdfWith("<< /JavaScript (alert) >>"))).toThrow(/JavaScript/);
    expect(() => assertPdfSafe(pdfWith("<< /JS (alert) >>"))).toThrow(/JavaScript/);
    expect(() => assertPdfSafe(pdfWith("<< /Launch (cmd) >>"))).toThrow(/launch action/);
    expect(() => assertPdfSafe(pdfWith("<< /OpenAction 3 0 R >>"))).toThrow(/open action/);
  });
});

describe("bytesInclude", () => {
  it("finds a token and ignores a shorter buffer", () => {
    const bytes = new TextEncoder().encode("%PDF-1.4 /JS");
    expect(bytesInclude(bytes, "/JS")).toBe(true);
    expect(bytesInclude(bytes, "/Launch")).toBe(false);
    expect(bytesInclude(new Uint8Array([1]), "/JS")).toBe(false);
    expect(bytesInclude(bytes, "")).toBe(false);
  });
});
