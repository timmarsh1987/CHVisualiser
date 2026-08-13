import React, { useCallback, useMemo, useRef, useState } from 'react';
import DesignerShell from '../CHDesigner/DesignerShell';
import { parseDesignerDocument } from '../CHDesigner/document';
import {
  emptyInstance,
  mergeTemplateAndInstance,
  parseDesignerInstance,
} from '../CHDesigner/policy';
import type { DesignerDocument, DesignerInstanceDocument } from '../CHDesigner/types';
import { contentHubApi } from './api';
import type { MarketingAsset, Template } from './types';

interface DesignerAssetBuilderProps {
  template: Template;
  marketingAsset: MarketingAsset;
  designerDocumentProperty?: string;
  designerInstanceProperty?: string;
  onSaved?: (asset: MarketingAsset) => void;
}

function resolveTemplateDocument(template: Template): DesignerDocument | null {
  if (!template.designerDocumentJson?.trim()) return null;
  try {
    return parseDesignerDocument(JSON.parse(template.designerDocumentJson));
  } catch {
    return null;
  }
}

function resolveInstance(
  template: Template,
  marketingAsset: MarketingAsset
): DesignerInstanceDocument {
  if (marketingAsset.designerInstanceJson?.trim()) {
    try {
      const parsed = parseDesignerInstance(JSON.parse(marketingAsset.designerInstanceJson));
      if (parsed) return parsed;
    } catch {
      // fall through
    }
  }
  return emptyInstance(template.id);
}

export default function DesignerAssetBuilder({
  template,
  marketingAsset,
  designerInstanceProperty,
  onSaved,
}: DesignerAssetBuilderProps) {
  const templateDoc = useMemo(() => resolveTemplateDocument(template), [template]);
  const [instance, setInstance] = useState<DesignerInstanceDocument>(() =>
    resolveInstance(template, marketingAsset)
  );
  const instanceRef = useRef(instance);
  instanceRef.current = instance;

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);

  const merged = useMemo(() => {
    if (!templateDoc) return null;
    return mergeTemplateAndInstance(templateDoc, instance);
  }, [templateDoc, instance]);

  const handleSave = useCallback(async () => {
    setSaveStatus('saving');
    setSaveError(null);
    try {
      const json = JSON.stringify(instanceRef.current);
      await contentHubApi.saveMarketingAssetDesignerInstance(
        marketingAsset.id,
        json,
        designerInstanceProperty
      );
      const nextAsset: MarketingAsset = { ...marketingAsset, designerInstanceJson: json };
      onSaved?.(nextAsset);
      setSaveStatus('saved');
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Failed to save designer instance.');
      setSaveStatus('error');
    }
  }, [designerInstanceProperty, marketingAsset, onSaved]);

  if (!templateDoc || !merged) {
    return (
      <div className="marketing-builder-status marketing-builder-error">
        Template designer document is missing or invalid. Open Edit template and create a canvas
        template first.
      </div>
    );
  }

  const statusText =
    saveStatus === 'saving'
      ? 'Saving…'
      : saveStatus === 'saved'
        ? 'Saved'
        : saveStatus === 'error'
          ? saveError || 'Save failed'
          : 'Edit unlocked layers, then Save';

  return (
    <div className="designer-asset-builder">
      <div className="designer-asset-builder-actions">
        <button type="button" className="chd-btn" onClick={() => void handleSave()}>
          Save
        </button>
        <span
          className={
            saveStatus === 'error'
              ? 'chd-status-bar chd-status-bar--error'
              : saveStatus === 'saved'
                ? 'chd-status-bar chd-status-bar--saved'
                : 'chd-status-bar'
          }
        >
          {statusText}
        </span>
      </div>
      <DesignerShell
        key={`${template.id}:${marketingAsset.id}`}
        mode="endUser"
        document={merged}
        templateDocument={templateDoc}
        templateId={template.id}
        onInstanceChange={setInstance}
      />
    </div>
  );
}
