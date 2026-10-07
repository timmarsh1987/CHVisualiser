export interface RgbColor {
  red: number;
  green: number;
  blue: number;
}

export function parseColor(hex: string): RgbColor {
  const match = /^#([0-9A-Fa-f]{6})$/.exec(hex);
  const digits = match?.[1];
  if (!digits) {
    throw new Error(`Color ${hex} must be a #RRGGBB value.`);
  }
  return {
    red: Number.parseInt(digits.slice(0, 2), 16) / 255,
    green: Number.parseInt(digits.slice(2, 4), 16) / 255,
    blue: Number.parseInt(digits.slice(4, 6), 16) / 255,
  };
}
