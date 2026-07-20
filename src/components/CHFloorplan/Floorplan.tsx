/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react';
import { IEntity } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity';
import { ContentHubClient } from '@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client';
import { EntityLoadConfiguration } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/entity-load-configuration';
import { CultureLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/culture-load-option';
import { PropertyLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/property-load-option';
import { RelationLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/relation-load-option';
import './index.css';

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

interface FloorplanOptions {
  relationName?: string; // default: 'ExhibitionToArtwork'
  entityId?: number;
}

interface FloorplanProps {
  client: ContentHubClient;
  options: FloorplanOptions;
  entity?: IEntity;
}

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

interface ArtworkDetails {
  heightCm: number | null;
  lengthCm: number | null;
  depthCm: number | null;
  widthCm: number | null;
  diameterCm: number | null;
  dimensionUnframed: string | null;
  dimensionFramed: string | null;
  weightKg: number | null;
  listPrice: number | null;
}

interface Artwork {
  id: number;
  title: string;
  preview: string | null;
  details: ArtworkDetails;
}

const RENDITION_PRIORITY = [
  'preview', 'thumbnail', 'bigthumbnail', 'thumbnail_cropped', 'downloadPreview',
] as const;

const PLACED_SIZE_PX = 50;

interface DropZone {
  id: string;
  label: string;
  // SVG rect geometry
  x: number;
  y: number;
  width: number;
  height: number;
  // orientation drives image/label layout inside the zone
  orientation: 'horizontal' | 'vertical';
}

type Placements = Record<string, Artwork>;

// ---------------------------------------------------------------------------
// FLOORPLAN DROP ZONE DEFINITIONS
// These match the gallery floorplan SVG drawn below.
// x, y, width, height are in the SVG coordinate space (0 0 580 400).
// ---------------------------------------------------------------------------

const DROP_ZONES: DropZone[] = [
  // Gallery 1 — left wall hanging positions
  { id: 'g1-wall-a', label: 'Gallery 1 · Wall A', x: 12,  y: 28,  width: 14, height: 50, orientation: 'vertical' },
  { id: 'g1-wall-b', label: 'Gallery 1 · Wall B', x: 12,  y: 98,  width: 14, height: 50, orientation: 'vertical' },
  { id: 'g1-wall-c', label: 'Gallery 1 · Wall C', x: 12,  y: 172, width: 14, height: 50, orientation: 'vertical' },
  // Gallery 1 — pedestal (wider, centre of room)
  { id: 'g1-pedestal', label: 'Gallery 1 · Pedestal', x: 105, y: 205, width: 40, height: 52, orientation: 'horizontal' },

  // Gallery 2 — top wall positions
  { id: 'g2-wall-a', label: 'Gallery 2 · Wall A', x: 288, y: 12,  width: 50, height: 14, orientation: 'horizontal' },
  { id: 'g2-wall-b', label: 'Gallery 2 · Wall B', x: 368, y: 12,  width: 50, height: 14, orientation: 'horizontal' },
  // Gallery 2 — right wall (shared with gallery 4 corridor)
  { id: 'g2-wall-c', label: 'Gallery 2 · Wall C', x: 450, y: 28,  width: 14, height: 50, orientation: 'vertical' },

  // Gallery 3 — top wall
  { id: 'g3-wall-a', label: 'Gallery 3 · Wall A', x: 288, y: 282, width: 50, height: 14, orientation: 'horizontal' },
  // Gallery 3 — right wall
  { id: 'g3-wall-b', label: 'Gallery 3 · Wall B', x: 450, y: 295, width: 14, height: 50, orientation: 'vertical' },

  // Gallery 4 — right wall
  { id: 'g4-wall-a', label: 'Gallery 4 · Wall A', x: 562, y: 22,  width: 14, height: 50, orientation: 'vertical' },
  { id: 'g4-wall-b', label: 'Gallery 4 · Wall B', x: 562, y: 110, width: 14, height: 50, orientation: 'vertical' },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

const LOG = (msg: string, ...args: any[]) =>
  console.log(`%c[Floorplan] ${msg}`, 'color:#1D9E75;font-weight:bold', ...args);

const WARN = (msg: string, ...args: any[]) =>
  console.warn(`[Floorplan] ${msg}`, ...args);

function getEntityId(entity: IEntity, fallbackId?: number): number | undefined {
  if (entity.id != null) return entity.id;
  const raw = entity as any;
  const sys = raw.systemProperties;
  if (sys != null) {
    const sysId = typeof sys.id === 'number' ? sys.id : sys.get?.('id');
    if (typeof sysId === 'number') return sysId;
  }
  if (typeof raw.id === 'number') return raw.id;
  return fallbackId;
}

function parseEntityIdFromHref(href: string): number | null {
  const match = href.match(/\/entities\/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function idsFromHrefList(items: unknown): number[] {
  if (!Array.isArray(items)) return [];
  return items
    .map((item: unknown) => {
      if (typeof item === 'number') return item;
      if (item == null || typeof item !== 'object') return null;
      const obj = item as Record<string, unknown>;
      if (typeof obj.id === 'number') return obj.id;
      if (typeof obj.entityId === 'number') return obj.entityId;
      if (typeof obj.href === 'string') return parseEntityIdFromHref(obj.href);
      return null;
    })
    .filter((id: number | null): id is number => id != null);
}

function getRelationIds(entity: IEntity, relationName: string): number[] {
  try {
    const relation = entity.getRelation(relationName);
    if (relation != null) {
      const ids = relation.getIds();
      if (ids.length > 0) return ids;
      const children = (relation as { children?: number[] }).children;
      if (Array.isArray(children) && children.length > 0) return children;
    }
  } catch { /* fall through to raw relation payload */ }

  const raw = entity as any;
  const entry = raw.relations?.[relationName];
  if (entry == null) return [];

  if (Array.isArray(entry)) return idsFromHrefList(entry);

  if (typeof entry === 'object') {
    const rel = entry as Record<string, unknown>;
    const fromChildren = idsFromHrefList(rel.children);
    if (fromChildren.length > 0) return fromChildren;
    const fromParents = idsFromHrefList(rel.parents);
    if (fromParents.length > 0) return fromParents;
    if (typeof rel.href === 'string') {
      const id = parseEntityIdFromHref(rel.href);
      if (id != null) return [id];
    }
  }

  return [];
}

async function fetchRelationIdsFromApi(
  client: ContentHubClient,
  entity: IEntity,
  relationName: string,
): Promise<number[]> {
  const raw = entity as any;
  const entry = raw.relations?.[relationName];
  const href =
    (entry != null && typeof entry === 'object'
      ? entry.href ?? entry.self
      : null) as { href?: string } | string | null | undefined;

  let relationHref =
    typeof href === 'string' ? href : typeof href?.href === 'string' ? href.href : null;

  if (!relationHref) {
    const entityId = getEntityId(entity);
    if (entityId == null) return [];
    relationHref = `/api/entities/${entityId}/relations/${relationName}`;
  }

  try {
    const response = await client.raw.getAsync<{ children?: unknown; parents?: unknown }>(
      relationHref,
    );
    if (!response.isSuccessStatusCode) return [];
    const body = response.content;
    if (body == null) return [];
    const fromChildren = idsFromHrefList(body.children);
    if (fromChildren.length > 0) return fromChildren;
    return idsFromHrefList(body.parents);
  } catch (err) {
    WARN('Could not fetch relation children', relationName, err);
    return [];
  }
}

async function resolveArtworkIds(
  client: ContentHubClient,
  entity: IEntity,
  relationName: string,
): Promise<number[]> {
  let ids = getRelationIds(entity, relationName);
  if (ids.length > 0) return ids;
  ids = await fetchRelationIdsFromApi(client, entity, relationName);
  return ids;
}

function hrefToString(href: unknown): string | null {
  if (typeof href === 'string' && href.length > 0) return href;
  if (href != null && typeof href === 'object') {
    const nested = (href as { href?: unknown }).href;
    if (typeof nested === 'string' && nested.length > 0) return nested;
  }
  return null;
}

function readPropertyString(val: unknown): string | null {
  if (typeof val === 'string' && val.trim().length > 0) return val.trim();
  if (val != null && typeof val === 'object' && !Array.isArray(val)) {
    const o = val as Record<string, unknown>;
    if (typeof o['en-US'] === 'string' && o['en-US'].trim().length > 0) return o['en-US'].trim();
    for (const v of Object.values(o)) {
      if (typeof v === 'string' && v.trim().length > 0) return v.trim();
    }
  }
  return null;
}

function getArtworkPreviewFromRenditions(renditions: unknown): string | null {
  if (renditions == null || typeof renditions !== 'object') return null;
  const r = renditions as Record<string, unknown>;
  for (const name of RENDITION_PRIORITY) {
    const items = r[name];
    if (!Array.isArray(items) || items.length === 0) continue;
    const url = hrefToString(items[0]?.href ?? items[0]);
    if (url) return url;
  }
  return null;
}

/** Prefer preview rendition; falls back to thumbnail and other image renditions. */
function getArtworkPreview(entity: IEntity): string | null {
  for (const name of RENDITION_PRIORITY) {
    try {
      const rendition = (entity as any).getRendition?.(name);
      const url = hrefToString(rendition?.items?.[0]?.href);
      if (url) return url;
    } catch { /* rendition not loaded */ }
  }

  if (Array.isArray(entity.renditions)) {
    for (const name of RENDITION_PRIORITY) {
      const rendition = entity.renditions.find(r => r.name === name);
      const url = hrefToString(rendition?.items?.[0]?.href);
      if (url) return url;
    }
  }

  const raw = entity as any;
  const fromRaw = getArtworkPreviewFromRenditions(raw.renditions);
  if (fromRaw) return fromRaw;

  try {
    const link =
      raw.getPublicLink?.('preview') ??
      raw.getPublicLink?.('thumbnail');
    return typeof link === 'string' ? link : null;
  } catch {
    return null;
  }
}

async function resolveArtworkPreview(
  client: ContentHubClient,
  entity: IEntity,
  entityId: number,
): Promise<string | null> {
  const direct = getArtworkPreview(entity);
  if (direct) return direct;

  try {
    const response = await client.raw.getAsync<{ renditions?: unknown }>(
      `/api/entities/${entityId}`,
    );
    if (response.isSuccessStatusCode && response.content) {
      return getArtworkPreviewFromRenditions(response.content.renditions);
    }
  } catch (err) {
    WARN(`Could not fetch renditions for artwork ${entityId}`, err);
  }
  return null;
}

function getArtworkTitle(entity: IEntity): string {
  for (const prop of ['ArtworkTitle', 'Artwork.Title', 'Artwork.Name', 'title', 'Title', 'name', 'Name']) {
    try {
      const val = readPropertyString((entity as any).getPropertyValue(prop));
      if (val) return val;
    } catch { /* not on this definition */ }
  }

  const raw = entity as any;
  const props = raw.properties as Record<string, unknown> | undefined;
  if (props) {
    const direct = readPropertyString(props.ArtworkTitle);
    if (direct) return direct;
    for (const key of Object.keys(props)) {
      if (!/artwork.*title|^title$/i.test(key)) continue;
      const val = readPropertyString(props[key]);
      if (val) return val;
    }
  }

  const id = getEntityId(entity);
  return entity.identifier ?? raw.systemProperties?.identifier ?? (id != null ? `#${id}` : 'Unknown');
}

function readPropertyNumber(entity: IEntity, name: string): number | null {
  try {
    const val = (entity as any).getPropertyValue(name);
    if (typeof val === 'number' && !Number.isNaN(val)) return val;
    if (typeof val === 'string') {
      const n = parseFloat(val);
      return Number.isNaN(n) ? null : n;
    }
  } catch { /* not on definition */ }
  const raw = (entity as any).properties?.[name];
  if (typeof raw === 'number' && !Number.isNaN(raw)) return raw;
  if (typeof raw === 'string') {
    const n = parseFloat(raw);
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

function buildArtworkDetailsFromProperties(props: Record<string, unknown>): ArtworkDetails {
  const num = (key: string) => {
    const v = props[key];
    if (typeof v === 'number' && !Number.isNaN(v)) return v;
    if (typeof v === 'string') {
      const n = parseFloat(v);
      return Number.isNaN(n) ? null : n;
    }
    return null;
  };
  return {
    heightCm: num('ArtHeight'),
    lengthCm: num('ArtLength'),
    depthCm: num('ArtDepth'),
    widthCm: num('ArtWidth'),
    diameterCm: num('ArtDiameter'),
    dimensionUnframed: readPropertyString(props.DimensionUnframed),
    dimensionFramed: readPropertyString(props.DimensionFramed),
    weightKg: num('ArtworkWeight'),
    listPrice: num('ArtworkListPrice'),
  };
}

function buildArtworkDetails(entity: IEntity): ArtworkDetails {
  const getStr = (name: string) => {
    try {
      return readPropertyString((entity as any).getPropertyValue(name));
    } catch {
      return readPropertyString((entity as any).properties?.[name]);
    }
  };
  return {
    heightCm: readPropertyNumber(entity, 'ArtHeight'),
    lengthCm: readPropertyNumber(entity, 'ArtLength'),
    depthCm: readPropertyNumber(entity, 'ArtDepth'),
    widthCm: readPropertyNumber(entity, 'ArtWidth'),
    diameterCm: readPropertyNumber(entity, 'ArtDiameter'),
    dimensionUnframed: getStr('DimensionUnframed'),
    dimensionFramed: getStr('DimensionFramed'),
    weightKg: readPropertyNumber(entity, 'ArtworkWeight'),
    listPrice: readPropertyNumber(entity, 'ArtworkListPrice'),
  };
}

function hasArtworkDetails(d: ArtworkDetails): boolean {
  return !!(
    formatDimensions(d) ||
    d.weightKg != null ||
    d.listPrice != null
  );
}

async function fetchArtworkDetailsFromApi(
  client: ContentHubClient,
  entityId: number,
): Promise<ArtworkDetails | null> {
  try {
    const response = await client.raw.getAsync<{ properties?: Record<string, unknown> }>(
      `/api/entities/${entityId}`,
    );
    if (response.isSuccessStatusCode && response.content?.properties) {
      return buildArtworkDetailsFromProperties(response.content.properties);
    }
  } catch { /* optional enrichment */ }
  return null;
}

function formatDimensions(d: ArtworkDetails): string | null {
  if (d.dimensionUnframed) return d.dimensionUnframed;
  if (d.dimensionFramed) return `Framed: ${d.dimensionFramed}`;
  const parts: string[] = [];
  if (d.lengthCm != null) parts.push(`${d.lengthCm}`);
  if (d.heightCm != null) parts.push(`${d.heightCm}`);
  if (d.depthCm != null) parts.push(`${d.depthCm}`);
  if (d.widthCm != null) parts.push(`W ${d.widthCm}`);
  if (d.diameterCm != null) parts.push(`Ø ${d.diameterCm}`);
  if (parts.length === 0) return null;
  return `${parts.join(' × ')} cm`;
}

function formatPrice(price: number | null): string | null {
  if (price == null) return null;
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(price);
}

function zoneCenter(dz: DropZone): { cx: number; cy: number } {
  return { cx: dz.x + dz.width / 2, cy: dz.y + dz.height / 2 };
}

interface PointerDragState {
  artwork: Artwork;
  sourceZoneId: string | null;
}

function applyPlacement(
  placements: Placements,
  artwork: Artwork,
  targetZoneId: string,
  sourceZoneId: string | null,
): Placements {
  const next = { ...placements };
  if (sourceZoneId) {
    if (sourceZoneId === targetZoneId) return placements;
    const displaced = next[targetZoneId];
    next[targetZoneId] = artwork;
    if (displaced) next[sourceZoneId] = displaced;
    else delete next[sourceZoneId];
  } else {
    if (next[targetZoneId]) return placements;
    next[targetZoneId] = artwork;
  }
  return next;
}

function findZoneAtPoint(
  positions: Record<string, { left: number; top: number }>,
  clientX: number,
  clientY: number,
  wrapRect: DOMRect,
): string | null {
  const x = clientX - wrapRect.left;
  const y = clientY - wrapRect.top;
  for (const dz of DROP_ZONES) {
    const p = positions[dz.id];
    if (!p) continue;
    if (
      x >= p.left && x <= p.left + PLACED_SIZE_PX &&
      y >= p.top && y <= p.top + PLACED_SIZE_PX
    ) {
      return dz.id;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// HOOK — loads artworks from ExhibitionToArtwork relation
// ---------------------------------------------------------------------------

function useExhibitionArtworks(
  client: ContentHubClient,
  entity: IEntity,
  relationName: string,
  fallbackEntityId?: number,
) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  const entityId = getEntityId(entity, fallbackEntityId);

  useEffect(() => {
    if (!client || !entity) return;
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      LOG('Loading artworks from relation:', relationName);

      try {
        let ids = getRelationIds(entity, relationName);

        if (ids.length === 0) {
          const resolvedId = getEntityId(entity, fallbackEntityId);
          if (resolvedId == null) {
            setError('Exhibition entity has no id.');
            return;
          }

          const loadConfig = new EntityLoadConfiguration();
          loadConfig.relationLoadOption = RelationLoadOption.All;
          loadConfig.propertyLoadOption = PropertyLoadOption.All;
          loadConfig.cultureLoadOption  = CultureLoadOption.Default;

          const exhibition = await client.entities.getAsync(resolvedId, loadConfig);
          if (cancelled) return;
          ids = exhibition
            ? await resolveArtworkIds(client, exhibition, relationName)
            : await fetchRelationIdsFromApi(client, entity, relationName);
        }

        LOG(`Found ${ids.length} artwork IDs in relation "${relationName}"`, ids);

        if (ids.length === 0) {
          setArtworks([]);
          return;
        }

        const artworkConfig = new EntityLoadConfiguration();
        artworkConfig.propertyLoadOption = PropertyLoadOption.All;
        artworkConfig.cultureLoadOption  = CultureLoadOption.Default;

        const entities = await client.entities.getManyAsync(ids, artworkConfig);
        if (cancelled) return;

        const byId = new Map<number, IEntity>();
        for (const e of entities) {
          const id = getEntityId(e);
          if (id != null) byId.set(id, e);
        }

        const loaded: Artwork[] = (
          await Promise.all(
            ids.map(async (id): Promise<Artwork | null> => {
              const e = byId.get(id);
              if (!e) return null;
              const preview = await resolveArtworkPreview(client, e, id);
              let details = buildArtworkDetails(e);
              if (!hasArtworkDetails(details)) {
                const fromApi = await fetchArtworkDetailsFromApi(client, id);
                if (fromApi) details = fromApi;
              }
              return {
                id,
                title: getArtworkTitle(e),
                preview,
                details,
              };
            }),
          )
        ).filter((a): a is Artwork => a != null);

        LOG(`Loaded ${loaded.length} artworks`, loaded);
        setArtworks(loaded);
      } catch (err) {
        WARN('Load failed', err);
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load artworks');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [client, entity, entityId, relationName, fallbackEntityId]);

  return { artworks, loading, error };
}

// ---------------------------------------------------------------------------
// FLOORPLAN SVG
// Renders the gallery layout with interactive drop zones overlaid.
// Drop zones use foreignObject for drag/drop event handling.
// ---------------------------------------------------------------------------

interface FloorplanSVGProps {
  svgRef: React.RefObject<SVGSVGElement>;
}

function FloorplanSVG({ svgRef }: FloorplanSVGProps) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 590 410"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }}
    >
      {/* ── Room outlines ── */}
      {/* Gallery 1 */}
      <rect x="10" y="10" width="260" height="270" fill="none" stroke="#444441" strokeWidth="1.2"/>
      <text x="90" y="148" fontSize="13" fontWeight="500" fill="#444441" fontFamily="sans-serif">Gallery 1</text>
      {/* Gallery 2 */}
      <rect x="270" y="10" width="190" height="140" fill="none" stroke="#444441" strokeWidth="1.2"/>
      <text x="328" y="82" fontSize="13" fontWeight="500" fill="#444441" fontFamily="sans-serif">Gallery 2</text>
      {/* Gallery 3 */}
      <rect x="270" y="280" width="190" height="100" fill="none" stroke="#444441" strokeWidth="1.2"/>
      <text x="318" y="338" fontSize="13" fontWeight="500" fill="#444441" fontFamily="sans-serif">Gallery 3</text>
      {/* Gallery 4 */}
      <rect x="460" y="10" width="120" height="270" fill="none" stroke="#444441" strokeWidth="1.2"/>
      <text x="468" y="148" fontSize="13" fontWeight="500" fill="#444441" fontFamily="sans-serif">Gallery 4</text>
      {/* Support */}
      <rect x="460" y="348" width="120" height="52" fill="none" stroke="#444441" strokeWidth="1.2"/>
      <text x="484" y="378" fontSize="11" fontWeight="500" fill="#444441" fontFamily="sans-serif">Support</text>

      {/* ── Dimension labels ── */}
      <text x="95"  y="7"   fontSize="9" fill="#888780" fontFamily="sans-serif">24 m</text>
      <text x="340" y="7"   fontSize="9" fill="#888780" fontFamily="sans-serif">20 m</text>
      <text x="148" y="398" fontSize="9" fill="#888780" fontFamily="sans-serif">20 m</text>
      <text x="498" y="398" fontSize="9" fill="#888780" fontFamily="sans-serif">10 m</text>
      <text x="5"   y="150" fontSize="9" fill="#888780" fontFamily="sans-serif" transform="rotate(-90,8,150)">32 m</text>
      <text x="582" y="150" fontSize="9" fill="#888780" fontFamily="sans-serif" transform="rotate(90,585,150)">28 m</text>

      {/* ── Scale bar ── */}
      <line x1="10" y1="405" x2="60" y2="405" stroke="#888780" strokeWidth="1"/>
      <line x1="10" y1="402" x2="10" y2="408" stroke="#888780" strokeWidth="1"/>
      <line x1="60" y1="402" x2="60" y2="408" stroke="#888780" strokeWidth="1"/>
      <text x="14" y="412" fontSize="8" fill="#888780" fontFamily="sans-serif">10 metres</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// PLACED ARTWORKS — HTML overlay for true pixel sizing
// ---------------------------------------------------------------------------

function useZoneScreenPositions(
  svgRef: React.RefObject<SVGSVGElement>,
  wrapRef: React.RefObject<HTMLDivElement>,
  dropZones: DropZone[],
): Record<string, { left: number; top: number }> {
  const [positions, setPositions] = useState<Record<string, { left: number; top: number }>>({});

  useLayoutEffect(() => {
    const update = () => {
      const svg = svgRef.current;
      const wrap = wrapRef.current;
      if (!svg || !wrap) return;

      const wrapRect = wrap.getBoundingClientRect();
      const ctm = svg.getScreenCTM();
      if (!ctm) return;

      const next: Record<string, { left: number; top: number }> = {};
      for (const dz of dropZones) {
        const { cx, cy } = zoneCenter(dz);
        const pt = svg.createSVGPoint();
        pt.x = cx;
        pt.y = cy;
        const screen = pt.matrixTransform(ctm);
        next[dz.id] = {
          left: screen.x - wrapRect.left - PLACED_SIZE_PX / 2,
          top: screen.y - wrapRect.top - PLACED_SIZE_PX / 2,
        };
      }
      setPositions(next);
    };

    update();
    const ro = new ResizeObserver(update);
    if (svgRef.current) ro.observe(svgRef.current);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', update);
    const t1 = window.setTimeout(update, 0);
    const t2 = window.setTimeout(update, 200);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [svgRef, wrapRef, dropZones]);

  return positions;
}

interface ZoneLayerProps {
  svgRef: React.RefObject<SVGSVGElement>;
  wrapRef: React.RefObject<HTMLDivElement>;
  dropZones: DropZone[];
  placements: Placements;
  dragOverId: string | null;
  onPlacedDragStart: (dzId: string, artwork: Artwork, e: React.PointerEvent) => void;
  onClear: (dzId: string) => void;
  onPlacedHover: (artwork: Artwork, e: React.MouseEvent) => void;
  onPlacedHoverEnd: () => void;
  onZonePositions: (positions: Record<string, { left: number; top: number }>) => void;
}

function ZoneInteractionLayer({
  svgRef, wrapRef, dropZones, placements, dragOverId,
  onPlacedDragStart, onClear,
  onPlacedHover, onPlacedHoverEnd, onZonePositions,
}: ZoneLayerProps) {
  const positions = useZoneScreenPositions(svgRef, wrapRef, dropZones);

  useEffect(() => {
    onZonePositions(positions);
  }, [positions, onZonePositions]);

  return (
    <div className="fp-zone-layer">
      {dropZones.map(dz => {
        const pos = positions[dz.id];
        if (pos == null) return null;
        const placed = placements[dz.id];
        const isOccupied = !!placed;
        const shortLabel = dz.label.split('·')[1]?.trim() ?? dz.id;
        if (!isOccupied) {
          return (
            <div
              key={dz.id}
              className={`fp-zone fp-zone--empty${dragOverId === dz.id ? ' fp-zone--drag-over' : ''}`}
              style={{ left: pos.left, top: pos.top }}
              data-zone-id={dz.id}
            >
              <span className="fp-zone__label">{shortLabel}</span>
            </div>
          );
        }

        return (
          <div
            key={dz.id}
            className={`fp-zone fp-zone--placed${dragOverId === dz.id ? ' fp-zone--drag-over' : ''}`}
            style={{ left: pos.left, top: pos.top }}
            data-zone-id={dz.id}
            onPointerDown={e => {
              if (e.button !== 0) return;
              if ((e.target as HTMLElement).closest('.fp-zone__clear')) return;
              e.preventDefault();
              e.stopPropagation();
              onPlacedDragStart(dz.id, placed, e);
            }}
            onMouseEnter={e => onPlacedHover(placed, e)}
            onMouseLeave={onPlacedHoverEnd}
            onMouseMove={e => onPlacedHover(placed, e)}
          >
            {placed.preview ? (
              <img
                src={placed.preview}
                alt={placed.title}
                className="fp-zone__img"
                draggable={false}
              />
            ) : (
              <div className="fp-zone__img fp-zone__img--empty">🖼</div>
            )}
            <button
              type="button"
              className="fp-zone__clear"
              aria-label={`Remove ${placed.title}`}
              onPointerDown={e => e.stopPropagation()}
              onClick={e => {
                e.stopPropagation();
                onClear(dz.id);
              }}
            >
              ✕
            </button>
            <div className="fp-zone__title">{placed.title}</div>
          </div>
        );
      })}
    </div>
  );
}

interface FloorplanViewProps {
  dropZones: DropZone[];
  placements: Placements;
  dragOverId: string | null;
  wrapRef: React.RefObject<HTMLDivElement>;
  onPlacedDragStart: (dzId: string, artwork: Artwork, e: React.PointerEvent) => void;
  onClear: (dzId: string) => void;
  onPlacedHover: (artwork: Artwork, e: React.MouseEvent) => void;
  onPlacedHoverEnd: () => void;
  onZonePositions: (positions: Record<string, { left: number; top: number }>) => void;
}

function FloorplanView(props: FloorplanViewProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="fp-floorplan-wrap" ref={props.wrapRef}>
      <FloorplanSVG svgRef={svgRef} />
      <ZoneInteractionLayer
        svgRef={svgRef}
        wrapRef={props.wrapRef}
        dropZones={props.dropZones}
        placements={props.placements}
        dragOverId={props.dragOverId}
        onPlacedDragStart={props.onPlacedDragStart}
        onClear={props.onClear}
        onPlacedHover={props.onPlacedHover}
        onPlacedHoverEnd={props.onPlacedHoverEnd}
        onZonePositions={props.onZonePositions}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// HOVER PREVIEW MODAL
// ---------------------------------------------------------------------------

function clampPreviewPosition(x: number, y: number): { left: number; top: number } {
  const modalW = 176;
  const modalH = 300;
  const pad = 14;
  let left = x + pad;
  let top = y + pad;
  if (left + modalW > window.innerWidth) left = x - modalW - pad;
  if (top + modalH > window.innerHeight) top = y - modalH - pad;
  return { left: Math.max(8, left), top: Math.max(8, top) };
}

interface ArtworkHoverPreviewProps {
  artwork: Artwork;
  x: number;
  y: number;
}

function ArtworkHoverPreview({ artwork, x, y }: ArtworkHoverPreviewProps) {
  const { left, top } = clampPreviewPosition(x, y);
  const dims = formatDimensions(artwork.details);
  const price = formatPrice(artwork.details.listPrice);
  const weight =
    artwork.details.weightKg != null ? `${artwork.details.weightKg} kg` : null;

  return (
    <div
      className="fp-preview-modal"
      style={{ left, top }}
      role="tooltip"
    >
      {artwork.preview ? (
        <img
          src={artwork.preview}
          alt={artwork.title}
          className="fp-preview-modal__img"
          width={150}
          height={150}
        />
      ) : (
        <div className="fp-preview-modal__img fp-preview-modal__img--empty">🖼</div>
      )}
      <div className="fp-preview-modal__body">
        <div className="fp-preview-modal__title">{artwork.title}</div>
        {dims && (
          <div className="fp-preview-modal__row">
            <span className="fp-preview-modal__label">Dimensions</span>
            <span className="fp-preview-modal__value">{dims}</span>
          </div>
        )}
        {weight && (
          <div className="fp-preview-modal__row">
            <span className="fp-preview-modal__label">Weight</span>
            <span className="fp-preview-modal__value">{weight}</span>
          </div>
        )}
        {price && (
          <div className="fp-preview-modal__row">
            <span className="fp-preview-modal__label">List price</span>
            <span className="fp-preview-modal__value">{price}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ARTWORK CARD — draggable item in the sidebar
// ---------------------------------------------------------------------------

interface ArtworkCardProps {
  artwork: Artwork;
  placed: boolean;
  onPointerDragStart: (artwork: Artwork, e: React.PointerEvent) => void;
  onHover: (artwork: Artwork, e: React.MouseEvent) => void;
  onHoverEnd: () => void;
}

function ArtworkCard({ artwork, placed, onPointerDragStart, onHover, onHoverEnd }: ArtworkCardProps) {
  return (
    <div
      className={`fp-artwork-card${placed ? ' fp-artwork-card--placed' : ''}`}
      onPointerDown={e => {
        if (e.button !== 0) return;
        e.preventDefault();
        onPointerDragStart(artwork, e);
      }}
      onMouseEnter={e => onHover(artwork, e)}
      onMouseLeave={onHoverEnd}
      onMouseMove={e => onHover(artwork, e)}
    >
      {artwork.preview ? (
        <img
          src={artwork.preview}
          alt={artwork.title}
          className="fp-artwork-card__thumb"
          draggable={false}
        />
      ) : (
        <div className="fp-artwork-card__thumb fp-artwork-card__thumb--placeholder">
          <span style={{ fontSize: 18 }}>🖼</span>
        </div>
      )}
      <div className="fp-artwork-card__info">
        <div className="fp-artwork-card__title">{artwork.title}</div>
      </div>
      <span
        className={`fp-artwork-card__badge${placed ? ' fp-artwork-card__badge--placed' : ' fp-artwork-card__badge--not-placed'}`}
      >
        {placed ? 'Placed' : 'Not Placed'}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

const FloorplanInner: React.FC<Required<Pick<FloorplanProps, 'client' | 'options' | 'entity'>>> = ({
  client,
  options,
  entity,
}) => {
  const relationName = options?.relationName ?? 'ExhibitionToArtwork';

  const [placements, setPlacements] = useState<Placements>({});
  const [pointerDrag, setPointerDrag] = useState<PointerDragState | null>(null);
  const [ghostPos, setGhostPos] = useState<{ x: number; y: number } | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [zonePositions, setZonePositions] = useState<Record<string, { left: number; top: number }>>({});
  const [hoverPreview, setHoverPreview] = useState<{ artwork: Artwork; x: number; y: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const { artworks, loading, error } = useExhibitionArtworks(
    client,
    entity,
    relationName,
    options?.entityId,
  );

  const placedIds = new Set(Object.values(placements).map(a => Number(a.id)));

  const handleZonePositions = useCallback(
    (positions: Record<string, { left: number; top: number }>) => {
      setZonePositions(positions);
    },
    [],
  );

  const beginPointerDrag = useCallback((artwork: Artwork, sourceZoneId: string | null, e: React.PointerEvent) => {
    setPointerDrag({ artwork, sourceZoneId });
    setGhostPos({ x: e.clientX, y: e.clientY });
    setHoverPreview(null);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const endPointerDrag = useCallback(() => {
    setPointerDrag(null);
    setGhostPos(null);
    setDragOverId(null);
  }, []);

  useEffect(() => {
    if (!pointerDrag) return;

    const onMove = (e: PointerEvent) => {
      setGhostPos({ x: e.clientX, y: e.clientY });
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const zoneId = findZoneAtPoint(zonePositions, e.clientX, e.clientY, rect);
      setDragOverId(zoneId);
    };

    const onUp = (e: PointerEvent) => {
      const wrap = wrapRef.current;
      if (wrap) {
        const rect = wrap.getBoundingClientRect();
        const targetZoneId = findZoneAtPoint(zonePositions, e.clientX, e.clientY, rect);
        if (targetZoneId) {
          setPlacements(prev =>
            applyPlacement(prev, pointerDrag.artwork, targetZoneId, pointerDrag.sourceZoneId),
          );
        }
      }
      endPointerDrag();
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [pointerDrag, zonePositions, endPointerDrag]);

  const handleListPointerDragStart = useCallback((artwork: Artwork, e: React.PointerEvent) => {
    const sourceZoneId =
      Object.entries(placements).find(([, a]) => a.id === artwork.id)?.[0] ?? null;
    beginPointerDrag(artwork, sourceZoneId, e);
  }, [placements, beginPointerDrag]);

  const handlePlacedDragStart = useCallback((dzId: string, artwork: Artwork, e: React.PointerEvent) => {
    beginPointerDrag(artwork, dzId, e);
  }, [beginPointerDrag]);

  const handleClear = useCallback((dzId: string) => {
    setHoverPreview(null);
    setPlacements(prev => {
      const next = { ...prev };
      delete next[dzId];
      return next;
    });
  }, []);

  const handleArtworkHover = useCallback((artwork: Artwork, e: React.MouseEvent) => {
    if (pointerDrag != null) return;
    setHoverPreview({ artwork, x: e.clientX, y: e.clientY });
  }, [pointerDrag]);

  const handleArtworkHoverEnd = useCallback(() => {
    setHoverPreview(null);
  }, []);

  const placedCount   = Object.keys(placements).length;
  const availableCount = DROP_ZONES.length - placedCount;

  return (
    <div className="fp-root">
      {/* Sidebar */}
      <div className="fp-sidebar">
        <div className="fp-sidebar__header">
          <div className="fp-sidebar__title">Artworks</div>
          <div className="fp-sidebar__meta">
            {loading ? 'Loading…' : `${artworks.length} artworks · ${placedCount} placed`}
          </div>
        </div>

        {error && (
          <div className="fp-error">{error}</div>
        )}

        {loading ? (
          <div className="fp-spinner-wrap">
            <div className="fp-spinner"/>
          </div>
        ) : (
          <div className="fp-artwork-list">
            {artworks.map(aw => (
              <ArtworkCard
                key={aw.id}
                artwork={aw}
                placed={placedIds.has(Number(aw.id))}
                onPointerDragStart={handleListPointerDragStart}
                onHover={handleArtworkHover}
                onHoverEnd={handleArtworkHoverEnd}
              />
            ))}
            {artworks.length === 0 && !error && (
              <div className="fp-empty-list">
                No artworks found on relation <code>{relationName}</code>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Floorplan */}
      <div className="fp-canvas">
        <div className="fp-canvas__stats">
          <span className="fp-stat">{placedCount} placed</span>
          <span className="fp-stat fp-stat--muted">{availableCount} positions available</span>
        </div>

        <FloorplanView
          dropZones={DROP_ZONES}
          placements={placements}
          dragOverId={dragOverId}
          wrapRef={wrapRef}
          onPlacedDragStart={handlePlacedDragStart}
          onClear={handleClear}
          onPlacedHover={handleArtworkHover}
          onPlacedHoverEnd={handleArtworkHoverEnd}
          onZonePositions={handleZonePositions}
        />

        {pointerDrag && ghostPos && (
          <div
            className="fp-drag-ghost"
            style={{
              left: ghostPos.x - PLACED_SIZE_PX / 2,
              top: ghostPos.y - PLACED_SIZE_PX / 2,
              width: PLACED_SIZE_PX,
              height: PLACED_SIZE_PX,
            }}
          >
            {pointerDrag.artwork.preview ? (
              <img src={pointerDrag.artwork.preview} alt="" className="fp-drag-ghost__img" draggable={false} />
            ) : (
              <div className="fp-drag-ghost__empty">🖼</div>
            )}
          </div>
        )}

        <div className="fp-legend">
          <div className="fp-legend__item">
            <div className="fp-legend__dot" style={{ background: '#7F77DD', opacity: 0.6 }}/>
            <span>Available</span>
          </div>
          <div className="fp-legend__item">
            <div className="fp-legend__dot" style={{ background: '#1D9E75', opacity: 0.8 }}/>
            <span>Placed</span>
          </div>
        </div>
      </div>

      {hoverPreview && (
        <ArtworkHoverPreview
          artwork={hoverPreview.artwork}
          x={hoverPreview.x}
          y={hoverPreview.y}
        />
      )}
    </div>
  );
};

const Floorplan: React.FC<FloorplanProps> = ({ client, options, entity }) => {
  if (!entity) {
    return (
      <div className="fp-empty">
        <p>No exhibition entity found. Add this component to an Exhibition detail page.</p>
      </div>
    );
  }
  return <FloorplanInner client={client} options={options} entity={entity} />;
};

export default React.memo(Floorplan);


