import React, { useState } from 'react';
import { layerIsSelectable } from './policy';
import { useDesignerAction, useDesignerMode, useLayers, useSelection } from './store';

export default function LayersPanel() {
  const layers = useLayers();
  const selection = useSelection();
  const dispatch = useDesignerAction();
  const mode = useDesignerMode();
  const isAdmin = mode === 'admin';
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const ordered = [...layers]
    .map((layer, index) => ({ layer, index }))
    .reverse()
    .filter(({ layer }) => isAdmin || layerIsSelectable(layer, mode));

  const reorderById = (fromId: string, toId: string) => {
    if (fromId === toId) return;
    const fromIndex = layers.findIndex((layer) => layer.id === fromId);
    const toIndex = layers.findIndex((layer) => layer.id === toId);
    if (fromIndex < 0 || toIndex < 0) return;
    dispatch({ type: 'REORDER', fromIndex, toIndex });
  };

  return (
    <aside
      className={`chd-panel chd-layers-panel${isAdmin ? ' chd-layers-panel--admin' : ''}`}
      aria-label="Layers"
    >
      <div className="chd-panel-header">{isAdmin ? 'Layers' : 'Editable layers'}</div>
      <ul className="chd-layer-list">
        {ordered.length === 0 ? (
          <li className="chd-panel-empty">No editable layers</li>
        ) : (
          ordered.map(({ layer, index }) => {
            const selected = selection.includes(layer.id);
            return (
              <li
                key={layer.id}
                draggable={isAdmin}
                className={`chd-layer-list-item${selected ? ' chd-layer-list-item--selected' : ''}${
                  draggedId === layer.id ? ' chd-layer-list-item--dragging' : ''
                }${dragOverId === layer.id ? ' chd-layer-list-item--drag-over' : ''}`}
                onDragStart={(event) => {
                  if (!isAdmin) return;
                  if ((event.target as HTMLElement).closest('button')) {
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
                  event.dataTransfer.dropEffect = 'move';
                  if (dragOverId !== layer.id) setDragOverId(layer.id);
                }}
                onDragLeave={() => {
                  setDragOverId((current) => (current === layer.id ? null : current));
                }}
                onDrop={(event) => {
                  event.preventDefault();
                  const fromId = event.dataTransfer.getData('text/plain');
                  if (fromId) reorderById(fromId, layer.id);
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
                  <span className="chd-layer-list-type">{layer.type}</span>
                  <span className="chd-layer-list-name">{layer.name}</span>
                </button>
                {isAdmin ? (
                  <>
                    <button
                      type="button"
                      className="chd-icon-btn"
                      title={layer.visible ? 'Hide' : 'Show'}
                      onClick={() =>
                        dispatch({
                          type: 'SET_VISIBILITY',
                          id: layer.id,
                          visible: !layer.visible,
                        })
                      }
                    >
                      {layer.visible ? '◉' : '○'}
                    </button>
                    <button
                      type="button"
                      className="chd-icon-btn"
                      title="Move up (forward)"
                      disabled={index >= layers.length - 1}
                      onClick={() =>
                        dispatch({ type: 'REORDER', fromIndex: index, toIndex: index + 1 })
                      }
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="chd-icon-btn"
                      title="Move down (back)"
                      disabled={index <= 0}
                      onClick={() =>
                        dispatch({ type: 'REORDER', fromIndex: index, toIndex: index - 1 })
                      }
                    >
                      ↓
                    </button>
                  </>
                ) : null}
              </li>
            );
          })
        )}
      </ul>
    </aside>
  );
}
