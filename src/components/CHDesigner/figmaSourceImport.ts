import { parseFigmaUrl } from '../CHMarketingBuilder/figmaImport';
import {
  applyImportedName,
  buildImportedDocument,
  importedLayer,
  textAlignFrom,
  type SourceImportResult,
} from './sourceImport';
import type { DesignerTemplatePage, Layer } from './types';

const DEFAULT_API = '/api/figma/import';

interface FigmaColor {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

interface FigmaFill {
  type?: string;
  visible?: boolean;
  opacity?: number;
  color?: FigmaColor;
}

interface FigmaNode {
  id?: string;
  name?: string;
  type?: string;
  visible?: boolean;
  characters?: string;
  rotation?: number;
  absoluteBoundingBox?: { x?: number; y?: number; width?: number; height?: number };
  fills?: FigmaFill[];
  style?: {
    fontSize?: number;
    textAlignHorizontal?: string;
    fills?: FigmaFill[];
  };
  children?: FigmaNode[];
}

export async function importFigmaUrl(
  figmaUrl: string,
  apiUrl = DEFAULT_API
): Promise<SourceImportResult> {
  const parsed = parseFigmaUrl(figmaUrl);
  if (!parsed) {
    throw new Error(
      'Paste a Figma frame link that includes node-id. In Figma, right-click the frame and choose Copy link.'
    );
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ figmaUrl }),
  });
  const payload = (await response.json().catch(() => ({}))) as { error?: string; nodes?: unknown };
  if (!response.ok) {
    throw new Error(payload.error || 'Could not read this Figma frame.');
  }

  const root = extractRoot(payload, parsed.nodeId);
  if (!root) throw new Error('Could not find that frame in the Figma file.');
  return importFigmaNode(root);
}

export function importFigmaNode(root: FigmaNode): SourceImportResult {
  const pages = pageNodes(root).map((node, index) => pageFromNode(node, index));
  if (pages.length === 0) throw new Error('This Figma frame has nothing to import.');
  return { document: buildImportedDocument(pages), pageCount: pages.length };
}

function pageNodes(root: FigmaNode): FigmaNode[] {
  const type = kind(root);
  if (type === 'DOCUMENT') {
    const frames = (root.children ?? []).flatMap((canvas) => frameChildren(canvas));
    if (frames.length > 0) return frames;
  }
  if (type === 'CANVAS' || type === 'SECTION') {
    const frames = frameChildren(root);
    const children = root.children ?? [];
    if (frames.length > 1 && frames.length === children.length) return frames;
  }
  return [root];
}

function frameChildren(node: FigmaNode): FigmaNode[] {
  return (node.children ?? []).filter((child) => {
    const type = kind(child);
    return type === 'FRAME' || type === 'COMPONENT' || type === 'INSTANCE' || type === 'COMPONENT_SET';
  });
}

function pageFromNode(node: FigmaNode, index: number): DesignerTemplatePage {
  const box = node.absoluteBoundingBox;
  const width = Math.max(1, Math.round(box?.width || 1));
  const height = Math.max(1, Math.round(box?.height || 1));
  const origin = { x: box?.x ?? 0, y: box?.y ?? 0 };
  const layers: Layer[] = [];
  const fill = solidFill(node);
  if (fill) {
    const background = importedLayer('rect', node.name?.trim() || 'Background', { x: 0, y: 0, width, height });
    background.fill = fill;
    layers.push(background);
  }
  for (const child of node.children ?? []) {
    appendNode(child, layers, origin, undefined);
  }
  return {
    id: node.id || `figma-page-${index + 1}`,
    name: node.name?.trim() || `Page ${index + 1}`,
    width,
    height,
    layers,
  };
}

function appendNode(
  node: FigmaNode,
  layers: Layer[],
  origin: { x: number; y: number },
  parentId: string | undefined
) {
  const type = kind(node);
  if (type === 'SLICE') return;
  const name = node.name?.trim() || 'Layer';
  const box = relativeBox(node, origin);
  const visible = node.visible !== false;

  if (type === 'TEXT' && box) {
    const layer = importedLayer('text', textName(node.characters, name), box, parentId);
    layer.text = node.characters || '';
    layer.fontSize = Math.max(1, Math.round(node.style?.fontSize || 16));
    layer.color = solidFill(node) || solidFillFrom(node.style?.fills) || '#000000';
    const align = textAlignFrom(node.style?.textAlignHorizontal);
    if (align) layer.align = align;
    if (node.rotation) layer.rotation = Math.round(node.rotation * 10) / 10;
    layer.visible = visible;
    applyImportedName(layer, name);
    layers.push(layer);
    return;
  }

  const children = node.children ?? [];
  const grouped =
    children.length > 0 &&
    (type === 'FRAME' ||
      type === 'GROUP' ||
      type === 'COMPONENT' ||
      type === 'INSTANCE' ||
      type === 'COMPONENT_SET' ||
      type === 'SECTION' ||
      type === 'BOOLEAN_OPERATION');

  if (grouped) {
    const group = importedLayer('group', name, box ?? { x: 0, y: 0, width: 1, height: 1 }, parentId);
    group.visible = visible;
    applyImportedName(group, name);
    layers.push(group);
    const fill = solidFill(node);
    if (fill && box && !imageFill(node)) {
      const shape = importedLayer('rect', name, box, group.id);
      shape.fill = fill;
      shape.visible = visible;
      applyImportedName(shape, name);
      layers.push(shape);
    }
    for (const child of children) appendNode(child, layers, origin, group.id);
    return;
  }

  if (!box) return;
  if (imageFill(node) || type === 'RECTANGLE' || type === 'ELLIPSE' || type === 'VECTOR' || type === 'LINE' || type === 'STAR' || type === 'REGULAR_POLYGON' || type === 'INSTANCE' || type === 'COMPONENT') {
    if (imageFill(node) || type === 'INSTANCE' || type === 'COMPONENT') {
      const layer = importedLayer('image', name, box, parentId);
      layer.objectFit = 'contain';
      layer.fill = solidFill(node) || '#e8e6e1';
      layer.visible = visible;
      applyImportedName(layer, name);
      layers.push(layer);
      return;
    }
    const layer = importedLayer('rect', name, box, parentId);
    layer.fill = solidFill(node) || 'transparent';
    layer.visible = visible;
    applyImportedName(layer, name);
    layers.push(layer);
  }
}

function relativeBox(node: FigmaNode, origin: { x: number; y: number }) {
  const box = node.absoluteBoundingBox;
  const width = box?.width ?? 0;
  const height = box?.height ?? 0;
  if (width < 1 || height < 1) return null;
  return {
    x: (box?.x ?? 0) - origin.x,
    y: (box?.y ?? 0) - origin.y,
    width,
    height,
  };
}

function imageFill(node: FigmaNode): boolean {
  return (node.fills ?? []).some((fill) => fill.visible !== false && (fill.type || '').toUpperCase() === 'IMAGE');
}

function solidFill(node: FigmaNode): string | undefined {
  return solidFillFrom(node.fills);
}

function solidFillFrom(fills: FigmaFill[] | undefined): string | undefined {
  const fill = (fills ?? []).find((item) => item.visible !== false && (item.type || '').toUpperCase() === 'SOLID' && item.color);
  if (!fill?.color) return undefined;
  const r = byte(fill.color.r ?? 0);
  const g = byte(fill.color.g ?? 0);
  const b = byte(fill.color.b ?? 0);
  const alpha = (fill.color.a ?? 1) * (fill.opacity ?? 1);
  const hex = [r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('');
  if (alpha >= 0.995) return `#${hex}`;
  return `rgba(${r}, ${g}, ${b}, ${Math.round(alpha * 100) / 100})`;
}

function byte(value: number): number {
  const scaled = value <= 1 ? value * 255 : value;
  return Math.max(0, Math.min(255, Math.round(scaled)));
}

function textName(text: string | undefined, fallback: string): string {
  const line = (text || '').split('\n').map((part) => part.trim()).find(Boolean);
  if (!line) return fallback;
  return line.length > 40 ? `${line.slice(0, 40)}…` : line;
}

function kind(node: FigmaNode): string {
  return (node.type || '').toUpperCase();
}

function extractRoot(payload: { nodes?: unknown }, nodeId: string): FigmaNode | null {
  const nodes = payload.nodes;
  if (nodes == null || typeof nodes !== 'object' || Array.isArray(nodes)) return null;
  const map = nodes as Record<string, unknown>;
  const normalized = nodeId.replace(/-/g, ':');
  const entry =
    map[normalized] ??
    map[nodeId] ??
    map[normalized.replace(/:/g, '-')] ??
    Object.values(map)[0];
  if (entry == null || typeof entry !== 'object') return null;
  const record = entry as Record<string, unknown>;
  const document = record.document;
  if (document != null && typeof document === 'object') return document as FigmaNode;
  return record as FigmaNode;
}
