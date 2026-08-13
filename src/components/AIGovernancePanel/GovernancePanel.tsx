/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { GovernancePanelInner } from './GovernancePanelInner';
import type { CHEntity, CHRawClient } from './types';
import './styles.css';

interface GovernancePanelProps {
  client?: CHRawClient | null;
  entity?: any;
  options?: Record<string, unknown>;
}

function resolveEntityId(entity: any): number | null {
  if (!entity) return null;
  if (typeof entity.id === 'number') return entity.id;
  if (typeof entity.systemProperties?.id === 'number') return entity.systemProperties.id;
  const n = Number(entity.id);
  return Number.isFinite(n) ? n : null;
}

function resolveAssetSource(entity: any): string | null {
  if (!entity) return null;

  const renditions = entity.renditions ?? entity.properties?.renditions;
  if (renditions && typeof renditions === 'object') {
    for (const key of ['preview', 'downloadOriginal', 'downloadPreview', 'thumbnail']) {
      const items = renditions[key];
      if (Array.isArray(items) && items[0]) {
        const href = items[0]?.href ?? items[0];
        if (typeof href === 'string' && href.trim()) return href.trim();
        if (href && typeof href === 'object' && typeof href.href === 'string') {
          return href.href.trim();
        }
      }
    }
  }

  const publicLink =
    entity.publicLink ??
    entity.properties?.publicLink ??
    entity.properties?.PublicLink;
  if (typeof publicLink === 'string' && publicLink.trim()) return publicLink.trim();

  return null;
}

function normalizeEntity(entity: any): CHEntity | null {
  const id = resolveEntityId(entity);
  if (id == null) return null;

  return {
    id,
    identifier:
      String(
        entity.identifier ??
          entity.properties?.FileName ??
          entity.properties?.Title?.Invariant ??
          entity.properties?.Title ??
          id
      ),
    getPropertyValue: entity.getPropertyValue?.bind(entity),
    properties: entity.properties,
    relations: entity.relations,
  };
}

function resolveCurrentUser(options?: Record<string, unknown>): string {
  const value = options?.currentUser ?? options?.username;
  return typeof value === 'string' && value.trim() ? value.trim() : 'system';
}

export default function GovernancePanel({
  client,
  entity,
  options,
}: GovernancePanelProps) {
  const normalized = useMemo(() => normalizeEntity(entity), [entity]);
  const assetSource = useMemo(() => resolveAssetSource(entity), [entity]);
  const currentUser = resolveCurrentUser(options);

  if (!normalized) {
    return (
      <div className="ch-ai-gov">
        <div className="ch-ai-gov__body">
          <p className="ch-ai-gov__error">
            No asset entity is available in the component context. Open this panel on an M.Asset
            detail page.
          </p>
        </div>
      </div>
    );
  }

  if (!client?.raw) {
    return (
      <div className="ch-ai-gov">
        <div className="ch-ai-gov__body">
          <p className="ch-ai-gov__error">
            Content Hub client is missing from the external component context. Governance
            persistence requires <code>context.client</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <GovernancePanelInner
      entity={normalized}
      client={client}
      currentUser={currentUser}
      assetSource={assetSource}
    />
  );
}
