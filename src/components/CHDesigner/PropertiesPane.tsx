import React from 'react';
import { defaultEditableContent, layerAllowsContentEdit, layerAllowsTransform } from './policy';
import { useDesignerAction, useDesignerMode, useLayers, useSelection } from './store';
import type { Layer } from './types';

function NumberField({
  label,
  value,
  onChange,
  disabled,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  disabled?: boolean;
}) {
  return (
    <label className="chd-field">
      <span>{label}</span>
      <input
        type="number"
        disabled={disabled}
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
  const mode = useDesignerMode();
  const isAdmin = mode === 'admin';

  const selected = layers.filter((l) => selection.includes(l.id));
  const layer: Layer | null = selected.length === 1 ? selected[0] : null;

  const patch = (partial: Partial<Layer>) => {
    if (!layer) return;
    dispatch({ type: 'UPDATE_LAYER', id: layer.id, patch: partial });
  };

  const canTransform = layer ? (isAdmin ? !layer.locked : layerAllowsTransform(layer)) : false;
  const canEditContent = layer ? (isAdmin ? !layer.locked : layerAllowsContentEdit(layer)) : false;

  return (
    <aside className="chd-panel chd-properties-panel" aria-label="Properties">
      <div className="chd-panel-header">Properties</div>

      {!layer ? (
        <p className="chd-panel-empty">
          {selected.length > 1 ? `${selected.length} layers selected` : 'Select a layer'}
        </p>
      ) : (
        <div className="chd-properties-body">
          {isAdmin ? (
            <label className="chd-field">
              <span>Name</span>
              <input
                type="text"
                value={layer.name}
                onChange={(e) => patch({ name: e.target.value })}
              />
            </label>
          ) : (
            <div className="chd-field">
              <span>Layer</span>
              <strong>{layer.name}</strong>
            </div>
          )}

          <div className="chd-field-row">
            <NumberField
              label="X"
              value={Math.round(layer.x)}
              disabled={!canTransform}
              onChange={(x) => patch({ x })}
            />
            <NumberField
              label="Y"
              value={Math.round(layer.y)}
              disabled={!canTransform}
              onChange={(y) => patch({ y })}
            />
          </div>
          <div className="chd-field-row">
            <NumberField
              label="W"
              value={Math.round(layer.width)}
              disabled={!canTransform}
              onChange={(width) => patch({ width })}
            />
            <NumberField
              label="H"
              value={Math.round(layer.height)}
              disabled={!canTransform}
              onChange={(height) => patch({ height })}
            />
          </div>

          {canEditContent &&
            (layer.type === 'frame' || layer.type === 'rect' || layer.type === 'image') && (
              <label className="chd-field">
                <span>Fill</span>
                <input
                  type="color"
                  value={layer.fill && /^#/.test(layer.fill) ? layer.fill : '#888780'}
                  onChange={(e) => patch({ fill: e.target.value })}
                />
              </label>
            )}

          {canEditContent && layer.type === 'text' && (
            <>
              <label className="chd-field">
                <span>Text</span>
                <textarea
                  rows={3}
                  value={layer.text || ''}
                  onChange={(e) => patch({ text: e.target.value })}
                />
              </label>
              {isAdmin ? (
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
              ) : (
                <label className="chd-field">
                  <span>Color</span>
                  <input
                    type="color"
                    value={layer.color && /^#/.test(layer.color) ? layer.color : '#1a1a1a'}
                    onChange={(e) => patch({ color: e.target.value })}
                  />
                </label>
              )}
            </>
          )}

          {canEditContent && layer.type === 'image' && (
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

          {isAdmin ? (
            <>
              <label className="chd-field chd-field-checkbox">
                <input
                  type="checkbox"
                  checked={Boolean(layer.locked)}
                  onChange={(e) => patch({ locked: e.target.checked })}
                />
                <span>Locked</span>
              </label>
              <label className="chd-field chd-field-checkbox">
                <input
                  type="checkbox"
                  checked={Boolean(layer.allowTransform)}
                  onChange={(e) => patch({ allowTransform: e.target.checked })}
                />
                <span>Allow transform (end user)</span>
              </label>
              <label className="chd-field chd-field-checkbox">
                <input
                  type="checkbox"
                  checked={defaultEditableContent(layer)}
                  onChange={(e) => patch({ editableContent: e.target.checked })}
                />
                <span>Editable content (end user)</span>
              </label>
            </>
          ) : null}
        </div>
      )}
    </aside>
  );
}
