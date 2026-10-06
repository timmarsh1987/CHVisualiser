import { readPsd, type Color, type Layer as PsdLayer, type Psd } from 'ag-psd';
import {
  applyImportedName,
  buildImportedDocument,
  importedLayer,
  namedSource,
  textAlignFrom,
  type SourceImportResult,
} from './sourceImport';
import type { DesignerTemplatePage, Layer } from './types';

const READ_ERROR = 'Could not read this Photoshop file.';

export async function importPsdFile(data: ArrayBuffer): Promise<SourceImportResult> {
  if (data.byteLength < 4) throw new Error(READ_ERROR);
  const signature = String.fromCharCode(...new Uint8Array(data.slice(0, 4)));
  if (signature === '8BPB') {
    throw new Error('Photoshop large documents (.psb) can’t be read here. Save the file as a .psd and import that.');
  }
  if (signature !== '8BPS') throw new Error(READ_ERROR);

  let psd: Psd;
  try {
    psd = readPsd(data, {
      skipCompositeImageData: true,
      skipThumbnail: true,
      skipLinkedFilesData: true,
    });
  } catch (error) {
    throw new Error(error instanceof Error && error.message ? error.message : READ_ERROR);
  }

  const nodes = psd.children ?? [];
  const artboards = collectArtboards(nodes);
  const pages =
    artboards.length > 0
      ? artboards.map((board, index) => pageFromArtboard(board, index, psd))
      : [pageFromNodes(nodes, 'Page 1', 'psd-page-1', psd.width, psd.height, { x: 0, y: 0 }, psd)];

  const usable = pages.filter((page) => page.width > 0 && page.height > 0);
  if (usable.length === 0) throw new Error(READ_ERROR);
  return { document: buildImportedDocument(usable), pageCount: usable.length };
}

function collectArtboards(nodes: PsdLayer[]): PsdLayer[] {
  const found: PsdLayer[] = [];
  const walk = (list: PsdLayer[]) => {
    for (const node of list) {
      if (node.artboard) found.push(node);
      if (node.children?.length) walk(node.children);
    }
  };
  walk(nodes);
  return found;
}

function pageFromArtboard(board: PsdLayer, index: number, psd: Psd): DesignerTemplatePage {
  const rect = board.artboard?.rect;
  const left = rect?.left ?? 0;
  const top = rect?.top ?? 0;
  const width = Math.max(1, Math.round((rect?.right ?? psd.width) - left));
  const height = Math.max(1, Math.round((rect?.bottom ?? psd.height) - top));
  return pageFromNodes(
    (board.children ?? []).filter((child) => !child.artboard),
    board.name?.trim() || `Page ${index + 1}`,
    `psd-artboard-${index + 1}`,
    width,
    height,
    { x: left, y: top },
    psd
  );
}

function pageFromNodes(
  nodes: PsdLayer[],
  name: string,
  id: string,
  width: number,
  height: number,
  origin: { x: number; y: number },
  psd: Psd
): DesignerTemplatePage {
  const layers: Layer[] = [];
  appendNodes(nodes, layers, origin, psd, undefined, null);
  return { id, name, width, height, layers };
}

function appendNodes(
  nodes: PsdLayer[],
  layers: Layer[],
  origin: { x: number; y: number },
  psd: Psd,
  parentId: string | undefined,
  inherited: ReturnType<typeof namedSource>
) {
  // ag-psd lists children from the back of the stack to the front.
  let clipBase: ClipBase | null = null;
  for (const node of nodes) {
    const painted = appendNode(node, layers, origin, psd, parentId, inherited, clipBase);
    if (node.clipping) continue;
    clipBase = painted;
  }
}

interface ClipBase {
  canvas: HTMLCanvasElement;
  left: number;
  top: number;
}

function appendNode(
  node: PsdLayer,
  layers: Layer[],
  origin: { x: number; y: number },
  psd: Psd,
  parentId: string | undefined,
  inherited: ReturnType<typeof namedSource>,
  clipBase: ClipBase | null
): ClipBase | null {
  if (node.artboard) return null;
  const name = node.name?.trim() || 'Layer';
  const source = namedSource(name) ?? inherited;
  const box = layerBox(node, origin);

  if (node.children?.length) {
    const group = importedLayer('group', name, box ?? { x: 0, y: 0, width: 1, height: 1 }, parentId);
    group.visible = !node.hidden;
    applyImportedName(group, name, inherited);
    layers.push(group);
    const fill = fillColor(node);
    if (fill && box) {
      const shape = importedLayer('rect', name, box, group.id);
      shape.fill = fill;
      shape.visible = !node.hidden;
      applyImportedName(shape, name, inherited);
      layers.push(shape);
    }
    appendNodes(node.children, layers, origin, psd, group.id, source);
    return null;
  }

  if (!box) return null;
  const text = node.text?.text;
  if (text != null) {
    const layer = importedLayer('text', textName(text, name), box, parentId);
    layer.text = text;
    const style = dominantTextStyle(node);
    layer.fontSize = fontSizePx(node, box.width, box.height, text, style?.fontSize, psd);
    layer.color =
      overlayColor(node) || cssFromColor(enabledSolidFill(node)) || cssFromColor(textFillColor(node)) || '#000000';
    const fontName = style?.font?.name?.trim();
    if (fontName) layer.fontFamily = fontName;
    const align = textAlignFrom(node.text?.paragraphStyle?.justification);
    if (align) layer.align = align;
    layer.visible = !node.hidden;
    applyImportedName(layer, name, inherited);
    layers.push(layer);
    return null;
  }

  if (node.canvas && node.canvas.width > 0 && node.canvas.height > 0) {
    const pixels = layerCanvas(node, clipBase);
    const layer = importedLayer('image', name, box, parentId);
    layer.src = canvasSource(pixels);
    layer.fill = 'transparent';
    layer.visible = !node.hidden;
    applyImportedName(layer, name, inherited);
    layers.push(layer);
    return { canvas: pixels, left: node.left ?? 0, top: node.top ?? 0 };
  }

  const fill = fillColor(node);
  if (fill) {
    const layer = importedLayer('rect', name, box, parentId);
    layer.fill = fill;
    layer.visible = !node.hidden;
    applyImportedName(layer, name, inherited);
    layers.push(layer);
    return null;
  }

  if (node.placedLayer) {
    const layer = importedLayer('image', name, box, parentId);
    layer.objectFit = 'contain';
    layer.fill = '#e8e6e1';
    layer.visible = !node.hidden;
    applyImportedName(layer, name, inherited);
    layers.push(layer);
  }
  return null;
}

function layerBox(
  node: PsdLayer,
  origin: { x: number; y: number }
): { x: number; y: number; width: number; height: number } | null {
  if (node.left == null || node.top == null || node.right == null || node.bottom == null) return null;
  const width = node.right - node.left;
  const height = node.bottom - node.top;
  if (width < 1 || height < 1) return null;
  return { x: node.left - origin.x, y: node.top - origin.y, width, height };
}

function fillColor(node: PsdLayer): string | undefined {
  const vector = node.vectorFill;
  if (vector && vector.type === 'color') return cssFromColor(vector.color);
  const solid = node.effects?.solidFill?.find((effect) => effect.enabled !== false && effect.color);
  return solid ? cssFromColor(solid.color) : undefined;
}

function dominantTextStyle(node: PsdLayer) {
  const base = node.text?.style;
  let best = base;
  let bestLength = 0;
  for (const run of node.text?.styleRuns ?? []) {
    if (run.length > bestLength) {
      best = { ...base, ...run.style };
      bestLength = run.length;
    }
  }
  return best;
}

function textFillColor(node: PsdLayer): Color | undefined {
  if (node.text?.style?.fillColor) return node.text.style.fillColor;
  return node.text?.styleRuns?.find((run) => run.style?.fillColor)?.style?.fillColor;
}

function enabledSolidFill(node: PsdLayer): Color | undefined {
  const solid = node.effects?.solidFill?.find((effect) => effect.enabled !== false && effect.color);
  return solid?.color;
}

function overlayColor(node: PsdLayer): string | undefined {
  const overlays = node.effects?.gradientOverlay;
  if (!overlays) return undefined;
  for (const effect of overlays) {
    if (effect.enabled === false) continue;
    const gradient = effect.gradient;
    const stops = gradient && 'colorStops' in gradient ? gradient.colorStops : undefined;
    if (!stops?.length) continue;
    const mid = stops[Math.min(stops.length - 1, Math.floor(stops.length / 2))];
    const color = cssFromColor(mid?.color);
    if (color) return color;
  }
  return undefined;
}

function layerCanvas(node: PsdLayer, clipBase: ClipBase | null): HTMLCanvasElement {
  let canvas = node.canvas as HTMLCanvasElement;
  if (node.clipping && clipBase && node.left != null && node.top != null) {
    canvas = clipToBase(canvas, node.left, node.top, clipBase);
  }
  const opacity = node.opacity;
  if (opacity != null && opacity < 0.999) canvas = fadeCanvas(canvas, opacity);
  return canvas;
}

function clipToBase(source: HTMLCanvasElement, left: number, top: number, base: ClipBase): HTMLCanvasElement {
  const out = source.ownerDocument.createElement('canvas');
  out.width = source.width;
  out.height = source.height;
  const ctx = out.getContext('2d');
  if (!ctx) return source;
  ctx.drawImage(source, 0, 0);
  ctx.globalCompositeOperation = 'destination-in';
  ctx.drawImage(base.canvas, base.left - left, base.top - top);
  return out;
}

function fadeCanvas(source: HTMLCanvasElement, opacity: number): HTMLCanvasElement {
  const out = source.ownerDocument.createElement('canvas');
  out.width = source.width;
  out.height = source.height;
  const ctx = out.getContext('2d');
  if (!ctx) return source;
  ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
  ctx.drawImage(source, 0, 0);
  return out;
}

function resolutionScale(psd: Psd): number {
  const info = psd.imageResources?.resolutionInfo;
  const raw = info?.verticalResolution || info?.horizontalResolution || 72;
  const ppi = info?.verticalResolutionUnit === 'PPCM' || info?.horizontalResolutionUnit === 'PPCM' ? raw * 2.54 : raw;
  return ppi / 72;
}

function scaleFactor(value: number | undefined): number {
  if (value == null || !Number.isFinite(value) || value <= 0) return 1;
  return value > 3 ? value / 100 : value;
}

function fontSizePx(
  node: PsdLayer,
  boxWidth: number,
  boxHeight: number,
  text: string,
  points: number | undefined,
  psd: Psd
): number {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  const lineCount = Math.max(1, lines.length);
  const longest = Math.max(1, ...lines.map((line) => line.length));
  const heightFit = boxHeight / (lineCount * 1.05);
  const widthFit = boxWidth / (longest * 0.56);
  const fitted = Math.max(1, Math.min(heightFit, widthFit));
  if (!points || !Number.isFinite(points)) return Math.max(1, Math.round(fitted));
  const transform = node.text?.transform;
  const transformScale =
    transform && transform.length >= 4 ? Math.hypot(transform[2] || 0, transform[3] || 0) : 0;
  // A text transform already maps point size into document pixels.
  const scale = transformScale > 0.01 ? transformScale : resolutionScale(psd);
  const px = points * scale * scaleFactor(dominantTextStyle(node)?.verticalScale);
  return Math.max(1, Math.round(Math.min(px, fitted)));
}

function textName(text: string, fallback: string): string {
  const line = text.split('\n').map((part) => part.trim()).find(Boolean);
  if (!line) return fallback;
  return line.length > 40 ? `${line.slice(0, 40)}…` : line;
}

function canvasSource(canvas: HTMLCanvasElement): string {
  const maxEdge = 1600;
  const longest = Math.max(canvas.width, canvas.height);
  if (longest <= maxEdge) return canvas.toDataURL('image/png');
  const scale = maxEdge / longest;
  const copy = canvas.ownerDocument.createElement('canvas');
  copy.width = Math.max(1, Math.round(canvas.width * scale));
  copy.height = Math.max(1, Math.round(canvas.height * scale));
  copy.getContext('2d')?.drawImage(canvas, 0, 0, copy.width, copy.height);
  return copy.toDataURL('image/png');
}

function cssFromColor(color: Color | undefined): string | undefined {
  if (!color || typeof color !== 'object') return undefined;
  const fr = channel(color, 'fr');
  if (fr != null) {
    return rgba(byte(fr, true), byte(channel(color, 'fg') ?? 0, true), byte(channel(color, 'fb') ?? 0, true), 1);
  }
  const r = channel(color, 'r');
  const g = channel(color, 'g');
  const b = channel(color, 'b');
  if (r != null && g != null && b != null) {
    const unit = r <= 1 && g <= 1 && b <= 1;
    const alpha = channel(color, 'a') ?? 1;
    return rgba(byte(r, unit), byte(g, unit), byte(b, unit), alpha > 1 ? alpha / 255 : alpha);
  }
  const c = channel(color, 'c');
  const m = channel(color, 'm');
  const y = channel(color, 'y');
  const k = channel(color, 'k');
  if (c != null && m != null && y != null && k != null) {
    return rgba(
      Math.round(255 * (1 - unitChannel(c)) * (1 - unitChannel(k))),
      Math.round(255 * (1 - m) * (1 - unitChannel(k))),
      Math.round(255 * (1 - y) * (1 - unitChannel(k))),
      1
    );
  }
  if (k != null) {
    const value = Math.round((1 - unitChannel(k)) * 255);
    return rgba(value, value, value, 1);
  }
  return undefined;
}

function channel(color: object, key: string): number | undefined {
  const value = (color as Record<string, unknown>)[key];
  return typeof value === 'number' ? value : undefined;
}

function unitChannel(value: number): number {
  if (value > 1) return Math.max(0, Math.min(1, value / 255));
  return Math.max(0, Math.min(1, value));
}

function byte(value: number, unit: boolean): number {
  return Math.max(0, Math.min(255, Math.round(unit ? value * 255 : value)));
}

function rgba(r: number, g: number, b: number, alpha: number): string {
  const hex = [r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('');
  if (alpha >= 0.995) return `#${hex}`;
  return `rgba(${r}, ${g}, ${b}, ${Math.round(alpha * 100) / 100})`;
}
