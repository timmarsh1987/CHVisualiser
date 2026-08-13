import React from 'react';
import type { EvidenceRecord } from '../types';
import { C2PAEvidenceCard } from './C2PAEvidenceCard';
import { AIDetectionEvidenceCard } from './AIDetectionEvidenceCard';
import { ManualEvidenceCard } from './ManualEvidenceCard';

function statusClass(status: EvidenceRecord['verificationStatus']) {
  return `ch-ai-gov__badge ch-ai-gov__badge--${status}`;
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

export function EvidenceCard({ evidence }: { evidence: EvidenceRecord }) {
  return (
    <article className="ch-ai-gov__card">
      <div className="ch-ai-gov__card-header">
        <div>
          <h3 className="ch-ai-gov__card-title">{evidence.evidenceType}</h3>
          <p className="ch-ai-gov__card-meta">
            {evidence.evidenceSource} · {formatWhen(evidence.capturedAt)}
          </p>
        </div>
        <span className={statusClass(evidence.verificationStatus)}>
          {evidence.verificationStatus}
        </span>
      </div>

      {evidence.evidenceType === 'c2paManifest' && (
        <C2PAEvidenceCard evidence={evidence} mode="stored" />
      )}
      {evidence.evidenceType === 'aiDetectionResult' && (
        <AIDetectionEvidenceCard evidence={evidence} mode="stored" />
      )}
      {evidence.evidenceType === 'manualAttestation' && (
        <ManualEvidenceCard evidence={evidence} mode="stored" />
      )}
    </article>
  );
}
