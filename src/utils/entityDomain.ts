import { IEntity } from '@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity';

export type EntityDomain = 'asset' | 'product' | 'content' | 'taxonomy' | 'unknown';

const KNOWN_TAXONOMY_DEFINITIONS = new Set([
  'M.Tag', 'M.ContentType', 'M.AssetType', 'M.AssetUsage',
  'M.AssetPurpose', 'M.ContentStatus', 'M.DRM', 'M.Country',
  'M.Region', 'M.Language', 'M.Category', 'M.Classification',
]);

const SYSTEM_DEFINITIONS = new Set([
  'M.AssetCollection', 'M.Portals', 'M.Portal', 'M.UserGroup',
  'M.User', 'M.Comment', 'M.Annotation', 'M.FinalLifeCycleStatus',
  'M.ContentRepository', 'M.RenditionLink', 'M.PublicLink',
]);

const TAXONOMY_NAME_PATTERN =
  /(Type|Status|Tag|Category|Classification|Taxonomy|Brand|Region|Language|Country|Purpose|Usage|LifeCycle|DRM)/i;

export const DOMAIN_COLORS: Record<EntityDomain, string> = {
  asset: '#378ADD',
  product: '#1D9E75',
  content: '#D85A30',
  taxonomy: '#7F77DD',
  unknown: '#888780',
};

export const DOMAIN_LABELS: Record<EntityDomain, string> = {
  asset: 'Asset',
  product: 'Product',
  content: 'Content',
  taxonomy: 'Taxonomy',
  unknown: 'Other',
};

export const DOMAIN_ICONS: Record<EntityDomain, string> = {
  asset: '🖼',
  product: '📦',
  content: '📄',
  taxonomy: '🏷',
  unknown: '⬡',
};

export function getDefinitionName(entity: IEntity): string {
  if (entity.definitionName) return entity.definitionName;
  const raw = entity as any;
  const definition = raw?.definition as { name?: string } | undefined;
  return (
    definition?.name ??
    (raw?.entityDefinition as { name?: string } | undefined)?.name ??
    (raw?.entitydefinition as { name?: string } | undefined)?.name ??
    (raw?.systemProperties as { definitionName?: string } | undefined)?.definitionName ??
    ''
  );
}

function isProductDefinition(definition: string): boolean {
  if (definition.startsWith('PCM.')) return true;
  if (definition === 'M.Product') return true;
  if (/\.Product(\.|$)/i.test(definition)) return true;
  if (/\bProduct\b/i.test(definition) && !/ProductType|Taxonomy/i.test(definition)) {
    return true;
  }
  return false;
}

export function classifyDomain(definition: string): EntityDomain {
  if (!definition) return 'unknown';
  if (definition === 'M.Asset') return 'asset';
  if (isProductDefinition(definition)) return 'product';
  if (definition.startsWith('CMP.')) return 'content';
  if (SYSTEM_DEFINITIONS.has(definition)) return 'unknown';
  if (KNOWN_TAXONOMY_DEFINITIONS.has(definition)) return 'taxonomy';
  if (definition.startsWith('M.Taxonomy') || definition.startsWith('Taxonomy')) {
    return 'taxonomy';
  }
  if (definition.startsWith('M.') && TAXONOMY_NAME_PATTERN.test(definition)) {
    return 'taxonomy';
  }
  return 'unknown';
}

export function getEntityLabel(entity: IEntity): string {
  for (const prop of [
    'fileName', 'FileName', 'productName', 'ProductName',
    'name', 'Name', 'title', 'Title', 'label', 'Label', 'contentName',
  ]) {
    try {
      const val = entity.getPropertyValue(prop) as unknown;
      if (typeof val === 'string' && val.length > 0) return val;
    } catch { /* property not on this definition */ }
  }
  const raw = entity as any;
  const id =
    entity.id ??
    (raw.systemProperties as { id?: number } | undefined)?.id;
  return entity.identifier ?? (typeof id === 'number' ? `#${id}` : 'Unknown');
}
