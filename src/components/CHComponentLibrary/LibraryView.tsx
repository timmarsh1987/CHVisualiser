import React, { Fragment, useMemo, useState } from 'react';
import {
  CodeXml,
  Info,
  LayoutGrid,
  Monitor,
  Search,
  Smartphone,
  Tablet,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  CATALOG,
  COLUMN_LAYOUTS,
  DEVICES,
  GROUPS,
  type CatalogEntry,
  type DeviceId,
} from './catalog';
import { ComponentRenderer } from './renderers';

type ViewMode = 'canvas' | 'code';

const DEVICE_ICONS: Record<DeviceId, LucideIcon> = {
  desktop: Monitor,
  tablet: Tablet,
  mobile: Smartphone,
};

export interface LibraryViewProps {
  initialComponent?: string;
}

export default function LibraryView({ initialComponent }: LibraryViewProps) {
  const startingComp = CATALOG.find((c) => c.name === initialComponent) ?? CATALOG[6];
  const [selectedComp, setSelectedComp] = useState<CatalogEntry>(startingComp);
  const [device, setDevice] = useState<DeviceId>('desktop');
  const [view, setView] = useState<ViewMode>('canvas');
  const [query, setQuery] = useState('');
  const [layoutId, setLayoutId] = useState<string>('1');

  const grouped = useMemo(() => {
    const filtered = CATALOG.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.group.toLowerCase().includes(query.toLowerCase())
    );
    return GROUPS.map((g) => ({
      group: g,
      items: filtered.filter((c) => c.group === g),
    })).filter((g) => g.items.length > 0);
  }, [query]);

  const activeDevice = DEVICES.find((d) => d.id === device) ?? DEVICES[0];
  const activeLayout = COLUMN_LAYOUTS.find((l) => l.id === layoutId) ?? COLUMN_LAYOUTS[0];

  const settingsJson = {
    componentType: selectedComp.name,
    rowSettings: {
      width: 'full',
      columnLayout: activeLayout.label,
      responsiveness: { override: activeDevice.label },
    },
  };

  return (
    <>
      <aside className="ch-sidebar">
        <div className="ch-sidebar-header">
          <h1>Content Hub Component Library</h1>
          <span>OOTB page components</span>
        </div>
        <div className="ch-sidebar-search">
          <Search size={14} color="#68738d" />
          <input
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="ch-list">
          {grouped.map(({ group, items }) => (
            <div key={group}>
              <div className="ch-cat-label">{group}</div>
              {items.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={`ch-item ${selectedComp.name === item.name ? 'active' : ''}`}
                  onClick={() => setSelectedComp(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>

      <main className="ch-main">
        <header className="ch-page-header">
          <div>
            <h2 className="ch-page-header-title">{selectedComp.name}</h2>
            <p className="ch-page-header-desc">{selectedComp.desc}</p>
          </div>
          <div className="ch-page-header-right">
            <div className="ch-row2">
              <select
                className="ch-select"
                value={layoutId}
                onChange={(e) => setLayoutId(e.target.value)}
              >
                {COLUMN_LAYOUTS.map((l) => (
                  <option key={l.id} value={l.id}>{l.label}</option>
                ))}
              </select>
              <div className="ch-view-toggle">
                <button
                  type="button"
                  className={view === 'canvas' ? 'active' : ''}
                  onClick={() => setView('canvas')}
                >
                  <LayoutGrid size={11} /> Canvas
                </button>
                <button
                  type="button"
                  className={view === 'code' ? 'active' : ''}
                  onClick={() => setView('code')}
                >
                  <CodeXml size={11} /> Row settings
                </button>
              </div>
            </div>
            <div className="ch-size-toggle">
              {DEVICES.map((d) => {
                const Icon = DEVICE_ICONS[d.id];
                return (
                  <button
                    key={d.id}
                    type="button"
                    className={device === d.id ? 'active' : ''}
                    onClick={() => setDevice(d.id)}
                  >
                    <Icon size={11} /> {d.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {view === 'canvas' ? (
          <div className="ch-canvas-wrap">
            <div style={{ width: activeDevice.width, maxWidth: '100%' }}>
              <div className="ch-frame-label">
                {activeDevice.label} · responsiveness override · {activeDevice.width}px
              </div>
              <div className="ch-frame">
                <div className="ch-row">
                  {activeLayout.cols.map((span, i) => (
                    <div
                      key={i}
                      className={`ch-slot ${i !== 0 ? 'ch-slot-empty' : ''}`}
                      style={{ gridColumn: `span ${span}` }}
                    >
                      {i === 0 ? (
                        <Fragment>
                          <span className="ch-slot-tag">{selectedComp.name}</span>
                          <ComponentRenderer kind={selectedComp.kind} />
                        </Fragment>
                      ) : (
                        'empty column'
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="ch-code-panel">
            <div className="ch-assumption">
              <Info size={13} style={{ marginTop: 1, flexShrink: 0 }} />
              <span>
                This mirrors the real Row settings model (Row width, Column layout,
                Responsiveness override), not a fabricated data contract. It doesn&apos;t
                represent a documented public API response, Content Hub&apos;s page
                configuration isn&apos;t exposed that way.
              </span>
            </div>
            <pre>{JSON.stringify(settingsJson, null, 2)}</pre>
          </div>
        )}
      </main>
    </>
  );
}
