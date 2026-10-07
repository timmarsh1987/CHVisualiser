import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import { resolveBinding } from "./bindings.js";
import { parseColor } from "./color.js";
import { firstBaseline, topLeftRectToPdf } from "./coords.js";
import { FontResolutionError, FormatError, PdfSafetyError } from "./errors.js";
import { applyFormat } from "./format.js";
import { createFontMetrics, resolveFontFace, type FontMetrics } from "./fonts.js";
import { parseGeneratedAt } from "./generatedAt.js";
import { hashInput } from "./hash.js";
import { assertPdfSafe } from "./pdfSafety.js";
import { emptyRegionReport, type LayoutReport, type RegionReport } from "./report.js";
import type { DataContext, Region, Template } from "./schema.js";
import { resolveStyle } from "./style.js";
import { layoutText, lineX, type TextLayout } from "./textLayout.js";
import { renderFlowDocument } from "./flowDraw.js";

export interface RenderResources {
  backgroundPdf?: Uint8Array;
  fonts: Record<string, Uint8Array>;
  images?: Record<string, Uint8Array>;
  generatedAt: string;
}

export interface RenderResult {
  bytes: Uint8Array;
  report: LayoutReport;
}

export async function renderDocument(
  template: Template,
  dataContext: DataContext,
  resources: RenderResources,
): Promise<RenderResult> {
  const generatedAt = parseGeneratedAt(resources.generatedAt);
  const inputHash = await hashInput(dataContext);
  if (template.layout) {
    return renderFlowDocument(template, dataContext, resources, inputHash, generatedAt, resources.generatedAt);
  }
  if (!resources.backgroundPdf) {
    throw new Error("A background PDF is required for this template.");
  }
  assertPdfSafe(resources.backgroundPdf);
  const pdf = await loadBackground(resources.backgroundPdf);
  pdf.registerFontkit(fontkit);
  applyMetadata(pdf, template, inputHash, resources.generatedAt, generatedAt);

  const pages = pdf.getPages();
  const embedded = new Map<string, PDFFont>();
  const metricsCache = new Map<string, FontMetrics>();
  const regions: RegionReport[] = [];

  for (const pageDef of template.pages) {
    const page = pages[pageDef.pageIndex];
    for (const region of pageDef.regions) {
      if (!page) {
        regions.push(
          emptyRegionReport(
            region.id,
            "error",
            `Page index ${pageDef.pageIndex} is not in the background PDF.`,
          ),
        );
        continue;
      }
      regions.push(
        await drawRegion(pdf, page, region, template, dataContext, resources, embedded, metricsCache),
      );
    }
  }

  const bytes = await pdf.save({ useObjectStreams: false });
  return { bytes, report: { inputHash, regions } };
}

async function loadBackground(bytes: Uint8Array): Promise<PDFDocument> {
  try {
    return await PDFDocument.load(bytes);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown PDF error";
    if (/encrypt/i.test(message)) {
      throw new PdfSafetyError("This PDF is encrypted or password protected.");
    }
    throw new PdfSafetyError(`The background PDF could not be read. ${message}`);
  }
}

function applyMetadata(
  pdf: PDFDocument,
  template: Template,
  inputHash: string,
  generatedAt: string,
  generatedDate: Date,
): void {
  pdf.setTitle(template.name);
  pdf.setLanguage(template.language ?? "en");
  pdf.setSubject(`template ${template.id} version ${template.version}`);
  pdf.setKeywords([template.id, String(template.version), inputHash, generatedAt]);
  pdf.setCreationDate(generatedDate);
  pdf.setModificationDate(generatedDate);
}

async function drawRegion(
  pdf: PDFDocument,
  page: PDFPage,
  region: Region,
  template: Template,
  dataContext: DataContext,
  resources: RenderResources,
  embedded: Map<string, PDFFont>,
  metricsCache: Map<string, FontMetrics>,
): Promise<RegionReport> {
  const style = resolveStyle(region.style, template.defaults);
  let face;
  try {
    face = resolveFontFace(template.fonts, style.fontFamily, style.bold, style.italic);
  } catch (error) {
    if (error instanceof FontResolutionError && error.code === "missing-family") {
      return emptyRegionReport(region.id, "error", error.message);
    }
    throw error;
  }

  const source = region.type === "static" ? { text: region.text, overflow: "shrink" as const } : resolveText(region, dataContext, template.language);
  if (source.report) return source.report;

  const fontBytes = resources.fonts[face.fileName];
  if (!fontBytes) {
    throw new FontResolutionError(`Font file ${face.fileName} was not provided.`, "missing-file");
  }
  const pdfFont = await embedFont(pdf, face.fileName, fontBytes, embedded);
  const metrics = metricsFor(face.fileName, fontBytes, metricsCache);
  const layout = layoutText({
    text: source.text,
    measure: (line, size) => pdfFont.widthOfTextAtSize(line, size),
    missingGlyphs: (text) => metrics.missingGlyphs(text),
    maxWidth: region.rect.width,
    maxHeight: region.rect.height,
    fontSize: style.fontSize,
    minSize: style.minSize,
    lineHeight: style.lineHeight,
    overflow: source.overflow,
    maxLines: region.type === "text" ? region.maxLines : undefined,
  });

  const pdfRect = topLeftRectToPdf(region.rect, page.getHeight());
  if (region.coverFill && layout.draw) {
    page.drawRectangle({
      x: pdfRect.x,
      y: pdfRect.y,
      width: pdfRect.width,
      height: pdfRect.height,
      color: rgb(1, 1, 1),
    });
  }
  if (layout.draw) {
    drawLines(page, layout, pdfRect, style.align, style.lineHeight, pdfFont, style.color, metrics);
  }

  return reportForLayout(region.id, layout, face.fallback);
}

function resolveText(
  region: Extract<Region, { type: "text" }>,
  dataContext: DataContext,
  language: string | undefined,
): { text: string; overflow: "shrink" | "truncate" | "error"; report?: undefined } | { report: RegionReport; text?: undefined; overflow?: undefined } {
  const resolved = resolveBinding(region.binding, dataContext);
  if (resolved.status === "unsupported") {
    return {
      report: emptyRegionReport(
        region.id,
        "unsupported",
        "Computed bindings are not supported yet.",
      ),
    };
  }
  if (resolved.status === "unbound") {
    const report = emptyRegionReport(region.id, "unbound", `Field ${resolved.path} is unbound.`);
    report.unboundFields = [resolved.path];
    return { report };
  }
  if (Array.isArray(resolved.value) || (typeof resolved.value === "object" && resolved.value !== null && !(resolved.value instanceof Date))) {
    return {
      report: emptyRegionReport(region.id, "error", "This binding did not resolve to text."),
    };
  }
  try {
    return {
      text: applyFormat(resolved.value, region.format, language ?? "en"),
      overflow: region.overflow ?? "shrink",
    };
  } catch (error) {
    if (error instanceof FormatError) {
      return { report: emptyRegionReport(region.id, "error", error.message) };
    }
    throw error;
  }
}

function reportForLayout(regionId: string, layout: TextLayout, fallback: string | null): RegionReport {
  let status: RegionReport["status"] = "ok";
  let message: string | null = null;
  if (!layout.draw && layout.overflow) {
    status = "error";
    message = "Text does not fit in the region.";
  } else if (layout.truncated) {
    status = "truncated";
    message = "Text was truncated to fit the region.";
  } else if (layout.overflow) {
    status = "overflow";
    message = "Text does not fit at the minimum size.";
  }
  if (fallback) message = message ? `${message} ${fallback}` : fallback;
  return {
    regionId,
    status,
    fontSizeUsed: layout.fontSize,
    truncated: layout.truncated,
    overflow: layout.overflow,
    missingGlyphs: layout.missingGlyphs,
    unboundFields: [],
    message,
  };
}

function drawLines(
  page: PDFPage,
  layout: TextLayout,
  pdfRect: { x: number; y: number; width: number; height: number },
  align: "left" | "right" | "center",
  lineHeight: number,
  font: PDFFont,
  color: string,
  metrics: FontMetrics,
): void {
  const parsed = parseColor(color);
  const ink = rgb(parsed.red, parsed.green, parsed.blue);
  let baseline = firstBaseline(pdfRect.y + pdfRect.height, metrics.ascent(layout.fontSize));
  const step = layout.fontSize * lineHeight;
  for (const line of layout.lines) {
    if (line.text.length > 0) {
      const width = font.widthOfTextAtSize(line.text, layout.fontSize);
      page.drawText(line.text, {
        x: lineX(align, pdfRect.x, pdfRect.width, width),
        y: baseline,
        size: layout.fontSize,
        font,
        color: ink,
      });
    }
    baseline -= step;
  }
}

async function embedFont(
  pdf: PDFDocument,
  fileName: string,
  bytes: Uint8Array,
  embedded: Map<string, PDFFont>,
): Promise<PDFFont> {
  const cached = embedded.get(fileName);
  if (cached) return cached;
  const font = await pdf.embedFont(bytes, { subset: false });
  embedded.set(fileName, font);
  return font;
}

function metricsFor(fileName: string, bytes: Uint8Array, cache: Map<string, FontMetrics>): FontMetrics {
  const cached = cache.get(fileName);
  if (cached) return cached;
  const metrics = createFontMetrics(bytes);
  cache.set(fileName, metrics);
  return metrics;
}
