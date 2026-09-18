import React, { useCallback, useEffect, useRef, useState } from 'react';
import DesignerShell from './DesignerShell';
import {
  loadBuilderTemplateDocument,
  resolveBuilderTemplateId,
  saveBuilderTemplateDocument,
  type ContentHubRawClient,
} from './builderTemplateApi';
import type { DesignerDocument } from './types';

const AUTO_SAVE_DELAY_MS = 5000;

type SaveStatus = 'loading' | 'pending' | 'saving' | 'saved' | 'error';

interface DesignerAppProps {
  client?: ContentHubRawClient;
  entity?: unknown;
  options?: unknown;
}

export default function DesignerApp({ client, entity, options }: DesignerAppProps) {
  const templateId = resolveBuilderTemplateId(entity, options);
  const [document, setDocument] = useState<DesignerDocument | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('loading');
  const [saveError, setSaveError] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const docRef = useRef<DesignerDocument | null>(null);
  const timerRef = useRef<number | null>(null);
  const generationRef = useRef(0);
  const skipNextChangeRef = useRef(true);

  docRef.current = document;

  const persist = useCallback(
    async (doc: DesignerDocument) => {
      if (!client || !templateId) return;
      const generation = ++generationRef.current;
      setSaveStatus('saving');
      setSaveError(null);
      try {
        await saveBuilderTemplateDocument(client, templateId, doc);
        if (generation !== generationRef.current) return;
        setSaveStatus('saved');
      } catch (error) {
        if (generation !== generationRef.current) return;
        setSaveError(error instanceof Error ? error.message : 'Failed to save template.');
        setSaveStatus('error');
      }
    },
    [client, templateId]
  );

  useEffect(() => {
    if (!templateId) {
      setLoadError(
        'An entity ID is needed. Open CHDesigner on an EPAM.BuilderTemplate detail page, or set templateId in the component configuration.'
      );
      setSaveStatus('error');
      return;
    }
    if (!client) {
      setLoadError('Content Hub client is not available. This component must run inside Content Hub.');
      setSaveStatus('error');
      return;
    }

    let cancelled = false;
    setSaveStatus('loading');
    setLoadError(null);

    void (async () => {
      try {
        const loaded = await loadBuilderTemplateDocument(client, templateId);
        if (cancelled) return;
        skipNextChangeRef.current = true;
        setDocument(loaded.document);
        if (loaded.createdDefault) {
          setSaveStatus('saving');
          try {
            await saveBuilderTemplateDocument(client, templateId, loaded.document);
            if (!cancelled) setSaveStatus('saved');
          } catch (error) {
            if (cancelled) return;
            setSaveError(error instanceof Error ? error.message : 'Could not create the default template JSON.');
            setSaveStatus('error');
          }
        } else {
          setSaveStatus('saved');
        }
      } catch (error) {
        if (cancelled) return;
        setLoadError(error instanceof Error ? error.message : 'Could not load EPAM.BuilderTemplate.');
        setSaveStatus('error');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [client, templateId]);

  useEffect(() => {
    if (!document) return;
    if (skipNextChangeRef.current) {
      skipNextChangeRef.current = false;
      return;
    }
    setSaveStatus('pending');
    if (timerRef.current != null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      const next = docRef.current;
      if (next) void persist(next);
    }, AUTO_SAVE_DELAY_MS);
    return () => {
      if (timerRef.current != null) window.clearTimeout(timerRef.current);
    };
  }, [document, persist]);

  const handleDocumentChange = useCallback((next: DesignerDocument) => {
    setDocument(next);
  }, []);

  const statusLabel =
    saveStatus === 'loading'
      ? 'Loading template…'
      : saveStatus === 'pending'
        ? 'Unsaved changes'
        : saveStatus === 'saving'
          ? 'Saving…'
          : saveStatus === 'error'
            ? saveError || 'Save failed'
            : 'Saved';

  if (!templateId || loadError) {
    return (
      <div className="chd-root">
        <div className="chd-boot-error">{loadError || 'An entity ID is needed.'}</div>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="chd-root">
        <div className="chd-boot-status">Loading EPAM.BuilderTemplate {templateId}…</div>
      </div>
    );
  }

  return (
    <DesignerShell
      key={templateId}
      mode="admin"
      document={document}
      templateDocument={document}
      templateId={templateId}
      onDocumentChange={handleDocumentChange}
      saveStatus={
        <div className={`chd-save-status chd-save-status--${saveStatus}`} title={saveError || statusLabel}>
          {statusLabel}
        </div>
      }
    />
  );
}
