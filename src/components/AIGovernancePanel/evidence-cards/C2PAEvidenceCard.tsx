import React, { useEffect, useRef } from 'react';
import { CredentialsPanel } from '../../C2PACredentialsWidget/CredentialsPanel';
import { useC2PAManifest } from '../../C2PACredentialsWidget/useC2PAManifest';
import type { C2PAEvidenceData, EvidenceRecord, VerificationStatus } from '../types';
import { Section } from './Section';

interface C2PAEvidenceCardProps {
  evidence?: EvidenceRecord;
  mode: 'stored' | 'collector';
  source?: string | Blob | null;
  onCaptured?: (input: {
    evidenceSource: string;
    confidenceScore: number | null;
    verificationStatus: VerificationStatus;
    evidenceData: C2PAEvidenceData;
  }) => Promise<void>;
}

export function C2PAEvidenceCard({
  evidence,
  mode,
  source,
  onCaptured,
}: C2PAEvidenceCardProps) {
  const { manifest, loading, error, hasCredentials } = useC2PAManifest(
    mode === 'collector' ? source ?? null : null
  );
  const savedRef = useRef(false);

  useEffect(() => {
    if (mode !== 'collector' || !onCaptured || loading || savedRef.current) return;
    if (!manifest) return;

    savedRef.current = true;
    const data: C2PAEvidenceData = {
      hasManifest: Boolean(manifest.hasManifest),
      claimGenerator: manifest.claimGenerator,
      ingredients: manifest.ingredients,
      raw: manifest.raw ?? manifest,
    };

    void onCaptured({
      evidenceSource: 'c2pa',
      confidenceScore: null,
      verificationStatus: hasCredentials ? 'verified' : 'notApplicable',
      evidenceData: data,
    });
  }, [mode, onCaptured, loading, manifest, hasCredentials]);

  if (mode === 'stored' && evidence) {
    const data = (evidence.evidenceData ?? {}) as C2PAEvidenceData;
    return (
      <>
        <Section title="Manifest">
          <p>{data.hasManifest ? 'Present' : 'Not present'}</p>
        </Section>
        {data.claimGenerator ? (
          <Section title="Claim generator">
            <p>{data.claimGenerator}</p>
          </Section>
        ) : null}
      </>
    );
  }

  // Embedded: strip outer border/header — EvidenceTab owns the card chrome.
  return (
    <CredentialsPanel
      embedded
      manifest={manifest}
      loading={loading}
      error={error}
    />
  );
}
