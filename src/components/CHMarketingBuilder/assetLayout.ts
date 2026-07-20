import type { AssetZoneLayout, AssetZoneLayoutMap, Template, TemplateZone, ZoneValue } from './types';
import { coerceContentAlignment, coerceOffsetDirection } from './zoneLayout';

function readLayoutNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

/**
 * 0,0 was previously seeded as a display default and persisted. Treat origin-only
 * positions as unset so images are not pinned to the top-left until the user sets X/Y.
 */
export function sanitizeZoneOrigin<T extends { positionX?: number; positionY?: number }>(value: T): T {
  const x = value.positionX;
  const y = value.positionY;
  const atOrigin =
    (x === 0 || x === undefined) && (y === 0 || y === undefined) && (x === 0 || y === 0);
  if (!atOrigin) return value;

  const next = { ...value };
  delete next.positionX;
  delete next.positionY;
  return next;
}

export function sanitizeLayoutPositions(layout: AssetZoneLayout): AssetZoneLayout {
  return sanitizeZoneOrigin(layout);
}

function normalizeLayoutEntry(value: unknown): AssetZoneLayout | undefined {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return undefined;

  const record = value as Record<string, unknown>;
  const layout: AssetZoneLayout = {};

  const positionX = readLayoutNumber(record.positionX);
  const positionY = readLayoutNumber(record.positionY);
  const zoneWidth = readLayoutNumber(record.zoneWidth);
  const zoneHeight = readLayoutNumber(record.zoneHeight);
  const offsetPx = readLayoutNumber(record.offsetPx);
  const sortOrder = readLayoutNumber(record.sortOrder);

  if (positionX !== undefined) layout.positionX = positionX;
  if (positionY !== undefined) layout.positionY = positionY;
  if (zoneWidth !== undefined) layout.zoneWidth = zoneWidth;
  if (zoneHeight !== undefined) layout.zoneHeight = zoneHeight;
  if (offsetPx !== undefined) layout.offsetPx = offsetPx;
  if (sortOrder !== undefined) layout.sortOrder = sortOrder;

  if (typeof record.contentAlignment === 'string') {
    layout.contentAlignment = coerceContentAlignment(record.contentAlignment);
  }
  if (typeof record.offsetDirection === 'string') {
    layout.offsetDirection = coerceOffsetDirection(record.offsetDirection);
  }

  return Object.keys(layout).length > 0 ? sanitizeLayoutPositions(layout) : undefined;
}

export function parseZoneLayoutJson(raw: string | undefined): AssetZoneLayoutMap {
  if (!raw?.trim()) return {};

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (parsed == null) return {};

    if (Array.isArray(parsed)) {
      const map: AssetZoneLayoutMap = {};
      for (const entry of parsed) {
        if (entry == null || typeof entry !== 'object') continue;
        const record = entry as Record<string, unknown>;
        const zoneKey = typeof record.zoneKey === 'string' ? record.zoneKey.trim() : '';
        if (!zoneKey) continue;
        const layout = normalizeLayoutEntry(record);
        if (layout) map[zoneKey] = layout;
      }
      return map;
    }

    if (typeof parsed === 'object') {
      const map: AssetZoneLayoutMap = {};
      for (const [zoneKey, value] of Object.entries(parsed as Record<string, unknown>)) {
        const layout = normalizeLayoutEntry(value);
        if (layout) map[zoneKey] = layout;
      }
      return map;
    }
  } catch {
    return {};
  }

  return {};
}

export function serializeZoneLayoutJson(layouts: AssetZoneLayoutMap): string {
  const cleaned: AssetZoneLayoutMap = {};
  for (const [zoneKey, layout] of Object.entries(layouts)) {
    if (!zoneKey.trim() || layout == null) continue;
    const entry = normalizeLayoutEntry(layout);
    if (entry) cleaned[zoneKey] = entry;
  }
  return JSON.stringify(cleaned, null, 2);
}

type ZoneValueContentFields = Pick<
  ZoneValue,
  'textValue' | 'colorValue' | 'htmlValue' | 'linkUrl' | 'imageAssetId' | 'imageAssetUrl'
>;

function readContentFields(record: Record<string, unknown>): ZoneValueContentFields | undefined {
  const content: ZoneValueContentFields = {};
  if (typeof record.textValue === 'string') content.textValue = record.textValue;
  if (typeof record.colorValue === 'string') content.colorValue = record.colorValue;
  if (typeof record.htmlValue === 'string') content.htmlValue = record.htmlValue;
  if (typeof record.linkUrl === 'string') content.linkUrl = record.linkUrl;
  if (typeof record.imageAssetId === 'string') content.imageAssetId = record.imageAssetId;
  if (typeof record.imageAssetUrl === 'string') content.imageAssetUrl = record.imageAssetUrl;
  return Object.keys(content).length > 0 ? content : undefined;
}

/**
 * Persist zone content inside zoneLayoutJson as a fallback when
 * EPAM.MarketingAssetZoneValue has no writable text/html properties.
 * Format: { layouts: {...}, values: { zoneKey: { textValue, ... } } }
 * Legacy flat layout maps are still accepted on read.
 */
export function serializeZoneLayoutJsonWithValues(
  layouts: AssetZoneLayoutMap,
  valuesByZoneKey: Record<string, ZoneValue>
): string {
  const cleanedLayouts: AssetZoneLayoutMap = {};
  for (const [zoneKey, layout] of Object.entries(layouts)) {
    if (!zoneKey.trim() || layout == null) continue;
    const entry = normalizeLayoutEntry(layout);
    if (entry) cleanedLayouts[zoneKey] = entry;
  }

  const values: Record<string, ZoneValueContentFields & { zoneKey: string }> = {};
  for (const [zoneKey, value] of Object.entries(valuesByZoneKey)) {
    if (!zoneKey.trim() || !value) continue;
    const content = readContentFields(value as unknown as Record<string, unknown>);
    if (!content) continue;
    values[zoneKey] = { zoneKey, ...content };
  }

  if (Object.keys(values).length === 0) {
    return JSON.stringify(cleanedLayouts, null, 2);
  }

  return JSON.stringify({ layouts: cleanedLayouts, values }, null, 2);
}

export function parseZoneLayoutJsonWithValues(raw: string | undefined): {
  layouts: AssetZoneLayoutMap;
  values: Record<string, ZoneValue>;
} {
  if (!raw?.trim()) return { layouts: {}, values: {} };

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (parsed == null || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { layouts: parseZoneLayoutJson(raw), values: {} };
    }

    const record = parsed as Record<string, unknown>;
    if (record.layouts != null && typeof record.layouts === 'object' && !Array.isArray(record.layouts)) {
      const layouts = parseZoneLayoutJson(JSON.stringify(record.layouts));
      const values: Record<string, ZoneValue> = {};
      if (record.values != null && typeof record.values === 'object' && !Array.isArray(record.values)) {
        for (const [zoneKey, entry] of Object.entries(record.values as Record<string, unknown>)) {
          if (!zoneKey.trim() || entry == null || typeof entry !== 'object') continue;
          const content = readContentFields(entry as Record<string, unknown>);
          if (!content) continue;
          values[zoneKey] = { zoneKey, ...content };
        }
      }
      return { layouts, values };
    }

    // Legacy flat map — layout fields + optional content fields on the same object.
    const layouts: AssetZoneLayoutMap = {};
    const values: Record<string, ZoneValue> = {};
    for (const [zoneKey, value] of Object.entries(record)) {
      if (!zoneKey.trim() || value == null || typeof value !== 'object') continue;
      const entry = value as Record<string, unknown>;
      const layout = normalizeLayoutEntry(entry);
      if (layout) layouts[zoneKey] = layout;
      const content = readContentFields(entry);
      if (content) values[zoneKey] = { zoneKey, ...content };
    }
    return { layouts, values };
  } catch {
    return { layouts: {}, values: {} };
  }
}

/** Merge entity zone values with content stored in layout JSON (JSON wins when entity fields are empty). */
export function mergeZoneValuesWithLayoutJson(
  template: Template,
  entityValues: ZoneValue[],
  layoutJsonValues: Record<string, ZoneValue>
): ZoneValue[] {
  const byId = indexZoneValuesByZoneId(template, entityValues);
  for (const zone of template.zones) {
    const key = zoneValueKeyForZone(zone, template.zones);
    const fromJson = layoutJsonValues[key] ?? layoutJsonValues[zone.zoneKey];
    if (!fromJson) continue;
    const existing = byId[zone.id];
    byId[zone.id] = {
      zoneKey: key,
      id: existing?.id,
      textValue: existing?.textValue?.trim() ? existing.textValue : fromJson.textValue,
      colorValue: existing?.colorValue?.trim() ? existing.colorValue : fromJson.colorValue,
      htmlValue: existing?.htmlValue?.trim() ? existing.htmlValue : fromJson.htmlValue,
      linkUrl: existing?.linkUrl?.trim() ? existing.linkUrl : fromJson.linkUrl,
      imageAssetId: existing?.imageAssetId?.trim() ? existing.imageAssetId : fromJson.imageAssetId,
      imageAssetUrl: existing?.imageAssetUrl?.trim() ? existing.imageAssetUrl : fromJson.imageAssetUrl,
    };
  }
  return Object.values(byId);
}

export function applyLayoutToZone(zone: TemplateZone, layout?: AssetZoneLayout): TemplateZone {
  if (!layout) return sanitizeZoneOrigin(zone);

  return sanitizeZoneOrigin({
    ...zone,
    positionX: layout.positionX ?? zone.positionX,
    positionY: layout.positionY ?? zone.positionY,
    zoneWidth: layout.zoneWidth ?? zone.zoneWidth,
    zoneHeight: layout.zoneHeight ?? zone.zoneHeight,
    contentAlignment: layout.contentAlignment ?? zone.contentAlignment,
    offsetDirection: layout.offsetDirection ?? zone.offsetDirection,
    offsetPx: layout.offsetPx ?? zone.offsetPx,
    sortOrder: layout.sortOrder ?? zone.sortOrder,
  });
}

/** Layout / zone-value map key. Duplicate zoneKeys are disambiguated with the entity id. */
export function layoutKeyForZone(zone: TemplateZone, zones: TemplateZone[]): string {
  const duplicates = zones.filter((candidate) => candidate.zoneKey === zone.zoneKey).length > 1;
  return duplicates ? `${zone.zoneKey}__${zone.id}` : zone.zoneKey;
}

/** Same uniqueness rule as layout keys — used for in-memory and persisted zone values. */
export function zoneValueKeyForZone(zone: TemplateZone, zones: TemplateZone[]): string {
  return layoutKeyForZone(zone, zones);
}

/**
 * Index stored zone values by template zone id so duplicate zoneKeys cannot share editor state.
 * Each stored value is consumed at most once (first matching zone wins).
 */
export function indexZoneValuesByZoneId(
  template: Template,
  storedValues: ZoneValue[]
): Record<string, ZoneValue> {
  const unused = new Map<string, ZoneValue[]>();
  for (const value of storedValues) {
    const key = value.zoneKey?.trim();
    if (!key) continue;
    const list = unused.get(key) ?? [];
    list.push(value);
    unused.set(key, list);
  }

  const byId: Record<string, ZoneValue> = {};
  for (const zone of template.zones) {
    const uniqueKey = zoneValueKeyForZone(zone, template.zones);
    const queue = unused.get(uniqueKey) ?? unused.get(zone.zoneKey);
    const next = queue?.shift();
    if (!next) continue;
    byId[zone.id] = { ...next, zoneKey: uniqueKey };
  }
  return byId;
}

/**
 * Build a zoneKey-keyed map for preview helpers that still look up by zone.zoneKey.
 * When keys collide, later zones keep their own id-keyed values via the id map instead.
 */
export function zoneValuesByZoneKeyForPreview(
  template: Template,
  valuesByZoneId: Record<string, ZoneValue>
): Record<string, ZoneValue> {
  const byKey: Record<string, ZoneValue> = {};
  for (const zone of template.zones) {
    const value = valuesByZoneId[zone.id];
    if (!value) continue;
    byKey[zoneValueKeyForZone(zone, template.zones)] = value;
  }
  return byKey;
}

export function templateWithAssetLayouts(template: Template, layouts: AssetZoneLayoutMap): Template {
  return {
    ...template,
    zones: [...template.zones]
      .map((zone) => {
        const key = layoutKeyForZone(zone, template.zones);
        // When zoneKeys are duplicated, never share one layout entry across zones.
        const resolved = key === zone.zoneKey ? layouts[zone.zoneKey] : layouts[key];
        return applyLayoutToZone(zone, resolved);
      })
      .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id)),
  };
}

function layoutEntryFromZone(zone: TemplateZone): AssetZoneLayout {
  return sanitizeLayoutPositions({
    positionX: zone.positionX,
    positionY: zone.positionY,
    zoneWidth: zone.zoneWidth,
    zoneHeight: zone.zoneHeight,
    contentAlignment: zone.contentAlignment,
    offsetDirection: zone.offsetDirection,
    offsetPx: zone.offsetPx,
    sortOrder: zone.sortOrder,
  });
}

export function buildInitialLayoutsFromTemplate(template: Template): AssetZoneLayoutMap {
  const layouts: AssetZoneLayoutMap = {};
  for (const zone of template.zones) {
    const key = layoutKeyForZone(zone, template.zones);
    layouts[key] = layoutEntryFromZone(zone);
  }
  return layouts;
}

export function mergeLoadedLayouts(
  template: Template,
  storedLayouts: AssetZoneLayoutMap
): AssetZoneLayoutMap {
  const merged = buildInitialLayoutsFromTemplate(template);
  for (const zone of template.zones) {
    const key = layoutKeyForZone(zone, template.zones);
    // Avoid re-applying an ambiguous shared zoneKey entry when duplicates exist.
    const stored = key === zone.zoneKey ? storedLayouts[zone.zoneKey] : storedLayouts[key];
    if (stored) {
      merged[key] = sanitizeLayoutPositions({ ...merged[key], ...stored });
    } else {
      merged[key] = sanitizeLayoutPositions(merged[key] ?? {});
    }
  }
  return merged;
}

/** Ensure zone keys are unique before save/load so asset layouts do not bleed across zones. */
export function ensureUniqueZoneKeys(zones: TemplateZone[]): TemplateZone[] {
  const seen = new Set<string>();
  return zones.map((zone) => {
    let key = zone.zoneKey?.trim() || `zone-${zone.id}`;
    if (seen.has(key)) {
      key = `${key}_${zone.id}`;
    }
    seen.add(key);
    return key === zone.zoneKey ? zone : { ...zone, zoneKey: key };
  });
}
