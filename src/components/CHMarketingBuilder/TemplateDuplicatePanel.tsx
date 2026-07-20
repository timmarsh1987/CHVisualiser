import React, { useState } from 'react';
import { contentHubApi } from './api';
import SavingStatusMessage from './SavingStatusMessage';
import { duplicateTargetChannels } from './templateDuplicate';
import type { ChannelType, Template } from './types';

interface TemplateDuplicatePanelProps {
  template: Template;
  onDuplicated?: (template: Template) => void;
}

export default function TemplateDuplicatePanel({ template, onDuplicated }: TemplateDuplicatePanelProps) {
  const targets = duplicateTargetChannels(template.channelType);
  const [targetChannel, setTargetChannel] = useState<ChannelType>(targets[0] ?? 'Social');
  const [templateName, setTemplateName] = useState(`${template.templateName} (${targets[0] ?? 'Social'})`);
  const [isDuplicating, setIsDuplicating] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (targets.length === 0) {
    return null;
  }

  const handleChannelChange = (channel: ChannelType) => {
    setTargetChannel(channel);
    setTemplateName(`${template.templateName} (${channel})`);
  };

  const handleDuplicate = async () => {
    setIsDuplicating(true);
    setError(null);
    setMessage(null);

    try {
      const created = await contentHubApi.duplicateTemplate(template.id, targetChannel, templateName);
      setMessage(
        `Created "${created.templateName}". Open Asset builder and choose it from the template dropdown.`
      );
      onDuplicated?.(created);
    } catch (duplicateError) {
      setError(
        duplicateError instanceof Error ? duplicateError.message : 'Could not duplicate template.'
      );
    } finally {
      setIsDuplicating(false);
    }
  };

  return (
    <div className="template-duplicate-panel">
      <h4>Duplicate template</h4>
      <p className="template-duplicate-hint">
        Copy this template&apos;s zones into a new format. The new template is linked to the same brand kit and
        appears in the Asset builder template list.
      </p>

      <label>
        New template name
        <input
          value={templateName}
          onChange={(event) => setTemplateName(event.target.value)}
          placeholder={`${template.templateName} (${targetChannel})`}
        />
      </label>

      <label>
        Copy to format
        <select
          value={targetChannel}
          onChange={(event) => handleChannelChange(event.target.value as ChannelType)}
        >
          {targets.map((channel) => (
            <option key={channel} value={channel}>
              {channel}
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        className="template-duplicate-button"
        onClick={() => void handleDuplicate()}
        disabled={isDuplicating || !templateName.trim()}
      >
        {`Duplicate as ${targetChannel}`}
      </button>

      <SavingStatusMessage active={isDuplicating} className="template-duplicate-saving" />

      {message && <p className="template-duplicate-message">{message}</p>}
      {error && <p className="marketing-builder-error template-duplicate-error">{error}</p>}
    </div>
  );
}
