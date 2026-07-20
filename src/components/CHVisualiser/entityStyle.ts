import {
  classifyDomain,
  DOMAIN_COLORS,
  DOMAIN_LABELS,
  type EntityDomain,
} from '../../utils/entityDomain';
import type { EntityDefinition } from './types';

export function getEntityDomain(entity: EntityDefinition): EntityDomain {
  if (entity.is_taxonomy_item_definition) return 'taxonomy';
  return classifyDomain(entity.name);
}

export function getEntityColor(entity: EntityDefinition): string {
  if (entity.is_built_in && !entity.is_taxonomy_item_definition) {
    return '#28a745';
  }
  return DOMAIN_COLORS[getEntityDomain(entity)];
}

export function getEntityTypeLabel(entity: EntityDefinition): string {
  if (entity.is_taxonomy_item_definition) return 'Taxonomy';
  if (entity.is_built_in) return 'Built-in';
  return DOMAIN_LABELS[getEntityDomain(entity)];
}
