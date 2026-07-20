import { logError, logResolved } from './debugLog';
import { parseMarketingBuilderOptions, TEMPLATE_RELATION_KEYS } from './options';
import { idsFromRelationResponse } from './relationResolve';
import type { MarketingBuilderOptions } from './types';

export async function resolveMarketingBuilderOptions(
  client: unknown,
  options: unknown,
  entity: unknown,
  config: unknown
): Promise<MarketingBuilderOptions> {
  let parsed = parseMarketingBuilderOptions(options, entity, config);

  if (parsed.templateId) {
    logResolved('templateId', `Resolved ${parsed.templateId} from config or entity relations`);
    return parsed;
  }

  const rawClient = client as {
    raw?: {
      getAsync?: (url: string) => Promise<{
        isSuccessStatusCode?: boolean;
        content?: unknown;
      }>;
    };
  } | undefined;

  const entityId = parsed.marketingAssetId;
  if (!rawClient?.raw?.getAsync || !entityId) {
    logError(
      'templateId',
      'No templateId in config and marketingAssetToTemplate could not be read from context.entity',
      'Set templateId in External component Configuration or link a template to this marketing asset.'
    );
    return parsed;
  }

  try {
    for (const relationName of TEMPLATE_RELATION_KEYS) {
      const relationResponse = await rawClient.raw.getAsync(
        `/api/entities/${entityId}/relations/${relationName}`
      );
      if (!relationResponse.isSuccessStatusCode || !relationResponse.content) {
        continue;
      }

      const relatedIds = idsFromRelationResponse(relationResponse.content);
      if (relatedIds.length > 0) {
        logResolved('templateId', `Resolved ${relatedIds[0]} from ${relationName} relation API`);
        return { ...parsed, templateId: String(relatedIds[0]) };
      }
    }
  } catch (error) {
    logError('templateId', error, 'Failed to resolve marketingAssetToTemplate via Content Hub API.');
  }

  logError(
    'templateId',
    'No templateId in config and no marketingAssetToTemplate relation on this asset',
    'Set templateId in External component Configuration or link a template to this marketing asset.'
  );
  return parsed;
}
