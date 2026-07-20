import React, { useCallback, useEffect, useRef, useState } from 'react';
import { contentHubApi } from './api';
import BuilderSplitLayout from './BuilderSplitLayout';
import type { FigmaImportApplyPayload } from './FigmaImportPanel';
import LivePreviewPanel from './LivePreviewPanel';
import { useRotatingSavingMessage } from './saving-messages';
import TemplatePropertiesForm from './TemplatePropertiesForm';
import TemplateAllowedAssets from './TemplateAllowedAssets';
import ZoneDeleteButton from './ZoneDeleteButton';
import { buildZoneTypeChangePatch } from './entityWrite';
import type { Template, TemplateZone, ZoneType } from './types';
import { DEFAULT_HEADING_LEVEL, HEADING_LEVELS } from './headingLevel';
import {
  CONTENT_ALIGNMENTS,
  DEFAULT_CONTENT_ALIGNMENT,
  DEFAULT_OFFSET_DIRECTION,
  OFFSET_DIRECTIONS,
} from './zoneLayout';

const ZONE_TYPES: ZoneType[] = ['Text', 'Heading', 'Image', 'CTA Button', 'Logo', 'Background Color', 'Divider', 'HTML'];
const AUTO_SAVE_DELAY_MS = 800;

type AutosaveStatus = 'idle' | 'pending' | 'saving' | 'saved' | 'error';

interface TemplateAdminZoneEditorProps {
  template: Template;
  onSaved?: (template: Template) => void;
  /** When set, replaces editor zones/canvas from a Figma import preview. */
  pendingFigmaImport?: FigmaImportApplyPayload | null;
  onPendingFigmaImportApplied?: () => void;
}

export default function TemplateAdminZoneEditor({
  template: initialTemplate,
  onSaved,
  pendingFigmaImport = null,
  onPendingFigmaImportApplied,
}: TemplateAdminZoneEditorProps) {
  const [template, setTemplate] = useState<Template>(initialTemplate);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(template.zones[0]?.id ?? null);
  const [saveStatus, setSaveStatus] = useState<AutosaveStatus>('saved');
  const [saveError, setSaveError] = useState<string | null>(null);
  const baselineZonesRef = useRef<TemplateZone[]>(initialTemplate.zones);
  const templateRef = useRef(template);
  const saveTimerRef = useRef<number | null>(null);
  const saveGenerationRef = useRef(0);
  const skipNextAutosaveRef = useRef(true);
  const isMountedRef = useRef(false);

  templateRef.current = template;

  const persistTemplate = useCallback(
    async (templateToSave: Template) => {
      const generation = ++saveGenerationRef.current;
      setSaveStatus('saving');
      setSaveError(null);

      try {
        const saved = await contentHubApi.saveTemplate(templateToSave, baselineZonesRef.current);
        if (generation !== saveGenerationRef.current) return;

        baselineZonesRef.current = saved.zones;
        skipNextAutosaveRef.current = true;
        setTemplate(saved);
        onSaved?.(saved);
        setSaveStatus('saved');
      } catch (error) {
        if (generation !== saveGenerationRef.current) return;
        setSaveError(error instanceof Error ? error.message : 'Failed to save template zones.');
        setSaveStatus('error');
      }
    },
    [onSaved]
  );

  useEffect(() => {
    if (!pendingFigmaImport || pendingFigmaImport.zones.length === 0) return;

    setTemplate((prev) => ({
      ...prev,
      canvasWidth: pendingFigmaImport.canvasWidth ?? prev.canvasWidth,
      canvasHeight: pendingFigmaImport.canvasHeight ?? prev.canvasHeight,
      zones: pendingFigmaImport.zones.map((zone, index) => ({
        ...zone,
        sortOrder: index,
      })),
    }));
    setSelectedZoneId(pendingFigmaImport.zones[0]?.id ?? null);
    setSaveStatus('pending');
    onPendingFigmaImportApplied?.();
  }, [pendingFigmaImport, onPendingFigmaImportApplied]);

  useEffect(() => {
    skipNextAutosaveRef.current = true;
    baselineZonesRef.current = initialTemplate.zones;
    setTemplate(initialTemplate);
    setSelectedZoneId((current) => {
      if (current && initialTemplate.zones.some((zone) => zone.id === current)) {
        return current;
      }
      return initialTemplate.zones[0]?.id ?? null;
    });
    setSaveError(null);
    setSaveStatus('saved');
  }, [
    initialTemplate.id,
    initialTemplate.templateName,
    initialTemplate.channelType,
    initialTemplate.canvasWidth,
    initialTemplate.canvasHeight,
    initialTemplate.formatPreset,
    initialTemplate.zones
      .map((zone) =>
        [
          zone.id,
          zone.zoneKey,
          zone.zoneLabel,
          zone.zoneType,
          zone.isLocked,
          zone.sortOrder,
          zone.headingLevel ?? '',
          zone.maxCharacterCount ?? '',
        ].join(':')
      )
      .join('|'),
  ]);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    if (skipNextAutosaveRef.current) {
      skipNextAutosaveRef.current = false;
      return;
    }

    setSaveStatus((current) => (current === 'saving' ? current : 'pending'));

    if (saveTimerRef.current != null) {
      window.clearTimeout(saveTimerRef.current);
    }

    saveTimerRef.current = window.setTimeout(() => {
      void persistTemplate(templateRef.current);
    }, AUTO_SAVE_DELAY_MS);

    return () => {
      if (saveTimerRef.current != null) {
        window.clearTimeout(saveTimerRef.current);
      }
    };
  }, [template, persistTemplate]);

  const selectedZone = template.zones.find((z) => z.id === selectedZoneId);
  const [draggedZoneId, setDraggedZoneId] = useState<string | null>(null);
  const [dragOverZoneId, setDragOverZoneId] = useState<string | null>(null);

  const sortedZones = [...template.zones].sort((a, b) => a.sortOrder - b.sortOrder);

  const reorderZones = (fromId: string, toId: string) => {
    if (fromId === toId) return;

    setTemplate((prev) => {
      const ordered = [...prev.zones].sort((a, b) => a.sortOrder - b.sortOrder);
      const fromIndex = ordered.findIndex((zone) => zone.id === fromId);
      const toIndex = ordered.findIndex((zone) => zone.id === toId);
      if (fromIndex < 0 || toIndex < 0) return prev;

      const reordered = [...ordered];
      const [moved] = reordered.splice(fromIndex, 1);
      reordered.splice(toIndex, 0, moved);

      return {
        ...prev,
        zones: reordered.map((zone, index) => ({ ...zone, sortOrder: index })),
      };
    });
  };

  const updateTemplate = (patch: Partial<Template>) => {
    setTemplate((prev) => ({ ...prev, ...patch }));
  };

  const updateZone = (zoneId: string, patch: Partial<TemplateZone>) => {
    setTemplate((prev) => ({
      ...prev,
      zones: prev.zones.map((z) => {
        if (z.id !== zoneId) return z;
        const merged = { ...z, ...patch };
        for (const key of Object.keys(patch) as (keyof TemplateZone)[]) {
          if (patch[key] === undefined) {
            delete merged[key];
          }
        }
        return merged;
      }),
    }));
  };

  const parseOptionalNumber = (raw: string): number | undefined => {
    if (raw.trim() === '') return undefined;
    const value = Number(raw);
    return Number.isNaN(value) ? undefined : value;
  };

  const addZone = () => {
    const usedKeys = new Set(template.zones.map((zone) => zone.zoneKey));
    let suffix = template.zones.length + 1;
    let zoneKey = `newZone${suffix}`;
    while (usedKeys.has(zoneKey)) {
      suffix += 1;
      zoneKey = `newZone${suffix}`;
    }

    const newZone: TemplateZone = {
      id: `temp-${Date.now()}`,
      zoneKey,
      zoneLabel: 'New zone',
      zoneType: 'Text',
      isLocked: false,
      sortOrder: template.zones.length,
    };
    setTemplate((prev) => ({ ...prev, zones: [...prev.zones, newZone] }));
    setSelectedZoneId(newZone.id);
  };

  const removeZone = (zoneId: string) => {
    const sorted = [...template.zones].sort((a, b) => a.sortOrder - b.sortOrder);
    const deletedIndex = sorted.findIndex((zone) => zone.id === zoneId);

    const remaining = sorted
      .filter((zone) => zone.id !== zoneId)
      .map((zone, index) => ({ ...zone, sortOrder: index }));

    const nextSelectedId =
      remaining[deletedIndex]?.id ?? remaining[deletedIndex - 1]?.id ?? null;

    setTemplate((prev) => ({ ...prev, zones: remaining }));
    setSelectedZoneId(nextSelectedId);
  };

  const addEmailStarterZones = () => {
    const starterZones: TemplateZone[] = [
      {
        id: `temp-${Date.now()}-logo`,
        zoneKey: 'logo',
        zoneLabel: 'Logo',
        zoneType: 'Logo',
        isLocked: true,
        sortOrder: 0,
      },
      {
        id: `temp-${Date.now()}-headline`,
        zoneKey: 'headline',
        zoneLabel: 'Headline',
        zoneType: 'Heading',
        headingLevel: 'H1',
        isLocked: false,
        sortOrder: 1,
        maxCharacterCount: 120,
      },
      {
        id: `temp-${Date.now()}-hero`,
        zoneKey: 'heroImage',
        zoneLabel: 'Hero image',
        zoneType: 'Image',
        isLocked: false,
        sortOrder: 2,
        aspectRatioLock: '16:9',
      },
      {
        id: `temp-${Date.now()}-body`,
        zoneKey: 'body',
        zoneLabel: 'Body copy',
        zoneType: 'Text',
        isLocked: false,
        sortOrder: 3,
        maxCharacterCount: 500,
      },
      {
        id: `temp-${Date.now()}-cta`,
        zoneKey: 'cta',
        zoneLabel: 'Learn more',
        zoneType: 'CTA Button',
        isLocked: false,
        sortOrder: 4,
      },
    ];
    setTemplate((prev) => ({ ...prev, zones: starterZones }));
    setSelectedZoneId(starterZones[0].id);
  };

  const pendingMessage = useRotatingSavingMessage(saveStatus === 'pending', 'pending');
  const savingMessage = useRotatingSavingMessage(saveStatus === 'saving', 'active');

  const autosaveMessage =
    saveStatus === 'pending'
      ? pendingMessage
      : saveStatus === 'saving'
        ? savingMessage
        : saveStatus === 'error'
          ? saveError ?? 'Could not save template.'
          : 'All changes saved automatically.';

  return (
    <BuilderSplitLayout
      structureTitle="Template structure"
      previewTitle="Live preview"
      structure={
        <div className="template-admin-structure">
          <TemplatePropertiesForm template={template} onChange={updateTemplate} compact />

          <TemplateAllowedAssets
            template={template}
            onAssetsChange={(assetIds) =>
              setTemplate((current) => {
                const previous = current.allowedAssetIds ?? [];
                if (
                  previous.length === assetIds.length &&
                  previous.every((id, index) => id === assetIds[index])
                ) {
                  return current;
                }
                return { ...current, allowedAssetIds: assetIds };
              })
            }
          />

          <div className="template-admin-structure-grid">
            <div className="template-admin-zone-list">
              <h4>Zones</h4>
              <p className="zone-list-hint">Drag zones to reorder</p>
              {sortedZones.map((zone) => (
                <div
                  key={zone.id}
                  tabIndex={0}
                  draggable
                  className={`zone-list-item${zone.id === selectedZoneId ? ' zone-list-item-active' : ''}${
                    zone.id === draggedZoneId ? ' zone-list-item-dragging' : ''
                  }${zone.id === dragOverZoneId ? ' zone-list-item-drag-over' : ''}`}
                  onClick={() => setSelectedZoneId(zone.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedZoneId(zone.id);
                    }
                  }}
                  onDragStart={(event) => {
                    if ((event.target as HTMLElement).closest('.zone-list-delete')) {
                      event.preventDefault();
                      return;
                    }
                    event.dataTransfer.effectAllowed = 'move';
                    event.dataTransfer.setData('text/plain', zone.id);
                    setDraggedZoneId(zone.id);
                  }}
                  onDragOver={(event) => {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = 'move';
                    if (dragOverZoneId !== zone.id) {
                      setDragOverZoneId(zone.id);
                    }
                  }}
                  onDragLeave={() => {
                    setDragOverZoneId((current) => (current === zone.id ? null : current));
                  }}
                  onDrop={(event) => {
                    event.preventDefault();
                    const fromId = event.dataTransfer.getData('text/plain');
                    if (fromId) {
                      reorderZones(fromId, zone.id);
                    }
                    setDraggedZoneId(null);
                    setDragOverZoneId(null);
                  }}
                  onDragEnd={() => {
                    setDraggedZoneId(null);
                    setDragOverZoneId(null);
                  }}
                >
                  <span className="zone-list-drag-handle" aria-hidden="true" title="Drag to reorder">
                    ⋮⋮
                  </span>
                  <span className="zone-list-item-content">
                    <span>{zone.zoneLabel || zone.zoneKey}</span>
                    <span className="zone-list-item-type">
                      {zone.zoneType === 'Heading'
                        ? `Heading · ${zone.headingLevel ?? DEFAULT_HEADING_LEVEL}`
                        : zone.zoneType}
                    </span>
                    {zone.isLocked && <span className="zone-list-item-lock">Locked</span>}
                  </span>
                  <ZoneDeleteButton
                    zoneLabel={zone.zoneLabel || zone.zoneKey}
                    onDelete={() => removeZone(zone.id)}
                  />
                </div>
              ))}
              <button type="button" className="zone-list-add" onClick={addZone}>
                + Add zone
              </button>
              {template.zones.length === 0 && (
                <button type="button" className="zone-list-add zone-list-starter" onClick={addEmailStarterZones}>
                  Start with email template zones
                </button>
              )}
            </div>

            <div className="template-admin-properties">
              {selectedZone ? (
                <>
                  <h4>Zone properties</h4>
            <div key={`${selectedZone.id}-${selectedZone.zoneType}`}>
            <label>
              Label
              <input
                value={selectedZone.zoneLabel}
                onChange={(e) => updateZone(selectedZone.id, { zoneLabel: e.target.value })}
              />
            </label>
            <label>
              Zone key
              <input
                value={selectedZone.zoneKey}
                onChange={(e) => updateZone(selectedZone.id, { zoneKey: e.target.value })}
              />
            </label>
            <label>
              Type
              <select
                value={selectedZone.zoneType}
                onChange={(e) => {
                  updateZone(
                    selectedZone.id,
                    buildZoneTypeChangePatch(selectedZone, e.target.value as TemplateZone['zoneType'])
                  );
                }}
              >
                {ZONE_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedZone.isLocked}
                onChange={(e) => updateZone(selectedZone.id, { isLocked: e.target.checked })}
              />
              Locked (brand element, end user cannot edit)
            </label>

            {selectedZone.zoneType === 'Heading' && (
              <>
                <label>
                  Heading level
                  <select
                    value={selectedZone.headingLevel ?? DEFAULT_HEADING_LEVEL}
                    onChange={(e) =>
                      updateZone(selectedZone.id, {
                        headingLevel: e.target.value as TemplateZone['headingLevel'],
                      })
                    }
                  >
                    {HEADING_LEVELS.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Max characters
                  <input
                    type="number"
                    value={selectedZone.maxCharacterCount ?? ''}
                    onChange={(e) =>
                      updateZone(selectedZone.id, { maxCharacterCount: parseOptionalNumber(e.target.value) })
                    }
                  />
                </label>
              </>
            )}

            {selectedZone.zoneType === 'Text' && (
              <label>
                Max characters
                <input
                  type="number"
                  value={selectedZone.maxCharacterCount ?? ''}
                  onChange={(e) =>
                    updateZone(selectedZone.id, { maxCharacterCount: parseOptionalNumber(e.target.value) })
                  }
                />
              </label>
            )}

            {selectedZone.zoneType === 'Image' && (
              <label>
                Aspect ratio lock
                <input
                  placeholder="e.g. 1:1"
                  value={selectedZone.aspectRatioLock ?? ''}
                  onChange={(e) => {
                    const trimmed = e.target.value.trim();
                    updateZone(selectedZone.id, { aspectRatioLock: trimmed || undefined });
                  }}
                />
              </label>
            )}

            {selectedZone.zoneType === 'HTML' && (
              <>
                <label>
                  Default HTML content
                  <textarea
                    value={selectedZone.htmlDefaultContent ?? ''}
                    onChange={(e) => updateZone(selectedZone.id, { htmlDefaultContent: e.target.value })}
                  />
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedZone.htmlAllowUserOverride ?? false}
                    onChange={(e) => updateZone(selectedZone.id, { htmlAllowUserOverride: e.target.checked })}
                  />
                  Allow end user to edit this HTML zone
                </label>
              </>
            )}

            {template.channelType === 'Social' && (
              <div className="position-fields">
                <label>
                  X
                  <input
                    type="number"
                    value={selectedZone.positionX ?? ''}
                    onChange={(e) =>
                      updateZone(selectedZone.id, { positionX: parseOptionalNumber(e.target.value) })
                    }
                  />
                </label>
                <label>
                  Y
                  <input
                    type="number"
                    value={selectedZone.positionY ?? ''}
                    onChange={(e) =>
                      updateZone(selectedZone.id, { positionY: parseOptionalNumber(e.target.value) })
                    }
                  />
                </label>
                <label>
                  Width
                  <input
                    type="number"
                    value={selectedZone.zoneWidth ?? ''}
                    onChange={(e) =>
                      updateZone(selectedZone.id, { zoneWidth: parseOptionalNumber(e.target.value) })
                    }
                  />
                </label>
                <label>
                  Height
                  <input
                    type="number"
                    value={selectedZone.zoneHeight ?? ''}
                    onChange={(e) =>
                      updateZone(selectedZone.id, { zoneHeight: parseOptionalNumber(e.target.value) })
                    }
                  />
                </label>
              </div>
            )}

            <div className="zone-layout-fields asset-zone-layout-fields">
              <div className="asset-zone-layout-grid">
                <label>
                  Alignment
                  <select
                    value={selectedZone.contentAlignment ?? DEFAULT_CONTENT_ALIGNMENT}
                    onChange={(event) =>
                      updateZone(selectedZone.id, {
                        contentAlignment: event.target.value as TemplateZone['contentAlignment'],
                      })
                    }
                  >
                    {CONTENT_ALIGNMENTS.map((alignment) => (
                      <option key={alignment} value={alignment}>{alignment}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Offset (px)
                  <input
                    type="number"
                    min={0}
                    value={selectedZone.offsetPx ?? 0}
                    onChange={(event) =>
                      updateZone(selectedZone.id, { offsetPx: Math.max(0, Number(event.target.value) || 0) })
                    }
                  />
                </label>
                <label>
                  Direction
                  <select
                    value={selectedZone.offsetDirection ?? DEFAULT_OFFSET_DIRECTION}
                    onChange={(event) =>
                      updateZone(selectedZone.id, {
                        offsetDirection: event.target.value as TemplateZone['offsetDirection'],
                      })
                    }
                  >
                    {OFFSET_DIRECTIONS.map((direction) => (
                      <option key={direction} value={direction}>{direction}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Sort order
                  <input
                    type="number"
                    min={0}
                    value={selectedZone.sortOrder ?? 0}
                    onChange={(event) =>
                      updateZone(selectedZone.id, { sortOrder: Math.max(0, Number(event.target.value) || 0) })
                    }
                  />
                </label>
              </div>
            </div>
            </div>

            {template.channelType !== 'Social' && (
              <p className="zone-sort-hint">You can also drag zones in the list to reorder.</p>
            )}

            <button type="button" className="zone-remove" onClick={() => removeZone(selectedZone.id)}>Remove zone</button>
                </>
              ) : (
                <p className="no-zone-selected">Select a zone to edit its properties, or add a new one.</p>
              )}
            </div>
          </div>

          <div className="template-admin-structure-actions">
            <p
              className={`template-admin-autosave-status${
                saveStatus === 'error'
                  ? ' template-admin-autosave-status-error'
                  : saveStatus === 'saved'
                    ? ' template-admin-autosave-status-saved'
                    : ''
              }`}
              role="status"
              aria-live="polite"
            >
              {autosaveMessage}
            </p>
          </div>
        </div>
      }
      preview={
        <LivePreviewPanel template={template} layoutMode={template.channelType === 'Social' ? 'canvas' : 'stacked'} />
      }
    />
  );
}
