import React from 'react';
import { useDesignerAction, useLayers, useSelection } from './store';
import type { Layer } from './types';

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="chd-field">
      <span>{label}</span>
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

export default function PropertiesPane() {
  const layers = useLayers();
  const selection = useSelection();
  const dispatch = useDesignerAction();

  const selected = layers.filter((l) => selection.includes(l.id));
  const layer: Layer | null = selected.length === 1 ? selected[0] : null;

  const patch = (partial: Partial<Layer>) => {
    if (!layer) return;
    dispatch({ type: 'UPDATE_LAYER', id: layer.id, patch: partial });
  };

  return (
    <aside className="chd-panel chd-properties-panel" aria-label="Properties">
      <div className="chd-panel-header">Properties</div>

      {!layer ? (
        <p className="chd-panel-empty">
          {selected.length > 1 ? `${selected.length} layers selected` : 'Select a layer'}
        </p>
      ) : (
        <div className="chd-properties-body">
          <label className="chd-field">
            <span>Name</span>
            <input
              type="text"
              value={layer.name}
              onChange={(e) => patch({ name: e.target.value })}
            />
          </label>

          <div className="chd-field-row">
            <NumberField label="X" value={Math.round(layer.x)} onChange={(x) => patch({ x })} />
            <NumberField label="Y" value={Math.round(layer.y)} onChange={(y) => patch({ y })} />
          </div>
          <div className="chd-field-row">
            <NumberField
              label="W"
              value={Math.round(layer.width)}
              onChange={(width) => patch({ width })}
            />
            <NumberField
              label="H"
              value={Math.round(layer.height)}
              onChange={(height) => patch({ height })}
            />
          </div>

          {(layer.type === 'frame' || layer.type === 'rect' || layer.type === 'image') && (
            <label className="chd-field">
              <span>Fill</span>
              <input
                type="color"
                value={layer.fill && /^#/.test(layer.fill) ? layer.fill : '#888780'}
                onChange={(e) => patch({ fill: e.target.value })}
              />
            </label>
          )}

          {layer.type === 'text' && (
            <>
              <label className="chd-field">
                <span>Text</span>
                <textarea
                  rows={3}
                  value={layer.text || ''}
                  onChange={(e) => patch({ text: e.target.value })}
                />
              </label>
              <div className="chd-field-row">
                <NumberField
                  label="Size"
                  value={layer.fontSize ?? 16}
                  onChange={(fontSize) => patch({ fontSize })}
                />
                <label className="chd-field">
                  <span>Color</span>
                  <input
                    type="color"
                    value={layer.color && /^#/.test(layer.color) ? layer.color : '#1a1a1a'}
                    onChange={(e) => patch({ color: e.target.value })}
                  />
                </label>
              </div>
            </>
          )}

          {layer.type === 'image' && (
            <label className="chd-field">
              <span>Image URL</span>
              <input
                type="url"
                placeholder="https://…"
                value={layer.src || ''}
                onChange={(e) => patch({ src: e.target.value })}
              />
            </label>
          )}

          <label className="chd-field chd-field-checkbox">
            <input
              type="checkbox"
              checked={Boolean(layer.locked)}
              onChange={(e) => patch({ locked: e.target.checked })}
            />
            <span>Locked</span>
          </label>
        </div>
      )}
    </aside>
  );
}
