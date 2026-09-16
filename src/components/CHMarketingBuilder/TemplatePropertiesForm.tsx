import React from 'react';
import type { ChannelType, Template } from './types';
import {
  applyDimensionPreset,
  defaultDimensionsForChannel,
  dimensionPresetsForChannel,
  formatTemplateDimensions,
  isFixedCanvasChannel,
  resolveDimensionPresetId,
} from './templateDimensions';

const CHANNEL_TYPES: ChannelType[] = ['Social', 'Email', 'Newsletter', 'Print'];

interface TemplatePropertiesFormProps {
  template: Template;
  onChange: (patch: Partial<Template>) => void;
  compact?: boolean;
}

export default function TemplatePropertiesForm({
  template,
  onChange,
  compact = false,
}: TemplatePropertiesFormProps) {
  const isFixedCanvas = isFixedCanvasChannel(template.channelType);
  const dimensionPresets = dimensionPresetsForChannel(template.channelType);
  const selectedPresetId = resolveDimensionPresetId(template);

  const handleChannelChange = (channelType: ChannelType) => {
    if (channelType === template.channelType) return;
    onChange({
      channelType,
      ...defaultDimensionsForChannel(channelType),
    });
  };

  const handlePresetChange = (presetId: string) => {
    const applied = applyDimensionPreset(template.channelType, presetId);
    if (applied) {
      onChange(applied);
    }
  };

  return (
    <div className={`template-properties-form${compact ? ' template-properties-form-compact' : ''}`}>
      <h4>{compact ? 'Template' : 'Template properties'}</h4>
      <label>
        Template name
        <input
          value={template.templateName}
          onChange={(event) => onChange({ templateName: event.target.value })}
        />
      </label>
      <label>
        Channel type
        <select
          value={template.channelType}
          onChange={(event) => handleChannelChange(event.target.value as ChannelType)}
        >
          {CHANNEL_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <div className="template-dimensions-section">
        <div className="template-dimensions-heading">
          <h5>Dimensions</h5>
          <span className="template-dimensions-summary">{formatTemplateDimensions(template)}</span>
        </div>

        <label>
          Size preset
          <select value={selectedPresetId} onChange={(event) => handlePresetChange(event.target.value)}>
            {dimensionPresets.map((preset) => (
              <option key={preset.id} value={preset.id}>
                {preset.label}
              </option>
            ))}
            <option value="custom">Custom</option>
          </select>
        </label>

        <div className="template-dimension-fields">
          <label>
            {isFixedCanvas ? 'Width (px)' : 'Email width (px)'}
            <input
              type="number"
              min={1}
              value={template.canvasWidth ?? ''}
              onChange={(event) =>
                onChange({
                  canvasWidth: event.target.value ? Number(event.target.value) : undefined,
                  formatPreset: buildFormatPreset(
                    template.channelType,
                    event.target.value ? Number(event.target.value) : undefined,
                    template.canvasHeight
                  ),
                })
              }
            />
          </label>
          {isFixedCanvas ? (
            <label>
              Height (px)
              <input
                type="number"
                min={1}
                value={template.canvasHeight ?? ''}
                onChange={(event) =>
                  onChange({
                    canvasHeight: event.target.value ? Number(event.target.value) : undefined,
                    formatPreset: buildFormatPreset(
                      template.channelType,
                      template.canvasWidth,
                      event.target.value ? Number(event.target.value) : undefined
                    ),
                  })
                }
              />
            </label>
          ) : (
            <label>
              Preview height (px)
              <input
                type="number"
                min={200}
                value={template.canvasHeight ?? 800}
                onChange={(event) =>
                  onChange({
                    canvasHeight: event.target.value ? Number(event.target.value) : undefined,
                  })
                }
              />
            </label>
          )}
        </div>

        {!isFixedCanvas && (
          <p className="template-dimensions-hint">
            Email and newsletter templates use a fixed content width. Preview height is for the live preview panel only.
          </p>
        )}
      </div>

      {template.brandKitId && (
        <p className="template-properties-meta">Brand kit: {template.brandKitId}</p>
      )}
    </div>
  );
}

function buildFormatPreset(
  channelType: ChannelType,
  width?: number,
  height?: number
): string {
  if ((channelType === 'Social' || channelType === 'Print') && width != null && height != null) {
    return `${width}x${height}`;
  }
  if (channelType === 'Email' && width != null) {
    return `${width}px email`;
  }
  if (channelType === 'Newsletter' && width != null) {
    return `${width}px newsletter`;
  }
  return '';
}
