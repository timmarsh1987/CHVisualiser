import React from 'react';
import { layerIsSelectable } from './policy';
import { useDesignerAction, useDesignerMode, useLayers, useSelection } from './store';

export default function LayersPanel() {
  const layers = useLayers();
  const selection = useSelection();
  const dispatch = useDesignerAction();
  const mode = useDesignerMode();
  const isAdmin = mode === 'admin';

  const ordered = [...layers]
    .map((layer, index) => ({ layer, index }))
    .reverse()
    .filter(({ layer }) => isAdmin || layerIsSelectable(layer, mode));

  return (
    <aside className="chd-panel chd-layers-panel" aria-label="Layers">
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
                className={`chd-layer-list-item${selected ? ' chd-layer-list-item--selected' : ''}`}
              >
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
