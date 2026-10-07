import { decodePDFRawStream, PDFArray, PDFDocument, PDFRawStream, PDFRef } from "pdf-lib";
import { LIBERATION_SANS, parseTemplate, type Template } from "../src/index.js";

export async function blankPdf(): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.addPage([612, 792]);
  return pdf.save();
}

export async function pageContent(bytes: Uint8Array): Promise<string> {
  const pdf = await PDFDocument.load(bytes);
  const parts: string[] = [];
  for (const page of pdf.getPages()) {
    const contents = page.node.Contents();
    if (!contents) continue;
    const entries = contents instanceof PDFArray ? contents.asArray() : [contents];
    for (const entry of entries) {
      const stream = entry instanceof PDFRef ? pdf.context.lookup(entry) : entry;
      if (stream instanceof PDFRawStream) {
        parts.push(Buffer.from(decodePDFRawStream(stream).decode()).toString("latin1"));
      }
    }
  }
  return parts.join("\n");
}

export function decodeAsciiHex(content: string): string {
  return content.replace(/<([0-9A-Fa-f]+)>/g, (match, hex: string) => {
    if (hex.length % 2 !== 0) return match;
    let text = "";
    for (let index = 0; index < hex.length; index += 2) {
      const code = Number.parseInt(hex.slice(index, index + 2), 16);
      if (code < 32 || code > 126) return match;
      text += String.fromCharCode(code);
    }
    return text;
  });
}

export async function markedPdf(): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([612, 792]);
  page.drawText("BACKGROUND", { x: 72, y: 36, size: 12 });
  return pdf.save();
}

export function textTemplate(region: Record<string, unknown>): Template {
  return parseTemplate({
    id: "tpl-1",
    name: "Sample sheet",
    version: 1,
    language: "en",
    fonts: [LIBERATION_SANS],
    defaults: { fontFamily: "Liberation Sans", fontSize: 12, color: "#111111" },
    pages: [
      {
        pageIndex: 0,
        size: { width: 612, height: 792 },
        regions: [region],
      },
    ],
  });
}

export function staticRegion(text = "Static label"): Record<string, unknown> {
  return {
    id: "static-1",
    label: "Static",
    type: "static",
    text,
    rect: { x: 72, y: 72, width: 200, height: 24 },
    style: { fontSize: 12, color: "#000000", align: "left", lineHeight: 1.2 },
  };
}

export function textRegion(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    id: "title",
    label: "Title",
    type: "text",
    binding: { kind: "property", path: "Product.Name" },
    rect: { x: 72, y: 110, width: 240, height: 24 },
    style: { fontSize: 12, minSize: 8, color: "#000000", align: "left", lineHeight: 1.2 },
    overflow: "shrink",
    ...overrides,
  };
}
