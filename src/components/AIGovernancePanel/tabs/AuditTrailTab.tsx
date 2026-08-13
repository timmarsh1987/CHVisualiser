import React, { useEffect, useState } from 'react';
import type { AuditEntry, AuditEventType, CHRawClient, GovernanceRecord } from '../types';

interface AuditTrailTabProps {
  record: GovernanceRecord;
  client: CHRawClient | null;
}

function unwrap(value: unknown): unknown {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  for (const key of ['Invariant', 'invariant', '_value', 'value']) {
    if (key in record) return unwrap(record[key]);
  }
  return value;
}

function readProp(properties: Record<string, unknown> | undefined, key: string): unknown {
  if (!properties) return undefined;
  if (key in properties) return unwrap(properties[key]);
  const match = Object.keys(properties).find((k) => k.toLowerCase() === key.toLowerCase());
  return match ? unwrap(properties[match]) : undefined;
}

function asString(value: unknown, fallback = ''): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return fallback;
}

function entityId(raw: Record<string, unknown>): number | null {
  const system = raw.systemProperties as Record<string, unknown> | undefined;
  const id = system?.id ?? raw.id;
  return typeof id === 'number' && Number.isFinite(id) ? id : null;
}

function mapAuditEntry(raw: Record<string, unknown>): AuditEntry | null {
  const id = entityId(raw);
  if (id == null) return null;
  const props = (raw.properties ?? {}) as Record<string, unknown>;
  return {
    id,
    eventType: asString(readProp(props, 'eventType'), 'evidenceAdded') as AuditEventType,
    eventDetail: asString(readProp(props, 'eventDetail')),
    occurredAt: asString(readProp(props, 'occurredAt'), new Date().toISOString()),
    triggeredBy: asString(readProp(props, 'triggeredBy'), 'system'),
  };
}

function extractItems(content: unknown): Record<string, unknown>[] {
  if (Array.isArray(content)) return content as Record<string, unknown>[];
  if (content && typeof content === 'object') {
    const record = content as Record<string, unknown>;
    if (Array.isArray(record.items)) return record.items as Record<string, unknown>[];
  }
  return [];
}

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

export function AuditTrailTab({ record, client }: AuditTrailTabProps) {
  const [entries, setEntries] = useState<AuditEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!client?.raw?.getAsync) {
        setError('Content Hub client is not available to load audit entries.');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const query = encodeURIComponent(
          `Definition.Name=='EPAM.GovernanceAuditEntry' AND Parent('governanceRecord').Id==${record.id}`
        );
        const response = await client.raw.getAsync<unknown>(`/api/entities/query?query=${query}`);

        if (cancelled) return;

        if (!response.isSuccessStatusCode) {
          const status = response.statusCode ?? 'unknown';
          setError(
            `Audit trail query failed (HTTP ${status}). ` +
              'Confirm EPAM.GovernanceAuditEntry and the governanceRecord relation exist.'
          );
          setEntries([]);
          return;
        }

        const mapped = extractItems(response.content)
          .map(mapAuditEntry)
          .filter((e): e is AuditEntry => e != null)
          .sort((a, b) => Date.parse(b.occurredAt) - Date.parse(a.occurredAt));

        setEntries(mapped);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load audit trail');
          setEntries([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [record.id, record.evidenceRecords.length, record.governanceStatus, client]);

  if (loading) {
    return <p className="ch-ai-gov__muted">Loading audit trail…</p>;
  }

  if (error) {
    return <p className="ch-ai-gov__error">{error}</p>;
  }

  if (entries.length === 0) {
    return <p className="ch-ai-gov__muted">No audit entries yet.</p>;
  }

  return (
    <ul className="ch-ai-gov__timeline">
      {entries.map((entry) => (
        <li key={entry.id} className="ch-ai-gov__timeline-item">
          <p className="ch-ai-gov__timeline-type">{entry.eventType}</p>
          <p className="ch-ai-gov__timeline-detail">{entry.eventDetail}</p>
          <p className="ch-ai-gov__timeline-meta">
            {formatWhen(entry.occurredAt)} · {entry.triggeredBy}
          </p>
        </li>
      ))}
    </ul>
  );
}
