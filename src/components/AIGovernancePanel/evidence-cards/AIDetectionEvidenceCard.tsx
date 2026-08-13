import React from 'react';
import type { AIDetectionEvidenceData, EvidenceRecord } from '../types';
import type { AIDetectionResult } from '../services/aiDetectionService';
import { Section } from './Section';

interface AIDetectionEvidenceCardProps {
  evidence?: EvidenceRecord;
  mode: 'stored' | 'collector' | 'result';
  result?: AIDetectionResult | null;
  loading?: boolean;
  error?: string | null;
  onRun?: () => void;
}

export function AIDetectionEvidenceCard({
  evidence,
  mode,
  result,
  loading,
  error,
  onRun,
}: AIDetectionEvidenceCardProps) {
  if (mode === 'stored' && evidence) {
    const data = (evidence.evidenceData ?? {}) as AIDetectionEvidenceData;
    return (
      <>
        <Section title="Model">
          <p>{data.modelUsed || '—'}</p>
        </Section>
        <Section title="Confidence">
          <p>
            {typeof data.confidenceScore === 'number'
              ? `${Math.round(data.confidenceScore * 100)}%`
              : '—'}
          </p>
        </Section>
        <Section title="Labels">
          <p>{(data.labels ?? []).join(', ') || '—'}</p>
        </Section>
      </>
    );
  }

  if (mode === 'collector') {
    return (
      <article className="ch-ai-gov__card">
        <div className="ch-ai-gov__card-header">
          <div>
            <h3 className="ch-ai-gov__card-title">AI detection</h3>
            <p className="ch-ai-gov__card-meta">
              Stub detector — replace with CodeMie when endpoint/auth is confirmed.
            </p>
          </div>
        </div>
        <Section title="Action">
          <button
            type="button"
            className="ch-ai-gov__primary-button"
            onClick={onRun}
            disabled={loading}
          >
            {loading ? 'Running detection…' : 'Run AI detection'}
          </button>
        </Section>
        {error ? <p className="ch-ai-gov__error">{error}</p> : null}
      </article>
    );
  }

  // mode === 'result'
  if (!result) {
    return <p className="ch-ai-gov__muted">No detection result yet.</p>;
  }

  return (
    <article className="ch-ai-gov__card">
      <div className="ch-ai-gov__card-header">
        <h3 className="ch-ai-gov__card-title">Latest detection result</h3>
      </div>
      <Section title="Model">
        <p>{result.modelUsed}</p>
      </Section>
      <Section title="Confidence">
        <p>{`${Math.round(result.confidenceScore * 100)}%`}</p>
      </Section>
      <Section title="Labels">
        <p>{result.labels.join(', ') || '—'}</p>
      </Section>
    </article>
  );
}
