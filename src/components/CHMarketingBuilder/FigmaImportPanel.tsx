import React, { useState } from 'react';
import {
  extractFigmaRootFromApiPayload,
  mapFigmaNodeToTemplateZones,
  parseFigmaUrl,
  suggestTemplateNameFromFrame,
  type FigmaImportResult,
} from './figmaImport';
import { contentHubApi } from './api';
import SavingStatusMessage from './SavingStatusMessage';
import type { ChannelType, Template, TemplateZone } from './types';

export interface FigmaImportApplyPayload {
  zones: TemplateZone[];
  canvasWidth?: number;
  canvasHeight?: number;
  frameName: string;
}

interface FigmaImportPanelProps {
  template: Template;
  figmaImportApiUrl?: string;
  figmaImportApiToken?: string;
  /** Apply mapped zones onto the current template (editor state). */
  onApplyToCurrent: (payload: FigmaImportApplyPayload) => void;
  /** Called after a brand-new template is created from the Figma frame. */
  onCreatedTemplate?: (template: Template) => void;
}

async function fetchFigmaNodes(
  apiUrl: string,
  apiToken: string | undefined,
  figmaUrl: string
): Promise<unknown> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (apiToken?.trim()) {
    headers.Authorization = `Bearer ${apiToken.trim()}`;
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({ figmaUrl }),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    error?: string;
    nodes?: unknown;
    fileKey?: string;
    nodeId?: string;
    name?: string;
  };

  if (!response.ok) {
    throw new Error(payload.error || `Figma import failed (${response.status})`);
  }

  return payload;
}

export default function FigmaImportPanel({
  template,
  figmaImportApiUrl = '/api/figma/import',
  figmaImportApiToken,
  onApplyToCurrent,
  onCreatedTemplate,
}: FigmaImportPanelProps) {
  const [figmaUrl, setFigmaUrl] = useState('');
  const [preview, setPreview] = useState<FigmaImportResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [createAsNew, setCreateAsNew] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState('');

  const handlePreview = async () => {
    setIsLoading(true);
    setError(null);
    setMessage(null);
    setPreview(null);

    try {
      const parsed = parseFigmaUrl(figmaUrl);
      if (!parsed) {
        throw new Error(
          'Paste a full Figma URL that includes node-id (right-click frame → Copy link).'
        );
      }

      const apiPayload = await fetchFigmaNodes(figmaImportApiUrl, figmaImportApiToken, figmaUrl);
      const root = extractFigmaRootFromApiPayload(apiPayload, parsed.nodeId);
      if (!root) {
        throw new Error('Could not find that frame/node in the Figma response.');
      }

      const mapped = mapFigmaNodeToTemplateZones(root);
      setPreview(mapped);
      setNewTemplateName(suggestTemplateNameFromFrame(mapped.frameName, template.channelType));
      if (mapped.zones.length === 0) {
        setError(mapped.warnings[0] || 'No zones were mapped from this frame.');
      } else {
        setMessage(`Mapped ${mapped.zones.length} zone(s) from “${mapped.frameName}”.`);
      }
    } catch (previewError) {
      setError(previewError instanceof Error ? previewError.message : 'Figma preview failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyCurrent = () => {
    if (!preview || preview.zones.length === 0) return;
    onApplyToCurrent({
      zones: preview.zones,
      canvasWidth: preview.canvasWidth,
      canvasHeight: preview.canvasHeight,
      frameName: preview.frameName,
    });
    setMessage(
      `Applied ${preview.zones.length} zone(s) to “${template.templateName}”. Save/autosave will persist them.`
    );
  };

  const handleCreateNew = async () => {
    if (!preview || preview.zones.length === 0) return;

    setIsCreating(true);
    setError(null);
    setMessage(null);

    try {
      const channelType = template.channelType as ChannelType;
      const created = await contentHubApi.createTemplate({
        templateName: newTemplateName.trim() || suggestTemplateNameFromFrame(preview.frameName, channelType),
        channelType,
        formatPreset: template.formatPreset,
        canvasWidth: preview.canvasWidth,
        canvasHeight: preview.canvasHeight,
        brandKitId: template.brandKitId,
        zones: preview.zones,
        allowedAssetIds: template.allowedAssetIds,
      }, template.id);

      setMessage(`Created template “${created.templateName}” (${created.id}).`);
      onCreatedTemplate?.(created);
    } catch (createError) {
      setError(
        createError instanceof Error ? createError.message : 'Could not create template from Figma.'
      );
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="figma-import-panel">
      <h4>Import from Figma</h4>
      <p className="figma-import-hint">
        Copy a frame link from Figma (must include <code>node-id</code>). Name layers like{' '}
        <code>zone:headline | type:Heading</code>, <code>zone:hero | type:Image</code>,{' '}
        <code>zone:body | type:Text</code>.
      </p>

      <label>
        Figma frame URL
        <input
          type="text"
          value={figmaUrl}
          onChange={(event) => setFigmaUrl(event.target.value)}
          placeholder="https://www.figma.com/design/FILEKEY/Name?node-id=1-2"
        />
      </label>

      <button
        type="button"
        className="figma-import-button"
        onClick={() => void handlePreview()}
        disabled={isLoading || !figmaUrl.trim()}
      >
        Preview zones
      </button>

      <SavingStatusMessage active={isLoading || isCreating} className="figma-import-saving" />

      {preview && preview.zones.length > 0 && (
        <div className="figma-import-preview">
          <p className="figma-import-preview-meta">
            Frame <strong>{preview.frameName}</strong>
            {preview.canvasWidth != null && preview.canvasHeight != null
              ? ` · ${preview.canvasWidth}×${preview.canvasHeight}`
              : null}
          </p>
          <ul className="figma-import-zone-list">
            {preview.zones.map((zone) => (
              <li key={zone.id}>
                <code>{zone.zoneKey}</code> — {zone.zoneType}
                {zone.zoneWidth != null && zone.zoneHeight != null
                  ? ` (${zone.zoneWidth}×${zone.zoneHeight})`
                  : null}
              </li>
            ))}
          </ul>

          {preview.warnings.map((warning) => (
            <p key={warning} className="figma-import-warning">
              {warning}
            </p>
          ))}

          <label className="figma-import-checkbox">
            <input
              type="checkbox"
              checked={createAsNew}
              onChange={(event) => setCreateAsNew(event.target.checked)}
            />
            Create as a new template (instead of replacing zones on this one)
          </label>

          {createAsNew ? (
            <>
              <label>
                New template name
                <input
                  type="text"
                  value={newTemplateName}
                  onChange={(event) => setNewTemplateName(event.target.value)}
                />
              </label>
              <button
                type="button"
                className="figma-import-button figma-import-button-primary"
                onClick={() => void handleCreateNew()}
                disabled={isCreating || !newTemplateName.trim()}
              >
                Create template from Figma
              </button>
            </>
          ) : (
            <button
              type="button"
              className="figma-import-button figma-import-button-primary"
              onClick={handleApplyCurrent}
            >
              Replace zones on this template
            </button>
          )}
        </div>
      )}

      {message && <p className="figma-import-message">{message}</p>}
      {error && <p className="marketing-builder-error figma-import-error">{error}</p>}
    </div>
  );
}
