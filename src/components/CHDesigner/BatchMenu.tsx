import React, { useEffect, useRef, useState } from 'react';
import { captureElement, createBatchPdf, type BatchPdf } from './exportArtboard';
import { parseBatchCsv, resolveFieldText } from './fields';
import LayerNode from './LayerNode';
import { layerIsDrawn } from './policy';
import { useDesignerDocument } from './store';
import type { DesignerDocument, DesignerTemplatePage } from './types';

function pagesOf(document: DesignerDocument): DesignerTemplatePage[] {
  if (document.pages?.length) return document.pages;
  return [
    {
      id: document.activePageId || 'current',
      name: 'Page 1',
      width: document.canvas.width,
      height: document.canvas.height,
      layers: document.layers,
    },
  ];
}

export default function BatchMenu() {
  const source = useDesignerDocument();
  const fields = source.fields ?? [];
  const fileRef = useRef<HTMLInputElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<BatchPdf | null>(null);
  const rowsRef = useRef<Record<string, string>[]>([]);
  const pagesRef = useRef<DesignerTemplatePage[]>([]);
  const runRef = useRef(0);
  const [open, setOpen] = useState(false);
  const [unmatched, setUnmatched] = useState<string[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [cursor, setCursor] = useState<{ row: number; page: number } | null>(null);
  const [shot, setShot] = useState<DesignerTemplatePage | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!cursor || !shot) return;
    const runId = runRef.current + 1;
    runRef.current = runId;
    let active = true;
    const finish = () => {
      if (!active || runRef.current !== runId) return;
      const row = cursor.row;
      const page = cursor.page;
      const rowCountNow = rowsRef.current.length;
      if (page + 1 < pagesRef.current.length) {
        setShot(pagesRef.current[page + 1]);
        setCursor({ row, page: page + 1 });
        return;
      }
      if (row + 1 < rowCountNow) {
        const nextRow = row + 1;
        pagesRef.current = pagesOf(resolveFieldText(source, rowsRef.current[nextRow] ?? {}));
        setStatus(`Capturing row ${nextRow + 1} of ${rowCountNow}`);
        setShot(pagesRef.current[0] ?? null);
        setCursor({ row: nextRow, page: 0 });
        return;
      }
      try {
        pdfRef.current?.save('batch.pdf');
        setStatus(`Downloaded ${rowCountNow} output${rowCountNow === 1 ? '' : 's'}.`);
      } catch (cause) {
        setError(cause instanceof Error ? cause.message : 'Could not download the batch.');
      }
      pdfRef.current = null;
      setShot(null);
      setCursor(null);
    };

    void (async () => {
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      if (!active || runRef.current !== runId || !boardRef.current) return;
      try {
        const canvas = await captureElement(boardRef.current);
        if (!active || runRef.current !== runId) return;
        pdfRef.current?.addPageImage(canvas, shot.width, shot.height);
        finish();
      } catch (cause) {
        if (!active || runRef.current !== runId) return;
        setError(cause instanceof Error ? cause.message : 'Could not capture a batch page.');
        pdfRef.current = null;
        setShot(null);
        setCursor(null);
      }
    })();

    return () => {
      active = false;
    };
  }, [cursor, shot, source]);

  if (fields.length === 0) return null;

  const loadFile = async (file: File | null) => {
    if (!file) return;
    const parsed = parseBatchCsv(await file.text(), fields);
    rowsRef.current = parsed.rows;
    setUnmatched(parsed.unmatched);
    setRowCount(parsed.rows.length);
    setError(null);
    const countLabel = `${parsed.rows.length} ${parsed.rows.length === 1 ? 'row' : 'rows'}`;
    setStatus(parsed.rows.length === 0 ? 'The CSV has no data rows.' : `${countLabel} ready.`);
  };

  const start = async () => {
    if (cursor || rowsRef.current.length === 0) return;
    setError(null);
    try {
      pdfRef.current = await createBatchPdf();
      pagesRef.current = pagesOf(resolveFieldText(source, rowsRef.current[0] ?? {}));
      if (!pagesRef.current[0]) {
        setError('This template has no pages to capture.');
        pdfRef.current = null;
        return;
      }
      setStatus(`Capturing row 1 of ${rowsRef.current.length}`);
      setShot(pagesRef.current[0]);
      setCursor({ row: 0, page: 0 });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not start the batch.');
      pdfRef.current = null;
    }
  };

  return (
    <div className="chd-batch">
      <button
        type="button"
        className="chd-btn"
        aria-expanded={open}
        disabled={Boolean(cursor)}
        onClick={() => setOpen((current) => !current)}
      >
        {cursor ? 'Batching…' : 'Batch'}
      </button>
      {open ? (
        <div className="chd-batch-menu">
          <p className="chd-field-hint">
            Upload a CSV. The header row matches field labels or magic strings. Each following row is one output.
            An empty cell keeps the sample copy.
          </p>
          <button type="button" className="chd-btn" onClick={() => fileRef.current?.click()}>
            Choose CSV
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".csv,text/csv"
            className="chd-file-input"
            onChange={(event) => {
              void loadFile(event.target.files?.[0] ?? null);
              event.target.value = '';
            }}
          />
          {rowCount > 0 ? (
            <p className="chd-field-hint">{rowCount === 1 ? '1 row' : `${rowCount} rows`}</p>
          ) : null}
          {unmatched.length > 0 ? (
            <p className="chd-field-hint">Ignored columns: {unmatched.join(', ')}</p>
          ) : null}
          {status ? <p className="chd-field-hint">{status}</p> : null}
          {error ? <p className="chd-generate-error">{error}</p> : null}
          <button
            type="button"
            className="chd-btn chd-btn--accent"
            disabled={Boolean(cursor) || rowCount === 0}
            onClick={() => void start()}
          >
            Download PDF
          </button>
        </div>
      ) : null}
      <div className="chd-batch-stage" aria-hidden="true">
        {shot ? (
          <div
            ref={boardRef}
            className="chd-artboard"
            style={{
              width: shot.width,
              height: shot.height,
              background: source.canvas.background || '#ffffff',
            }}
          >
            {shot.layers
              .filter((layer) => layerIsDrawn(layer, source.settings))
              .map((layer) => (
                <LayerNode
                  key={layer.id}
                  layer={layer}
                  selected={false}
                  preview
                  onSelect={() => undefined}
                  onMoveStart={() => undefined}
                />
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
