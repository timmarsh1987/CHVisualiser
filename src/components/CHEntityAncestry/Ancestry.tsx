/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Fragment,
} from 'react';
import { IEntity } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity';
import { ContentHubClient } from '@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client';
import { EntityLoadConfiguration } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/entity-load-configuration';
import { CultureLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/culture-load-option';
import { RelationLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/relation-load-option';
import { PropertyLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/property-load-option';
import {
  classifyDomain,
  DOMAIN_COLORS,
  DOMAIN_ICONS,
  DOMAIN_LABELS,
  type EntityDomain,
  getDefinitionName,
} from '../../utils/entityDomain';
import './index.css';

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

interface AncestryOptions {
  canvasHeight?: number;
  radius?: number;
  maxPerGroup?: number;
  excludeRelations?: string[];
  showEdgeLabels?: boolean;
}

interface AncestryContextOptions extends AncestryOptions {
  entityId?: number;
}

interface AncestryProps {
  client: ContentHubClient;
  options: AncestryContextOptions;
  entity?: IEntity;
}

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

interface GraphNode {
  id: string;
  entityId: number;
  label: string;
  thumbnail: string | null;
  entityDefinition: string;
  domain: EntityDomain;
  isCenter: boolean;
}

interface GraphEdge {
  id: string;
  sourceId: string;
  targetId: string;
  relationName: string;
}

interface HistoryEntry {
  entityId: number;
  label: string;
}

// ---------------------------------------------------------------------------
// CONSTANTS
// ---------------------------------------------------------------------------

const MIN_CANVAS_W        = 900;
const NODE_W              = 124;
const CENTER_W            = 150;
const CENTER_H            = 120;
const NODE_H              = 108;
const DEFAULT_CANVAS_H    = 560;
const DEFAULT_RADIUS      = 280;
const RENDITION_PRIORITY  = [
  'preview', 'thumbnail', 'bigthumbnail', 'thumbnail_cropped', 'downloadPreview',
] as const;
const DEFAULT_MAX_GROUP   = 8;
const DEFAULT_EDGE_LABELS = false;
const EMPTY_EXCLUDE: string[] = [];

const LOG = (msg: string, ...args: any[]) =>
  console.log(`%c[Ancestry] ${msg}`, 'color:#7F77DD;font-weight:bold', ...args);

const WARN = (msg: string, ...args: any[]) =>
  console.warn(`[Ancestry] ${msg}`, ...args);

const SPIN_KEYFRAMES = `
  @keyframes ancestry-spin { to { transform: rotate(360deg); } }
`;

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

function getEntityId(entity: IEntity, fallbackId?: number): number | undefined {
  if (entity.id != null) return entity.id;
  const raw = entity as any;
  const sys = raw.systemProperties;
  if (sys != null) {
    const sysId = typeof sys.id === 'number' ? sys.id : sys.get?.('id');
    if (typeof sysId === 'number') return sysId;
  }
  return fallbackId;
}

function getLabel(entity: IEntity): string {
  for (const prop of [
    'fileName', 'FileName', 'name', 'Name', 'title', 'Title',
    'label', 'Label', 'productName', 'contentName',
  ]) {
    try {
      const val = (entity as any).getPropertyValue(prop) as unknown;
      if (typeof val === 'string' && val.length > 0) return val;
    } catch { /* property not on this definition */ }
  }
  const id = getEntityId(entity);
  return entity.identifier ?? (id != null ? `#${id}` : 'Unknown');
}

function hrefToString(href: unknown): string | null {
  if (typeof href === 'string' && href.length > 0) return href;
  if (href != null && typeof href === 'object') {
    const nested = (href as { href?: unknown }).href;
    if (typeof nested === 'string' && nested.length > 0) return nested;
  }
  return null;
}

/** Prefer preview rendition URL; falls back to other image renditions. */
function getThumbnail(entity: IEntity): string | null {
  for (const name of RENDITION_PRIORITY) {
    try {
      const rendition = entity.getRendition?.(name);
      const url = hrefToString(rendition?.items?.[0]?.href);
      if (url) return url;
    } catch { /* rendition not on this definition */ }
  }

  const raw = entity as any;
  const renditions = raw.renditions;
  if (renditions != null && typeof renditions === 'object') {
    for (const name of RENDITION_PRIORITY) {
      const items = renditions[name];
      if (!Array.isArray(items) || items.length === 0) continue;
      const url = hrefToString(items[0]?.href ?? items[0]);
      if (url) return url;
    }
  }

  try {
    const link = raw.getPublicLink?.('thumbnail') ?? raw.getPublicLink?.('preview');
    return typeof link === 'string' ? link : null;
  } catch {
    return null;
  }
}

interface RelationLink {
  name: string;
  ids: number[];
}

/** Only relations that actually have linked entity ids (avoids scanning 100+ empty defs). */
function collectRelationsWithIds(
  entity: IEntity,
  maxPerGroup: number,
  excludeRelations: string[],
): RelationLink[] {
  const exclude = new Set(excludeRelations);
  const links: RelationLink[] = [];
  const raw = entity as any;

  if (Array.isArray(raw.relations)) {
    for (const rel of raw.relations) {
      const name = rel?.name;
      if (typeof name !== 'string' || !name || exclude.has(name)) continue;
      const ids = typeof rel.getIds === 'function'
        ? rel.getIds()
        : getRelationIds(entity, name);
      if (ids.length > 0) links.push({ name, ids: ids.slice(0, maxPerGroup) });
    }
    return links;
  }

  if (raw.relations && typeof raw.relations === 'object') {
    for (const name of Object.keys(raw.relations)) {
      if (exclude.has(name)) continue;
      const ids = getRelationIds(entity, name).slice(0, maxPerGroup);
      if (ids.length > 0) links.push({ name, ids });
    }
  }

  return links;
}

function getRelationIds(entity: IEntity, relationName: string): number[] {
  try {
    const relation = entity.getRelation(relationName);
    if (relation != null) return relation.getIds();
  } catch { /* fall through to portal-shaped relations */ }

  const raw = entity as any;
  const relData = raw.relations?.[relationName];
  if (!Array.isArray(relData)) return [];

  return relData
    .map((item: unknown) => {
      if (typeof item === 'number') return item;
      if (item != null && typeof item === 'object') {
        const obj = item as Record<string, unknown>;
        if (typeof obj.id === 'number') return obj.id;
        if (typeof obj.entityId === 'number') return obj.entityId;
      }
      return null;
    })
    .filter((id: number | null): id is number => id != null);
}

// ---------------------------------------------------------------------------
// LAYOUT
// ---------------------------------------------------------------------------

const NODE_GAP = 24;

interface LayoutBody {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fixed: boolean;
}

function getNodeSize(node: GraphNode): { w: number; h: number } {
  return node.isCenter
    ? { w: CENTER_W, h: CENTER_H }
    : { w: NODE_W, h: NODE_H };
}

/** Minimum ring radius so N nodes placed evenly on a circle do not overlap. */
function minRingRadius(count: number, nodeW: number, nodeH: number): number {
  if (count <= 1) return 0;
  const chord = Math.max(nodeW, nodeH) + NODE_GAP;
  const halfAngle = Math.PI / count;
  return chord / (2 * Math.sin(halfAngle));
}

function resolveCollisions(
  bodies: LayoutBody[],
  cx: number,
  cy: number,
  maxRx: number,
  maxRy: number,
  iterations = 120,
): void {
  const movable = bodies.filter(b => !b.fixed);

  for (let iter = 0; iter < iterations; iter++) {
    let moved = false;

    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        const a = bodies[i];
        const b = bodies[j];

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const overlapX = (a.w + b.w) / 2 + NODE_GAP - Math.abs(dx);
        const overlapY = (a.h + b.h) / 2 + NODE_GAP - Math.abs(dy);

        if (overlapX <= 0 || overlapY <= 0) continue;

        moved = true;

        if (overlapX < overlapY) {
          const push = overlapX / 2;
          const dir = dx === 0 ? (i < j ? 1 : -1) : Math.sign(dx);
          if (!a.fixed) a.x -= push * dir;
          if (!b.fixed) b.x += push * dir;
        } else {
          const push = overlapY / 2;
          const dir = dy === 0 ? (i < j ? 1 : -1) : Math.sign(dy);
          if (!a.fixed) a.y -= push * dir;
          if (!b.fixed) b.y += push * dir;
        }
      }
    }

    // Keep satellites inside the drawable ellipse and away from edges.
    for (const body of movable) {
      const nx = (body.x - cx) / maxRx;
      const ny = (body.y - cy) / maxRy;
      const dist = nx * nx + ny * ny;
      if (dist > 1) {
        const scale = 1 / Math.sqrt(dist);
        body.x = cx + (body.x - cx) * scale;
        body.y = cy + (body.y - cy) * scale;
        moved = true;
      }
    }

    if (!moved) break;
  }
}

function computeLayout(
  nodes: GraphNode[],
  _edges: GraphEdge[],
  radius: number,
  canvasWidth: number,
  canvasHeight: number,
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();
  const cx = canvasWidth / 2;
  const cy = canvasHeight / 2;

  const center = nodes.find(n => n.isCenter);
  if (!center) return positions;

  const satellites = nodes.filter(n => !n.isCenter);
  const centerSize = getNodeSize(center);

  const pad = 32;
  const maxRx = cx - centerSize.w / 2 - pad;
  const maxRy = cy - centerSize.h / 2 - pad;

  const minRx = minRingRadius(satellites.length, NODE_W, NODE_H);
  const countBoost = Math.max(0, satellites.length - 4) * 18;

  const rx = Math.min(
    maxRx,
    Math.max(radius + countBoost, minRx, canvasWidth * 0.3),
  );
  const ry = Math.min(
    maxRy,
    Math.max(minRx * 0.82, radius * 0.72 + countBoost * 0.4, canvasHeight * 0.28),
  );

  const bodies: LayoutBody[] = [{
    id: center.id,
    x: cx,
    y: cy,
    w: centerSize.w,
    h: centerSize.h,
    fixed: true,
  }];

  const angleStep = satellites.length > 0 ? (2 * Math.PI) / satellites.length : 0;

  satellites.forEach((node, i) => {
    const size = getNodeSize(node);
    const angle = angleStep * i - Math.PI / 2;
    bodies.push({
      id:     node.id,
      x:      cx + Math.cos(angle) * rx,
      y:      cy + Math.sin(angle) * ry,
      w:      size.w,
      h:      size.h,
      fixed:  false,
    });
  });

  if (satellites.length > 0) {
    resolveCollisions(bodies, cx, cy, maxRx, maxRy);
  }

  for (const body of bodies) {
    positions.set(body.id, { x: body.x, y: body.y });
  }

  return positions;
}

// ---------------------------------------------------------------------------
// HOOK
// ---------------------------------------------------------------------------

function useAncestry(
  client: ContentHubClient,
  initialEntity: IEntity,
  contextEntity: IEntity,
  fallbackEntityId: number | undefined,
  radius: number,
  maxPerGroup: number,
  excludeRelations: string[],
) {
  const [nodes, setNodes]              = useState<GraphNode[]>([]);
  const [edges, setEdges]              = useState<GraphEdge[]>([]);
  const [loading, setLoading]          = useState(true);
  const [transitioning, setTransition] = useState(false);
  const [error, setError]              = useState<string | null>(null);

  const buildSeqRef = useRef(0);
  const contextEntityId = getEntityId(initialEntity) ?? fallbackEntityId;

  const [history, setHistory]           = useState<HistoryEntry[]>(() =>
    contextEntityId
      ? [{ entityId: contextEntityId, label: getLabel(initialEntity) }]
      : [],
  );
  const [historyIndex, setHistoryIndex] = useState(0);

  // Keep history root in sync when Content Hub opens a different entity in context.
  useEffect(() => {
    if (!contextEntityId) return;
    setHistory(prev => {
      if (prev.length > 0 && prev[0].entityId === contextEntityId) return prev;
      return [{ entityId: contextEntityId, label: getLabel(initialEntity) }];
    });
    setHistoryIndex(0);
  }, [contextEntityId]);

  const rootEntityId = history[historyIndex]?.entityId;
  const canGoBack    = historyIndex > 0;
  const canGoForward = historyIndex < history.length - 1;

  const navigateTo = useCallback((entityId: number, label: string) => {
    setHistory(prev => [...prev.slice(0, historyIndex + 1), { entityId, label }]);
    setHistoryIndex(prev => prev + 1);
  }, [historyIndex]);

  const goBack    = useCallback(() => { if (canGoBack)    setHistoryIndex(p => p - 1); }, [canGoBack]);
  const goForward = useCallback(() => { if (canGoForward) setHistoryIndex(p => p + 1); }, [canGoForward]);
  const jumpTo    = useCallback((i: number) => {
    if (i >= 0 && i < history.length) setHistoryIndex(i);
  }, [history.length]);

  useEffect(() => {
    if (!client || !rootEntityId) {
      WARN('build() skipped — missing client or entity id', { client: !!client, rootEntityId });
      setLoading(false);
      setTransition(false);
      setError(rootEntityId ? null : 'No entity id available. Open Ancestry from an entity detail page.');
      return;
    }

    const buildId = ++buildSeqRef.current;
    const isStale = () => buildId !== buildSeqRef.current;

    async function build() {
      LOG('build() started', { rootEntityId, buildId });
      setTransition(true);
      await new Promise(res => setTimeout(res, 150));
      if (isStale()) return;
      setLoading(true);

      try {
        // --- Fetch root entity ---
        const loadConfig = new EntityLoadConfiguration();
        loadConfig.relationLoadOption = RelationLoadOption.All;
        loadConfig.propertyLoadOption = PropertyLoadOption.All;
        loadConfig.cultureLoadOption  = CultureLoadOption.Default;

        LOG('Calling client.entities.getAsync', rootEntityId);
        const fullEntity = await client.entities.getAsync(rootEntityId, loadConfig);

        if (isStale()) return;
        if (fullEntity == null) {
          WARN('getAsync returned null for entity', rootEntityId);
          setError('Entity could not be loaded.');
          return;
        }

        LOG('Loaded entity', {
          id: fullEntity.id,
          definition: getDefinitionName(fullEntity),
        });

        const relationMap = collectRelationsWithIds(fullEntity, maxPerGroup, excludeRelations);
        const allRelatedIds = relationMap.flatMap(r => r.ids);
        LOG(`${relationMap.length} relations with links, ${allRelatedIds.length} related ids`, {
          relations: relationMap.map(r => `${r.name}(${r.ids.length})`),
        });

        // --- Batch load related entities ---
        const relatedConfig = new EntityLoadConfiguration();
        relatedConfig.propertyLoadOption = PropertyLoadOption.All;
        relatedConfig.cultureLoadOption  = CultureLoadOption.Default;

        const relatedMap = new Map<number, IEntity>();
        await Promise.all(
          allRelatedIds.map(async id => {
            try {
              const e = await client.entities.getAsync(id, relatedConfig);
              if (e != null) {
                const def    = getDefinitionName(e);
                const domain = classifyDomain(def);
                relatedMap.set(id, e);
                LOG(`Loaded ${id}: def="${def}" domain="${domain}" label="${getLabel(e)}"`);
              }
            } catch (fetchErr) {
              WARN(`Could not fetch related entity ${id}`, fetchErr);
            }
          }),
        );

        LOG(`Loaded ${relatedMap.size} related entities`);
        if (isStale()) return;

        // --- Build graph ---
        const graphNodes: GraphNode[] = [];
        const graphEdges: GraphEdge[] = [];
        const centerDef = getDefinitionName(fullEntity);
        const centerId  = `center-${fullEntity.id}`;

        LOG(`Center entity: def="${centerDef}" domain="${classifyDomain(centerDef)}"`);

        const centerEntityId = getEntityId(fullEntity);
        if (centerEntityId == null) {
          WARN('Center entity has no resolvable id');
          return;
        }

        graphNodes.push({
          id:               centerId,
          entityId:         centerEntityId,
          label:            getLabel(fullEntity),
          thumbnail:        getThumbnail(fullEntity) ?? getThumbnail(contextEntity),
          entityDefinition: centerDef,
          domain:           classifyDomain(centerDef),
          isCenter:         true,
        });

        for (const { name, ids } of relationMap) {
          for (const relatedId of ids) {
            const related = relatedMap.get(relatedId);
            if (!related) continue;

            const def    = getDefinitionName(related);
            const domain = classifyDomain(def);

            if (domain === 'unknown') {
              LOG(`Skipping entity ${relatedId} def="${def}" — domain unknown`);
              continue;
            }

            const nodeId = `node-${related.id}`;

            if (!graphNodes.find(n => n.id === nodeId)) {
              graphNodes.push({
                id:               nodeId,
                entityId:         related.id as number,
                label:            getLabel(related),
                thumbnail:        getThumbnail(related),
                entityDefinition: def,
                domain,
                isCenter: false,
              });
            }

            graphEdges.push({
              id:           `edge-${centerId}-${nodeId}-${name}`,
              sourceId:     centerId,
              targetId:     nodeId,
              relationName: name,
            });
          }
        }

        LOG(`Graph built: ${graphNodes.length} nodes, ${graphEdges.length} edges`, {
          nodes: graphNodes.map(n => `${n.label} [${n.domain}]`),
        });

        if (isStale()) return;
        setNodes(graphNodes);
        setEdges(graphEdges);
        setError(null);
      } catch (err) {
        console.error('[Ancestry] build() threw:', err);
        if (!isStale()) setError(err instanceof Error ? err.message : 'Failed to load ancestry');
      } finally {
        if (!isStale()) {
          LOG('build() finalising', { rootEntityId, buildId });
          setLoading(false);
          setTransition(false);
        }
      }
    }

    build();
    return () => { /* next build bumps buildSeqRef — stale results are ignored */ };
  }, [client, rootEntityId, maxPerGroup, excludeRelations]);

  return {
    nodes, edges, loading, transitioning, error,
    history, historyIndex, canGoBack, canGoForward,
    navigateTo, goBack, goForward, jumpTo,
  };
}

// ---------------------------------------------------------------------------
// NODE CARD
// ---------------------------------------------------------------------------

interface NodeCardProps {
  node: GraphNode;
  position: { x: number; y: number };
  onNavigate: (entityId: number, label: string) => void;
  onHover: (node: GraphNode | null) => void;
}

function NodeCard({ node, position, onNavigate, onHover }: NodeCardProps) {
  const w           = node.isCenter ? CENTER_W : NODE_W;
  const h           = node.isCenter ? CENTER_H : NODE_H;
  const domainColor = DOMAIN_COLORS[node.domain];
  const icon        = DOMAIN_ICONS[node.domain];

  return (
    <div
      className={`ancestry-node${node.isCenter ? ' ancestry-node--center' : ''}`}
      onMouseEnter={() => !node.isCenter && onHover(node)}
      onMouseLeave={() => onHover(null)}
      onClick={() => !node.isCenter && onNavigate(node.entityId, node.label)}
      style={{
        position:    'absolute',
        left:        position.x - w / 2,
        top:         position.y - h / 2,
        width:       w,
        borderColor: domainColor,
        borderWidth: node.isCenter ? 2 : 1,
        cursor:      node.isCenter ? 'default' : 'pointer',
        zIndex:      node.isCenter ? 5 : 1,
      }}
    >
      {node.thumbnail ? (
        <img
          src={node.thumbnail}
          alt={node.label}
          className="ancestry-node__thumb"
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      ) : (
        <div
          className="ancestry-node__icon"
          style={{ background: `${domainColor}18`, borderColor: `${domainColor}44` }}
        >
          {icon}
        </div>
      )}
      <div className="ancestry-node__label" title={node.label}>{node.label}</div>
      <div className="ancestry-node__domain" style={{ color: domainColor }}>
        {DOMAIN_LABELS[node.domain]}
      </div>
      <div className="ancestry-node__definition">{node.entityDefinition}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// TOOLBAR BUTTON
// ---------------------------------------------------------------------------

function ToolbarButton({
  onClick, disabled = false, children,
}: { onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button
      className={`ancestry-toolbar-btn${disabled ? ' ancestry-toolbar-btn--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// INNER COMPONENT
// ---------------------------------------------------------------------------

const AncestryInner: React.FC<{ client: ContentHubClient; options: AncestryContextOptions; entity: IEntity }> = ({
  client, options, entity,
}) => {
  const canvasHeight  = options?.canvasHeight     ?? DEFAULT_CANVAS_H;
  const radius        = options?.radius           ?? DEFAULT_RADIUS;
  const maxPerGroup   = options?.maxPerGroup      ?? DEFAULT_MAX_GROUP;
  const excludeRels   = useMemo(
    () => options?.excludeRelations ?? EMPTY_EXCLUDE,
    [options?.excludeRelations],
  );
  const defaultLabels = options?.showEdgeLabels   ?? DEFAULT_EDGE_LABELS;
  const fallbackId    = options?.entityId;

  const [showEdgeLabels, setShowEdgeLabels] = useState(defaultLabels);
  const [hovered, setHovered]               = useState<GraphNode | null>(null);
  const [canvasWidth, setCanvasWidth]       = useState(MIN_CANVAS_W);

  const canvasRef = useRef<HTMLDivElement>(null);
  const transform = useRef({ x: 0, y: 0, scale: 1 });
  const isPanning = useRef(false);
  const panStart  = useRef({ x: 0, y: 0 });

  const {
    nodes, edges, loading, transitioning, error,
    history, historyIndex, canGoBack, canGoForward,
    navigateTo, goBack, goForward, jumpTo,
  } = useAncestry(client, entity, entity, fallbackId, radius, maxPerGroup, excludeRels);

  const applyTransform = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y, scale } = transform.current;
    const t = `translate(${x}px, ${y}px) scale(${scale})`;
    const layer = canvas.querySelector<HTMLDivElement>('.ancestry-node-layer');
    const svg   = canvas.querySelector<SVGSVGElement>('.ancestry-edge-svg');
    if (layer) { layer.style.transform = t; layer.style.transformOrigin = '0 0'; }
    if (svg)   { svg.style.transform   = t; svg.style.transformOrigin   = '0 0'; }
  }, []);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.clientWidth;
      if (w > 0) setCanvasWidth(w);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    transform.current = { x: 0, y: 0, scale: 1 };
    applyTransform();
  }, [historyIndex, canvasWidth, applyTransform]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect     = canvas.getBoundingClientRect();
    const mx       = e.clientX - rect.left;
    const my       = e.clientY - rect.top;
    const newScale = Math.max(0.3, Math.min(3, transform.current.scale * (e.deltaY > 0 ? 0.9 : 1.1)));
    const ratio    = newScale / transform.current.scale;
    transform.current = {
      x: mx - (mx - transform.current.x) * ratio,
      y: my - (my - transform.current.y) * ratio,
      scale: newScale,
    };
    applyTransform();
  }, [applyTransform]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.ancestry-node')) return;
    isPanning.current = true;
    panStart.current  = { x: e.clientX - transform.current.x, y: e.clientY - transform.current.y };
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning.current) return;
    transform.current.x = e.clientX - panStart.current.x;
    transform.current.y = e.clientY - panStart.current.y;
    applyTransform();
  };
  const handleMouseUp = () => { isPanning.current = false; };

  const positions      = computeLayout(nodes, edges, radius, canvasWidth, canvasHeight);
  const isActive       = transitioning || loading;
  const presentDomains = Array.from(
    new Set(nodes.filter(n => !n.isCenter).map(n => n.domain))
  ) as EntityDomain[];

  if (error) {
    return (
      <div className="ancestry-root">
        <div className="ancestry-error">Could not load ancestry: {error}</div>
      </div>
    );
  }

  return (
    <div className="ancestry-root">
      <style>{SPIN_KEYFRAMES}</style>

      <div className="ancestry-toolbar">
        <ToolbarButton onClick={() => { transform.current = { x: 0, y: 0, scale: 1 }; applyTransform(); }}>
          ⊹ Reset
        </ToolbarButton>
        <ToolbarButton onClick={goBack} disabled={!canGoBack}>← Back</ToolbarButton>
        <ToolbarButton onClick={goForward} disabled={!canGoForward}>Forward →</ToolbarButton>
        <ToolbarButton onClick={() => setShowEdgeLabels(v => !v)}>
          {showEdgeLabels ? '◎ Hide relations' : '◉ Show relations'}
        </ToolbarButton>
      </div>

      <div className="ancestry-breadcrumb">
        {history.map((entry, i) => (
          <Fragment key={`${entry.entityId}-${i}`}>
            {i > 0 && <span className="ancestry-breadcrumb__sep">›</span>}
            <button
              className={`ancestry-breadcrumb__item${i === historyIndex ? ' ancestry-breadcrumb__item--active' : ''}`}
              onClick={() => jumpTo(i)}
              disabled={i === historyIndex}
            >
              {entry.label}
            </button>
          </Fragment>
        ))}
      </div>

      <div
        ref={canvasRef}
        className="ancestry-canvas"
        style={{ height: canvasHeight }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="ancestry-graph-layer"
          style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? 'none' : 'auto' }}
        >
          <svg
            className="ancestry-edge-svg"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: canvasHeight, pointerEvents: 'none' }}
            viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              <marker id="ancestry-arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>
            {edges.map(edge => {
              const from = positions.get(edge.sourceId);
              const to   = positions.get(edge.targetId);
              if (!from || !to) return null;
              const targetNode = nodes.find(n => n.id === edge.targetId);
              const edgeColor  = targetNode ? DOMAIN_COLORS[targetNode.domain] : '#888';
              const mx = (from.x + to.x) / 2;
              const my = (from.y + to.y) / 2;
              return (
                <g key={edge.id}>
                  <line x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                    stroke={edgeColor} strokeWidth={1} strokeOpacity={0.45}
                    markerEnd="url(#ancestry-arrow)" />
                  {showEdgeLabels && (
                    <text x={mx} y={my - 6} textAnchor="middle"
                      fontSize={9} fill="#999999" fontFamily="inherit">
                      {edge.relationName}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          <div
            className="ancestry-node-layer"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: canvasHeight }}
          >
            {nodes.map(node => {
              const pos = positions.get(node.id);
              if (!pos) return null;
              return (
                <NodeCard key={node.id} node={node} position={pos}
                  onNavigate={navigateTo} onHover={setHovered} />
              );
            })}
          </div>
        </div>

        {isActive && (
          <div className="ancestry-spinner-wrap">
            <div className="ancestry-spinner" />
          </div>
        )}

        {hovered && (
          <div className="ancestry-hover-bar">
            {(() => {
              const rel = edges.find(e => e.targetId === hovered.id);
              return rel
                ? `${rel.relationName} → ${hovered.label} (${hovered.entityDefinition})`
                : hovered.label;
            })()}
          </div>
        )}

        {!isActive && nodes.length <= 1 && (
          <div className="ancestry-empty">
            <div className="ancestry-empty__icon">⬡</div>
            <p>No linked assets, products, content, or taxonomy found</p>
          </div>
        )}
      </div>

      {presentDomains.length > 0 && (
        <div className="ancestry-legend">
          {presentDomains.map(domain => {
            const count = nodes.filter(n => n.domain === domain && !n.isCenter).length;
            return (
              <div key={domain} className="ancestry-legend__item">
                <div className="ancestry-legend__dot" style={{ background: DOMAIN_COLORS[domain] }} />
                {DOMAIN_LABELS[domain]} ({count})
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// OUTER COMPONENT — guards entity before any hook is called
// ---------------------------------------------------------------------------

const Ancestry: React.FC<AncestryProps> = ({ client, options, entity }) => {
  if (!entity) {
    return (
      <div className="ancestry-root">
        <div className="ancestry-empty" style={{ position: 'relative', height: 200 }}>
          <div className="ancestry-empty__icon">⬡</div>
          <p>No entity available. Open Ancestry from an entity detail page.</p>
        </div>
      </div>
    );
  }
  return <AncestryInner client={client} options={options} entity={entity} />;
};

export default React.memo(Ancestry);