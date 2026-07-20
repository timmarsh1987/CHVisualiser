import React, { useEffect, useState } from 'react';
import { contentHubApi } from './api';
import SavingStatusMessage from './SavingStatusMessage';
import type { Template } from './types';

interface TemplateSelectorProps {
  brandKitId: string;
  currentTemplateId: string;
  marketingAssetId: string;
  onTemplateChange: (template: Template) => void;
  refreshKey?: number;
}

export default function TemplateSelector({
  brandKitId,
  currentTemplateId,
  marketingAssetId,
  onTemplateChange,
  refreshKey = 0,
}: TemplateSelectorProps) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [switching, setSwitching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTemplates() {
      setLoading(true);
      setError(null);

      try {
        const listed = await contentHubApi.listTemplatesForBrandKit(brandKitId);
        if (cancelled) return;

        const withCurrent = listed.some((entry) => entry.id === currentTemplateId)
          ? listed
          : [...listed, await contentHubApi.getTemplate(currentTemplateId)];

        const unique = [...new Map(withCurrent.map((entry) => [entry.id, entry])).values()];
        unique.sort((a, b) => a.templateName.localeCompare(b.templateName));
        setTemplates(unique);
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : 'Could not load templates.');
          setTemplates([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadTemplates();

    return () => {
      cancelled = true;
    };
  }, [brandKitId, currentTemplateId, refreshKey]);

  const handleChange = async (templateId: string) => {
    if (!templateId || templateId === currentTemplateId) return;

    setSwitching(true);
    setError(null);

    try {
      await contentHubApi.linkMarketingAssetToTemplate(marketingAssetId, templateId);
      const selected = templates.find((entry) => entry.id === templateId) ?? (await contentHubApi.getTemplate(templateId));
      onTemplateChange(selected);
    } catch (switchError) {
      setError(switchError instanceof Error ? switchError.message : 'Could not switch template.');
    } finally {
      setSwitching(false);
    }
  };

  if (loading) {
    return <p className="template-selector-status">Loading templates...</p>;
  }

  if (templates.length <= 1) {
    return (
      <div className="template-selector">
        <p className="template-selector-status">
          Using <strong>{templates[0]?.templateName ?? 'current template'}</strong>
          {templates.length === 0 ? ' (only template for this brand kit)' : ''}.
          Duplicate this template in Edit template to create another format.
        </p>
        {error && <p className="marketing-builder-error template-selector-error">{error}</p>}
      </div>
    );
  }

  return (
    <div className="template-selector">
      <label className="template-selector-label">
        Template
        <select
          value={currentTemplateId}
          disabled={switching}
          onChange={(event) => void handleChange(event.target.value)}
        >
          {templates.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.templateName} ({entry.channelType})
            </option>
          ))}
        </select>
      </label>
      <p className="template-selector-hint">
        {switching ? '' : 'Choose which template this marketing asset uses.'}
      </p>
      <SavingStatusMessage active={switching} className="template-selector-saving" />
      {error && <p className="marketing-builder-error template-selector-error">{error}</p>}
    </div>
  );
}
