import React, { useRef } from 'react';
import { fillLayerToCanvas, pinLayerInPlace } from './constraints';
import {
  CANVAS_PRESET_GROUPS,
  CANVAS_PRESETS,
  findCanvasPreset,
  resolveCanvasPresetId,
} from './printPresets';
import { useDesignerAction, useDesignerApi, useDesignerDocument, useSelection, useViewport } from './store';
import type { LayerType } from './types';

const ADDABLE: { type: LayerType; label: string }[] = [
  { type: 'frame', label: 'Frame' },
  { type: 'rect', label: 'Rect' },
  { type: 'text', label: 'Text' },
  { type: 'image', label: 'Image' },
];

export default function Toolbar() {
  const dispatch = useDesignerAction();
  const selection = useSelection();
  const viewport = useViewport();
  const canvasDocument = useDesignerDocument();
  const { mode, canUndo, canRedo, exportDocument, importDocumentJson } = useDesignerApi();
  const fileRef = useRef<HTMLInputElement>(null);
  const isAdmin = mode === 'admin';
  const presetId = resolveCanvasPresetId(
    canvasDocument.canvas.width,
    canvasDocument.canvas.height,
    canvasDocument.canvas.presetId
  );

  const handleExport = () => {
    const doc = exportDocument();
    const blob = new Blob([JSON.stringify(doc, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = 'chdesigner-document.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (file: File | null) => {
    if (!file) return;
    const text = await file.text();
    const ok = importDocumentJson(text);
    if (!ok) {
      window.alert('Could not import document. Expected CHDesigner JSON (version 1).');
    }
  };

  const handlePresetChange = (id: string) => {
    const preset = findCanvasPreset(id);
    if (!preset) return;
    dispatch({
      type: 'SET_CANVAS_SIZE',
      width: preset.width,
      height: preset.height,
      presetId: preset.id,
    });
  };

  const handlePinInPlace = () => {
    const selected = canvasDocument.layers.filter((layer) => selection.includes(layer.id));
    for (const layer of selected) {
      dispatch({
        type: 'UPDATE_LAYER',
        id: layer.id,
        patch: pinLayerInPlace(),
      });
    }
  };

  const handleFillPage = () => {
    const selected = canvasDocument.layers.filter((layer) => selection.includes(layer.id));
    for (const layer of selected) {
      dispatch({
        type: 'UPDATE_LAYER',
        id: layer.id,
        patch: fillLayerToCanvas(layer, canvasDocument.canvas.width, canvasDocument.canvas.height),
      });
    }
  };

  return (
    <header className="chd-toolbar">
      <div className="chd-toolbar-brand">
        <span className="chd-toolbar-logo-wrap">Logo</span>
        <span className="chd-toolbar-mode">{isAdmin ? 'Admin' : 'Edit'}</span>
      </div>

      {isAdmin ? (
        <div className="chd-toolbar-group">
          {ADDABLE.map((item) => (
            <button
              key={item.type}
              type="button"
              className="chd-btn"
              onClick={() => dispatch({ type: 'ADD_LAYER', layerType: item.type })}
            >
              + {item.label}
            </button>
          ))}
        </div>
      ) : null}

      {isAdmin ? (
        <div className="chd-toolbar-group">
          <label className="chd-toolbar-field">
            <span>Page</span>
            <select
              className="chd-toolbar-select"
              value={presetId}
              onChange={(event) => handlePresetChange(event.target.value)}
            >
              {presetId === 'custom' ? <option value="custom">Custom</option> : null}
              {CANVAS_PRESET_GROUPS.map((group) => (
                <optgroup key={group.id} label={group.label}>
                  {CANVAS_PRESETS.filter((preset) => preset.group === group.id).map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <span className="chd-toolbar-size">
            {Math.round(canvasDocument.canvas.width)} × {Math.round(canvasDocument.canvas.height)}
          </span>
          <button
            type="button"
            className="chd-btn"
            disabled={selection.length === 0}
            onClick={handlePinInPlace}
          >
            Pin to page
          </button>
          <button
            type="button"
            className="chd-btn"
            disabled={selection.length === 0}
            onClick={handleFillPage}
          >
            Fill page
          </button>
        </div>
      ) : null}

      {isAdmin ? (
        <div className="chd-toolbar-group">
          <button
            type="button"
            className="chd-btn"
            disabled={selection.length === 0}
            onClick={() => dispatch({ type: 'DELETE_LAYERS' })}
          >
            Delete
          </button>
          <button
            type="button"
            className="chd-btn"
            disabled={selection.length === 0}
            onClick={() => dispatch({ type: 'BRING_FORWARD' })}
          >
            Forward
          </button>
          <button
            type="button"
            className="chd-btn"
            disabled={selection.length === 0}
            onClick={() => dispatch({ type: 'SEND_BACKWARD' })}
          >
            Back
          </button>
        </div>
      ) : null}

      <div className="chd-toolbar-group">
        <button
          type="button"
          className="chd-btn"
          disabled={!canUndo}
          onClick={() => dispatch({ type: 'UNDO' })}
        >
          Undo
        </button>
        <button
          type="button"
          className="chd-btn"
          disabled={!canRedo}
          onClick={() => dispatch({ type: 'REDO' })}
        >
          Redo
        </button>
      </div>

      <div className="chd-toolbar-group">
        <button type="button" className="chd-btn" onClick={() => dispatch({ type: 'ZOOM_RESET' })}>
          {Math.round(viewport.zoom * 100)}%
        </button>
        {isAdmin ? (
          <>
            <button type="button" className="chd-btn" onClick={handleExport}>
              Export
            </button>
            <button type="button" className="chd-btn" onClick={() => fileRef.current?.click()}>
              Import
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="chd-file-input"
              onChange={(e) => {
                void handleImportFile(e.target.files?.[0] ?? null);
                e.target.value = '';
              }}
            />
          </>
        ) : null}
      </div>
    </header>
  );
}
