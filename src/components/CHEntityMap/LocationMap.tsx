/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IEntity } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity';
import { ContentHubClient } from '@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client';
import { EntityLoadConfiguration } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/entity-load-configuration';
import { CultureLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/culture-load-option';
import { RelationLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/relation-load-option';
import { PropertyLoadOption } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/property-load-option';
import {
  classifyDomain,
  DOMAIN_COLORS,
  DOMAIN_LABELS,
  getDefinitionName,
  getEntityLabel,
} from '../../utils/entityDomain';
import './index.css';

type LocationStatus = 'in-transit' | 'stored' | 'on-display' | 'archived' | string;
type ViewMode = 'current' | 'history';

interface LocationRecord {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  date: string | null;
  isCurrent: boolean;
  status: LocationStatus;
  notes: string;
}

interface LocationMapOptions {
  entityId?: number;
  relationName?: string;
  mapHeight?: number;
  useMockData?: boolean;
}

interface LocationMapProps {
  client: ContentHubClient;
  options?: LocationMapOptions;
  entity?: IEntity;
}

const DEFAULT_RELATION = 'EPAM.EntityToLocation';
const DEFAULT_MAP_HEIGHT = 480;

const STATUS_CONFIG: Record<string, { color: string; label: string }> = {
  'in-transit': { color: '#f59e0b', label: 'In Transit' },
  stored:       { color: '#6366f1', label: 'Stored' },
  'on-display': { color: '#10b981', label: 'On Display' },
  'removed-from-display': { color: '#64748b', label: 'Removed from Display' },
  archived:     { color: '#94a3b8', label: 'Archived' },
};

const MOCK_LOCATIONS: LocationRecord[] = [
  {
    id: 1,
    name: 'London Art Storage',
    address: '30 Great Guildford St, London SE1 0HS',
    lat: 51.5042,
    lng: -0.0948,
    date: '2024-10-01T08:00:00Z',
    isCurrent: false,
    status: 'stored',
    notes: 'Held in central London storage before dispatch.',
  },
  {
    id: 2,
    name: 'Move to White Cube Bermondsey',
    address: 'En route to 144-152 Bermondsey St, London SE1 3TQ',
    lat: 51.5018,
    lng: -0.0865,
    date: '2024-10-25T14:00:00Z',
    isCurrent: false,
    status: 'in-transit',
    notes: 'In transit to White Cube Bermondsey for installation.',
  },
  {
    id: 3,
    name: 'White Cube Bermondsey',
    address: '144-152 Bermondsey St, London SE1 3TQ',
    lat: 51.49886,
    lng: -0.07871,
    date: '2024-11-01T10:00:00Z',
    isCurrent: false,
    status: 'on-display',
    notes: 'Exhibited at White Cube Bermondsey gallery.',
  },
  {
    id: 4,
    name: 'Removed from Display',
    address: '144-152 Bermondsey St, London SE1 3TQ',
    lat: 51.49886,
    lng: -0.07871,
    date: '2025-01-20T16:00:00Z',
    isCurrent: false,
    status: 'removed-from-display',
    notes: 'De-installed and removed from display at White Cube Bermondsey.',
  },
  {
    id: 5,
    name: 'Move to Tate Modern',
    address: 'En route to Bankside, London SE1 9TG',
    lat: 51.5032,
    lng: -0.089,
    date: '2025-03-10T11:00:00Z',
    isCurrent: false,
    status: 'in-transit',
    notes: 'In transit to Tate Modern for loan display.',
  },
  {
    id: 6,
    name: 'Tate Modern',
    address: 'Bankside, London SE1 9TG',
    lat: 51.50756,
    lng: -0.09936,
    date: '2025-03-15T09:00:00Z',
    isCurrent: true,
    status: 'on-display',
    notes: 'On loan for display at Tate Modern, Bankside.',
  },
];

function locationTimestamp(loc: LocationRecord): number {
  return loc.date ? new Date(loc.date).getTime() : 0;
}

function sortByDateNewestFirst(locations: LocationRecord[]): LocationRecord[] {
  return [...locations].sort((a, b) => locationTimestamp(b) - locationTimestamp(a));
}

function sortByDateOldestFirst(locations: LocationRecord[]): LocationRecord[] {
  return [...locations].sort((a, b) => locationTimestamp(a) - locationTimestamp(b));
}

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

function getProp(entity: IEntity, ...names: string[]): string {
  for (const name of names) {
    try {
      const val = entity.getPropertyValue(name) as unknown;
      if (val != null && String(val).length > 0) return String(val);
    } catch { /* not loaded */ }
  }
  return '';
}

function getNumberProp(entity: IEntity, ...names: string[]): number {
  for (const name of names) {
    try {
      const val = entity.getPropertyValue(name) as unknown;
      if (typeof val === 'number' && !Number.isNaN(val)) return val;
      if (typeof val === 'string') {
        const n = parseFloat(val);
        if (!Number.isNaN(n)) return n;
      }
    } catch { /* not loaded */ }
  }
  return NaN;
}

function getBoolProp(entity: IEntity, ...names: string[]): boolean {
  for (const name of names) {
    try {
      const val = entity.getPropertyValue(name) as unknown;
      if (typeof val === 'boolean') return val;
    } catch { /* not loaded */ }
  }
  return false;
}

const LOCATION_STATUSES = new Set(Object.keys(STATUS_CONFIG));

function normalizeLocationStatus(raw: string): LocationStatus {
  const key = raw.trim().toLowerCase();
  if (LOCATION_STATUSES.has(key)) return key;
  return 'stored';
}

function mapLocationEntity(entity: IEntity, fallbackId: number): LocationRecord | null {
  const lat = getNumberProp(entity, 'EPAM.latitude', 'latitude', 'Latitude');
  const lng = getNumberProp(entity, 'EPAM.longitude', 'longitude', 'Longitude');
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;

  const locationName =
    getProp(entity, 'EPAM.locationName', 'locationName') ||
    getProp(entity, 'Title', 'title') ||
    'Unnamed';
  const statusRaw = getProp(entity, 'EPAM.locationStatus', 'locationStatus');

  return {
    id: getEntityId(entity) ?? fallbackId,
    name: locationName,
    address: getProp(entity, 'EPAM.addressLine', 'addressLine', 'address', 'Address'),
    lat,
    lng,
    date: getProp(entity, 'EPAM.locationDate', 'locationDate') || null,
    isCurrent: getBoolProp(entity, 'EPAM.isCurrent', 'isCurrent', 'IsCurrent'),
    status: statusRaw ? normalizeLocationStatus(statusRaw) : 'stored',
    notes: getProp(entity, 'EPAM.locationNotes', 'locationNotes', 'notes', 'Notes'),
  };
}

function getRelationIds(entity: IEntity, relationName: string): number[] {
  try {
    const relation = entity.getRelation(relationName);
    if (relation != null) return relation.getIds();
  } catch { /* fall through */ }
  const raw = entity as any;
  const relData = raw.relations?.[relationName];
  if (!Array.isArray(relData)) {
    const entry = raw.relations?.[relationName];
    if (entry?.parent?.href) {
      const m = String(entry.parent.href).match(/\/entities\/(\d+)/);
      if (m) return [parseInt(m[1], 10)];
    }
    if (Array.isArray(entry?.parents)) {
      return entry.parents
        .map((p: { href?: string }) => {
          const m = p.href?.match(/\/entities\/(\d+)/);
          return m ? parseInt(m[1], 10) : null;
        })
        .filter((id: number | null): id is number => id != null);
    }
    return [];
  }
  return relData
    .map((item: unknown) => {
      if (typeof item === 'number') return item;
      if (item != null && typeof item === 'object') {
        const obj = item as Record<string, unknown>;
        if (typeof obj.id === 'number') return obj.id;
        const href = obj.href;
        if (typeof href === 'string') {
          const m = href.match(/\/entities\/(\d+)/);
          if (m) return parseInt(m[1], 10);
        }
      }
      return null;
    })
    .filter((id: number | null): id is number => id != null);
}

function ensureLeafletStyles(): void {
  if (document.getElementById('locationmap-leaflet-css')) return;
  const link = document.createElement('link');
  link.id = 'locationmap-leaflet-css';
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  document.head.appendChild(link);
}

async function fetchLocations(
  client: ContentHubClient,
  entityId: number,
  relationName: string,
): Promise<LocationRecord[]> {
  const loadConfig = new EntityLoadConfiguration();
  loadConfig.relationLoadOption = RelationLoadOption.All;
  loadConfig.propertyLoadOption = PropertyLoadOption.All;
  loadConfig.cultureLoadOption  = CultureLoadOption.Default;

  const rootEntity = await client.entities.getAsync(entityId, loadConfig);
  if (rootEntity == null) return [];

  const relatedIds = getRelationIds(rootEntity, relationName);
  if (relatedIds.length === 0) return [];

  const relatedConfig = new EntityLoadConfiguration();
  relatedConfig.propertyLoadOption = PropertyLoadOption.All;
  relatedConfig.cultureLoadOption  = CultureLoadOption.Default;

  const locations: LocationRecord[] = [];
  await Promise.all(
    relatedIds.map(async id => {
      try {
        const e = await client.entities.getAsync(id, relatedConfig);
        if (e == null) return;
        const mapped = mapLocationEntity(e, id);
        if (mapped != null) locations.push(mapped);
      } catch {
        console.warn(`[LocationMap] Could not load location entity ${id}`);
      }
    }),
  );
  return locations;
}

function useLeafletMap(
  containerRef: React.RefObject<HTMLDivElement | null>,
  locations: LocationRecord[],
  mode: ViewMode,
  onSelect: (loc: LocationRecord) => void,
  active: boolean,
) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polylineRef = useRef<L.Polyline | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!active) {
      setMapReady(false);
      return;
    }

    let map: L.Map | null = null;
    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    const initMap = () => {
      const el = containerRef.current;
      if (cancelled || !el || mapRef.current) return;

      ensureLeafletStyles();
      map = L.map(el, {
        center: [51.503, -0.089],
        zoom: 14,
        zoomControl: true,
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19,
      }).addTo(map);
      mapRef.current = map;
      setMapReady(true);

      resizeObserver = new ResizeObserver(() => {
        map?.invalidateSize();
      });
      resizeObserver.observe(el);

      requestAnimationFrame(() => map?.invalidateSize());
    };

    const frameId = requestAnimationFrame(initMap);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      setMapReady(false);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [active, containerRef]);

  useEffect(() => {
    const map = mapRef.current;
    if (!mapReady || !map) return;

    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];
    polylineRef.current?.remove();
    polylineRef.current = null;

    const route = sortByDateOldestFirst(locations);
    const toShow = mode === 'current'
      ? locations.filter(l => l.isCurrent)
      : route;
    if (toShow.length === 0) return;

    const bounds: L.LatLngExpression[] = [];
    toShow.forEach(loc => {
      const config = STATUS_CONFIG[loc.status] ?? STATUS_CONFIG.stored;
      const pinColor = loc.isCurrent ? '#ef4444' : config.color;
      const routeIndex = mode === 'history' ? route.findIndex(r => r.id === loc.id) + 1 : 0;
      const label = mode === 'history' ? String(routeIndex) : '';
      const svgPin = `<svg width="36" height="48" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30S36 31.5 36 18C36 8.06 27.94 0 18 0z"
              fill="${pinColor}" stroke="white" stroke-width="2"/>
        ${mode === 'history'
          ? `<text x="18" y="23" text-anchor="middle" fill="white" font-size="13" font-weight="bold">${label}</text>`
          : '<circle cx="18" cy="18" r="6" fill="white"/>'}
      </svg>`;
      const icon = L.divIcon({
        html: svgPin,
        className: 'locationmap-pin',
        iconSize: [36, 48],
        iconAnchor: [18, 48],
        popupAnchor: [0, -48],
      });
      const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);
      marker.bindPopup(`<strong>${loc.name}</strong><br/>${loc.address || ''}`);
      marker.on('click', () => onSelect(loc));
      markersRef.current.push(marker);
      bounds.push([loc.lat, loc.lng]);
    });

    if (mode === 'history' && route.length > 1) {
      polylineRef.current = L.polyline(route.map(l => [l.lat, l.lng] as L.LatLngExpression), {
        color: '#6366f1',
        weight: 2.5,
        dashArray: '6 4',
        opacity: 0.7,
      }).addTo(map);
    }

    requestAnimationFrame(() => {
      map.invalidateSize();
      if (bounds.length === 1) map.setView(bounds[0], 14);
      else if (bounds.length > 1) map.fitBounds(L.latLngBounds(bounds), { padding: [40, 40] });
    });
  }, [mapReady, locations, mode, onSelect]);
}

function ModeToggle({ mode, onChange }: { mode: ViewMode; onChange: (m: ViewMode) => void }) {
  return (
    <div className="locationmap-mode-toggle">
      {(['current', 'history'] as ViewMode[]).map(m => (
        <button key={m} type="button" className={`locationmap-mode-btn${mode === m ? ' locationmap-mode-btn--active' : ''}`} onClick={() => onChange(m)}>
          {m === 'current' ? 'Current' : 'History'}
        </button>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: LocationStatus }) {
  const config = STATUS_CONFIG[status] ?? { color: '#94a3b8', label: status };
  return (
    <span className="locationmap-badge" style={{ backgroundColor: `${config.color}22`, color: config.color, borderColor: `${config.color}55` }}>
      {config.label}
    </span>
  );
}

function LocationModal({ location, onClose }: { location: LocationRecord | null; onClose: () => void }) {
  if (!location) return null;
  const formattedDate = location.date
    ? new Date(location.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'No date';
  return (
    <div className="locationmap-modal-overlay" onClick={onClose}>
      <div className="locationmap-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="locationmap-modal__close" onClick={onClose}>X</button>
        <div className="locationmap-modal__header">
          <div className="locationmap-modal__title">{location.name}</div>
          <StatusBadge status={location.status} />
        </div>
        <div className="locationmap-modal__meta">
          <div className="locationmap-meta-row"><span className="locationmap-meta-label">Address</span><span className="locationmap-meta-value">{location.address || '-'}</span></div>
          <div className="locationmap-meta-row"><span className="locationmap-meta-label">Date</span><span className="locationmap-meta-value">{formattedDate}</span></div>
          <div className="locationmap-meta-row"><span className="locationmap-meta-label">Coordinates</span><span className="locationmap-meta-value">{location.lat.toFixed(4)}, {location.lng.toFixed(4)}</span></div>
          {location.isCurrent && <div className="locationmap-current-badge">Current Location</div>}
        </div>
        {location.notes && (
          <div className="locationmap-modal__notes">
            <div className="locationmap-notes-label">Notes</div>
            <div className="locationmap-notes-text">{location.notes}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function LocationList({ locations, onSelect }: { locations: LocationRecord[]; onSelect: (loc: LocationRecord) => void }) {
  const toShow = sortByDateNewestFirst(locations);
  return (
    <aside className="locationmap-sidebar">
      <div className="locationmap-sidebar__title">History — {toShow.length} moves</div>
      <div className="locationmap-list">
        {toShow.map((loc, i) => (
          <div key={loc.id}
            className={`locationmap-list__item${loc.isCurrent ? ' locationmap-list__item--current' : ''}`}
            onClick={() => onSelect(loc)}
          >
            <div className="locationmap-list__index">{i + 1}</div>
            <div className="locationmap-list__info">
              <div className="locationmap-list__name">{loc.name}</div>
              <div className="locationmap-list__date">{loc.date ? new Date(loc.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'}</div>
              <StatusBadge status={loc.status} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

const LocationMap: React.FC<LocationMapProps> = ({ client, options, entity }) => {
  const [mode, setMode] = useState<ViewMode>('history');
  const [locations, setLocations] = useState<LocationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationRecord | null>(null);

  const mapHeight = options?.mapHeight ?? DEFAULT_MAP_HEIGHT;
  const relationName = options?.relationName ?? DEFAULT_RELATION;
  const forceMock = options?.useMockData === true;
  const fallbackToMock = options?.useMockData !== false;
  const entityId = getEntityId(entity ?? ({} as IEntity), options?.entityId);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const handleSelect = useCallback((loc: LocationRecord) => setSelectedLocation(loc), []);
  const mapActive = !loading && !error && locations.length > 0;
  useLeafletMap(mapContainerRef, locations, mode, handleSelect, mapActive);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        if (forceMock || (fallbackToMock && (!client || !entityId))) {
          await new Promise(r => setTimeout(r, 400));
          if (!cancelled) setLocations(MOCK_LOCATIONS);
          return;
        }
        if (!client || !entityId) {
          if (!cancelled) setError('No entity available. Open Location Map from an entity detail page.');
          return;
        }
        const data = await fetchLocations(client, entityId, relationName);
        if (!cancelled) {
          setLocations(data.length > 0 || !fallbackToMock ? data : MOCK_LOCATIONS);
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load locations');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [client, entityId, relationName, forceMock, fallbackToMock]);

  if (loading) return <div className="locationmap-state">Loading locations...</div>;
  if (error) return <div className="locationmap-state locationmap-state--error">{error}</div>;
  if (locations.length === 0) return <div className="locationmap-state">No locations linked to this item yet.</div>;

  const contextDomainKey = entity ? classifyDomain(getDefinitionName(entity)) : undefined;
  const contextLabel = entity ? getEntityLabel(entity) : undefined;
  const contextDomain = contextDomainKey ? DOMAIN_LABELS[contextDomainKey] : undefined;
  const contextDomainColor = contextDomainKey ? DOMAIN_COLORS[contextDomainKey] : undefined;

  return (
    <div className="locationmap-root" style={{ minHeight: mapHeight, position: 'relative' }}>
      <div className="locationmap-toolbar">
        <div className="locationmap-toolbar__heading">
          <div className="locationmap-toolbar__title">Location Tracker</div>
          {contextLabel && contextDomain && (
            <div className="locationmap-toolbar__context">
              <span className="locationmap-toolbar__entity">{contextLabel}</span>
              <span
                className="locationmap-toolbar__domain"
                style={
                  contextDomainColor
                    ? {
                        color: contextDomainColor,
                        background: `${contextDomainColor}18`,
                        borderColor: `${contextDomainColor}44`,
                      }
                    : undefined
                }
              >
                {contextDomain}
              </span>
            </div>
          )}
        </div>
        <ModeToggle mode={mode} onChange={setMode} />
      </div>
      <div className="locationmap-body">
        <LocationList locations={locations} onSelect={handleSelect} />
        <div className="locationmap-map-wrap" style={{ minHeight: mapHeight - 52 }}>
          <div ref={mapContainerRef} className="locationmap-map" />
        </div>
      </div>
      <LocationModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </div>
  );
};

export default React.memo(LocationMap);


