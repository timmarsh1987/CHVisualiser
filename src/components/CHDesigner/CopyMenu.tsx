import React, { useEffect, useRef, useState } from 'react';
import { useDesignerAction, useDesignerApi, useDesignerDocument, useSelection } from './store';

export default function CopyMenu() {
  const dispatch = useDesignerAction();
  const selection = useSelection();
  const canvasDocument = useDesignerDocument();
  const { canPaste } = useDesignerApi();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const hasSelection = selection.length > 0;
  const hasLayers = canvasDocument.layers.length > 0;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const run = (action: 'COPY_SELECTION' | 'COPY_ALL_LAYERS' | 'PASTE') => {
    setOpen(false);
    dispatch({ type: action });
  };

  return (
    <div className="chd-generate" ref={rootRef}>
      <button
        type="button"
        className="chd-btn"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        Copy
      </button>
      {open ? (
        <div className="chd-generate-menu" role="menu">
          <button
            type="button"
            role="menuitem"
            className="chd-generate-option"
            disabled={!hasSelection}
            onClick={() => run('COPY_SELECTION')}
          >
            <strong>Copy selected item</strong>
            <span>Keep the selection to paste</span>
          </button>
          <button
            type="button"
            role="menuitem"
            className="chd-generate-option"
            disabled={!hasLayers}
            onClick={() => run('COPY_ALL_LAYERS')}
          >
            <strong>Copy all layers</strong>
            <span>Every layer on this page</span>
          </button>
          <button
            type="button"
            role="menuitem"
            className="chd-generate-option"
            disabled={!canPaste}
            onClick={() => run('PASTE')}
          >
            <strong>Paste</strong>
            <span>Onto this page</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
