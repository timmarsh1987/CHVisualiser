import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import { parseColor } from "./color.js";
import { firstBaseline } from "./coords.js";
import { FontResolutionError } from "./errors.js";
import { createFontMetrics, resolveFontFace, type FontMetrics } from "./fonts.js";
import {
  isJpeg,
  isPng,
  layoutFlow,
  readImageSize,
  type FlowDraw,
  type PlacedBlock,
} from "./flowLayout.js";
import type { LayoutReport } from "./report.js";
import type { DataContext, Template } from "./schema.js";
import { lineX } from "./textLayout.js";

const PAD = 4;

interface FlowResources {
  fonts: Record<string, Uint8Array>;
  images?: Record<string, Uint8Array>;
}

export async function renderFlowDocument(
  template: Template,
  data: DataContext,
  resources: FlowResources,
  inputHash: string,
  generatedAt: Date,
  generatedAtText: string,
): Promise<{ bytes: Uint8Array; report: LayoutReport }> {
  const layout = template.layout;
  const pageSize = template.pages[0]?.size;
  if (!layout || !pageSize) {
    throw new Error("A flow template needs a layout and a page size.");
  }
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  pdf.setTitle(template.name);
  pdf.setLanguage(template.language ?? "en");
  pdf.setSubject(`template ${template.id} version ${template.version}`);
  pdf.setKeywords([template.id, String(template.version), inputHash, generatedAtText]);
  pdf.setCreationDate(generatedAt);
  pdf.setModificationDate(generatedAt);

  const embedded = new Map<string, PDFFont>();
  const metricsCache = new Map<string, FontMetrics>();
  for (const face of template.fonts) {
    for (const fileName of [face.regular, face.bold, face.italic, face.boldItalic]) {
      if (!fileName) continue;
      const bytes = resources.fonts[fileName];
      if (!bytes) continue;
      await embedFont(pdf, fileName, bytes, embedded);
      metricsCache.set(fileName, createFontMetrics(bytes));
    }
  }

  const measure = (text: string, fontSize: number, bold?: boolean, italic?: boolean, family?: string): number => {
    const face = resolveFontFace(template.fonts, family ?? template.defaults.fontFamily, Boolean(bold), Boolean(italic));
    const font = embedded.get(face.fileName);
    if (!font) {
      throw new FontResolutionError(`Font file ${face.fileName} was not provided.`, "missing-file");
    }
    return font.widthOfTextAtSize(text, fontSize);
  };
  const missingGlyphs = (text: string): string[] => {
    const face = resolveFontFace(template.fonts, template.defaults.fontFamily, false, false);
    return metricsCache.get(face.fileName)?.missingGlyphs(text) ?? [];
  };
  const imageSize = (key: string) => {
    const bytes = resources.images?.[key];
    return bytes ? readImageSize(bytes) : null;
  };

  const laidOut = layoutFlow({
    pageWidth: pageSize.width,
    pageHeight: pageSize.height,
    layout,
    data,
    defaults: template.defaults,
    measure,
    imageSize,
    missingGlyphs,
    language: template.language,
  });

  const pageCount = Math.max(1, laidOut.pages.length);
  for (let index = 0; index < pageCount; index += 1) {
    const page = pdf.addPage([pageSize.width, pageSize.height]);
    for (const block of laidOut.pages[index] ?? []) {
      await drawBlock(pdf, page, block, pageSize.height, resources, template, embedded, metricsCache);
    }
  }

  const bytes = await pdf.save({ useObjectStreams: false });
  const report: LayoutReport = { inputHash, regions: laidOut.reports };
  return { bytes, report };
}

async function drawBlock(
  pdf: PDFDocument,
  page: PDFPage,
  block: PlacedBlock,
  pageHeight: number,
  resources: FlowResources,
  template: Template,
  embedded: Map<string, PDFFont>,
  metricsCache: Map<string, FontMetrics>,
): Promise<void> {
  if (block.draw.type === "missing-image") {
    drawFrame(page, block, pageHeight);
    return;
  }
  if (block.draw.type === "image") {
    const bytes = resources.images?.[block.draw.key];
    if (!bytes) {
      drawFrame(page, block, pageHeight);
      return;
    }
    await drawImage(pdf, page, block, pageHeight, bytes);
    return;
  }
  if (block.draw.type === "table") {
    drawTable(page, block, pageHeight, block.draw, template, embedded);
    return;
  }
  drawLines(page, block, pageHeight, block.draw, template, embedded, metricsCache);
}

function drawLines(
  page: PDFPage,
  block: PlacedBlock,
  pageHeight: number,
  draw: Extract<FlowDraw, { type: "text" | "list" }>,
  template: Template,
  embedded: Map<string, PDFFont>,
  metricsCache: Map<string, FontMetrics>,
): void {
  const font = fontFor(draw.style.fontFamily, draw.style.bold, draw.style.italic, template, embedded);
  const metrics = metricsFor(draw.style.fontFamily, draw.style.bold, draw.style.italic, template, metricsCache);
  const parsed = parseColor(draw.style.color);
  const ink = rgb(parsed.red, parsed.green, parsed.blue);
  let baseline = firstBaseline(pageHeight - block.y - PAD, metrics.ascent(draw.style.fontSize));
  const step = draw.style.fontSize * draw.style.lineHeight;
  const innerWidth = Math.max(1, block.width - PAD * 2);
  for (const line of draw.lines) {
    if (line.length > 0) {
      const width = font.widthOfTextAtSize(line, draw.style.fontSize);
      page.drawText(line, {
        x: lineX(draw.style.align, block.x + PAD, innerWidth, width),
        y: baseline,
        size: draw.style.fontSize,
        font,
        color: ink,
      });
    }
    baseline -= step;
  }
}

function drawTable(
  page: PDFPage,
  block: PlacedBlock,
  pageHeight: number,
  draw: Extract<FlowDraw, { type: "table" }>,
  template: Template,
  embedded: Map<string, PDFFont>,
): void {
  const font = fontFor(draw.style.fontFamily, draw.style.bold, draw.style.italic, template, embedded);
  const parsed = parseColor(draw.style.color);
  const ink = rgb(parsed.red, parsed.green, parsed.blue);
  const border = rgb(0.75, 0.75, 0.75);
  const headerFill = rgb(0.93, 0.93, 0.93);
  let top = block.y + PAD;
  const paint = (cells: string[], rowHeight: number, fill: ReturnType<typeof rgb>, bold: boolean): void => {
    const rowFont = bold
      ? fontFor(draw.style.fontFamily, true, draw.style.italic, template, embedded)
      : font;
    let x = block.x + PAD;
    const pdfBottom = pageHeight - top - rowHeight;
    cells.forEach((cell, index) => {
      const width = draw.colWidths[index] ?? 0;
      page.drawRectangle({
        x,
        y: pdfBottom,
        width,
        height: rowHeight,
        borderWidth: 0.4,
        borderColor: border,
        color: fill,
      });
      const textWidth = rowFont.widthOfTextAtSize(cell, draw.style.fontSize);
      const baseline = pdfBottom + (rowHeight - draw.style.fontSize) * 0.35;
      page.drawText(cell, {
        x: lineX(draw.aligns[index] ?? "left", x + 2, Math.max(1, width - 4), textWidth),
        y: baseline,
        size: draw.style.fontSize,
        font: rowFont,
        color: ink,
      });
      x += width;
    });
    top += rowHeight;
  };
  paint(draw.headers, draw.headerHeight, headerFill, true);
  for (const row of draw.rows) paint(row, draw.rowHeight, rgb(1, 1, 1), false);
}

async function drawImage(
  pdf: PDFDocument,
  page: PDFPage,
  block: PlacedBlock,
  pageHeight: number,
  bytes: Uint8Array,
): Promise<void> {
  const image = isJpeg(bytes) ? await pdf.embedJpg(bytes) : isPng(bytes) ? await pdf.embedPng(bytes) : null;
  if (!image) {
    drawFrame(page, block, pageHeight);
    return;
  }
  const innerWidth = Math.max(1, block.width - PAD * 2);
  const innerHeight = Math.max(1, block.height - PAD * 2);
  const scale = Math.min(innerWidth / image.width, innerHeight / image.height);
  const width = image.width * scale;
  const height = image.height * scale;
  const x = block.x + PAD + (innerWidth - width) / 2;
  const pdfBottom = pageHeight - block.y - PAD - (innerHeight + height) / 2;
  page.drawImage(image, { x, y: pdfBottom, width, height });
}

function drawFrame(page: PDFPage, block: PlacedBlock, pageHeight: number): void {
  page.drawRectangle({
    x: block.x,
    y: pageHeight - block.y - block.height,
    width: block.width,
    height: block.height,
    borderWidth: 0.75,
    borderColor: rgb(0.7, 0.7, 0.7),
    color: rgb(0.95, 0.95, 0.95),
  });
}

function fontFor(
  family: string,
  bold: boolean,
  italic: boolean,
  template: Template,
  embedded: Map<string, PDFFont>,
): PDFFont {
  const face = resolveFontFace(template.fonts, family, bold, italic);
  const font = embedded.get(face.fileName);
  if (!font) {
    throw new FontResolutionError(`Font file ${face.fileName} was not provided.`, "missing-file");
  }
  return font;
}

function metricsFor(
  family: string,
  bold: boolean,
  italic: boolean,
  template: Template,
  cache: Map<string, FontMetrics>,
): FontMetrics {
  const face = resolveFontFace(template.fonts, family, bold, italic);
  const metrics = cache.get(face.fileName);
  if (!metrics) {
    throw new FontResolutionError(`Font file ${face.fileName} was not provided.`, "missing-file");
  }
  return metrics;
}

async function embedFont(
  pdf: PDFDocument,
  fileName: string,
  bytes: Uint8Array,
  embedded: Map<string, PDFFont>,
): Promise<void> {
  if (embedded.has(fileName)) return;
  embedded.set(fileName, await pdf.embedFont(bytes, { subset: false }));
}
