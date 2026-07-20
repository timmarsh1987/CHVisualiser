import type { HeadingLevel } from './types';

export const HEADING_LEVELS: HeadingLevel[] = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

export const DEFAULT_HEADING_LEVEL: HeadingLevel = 'H2';

export function coerceHeadingLevel(value: string | undefined): HeadingLevel {
  const normalized = value?.trim().toUpperCase();
  if (normalized && HEADING_LEVELS.includes(normalized as HeadingLevel)) {
    return normalized as HeadingLevel;
  }
  return DEFAULT_HEADING_LEVEL;
}

export const EMAIL_HEADING_FONT_SIZES: Record<HeadingLevel, string> = {
  H1: '32px',
  H2: '28px',
  H3: '24px',
  H4: '20px',
  H5: '18px',
  H6: '16px',
};

export const PREVIEW_HEADING_FONT_SIZES: Record<HeadingLevel, string> = {
  H1: '2rem',
  H2: '1.75rem',
  H3: '1.5rem',
  H4: '1.25rem',
  H5: '1.125rem',
  H6: '1rem',
};
