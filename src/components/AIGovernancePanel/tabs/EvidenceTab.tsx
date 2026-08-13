import React, { useCallback, useState } from 'react';
import { EvidenceCard } from '../evidence-cards/EvidenceCard';
import { C2PAEvidenceCard } from '../evidence-cards/C2PAEvidenceCard';
import { AIDetectionEvidenceCard } from '../evidence-cards/AIDetectionEvidenceCard';
import { ManualEvidenceCard } from '../evidence-cards/ManualEvidenceCard';
import { useAIDetection } from '../hooks/useAIDetection';
import type {
  C2PAEvidenceData,
  EvidenceType,
  GovernanceRecord,
  ManualAttestationEvidenceData,
  VerificationStatus,
} from '../types';

interface EvidenceTabProps {
  record: GovernanceRecord;
  addEvidence: (input: {
    evidenceType: EvidenceType;
    evidenceSource: string;
    confidenceScore: number | null;
    verificationStatus: VerificationStatus;
    evidenceData: unknown;
  }) => Promise<void>;
  /** Optional asset file/blob or preview URL for collectors. */
  assetSource?: string | Blob | null;
}

export function EvidenceTab({ record, addEvidence, assetSource }: EvidenceTabProps) {
  const { result, loading, error, runDetection } = useAIDetection();
  const [collectorError, setCollectorError] = useState<string | null>(null);
  const hasC2PA = record.evidenceRecords.some((e) => e.evidenceType === 'c2paManifest');

  const persistC2PA = useCallback(
    async (input: {
      evidenceSource: string;
      confidenceScore: number | null;
      verificationStatus: VerificationStatus;
      evidenceData: C2PAEvidenceData;
    }) => {
      if (hasC2PA) return;
      try {
        await addEvidence({
          evidenceType: 'c2paManifest',
          ...input,
        });
      } catch (err) {
        setCollectorError(err instanceof Error ? err.message : 'Failed to save C2PA evidence');
      }
    },
    [addEvidence, hasC2PA]
  );

  const handleRunDetection = async () => {
    setCollectorError(null);
    let blob: Blob;
    try {
      if (assetSource instanceof Blob) {
        blob = assetSource;
      } else if (typeof assetSource === 'string' && assetSource.trim()) {
        const response = await fetch(assetSource);
        if (!response.ok) {
          throw new Error(`Could not fetch asset for detection (HTTP ${response.status})`);
        }
        blob = await response.blob();
      } else {
        // Stub path: detection service ignores the blob today.
        blob = new Blob(['stub-asset'], { type: 'application/octet-stream' });
      }
    } catch (err) {
      setCollectorError(err instanceof Error ? err.message : 'Failed to load asset blob');
      return;
    }

    const detection = await runDetection(blob);
    if (!detection) return;

    try {
      await addEvidence({
        evidenceType: 'aiDetectionResult',
        evidenceSource: detection.modelUsed,
        confidenceScore: detection.confidenceScore,
        verificationStatus: 'unverified',
        evidenceData: {
          modelUsed: detection.modelUsed,
          confidenceScore: detection.confidenceScore,
          labels: detection.labels,
          rawResponse: detection.rawResponse,
        },
      });
    } catch (err) {
      setCollectorError(err instanceof Error ? err.message : 'Failed to save AI detection evidence');
    }
  };

  const handleManualSubmit = async (input: {
    evidenceSource: string;
    confidenceScore: null;
    verificationStatus: VerificationStatus;
    evidenceData: ManualAttestationEvidenceData;
  }) => {
    setCollectorError(null);
    await addEvidence({
      evidenceType: 'manualAttestation',
      ...input,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {collectorError ? <p className="ch-ai-gov__error">{collectorError}</p> : null}

      <section>
        <h3 className="ch-ai-gov__card-title" style={{ marginBottom: 8 }}>
          Collected evidence
        </h3>
        {record.evidenceRecords.length === 0 ? (
          <p className="ch-ai-gov__muted">No evidence records yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {record.evidenceRecords.map((evidence) => (
              <EvidenceCard key={evidence.id} evidence={evidence} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h3 className="ch-ai-gov__card-title" style={{ marginBottom: 8 }}>
          Collectors
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <article className="ch-ai-gov__card">
            <div className="ch-ai-gov__card-header">
              <div>
                <h3 className="ch-ai-gov__card-title">C2PA Content Credentials</h3>
                <p className="ch-ai-gov__card-meta">
                  Runs automatically on mount. {hasC2PA ? 'Already saved on this record.' : ''}
                </p>
              </div>
            </div>
            {!hasC2PA && (
              <C2PAEvidenceCard
                mode="collector"
                source={assetSource ?? null}
                onCaptured={persistC2PA}
              />
            )}
          </article>

          <AIDetectionEvidenceCard
            mode="collector"
            loading={loading}
            error={error}
            onRun={() => {
              void handleRunDetection();
            }}
          />
          {result ? <AIDetectionEvidenceCard mode="result" result={result} /> : null}

          <ManualEvidenceCard mode="collector" onSubmit={handleManualSubmit} />
        </div>
      </section>
    </div>
  );
}
