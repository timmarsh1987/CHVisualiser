import { discoverRelationNames } from './relationResolve';
import {
  TEMPLATE_ALLOWED_ASSET_RELATION_NAMES,
  TEMPLATE_ZONE_ALLOWED_ASSET_RELATION_NAMES,
  ZONE_VALUE_SELECTED_ASSET_RELATION_NAMES,
} from './options';

export function zoneAllowedAssetRelationNames(relations?: Record<string, unknown>): string[] {
  const discovered = discoverRelationNames(relations, /allowed.*asset|zone.*asset/i).filter(
    (name) => !/collection/i.test(name) && !/^template/i.test(name)
  );

  return [...new Set([...TEMPLATE_ZONE_ALLOWED_ASSET_RELATION_NAMES, ...discovered])];
}

export function templateAllowedAssetRelationNames(relations?: Record<string, unknown>): string[] {
  const discovered = discoverRelationNames(relations, /template.*asset|allowed.*asset/i).filter(
    (name) => !/collection/i.test(name) && !/zone/i.test(name)
  );

  return [...new Set([...TEMPLATE_ALLOWED_ASSET_RELATION_NAMES, ...discovered])];
}

export function zoneValueSelectedAssetRelationNames(relations?: Record<string, unknown>): string[] {
  const discovered = discoverRelationNames(relations, /selected.*asset|zonevalue.*asset|zone.*asset/i).filter(
    (name) => !/collection/i.test(name)
  );

  return [...new Set([...ZONE_VALUE_SELECTED_ASSET_RELATION_NAMES, ...discovered])];
}
