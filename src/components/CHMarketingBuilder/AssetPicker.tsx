import React, { useEffect, useState } from 'react';
import { contentHubApi } from './api';
import type { PickedAsset } from './assetSearch';

type PickerMode = 'content-hub' | 'url';

interface AssetPickerProps {
  collectionId?: string;
  aspectRatio?: string;
  triggerLabel?: string;
  compact?: boolean;
  onSelect: (asset: PickedAsset) => void;
  onUrlSelect?: (url: string) => void;
}

export function AssetPicker({
  collectionId,
  aspectRatio,
  triggerLabel = 'Choose image',
  compact = false,
  onSelect,
  onUrlSelect,
}: AssetPickerProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PickerMode>('content-hub');
  const [query, setQuery] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [results, setResults] = useState<PickedAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open || mode !== 'content-hub') return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    contentHubApi
      .searchAssets({ collectionId, query })
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
  }, [open, mode, collectionId, query]);

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
    setOpen(false);
    setUrlValue('');
  };

  return (
    <div className={`asset-picker${compact ? ' asset-picker-compact' : ''}`}>
      <button type="button" className="asset-picker-trigger" onClick={() => setOpen((current) => !current)}>
        {triggerLabel}
      </button>

      {open && (
        <div className="asset-picker-panel">
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

          {mode === 'content-hub' && (
            <>
              <input
                className="asset-picker-search"
                placeholder={collectionId ? 'Search approved assets' : 'Search Content Hub assets'}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoFocus
              />
              {collectionId ? (
                <div className="asset-picker-hint">Collection {collectionId}</div>
              ) : (
                <div className="asset-picker-hint">Browsing all image assets in Content Hub</div>
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
                      setOpen(false);
                    }}
                  >
                    <img src={asset.thumbnailUrl} alt={asset.name} />
                    <span>{asset.name}</span>
                  </button>
                ))}
                {!loading && !error && results.length === 0 && (
                  <div className="asset-picker-empty">No assets found. Try Image URL instead.</div>
                )}
              </div>
            </>
          )}

          {mode === 'url' && (
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
      )}
    </div>
  );
}
