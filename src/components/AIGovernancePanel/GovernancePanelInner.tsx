import React, { useMemo, useState } from 'react';
import { OverviewTab } from './tabs/OverviewTab';
import { EvidenceTab } from './tabs/EvidenceTab';
import { ComplianceTab } from './tabs/ComplianceTab';
import { AuditTrailTab } from './tabs/AuditTrailTab';
import { useGovernanceRecord } from './hooks/useGovernanceRecord';
import type { CHEntity, CHRawClient } from './types';

type TabId = 'overview' | 'evidence' | 'compliance' | 'audit';

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'audit', label: 'Audit trail' },
];

interface GovernancePanelInnerProps {
  entity: CHEntity;
  client: CHRawClient | null;
  currentUser?: string;
  assetSource?: string | Blob | null;
}

export function GovernancePanelInner({
  entity,
  client,
  currentUser,
  assetSource,
}: GovernancePanelInnerProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const { record, loading, error, addEvidence, refetch } = useGovernanceRecord(
    entity,
    client,
    currentUser
  );

  const subtitle = useMemo(() => {
    if (!record) return entity.identifier || `Asset #${entity.id}`;
    return `${entity.identifier || `Asset #${entity.id}`} · record #${record.id}`;
  }, [entity, record]);

  return (
    <div className="ch-ai-gov">
      <header className="ch-ai-gov__header">
        <div>
          <p className="ch-ai-gov__eyebrow">AI Act · Article 50</p>
          <h2 className="ch-ai-gov__title">AI Governance</h2>
          <p className="ch-ai-gov__muted">{subtitle}</p>
        </div>

        <nav className="ch-ai-gov__tabs" aria-label="Governance tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`ch-ai-gov__tab${activeTab === tab.id ? ' ch-ai-gov__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="ch-ai-gov__body">
        {loading && <p className="ch-ai-gov__muted">Loading governance record…</p>}

        {!loading && error && (
          <>
            <p className="ch-ai-gov__error">{error}</p>
            <button type="button" className="ch-ai-gov__secondary-button" onClick={() => void refetch()}>
              Retry
            </button>
          </>
        )}

        {!loading && !error && record && (
          <>
            {activeTab === 'overview' && <OverviewTab record={record} />}
            {activeTab === 'evidence' && (
              <EvidenceTab
                record={record}
                addEvidence={addEvidence}
                assetSource={assetSource}
              />
            )}
            {activeTab === 'compliance' && (
              <ComplianceTab record={record} client={client} />
            )}
            {activeTab === 'audit' && <AuditTrailTab record={record} client={client} />}
          </>
        )}
      </div>
    </div>
  );
}
