import { createLayerId } from './document';
import { assignMagicStrings } from './fields';
import { resolveCanvasPresetId } from './printPresets';
import {
  applySourceLayer,
  classifySourceLayer,
  defaultBrandSettings,
  type SourceLayerClass,
} from './templateSettings';
import type { DesignerDocument, DesignerTemplatePage, Layer } from './types';

const POINTS_TO_PX = 96 / 72;
const READ_ERROR = 'Could not read this IDML file.';

const ITEM_TAGS = new Set(['TextFrame', 'Rectangle', 'Oval', 'Polygon', 'Group']);
const GRAPHIC_TAGS = new Set(['Image', 'EPS', 'PDF', 'WMF', 'PICT', 'SVG']);
export interface IdmlImportResult {
  document: DesignerDocument;
  pageCount: number;
}

interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  tx: number;
  ty: number;
}

interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface PageSpace {
  width: number;
  height: number;
  originX: number;
  originY: number;
}

const IDENTITY: Matrix = { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 };

interface SourceLayerRecord extends SourceLayerClass {
  id: string;
  name: string;
  visible: boolean;
}

export async function importIdmlFile(data: ArrayBuffer): Promise<IdmlImportResult> {
  const files = await unzip(data);
  const designMap = readXml(files, 'designmap.xml');
  if (!designMap) throw new Error(READ_ERROR);

  const spreadSrcs = packageSources(designMap, 'Spread');
  const masterSrcs = packageSources(designMap, 'MasterSpread');
  const storySrcs = packageSources(designMap, 'Story');
  const graphicSrcs = packageSources(designMap, 'Graphic');
  if (spreadSrcs.length === 0) throw new Error(READ_ERROR);

  const colors = new Map<string, string>();
  rememberNamedColors(colors);
  for (const src of graphicSrcs) {
    const graphic = readXml(files, src);
    if (graphic) collectColors(graphic, colors);
  }
  collectColors(designMap, colors);

  const stories = new Map<string, Element>();
  for (const src of storySrcs) {
    const storyFile = readXml(files, src);
    if (!storyFile) continue;
    for (const story of elements(storyFile, 'Story')) {
      const id = story.getAttribute('Self');
      if (id) stories.set(id, story);
    }
  }

  const masters = new Map<string, Document>();
  for (const src of masterSrcs) {
    const masterFile = readXml(files, src);
    if (!masterFile) continue;
    const master = structuralElement(masterFile, 'MasterSpread');
    const id = master?.getAttribute('Self');
    if (id) masters.set(id, masterFile);
  }

  const sourceLayers = readSourceLayers(designMap);
  const templatePages: DesignerTemplatePage[] = [];

  for (const src of spreadSrcs) {
    const spreadFile = readXml(files, src);
    if (!spreadFile) continue;
    const spread = structuralElement(spreadFile, 'Spread');
    if (!spread) continue;
    const pages = childElements(spread, 'Page');

    for (const page of pages) {
      const space = pageSpace(page);
      const layers: Layer[] = [];
      const masterId = page.getAttribute('AppliedMaster');
      if (masterId && masterId !== 'n') {
        const masterFile = masters.get(masterId);
        const masterSpread = masterFile ? structuralElement(masterFile, 'MasterSpread') : undefined;
        const masterPage = masterSpread ? childElements(masterSpread, 'Page')[0] : undefined;
        if (masterSpread && masterPage) {
          const masterSpace = pageSpace(masterPage);
          const overridden = overriddenMasterIds(page);
          collectItems(masterPage, IDENTITY, masterSpace, stories, colors, overridden, layers, sourceLayers);
        }
      }

      // Item transforms are already in spread space. The spread's own transform
      // only places that spread on the pasteboard, so it is not applied here.
      collectItems(page, IDENTITY, space, stories, colors, new Set(), layers, sourceLayers);
      for (const child of elementChildren(spread)) {
        if (child.localName === 'Page' || !ITEM_TAGS.has(child.localName || '')) continue;
        appendItem(child, IDENTITY, space, stories, colors, new Set(), layers, true, sourceLayers);
      }

      const width = Math.max(1, Math.round(space.width * POINTS_TO_PX));
      const height = Math.max(1, Math.round(space.height * POINTS_TO_PX));
      const index = templatePages.length + 1;
      templatePages.push({
        id: page.getAttribute('Self') || `page-${index}`,
        name: pageLabel(page, index),
        width,
        height,
        layers,
      });
    }
  }

  if (templatePages.length === 0) throw new Error(READ_ERROR);
  const active = templatePages[0];
  const brands = defaultBrandSettings([...sourceLayers.values()]);
  const document: DesignerDocument = {
    version: 1,
    canvas: {
      width: active.width,
      height: active.height,
      background: '#ffffff',
      presetId: resolveCanvasPresetId(active.width, active.height),
    },
    layers: active.layers,
    pages: templatePages,
    activePageId: active.id,
  };
  if (Object.keys(brands).length > 0) {
    document.settings = { brands };
  }
  return { document: assignMagicStrings(document), pageCount: templatePages.length };
}

function readSourceLayers(designMap: Document): Map<string, SourceLayerRecord> {
  const catalog = new Map<string, SourceLayerRecord>();
  for (const layer of elements(designMap, 'Layer')) {
    const id = layer.getAttribute('Self');
    const name = layer.getAttribute('Name')?.trim();
    if (!id || !name) continue;
    catalog.set(id, {
      id,
      name,
      visible: layer.getAttribute('Visible') !== 'false',
      ...classifySourceLayer(name),
    });
  }
  return catalog;
}

function pageLabel(page: Element, index: number): string {
  const name = page.getAttribute('Name')?.trim();
  if (name && !/^\d+$/.test(name)) return name;
  return `Page ${index}`;
}

function collectItems(
  page: Element,
  parentMatrix: Matrix,
  space: PageSpace,
  stories: Map<string, Element>,
  colors: Map<string, string>,
  skipIds: Set<string>,
  layers: Layer[],
  sourceLayers: Map<string, SourceLayerRecord>
) {
  for (const child of elementChildren(page)) {
    if (!ITEM_TAGS.has(child.localName || '')) continue;
    appendItem(child, parentMatrix, space, stories, colors, skipIds, layers, false, sourceLayers);
  }
}

function appendItem(
  element: Element,
  parentMatrix: Matrix,
  space: PageSpace,
  stories: Map<string, Element>,
  colors: Map<string, string>,
  skipIds: Set<string>,
  layers: Layer[],
  requireOverlap: boolean,
  sourceLayers: Map<string, SourceLayerRecord>,
  inheritedLayerId = ''
) {
  const self = element.getAttribute('Self');
  if (self && skipIds.has(self)) return;
  if (element.getAttribute('Visible') === 'false') return;

  const sourceId = element.getAttribute('ItemLayer') || inheritedLayerId;
  const matrix = multiply(parentMatrix, parseTransform(element.getAttribute('ItemTransform')));
  if (element.localName === 'Group') {
    for (const child of elementChildren(element)) {
      if (!ITEM_TAGS.has(child.localName || '')) continue;
      appendItem(
        child,
        matrix,
        space,
        stories,
        colors,
        skipIds,
        layers,
        requireOverlap,
        sourceLayers,
        sourceId
      );
    }
    return;
  }

  const layer = layerFromItem(element, matrix, space, stories, colors);
  if (!layer) return;
  if (requireOverlap && !overlapsPage(layer, space)) return;
  const source = sourceId ? sourceLayers.get(sourceId) : undefined;
  if (source) applySourceLayer(layer, source);
  layers.push(layer);
}

function layerFromItem(
  element: Element,
  matrix: Matrix,
  space: PageSpace,
  stories: Map<string, Element>,
  colors: Map<string, string>
): Layer | null {
  const anchors = pathAnchors(element);
  if (anchors.length < 2) return null;
  const box = boxInPage(anchors, matrix, space);
  if (box.width < 1 || box.height < 1) return null;

  const graphic = graphicChild(element);
  if (graphic) {
    const link = elements(graphic, 'Link')[0];
    const uri = link?.getAttribute('LinkResourceURI') || '';
    const layer = baseLayer('image', box);
    layer.name = fileNameFromUri(uri) || 'Image';
    layer.src = /^https?:\/\//i.test(uri) ? uri : '';
    layer.objectFit = 'contain';
    const fill = paintColor(element.getAttribute('FillColor'), element.getAttribute('FillTint'), colors);
    if (fill) layer.fill = fill;
    return layer;
  }

  if (element.localName === 'TextFrame') {
    const story = stories.get(element.getAttribute('ParentStory') || '');
    const content = story ? readStory(story, colors) : { text: '', fontSize: undefined, color: undefined, align: undefined };
    const layer = baseLayer('text', box);
    layer.name = textName(content.text);
    layer.text = content.text;
    layer.fontSize = content.fontSize ? Math.max(1, Math.round(content.fontSize * POINTS_TO_PX)) : 16;
    layer.color = content.color || '#000000';
    if (content.align) layer.align = content.align;
    return layer;
  }

  const layer = baseLayer('rect', box);
  layer.name = element.localName === 'Oval' ? 'Oval' : element.localName === 'Polygon' ? 'Polygon' : 'Rectangle';
  const fill = paintColor(element.getAttribute('FillColor'), element.getAttribute('FillTint'), colors);
  layer.fill = fill || 'transparent';
  return layer;
}

function baseLayer(type: Layer['type'], box: Box): Layer {
  return {
    id: createLayerId(),
    type,
    name: type,
    x: Math.round(box.x * POINTS_TO_PX),
    y: Math.round(box.y * POINTS_TO_PX),
    width: Math.max(1, Math.round(box.width * POINTS_TO_PX)),
    height: Math.max(1, Math.round(box.height * POINTS_TO_PX)),
    rotation: Math.abs(box.rotation) > 0.5 ? Math.round(box.rotation * 10) / 10 : undefined,
    visible: true,
    locked: false,
    allowTransform: false,
    editableContent: type === 'text' || type === 'image',
  };
}

function overlapsPage(layer: Layer, space: PageSpace): boolean {
  const x = layer.x / POINTS_TO_PX;
  const y = layer.y / POINTS_TO_PX;
  const width = layer.width / POINTS_TO_PX;
  const height = layer.height / POINTS_TO_PX;
  return x + width > 0 && y + height > 0 && x < space.width && y < space.height;
}

function pageSpace(page: Element): PageSpace {
  const [y1, x1, y2, x2] = numbers(page.getAttribute('GeometricBounds'), [0, 0, 792, 612]);
  const transform = parseTransform(page.getAttribute('ItemTransform'));
  const topLeft = applyMatrix(transform, x1, y1);
  return {
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1),
    originX: topLeft.x,
    originY: topLeft.y,
  };
}

function boxInPage(anchors: { x: number; y: number }[], matrix: Matrix, space: PageSpace): Box {
  const localXs = anchors.map((point) => point.x);
  const localYs = anchors.map((point) => point.y);
  const localWidth = Math.max(...localXs) - Math.min(...localXs);
  const localHeight = Math.max(...localYs) - Math.min(...localYs);
  const scaleX = Math.hypot(matrix.a, matrix.b) || 1;
  const scaleY = Math.hypot(matrix.c, matrix.d) || 1;
  const angle = (Math.atan2(matrix.c, matrix.a) * 180) / Math.PI;
  const rotated = Math.abs(normalizeAngle(angle)) > 0.5;

  if (!rotated) {
    const points = anchors.map((point) => applyMatrix(matrix, point.x, point.y));
    const xs = points.map((point) => point.x);
    const ys = points.map((point) => point.y);
    const x = Math.min(...xs);
    const y = Math.min(...ys);
    return {
      x: x - space.originX,
      y: y - space.originY,
      width: Math.max(...xs) - x,
      height: Math.max(...ys) - y,
      rotation: 0,
    };
  }

  const center = applyMatrix(
    matrix,
    (Math.min(...localXs) + Math.max(...localXs)) / 2,
    (Math.min(...localYs) + Math.max(...localYs)) / 2
  );
  const width = localWidth * scaleX;
  const height = localHeight * scaleY;
  return {
    x: center.x - width / 2 - space.originX,
    y: center.y - height / 2 - space.originY,
    width,
    height,
    rotation: normalizeAngle(angle),
  };
}

function pathAnchors(element: Element): { x: number; y: number }[] {
  const anchors: { x: number; y: number }[] = [];
  for (const point of elements(element, 'PathPointType')) {
    if (point.parentElement && GRAPHIC_TAGS.has(point.parentElement.localName || '')) continue;
    const [x, y] = numbers(point.getAttribute('Anchor'), []);
    if (x == null || y == null) continue;
    anchors.push({ x, y });
  }
  return anchors;
}

function graphicChild(element: Element): Element | undefined {
  for (const child of element.getElementsByTagName('*')) {
    if (GRAPHIC_TAGS.has(child.localName || '')) return child;
  }
  return undefined;
}

function readStory(
  story: Element,
  colors: Map<string, string>
): { text: string; fontSize?: number; color?: string; align?: 'left' | 'middle' | 'right' } {
  const paragraphs = childElements(story, 'ParagraphStyleRange');
  const blocks = paragraphs.length > 0 ? paragraphs : [story];
  let text = '';
  let fontSize: number | undefined;
  let color: string | undefined;
  let align: 'left' | 'middle' | 'right' | undefined;

  blocks.forEach((block, index) => {
    if (align == null) align = readParagraphAlign(block.getAttribute('Justification'));
    if (index > 0) text += '\n';
    for (const node of elementChildren(block)) {
      if (node.localName === 'Br') {
        text += '\n';
        continue;
      }
      if (node.localName !== 'CharacterStyleRange') continue;
      if (fontSize == null) {
        const size = Number(node.getAttribute('PointSize'));
        if (Number.isFinite(size) && size > 0) fontSize = size;
      }
      if (!color) {
        color = paintColor(node.getAttribute('FillColor'), node.getAttribute('FillTint'), colors) || undefined;
      }
      for (const inner of elementChildren(node)) {
        if (inner.localName === 'Br') text += '\n';
        if (inner.localName === 'Content') text += inner.textContent || '';
      }
    }
  });

  return { text: text.replace(/\u2028/g, '\n'), fontSize, color, align };
}

function readParagraphAlign(value: string | null): 'left' | 'middle' | 'right' | undefined {
  const justification = (value || '').toLowerCase();
  if (justification.includes('center') || justification.includes('middle')) return 'middle';
  if (justification.includes('right')) return 'right';
  if (justification.includes('left')) return 'left';
  return undefined;
}

function textName(text: string): string {
  const line = text.split('\n').map((part) => part.trim()).find(Boolean);
  if (!line) return 'Text';
  return line.length > 40 ? `${line.slice(0, 40)}…` : line;
}

function paintColor(ref: string | null, tintValue: string | null, colors: Map<string, string>): string | null {
  if (!ref || ref === 'Swatch/None' || ref === 'Color/None') return null;
  const color = colors.get(ref);
  if (!color) return null;
  if (tintValue == null || tintValue.trim() === '' || tintValue.trim() === '-1') return color;
  const tint = Number(tintValue);
  if (!Number.isFinite(tint) || tint >= 100) return color;
  return mixWithWhite(color, Math.max(0, tint) / 100);
}

function collectColors(root: Document, colors: Map<string, string>) {
  for (const color of elements(root, 'Color')) {
    const id = color.getAttribute('Self');
    const hex = colorToHex(color.getAttribute('Space'), color.getAttribute('ColorValue'));
    if (id && hex) colors.set(id, hex);
  }
}

function rememberNamedColors(colors: Map<string, string>) {
  colors.set('Color/Black', '#000000');
  colors.set('Color/Paper', '#ffffff');
  colors.set('Color/Registration', '#000000');
}

function colorToHex(space: string | null, value: string | null): string | null {
  const parts = (value || '').trim().split(/\s+/).map(Number).filter((part) => Number.isFinite(part));
  const model = (space || '').toUpperCase();
  if (model === 'RGB' && parts.length >= 3) {
    return rgbHex(parts[0], parts[1], parts[2]);
  }
  if ((model === 'CMYK' || parts.length >= 4) && parts.length >= 4) {
    const c = parts[0] / 100;
    const m = parts[1] / 100;
    const y = parts[2] / 100;
    const k = parts[3] / 100;
    return rgbHex(255 * (1 - c) * (1 - k), 255 * (1 - m) * (1 - k), 255 * (1 - y) * (1 - k));
  }
  return null;
}

function rgbHex(r: number, g: number, b: number): string {
  const channel = (value: number) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0');
  return `#${channel(r)}${channel(g)}${channel(b)}`;
}

function mixWithWhite(hex: string, amount: number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return rgbHex(r * amount + 255 * (1 - amount), g * amount + 255 * (1 - amount), b * amount + 255 * (1 - amount));
}

function overriddenMasterIds(page: Element): Set<string> {
  const parts = (page.getAttribute('OverrideList') || '').trim().split(/\s+/).filter(Boolean);
  const ids = new Set<string>();
  for (let index = 0; index < parts.length; index += 2) ids.add(parts[index]);
  return ids;
}

function packageSources(document: Document, localName: string): string[] {
  return elements(document, localName)
    .map((element) => element.getAttribute('src'))
    .filter((src): src is string => Boolean(src));
}

function fileNameFromUri(uri: string): string {
  const cleaned = uri.split('?')[0];
  try {
    const decoded = decodeURIComponent(cleaned);
    const parts = decoded.split(/[/\\]/).filter(Boolean);
    return parts[parts.length - 1] || '';
  } catch {
    const parts = cleaned.split(/[/\\]/).filter(Boolean);
    return parts[parts.length - 1] || '';
  }
}

function parseTransform(value: string | null): Matrix {
  const parts = numbers(value, []);
  if (parts.length < 6) return IDENTITY;
  return { a: parts[0], b: parts[1], c: parts[2], d: parts[3], tx: parts[4], ty: parts[5] };
}

function multiply(parent: Matrix, child: Matrix): Matrix {
  return {
    a: parent.a * child.a + parent.b * child.c,
    b: parent.a * child.b + parent.b * child.d,
    c: parent.c * child.a + parent.d * child.c,
    d: parent.c * child.b + parent.d * child.d,
    tx: parent.a * child.tx + parent.b * child.ty + parent.tx,
    ty: parent.c * child.tx + parent.d * child.ty + parent.ty,
  };
}

function applyMatrix(matrix: Matrix, x: number, y: number): { x: number; y: number } {
  return {
    x: matrix.a * x + matrix.b * y + matrix.tx,
    y: matrix.c * x + matrix.d * y + matrix.ty,
  };
}

function normalizeAngle(angle: number): number {
  let next = angle % 360;
  if (next > 180) next -= 360;
  if (next < -180) next += 360;
  return next;
}

function numbers(value: string | null, fallback: number[]): number[] {
  if (!value || !value.trim()) return fallback;
  const parts = value.trim().split(/\s+/).map(Number);
  if (parts.some((part) => !Number.isFinite(part))) return fallback;
  return parts;
}

function structuralElement(document: Document, localName: string): Element | undefined {
  const found = elements(document, localName);
  return found.find((element) => element.hasAttribute('Self')) || found[0];
}

function elements(root: Document | Element, localName: string): Element[] {
  const found: Element[] = [];
  const nodes = root.getElementsByTagName('*');
  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    if (node.localName === localName) found.push(node);
  }
  return found;
}

function elementChildren(element: Element): Element[] {
  return Array.from(element.children);
}

function childElements(element: Element, localName: string): Element[] {
  return elementChildren(element).filter((child) => child.localName === localName);
}

function readXml(files: Map<string, Uint8Array>, path: string): Document | null {
  const bytes = findZipEntry(files, path);
  if (!bytes) return null;
  const xml = new TextDecoder('utf-8').decode(bytes).replace(/^\uFEFF/, '');
  const document = new DOMParser().parseFromString(xml, 'application/xml');
  if (document.getElementsByTagName('parsererror').length > 0) return null;
  return document;
}

function findZipEntry(files: Map<string, Uint8Array>, path: string): Uint8Array | undefined {
  const normalized = path.replace(/\\/g, '/').replace(/^\.\//, '');
  const direct = files.get(normalized) || files.get(normalized.toLowerCase());
  if (direct) return direct;
  const suffix = `/${normalized}`.toLowerCase();
  for (const [name, bytes] of files) {
    const key = name.replace(/\\/g, '/');
    if (key.toLowerCase() === normalized.toLowerCase() || key.toLowerCase().endsWith(suffix)) return bytes;
  }
  return undefined;
}

async function unzip(buffer: ArrayBuffer): Promise<Map<string, Uint8Array>> {
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 22 || view.getUint32(0, true) !== 0x04034b50) throw new Error(READ_ERROR);

  let end = -1;
  const earliest = Math.max(0, bytes.length - 22 - 65535);
  for (let index = bytes.length - 22; index >= earliest; index -= 1) {
    if (view.getUint32(index, true) === 0x06054b50) {
      end = index;
      break;
    }
  }
  if (end < 0) throw new Error(READ_ERROR);

  const count = view.getUint16(end + 10, true);
  const directoryOffset = view.getUint32(end + 16, true);
  const files = new Map<string, Uint8Array>();
  let offset = directoryOffset;

  for (let index = 0; index < count; index += 1) {
    if (offset + 46 > bytes.length || view.getUint32(offset, true) !== 0x02014b50) throw new Error(READ_ERROR);
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const name = new TextDecoder('utf-8').decode(bytes.subarray(offset + 46, offset + 46 + nameLength)).replace(/\\/g, '/');
    offset += 46 + nameLength + extraLength + commentLength;
    if (!name || name.endsWith('/')) continue;
    if (localOffset + 30 > bytes.length) throw new Error(READ_ERROR);

    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.subarray(dataStart, dataStart + compressedSize);
    if (method === 0) {
      files.set(name, compressed);
    } else if (method === 8) {
      files.set(name, await inflateRaw(compressed));
    }
  }

  return files;
}

async function inflateRaw(data: Uint8Array): Promise<Uint8Array> {
  if (typeof DecompressionStream !== 'function') throw new Error(READ_ERROR);
  const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
