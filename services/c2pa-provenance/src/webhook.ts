import { rm } from 'node:fs/promises';
import { getConfig } from './config.js';
import {
  downloadOriginalWithRetry,
  getAsset,
  updateAssetProvenance,
  wasRecentlyChecked,
} from './contentHub.js';
import { extractProvenance } from './provenance.js';
import type { ProvenanceResult } from './types.js';

interface LoggerContext {
  error(...values: unknown[]): unknown;
}

function stringAt(record: Record<string, unknown>, names: string[]): string | null {
  for (const name of names) {
    const value = record[name];
    if ((typeof value === 'string' || typeof value === 'number') && String(value).trim()) {
      return String(value).trim();
    }
  }
  return null;
}

export function parseWebhookPayload(payload: unknown): {
  assetId: string;
  eventId: string | null;
} {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('Webhook body must be a JSON object.');
  }
  const root = payload as Record<string, unknown>;
  const containers = [
    root,
    root.saveEntityMessage,
    root.SaveEntityMessage,
    root.entity,
    root.Entity,
    root.target,
    root.Target,
    root.data,
  ].filter((value): value is Record<string, unknown> =>
    Boolean(value && typeof value === 'object' && !Array.isArray(value))
  );

  let assetId: string | null = null;
  let eventId: string | null = null;
  for (const container of containers) {
    assetId ??= stringAt(container, [
      'assetId',
      'AssetId',
      'entityId',
      'EntityId',
      'targetId',
      'TargetId',
      'id',
      'Id',
    ]);
    eventId ??= stringAt(container, [
      'eventId',
      'EventId',
      'deliveryId',
      'DeliveryId',
      'messageId',
      'MessageId',
    ]);
  }
  if (!assetId) throw new Error('Webhook payload does not contain an asset/entity ID.');
  return { assetId, eventId };
}

export async function processWebhook(
  payload: unknown,
  context: LoggerContext
): Promise<{ status: 'success' | 'failed' | 'skipped'; assetId: string; message?: string }> {
  const { assetId, eventId } = parseWebhookPayload(payload);
  const config = getConfig();
  const checkedAt = new Date();
  let temporaryPath: string | undefined;

  try {
    const existingAsset = await getAsset(config.contentHub, assetId);
    if (wasRecentlyChecked(existingAsset, checkedAt, config.dedupWindowSeconds)) {
      return { status: 'skipped', assetId };
    }

    const downloaded = await downloadOriginalWithRetry(config, assetId);
    temporaryPath = downloaded.path;
    let result: ProvenanceResult;
    try {
      result = await extractProvenance(downloaded.path, downloaded.mimeType);
    } catch (error) {
      throw new Error(
        `C2PA could not read asset ${assetId} as ${
          downloaded.mimeType ?? 'an unknown image type'
        }: ${error instanceof Error ? error.message : String(error)}`
      );
    }

    await updateAssetProvenance(
      config.contentHub,
      downloaded.asset,
      result,
      checkedAt,
      eventId,
      config.summaryHistoryLimit
    );
    return { status: 'success', assetId };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    context.error(`C2PA processing failed for asset ${assetId}.`, error);
    return { status: 'failed', assetId, message };
  } finally {
    if (temporaryPath) await rm(temporaryPath, { force: true });
  }
}
