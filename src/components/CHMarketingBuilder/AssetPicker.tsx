import React, { useEffect, useState } from 'react';
import { contentHubApi } from './api';
import type { PickedAsset } from './assetSearch';

type PickerMode = 'content-hub' | 'url';

interface AssetPickerProps {
  collectionId?: string;
  aspectRatio?: string;
  triggerLabel?: string;
  compact?: boolean;
  overlay?: boolean;
  allowUrl?: boolean;
  disabled?: boolean;
  onSelect: (asset: PickedAsset) => void;
  onUrlSelect?: (url: string) => void;
}

export function AssetPicker({
  collectionId,
  aspectRatio,
  triggerLabel = 'Choose image',
  compact = false,
  overlay = false,
  allowUrl = true,
  disabled = false,
  onSelect,
  onUrlSelect,
}: AssetPickerProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PickerMode>('content-hub');
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [results, setResults] = useState<PickedAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query), 250);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setMode('content-hub');
  }, [open]);

  useEffect(() => {
    if (!open || mode !== 'content-hub') return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    contentHubApi
      .searchAssets({ collectionId, query: debouncedQuery })
      .then((assets) => {
        if (!cancelled) setResults(assets);
      })
      .catch((searchError) => {
        if (!cancelled) {
          setResults([]);
          setError(searchError instanceof Error ? searchError.message : 'Could not search Content Hub assets.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [open, mode, collectionId, debouncedQuery]);

  const close = () => {
    setOpen(false);
    setUrlValue('');
  };

  const applyUrl = () => {
    const trimmed = urlValue.trim();
    if (!trimmed) return;
    onUrlSelect?.(trimmed);
    onSelect({
      id: '',
      name: 'Image URL',
      thumbnailUrl: trimmed,
      previewUrl: trimmed,
    });
    close();
  };

  const panel = open ? (
    <div className={`asset-picker-panel${overlay ? ' asset-picker-panel-overlay' : ''}`}>
      <div className="asset-picker-panel-header">
        <strong>Approved assets</strong>
        <button type="button" className="asset-picker-close" onClick={close} aria-label="Close asset picker">
          Close
        </button>
      </div>

      {allowUrl && (
        <div className="asset-picker-mode-tabs">
          <button
            type="button"
            className={`asset-picker-mode-tab${mode === 'content-hub' ? ' asset-picker-mode-tab-active' : ''}`}
            onClick={() => setMode('content-hub')}
          >
            Content Hub
          </button>
          <button
            type="button"
            className={`asset-picker-mode-tab${mode === 'url' ? ' asset-picker-mode-tab-active' : ''}`}
            onClick={() => setMode('url')}
          >
            Image URL
          </button>
        </div>
      )}

      {mode === 'content-hub' && (
        <>
          <input
            className="asset-picker-search"
            placeholder={collectionId ? 'Search approved assets' : 'Search approved Content Hub assets'}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus
          />
          {collectionId ? (
            <div className="asset-picker-hint">Collection {collectionId}</div>
          ) : (
            <div className="asset-picker-hint">
              Searching approved assets via Content Hub SearchConfiguration
            </div>
          )}
          {aspectRatio && <div className="asset-picker-hint">Recommended aspect ratio: {aspectRatio}</div>}
          {loading && <div className="asset-picker-loading">Searching...</div>}
          {error && <div className="asset-picker-error">{error}</div>}
          <div className="asset-picker-grid">
            {results.map((asset) => (
              <button
                key={asset.id || asset.thumbnailUrl}
                type="button"
                className="asset-picker-thumb"
                onClick={() => {
                  onSelect(asset);
                  close();
                }}
              >
                <img src={asset.thumbnailUrl} alt={asset.name} />
                <span>{asset.name}</span>
              </button>
            ))}
            {!loading && !error && results.length === 0 && (
              <div className="asset-picker-empty">
                {allowUrl ? 'No assets found. Try Image URL instead.' : 'No assets found. Try a different search.'}
              </div>
            )}
          </div>
        </>
      )}

      {mode === 'url' && allowUrl && (
        <div className="asset-picker-url-form">
          <label>
            Image URL
            <input
              className="asset-picker-search"
              placeholder="https://..."
              value={urlValue}
              onChange={(event) => setUrlValue(event.target.value)}
            />
          </label>
          <button type="button" className="asset-picker-url-apply" onClick={applyUrl} disabled={!urlValue.trim()}>
            Use image URL
          </button>
        </div>
      )}
    </div>
  ) : null;

  return (
    <div className={`asset-picker${compact ? ' asset-picker-compact' : ''}`}>
      <button
        type="button"
        className="asset-picker-trigger"
        disabled={disabled}
        onClick={() => setOpen((current) => !current)}
      >
        {triggerLabel}
      </button>

      {open && overlay ? (
        <div className="asset-picker-modal" role="dialog" aria-modal="true" aria-label="Approved assets">
          <button type="button" className="asset-picker-backdrop" aria-label="Close asset picker" onClick={close} />
          {panel}
        </div>
      ) : (
        panel
      )}
    </div>
  );
}
