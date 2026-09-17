import React, { useEffect, useRef, useState } from 'react';
import { generateDesignerOutput, type GenerateFormat } from './exportArtboard';
import { useDesignerDocument } from './store';

const OPTIONS: { format: GenerateFormat; label: string; hint: string }[] = [
  { format: 'pdf', label: 'PDF', hint: 'Print-ready page' },
  { format: 'png', label: 'PNG', hint: 'Image of the page' },
];

export default function GenerateMenu() {
  const canvasDocument = useDesignerDocument();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleGenerate = async (format: GenerateFormat) => {
    const host = rootRef.current;
    if (!host || busy) return;
    setOpen(false);
    setBusy(true);
    setError(null);
    try {
      await generateDesignerOutput(host, format, {
        width: canvasDocument.canvas.width,
        height: canvasDocument.canvas.height,
      });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Generate failed.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="chd-generate" ref={rootRef}>
      <button
        type="button"
        className="chd-btn chd-btn--accent"
        disabled={busy}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        {busy ? 'Generating…' : 'Generate'}
      </button>
      {open ? (
        <div className="chd-generate-menu" role="menu">
          {OPTIONS.map((option) => (
            <button
              key={option.format}
              type="button"
              role="menuitem"
              className="chd-generate-option"
              disabled={busy}
              onClick={() => void handleGenerate(option.format)}
            >
              <strong>{option.label}</strong>
              <span>{option.hint}</span>
            </button>
          ))}
        </div>
      ) : null}
      {error ? <span className="chd-generate-error">{error}</span> : null}
    </div>
  );
}