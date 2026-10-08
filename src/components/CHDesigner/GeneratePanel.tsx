import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getContentHubClient } from '../CHMarketingBuilder/api';
import type { CatalogField } from '../CHPdfTemplate/hub';
import { downloadBlob, pagesFromDocument, renderDocumentFiles, type RenderedFile } from './exportArtboard';
import {
  csvColumnLetter,
  fieldKind,
  generationFileStem,
  magicStringFor,
  parseCsvSheet,
  resolveFieldText,
  rowsFromCsvSheet,
  slugFieldKey,
  suggestCsvColumn,
  suggestFieldSource,
  type CsvColumn,
  type CsvSheet,
  type GenerationRow,
} from './fields';
import {
  assetTitle,
  buildProductRows,
  generationClient,
  hydrateCsvImageFields,
  linkAssetToProduct,
  loadProductCatalog,
  outputRelationName,
  saveGeneratedFile,
  searchProducts,
  type ProductHit,
} from './generationHub';
import LayerNode from './LayerNode';
import { layerIsDrawn } from './policy';
import { useDesignerAction, useDesignerDocument, useDesignerTemplateId } from './store';
import type { DesignerDocument, DesignerField } from './types';
import { zipFiles } from './zipStore';

type RowStatus = { state: 'pending' | 'done' | 'failed'; error?: string };

function messageOf(cause: unknown): string {
  return cause instanceof Error ? cause.message : 'Could not generate this row.';
}

function priceGroups(columns: CsvColumn[]): Map<string, CsvColumn[]> {
  const groups = new Map<string, CsvColumn[]>();
  for (const column of columns) {
    if (column.kind !== 'price') continue;
    const name = column.label.split(' · ')[0] || 'Prices';
    const group = groups.get(name);
    if (group) group.push(column);
    else groups.set(name, [column]);
  }
  return groups;
}

function columnSections(columns: CsvColumn[], query: string): { name: string; columns: CsvColumn[] }[] {
  const needle = query.trim().toLowerCase();
  const matches = (column: CsvColumn) => {
    if (!needle) return true;
    return (
      column.label.toLowerCase().includes(needle) || csvColumnLetter(column.index).toLowerCase() === needle
    );
  };
  const identity = columns.filter((column) => column.kind !== 'price' && matches(column));
  const sections = identity.length > 0 ? [{ name: 'Cinema', columns: identity }] : [];
  for (const [name, group] of priceGroups(columns)) {
    const visible = group.filter(matches);
    if (visible.length > 0) sections.push({ name, columns: visible });
  }
  return sections;
}

function variableLabel(field: DesignerField): string {
  const token = magicStringFor(field);
  const image = field.kind === 'image' ? ' (image)' : '';
  const label = field.label.trim();
  if (!label || slugFieldKey(label) === field.key) return `${token}${image}`;
  return `${token} ${label}${image}`;
}

function columnCaption(column: CsvColumn, section: string): string {
  if (column.kind !== 'price') return `${column.label} (${csvColumnLetter(column.index)})`;
  return column.label.slice(section.length + 3) || column.label;
}

function membersFor(field: DesignerField, catalog: CatalogField[]): CatalogField[] {
  return catalog.filter((entry) =>
    fieldKind(field) === 'image' ? entry.kind === 'relation' || entry.kind === 'image' : entry.kind !== 'relation'
  );
}

function Preview({ document }: { document: DesignerDocument }) {
  const page = pagesFromDocument(document).find((item) => item.id === document.activePageId) ?? pagesFromDocument(document)[0];
  if (!page) return null;
  const scale = Math.min(360 / page.width, 220 / page.height, 1);
  return (
    <div className="chd-gen-preview" style={{ width: page.width * scale, height: page.height * scale }}>
      <div
        className="chd-artboard"
        style={{
          width: page.width,
          height: page.height,
          background: document.canvas.background || '#ffffff',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {page.layers
          .filter((layer) => layerIsDrawn(layer, document.settings))
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
    </div>
  );
}

export default function GeneratePanel() {
  const document = useDesignerDocument();
  const dispatch = useDesignerAction();
  const templateId = useDesignerTemplateId();
  const fields = document.fields ?? [];
  const client = generationClient(getContentHubClient());
  const fileRef = useRef<HTMLInputElement>(null);
  const runRef = useRef(0);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'products' | 'csv'>('products');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ProductHit[]>([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [selected, setSelected] = useState<ProductHit[]>([]);
  const [csvSheet, setCsvSheet] = useState<CsvSheet | null>(null);
  const [columnQuery, setColumnQuery] = useState('');
  const [droppedCsv, setDroppedCsv] = useState<string[]>([]);
  const [csvRows, setCsvRows] = useState<GenerationRow[]>([]);
  const [catalog, setCatalog] = useState<CatalogField[]>([]);
  const [productRows, setProductRows] = useState<GenerationRow[]>([]);
  const [loadingRows, setLoadingRows] = useState(false);
  const [sourceError, setSourceError] = useState<string | null>(null);
  const [activeRowId, setActiveRowId] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Record<string, RowStatus>>({});
  const [files, setFiles] = useState<Record<string, RenderedFile[]>>({});
  const [running, setRunning] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const fieldKey = fields.map((field) => `${field.id}:${field.kind ?? ''}:${field.source?.path ?? ''}`).join('|');
  const csvMapKey = fields.map((field) => `${field.id}:${field.csvColumn ?? ''}:${field.key}:${field.label}`).join('|');
  const rows = useMemo(() => [...productRows, ...csvRows], [productRows, csvRows]);
  const rowsKey = rows.map((row) => `${row.id}:${Object.entries(row.values).join('=')}`).join('|');
  const activeRow = rows.find((row) => row.id === activeRowId) ?? null;
  const previewDocument = activeRow ? resolveFieldText(document, activeRow.values) : null;
  const fileCount = Object.values(files).reduce((count, list) => count + list.length, 0);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!open || !client) return;
    let cancelled = false;
    void loadProductCatalog(client).then((next) => {
      if (!cancelled) setCatalog(next);
    });
    return () => {
      cancelled = true;
    };
  }, [open, client]);

  useEffect(() => {
    if (catalog.length === 0 || fields.length === 0) return;
    const sources: Record<string, string> = {};
    for (const field of fields) {
      if (field.source) continue;
      const path = suggestFieldSource(field, catalog);
      if (path) sources[field.id] = path;
    }
    if (Object.keys(sources).length === 0) return;
    dispatch({ type: 'SET_FIELD_SOURCES', sources });
  }, [catalog, fieldKey, fields, dispatch]);

  useEffect(() => {
    if (!open || !client || tab !== 'products') return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      setSearching(true);
      setSearchError(null);
      void searchProducts(client, query)
        .then((hits) => {
          if (!cancelled) setResults(hits);
        })
        .catch((cause: unknown) => {
          if (!cancelled) setSearchError(messageOf(cause));
        })
        .finally(() => {
          if (!cancelled) setSearching(false);
        });
    }, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [open, client, tab, query]);

  useEffect(() => {
    if (!client || selected.length === 0) {
      setProductRows((current) => (current.length === 0 ? current : []));
      setLoadingRows(false);
      return;
    }
    let cancelled = false;
    setLoadingRows(true);
    setSourceError(null);
    void buildProductRows(client, selected, fields, catalog)
      .then((next) => {
        if (!cancelled) setProductRows(next);
      })
      .catch((cause: unknown) => {
        if (cancelled) return;
        setProductRows([]);
        setSourceError(messageOf(cause));
      })
      .finally(() => {
        if (!cancelled) setLoadingRows(false);
      });
    return () => {
      cancelled = true;
    };
  }, [client, selected, fields, fieldKey, catalog]);

  useEffect(() => {
    runRef.current += 1;
    setRunning(false);
    setFiles((current) => (Object.keys(current).length === 0 ? current : {}));
    setStatuses((current) => (Object.keys(current).length === 0 ? current : {}));
    setMessage(null);
  }, [rowsKey]);

  useEffect(() => {
    if (rows.length === 0) {
      setActiveRowId(null);
      return;
    }
    if (!activeRowId || !rows.some((row) => row.id === activeRowId)) {
      setActiveRowId(rows[0].id);
    }
  }, [rows, activeRowId]);

  const toggleProduct = (hit: ProductHit) => {
    setSelected((current) =>
      current.some((item) => item.id === hit.id) ? current.filter((item) => item.id !== hit.id) : [...current, hit]
    );
  };

  useEffect(() => {
    if (!csvSheet || fields.length === 0) return;
    const columns: Record<string, string> = {};
    for (const field of fields) {
      if (field.csvColumn !== undefined) continue;
      const column = suggestCsvColumn(field, csvSheet.columns);
      if (column) columns[field.id] = column;
    }
    if (Object.keys(columns).length === 0) return;
    dispatch({ type: 'SET_FIELD_CSV_COLUMNS', columns });
  }, [csvSheet, csvMapKey, fields, dispatch]);

  useEffect(() => {
    if (!csvSheet) {
      setCsvRows((current) => (current.length === 0 ? current : []));
      return;
    }
    let cancelled = false;
    const built = rowsFromCsvSheet(csvSheet, fields, 'csv').filter((row) => !droppedCsv.includes(row.id));
    void hydrateCsvImageFields(client, fields, built).then((rows) => {
      if (!cancelled) setCsvRows(rows);
    });
    return () => {
      cancelled = true;
    };
  }, [csvSheet, csvMapKey, fields, client, droppedCsv]);

  const loadCsv = async (file: File | null) => {
    if (!file) return;
    setSourceError(null);
    try {
      setDroppedCsv([]);
      setColumnQuery('');
      setCsvSheet(parseCsvSheet(await file.text()));
      setTab('csv');
    } catch (cause) {
      setSourceError(messageOf(cause));
    }
  };

  const removeRow = (row: GenerationRow) => {
    if (row.source === 'product' && row.productId) {
      setSelected((current) => current.filter((item) => item.id !== row.productId));
      return;
    }
    setDroppedCsv((current) => (current.includes(row.id) ? current : [...current, row.id]));
  };

  const generate = async () => {
    if (running || rows.length === 0) return;
    const runId = runRef.current + 1;
    runRef.current = runId;
    setRunning(true);
    setMessage(null);
    setFiles({});
    setStatuses(Object.fromEntries(rows.map((row) => [row.id, { state: 'pending' }])));
    const produced: Record<string, RenderedFile[]> = {};
    try {
      for (const row of rows) {
        if (runRef.current !== runId) return;
        try {
          const rendered = await renderDocumentFiles(
            resolveFieldText(document, row.values),
            generationFileStem(row, templateId)
          );
          if (runRef.current !== runId) return;
          produced[row.id] = rendered;
          setFiles({ ...produced });
          setStatuses((current) => ({ ...current, [row.id]: { state: 'done' } }));
        } catch (cause) {
          if (runRef.current !== runId) return;
          setStatuses((current) => ({ ...current, [row.id]: { state: 'failed', error: messageOf(cause) } }));
        }
      }
      if (runRef.current !== runId) return;
      const done = Object.keys(produced).length;
      setMessage(done === 0 ? 'Nothing was rendered.' : `Rendered ${done} of ${rows.length}.`);
    } finally {
      if (runRef.current === runId) setRunning(false);
    }
  };

  const download = async () => {
    const packed = Object.values(files).flat();
    if (packed.length === 0) return;
    const zip = await zipFiles(packed);
    downloadBlob(zip, `template-${templateId || 'generation'}.zip`);
  };

  const save = async () => {
    if (!client?.uploads?.uploadAsync) {
      setMessage('Content Hub upload is not available on this page.');
      return;
    }
    const entries = Object.entries(files);
    if (entries.length === 0 || saving) return;
    setSaving(true);
    setMessage(null);
    const relation = outputRelationName(fields, catalog);
    let saved = 0;
    let linked = 0;
    let unlinked = 0;
    try {
      for (const [rowId, producedFiles] of entries) {
        const row = rows.find((item) => item.id === rowId);
        if (!row) continue;
        try {
          for (const file of producedFiles) {
            const assetId = await saveGeneratedFile(client, file.name, file.blob, assetTitle(row.label, templateId));
            saved += 1;
            if (row.productId && relation) {
              const ok = await linkAssetToProduct(client, row.productId, assetId, relation);
              if (ok) linked += 1;
              else unlinked += 1;
            }
          }
          setStatuses((current) => ({ ...current, [rowId]: { state: 'done' } }));
        } catch (cause) {
          setStatuses((current) => ({ ...current, [rowId]: { state: 'failed', error: messageOf(cause) } }));
        }
      }
      const linkNote =
        linked > 0
          ? ` ${linked} linked to ${linked === 1 ? 'its product' : 'their products'}.`
          : '';
      const missNote = unlinked > 0 ? ' Some assets could not be linked to their product.' : '';
      setMessage(saved === 0 ? 'Nothing was saved.' : `Saved ${saved} ${saved === 1 ? 'file' : 'files'}.${linkNote}${missNote}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="chd-batch">
      <button type="button" className="chd-btn" aria-expanded={open} onClick={() => setOpen((current) => !current)}>
        {running ? 'Batching…' : 'Batch'}
      </button>
      {open ? (
        <div className="chd-gen-panel" role="dialog" aria-label="Generate assets">
          <div className="chd-gen-head">
            <strong>Generate assets</strong>
            <button type="button" className="chd-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <p className="chd-field-hint">
            Each product or cinema row becomes one asset. Empty values keep the sample on the template.
          </p>

          {fields.length === 0 ? (
            <p className="chd-field-hint">Add a variable on a text frame, or an image field on a picture, before generating.</p>
          ) : (
            <div className="chd-gen-section">
              <p className="chd-gen-label">Variables</p>
              <p className="chd-field-hint">
                Each magic string is a variable. Associate a CSV column with it on the CSV tab, or a product property here.
              </p>
              {fields.map((field) => {
                const members = membersFor(field, catalog);
                const current = field.source?.path ?? '';
                const known = members.some((entry) => entry.path === current);
                return (
                  <label key={field.id} className="chd-field">
                    <span>{variableLabel(field)}</span>
                    <select
                      value={current}
                      onChange={(event) =>
                        dispatch({ type: 'SET_FIELD_SOURCE', fieldId: field.id, path: event.target.value })
                      }
                    >
                      <option value="">Keep sample</option>
                      {current && !known ? <option value={current}>{current}</option> : null}
                      {members.map((entry) => (
                        <option key={entry.path} value={entry.path}>
                          {entry.label}
                        </option>
                      ))}
                    </select>
                  </label>
                );
              })}
              {!client ? (
                <p className="chd-field-hint">Open this template in Content Hub to map product properties.</p>
              ) : null}
            </div>
          )}

          <div className="chd-gen-tabs">
            <button
              type="button"
              className={`chd-btn${tab === 'products' ? ' chd-btn--accent' : ''}`}
              onClick={() => setTab('products')}
            >
              Products
            </button>
            <button
              type="button"
              className={`chd-btn${tab === 'csv' ? ' chd-btn--accent' : ''}`}
              onClick={() => setTab('csv')}
            >
              CSV
            </button>
          </div>

          {tab === 'products' ? (
            <div className="chd-gen-section">
              {client ? (
                <>
                  <input
                    className="chd-gen-search"
                    type="search"
                    placeholder="Search products"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  {searching ? <p className="chd-field-hint">Searching…</p> : null}
                  {searchError ? <p className="chd-generate-error">{searchError}</p> : null}
                  <ul className="chd-gen-list">
                    {results.map((hit) => {
                      const checked = selected.some((item) => item.id === hit.id);
                      return (
                        <li key={hit.id}>
                          <label className="chd-gen-check">
                            <input type="checkbox" checked={checked} onChange={() => toggleProduct(hit)} />
                            <span>{hit.label}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <p className="chd-field-hint">
                  Product search needs Content Hub. A CSV can still feed the same run.
                </p>
              )}
            </div>
          ) : (
            <div className="chd-gen-section">
              <p className="chd-field-hint">
                Each row is one cinema. Associate a variable with each column you want on the asset. Cinema is the
                name column. Price columns are the ones filled with ticket prices.
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
                  void loadCsv(event.target.files?.[0] ?? null);
                  event.target.value = '';
                }}
              />
              {csvSheet ? (
                <>
                  <p className="chd-field-hint">
                    {csvSheet.records.length === 1 ? '1 cinema' : `${csvSheet.records.length} cinemas`}.{' '}
                    {csvSheet.columns.filter((column) => column.kind === 'price').length} price columns.
                    {csvSheet.columns.some((column) => column.kind === 'cinema')
                      ? ` Cinema is column ${csvColumnLetter(
                          csvSheet.columns.find((column) => column.kind === 'cinema')?.index ?? 1
                        )}.`
                      : ''}
                  </p>
                  {fields.length === 0 ? (
                    <p className="chd-field-hint">Add a variable on a text frame, then associate a column with it.</p>
                  ) : (
                    <p className="chd-field-hint">
                      {fields.filter((field) => field.csvColumn).length === 1
                        ? '1 column selected.'
                        : `${fields.filter((field) => field.csvColumn).length} columns selected.`}
                    </p>
                  )}
                  <input
                    className="chd-gen-search"
                    type="search"
                    placeholder="Search columns"
                    value={columnQuery}
                    onChange={(event) => setColumnQuery(event.target.value)}
                  />
                  <div className="chd-gen-columns">
                    {columnSections(csvSheet.columns, columnQuery).length === 0 ? (
                      <p className="chd-field-hint">No columns match that search.</p>
                    ) : null}
                    {columnSections(csvSheet.columns, columnQuery).map((section) => (
                      <div key={section.name}>
                        <div className="chd-gen-col-group">{section.name}</div>
                        {section.columns.map((column) => {
                          const owner = fields.find((field) => field.csvColumn === column.id);
                          const sample = csvSheet.records[0]?.values[column.id];
                          return (
                            <div
                              key={column.id}
                              className={owner ? 'chd-gen-column chd-gen-column--used' : 'chd-gen-column'}
                            >
                              <div className="chd-gen-column-name">
                                <span>{columnCaption(column, section.name)}</span>
                                {sample ? <small>{csvSheet.records[0]?.label}: {sample}</small> : null}
                              </div>
                              <select
                                aria-label={`Use ${column.label}`}
                                value={owner?.id ?? ''}
                                disabled={fields.length === 0}
                                onChange={(event) => {
                                  const fieldId = event.target.value;
                                  if (!fieldId) {
                                    if (owner) dispatch({ type: 'SET_FIELD_CSV', fieldId: owner.id, column: '' });
                                    return;
                                  }
                                  dispatch({ type: 'SET_FIELD_CSV', fieldId, column: column.id });
                                }}
                              >
                                <option value="">Not used</option>
                                {fields.map((field) => (
                                  <option key={field.id} value={field.id}>
                                    {variableLabel(field)}
                                  </option>
                                ))}
                              </select>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          )}

          {sourceError ? <p className="chd-generate-error">{sourceError}</p> : null}
          {loadingRows ? <p className="chd-field-hint">Loading product values…</p> : null}

          <div className="chd-gen-section">
            <p className="chd-gen-label">{rows.length === 1 ? '1 output' : `${rows.length} outputs`}</p>
            <ul className="chd-gen-list">
              {rows.map((row) => {
                const status = statuses[row.id];
                return (
                  <li key={row.id} className={row.id === activeRowId ? 'chd-gen-row--active' : undefined}>
                    <button type="button" className="chd-gen-row" onClick={() => setActiveRowId(row.id)}>
                      <span>{row.label}</span>
                      <span className="chd-gen-meta">
                        {row.source === 'product' ? 'Product' : 'CSV'}
                        {status?.state === 'pending' ? ' · rendering' : ''}
                        {status?.state === 'done' ? ' · ready' : ''}
                        {status?.state === 'failed' ? ` · ${status.error || 'failed'}` : ''}
                      </span>
                    </button>
                    <button type="button" className="chd-btn" onClick={() => removeRow(row)} disabled={running}>
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
            {previewDocument ? <Preview document={previewDocument} /> : null}
          </div>

          {message ? <p className="chd-field-hint">{message}</p> : null}
          <div className="chd-gen-actions">
            <button
              type="button"
              className="chd-btn chd-btn--accent"
              disabled={running || saving || loadingRows || rows.length === 0 || fields.length === 0}
              onClick={() => void generate()}
            >
              {running ? 'Generating…' : 'Generate'}
            </button>
            <button type="button" className="chd-btn" disabled={running || fileCount === 0} onClick={() => void download()}>
              Download zip
            </button>
            <button
              type="button"
              className="chd-btn"
              disabled={running || saving || fileCount === 0}
              onClick={() => void save()}
            >
              {saving ? 'Saving…' : 'Save to Content Hub'}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
