import React, { useCallback, useEffect, useRef, useState } from 'react';
import DesignerShell from '../CHDesigner/DesignerShell';
import { createSeedDocument, parseDesignerDocument } from '../CHDesigner/document';
import type { DesignerDocument } from '../CHDesigner/types';
import { contentHubApi } from './api';
import type { Template } from './types';

const AUTO_SAVE_DELAY_MS = 900;

type SaveStatus = 'idle' | 'pending' | 'saving' | 'saved' | 'error';

interface DesignerTemplateAdminProps {
  template: Template;
  designerDocumentProperty?: string;
  onTemplateSaved?: (template: Template) => void;
}

function loadDocumentFromTemplate(template: Template): DesignerDocument {
  if (template.designerDocumentJson?.trim()) {
    try {
      const parsed = parseDesignerDocument(JSON.parse(template.designerDocumentJson));
      if (parsed) return parsed;
    } catch {
      // fall through to seed
    }
  }
  return createSeedDocument();
}

export default function DesignerTemplateAdmin({
  template,
  designerDocumentProperty,
  onTemplateSaved,
}: DesignerTemplateAdminProps) {
  const [document, setDocument] = useState<DesignerDocument>(() => loadDocumentFromTemplate(template));
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('saved');
  const [saveError, setSaveError] = useState<string | null>(null);
  const docRef = useRef(document);
  const timerRef = useRef<number | null>(null);
  const generationRef = useRef(0);
  const skipNextRef = useRef(true);

  docRef.current = document;

  const persist = useCallback(
    async (doc: DesignerDocument) => {
      const generation = ++generationRef.current;
      setSaveStatus('saving');
      setSaveError(null);
      try {
        const json = JSON.stringify(doc);
        await contentHubApi.saveTemplateDesignerDocument(
          template.id,
          json,
          designerDocumentProperty
        );
        if (generation !== generationRef.current) return;
        const nextTemplate: Template = { ...template, designerDocumentJson: json };
        onTemplateSaved?.(nextTemplate);
        setSaveStatus('saved');
      } catch (error) {
        if (generation !== generationRef.current) return;
        setSaveError(error instanceof Error ? error.message : 'Failed to save designer template.');
        setSaveStatus('error');
      }
    },
    [designerDocumentProperty, onTemplateSaved, template]
  );

  useEffect(() => {
    if (skipNextRef.current) {
      skipNextRef.current = false;
      return;
    }
    setSaveStatus('pending');
    if (timerRef.current != null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      void persist(docRef.current);
    }, AUTO_SAVE_DELAY_MS);
    return () => {
      if (timerRef.current != null) window.clearTimeout(timerRef.current);
    };
  }, [document, persist]);

  const statusClassName =
    saveStatus === 'error'
      ? 'chd-status-bar--error'
      : saveStatus === 'saved'
        ? 'chd-status-bar--saved'
        : undefined;

  const statusText =
    saveStatus === 'saving'
      ? 'Saving template canvas…'
      : saveStatus === 'pending'
        ? 'Unsaved changes…'
        : saveStatus === 'error'
          ? saveError || 'Save failed'
          : 'Saved to template';

  return (
    <DesignerShell
      key={`${template.id}:${template.designerDocumentJson ? 'doc' : 'seed'}`}
      mode="admin"
      document={document}
      templateDocument={document}
      templateId={template.id}
      onDocumentChange={setDocument}
      statusSlot={statusText}
      statusClassName={statusClassName}
    />
  );
}

export async function initializeDesignerTemplate(
  template: Template,
  designerDocumentProperty?: string
): Promise<Template> {
  const seed = createSeedDocument();
  if (template.canvasWidth) seed.canvas.width = template.canvasWidth;
  if (template.canvasHeight) seed.canvas.height = template.canvasHeight;
  const json = JSON.stringify(seed);
  await contentHubApi.saveTemplateDesignerDocument(template.id, json, designerDocumentProperty);
  return { ...template, designerDocumentJson: json };
}
