import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { contentHubApi } from './api';
import type { PickedAsset } from './assetSearch';
import { useContentHubIntegration, useContentHubSearchResults } from './contentHubIntegration';
import type { Template } from './types';

interface TemplateAllowedAssetsProps {
  template: Template;
  onAssetsChange: (assetIds: string[]) => void;
}

export default function TemplateAllowedAssets({ template, onAssetsChange }: TemplateAllowedAssetsProps) {
  const integration = useContentHubIntegration();
  const { resultIds, fullText, hasSearchIntegration } = useContentHubSearchResults();
  const [linkedAssets, setLinkedAssets] = useState<PickedAsset[]>([]);
  const [searchAssets, setSearchAssets] = useState<PickedAsset[]>([]);
  const [loadingLinked, setLoadingLinked] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [busyAssetId, setBusyAssetId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const linkedAssetIds = useMemo(
    () => new Set(linkedAssets.map((asset) => asset.id).filter(Boolean)),
    [linkedAssets]
  );

  const refreshLinkedAssets = useCallback(async () => {
    if (!template.id || template.id.startsWith('temp-')) {
      setLinkedAssets([]);
      return;
    }

    setLoadingLinked(true);
    setError(null);
    try {
      const assets = await contentHubApi.getTemplateAllowedAssets(template.id);
      setLinkedAssets(assets);
      onAssetsChange(assets.map((asset) => asset.id).filter(Boolean));
    } catch (loadError) {
      setLinkedAssets([]);
      setError(loadError instanceof Error ? loadError.message : 'Could not load template assets.');
    } finally {
      setLoadingLinked(false);
    }
  }, [onAssetsChange, template.id]);

  useEffect(() => {
    void refreshLinkedAssets();
  }, [refreshLinkedAssets]);

  useEffect(() => {
    if (resultIds.length === 0) {
      setSearchAssets([]);
      return;
    }

    let cancelled = false;
    setLoadingSearch(true);

    contentHubApi
      .getAssetsByIds(resultIds)
      .then((assets) => {
        if (!cancelled) setSearchAssets(assets);
      })
      .catch(() => {
        if (!cancelled) setSearchAssets([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingSearch(false);
      });

    return () => {
      cancelled = true;
    };
  }, [resultIds]);

  const handleAddAsset = async (asset: PickedAsset) => {
    if (!template.id || template.id.startsWith('temp-') || !asset.id) {
      setError('Save the template first before linking assets.');
      return;
    }

    setBusyAssetId(asset.id);
    setError(null);
    try {
      const added = await contentHubApi.addAllowedAssetToTemplate(template.id, asset.id);
      if (!added) {
        throw new Error(`Could not link ${asset.name} to this template.`);
      }
      await refreshLinkedAssets();
      integration.notifier?.notifySuccess(`Added "${asset.name}" to template assets.`);
    } catch (addError) {
      const message = addError instanceof Error ? addError.message : 'Failed to link asset to template.';
      setError(message);
      integration.notifier?.notifyError(message);
    } finally {
      setBusyAssetId(null);
    }
  };

  const handleRemoveAsset = async (asset: PickedAsset) => {
    if (!template.id || !asset.id) return;

    setBusyAssetId(asset.id);
    setError(null);
    try {
      await contentHubApi.removeAllowedAssetFromTemplate(template.id, asset.id);
      await refreshLinkedAssets();
      integration.notifier?.notifySuccess(`Removed "${asset.name}" from template assets.`);
    } catch (removeError) {
      const message = removeError instanceof Error ? removeError.message : 'Failed to remove asset from template.';
      setError(message);
      integration.notifier?.notifyError(message);
    } finally {
      setBusyAssetId(null);
    }
  };

  const templateNotPersisted = !template.id || template.id.startsWith('temp-');

  return (
    <div className="template-zone-asset-collection template-allowed-assets">
      <h4 className="template-zone-asset-collection-title">Template image library</h4>
      <p className="template-zone-asset-collection-intro">
        Link <strong>M.Asset</strong> entities on the template via <code>templateToAllowedAsset</code>. Every
        image zone on marketing assets built from this template can pick from these assets. Use the Content Hub
        search on this page to find images, then click <strong>Add</strong>.
      </p>

      {templateNotPersisted && (
        <p className="template-zone-asset-collection-hint">
          Save the template first so it has a persisted entity ID, then add assets from search.
        </p>
      )}

      <div className="template-zone-asset-collection-section">
        <div className="template-zone-asset-collection-section-header">
          <h5>On template ({linkedAssets.length})</h5>
          {loadingLinked && <span className="template-zone-asset-collection-status">Loading...</span>}
        </div>
        <div className="template-zone-asset-collection-grid">
          {linkedAssets.map((asset) => (
            <div key={asset.id || asset.thumbnailUrl} className="template-zone-asset-card">
              <img src={asset.thumbnailUrl} alt={asset.name} />
              <span>{asset.name}</span>
              <button
                type="button"
                className="template-zone-asset-remove"
                disabled={busyAssetId === asset.id || templateNotPersisted}
                onClick={() => void handleRemoveAsset(asset)}
              >
                Remove
              </button>
            </div>
          ))}
          {!loadingLinked && linkedAssets.length === 0 && (
            <p className="template-zone-asset-collection-empty">No assets linked to this template yet.</p>
          )}
        </div>
      </div>

      <div className="template-zone-asset-collection-section">
        <div className="template-zone-asset-collection-section-header">
          <h5>From Content Hub search</h5>
          {loadingSearch && <span className="template-zone-asset-collection-status">Loading...</span>}
        </div>

        {!hasSearchIntegration && (
          <p className="template-zone-asset-collection-hint">
            Add a Search page component to this page and set <code>searchIdentifier</code> in the external
            component Configuration.
          </p>
        )}

        {hasSearchIntegration && (
          <p className="template-zone-asset-collection-hint">
            Use the search component on this page{fullText ? ` (current query: "${fullText}")` : ''}, then click{' '}
            <strong>Add</strong> to link an asset to the template.
          </p>
        )}

        <div className="template-zone-asset-collection-grid">
          {searchAssets.map((asset) => {
            const alreadyLinked = asset.id ? linkedAssetIds.has(asset.id) : false;
            return (
              <div key={asset.id || asset.thumbnailUrl} className="template-zone-asset-card">
                <img src={asset.thumbnailUrl} alt={asset.name} />
                <span>{asset.name}</span>
                <button
                  type="button"
                  className="template-zone-asset-add"
                  disabled={alreadyLinked || busyAssetId === asset.id || !asset.id || templateNotPersisted}
                  onClick={() => void handleAddAsset(asset)}
                >
                  {alreadyLinked ? 'Linked' : 'Add'}
                </button>
              </div>
            );
          })}
          {hasSearchIntegration && !loadingSearch && searchAssets.length === 0 && (
            <p className="template-zone-asset-collection-empty">
              Run a search on this page to see assets you can link.
            </p>
          )}
        </div>
      </div>

      {error && <p className="template-zone-asset-collection-error">{error}</p>}
    </div>
  );
}
