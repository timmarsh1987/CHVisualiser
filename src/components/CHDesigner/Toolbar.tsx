import React, { useRef } from 'react';
import { useDesignerAction, useDesignerApi, useSelection, useViewport } from './store';
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
  const { canUndo, canRedo, exportDocument, importDocumentJson } = useDesignerApi();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const doc = exportDocument();
    const blob = new Blob([JSON.stringify(doc, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
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

  return (
    <header className="chd-toolbar">
      <div className="chd-toolbar-brand">CHDesigner</div>

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
      </div>
    </header>
  );
}
