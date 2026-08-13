import React from 'react';
import { useDesignerAction, useLayers, useSelection } from './store';

export default function LayersPanel() {
  const layers = useLayers();
  const selection = useSelection();
  const dispatch = useDesignerAction();

  // Show top-most layers first (end of array = front)
  const ordered = [...layers].map((layer, index) => ({ layer, index })).reverse();

  return (
    <aside className="chd-panel chd-layers-panel" aria-label="Layers">
      <div className="chd-panel-header">Layers</div>
      <ul className="chd-layer-list">
        {ordered.map(({ layer, index }) => {
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
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
