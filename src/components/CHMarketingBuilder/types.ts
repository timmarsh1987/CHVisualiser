// Mirrors the EPAM.* Content Hub entity schema.
// Keep these in sync with the entity definitions in Content Hub.

export type ChannelType = 'Social' | 'Email' | 'Newsletter';

export type ZoneType =
  | 'Text'
  | 'Heading'
  | 'Image'
  | 'CTA Button'
  | 'Logo'
  | 'Background Color'
  | 'Divider'
  | 'HTML';

export type HeadingLevel = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

export type ContentAlignment = 'Left' | 'Center' | 'Right';

export type OffsetDirection = 'Top' | 'Right' | 'Bottom' | 'Left';

export type OutputFormat = 'PNG' | 'HTML';

export type BuilderMode = 'social' | 'email' | 'admin';

export interface BrandColor {
  colorName: string;
  hexValue: string;
  colorUsageType: 'Primary' | 'Secondary' | 'Accent' | 'Background';
}

export interface BrandFont {
  fontFamily: string;
  fontWeight: 'Light' | 'Regular' | 'Medium' | 'Bold';
  fontUsageType: 'Heading' | 'Body' | 'CTA';
}

export interface BrandKit {
  id: string;
  brandKitName: string;
  logoAssetUrl: string;
  colors: BrandColor[];
  fonts: BrandFont[];
}

export interface TemplateZone {
  id: string;
  zoneKey: string;
  zoneLabel: string;
  zoneType: ZoneType;
  isLocked: boolean;
  sortOrder: number;
  positionX?: number;
  positionY?: number;
  zoneWidth?: number;
  zoneHeight?: number;
  maxCharacterCount?: number;
  headingLevel?: HeadingLevel;
  contentAlignment?: ContentAlignment;
  offsetDirection?: OffsetDirection;
  offsetPx?: number;
  aspectRatioLock?: string;
  htmlDefaultContent?: string;
  htmlAllowUserOverride?: boolean;
  /** M.Asset entity IDs linked directly on this zone (templateZoneToAllowedAsset). */
  allowedAssetIds?: string[];
  /** @deprecated Use allowedAssetIds — assets linked as zone relations instead of a collection. */
  allowedAssetCollectionId?: string;
}

export interface Template {
  id: string;
  templateName: string;
  channelType: ChannelType;
  formatPreset: string;
  canvasWidth?: number;
  canvasHeight?: number;
  brandKitId: string;
  zones: TemplateZone[];
  /** M.Asset IDs on the template — available to every image zone. */
  allowedAssetIds?: string[];
  /** CHDesigner template document JSON on EPAM.BuilderTemplate (property designerDocumentJson). */
  designerDocumentJson?: string;
}

export interface AssetZoneLayout {
  positionX?: number;
  positionY?: number;
  zoneWidth?: number;
  zoneHeight?: number;
  contentAlignment?: ContentAlignment;
  offsetDirection?: OffsetDirection;
  offsetPx?: number;
  sortOrder?: number;
}

export type AssetZoneLayoutMap = Record<string, AssetZoneLayout>;

export interface ZoneValue {
  id?: string;
  zoneKey: string;
  textValue?: string;
  colorValue?: string;
  htmlValue?: string;
  imageAssetId?: string;
  imageAssetUrl?: string;
  linkUrl?: string;
}

export interface EntityRelationRef {
  id: string;
  name: string;
}

export interface MarketingAsset {
  id: string;
  assetName: string;
  channelTypeMA: EntityRelationRef;
  formatPresetMA: EntityRelationRef;
  outputFormatMA: EntityRelationRef;
  templateId: string;
  isRawHtmlOverrideMA: boolean;
  rawHtmlOverrideContent?: string;
  overrideReasonMA?: string;
  zoneValues: ZoneValue[];
  zoneLayoutJson?: string;
  /** CHDesigner end-user instance JSON on EPAM.BuilderMarketingAsset (property designerInstanceJson). */
  designerInstanceJson?: string;
  renderedOutputAssetId?: string;
}

export interface MarketingBuilderOptions {
  builderMode?: BuilderMode;
  brandKitId?: string;
  templateId?: string;
  marketingAssetId?: string;
  userHasOverridePermission?: boolean;
  allowTemplateZoneEditing?: boolean;
  renderEmailApiUrl?: string;
  contentHubProxyBase?: string;
  html2canvasCdnUrl?: string;
  /** Figma import serverless endpoint (default `/api/figma/import`). */
  figmaImportApiUrl?: string;
  /** Bearer token matching FIGMA_IMPORT_API_SECRET / BRAND_COMPLIANCE_API_SECRET when set. */
  figmaImportApiToken?: string;
  /** Override Content Hub property name for EPAM.BuilderTemplate designer JSON (default designerDocumentJson). */
  designerDocumentProperty?: string;
  /** Override Content Hub property name for EPAM.BuilderMarketingAsset instance JSON (default designerInstanceJson). */
  designerInstanceProperty?: string;
  /** Identifier of the OOTB Search page component on this Content Hub page. */
  searchIdentifier?: string;
  /** Optional selection pool identifier for OOTB Selection component integration. */
  selectionPoolIdentifier?: string;
}
