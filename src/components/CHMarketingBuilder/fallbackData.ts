import { createCytivaBrandKit } from './brandAssets';
import { logFallback as emitFallback } from './debugLog';
import { renderEmailHtml } from './renderEmailHtml';
import type { BrandKit, ChannelType, MarketingAsset, Template, ZoneValue } from './types';

export const DUMMY_BRAND_KIT_ID = 'dummy-brand-kit';
export const DUMMY_TEMPLATE_ID = 'dummy-template';
export const DUMMY_MARKETING_ASSET_ID = 'dummy-asset';

export function isDummyId(id?: string | null): boolean {
  if (!id?.trim()) return true;
  return id === DUMMY_BRAND_KIT_ID || id === DUMMY_TEMPLATE_ID || id === DUMMY_MARKETING_ASSET_ID;
}

export function createDummyBrandKit(brandKitId = DUMMY_BRAND_KIT_ID): BrandKit {
  return createCytivaBrandKit(brandKitId);
}

export function createDummyTemplate(templateId: string, channelType: ChannelType = 'Social'): Template {
  if (channelType === 'Email' || channelType === 'Newsletter') {
    return createDummyEmailTemplate(templateId);
  }

  return createDummySocialTemplate(templateId);
}

function createDummySocialTemplate(templateId: string): Template {
  return {
    id: templateId,
    templateName: 'Demo Social Template',
    channelType: 'Social',
    formatPreset: '1080x1080',
    canvasWidth: 1080,
    canvasHeight: 1080,
    brandKitId: DUMMY_BRAND_KIT_ID,
    zones: [
      {
        id: 'demo-zone-bg',
        zoneKey: 'background',
        zoneLabel: 'Background',
        zoneType: 'Background Color',
        isLocked: true,
        sortOrder: 0,
        positionX: 0,
        positionY: 0,
        zoneWidth: 1080,
        zoneHeight: 1080,
      },
      {
        id: 'demo-zone-logo',
        zoneKey: 'logo',
        zoneLabel: 'Logo',
        zoneType: 'Logo',
        isLocked: true,
        sortOrder: 1,
        positionX: 40,
        positionY: 40,
        zoneWidth: 200,
        zoneHeight: 80,
      },
      {
        id: 'demo-zone-headline',
        zoneKey: 'headline',
        zoneLabel: 'Headline',
        zoneType: 'Heading',
        headingLevel: 'H1',
        isLocked: false,
        sortOrder: 2,
        positionX: 40,
        positionY: 200,
        zoneWidth: 1000,
        zoneHeight: 120,
        maxCharacterCount: 80,
      },
      {
        id: 'demo-zone-image',
        zoneKey: 'heroImage',
        zoneLabel: 'Hero image',
        zoneType: 'Image',
        isLocked: false,
        sortOrder: 3,
        positionX: 40,
        positionY: 360,
        zoneWidth: 1000,
        zoneHeight: 500,
        allowedAssetCollectionId: 'demo-collection',
        aspectRatioLock: '16:9',
      },
      {
        id: 'demo-zone-cta',
        zoneKey: 'cta',
        zoneLabel: 'Learn more',
        zoneType: 'CTA Button',
        isLocked: false,
        sortOrder: 4,
        positionX: 40,
        positionY: 900,
        zoneWidth: 220,
        zoneHeight: 56,
      },
    ],
  };
}

export function createDummyEmailTemplate(templateId: string): Template {
  return {
    id: templateId,
    templateName: 'Demo Email Template',
    channelType: 'Email',
    formatPreset: 'Email.StandardEmail',
    canvasWidth: 600,
    canvasHeight: 800,
    brandKitId: DUMMY_BRAND_KIT_ID,
    zones: [
      {
        id: 'demo-email-logo',
        zoneKey: 'logo',
        zoneLabel: 'Logo',
        zoneType: 'Logo',
        isLocked: true,
        sortOrder: 0,
      },
      {
        id: 'demo-email-headline',
        zoneKey: 'headline',
        zoneLabel: 'Headline',
        zoneType: 'Heading',
        headingLevel: 'H1',
        isLocked: false,
        sortOrder: 1,
        maxCharacterCount: 120,
      },
      {
        id: 'demo-email-hero',
        zoneKey: 'heroImage',
        zoneLabel: 'Hero image',
        zoneType: 'Image',
        isLocked: false,
        sortOrder: 2,
        allowedAssetCollectionId: 'demo-collection',
        aspectRatioLock: '16:9',
      },
      {
        id: 'demo-email-body',
        zoneKey: 'body',
        zoneLabel: 'Body copy',
        zoneType: 'Text',
        isLocked: false,
        sortOrder: 3,
        maxCharacterCount: 500,
      },
      {
        id: 'demo-email-cta',
        zoneKey: 'cta',
        zoneLabel: 'Learn more',
        zoneType: 'CTA Button',
        isLocked: false,
        sortOrder: 4,
      },
    ],
  };
}

export function createDummyMarketingAsset(assetId: string, templateId: string): MarketingAsset {
  return {
    id: assetId,
    assetName: 'Demo Marketing Asset',
    channelTypeMA: { id: 'social', name: 'Social' },
    formatPresetMA: { id: '1080x1080', name: '1080x1080' },
    outputFormatMA: { id: 'PNG', name: 'PNG' },
    templateId,
    isRawHtmlOverrideMA: false,
    zoneValues: [
      { zoneKey: 'headline', textValue: 'Your headline here' },
      { zoneKey: 'cta', textValue: 'Learn more' },
    ],
  };
}

export function createDummyAssetSearchResults(query?: string) {
  const items = [
    {
      id: 'demo-asset-1',
      name: 'Demo hero image 1',
      thumbnailUrl: 'https://placehold.co/400x400/png?text=Image+1',
    },
    {
      id: 'demo-asset-2',
      name: 'Demo hero image 2',
      thumbnailUrl: 'https://placehold.co/400x400/png?text=Image+2',
    },
    {
      id: 'demo-asset-3',
      name: 'Demo hero image 3',
      thumbnailUrl: 'https://placehold.co/400x400/png?text=Image+3',
    },
  ];

  if (!query?.trim()) return items;
  const normalized = query.trim().toLowerCase();
  return items.filter((item) => item.name.toLowerCase().includes(normalized));
}

export function ensureTemplateBrandKit(template: Template): Template {
  if (template.brandKitId?.trim()) {
    return template;
  }
  return { ...template, brandKitId: DUMMY_BRAND_KIT_ID };
}

export function createDummyEmailHtml(
  template: Template,
  zoneValues: Record<string, ZoneValue>,
  brandKit = createDummyBrandKit()
): string {
  return renderEmailHtml(template, zoneValues, brandKit);
}

export function logFallback(resource: string, reason: unknown, hint?: string) {
  emitFallback(resource, reason, hint);
}
