import React, { useEffect, useState } from 'react';
import { fieldKind, magicStringFor, textForVariable, variableHits } from './fields';
import { layerIsSelectable } from './policy';
import { useDesignerAction, useDesignerDocument, useDesignerMode, useLayers, useSelection } from './store';
import type { DesignerField, Layer } from './types';

type LeftSection = 'layers' | 'variables';

const LeftSectionContext = React.createContext<{
  section: LeftSection;
  setSection: (section: LeftSection) => void;
}>({ section: 'layers', setSection: () => {} });

export function LeftSectionProvider({ children }: { children: React.ReactNode }) {
  const [section, setSection] = useState<LeftSection>('layers');
  return <LeftSectionContext.Provider value={{ section, setSection }}>{children}</LeftSectionContext.Provider>;
}

export function useLeftSection() {
  return React.useContext(LeftSectionContext);
}

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
  const { section, setSection } = useLeftSection();
  const showingVariables = isAdmin && section === 'variables';
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
      aria-label={showingVariables ? 'Variables' : 'Layers'}
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
          <span className="chd-panel-rail-label">
            {showingVariables ? 'Variables' : isAdmin ? 'Layers' : 'Editable'}
          </span>
        ) : isAdmin ? (
          <div className="chd-section-tabs" role="tablist" aria-label="Left panel">
            <button
              type="button"
              role="tab"
              aria-selected={section === 'layers'}
              className={`chd-section-tab${section === 'layers' ? ' chd-section-tab--active' : ''}`}
              onClick={() => setSection('layers')}
            >
              Layers
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={section === 'variables'}
              className={`chd-section-tab${section === 'variables' ? ' chd-section-tab--active' : ''}`}
              onClick={() => setSection('variables')}
            >
              Variables
            </button>
          </div>
        ) : (
          <span>Editable layers</span>
        )}
        {collapsed ? null : (
          <div className="chd-panel-header-actions">
            {isAdmin && section === 'layers' ? (
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
      {collapsed ? null : showingVariables ? (
        <Variables document={document} layers={layers} selection={selection} />
      ) : (
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

function usageText(layers: number, pages: number): string {
  if (layers === 0) return 'Not used';
  return `${layers} on ${pages} ${pages === 1 ? 'page' : 'pages'}`;
}

function Variables({
  document,
  layers,
  selection,
}: {
  document: ReturnType<typeof useDesignerDocument>;
  layers: Layer[];
  selection: string[];
}) {
  const dispatch = useDesignerAction();
  const fields = document.fields ?? [];
  const selected = new Set(selection);
  const onThisPage = new Set(layers.map((layer) => layer.id));
  return (
    <section className="chd-variables" aria-label="Variables">
      <div className="chd-variables-toolbar">
        <p className="chd-field-hint">Set the copy for each variable here. It is shown on every frame that uses it.</p>
        <button
          type="button"
          className="chd-btn"
          onClick={() => dispatch({ type: 'ADD_FIELD', kind: 'text', label: 'Variable' })}
        >
          Add
        </button>
      </div>
      {fields.length === 0 ? (
        <p className="chd-panel-empty">No variables</p>
      ) : (
        <ul className="chd-variable-list">
          {fields.map((field) => {
            const hits = variableHits(document, field.id);
            const usedHere = hits.some((hit) =>
              hit.layerIds.some((id) => selected.has(id) && onThisPage.has(id))
            );
            return (
              <VariableCard
                key={field.id}
                field={field}
                hits={hits}
                usedHere={usedHere}
                text={textForVariable(document, field.id)}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

function VariableCard({
  field,
  hits,
  usedHere,
  text,
}: {
  field: DesignerField;
  hits: { pageId: string; layerIds: string[] }[];
  usedHere: boolean;
  text: string | undefined;
}) {
  const dispatch = useDesignerAction();
  const count = hits.reduce((sum, hit) => sum + hit.layerIds.length, 0);
  const token = magicStringFor(field);
  const isImage = fieldKind(field) === 'image';
  return (
    <li className={`chd-variable-card${usedHere ? ' chd-variable-card--active' : ''}`}>
      <div className="chd-variable-row">
        <button
          type="button"
          className="chd-variable-select"
          onClick={() => dispatch({ type: 'FOCUS_FIELD', fieldId: field.id })}
        >
          <span className="chd-variable-token">{token}</span>
          <small>{usageText(count, hits.length)}</small>
        </button>
        <button
          type="button"
          className="chd-icon-btn chd-icon-btn--danger"
          title="Remove variable"
          aria-label={`Remove ${token}`}
          onClick={() => dispatch({ type: 'REMOVE_FIELD', fieldId: field.id })}
        >
          <TrashIcon />
        </button>
      </div>
      <VariableName fieldId={field.id} variable={field.key} />
      <label className="chd-field">
        <span>Label</span>
        <input
          type="text"
          value={field.label}
          onChange={(event) =>
            dispatch({ type: 'SET_FIELD_LABEL', fieldId: field.id, label: event.target.value })
          }
        />
      </label>
      {isImage ? (
        <p className="chd-field-hint">A generation row replaces this image. The picture on the frame stays as the sample.</p>
      ) : text === undefined ? (
        <p className="chd-field-hint">Assign {token} to a text frame to set its copy.</p>
      ) : (
        <label className="chd-field">
          <span>Text</span>
          <textarea
            rows={3}
            aria-label={`Text for ${token}`}
            value={text}
            onChange={(event) =>
              dispatch({ type: 'SET_VARIABLE_TEXT', fieldId: field.id, text: event.target.value })
            }
          />
        </label>
      )}
    </li>
  );
}

function VariableName({ fieldId, variable }: { fieldId: string; variable: string }) {
  const dispatch = useDesignerAction();
  const [draft, setDraft] = useState(variable);
  useEffect(() => setDraft(variable), [variable]);
  return (
    <label className="chd-field">
      <span>Name</span>
      <input
        type="text"
        value={draft}
        spellCheck={false}
        aria-label="Variable name"
        onChange={(event) => setDraft(event.target.value)}
        onBlur={() => dispatch({ type: 'SET_FIELD_KEY', fieldId, key: draft })}
        onKeyDown={(event) => {
          if (event.key === 'Enter') event.currentTarget.blur();
        }}
      />
    </label>
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
