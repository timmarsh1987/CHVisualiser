import type { BrandColor, BrandFont, BrandKit } from './types';
import cytivaLogoDarkBgUrl from './CytivaLogoDarkBg.svg';

/**
 * Demo Cytiva brand defaults until brand kit assets are configured in Content Hub.
 * Colors and typography sourced from cytivalifesciences.com shared styles.
 * @see https://www.cytivalifesciences.com/en/us/legal/trademarks
 */
export interface CytivaLogoOption {
  id: string;
  label: string;
  url: string;
  previewBackground: string;
}

/** Legacy CDN URL — standard logo (dark wordmark), not a white-on-dark variant. */
export const LEGACY_CYTIVA_DARK_LOGO_URL =
  'https://cdn.cytivalifesciences.com/api/public/content/7059157tab6843?v=9bba7f58';

export const CYTIVA_LOGO_OPTIONS: CytivaLogoOption[] = [
  {
    id: 'color',
    label: 'Full color',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Cytiva_Logo.png',
    previewBackground: '#f7f7f7',
  },
  {
    id: 'dark',
    label: 'Dark background',
    url: cytivaLogoDarkBgUrl,
    previewBackground: '#18181b',
  },
];

export const DEFAULT_CYTIVA_LOGO_URL = CYTIVA_LOGO_OPTIONS[0].url;

/** @deprecated Use DEFAULT_CYTIVA_LOGO_URL */
export const CYTIVA_LOGO_URL = DEFAULT_CYTIVA_LOGO_URL;

export const CYTIVA_FONT_STACK = "'Cytiva Aktiv', Arial, Helvetica, sans-serif";

export const CYTIVA_THEME = {
  primary: '#00755f',
  primaryHover: '#33a08c',
  primaryActive: '#00614f',
  secondary: '#18181b',
  accent: '#ff5900',
  background: '#f2f9f8',
  surface: '#ffffff',
  border: '#e8e8e8',
  muted: '#717171',
  primarySoft: '#e4f7f4',
  primaryBorder: '#99cfc5',
} as const;

export const CYTIVA_COLORS: BrandColor[] = [
  { colorName: 'Primary', hexValue: CYTIVA_THEME.primary, colorUsageType: 'Primary' },
  { colorName: 'Secondary', hexValue: CYTIVA_THEME.secondary, colorUsageType: 'Secondary' },
  { colorName: 'Accent', hexValue: CYTIVA_THEME.accent, colorUsageType: 'Accent' },
  { colorName: 'Background', hexValue: CYTIVA_THEME.background, colorUsageType: 'Background' },
];

export const CYTIVA_FONTS: BrandFont[] = [
  { fontFamily: CYTIVA_FONT_STACK, fontWeight: 'Bold', fontUsageType: 'Heading' },
  { fontFamily: CYTIVA_FONT_STACK, fontWeight: 'Regular', fontUsageType: 'Body' },
  { fontFamily: CYTIVA_FONT_STACK, fontWeight: 'Medium', fontUsageType: 'CTA' },
];

export function resolveLogoAssetUrl(logoAssetUrl?: string): string {
  const trimmed = logoAssetUrl?.trim();
  if (!trimmed) return DEFAULT_CYTIVA_LOGO_URL;

  if (trimmed === LEGACY_CYTIVA_DARK_LOGO_URL) {
    return CYTIVA_LOGO_OPTIONS.find((option) => option.id === 'dark')?.url ?? trimmed;
  }

  const known = CYTIVA_LOGO_OPTIONS.find(
    (option) => option.url === trimmed || option.id === trimmed
  );
  if (known) return known.url;

  return trimmed;
}

export function getLogoPreviewBackground(logoAssetUrl?: string): string | undefined {
  const resolved = resolveLogoAssetUrl(logoAssetUrl);
  return CYTIVA_LOGO_OPTIONS.find((option) => option.url === resolved)?.previewBackground;
}

export function withResolvedBrandKit(brandKit: BrandKit): BrandKit {
  return {
    ...brandKit,
    brandKitName: brandKit.brandKitName?.trim() || 'Cytiva',
    logoAssetUrl: resolveLogoAssetUrl(brandKit.logoAssetUrl),
    colors: CYTIVA_COLORS,
    fonts: CYTIVA_FONTS,
  };
}

/** @deprecated Use withResolvedBrandKit */
export const withResolvedLogo = withResolvedBrandKit;

export function createCytivaBrandKit(brandKitId: string): BrandKit {
  return withResolvedBrandKit({
    id: brandKitId,
    brandKitName: 'Cytiva',
    logoAssetUrl: DEFAULT_CYTIVA_LOGO_URL,
    colors: CYTIVA_COLORS,
    fonts: CYTIVA_FONTS,
  });
}
