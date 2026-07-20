import React, { useEffect, useMemo, useState } from 'react';
import { contentHubApi } from './api';
import type { PickedAsset } from './assetSearch';
import { useContentHubIntegration, useContentHubSearchResults } from './contentHubIntegration';
import type { TemplateZone } from './types';

interface ImagePickerProps {
  zoneKey: string;
  zone?: TemplateZone;
  templateId?: string;
  selectedAssetId?: string;
  selectedUrl?: string;
  onChange: (zoneKey: string, asset: { id?: string; imageAssetUrl: string }) => void;
  compact?: boolean;
}

function mergeUniqueAssets(...groups: PickedAsset[][]): PickedAsset[] {
  const seen = new Set<string>();
  const merged: PickedAsset[] = [];

  for (const group of groups) {
    for (const asset of group) {
      const key = asset.id || asset.previewUrl || asset.thumbnailUrl;
      if (!key || seen.has(key)) continue;
      seen.add(key);
      merged.push(asset);
    }
  }

  return merged;
}

export default function ImagePicker({
  zoneKey,
  zone,
  templateId,
  selectedAssetId,
  selectedUrl,
  onChange,
  compact = false,
}: ImagePickerProps) {
  const { searchIdentifier } = useContentHubIntegration();
  const { resultIds, hasSearchIntegration } = useContentHubSearchResults();
  const [templateAssets, setTemplateAssets] = useState<PickedAsset[]>([]);
  const [zoneAssets, setZoneAssets] = useState<PickedAsset[]>([]);
  const [searchAssets, setSearchAssets] = useState<PickedAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showUrlFallback, setShowUrlFallback] = useState(false);
  const [urlValue, setUrlValue] = useState('');

  useEffect(() => {
    if (!templateId?.trim() || templateId.startsWith('temp-')) {
      setTemplateAssets([]);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    contentHubApi
      .getTemplateAllowedAssets(templateId)
      .then((loaded) => {
        if (!cancelled) setTemplateAssets(loaded);
      })
      .catch((loadError) => {
        if (!cancelled) {
          setTemplateAssets([]);
          setError(loadError instanceof Error ? loadError.message : 'Could not load template images.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [templateId]);

  useEffect(() => {
    const zoneAssetIds = zone?.allowedAssetIds ?? [];
    if (zoneAssetIds.length === 0) {
      setZoneAssets([]);
      return;
    }

    let cancelled = false;
    contentHubApi
      .getAssetsByIds(zoneAssetIds)
      .then((loaded) => {
        if (!cancelled) setZoneAssets(loaded);
      })
      .catch(() => {
        if (!cancelled) setZoneAssets([]);
      });

    return () => {
      cancelled = true;
    };
  }, [zone?.allowedAssetIds]);

  useEffect(() => {
    if (resultIds.length === 0) {
      setSearchAssets([]);
      return;
    }

    let cancelled = false;
    contentHubApi
      .getAssetsByIds(resultIds)
      .then((loaded) => {
        if (!cancelled) setSearchAssets(loaded);
      })
      .catch(() => {
        if (!cancelled) setSearchAssets([]);
      });

    return () => {
      cancelled = true;
    };
  }, [resultIds]);

  const linkedLibrary = useMemo(
    () => mergeUniqueAssets(zoneAssets, templateAssets),
    [templateAssets, zoneAssets]
  );

  const assets = useMemo(() => {
    // Prefer the template/zone image library. Page search results often include the
    // current marketing asset renditions and pollute the picker with the wrong images.
    if (linkedLibrary.length > 0) return linkedLibrary;
    return searchAssets;
  }, [linkedLibrary, searchAssets]);

  const linkedLibraryAvailable = linkedLibrary.length > 0;

  const applyUrl = () => {
    const trimmed = urlValue.trim();
    if (!trimmed) return;
    onChange(zoneKey, { imageAssetUrl: trimmed });
    setShowUrlFallback(false);
    setUrlValue('');
  };

  if (!templateId?.trim() || templateId.startsWith('temp-')) {
    return (
      <p className="image-picker-hint">
        Template image library is not available yet. Save the template and link assets in template setup.
      </p>
    );
  }

  return (
    <div className={`image-picker${compact ? ' image-picker-compact' : ''}`}>
      {linkedLibraryAvailable ? (
        <p className="image-picker-hint">
          Choose an image from the template library
          {zoneAssets.length > 0 ? ' (zone + template)' : ''}.
        </p>
      ) : hasSearchIntegration ? (
        <p className="image-picker-hint">
          Run a Content Hub search on this page, then pick an image below.
          {searchIdentifier ? ` (search: ${searchIdentifier})` : ''}
        </p>
      ) : (
        <p className="image-picker-hint">
          Link images on the template in <strong>Edit template</strong>, or add <code>searchIdentifier</code> to this
          page&apos;s external component configuration to pick assets from search.
        </p>
      )}

      {loading && <div className="image-picker-loading">Loading template images...</div>}
      {error && <div className="image-picker-error">{error}</div>}

      {selectedUrl && (
        <div className="image-picker-selected-preview">
          <img src={selectedUrl} alt="" className="image-picker-selected-image" />
        </div>
      )}

      <div className="image-picker-grid" role="radiogroup" aria-label="Choose image">
        {assets.map((asset) => {
          const isSelected =
            (selectedAssetId && asset.id === selectedAssetId) ||
            (!selectedAssetId && selectedUrl && asset.previewUrl === selectedUrl) ||
            (!selectedAssetId && selectedUrl && asset.thumbnailUrl === selectedUrl);

          return (
            <button
              key={asset.id || asset.thumbnailUrl}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`image-picker-option${isSelected ? ' image-picker-option-selected' : ''}`}
              onClick={() =>
                onChange(zoneKey, {
                  id: asset.id || undefined,
                  imageAssetUrl: asset.previewUrl ?? asset.thumbnailUrl,
                })
              }
            >
              <span className="image-picker-preview">
                <img src={asset.thumbnailUrl} alt="" className="image-picker-image" />
              </span>
              <span className="image-picker-label">{asset.name}</span>
            </button>
          );
        })}
      </div>

      {!loading && assets.length === 0 && !error && (
        <p className="image-picker-hint">
          No images available yet. In <strong>Edit template</strong>, use &quot;Template image library&quot; to link
          assets from Content Hub search.
        </p>
      )}

      <div className="image-picker-footer">
        <button
          type="button"
          className="image-picker-url-toggle"
          onClick={() => setShowUrlFallback((current) => !current)}
        >
          {showUrlFallback ? 'Hide image URL' : 'Use image URL instead'}
        </button>
      </div>

      {showUrlFallback && (
        <div className="image-picker-url-form">
          <input
            className="image-picker-url-input"
            placeholder="https://..."
            value={urlValue}
            onChange={(event) => setUrlValue(event.target.value)}
          />
          <button type="button" className="image-picker-url-apply" onClick={applyUrl} disabled={!urlValue.trim()}>
            Use image URL
          </button>
        </div>
      )}
    </div>
  );
}
