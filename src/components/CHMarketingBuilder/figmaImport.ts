import { DEFAULT_HEADING_LEVEL } from './headingLevel';
import type { ChannelType, TemplateZone, ZoneType } from './types';

const ZONE_TYPES: ZoneType[] = [
  'Text',
  'Heading',
  'Image',
  'CTA Button',
  'Logo',
  'Background Color',
  'Divider',
  'HTML',
];

export interface FigmaImportNode {
  id?: string;
  name?: string;
  type?: string;
  characters?: string;
  absoluteBoundingBox?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  fills?: Array<{ type?: string; visible?: boolean }>;
  style?: { fontSize?: number; fontWeight?: number | string };
  children?: FigmaImportNode[];
}

export interface ParsedFigmaUrl {
  fileKey: string;
  nodeId: string;
}

export interface FigmaImportResult {
  frameName: string;
  canvasWidth?: number;
  canvasHeight?: number;
  zones: TemplateZone[];
  warnings: string[];
}

export function parseFigmaUrl(input: string): ParsedFigmaUrl | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    if (!/figma\.com$/i.test(url.hostname) && !/\.figma\.com$/i.test(url.hostname)) {
      return null;
    }

    const pathMatch = url.pathname.match(/\/(?:design|file|proto)\/([a-zA-Z0-9]+)/);
    const fileKey = pathMatch?.[1];
    if (!fileKey) return null;

    const rawNode =
      url.searchParams.get('node-id') ??
      url.searchParams.get('node_id') ??
      url.searchParams.get('nodeId');
    if (!rawNode?.trim()) return null;

    const nodeId = decodeURIComponent(rawNode.trim()).replace(/-/g, ':');
    return { fileKey, nodeId };
  } catch {
    return null;
  }
}

function normalizeZoneType(raw: string): ZoneType | undefined {
  const value = raw.trim().toLowerCase().replace(/[_-]+/g, ' ');
  const aliases: Record<string, ZoneType> = {
    text: 'Text',
    body: 'Text',
    copy: 'Text',
    heading: 'Heading',
    headline: 'Heading',
    title: 'Heading',
    h1: 'Heading',
    h2: 'Heading',
    image: 'Image',
    img: 'Image',
    photo: 'Image',
    hero: 'Image',
    cta: 'CTA Button',
    'cta button': 'CTA Button',
    button: 'CTA Button',
    logo: 'Logo',
    background: 'Background Color',
    'background color': 'Background Color',
    bg: 'Background Color',
    divider: 'Divider',
    line: 'Divider',
    html: 'HTML',
  };
  return aliases[value] ?? ZONE_TYPES.find((type) => type.toLowerCase() === value);
}

function parseZoneMetaFromName(name: string): {
  zoneKey?: string;
  zoneType?: ZoneType;
  zoneLabel?: string;
} {
  const trimmed = name.trim();
  const keyMatch = trimmed.match(/zone\s*[:=]\s*([a-zA-Z0-9_-]+)/i);
  const typeMatch = trimmed.match(/type\s*[:=]\s*([a-zA-Z0-9 _-]+)/i);
  const labelMatch = trimmed.match(/label\s*[:=]\s*([^|]+)/i);

  const zoneKey = keyMatch?.[1]?.trim();
  const zoneType = typeMatch?.[1] ? normalizeZoneType(typeMatch[1]) : undefined;
  const zoneLabel = labelMatch?.[1]?.trim() || undefined;

  return { zoneKey, zoneType, zoneLabel };
}

function slugZoneKey(name: string, fallback: string): string {
  const slug = name
    .replace(/zone\s*[:=]\s*/gi, '')
    .replace(/type\s*[:=]\s*[a-zA-Z0-9 _-]+/gi, '')
    .replace(/label\s*[:=]\s*[^|]+/gi, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
  return slug || fallback;
}

function hasImageFill(node: FigmaImportNode): boolean {
  return (node.fills ?? []).some(
    (fill) => fill.visible !== false && String(fill.type ?? '').toUpperCase() === 'IMAGE'
  );
}

function inferZoneType(node: FigmaImportNode): ZoneType | undefined {
  const fromName = parseZoneMetaFromName(node.name ?? '');
  if (fromName.zoneType) return fromName.zoneType;

  const name = (node.name ?? '').toLowerCase();
  if (/logo/.test(name)) return 'Logo';
  if (/cta|button/.test(name)) return 'CTA Button';
  if (/divider|separator|line/.test(name)) return 'Divider';
  if (/background|bg\b/.test(name)) return 'Background Color';
  if (/hero|image|photo|img/.test(name)) return 'Image';
  if (/heading|headline|title|h[1-6]\b/.test(name)) return 'Heading';

  const figmaType = String(node.type ?? '').toUpperCase();
  if (figmaType === 'TEXT') {
    const fontSize = node.style?.fontSize ?? 0;
    const weight = Number(node.style?.fontWeight ?? 0);
    if (fontSize >= 28 || weight >= 600 || /heading|headline|title/i.test(node.characters ?? '')) {
      return 'Heading';
    }
    return 'Text';
  }
  if (figmaType === 'LINE') return 'Divider';
  if (hasImageFill(node) || figmaType === 'RECTANGLE' || figmaType === 'ELLIPSE') {
    if (hasImageFill(node)) return 'Image';
  }
  if (figmaType === 'COMPONENT' || figmaType === 'INSTANCE') {
    if (/button|cta/i.test(name)) return 'CTA Button';
    if (/logo/i.test(name)) return 'Logo';
  }

  return undefined;
}

function isExplicitZoneNode(node: FigmaImportNode): boolean {
  const name = node.name ?? '';
  return /zone\s*[:=]/i.test(name) || /type\s*[:=]/i.test(name);
}

function collectCandidateNodes(root: FigmaImportNode): FigmaImportNode[] {
  const explicit: FigmaImportNode[] = [];
  const walk = (node: FigmaImportNode) => {
    if (isExplicitZoneNode(node)) {
      explicit.push(node);
    }
    for (const child of node.children ?? []) {
      walk(child);
    }
  };
  walk(root);
  if (explicit.length > 0) return explicit;

  // Fallback: direct children of the frame (skip nested chrome).
  return (root.children ?? []).filter((child) => inferZoneType(child) != null);
}

function rounded(value: number | undefined): number | undefined {
  if (value == null || !Number.isFinite(value)) return undefined;
  return Math.round(value);
}

function buildZone(
  node: FigmaImportNode,
  index: number,
  frameOrigin: { x: number; y: number },
  usedKeys: Set<string>
): TemplateZone {
  const meta = parseZoneMetaFromName(node.name ?? '');
  const zoneType = meta.zoneType ?? inferZoneType(node) ?? 'Text';
  let zoneKey = meta.zoneKey || slugZoneKey(node.name ?? '', `zone_${index + 1}`);
  if (usedKeys.has(zoneKey)) {
    zoneKey = `${zoneKey}_${index + 1}`;
  }
  usedKeys.add(zoneKey);

  const box = node.absoluteBoundingBox;
  const positionX =
    box?.x != null ? rounded(box.x - frameOrigin.x) : undefined;
  const positionY =
    box?.y != null ? rounded(box.y - frameOrigin.y) : undefined;

  const zone: TemplateZone = {
    id: `temp-figma-${Date.now()}-${index}`,
    zoneKey,
    zoneLabel: meta.zoneLabel || (node.name ?? '').trim() || zoneKey,
    zoneType,
    isLocked: zoneType === 'Logo',
    sortOrder: index,
    positionX,
    positionY,
    zoneWidth: rounded(box?.width),
    zoneHeight: rounded(box?.height),
  };

  if (zoneType === 'Heading') {
    zone.headingLevel = DEFAULT_HEADING_LEVEL;
  }
  if (zoneType === 'Text' && typeof node.characters === 'string' && node.characters.trim()) {
    const length = node.characters.trim().length;
    if (length > 0) {
      zone.maxCharacterCount = Math.max(40, Math.ceil(length * 1.25));
    }
  }

  return zone;
}

/**
 * Map a Figma FRAME (or similar) node into Marketing Builder template zones.
 *
 * Preferred naming on layers:
 *   zone:headline | type:Heading | label:Headline
 *   zone:hero | type:Image
 *   zone:body | type:Text
 */
export function mapFigmaNodeToTemplateZones(root: FigmaImportNode): FigmaImportResult {
  const warnings: string[] = [];
  const frameName = (root.name ?? '').trim() || 'Figma frame';
  const canvasWidth = rounded(root.absoluteBoundingBox?.width);
  const canvasHeight = rounded(root.absoluteBoundingBox?.height);
  const frameOrigin = {
    x: root.absoluteBoundingBox?.x ?? 0,
    y: root.absoluteBoundingBox?.y ?? 0,
  };

  const candidates = collectCandidateNodes(root);
  if (candidates.length === 0) {
    warnings.push(
      'No zone layers found. Name layers like "zone:headline | type:Heading" or place typed content as direct children of the frame.'
    );
    return { frameName, canvasWidth, canvasHeight, zones: [], warnings };
  }

  if (!candidates.some(isExplicitZoneNode)) {
    warnings.push(
      'No explicit zone: / type: names found — inferred zone types from layer names and Figma node types. Rename layers for stable imports.'
    );
  }

  const usedKeys = new Set<string>();
  const zones = candidates.map((node, index) => buildZone(node, index, frameOrigin, usedKeys));

  return { frameName, canvasWidth, canvasHeight, zones, warnings };
}

export function findNodeById(root: FigmaImportNode, nodeId: string): FigmaImportNode | null {
  const normalized = nodeId.replace(/-/g, ':');
  if ((root.id ?? '').replace(/-/g, ':') === normalized) return root;
  for (const child of root.children ?? []) {
    const found = findNodeById(child, normalized);
    if (found) return found;
  }
  return null;
}

export function extractFigmaRootFromApiPayload(
  payload: unknown,
  nodeId: string
): FigmaImportNode | null {
  if (payload == null || typeof payload !== 'object') return null;
  const record = payload as Record<string, unknown>;

  const nodes = record.nodes;
  if (nodes != null && typeof nodes === 'object' && !Array.isArray(nodes)) {
    const map = nodes as Record<string, unknown>;
    const normalized = nodeId.replace(/-/g, ':');
    const entry =
      map[normalized] ??
      map[nodeId] ??
      map[normalized.replace(/:/g, '-')] ??
      Object.values(map)[0];
    if (entry != null && typeof entry === 'object') {
      const document = (entry as Record<string, unknown>).document;
      if (document != null && typeof document === 'object') {
        return document as FigmaImportNode;
      }
      return entry as FigmaImportNode;
    }
  }

  if (record.document != null && typeof record.document === 'object') {
    const doc = record.document as FigmaImportNode;
    return findNodeById(doc, nodeId) ?? doc;
  }

  if (record.id || record.children || record.type) {
    return record as FigmaImportNode;
  }

  return null;
}

export function suggestTemplateNameFromFrame(frameName: string, channelType: ChannelType): string {
  const base = frameName.replace(/\s+/g, ' ').trim() || 'Figma template';
  return `${base} (${channelType})`;
}
