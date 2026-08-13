import React, { useEffect, useState } from 'react';
import { useComplianceEvaluation } from '../hooks/useComplianceEvaluation';
import type {
  Article50Category,
  CHRawClient,
  ComplianceProfile,
  EvidenceType,
  GovernanceRecord,
} from '../types';

const EVIDENCE_LABELS: Record<EvidenceType, string> = {
  c2paManifest: 'C2PA manifest',
  aiDetectionResult: 'AI detection result',
  manualAttestation: 'Manual attestation',
};

interface ComplianceTabProps {
  record: GovernanceRecord;
  client: CHRawClient | null;
}

function readProp(properties: Record<string, unknown> | undefined, key: string): unknown {
  if (!properties) return undefined;
  if (key in properties) return unwrap(properties[key]);
  const match = Object.keys(properties).find((k) => k.toLowerCase() === key.toLowerCase());
  return match ? unwrap(properties[match]) : undefined;
}

function unwrap(value: unknown): unknown {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  for (const key of ['Invariant', 'invariant', '_value', 'value']) {
    if (key in record) return unwrap(record[key]);
  }
  return value;
}

function asString(value: unknown, fallback = ''): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return fallback;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((v) => asString(v)).filter(Boolean);
}

function mapProfile(raw: Record<string, unknown>): ComplianceProfile | null {
  const system = raw.systemProperties as Record<string, unknown> | undefined;
  const id = (system?.id ?? raw.id) as number | undefined;
  if (typeof id !== 'number') return null;
  const props = (raw.properties ?? {}) as Record<string, unknown>;

  return {
    id,
    profileName: asString(readProp(props, 'profileName'), `Profile ${id}`),
    applicableArticle50Categories: asStringArray(
      readProp(props, 'applicableArticle50Categories')
    ) as Article50Category[],
    requiredEvidenceTypes: asStringArray(
      readProp(props, 'requiredEvidenceTypes')
    ) as EvidenceType[],
    disclosureTemplate: asString(readProp(props, 'disclosureTemplate')),
  };
}

export function ComplianceTab({ record, client }: ComplianceTabProps) {
  const [profile, setProfile] = useState<ComplianceProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!record.complianceProfileId) {
        setProfile(null);
        setError(null);
        return;
      }
      if (!client?.raw?.getAsync) {
        setError('Content Hub client is not available to load the compliance profile.');
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await client.raw.getAsync<Record<string, unknown>>(
          `/api/entities/${record.complianceProfileId}`
        );
        if (cancelled) return;

        if (!response.isSuccessStatusCode || !response.content) {
          const status = response.statusCode ?? 'unknown';
          setError(
            `Failed to load EPAM.ComplianceProfile ${record.complianceProfileId} (HTTP ${status}). ` +
              'Confirm the entity definition exists and the relation is set.'
          );
          setProfile(null);
          return;
        }

        setProfile(mapProfile(response.content));
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load compliance profile');
          setProfile(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [record.complianceProfileId, client]);

  const { satisfied, missingTypes } = useComplianceEvaluation(record.evidenceRecords, profile);
  const presentTypes = new Set(record.evidenceRecords.map((e) => e.evidenceType));

  if (!record.complianceProfileId) {
    return (
      <div className="ch-ai-gov__card">
        <h3 className="ch-ai-gov__card-title">Compliance checklist</h3>
        <p className="ch-ai-gov__muted">
          No compliance profile is assigned to this governance record. Assign an
          EPAM.ComplianceProfile via the complianceProfile relation to enable the checklist.
        </p>
      </div>
    );
  }

  if (loading) {
    return <p className="ch-ai-gov__muted">Loading compliance profile…</p>;
  }

  if (error) {
    return <p className="ch-ai-gov__error">{error}</p>;
  }

  if (!profile) {
    return <p className="ch-ai-gov__muted">Compliance profile could not be mapped.</p>;
  }

  const required = profile.requiredEvidenceTypes;

  return (
    <div className="ch-ai-gov__card">
      <div className="ch-ai-gov__card-header">
        <div>
          <h3 className="ch-ai-gov__card-title">{profile.profileName}</h3>
          <p className="ch-ai-gov__card-meta">Presence checklist only — no confidence scoring.</p>
        </div>
        <span
          className={`ch-ai-gov__badge ${
            satisfied ? 'ch-ai-gov__badge--compliant' : 'ch-ai-gov__badge--needsReview'
          }`}
        >
          {satisfied ? 'Satisfied' : 'Incomplete'}
        </span>
      </div>

      {required.length === 0 ? (
        <p className="ch-ai-gov__muted">This profile has no required evidence types.</p>
      ) : (
        <ul className="ch-ai-gov__checklist">
          {required.map((type) => {
            const ok = presentTypes.has(type);
            return (
              <li
                key={type}
                className={`ch-ai-gov__checklist-item ${
                  ok ? 'ch-ai-gov__checklist-item--ok' : 'ch-ai-gov__checklist-item--missing'
                }`}
              >
                <span aria-hidden="true">{ok ? '✓' : '○'}</span>
                <span>{EVIDENCE_LABELS[type] ?? type}</span>
              </li>
            );
          })}
        </ul>
      )}

      {!satisfied && missingTypes.length > 0 ? (
        <p className="ch-ai-gov__muted">
          Missing: {missingTypes.map((t) => EVIDENCE_LABELS[t] ?? t).join(', ')}
        </p>
      ) : null}

      {profile.disclosureTemplate ? (
        <section className="ch-ai-gov__section">
          <h4 className="ch-ai-gov__section-title">Disclosure template</h4>
          <div className="ch-ai-gov__section-body">
            <p>{profile.disclosureTemplate}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
}
