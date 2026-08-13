import React from 'react';
import type { Article50Category, GovernanceRecord } from '../types';

const CATEGORY_LABELS: Record<Article50Category, string> = {
  aiInteraction: 'AI interaction',
  syntheticContent: 'Synthetic content',
  emotionBiometric: 'Emotion / biometric',
  deepfakePublicInterest: 'Deepfake (public interest)',
  none: 'None',
};

const STATUS_LABELS: Record<GovernanceRecord['governanceStatus'], string> = {
  pending: 'Pending',
  compliant: 'Compliant',
  nonCompliant: 'Non-compliant',
  needsReview: 'Needs review',
  flagged: 'Flagged',
};

function formatWhen(iso: string | null) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

export function OverviewTab({ record }: { record: GovernanceRecord }) {
  return (
    <div className="ch-ai-gov__card">
      <div className="ch-ai-gov__card-header">
        <div>
          <h3 className="ch-ai-gov__card-title">Governance overview</h3>
          <p className="ch-ai-gov__card-meta">
            Last evaluated: {formatWhen(record.lastEvaluated)}
          </p>
        </div>
        <span className={`ch-ai-gov__badge ch-ai-gov__badge--${record.governanceStatus}`}>
          {STATUS_LABELS[record.governanceStatus]}
        </span>
      </div>

      <section className="ch-ai-gov__section">
        <h4 className="ch-ai-gov__section-title">Article 50 categories</h4>
        <div className="ch-ai-gov__section-body">
          {record.article50Categories.length === 0 ? (
            <p className="ch-ai-gov__muted">No categories assigned.</p>
          ) : (
            <div className="ch-ai-gov__tags">
              {record.article50Categories.map((cat) => (
                <span key={cat} className="ch-ai-gov__tag">
                  {CATEGORY_LABELS[cat] ?? cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="ch-ai-gov__section">
        <h4 className="ch-ai-gov__section-title">Disclosure</h4>
        <div className="ch-ai-gov__section-body">
          <p className="ch-ai-gov__card-meta" style={{ marginBottom: 6 }}>
            Required: {record.disclosureRequired ? 'Yes' : 'No'}
          </p>
          <p>{record.disclosureText?.trim() ? record.disclosureText : 'No disclosure text set.'}</p>
        </div>
      </section>

      <section className="ch-ai-gov__section">
        <h4 className="ch-ai-gov__section-title">Confidence</h4>
        <div className="ch-ai-gov__section-body">
          <p>
            {record.overallConfidence == null
              ? '—'
              : `${Math.round(record.overallConfidence * 100)}%`}
          </p>
        </div>
      </section>

      <section className="ch-ai-gov__section">
        <h4 className="ch-ai-gov__section-title">Evidence count</h4>
        <div className="ch-ai-gov__section-body">
          <p>{record.evidenceRecords.length}</p>
        </div>
      </section>
    </div>
  );
}
