import type { BrandColor, BrandFont, BrandKit } from './types';

/**
 * Demo SOK / S Group brand defaults until brand kit assets are configured in Content Hub.
 * @see https://s-ryhma.fi/en
 */
export interface BrandLogoOption {
  id: string;
  label: string;
  url: string;
  previewBackground: string;
}

export const SOK_LOGO_URL = 'https://ws.overcasthq.com/wp-content/uploads/2025/05/sok_logo.png';

/** Legacy Cytiva URLs — mapped to the SOK logo so older zone values still render. */
export const LEGACY_CYTIVA_DARK_LOGO_URL =
  'https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58';
export const LEGACY_CYTIVA_COLOR_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png';

export const BRAND_LOGO_OPTIONS: BrandLogoOption[] = [
  {
    id: 'color',
    label: 'Full color',
    url: SOK_LOGO_URL,
    previewBackground: '#f7f7f7',
  },
  {
    id: 'dark',
    label: 'Dark background',
    url: `${SOK_LOGO_URL}#dark`,
    previewBackground: '#000000',
  },
];

export const DEFAULT_SOK_LOGO_URL = SOK_LOGO_URL;

/** @deprecated Use DEFAULT_SOK_LOGO_URL */
export const DEFAULT_CYTIVA_LOGO_URL = DEFAULT_SOK_LOGO_URL;
/** @deprecated Use BRAND_LOGO_OPTIONS */
export const CYTIVA_LOGO_OPTIONS = BRAND_LOGO_OPTIONS;
/** @deprecated Use DEFAULT_SOK_LOGO_URL */
export const CYTIVA_LOGO_URL = DEFAULT_SOK_LOGO_URL;

export const SOK_FONT_STACK = 'Arial, Helvetica, sans-serif';
/** @deprecated Use SOK_FONT_STACK */
export const CYTIVA_FONT_STACK = SOK_FONT_STACK;

export const SOK_THEME = {
  primary: '#00a651',
  primaryHover: '#1db86a',
  primaryActive: '#008a44',
  secondary: '#000000',
  accent: '#00a651',
  background: '#f4f7f5',
  surface: '#ffffff',
  border: '#e2e8e4',
  muted: '#6b716e',
  primarySoft: '#e6f7ed',
  primaryBorder: '#8fd4a8',
} as const;

/** @deprecated Use SOK_THEME */
export const CYTIVA_THEME = SOK_THEME;

export const SOK_COLORS: BrandColor[] = [
  { colorName: 'Primary', hexValue: SOK_THEME.primary, colorUsageType: 'Primary' },
  { colorName: 'Secondary', hexValue: SOK_THEME.secondary, colorUsageType: 'Secondary' },
  { colorName: 'Accent', hexValue: SOK_THEME.accent, colorUsageType: 'Accent' },
  { colorName: 'Background', hexValue: SOK_THEME.background, colorUsageType: 'Background' },
];

export const SOK_FONTS: BrandFont[] = [
  { fontFamily: SOK_FONT_STACK, fontWeight: 'Bold', fontUsageType: 'Heading' },
  { fontFamily: SOK_FONT_STACK, fontWeight: 'Regular', fontUsageType: 'Body' },
  { fontFamily: SOK_FONT_STACK, fontWeight: 'Medium', fontUsageType: 'CTA' },
];

export function resolveLogoAssetUrl(logoAssetUrl?: string): string {
  const trimmed = logoAssetUrl?.trim();
  if (!trimmed) return DEFAULT_SOK_LOGO_URL;

  if (
    trimmed === LEGACY_CYTIVA_DARK_LOGO_URL ||
    trimmed === LEGACY_CYTIVA_COLOR_LOGO_URL ||
    /cytiva/i.test(trimmed)
  ) {
    return DEFAULT_SOK_LOGO_URL;
  }

  const known = BRAND_LOGO_OPTIONS.find((option) => option.url === trimmed || option.id === trimmed);
  if (known) return known.url;

  return trimmed;
}

export function getLogoPreviewBackground(logoAssetUrl?: string): string | undefined {
  const resolved = resolveLogoAssetUrl(logoAssetUrl);
  return BRAND_LOGO_OPTIONS.find((option) => option.url === resolved)?.previewBackground;
}

export function withResolvedBrandKit(brandKit: BrandKit): BrandKit {
  return {
    ...brandKit,
    brandKitName: brandKit.brandKitName?.trim() || 'SOK',
    logoAssetUrl: resolveLogoAssetUrl(brandKit.logoAssetUrl),
    colors: SOK_COLORS,
    fonts: SOK_FONTS,
  };
}

/** @deprecated Use withResolvedBrandKit */
export const withResolvedLogo = withResolvedBrandKit;

export function createSokBrandKit(brandKitId: string): BrandKit {
  return withResolvedBrandKit({
    id: brandKitId,
    brandKitName: 'SOK',
    logoAssetUrl: DEFAULT_SOK_LOGO_URL,
    colors: SOK_COLORS,
    fonts: SOK_FONTS,
  });
}

/** @deprecated Use createSokBrandKit */
export const createCytivaBrandKit = createSokBrandKit;
