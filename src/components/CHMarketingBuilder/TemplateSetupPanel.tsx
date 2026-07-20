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
  const hasZones = template.zones.length > 0;
  const [pendingFigmaImport, setPendingFigmaImport] = useState<FigmaImportApplyPayload | null>(null);

  return (
    <div className="template-setup-panel">
      {!hasZones && (
        <div className="template-setup-banner">
          <h3>Edit template</h3>
          <p>
            Template <strong>{template.templateName}</strong> ({template.id}) has no zones yet.
            Set template properties and add zones on the left, then save. The preview updates on the right.
          </p>
          <p className="template-setup-hint">
            Recommended email zones: Logo (locked), Heading (H1/H2), Hero image, Body copy, CTA button.
            Or import a Figma frame below.
          </p>
        </div>
      )}
      {hasZones && (
        <div className="template-setup-banner template-setup-banner-info">
          <p>
            Editing <strong>{template.templateName}</strong>. Update template properties and zones on the left;
            preview on the right. Changes apply to all marketing assets using this template.
          </p>
        </div>
      )}
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
      <TemplateAdminZoneEditor
        template={template}
        onSaved={onTemplateSaved}
        pendingFigmaImport={pendingFigmaImport}
        onPendingFigmaImportApplied={() => setPendingFigmaImport(null)}
      />
    </div>
  );
}
