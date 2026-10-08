import { resolveBinding } from "./bindings.js";
import { applyFormat } from "./format.js";
import { FormatError } from "./errors.js";
import type { RegionReport } from "./report.js";
import type { DataContext, FlowBlock, FlowLayout, Template } from "./schema.js";
import { resolveStyle, type ResolvedStyle } from "./style.js";
import { ellipsizeLine, wrapLines } from "./textLayout.js";

const PAD = 4;
const HEADER_EXTRA = 6;
const ROW_EXTRA = 4;
const MISSING_IMAGE_HEIGHT = 72;
const MAX_PAGES = 20;

export interface ImageSize {
  width: number;
  height: number;
}

export interface LayoutFlowOptions {
  pageWidth: number;
  pageHeight: number;
  layout: FlowLayout;
  data: DataContext;
  defaults: Template["defaults"];
  measure: (text: string, fontSize: number, bold?: boolean, italic?: boolean, family?: string) => number;
  imageSize?: (key: string) => ImageSize | null;
  missingGlyphs?: (text: string) => string[];
  language?: string;
}

export type FlowDraw =
  | { type: "text" | "list"; lines: string[]; style: ResolvedStyle }
  | { type: "image"; key: string }
  | { type: "missing-image" }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      colWidths: number[];
      aligns: ("left" | "right" | "center")[];
      style: ResolvedStyle;
      headerHeight: number;
      rowHeight: number;
    };

export interface PlacedBlock {
  blockId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  draw: FlowDraw;
}

export interface LayoutFlowResult {
  pages: PlacedBlock[][];
  reports: RegionReport[];
}

interface Item {
  blockId: string;
  column: number;
  span: number;
  width: number;
  content: Content;
  report: RegionReport;
  yOffset: number;
}

type Content =
  | { kind: "empty" }
  | { kind: "text"; lines: string[]; style: ResolvedStyle }
  | { kind: "list"; lines: string[]; style: ResolvedStyle }
  | { kind: "image"; key: string | null; pixels: ImageSize | null }
  | {
      kind: "table";
      headers: string[];
      rows: string[][];
      colWidths: number[];
      aligns: ("left" | "right" | "center")[];
      style: ResolvedStyle;
    };

interface Slice {
  height: number;
  draw: FlowDraw | null;
  rest: Item | null;
}

export function columnWidth(contentWidth: number, columnCount: number, columnGap: number): number {
  return (contentWidth - (columnCount - 1) * columnGap) / columnCount;
}

export function spanWidth(span: number, colWidth: number, columnGap: number): number {
  return span * colWidth + Math.max(0, span - 1) * columnGap;
}

export function readImageSize(bytes: Uint8Array): ImageSize | null {
  if (isPng(bytes) && bytes.length >= 24) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    return { width: view.getUint32(16), height: view.getUint32(20) };
  }
  if (isJpeg(bytes)) return readJpegSize(bytes);
  return null;
}

export function isPng(bytes: Uint8Array): boolean {
  return bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
}

export function isJpeg(bytes: Uint8Array): boolean {
  return bytes.length > 2 && bytes[0] === 0xff && bytes[1] === 0xd8;
}

export function layoutFlow(options: LayoutFlowOptions): LayoutFlowResult {
  const { layout, pageWidth, pageHeight } = options;
  const contentWidth = pageWidth - layout.margin * 2;
  const contentHeight = pageHeight - layout.margin * 2;
  const colWidth = columnWidth(contentWidth, layout.columnCount, layout.columnGap);
  const pages: PlacedBlock[][] = [[]];
  const reports: RegionReport[] = [];
  const continued = new Set<string>();
  let pageIndex = 0;
  let cursorY = layout.margin;

  const placeRow = (items: Item[], allowMove: boolean): void => {
    const natural = Math.max(0, ...items.map((item) => naturalHeight(item) + item.yOffset));
    if (natural === 0) return;
    const remaining = pageHeight - layout.margin - cursorY;
    if (natural <= remaining + 0.01) {
      commit(items, items.map((item) => fullSlice(item)));
      return;
    }
    if (allowMove && cursorY > layout.margin + 0.01) {
      nextPage();
      placeRow(items, false);
      return;
    }
    const slices = items.map((item) => sliceItem(item, contentHeight));
    commit(items, slices);
    const rest = slices.flatMap((slice) => (slice.rest ? [slice.rest] : []));
    if (rest.length === 0) return;
    if (pageIndex + 1 >= MAX_PAGES) {
      for (const item of rest) {
        const report = reports.find((entry) => entry.regionId === item.blockId);
        if (report) {
          report.overflow = true;
          report.status = "overflow";
          report.message = "Content was cut off after the page limit.";
        }
      }
      return;
    }
    for (const item of rest) continued.add(item.blockId);
    nextPage();
    placeRow(rest, false);
  };

  const commit = (items: Item[], slices: Slice[]): void => {
    const height = Math.max(0, ...slices.map((slice, index) => slice.height + (items[index]?.yOffset ?? 0)));
    if (height === 0) return;
    const page = pages[pageIndex];
    if (!page) return;
    items.forEach((item, index) => {
      const slice = slices[index];
      if (!slice?.draw || slice.height <= 0) return;
      page.push({
        blockId: item.blockId,
        x: layout.margin + item.column * (colWidth + layout.columnGap),
        y: cursorY + item.yOffset,
        width: item.width,
        height: slice.height,
        draw: slice.draw,
      });
    });
    cursorY += height + layout.rowGap;
  };

  const nextPage = (): void => {
    pageIndex += 1;
    cursorY = layout.margin;
    pages.push([]);
  };

  for (const row of layout.rows) {
    let column = 0;
    const items: Item[] = [];
    for (const block of row.blocks) {
      const width = spanWidth(block.span, colWidth, layout.columnGap);
      const stacked = block.type === "stack" ? block.items : [block];
      let yOffset = 0;
      stacked.forEach((child, childIndex) => {
        const prepared = prepareBlock(child, width, options);
        const item: Item = {
          blockId: child.id,
          column,
          span: block.span,
          width,
          content: prepared.content,
          report: prepared.report,
          yOffset,
        };
        items.push(item);
        if (child.type !== "spacer") reports.push(prepared.report);
        yOffset += naturalHeight(item);
        if (childIndex < stacked.length - 1) yOffset += layout.rowGap;
      });
      column += block.span;
    }
    placeRow(items, true);
  }

  for (const id of continued) {
    const report = reports.find((entry) => entry.regionId === id);
    if (!report || report.status === "overflow" || report.status === "unbound" || report.status === "error") continue;
    const note = report.message ? `${report.message} Continued on the next page.` : "Continued on the next page.";
    report.message = note;
  }

  return { pages: pages.filter((page, index) => page.length > 0 || index === 0), reports };
}

function prepareBlock(
  block: FlowBlock,
  width: number,
  options: LayoutFlowOptions,
): { content: Content; report: RegionReport } {
  if (block.type === "image") return prepareImage(block, options);
  if (block.type === "table") return prepareTable(block, width, options);
  if (block.type === "list") return prepareList(block, width, options);
  if (block.type === "spacer" || block.type === "stack") {
    return { content: { kind: "empty" }, report: reportFor(block.id, "ok") };
  }
  return prepareText(block, width, options);
}

function prepareText(
  block: Extract<FlowBlock, { type: "text" }>,
  width: number,
  options: LayoutFlowOptions,
): { content: Content; report: RegionReport } {
  const style = resolveStyle(block.style ?? {}, options.defaults);
  const resolved = resolveBinding(block.binding, options.data);
  if (resolved.status !== "ok") {
    return {
      content: { kind: "empty" },
      report: reportFor(block.id, resolved.status === "unsupported" ? "unsupported" : "unbound", {
        unboundFields: [block.binding.kind === "property" ? block.binding.path : `${block.binding.path}>${block.binding.property}`],
        message: resolved.status === "unsupported" ? "Computed bindings are not supported yet." : "Field is unbound.",
      }),
    };
  }
  let text = "";
  try {
    text = applyFormat(resolved.value, undefined, options.language ?? "en");
  } catch (error) {
    const message = error instanceof FormatError ? error.message : "Value could not be formatted.";
    return { content: { kind: "empty" }, report: reportFor(block.id, "error", { message }) };
  }
  const lines = wrapBlock(text, width, style, options.measure);
  return {
    content: { kind: "text", lines, style },
    report: reportFor(block.id, "ok", {
      fontSizeUsed: style.fontSize,
      missingGlyphs: options.missingGlyphs?.(text) ?? [],
    }),
  };
}

function prepareList(
  block: Extract<FlowBlock, { type: "list" }>,
  width: number,
  options: LayoutFlowOptions,
): { content: Content; report: RegionReport } {
  const style = resolveStyle(block.style ?? {}, options.defaults);
  const resolved = resolveBinding(block.binding, options.data);
  if (resolved.status !== "ok" || !Array.isArray(resolved.value)) {
    return {
      content: { kind: "empty" },
      report: reportFor(block.id, "unbound", {
        unboundFields: [block.binding.path],
        message: "List field is unbound.",
      }),
    };
  }
  const items: string[] = [];
  for (const item of resolved.value) {
    if (typeof item === "string" || typeof item === "number" || typeof item === "boolean") {
      try {
        items.push(applyFormat(item, undefined, options.language ?? "en"));
      } catch {
        items.push("");
      }
      continue;
    }
    if (item && typeof item === "object" && block.itemProperty) {
      const record = item as Record<string, unknown>;
      if (!Object.prototype.hasOwnProperty.call(record, block.itemProperty)) continue;
      try {
        items.push(applyFormat(record[block.itemProperty], undefined, options.language ?? "en"));
      } catch {
        items.push("");
      }
      continue;
    }
    return {
      content: { kind: "empty" },
      report: reportFor(block.id, "error", {
        message: "List items are objects and need an item property.",
      }),
    };
  }
  const bulletWidth = options.measure("- ", style.fontSize, style.bold, style.italic, style.fontFamily);
  const lines: string[] = [];
  for (const item of items) {
    const wrapped = wrapLines(item, Math.max(1, width - PAD * 2 - bulletWidth), (line) =>
      options.measure(line, style.fontSize, style.bold, style.italic, style.fontFamily),
    );
    if (wrapped.length === 0) {
      lines.push("- ");
      continue;
    }
    lines.push(`- ${wrapped[0] ?? ""}`);
    for (const extra of wrapped.slice(1)) lines.push(`  ${extra}`);
  }
  return {
    content: { kind: "list", lines, style },
    report: reportFor(block.id, "ok", {
      fontSizeUsed: style.fontSize,
      missingGlyphs: options.missingGlyphs?.(items.join(" ")) ?? [],
    }),
  };
}

function prepareTable(
  block: Extract<FlowBlock, { type: "table" }>,
  width: number,
  options: LayoutFlowOptions,
): { content: Content; report: RegionReport } {
  const style = resolveStyle(block.style ?? {}, options.defaults);
  const source = tableRows(block, options);
  if (source.report) return { content: { kind: "empty" }, report: source.report };
  const inner = Math.max(1, width - PAD * 2);
  const shares = block.columns.map((column) => column.width);
  const total = shares.reduce((sum, share) => sum + share, 0);
  const colWidths = shares.map((share) => inner * (share / total));
  const aligns = block.columns.map((column) => column.align ?? "left");
  const cellStyle = style;
  const headerStyle = { ...style, bold: true };
  let truncated = false;
  const rows = source.rows.map((row) => {
    const record = row && typeof row === "object" && !Array.isArray(row) ? (row as DataContext) : null;
    return block.columns.map((column, index) => {
      const raw = record ? resolveBinding(column.binding, record) : { status: "unbound" as const };
      const value = raw.status === "ok" ? safeText(raw.value, options.language) : "";
      const fitted = fitCell(value, Math.max(1, (colWidths[index] ?? 1) - 4), cellStyle, options.measure);
      if (fitted.truncated) truncated = true;
      return fitted.text;
    });
  });
  const headers = block.columns.map((column, index) => {
    const fitted = fitCell(column.header, Math.max(1, (colWidths[index] ?? 1) - 4), headerStyle, options.measure);
    if (fitted.truncated) truncated = true;
    return fitted.text;
  });
  return {
    content: { kind: "table", headers, rows, colWidths, aligns, style },
    report: reportFor(block.id, truncated ? "truncated" : "ok", {
      fontSizeUsed: style.fontSize,
      truncated,
      message: truncated ? "Table text was truncated to fit a column." : null,
    }),
  };
}

function tableRows(
  block: Extract<FlowBlock, { type: "table" }>,
  options: LayoutFlowOptions,
): { rows: unknown[]; report?: undefined } | { rows?: undefined; report: RegionReport } {
  if (!block.binding) return { rows: [options.data] };
  const resolved = resolveBinding(block.binding, options.data);
  if (resolved.status !== "ok" || !Array.isArray(resolved.value)) {
    return {
      report: reportFor(block.id, "unbound", {
        unboundFields: [block.binding.path],
        message: "Table field is unbound.",
      }),
    };
  }
  return { rows: resolved.value };
}

function prepareImage(
  block: Extract<FlowBlock, { type: "image" }>,
  options: LayoutFlowOptions,
): { content: Content; report: RegionReport } {
  const resolved = resolveBinding(block.binding, options.data);
  if (resolved.status !== "ok") {
    return {
      content: { kind: "image", key: null, pixels: null },
      report: reportFor(block.id, "unbound", {
        unboundFields: [block.binding.path],
        message: "Image field is unbound.",
      }),
    };
  }
  const key = imageLookupKey(resolved.value, options.language ?? "en");
  const pixels = key ? (options.imageSize?.(key) ?? null) : null;
  if (!key || !pixels) {
    return {
      content: { kind: "image", key, pixels: null },
      report: reportFor(block.id, "error", { message: "Image was not provided." }),
    };
  }
  return {
    content: { kind: "image", key, pixels },
    report: reportFor(block.id, "ok"),
  };
}

function fullSlice(item: Item): Slice {
  return { height: naturalHeight(item), draw: drawOf(item.content), rest: null };
}

function sliceItem(item: Item, maxHeight: number): Slice {
  if (item.content.kind === "empty") return { height: 0, draw: null, rest: null };
  if (item.content.kind === "image") {
    return { height: Math.min(naturalHeight(item), maxHeight), draw: drawOf(item.content), rest: null };
  }
  if (item.content.kind === "text" || item.content.kind === "list") {
    const style = item.content.style;
    const lineBox = style.fontSize * style.lineHeight;
    const natural = textHeight(item.content.lines.length, style);
    if (natural <= maxHeight + 0.01) return fullSlice(item);
    let fit = Math.floor((maxHeight - PAD * 2) / lineBox);
    if (fit < 1) fit = 1;
    if (fit >= item.content.lines.length) return fullSlice(item);
    const kept = item.content.lines.slice(0, fit);
    const restLines = item.content.lines.slice(fit);
    return {
      height: textHeight(kept.length, style),
      draw: { type: item.content.kind, lines: kept, style },
      rest: {
        ...item,
        content: { ...item.content, lines: restLines },
      },
    };
  }
  const { style, rows, headers } = item.content;
  const headerHeight = style.fontSize * style.lineHeight + HEADER_EXTRA;
  const rowHeight = style.fontSize * style.lineHeight + ROW_EXTRA;
  const natural = tableHeight(rows.length, headerHeight, rowHeight);
  if (natural <= maxHeight + 0.01) return fullSlice(item);
  let fit = Math.floor((maxHeight - PAD * 2 - headerHeight) / rowHeight);
  if (fit < 1) fit = rows.length > 0 ? 1 : 0;
  if (fit >= rows.length) return fullSlice(item);
  return {
    height: tableHeight(fit, headerHeight, rowHeight),
    draw: {
      type: "table",
      headers,
      rows: rows.slice(0, fit),
      colWidths: item.content.colWidths,
      aligns: item.content.aligns,
      style,
      headerHeight,
      rowHeight,
    },
    rest: {
      ...item,
      content: { ...item.content, rows: rows.slice(fit) },
    },
  };
}

function drawOf(content: Content): FlowDraw | null {
  if (content.kind === "empty") return null;
  if (content.kind === "text" || content.kind === "list") {
    if (content.lines.length === 0) return null;
    return { type: content.kind, lines: content.lines, style: content.style };
  }
  if (content.kind === "image") {
    if (!content.key || !content.pixels) return { type: "missing-image" };
    return { type: "image", key: content.key };
  }
  const headerHeight = content.style.fontSize * content.style.lineHeight + HEADER_EXTRA;
  const rowHeight = content.style.fontSize * content.style.lineHeight + ROW_EXTRA;
  return {
    type: "table",
    headers: content.headers,
    rows: content.rows,
    colWidths: content.colWidths,
    aligns: content.aligns,
    style: content.style,
    headerHeight,
    rowHeight,
  };
}

function naturalHeight(item: Item): number {
  if (item.content.kind === "empty") return 0;
  if (item.content.kind === "text" || item.content.kind === "list") {
    return textHeight(item.content.lines.length, item.content.style);
  }
  if (item.content.kind === "image") {
    if (!item.content.pixels) return MISSING_IMAGE_HEIGHT;
    const inner = Math.max(1, item.width - PAD * 2);
    return PAD * 2 + inner * (item.content.pixels.height / item.content.pixels.width);
  }
  const headerHeight = item.content.style.fontSize * item.content.style.lineHeight + HEADER_EXTRA;
  const rowHeight = item.content.style.fontSize * item.content.style.lineHeight + ROW_EXTRA;
  return tableHeight(item.content.rows.length, headerHeight, rowHeight);
}

function textHeight(lineCount: number, style: ResolvedStyle): number {
  if (lineCount <= 0) return 0;
  return PAD * 2 + lineCount * style.fontSize * style.lineHeight;
}

function tableHeight(rowCount: number, headerHeight: number, rowHeight: number): number {
  return PAD * 2 + headerHeight + rowCount * rowHeight;
}

function wrapBlock(
  text: string,
  width: number,
  style: ResolvedStyle,
  measure: LayoutFlowOptions["measure"],
): string[] {
  if (text.length === 0) return [];
  return wrapLines(text, Math.max(1, width - PAD * 2), (line) =>
    measure(line, style.fontSize, style.bold, style.italic, style.fontFamily),
  );
}

function fitCell(
  text: string,
  width: number,
  style: ResolvedStyle,
  measure: LayoutFlowOptions["measure"],
): { text: string; truncated: boolean } {
  if (measure(text, style.fontSize, style.bold, style.italic, style.fontFamily) <= width) {
    return { text, truncated: false };
  }
  return {
    text: ellipsizeLine(text, width, (line) => measure(line, style.fontSize, style.bold, style.italic, style.fontFamily)),
    truncated: true,
  };
}

function imageLookupKey(value: unknown, language: string): string {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (Array.isArray(value)) {
    for (const item of value) {
      const key = imageLookupKey(item, language);
      if (key) return key;
    }
    return "";
  }
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.id === "number" && Number.isFinite(record.id)) return String(record.id);
    if (typeof record.id === "string" && record.id.trim()) return record.id.trim();
  }
  return safeText(value, language);
}

function safeText(value: unknown, language = "en"): string {
  try {
    return applyFormat(value, undefined, language);
  } catch {
    return "";
  }
}

function reportFor(
  regionId: string,
  status: RegionReport["status"],
  extra: Partial<RegionReport> = {},
): RegionReport {
  return {
    regionId,
    status,
    fontSizeUsed: extra.fontSizeUsed ?? null,
    truncated: extra.truncated ?? false,
    overflow: extra.overflow ?? false,
    missingGlyphs: extra.missingGlyphs ?? [],
    unboundFields: extra.unboundFields ?? [],
    message: extra.message ?? null,
  };
}

function readJpegSize(bytes: Uint8Array): ImageSize | null {
  let offset = 2;
  while (offset + 9 < bytes.length) {
    if (bytes[offset] !== 0xff) return null;
    const marker = bytes[offset + 1] ?? 0;
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      const height = ((bytes[offset + 5] ?? 0) << 8) + (bytes[offset + 6] ?? 0);
      const width = ((bytes[offset + 7] ?? 0) << 8) + (bytes[offset + 8] ?? 0);
      return { width, height };
    }
    const length = ((bytes[offset + 2] ?? 0) << 8) + (bytes[offset + 3] ?? 0);
    if (length < 2) return null;
    offset += 2 + length;
  }
  return null;
}
