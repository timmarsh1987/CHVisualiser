import React, { useState } from 'react';
import type {
  EvidenceRecord,
  ManualAttestationEvidenceData,
  VerificationStatus,
} from '../types';
import { Section } from './Section';

interface ManualEvidenceCardProps {
  evidence?: EvidenceRecord;
  mode: 'stored' | 'collector';
  onSubmit?: (input: {
    evidenceSource: string;
    confidenceScore: null;
    verificationStatus: VerificationStatus;
    evidenceData: ManualAttestationEvidenceData;
  }) => Promise<void>;
}

export function ManualEvidenceCard({ evidence, mode, onSubmit }: ManualEvidenceCardProps) {
  const [reviewerName, setReviewerName] = useState('');
  const [note, setNote] = useState('');
  const [attestationConfirmed, setAttestationConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  if (mode === 'stored' && evidence) {
    const data = (evidence.evidenceData ?? {}) as ManualAttestationEvidenceData;
    return (
      <>
        <Section title="Reviewer">
          <p>{data.reviewerName || '—'}</p>
        </Section>
        <Section title="Note">
          <p>{data.note || '—'}</p>
        </Section>
        <Section title="Attestation">
          <p>{data.attestationConfirmed ? 'Confirmed' : 'Not confirmed'}</p>
        </Section>
      </>
    );
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!onSubmit) return;
    if (!reviewerName.trim()) {
      setFormError('Reviewer name is required.');
      return;
    }

    setSubmitting(true);
    setFormError(null);
    try {
      await onSubmit({
        evidenceSource: 'manual',
        confidenceScore: null,
        verificationStatus: attestationConfirmed ? 'verified' : 'unverified',
        evidenceData: {
          reviewerName: reviewerName.trim(),
          note: note.trim(),
          attestationConfirmed,
        },
      });
      setReviewerName('');
      setNote('');
      setAttestationConfirmed(false);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Failed to save attestation');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <article className="ch-ai-gov__card">
      <div className="ch-ai-gov__card-header">
        <div>
          <h3 className="ch-ai-gov__card-title">Manual attestation</h3>
          <p className="ch-ai-gov__card-meta">Record a human review of this asset.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Section title="Reviewer details">
          <div className="ch-ai-gov__field">
            <label htmlFor="gov-reviewer-name">Reviewer name</label>
            <input
              id="gov-reviewer-name"
              type="text"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="Full name"
            />
          </div>
          <div className="ch-ai-gov__field" style={{ marginTop: 8 }}>
            <label htmlFor="gov-attestation-note">Note</label>
            <textarea
              id="gov-attestation-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Review notes"
            />
          </div>
        </Section>

        <Section title="Confirmation">
          <label className="ch-ai-gov__checkbox">
            <input
              type="checkbox"
              checked={attestationConfirmed}
              onChange={(e) => setAttestationConfirmed(e.target.checked)}
            />
            <span>I attest that I have reviewed this content for AI governance requirements.</span>
          </label>
        </Section>

        {formError ? <p className="ch-ai-gov__error">{formError}</p> : null}

        <button type="submit" className="ch-ai-gov__primary-button" disabled={submitting}>
          {submitting ? 'Saving…' : 'Submit attestation'}
        </button>
      </form>
    </article>
  );
}
