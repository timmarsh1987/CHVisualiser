import React, { useState } from 'react';
import { layerIsSelectable } from './policy';
import { useDesignerAction, useDesignerDocument, useDesignerMode, useLayers, useSelection } from './store';
import type { Layer } from './types';

type ListedLayer = { layer: Layer; index: number };

export default function LayersPanel({
  collapsed = false,
  onToggleCollapse,
}: {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}) {
  const layers = useLayers();
  const document = useDesignerDocument();
  const selection = useSelection();
  const dispatch = useDesignerAction();
  const mode = useDesignerMode();
  const isAdmin = mode === 'admin';
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(() => new Set());

  const ordered = [...layers]
    .map((layer, index) => ({ layer, index }))
    .reverse()
    .filter(({ layer }) => {
      if (layer.role === 'hidden') return false;
      if (layer.role === 'brand' && layer.slot && layer.option) {
        const selected = document.settings?.brands?.[layer.slot];
        if (selected && selected !== layer.option) return false;
      }
      if (!isAdmin) {
        return layer.type !== 'group' && layer.visible !== false && layerIsSelectable(layer, mode, document.settings);
      }
      return true;
    });

  const groupIds = new Set(ordered.filter(({ layer }) => layer.type === 'group').map(({ layer }) => layer.id));
  const parentIdOf = (layer: Layer): string | null => {
    if (layer.type === 'group' || !layer.parentId || !groupIds.has(layer.parentId)) return null;
    return layer.parentId;
  };
  const childrenOf = new Map<string, ListedLayer[]>();
  const roots: ListedLayer[] = [];
  for (const entry of ordered) {
    const parentId = parentIdOf(entry.layer);
    if (!parentId) {
      roots.push(entry);
      continue;
    }
    const list = childrenOf.get(parentId) ?? [];
    list.push(entry);
    childrenOf.set(parentId, list);
  }

  const placeLayer = (fromId: string, target: Layer) => {
    if (fromId === target.id) return;
    const from = layers.find((layer) => layer.id === fromId);
    if (!from) return;
    const toIndex = layers.findIndex((layer) => layer.id === target.id);
    if (toIndex < 0) return;
    if (target.type === 'group' && from.type !== 'group') {
      dispatch({ type: 'PLACE_LAYER', id: fromId, parentId: target.id, toIndex });
      return;
    }
    const parentId = from.type === 'group' ? null : parentIdOf(target);
    dispatch({ type: 'PLACE_LAYER', id: fromId, parentId, toIndex });
  };

  const releaseLayer = (fromId: string) => {
    const fromIndex = layers.findIndex((layer) => layer.id === fromId);
    if (fromIndex < 0) return;
    dispatch({ type: 'PLACE_LAYER', id: fromId, parentId: null, toIndex: fromIndex });
  };

  const toggleGroup = (id: string) => {
    setCollapsedGroups((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderEntry = (entry: ListedLayer, depth: number): React.ReactNode => {
    const { layer, index } = entry;
    const isGroup = layer.type === 'group';
    const selected = selection.includes(layer.id);
    const open = !collapsedGroups.has(layer.id);
    const children = isGroup ? childrenOf.get(layer.id) ?? [] : [];
    return (
      <React.Fragment key={layer.id}>
        <li
          draggable={isAdmin}
          className={`chd-layer-list-item${selected ? ' chd-layer-list-item--selected' : ''}${
            isGroup ? ' chd-layer-list-item--group' : ''
          }${depth > 0 ? ' chd-layer-list-item--child' : ''}${
            draggedId === layer.id ? ' chd-layer-list-item--dragging' : ''
          }${dragOverId === layer.id ? ' chd-layer-list-item--drag-over' : ''}`}
          onDragStart={(event) => {
            if (!isAdmin) return;
            if ((event.target as HTMLElement).closest('.chd-icon-btn')) {
              event.preventDefault();
              return;
            }
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', layer.id);
            setDraggedId(layer.id);
          }}
          onDragOver={(event) => {
            if (!isAdmin) return;
            event.preventDefault();
            event.stopPropagation();
            event.dataTransfer.dropEffect = 'move';
            if (dragOverId !== layer.id) setDragOverId(layer.id);
          }}
          onDragLeave={() => {
            setDragOverId((current) => (current === layer.id ? null : current));
          }}
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const fromId = event.dataTransfer.getData('text/plain') || draggedId;
            if (fromId) placeLayer(fromId, layer);
            setDraggedId(null);
            setDragOverId(null);
          }}
          onDragEnd={() => {
            setDraggedId(null);
            setDragOverId(null);
          }}
        >
          {isAdmin ? (
            <span className="chd-layer-drag-handle" aria-hidden="true" title="Drag to reorder">
              ⋮⋮
            </span>
          ) : null}
          {isAdmin ? (
            isGroup ? (
              <button
                type="button"
                className="chd-icon-btn chd-layer-twist"
                aria-expanded={open}
                aria-label={open ? 'Collapse group' : 'Expand group'}
                onClick={() => toggleGroup(layer.id)}
              >
                {open ? '▾' : '▸'}
              </button>
            ) : (
              <span className="chd-layer-twist" aria-hidden="true" />
            )
          ) : null}
          <button
            type="button"
            className="chd-layer-list-select"
            onClick={(e) =>
              dispatch({
                type: 'SELECT',
                ids: [layer.id],
                additive: e.shiftKey,
              })
            }
          >
            <span className="chd-layer-list-type">{isGroup ? 'group' : layer.type}</span>
            <span className="chd-layer-list-name">{layer.name}</span>
          </button>
          {isAdmin ? (
            <>
              <button
                type="button"
                className={`chd-icon-btn${layer.visible ? '' : ' chd-icon-btn--muted'}`}
                title={layer.visible ? (isGroup ? 'Hide group' : 'Hide') : isGroup ? 'Show group' : 'Show'}
                aria-label={layer.visible ? 'Hide layer' : 'Show layer'}
                aria-pressed={layer.visible}
                onClick={() =>
                  dispatch({
                    type: 'SET_BRANCH',
                    id: layer.id,
                    visible: !layer.visible,
                  })
                }
              >
                <EyeIcon off={!layer.visible} />
              </button>
              <button
                type="button"
                className={`chd-icon-btn${layer.locked ? ' chd-icon-btn--active' : ''}`}
                title={layer.locked ? (isGroup ? 'Unlock group' : 'Unlock') : isGroup ? 'Lock group' : 'Lock'}
                aria-label={layer.locked ? 'Unlock layer' : 'Lock layer'}
                aria-pressed={Boolean(layer.locked)}
                onClick={() =>
                  dispatch({
                    type: 'SET_BRANCH',
                    id: layer.id,
                    locked: !layer.locked,
                  })
                }
              >
                <LockIcon locked={Boolean(layer.locked)} />
              </button>
              <button
                type="button"
                className="chd-icon-btn"
                title="Move up (forward)"
                disabled={index >= layers.length - 1}
                onClick={() => dispatch({ type: 'REORDER', fromIndex: index, toIndex: index + 1 })}
              >
                ↑
              </button>
              <button
                type="button"
                className="chd-icon-btn"
                title="Move down (back)"
                disabled={index <= 0}
                onClick={() => dispatch({ type: 'REORDER', fromIndex: index, toIndex: index - 1 })}
              >
                ↓
              </button>
              <button
                type="button"
                className="chd-icon-btn chd-icon-btn--danger"
                title={isGroup ? 'Remove group. Items inside stay on the page.' : 'Delete'}
                aria-label={isGroup ? 'Remove group' : 'Delete layer'}
                onClick={() =>
                  dispatch({
                    type: 'DELETE_LAYERS',
                    ids: [layer.id],
                  })
                }
              >
                <TrashIcon />
              </button>
            </>
          ) : null}
        </li>
        {isGroup && open ? children.map((child) => renderEntry(child, depth + 1)) : null}
      </React.Fragment>
    );
  };

  return (
    <aside
      className={`chd-panel chd-layers-panel${isAdmin ? ' chd-layers-panel--admin' : ''}${collapsed ? ' chd-panel--collapsed' : ''}`}
      aria-label="Layers"
      onDragOver={(event) => {
        if (!isAdmin || !draggedId) return;
        event.preventDefault();
      }}
      onDrop={(event) => {
        if (!isAdmin) return;
        event.preventDefault();
        const fromId = event.dataTransfer.getData('text/plain') || draggedId;
        if (fromId) releaseLayer(fromId);
        setDraggedId(null);
        setDragOverId(null);
      }}
    >
      <div className="chd-panel-header">
        {collapsed ? (
          <span className="chd-panel-rail-label">{isAdmin ? 'Layers' : 'Editable'}</span>
        ) : (
          <span>{isAdmin ? 'Layers' : 'Editable layers'}</span>
        )}
        {collapsed ? null : (
          <div className="chd-panel-header-actions">
            {isAdmin ? (
              <button
                type="button"
                className="chd-btn"
                title="Group the selected layers. Rename the group in Properties, for example Header."
                onClick={() => dispatch({ type: 'ADD_GROUP' })}
              >
                Group
              </button>
            ) : null}
            {onToggleCollapse ? (
              <button
                type="button"
                className="chd-panel-toggle"
                aria-expanded={!collapsed}
                aria-label="Collapse layers"
                onClick={onToggleCollapse}
              >
                ‹
              </button>
            ) : null}
          </div>
        )}
        {collapsed && onToggleCollapse ? (
          <button
            type="button"
            className="chd-panel-toggle"
            aria-expanded={false}
            aria-label="Expand layers"
            onClick={onToggleCollapse}
          >
            ›
          </button>
        ) : null}
      </div>
      {collapsed ? null : (
        <ul className="chd-layer-list">
          {roots.length === 0 ? (
            <li className="chd-panel-empty">No editable layers</li>
          ) : (
            roots.map((entry) => renderEntry(entry, 0))
          )}
        </ul>
      )}
    </aside>
  );
}

function EyeIcon({ off }: { off: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M1.2 7s2.1-3.6 5.8-3.6S12.8 7 12.8 7s-2.1 3.6-5.8 3.6S1.2 7 1.2 7Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="7" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      {off ? <path d="M2.2 11.8 11.8 2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /> : null}
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.2 3.2h7.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4.6 3.2V2.2h2.8v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.2 3.2l.5 7h4.6l.5-7" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5 5.2v3.2M7 5.2v3.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon({ locked }: { locked: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="2" y="5.5" width="8" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      {locked ? (
        <path d="M4 5.5V3.8a2 2 0 0 1 4 0v1.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      ) : (
        <path d="M4 5.5V3.8a2 2 0 0 1 3.4-1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      )}
    </svg>
  );
}
