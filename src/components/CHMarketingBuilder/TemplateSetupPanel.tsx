import React, { useState } from 'react';
import FigmaImportPanel, { type FigmaImportApplyPayload } from './FigmaImportPanel';
import TemplateAdminZoneEditor from './TemplateAdminZoneEditor';
import TemplateDuplicatePanel from './TemplateDuplicatePanel';
import type { Template } from './types';

interface TemplateSetupPanelProps {
  template: Template;
  onTemplateSaved: (template: Template) => void;
  onTemplatesChanged?: () => void;
  figmaImportApiUrl?: string;
  figmaImportApiToken?: string;
}

export default function TemplateSetupPanel({
  template,
  onTemplateSaved,
  onTemplatesChanged,
  figmaImportApiUrl,
  figmaImportApiToken,
}: TemplateSetupPanelProps) {
  const [pendingFigmaImport, setPendingFigmaImport] = useState<FigmaImportApplyPayload | null>(null);

  return (
    <div className="template-setup-panel">
      <details className="template-setup-tools">
        <summary>Import and duplicate</summary>
        <div className="template-setup-tools-body">
          <FigmaImportPanel
            template={template}
            figmaImportApiUrl={figmaImportApiUrl}
            figmaImportApiToken={figmaImportApiToken}
            onApplyToCurrent={setPendingFigmaImport}
            onCreatedTemplate={(created) => {
              onTemplateSaved(created);
              onTemplatesChanged?.();
            }}
          />
          <TemplateDuplicatePanel
            template={template}
            onDuplicated={(created) => {
              onTemplateSaved(created);
              onTemplatesChanged?.();
            }}
          />
        </div>
      </details>
      <TemplateAdminZoneEditor
        template={template}
        onSaved={onTemplateSaved}
        pendingFigmaImport={pendingFigmaImport}
        onPendingFigmaImportApplied={() => setPendingFigmaImport(null)}
      />
    </div>
  );
}
