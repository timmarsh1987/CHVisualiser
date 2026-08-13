/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import type {
  Article50Category,
  AuditEventType,
  CHEntity,
  CHRawClient,
  EvidenceRecord,
  EvidenceType,
  GovernanceRecord,
  GovernanceStatus,
  VerificationStatus,
} from '../types';

interface UseGovernanceRecordResult {
  record: GovernanceRecord | null;
  loading: boolean;
  error: string | null;
  addEvidence: (input: {
    evidenceType: EvidenceType;
    evidenceSource: string;
    confidenceScore: number | null;
    verificationStatus: VerificationStatus;
    evidenceData: unknown;
  }) => Promise<void>;
  updateGovernanceStatus: (status: GovernanceStatus, detail?: string) => Promise<void>;
  appendAuditEntry: (eventType: AuditEventType, eventDetail: string) => Promise<void>;
  refetch: () => Promise<void>;
}

function readProp(properties: Record<string, unknown> | undefined, key: string): unknown {
  if (!properties) return undefined;
  const direct = properties[key];
  if (direct !== undefined) return unwrap(direct);
  const match = Object.keys(properties).find((k) => k.toLowerCase() === key.toLowerCase());
  return match ? unwrap(properties[match]) : undefined;
}

function unwrap(value: unknown): unknown {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  for (const key of ['Invariant', 'invariant', '_value', 'value', 'en-US', 'en-us', 'en']) {
    if (key in record) return unwrap(record[key]);
  }
  return value;
}

function asString(value: unknown, fallback = ''): string {
  if (value == null) return fallback;
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return fallback;
}

function asNumberOrNull(value: unknown): number | null {
  if (value == null || value === '') return null;
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

function asBoolean(value: unknown, fallback = false): boolean {
  if (typeof value === 'boolean') return value;
  if (value === 'true' || value === 1) return true;
  if (value === 'false' || value === 0) return false;
  return fallback;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((v) => asString(v)).filter(Boolean);
}

function entityIdFromRaw(raw: any): number | null {
  const id = raw?.systemProperties?.id ?? raw?.id ?? raw?.entityId;
  return typeof id === 'number' && Number.isFinite(id) ? id : null;
}

function parseEvidenceData(raw: unknown): unknown {
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  }
  return raw ?? null;
}

function mapEvidenceRecord(raw: any): EvidenceRecord | null {
  const id = entityIdFromRaw(raw);
  if (id == null) return null;
  const props = (raw.properties ?? {}) as Record<string, unknown>;
  const evidenceType = asString(readProp(props, 'evidenceType'), 'manualAttestation') as EvidenceType;
  const verificationStatus = asString(
    readProp(props, 'verificationStatus'),
    'unverified'
  ) as VerificationStatus;

  return {
    id,
    evidenceType,
    evidenceSource: asString(readProp(props, 'evidenceSource')),
    capturedAt: asString(readProp(props, 'capturedAt'), new Date().toISOString()),
    confidenceScore: asNumberOrNull(readProp(props, 'confidenceScore')),
    verificationStatus,
    evidenceData: parseEvidenceData(readProp(props, 'evidenceData')),
  };
}

function mapToGovernanceRecord(raw: any, evidenceRecords: EvidenceRecord[] = []): GovernanceRecord {
  const props = (raw?.properties ?? {}) as Record<string, unknown>;
  const relations = (raw?.relations ?? {}) as Record<string, unknown>;
  const id = entityIdFromRaw(raw) ?? 0;

  const profileRel = relations.complianceProfile ?? relations.ComplianceProfile;
  let complianceProfileId: number | null = null;
  if (Array.isArray(profileRel) && profileRel[0] != null) {
    complianceProfileId = entityIdFromRaw(profileRel[0]) ?? (Number(profileRel[0]) || null);
  } else if (profileRel && typeof profileRel === 'object' && 'parent' in (profileRel as object)) {
    // relation link object — resolved separately when needed
    complianceProfileId = null;
  }

  return {
    id,
    governanceStatus: asString(readProp(props, 'governanceStatus'), 'pending') as GovernanceStatus,
    article50Categories: asStringArray(readProp(props, 'article50Categories')) as Article50Category[],
    disclosureRequired: asBoolean(readProp(props, 'disclosureRequired'), false),
    disclosureText: asString(readProp(props, 'disclosureText')),
    overallConfidence: asNumberOrNull(readProp(props, 'overallConfidence')),
    lastEvaluated: (() => {
      const v = readProp(props, 'lastEvaluated');
      return v == null ? null : asString(v);
    })(),
    evidenceRecords,
    complianceProfileId,
  };
}

function extractItems(content: unknown): any[] {
  if (Array.isArray(content)) return content;
  if (content && typeof content === 'object') {
    const record = content as Record<string, unknown>;
    if (Array.isArray(record.items)) return record.items;
    if (Array.isArray(record.content)) return record.content;
  }
  return [];
}

async function queryEntities(
  client: CHRawClient,
  query: string
): Promise<{ ok: boolean; status: number; items: any[] }> {
  if (!client.raw?.getAsync) {
    return { ok: false, status: 0, items: [] };
  }

  const url = `/api/entities/query?query=${encodeURIComponent(query)}`;
  const response = await client.raw.getAsync<unknown>(url);
  const status = response.statusCode ?? (response.isSuccessStatusCode ? 200 : 500);

  if (!response.isSuccessStatusCode) {
    return { ok: false, status, items: [] };
  }

  return { ok: true, status, items: extractItems(response.content) };
}

async function getEntity(client: CHRawClient, id: number): Promise<any | null> {
  if (!client.raw?.getAsync) return null;
  const response = await client.raw.getAsync<any>(`/api/entities/${id}`);
  if (!response.isSuccessStatusCode) return null;
  return response.content ?? null;
}

async function createEntity(
  client: CHRawClient,
  definitionName: string,
  properties: Record<string, unknown>
): Promise<{ ok: boolean; status: number; entity: any | null; error?: string }> {
  if (!client.raw?.postAsync) {
    return { ok: false, status: 0, entity: null, error: 'Content Hub client is not available' };
  }

  const response = await client.raw.postAsync<any>('/api/entities', {
    entitydefinition: {
      href: `/api/entitydefinitions/${definitionName}`,
    },
    properties,
  });

  const status = response.statusCode ?? (response.isSuccessStatusCode ? 201 : 500);
  if (!response.isSuccessStatusCode) {
    return {
      ok: false,
      status,
      entity: null,
      error: `Failed to create ${definitionName}: HTTP ${status}`,
    };
  }

  return { ok: true, status, entity: response.content ?? null };
}

async function putEntityProperties(
  client: CHRawClient,
  id: number,
  definitionName: string,
  properties: Record<string, unknown>
): Promise<boolean> {
  if (!client.raw?.putAsync) return false;

  const existing = await getEntity(client, id);
  const response = await client.raw.putAsync(`/api/entities/${id}`, {
    entitydefinition: {
      href:
        existing?.entitydefinition?.href ??
        existing?.entityDefinition?.href ??
        `/api/entitydefinitions/${definitionName}`,
    },
    properties: {
      ...(existing?.properties ?? {}),
      ...properties,
    },
  });

  return Boolean(response.isSuccessStatusCode);
}

async function linkParentRelation(
  client: CHRawClient,
  childId: number,
  relationName: string,
  parentId: number
): Promise<void> {
  if (!client.raw?.postAsync) return;

  const url = `/api/entities/${childId}/relations/${relationName}`;
  const body = { parent: { href: `/api/entities/${parentId}` } };

  const post = await client.raw.postAsync(url, body);
  if (post.isSuccessStatusCode) return;

  if (client.raw.putAsync) {
    await client.raw.putAsync(url, {
      ...body,
      self: { href: url },
    });
  }
}

async function loadEvidenceForRecord(
  client: CHRawClient,
  governanceRecordId: number
): Promise<EvidenceRecord[]> {
  // ASSUMPTION: evidenceRecords is a parent relation named governanceRecord on EvidenceRecord.
  const result = await queryEntities(
    client,
    `Definition.Name=='EPAM.EvidenceRecord' AND Parent('governanceRecord').Id==${governanceRecordId}`
  );

  if (!result.ok) {
    // Surface schema/API issues rather than silently returning empty.
    if (result.status === 404 || result.status === 400) {
      throw new Error(
        `Evidence query failed (HTTP ${result.status}). Confirm EPAM.EvidenceRecord and the governanceRecord relation exist in this CH instance.`
      );
    }
    return [];
  }

  return result.items.map(mapEvidenceRecord).filter((e): e is EvidenceRecord => e != null);
}

async function resolveComplianceProfileId(client: CHRawClient, raw: any): Promise<number | null> {
  const mapped = mapToGovernanceRecord(raw).complianceProfileId;
  if (mapped != null) return mapped;

  const relations = (raw?.relations ?? {}) as Record<string, unknown>;
  const rel = relations.complianceProfile ?? relations.ComplianceProfile;
  if (!rel || typeof rel !== 'object') return null;

  const href =
    typeof (rel as any).href === 'string'
      ? (rel as any).href
      : typeof (rel as any).parent?.href === 'string'
        ? (rel as any).parent.href
        : null;

  if (href && client.raw?.getAsync) {
    try {
      const response = await client.raw.getAsync<any>(href);
      if (response.isSuccessStatusCode && response.content) {
        const content = response.content;
        if (content.parent?.href) {
          const match = String(content.parent.href).match(/\/entities\/(\d+)/);
          if (match) return Number(match[1]);
        }
        if (Array.isArray(content.parents) && content.parents[0]?.href) {
          const match = String(content.parents[0].href).match(/\/entities\/(\d+)/);
          if (match) return Number(match[1]);
        }
        const id = entityIdFromRaw(content);
        if (id != null) return id;
      }
    } catch {
      // leave null
    }
  }

  return null;
}

export function useGovernanceRecord(
  entity: CHEntity | null,
  client: CHRawClient | null,
  currentUser = 'system'
): UseGovernanceRecordResult {
  const [record, setRecord] = useState<GovernanceRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrCreate = useCallback(async () => {
    if (!entity?.id) {
      setRecord(null);
      setLoading(false);
      setError('No asset entity in context.');
      return;
    }

    if (!client?.raw?.getAsync || !client?.raw?.postAsync) {
      setRecord(null);
      setLoading(false);
      setError('Content Hub client is not available on the component context.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Match this project's query convention (see CHMarketingBuilder/api.ts).
      // relatedContent is the parent relation from GovernanceRecord → M.Asset.
      const search = await queryEntities(
        client,
        `Definition.Name=='EPAM.GovernanceRecord' AND Parent('relatedContent').Id==${entity.id}`
      );

      if (!search.ok && (search.status === 404 || search.status === 400)) {
        throw new Error(
          `Governance record query failed (HTTP ${search.status}). ` +
            'Confirm EPAM.GovernanceRecord (and relatedContent → M.Asset) exists in this CH instance. ' +
            'Schema prerequisite — not a UI bug.'
        );
      }

      let raw: any | null = null;

      if (search.ok && search.items.length > 0) {
        const id = entityIdFromRaw(search.items[0]);
        raw = id != null ? (await getEntity(client, id)) ?? search.items[0] : search.items[0];
      } else {
        const created = await createEntity(client, 'EPAM.GovernanceRecord', {
          governanceStatus: 'pending',
          article50Categories: [],
          disclosureRequired: false,
          disclosureText: '',
        });

        if (!created.ok || !created.entity) {
          throw new Error(
            created.error ??
              `Failed to create governance record (HTTP ${created.status}). ` +
                'If this is a 404/schema validation error, EPAM.GovernanceRecord may not exist yet.'
          );
        }

        const newId = entityIdFromRaw(created.entity);
        if (newId == null) {
          throw new Error('Created governance record but response did not include an id.');
        }

        await linkParentRelation(client, newId, 'relatedContent', entity.id);
        raw = (await getEntity(client, newId)) ?? created.entity;
      }

      const id = entityIdFromRaw(raw);
      if (id == null) {
        throw new Error('Governance record is missing an id.');
      }

      const evidenceRecords = await loadEvidenceForRecord(client, id);
      const complianceProfileId = await resolveComplianceProfileId(client, raw);
      const mapped = mapToGovernanceRecord(raw, evidenceRecords);
      mapped.complianceProfileId = complianceProfileId;
      setRecord(mapped);
    } catch (err) {
      console.error('useGovernanceRecord error', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setRecord(null);
    } finally {
      setLoading(false);
    }
  }, [entity, client]);

  useEffect(() => {
    void fetchOrCreate();
  }, [fetchOrCreate]);

  const appendAuditEntry = useCallback(
    async (eventType: AuditEventType, eventDetail: string) => {
      if (!record || !client?.raw?.postAsync) return;

      const created = await createEntity(client, 'EPAM.GovernanceAuditEntry', {
        eventType,
        eventDetail,
        occurredAt: new Date().toISOString(),
        // ASSUMPTION: no project-wide current-user helper exists yet; callers pass currentUser.
        triggeredBy: currentUser || 'system',
      });

      if (!created.ok || !created.entity) {
        console.error(
          'appendAuditEntry failed',
          created.error ?? `HTTP ${created.status}`
        );
        return;
      }

      const auditId = entityIdFromRaw(created.entity);
      if (auditId != null) {
        await linkParentRelation(client, auditId, 'governanceRecord', record.id);
      }
    },
    [record, client, currentUser]
  );

  const addEvidence = useCallback(
    async (input: {
      evidenceType: EvidenceType;
      evidenceSource: string;
      confidenceScore: number | null;
      verificationStatus: VerificationStatus;
      evidenceData: unknown;
    }) => {
      if (!record || !client?.raw?.postAsync) return;

      // JSON member type expects an object; do not double-stringify.
      const created = await createEntity(client, 'EPAM.EvidenceRecord', {
        evidenceType: input.evidenceType,
        evidenceSource: input.evidenceSource,
        capturedAt: new Date().toISOString(),
        confidenceScore: input.confidenceScore,
        verificationStatus: input.verificationStatus,
        evidenceData: input.evidenceData,
      });

      if (!created.ok || !created.entity) {
        throw new Error(
          created.error ??
            `Failed to add evidence (HTTP ${created.status}). ` +
              'Confirm EPAM.EvidenceRecord exists and property types match the schema.'
        );
      }

      const evidenceId = entityIdFromRaw(created.entity);
      if (evidenceId != null) {
        await linkParentRelation(client, evidenceId, 'governanceRecord', record.id);
      }

      await appendAuditEntry(
        'evidenceAdded',
        `Added ${input.evidenceType} evidence from ${input.evidenceSource} (${input.verificationStatus})`
      );

      // Flag lifecycle: invalid evidence can move the record to flagged from any state.
      if (input.verificationStatus === 'invalid' && record.governanceStatus !== 'flagged') {
        await putEntityProperties(client, record.id, 'EPAM.GovernanceRecord', {
          governanceStatus: 'flagged',
        });
        await appendAuditEntry(
          'statusChanged',
          `Status changed from ${record.governanceStatus} to flagged due to invalid evidence`
        );
      }

      await fetchOrCreate();
    },
    [record, client, appendAuditEntry, fetchOrCreate]
  );

  const updateGovernanceStatus = useCallback(
    async (status: GovernanceStatus, detail?: string) => {
      if (!record || !client) return;
      const previous = record.governanceStatus;
      if (previous === status) return;

      const ok = await putEntityProperties(client, record.id, 'EPAM.GovernanceRecord', {
        governanceStatus: status,
        lastEvaluated: new Date().toISOString(),
      });

      if (!ok) {
        throw new Error(`Failed to update governanceStatus to ${status}`);
      }

      await appendAuditEntry(
        'statusChanged',
        detail ?? `Status changed from ${previous} to ${status}`
      );
      await fetchOrCreate();
    },
    [record, client, appendAuditEntry, fetchOrCreate]
  );

  return {
    record,
    loading,
    error,
    addEvidence,
    updateGovernanceStatus,
    appendAuditEntry,
    refetch: fetchOrCreate,
  };
}
