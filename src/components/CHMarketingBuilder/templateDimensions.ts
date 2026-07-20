import type { ChannelType, Template } from './types';

export interface TemplateDimensionPreset {
  id: string;
  label: string;
  width: number;
  height?: number;
  formatPreset: string;
}

export const SOCIAL_DIMENSION_PRESETS: TemplateDimensionPreset[] = [
  {
    id: '1080-square',
    label: 'Square — 1080 × 1080',
    width: 1080,
    height: 1080,
    formatPreset: '1080x1080',
  },
  {
    id: '1080-story',
    label: 'Story — 1080 × 1920',
    width: 1080,
    height: 1920,
    formatPreset: '1080x1920',
  },
  {
    id: '1200-link',
    label: 'Link post — 1200 × 628',
    width: 1200,
    height: 628,
    formatPreset: '1200x628',
  },
  {
    id: '1080-portrait',
    label: 'Portrait — 1080 × 1350',
    width: 1080,
    height: 1350,
    formatPreset: '1080x1350',
  },
];

export const EMAIL_DIMENSION_PRESETS: TemplateDimensionPreset[] = [
  {
    id: '600-standard',
    label: 'Standard email — 600 px wide',
    width: 600,
    formatPreset: '600px email',
  },
  {
    id: '640-wide',
    label: 'Wide email — 640 px wide',
    width: 640,
    formatPreset: '640px email',
  },
];

export const NEWSLETTER_DIMENSION_PRESETS: TemplateDimensionPreset[] = [
  {
    id: '600-newsletter',
    label: 'Standard newsletter — 600 px wide',
    width: 600,
    formatPreset: '600px newsletter',
  },
  {
    id: '640-newsletter',
    label: 'Wide newsletter — 640 px wide',
    width: 640,
    formatPreset: '640px newsletter',
  },
];

export function dimensionPresetsForChannel(channelType: ChannelType): TemplateDimensionPreset[] {
  switch (channelType) {
    case 'Email':
      return EMAIL_DIMENSION_PRESETS;
    case 'Newsletter':
      return NEWSLETTER_DIMENSION_PRESETS;
    default:
      return SOCIAL_DIMENSION_PRESETS;
  }
}

export function formatTemplateDimensions(template: Pick<Template, 'channelType' | 'canvasWidth' | 'canvasHeight'>): string {
  const width = template.canvasWidth;
  const height = template.canvasHeight;

  if (width != null && height != null) {
    return `${width} × ${height} px`;
  }
  if (width != null) {
    return `${width} px wide`;
  }
  return 'Not set';
}

function dimensionsMatchPreset(
  template: Pick<Template, 'canvasWidth' | 'canvasHeight' | 'formatPreset'>,
  preset: TemplateDimensionPreset
): boolean {
  if (template.canvasWidth !== preset.width) return false;
  if (preset.height != null) {
    return template.canvasHeight === preset.height;
  }
  return template.canvasHeight == null || template.canvasHeight === undefined;
}

export function resolveDimensionPresetId(
  template: Pick<Template, 'channelType' | 'canvasWidth' | 'canvasHeight' | 'formatPreset'>
): string {
  const presets = dimensionPresetsForChannel(template.channelType);
  const byDimensions = presets.find((preset) => dimensionsMatchPreset(template, preset));
  if (byDimensions) return byDimensions.id;

  const byFormat = presets.find(
    (preset) =>
      preset.formatPreset.trim().toLowerCase() === (template.formatPreset ?? '').trim().toLowerCase()
  );
  if (byFormat) return byFormat.id;

  return 'custom';
}

export function applyDimensionPreset(
  channelType: ChannelType,
  presetId: string
): Pick<Template, 'canvasWidth' | 'canvasHeight' | 'formatPreset'> | null {
  if (presetId === 'custom') return null;

  const preset = dimensionPresetsForChannel(channelType).find((entry) => entry.id === presetId);
  if (!preset) return null;

  return {
    canvasWidth: preset.width,
    canvasHeight: preset.height,
    formatPreset: preset.formatPreset,
  };
}

export function defaultDimensionsForChannel(channelType: ChannelType): Pick<Template, 'canvasWidth' | 'canvasHeight' | 'formatPreset'> {
  const preset = dimensionPresetsForChannel(channelType)[0];
  return {
    canvasWidth: preset.width,
    canvasHeight: preset.height,
    formatPreset: preset.formatPreset,
  };
}

export function resolveTemplateCanvasWidth(template: Template): number {
  if (template.canvasWidth != null && Number.isFinite(template.canvasWidth)) {
    return template.canvasWidth;
  }

  if (template.channelType === 'Email' || template.channelType === 'Newsletter') {
    return EMAIL_DIMENSION_PRESETS[0].width;
  }

  return SOCIAL_DIMENSION_PRESETS[0].width;
}

export function resolveTemplateCanvasHeight(template: Template): number {
  if (template.canvasHeight != null && Number.isFinite(template.canvasHeight)) {
    return template.canvasHeight;
  }

  if (template.channelType === 'Email' || template.channelType === 'Newsletter') {
    return 800;
  }

  return SOCIAL_DIMENSION_PRESETS[0].height ?? 1080;
}
