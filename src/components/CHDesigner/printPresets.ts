export type CanvasPresetGroup = 'print' | 'social';

export interface CanvasPreset {
  id: string;
  group: CanvasPresetGroup;
  label: string;
  width: number;
  height: number;
}

/** CSS-pixel sizes at 96 dpi (browser print preview). */
function mm(widthMm: number, heightMm: number): { width: number; height: number } {
  return {
    width: Math.round((widthMm / 25.4) * 96),
    height: Math.round((heightMm / 25.4) * 96),
  };
}

function inch(widthIn: number, heightIn: number): { width: number; height: number } {
  return {
    width: Math.round(widthIn * 96),
    height: Math.round(heightIn * 96),
  };
}

const A4 = mm(210, 297);
const A3 = mm(297, 420);
const A5 = mm(148, 210);

export const CANVAS_PRESETS: CanvasPreset[] = [
  { id: 'a4-portrait', group: 'print', label: 'A4 portrait', width: A4.width, height: A4.height },
  { id: 'a4-landscape', group: 'print', label: 'A4 landscape', width: A4.height, height: A4.width },
  { id: 'a3-portrait', group: 'print', label: 'A3 portrait', width: A3.width, height: A3.height },
  { id: 'a3-landscape', group: 'print', label: 'A3 landscape', width: A3.height, height: A3.width },
  { id: 'a5-portrait', group: 'print', label: 'A5 portrait', width: A5.width, height: A5.height },
  { id: 'a5-landscape', group: 'print', label: 'A5 landscape', width: A5.height, height: A5.width },
  { id: 'letter-portrait', group: 'print', label: 'Letter portrait', ...inch(8.5, 11) },
  { id: 'letter-landscape', group: 'print', label: 'Letter landscape', ...inch(11, 8.5) },
  { id: 'tabloid-portrait', group: 'print', label: 'Tabloid portrait', ...inch(11, 17) },
  { id: 'tabloid-landscape', group: 'print', label: 'Tabloid landscape', ...inch(17, 11) },
  {
    id: 'business-card',
    group: 'print',
    label: 'Business card',
    ...mm(85, 55),
  },
  { id: '1080-square', group: 'social', label: 'Square 1080', width: 1080, height: 1080 },
  { id: '1080-story', group: 'social', label: 'Story 1080 × 1920', width: 1080, height: 1920 },
  { id: '1080-portrait', group: 'social', label: 'Portrait 1080 × 1350', width: 1080, height: 1350 },
  { id: '1200-link', group: 'social', label: 'Link post 1200 × 628', width: 1200, height: 628 },
];

export const CANVAS_PRESET_GROUPS: { id: CanvasPresetGroup; label: string }[] = [
  { id: 'print', label: 'Print' },
  { id: 'social', label: 'Social' },
];

export function findCanvasPreset(id: string): CanvasPreset | undefined {
  return CANVAS_PRESETS.find((preset) => preset.id === id);
}

export function resolveCanvasPresetId(width: number, height: number, presetId?: string): string {
  if (presetId && findCanvasPreset(presetId)) {
    const preset = findCanvasPreset(presetId)!;
    if (preset.width === width && preset.height === height) return preset.id;
  }

  const match = CANVAS_PRESETS.find((preset) => preset.width === width && preset.height === height);
  return match?.id ?? 'custom';
}
