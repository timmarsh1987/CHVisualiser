import React from 'react';

interface BuilderSplitLayoutProps {
  structure: React.ReactNode;
  preview: React.ReactNode;
  structureTitle?: string;
  previewTitle?: string;
}

export default function BuilderSplitLayout({
  structure,
  preview,
  structureTitle = 'Structure',
  previewTitle = 'Preview',
}: BuilderSplitLayoutProps) {
  return (
    <div className="builder-split">
      <section className="builder-split-panel builder-split-structure" aria-label={structureTitle}>
        <h3 className="builder-split-heading">{structureTitle}</h3>
        <div className="builder-split-structure-body">{structure}</div>
      </section>
      <section className="builder-split-panel builder-split-preview" aria-label={previewTitle}>
        <h3 className="builder-split-heading">{previewTitle}</h3>
        <div className="builder-split-preview-body">{preview}</div>
      </section>
    </div>
  );
}
