import React, { useMemo, useRef, useState } from 'react';
import {
  indexZoneValuesByZoneId,
  mergeLoadedLayouts,
  mergeZoneValuesWithLayoutJson,
  parseZoneLayoutJsonWithValues,
  serializeZoneLayoutJsonWithValues,
  templateWithAssetLayouts,
  zoneValueKeyForZone,
} from './assetLayout';
import { contentHubApi, isRenderedOutputUploadEnabled } from './api';
import AssetStructurePanel from './AssetStructurePanel';
import BuilderSplitLayout from './BuilderSplitLayout';
import LivePreviewPanel from './LivePreviewPanel';
import { logInfo, logResolved } from './debugLog';
import { loadHtml2Canvas } from './loadHtml2Canvas';
import { resolveTemplateCanvasHeight, resolveTemplateCanvasWidth } from './templateDimensions';
import { EjectToHtmlButton } from './EjectToHtmlButton';
import SavingStatusMessage from './SavingStatusMessage';
import type { AssetZoneLayout, AssetZoneLayoutMap, MarketingAsset, Template, ZoneValue } from './types';

interface SocialAssetBuilderProps {
  template: Template;
  marketingAsset: MarketingAsset;
  userHasOverridePermission: boolean;
  html2canvasCdnUrl?: string;
  onSaved?: (asset: MarketingAsset) => void;
}

export default function SocialAssetBuilder({
  template,
  marketingAsset,
  userHasOverridePermission,
  html2canvasCdnUrl,
  onSaved,
}: SocialAssetBuilderProps) {
  const [zoneValues, setZoneValues] = useState<Record<string, ZoneValue>>(() => {
    const parsed = parseZoneLayoutJsonWithValues(marketingAsset.zoneLayoutJson);
    const merged = mergeZoneValuesWithLayoutJson(template, marketingAsset.zoneValues, parsed.values);
    return indexZoneValuesByZoneId(template, merged);
  });
  const [zoneLayouts, setZoneLayouts] = useState<AssetZoneLayoutMap>(() => {
    const parsed = parseZoneLayoutJsonWithValues(marketingAsset.zoneLayoutJson);
    return mergeLoadedLayouts(template, parsed.layouts);
  });
  const [isExporting, setIsExporting] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const effectiveTemplate = useMemo(
    () => templateWithAssetLayouts(template, zoneLayouts),
    [template, zoneLayouts]
  );

  const handleZoneChange = (zoneId: string, value: ZoneValue) => {
    setZoneValues((prev) => ({ ...prev, [zoneId]: value }));
  };

  const handleLayoutChange = (layoutKey: string, patch: Partial<AssetZoneLayout>) => {
    setZoneLayouts((prev) => {
      const merged: AssetZoneLayout = { ...prev[layoutKey], ...patch };
      for (const key of Object.keys(patch) as (keyof AssetZoneLayout)[]) {
        if (patch[key] === undefined) {
          delete merged[key];
        }
      }
      return { ...prev, [layoutKey]: merged };
    });
  };

  const handleExportAndSave = async () => {
    setIsExporting(true);
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

      if (isRenderedOutputUploadEnabled() && canvasRef.current) {
        const html2canvas = await loadHtml2Canvas(html2canvasCdnUrl);
        const canvas = await html2canvas(canvasRef.current, {
          useCORS: true,
          width: resolveTemplateCanvasWidth(template),
          height: resolveTemplateCanvasHeight(template),
        });
        const pngMime = ['image', 'png'].join('/');
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Canvas export failed'))), pngMime)
        );

        await contentHubApi.uploadRenderedOutput(
          marketingAsset.id,
          blob,
          `${marketingAsset.assetName}.png`
        );
      } else {
        logInfo(
          'rendered output upload',
          'Skipped PNG upload — not required for save on this Content Hub instance.'
        );
      }

      onSaved?.({
        ...marketingAsset,
        zoneValues: mergedSaved,
        zoneLayoutJson,
      });
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Failed to save.');
    } finally {
      setIsExporting(false);
    }
  };

  if (marketingAsset.isRawHtmlOverrideMA) {
    return (
      <div className="social-builder social-builder-override">
        <div className="override-banner">
          Raw HTML override active. Reason: {marketingAsset.overrideReasonMA}
        </div>
        <div dangerouslySetInnerHTML={{ __html: marketingAsset.rawHtmlOverrideContent ?? '' }} />
      </div>
    );
  }

  return (
    <div className="social-builder">
      <BuilderSplitLayout
        structureTitle="Social structure"
        previewTitle="Live preview"
        structure={
          <div className="social-builder-structure">
            <AssetStructurePanel
              template={template}
              zoneLayouts={zoneLayouts}
              zoneValues={zoneValues}
              layoutMode="canvas"
              onLayoutChange={handleLayoutChange}
              onZoneValueChange={handleZoneChange}
            />

            <div className="social-builder-actions">
              <button type="button" className="social-builder-save" onClick={handleExportAndSave} disabled={isExporting}>
                Save
              </button>
              <SavingStatusMessage active={isExporting} />
              <EjectToHtmlButton
                marketingAsset={marketingAsset}
                userHasOverridePermission={userHasOverridePermission}
                onEject={async (reason) => {
                  await contentHubApi.updateMarketingAsset({
                    ...marketingAsset,
                    isRawHtmlOverrideMA: true,
                    overrideReasonMA: reason,
                    rawHtmlOverrideContent: '<!-- start building here -->',
                  });
                  window.location.reload();
                }}
              />
            </div>

            {saveError && <div className="marketing-builder-error social-builder-error">{saveError}</div>}
          </div>
        }
        preview={
          <LivePreviewPanel
            ref={canvasRef}
            template={effectiveTemplate}
            zoneValues={zoneValues}
            layoutMode="canvas"
          />
        }
      />
    </div>
  );
}
