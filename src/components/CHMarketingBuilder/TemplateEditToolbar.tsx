import React from 'react';

export type TemplateEditTab = 'asset' | 'template';

interface TemplateEditToolbarProps {
  activeTab: TemplateEditTab;
  zoneCount: number;
  templateName?: string;
  onTabChange: (tab: TemplateEditTab) => void;
  showAssetTab?: boolean;
}

export default function TemplateEditToolbar({
  activeTab,
  zoneCount,
  templateName,
  onTabChange,
  showAssetTab = true,
}: TemplateEditToolbarProps) {
  return (
    <div className="marketing-builder-toolbar marketing-builder-tab-bar">
      <div className="marketing-builder-tabs" role="tablist" aria-label="Marketing builder mode">
        {showAssetTab && (
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'asset'}
            className={`marketing-builder-tab${activeTab === 'asset' ? ' marketing-builder-tab-active' : ''}`}
            onClick={() => onTabChange('asset')}
          >
            Asset builder
          </button>
        )}
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'template'}
          className={`marketing-builder-tab${activeTab === 'template' ? ' marketing-builder-tab-active' : ''}`}
          onClick={() => onTabChange('template')}
        >
          Edit template
        </button>
      </div>
      <span className="marketing-builder-toolbar-meta">
        {templateName ? `${templateName} · ` : ''}
        {zoneCount} zone{zoneCount === 1 ? '' : 's'}
      </span>
    </div>
  );
}
