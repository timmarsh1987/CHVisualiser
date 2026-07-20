import React, { useMemo, useState } from 'react';
import {
  indexZoneValuesByZoneId,
  mergeLoadedLayouts,
  mergeZoneValuesWithLayoutJson,
  parseZoneLayoutJsonWithValues,
  serializeZoneLayoutJsonWithValues,
  templateWithAssetLayouts,
  zoneValueKeyForZone,
} from './assetLayout';
import { contentHubApi, isDefaultRenderEmailApiUrl, isRenderedOutputUploadEnabled } from './api';
import AssetStructurePanel from './AssetStructurePanel';
import { useBrandKit } from './BrandKitContext';
import BuilderSplitLayout from './BuilderSplitLayout';
import LivePreviewPanel from './LivePreviewPanel';
import { logError, logInfo, logResolved } from './debugLog';
import { EjectToHtmlButton } from './EjectToHtmlButton';
import SavingStatusMessage from './SavingStatusMessage';
import { renderEmailHtml } from './renderEmailHtml';
import { sanitizeZoneHtml } from './sanitizeHtml';
import type { AssetZoneLayout, AssetZoneLayoutMap, MarketingAsset, Template, ZoneValue } from './types';

interface EmailNewsletterBuilderProps {
  template: Template;
  marketingAsset: MarketingAsset;
  userHasOverridePermission: boolean;
  renderEmailApiUrl?: string;
  onSaved?: (asset: MarketingAsset) => void;
}

async function fetchRenderedEmailHtml(
  renderEmailApiUrl: string,
  templateId: string,
  marketingAssetId: string
): Promise<string> {
  const renderResponse = await fetch(renderEmailApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ templateId, marketingAssetId }),
  });

  if (!renderResponse.ok) {
    throw new Error(`Render API failed (${renderResponse.status})`);
  }

  const payload = await renderResponse.json();
  if (typeof payload?.html !== 'string' || !payload.html.trim()) {
    throw new Error('Render API returned no html field');
  }

  return payload.html;
}

export default function EmailNewsletterBuilder({
  template,
  marketingAsset,
  userHasOverridePermission,
  renderEmailApiUrl = '/api/render-email-html',
  onSaved,
}: EmailNewsletterBuilderProps) {
  const brandKit = useBrandKit();
  const [zoneValues, setZoneValues] = useState<Record<string, ZoneValue>>(() => {
    const parsed = parseZoneLayoutJsonWithValues(marketingAsset.zoneLayoutJson);
    const merged = mergeZoneValuesWithLayoutJson(template, marketingAsset.zoneValues, parsed.values);
    return indexZoneValuesByZoneId(template, merged);
  });
  const [zoneLayouts, setZoneLayouts] = useState<AssetZoneLayoutMap>(() => {
    const parsed = parseZoneLayoutJsonWithValues(marketingAsset.zoneLayoutJson);
    return mergeLoadedLayouts(template, parsed.layouts);
  });
  const [rawHtml, setRawHtml] = useState(marketingAsset.rawHtmlOverrideContent ?? '');
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const effectiveTemplate = useMemo(
    () => templateWithAssetLayouts(template, zoneLayouts),
    [template, zoneLayouts]
  );

  const livePreviewHtml = useMemo(
    () => renderEmailHtml(effectiveTemplate, zoneValues, brandKit),
    [brandKit, effectiveTemplate, zoneValues]
  );

  const overridePreviewHtml = useMemo(
    () => sanitizeZoneHtml(rawHtml),
    [rawHtml]
  );

  const handleZoneChange = (zoneId: string, value: ZoneValue) => {
    setZoneValues((prev) => ({ ...prev, [zoneId]: value }));
  };

  const handleLayoutChange = (zoneKey: string, patch: Partial<AssetZoneLayout>) => {
    setZoneLayouts((prev) => {
      const merged: AssetZoneLayout = { ...prev[zoneKey], ...patch };
      for (const key of Object.keys(patch) as (keyof AssetZoneLayout)[]) {
        if (patch[key] === undefined) {
          delete merged[key];
        }
      }
      return { ...prev, [zoneKey]: merged };
    });
  };

  const handleSaveAndRender = async () => {
    setIsSaving(true);
    setSaveError(null);

    try {
      const zoneValueList = effectiveTemplate.zones
        .map((zone) => {
          const value = zoneValues[zone.id];
          if (!value) return null;
          return { ...value, zoneKey: zoneValueKeyForZone(zone, effectiveTemplate.zones) };
        })
        .filter((value): value is ZoneValue => Boolean(value?.zoneKey));

      const valuesByZoneKey = Object.fromEntries(
        zoneValueList.map((value) => [value.zoneKey, value])
      );
      const zoneLayoutJson = serializeZoneLayoutJsonWithValues(zoneLayouts, valuesByZoneKey);
      await contentHubApi.updateMarketingAsset({
        ...marketingAsset,
        zoneLayoutJson,
      });
      logResolved('zone layout JSON', `Saved layout JSON on marketing asset ${marketingAsset.id}`);

      const savedZoneValues = await contentHubApi.saveMarketingAssetZoneValues(
        marketingAsset.id,
        zoneValueList
      );
      const mergedSaved = mergeZoneValuesWithLayoutJson(template, savedZoneValues, valuesByZoneKey);
      setZoneValues(indexZoneValuesByZoneId(template, mergedSaved));

      let html = renderEmailHtml(
        effectiveTemplate,
        Object.fromEntries(mergedSaved.map((value) => [value.zoneKey, value])),
        brandKit
      );

      if (!isDefaultRenderEmailApiUrl(renderEmailApiUrl)) {
        try {
          html = await fetchRenderedEmailHtml(renderEmailApiUrl, template.id, marketingAsset.id);
          logResolved('email HTML render', `Rendered via ${renderEmailApiUrl}`);
        } catch (renderError) {
          logInfo(
            'email HTML render API',
            renderError instanceof Error ? renderError.message : String(renderError)
          );
          logInfo('email HTML preview', 'Using client-side inline-CSS renderer because the render API is unavailable.');
        }
      } else {
        logResolved('email HTML', 'Generated client-side email HTML.');
      }

      if (isRenderedOutputUploadEnabled()) {
        const blob = new Blob([html], { type: 'text/html' });
        await contentHubApi.uploadRenderedOutput(marketingAsset.id, blob, `${marketingAsset.assetName}.html`);
      } else {
        logInfo(
          'rendered output upload',
          'Skipped HTML upload — not required for save on this Content Hub instance.'
        );
      }

      onSaved?.({
        ...marketingAsset,
        zoneValues: mergedSaved,
        zoneLayoutJson,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to save and render email HTML.';
      logError('email save/render', error);
      setSaveError(message);
    } finally {
      setIsSaving(false);
    }
  };

  if (marketingAsset.isRawHtmlOverrideMA) {
    return (
      <BuilderSplitLayout
        structureTitle="HTML source"
        previewTitle="Rendered preview"
        structure={
          <div className="email-builder-override-structure">
            <div className="override-banner">
              Raw HTML override active. Reason: {marketingAsset.overrideReasonMA}
            </div>
            <textarea
              className="raw-html-editor"
              value={rawHtml}
              onChange={(e) => setRawHtml(e.target.value)}
              onBlur={async (e) => {
                const nextHtml = e.target.value;
                await contentHubApi.updateMarketingAsset({
                  ...marketingAsset,
                  rawHtmlOverrideContent: nextHtml,
                });
              }}
            />
          </div>
        }
        preview={
          <iframe
            key={overridePreviewHtml}
            title="Email preview"
            srcDoc={overridePreviewHtml}
            className="email-builder-preview-frame email-builder-preview-frame-fill"
          />
        }
      />
    );
  }

  return (
    <div className="email-builder">
      <BuilderSplitLayout
        structureTitle="Email structure"
        previewTitle="Live preview"
        structure={
          <div className="email-builder-structure">
            <AssetStructurePanel
              template={template}
              zoneLayouts={zoneLayouts}
              zoneValues={zoneValues}
              layoutMode="stacked"
              onLayoutChange={handleLayoutChange}
              onZoneValueChange={handleZoneChange}
            />

            <div className="email-builder-actions">
              <button type="button" className="email-builder-save" onClick={handleSaveAndRender} disabled={isSaving}>
                Save
              </button>
              <SavingStatusMessage active={isSaving} />
              <EjectToHtmlButton
                marketingAsset={marketingAsset}
                userHasOverridePermission={userHasOverridePermission}
                onEject={async (reason) => {
                  await contentHubApi.updateMarketingAsset({
                    ...marketingAsset,
                    isRawHtmlOverrideMA: true,
                    overrideReasonMA: reason,
                    rawHtmlOverrideContent: livePreviewHtml || '<!-- start building here -->',
                  });
                  window.location.reload();
                }}
              />
            </div>

            {saveError && <div className="marketing-builder-error email-builder-error">{saveError}</div>}
          </div>
        }
        preview={
          <LivePreviewPanel
            template={effectiveTemplate}
            zoneValues={zoneValues}
            layoutMode="stacked"
          />
        }
      />
    </div>
  );
}
