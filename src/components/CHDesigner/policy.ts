import type {
  DesignerDocument,
  DesignerInstanceDocument,
  DesignerMode,
  DesignerSettings,
  Layer,
  LayerOverride,
} from './types';
import { cloneDocument } from './document';
import { layerIsDrawn, layerIsShown, syncActiveTemplatePage } from './templateSettings';

export { layerIsDrawn, layerIsShown };

export function defaultEditableContent(layer: Pick<Layer, 'type' | 'editableContent'>): boolean {
  if (typeof layer.editableContent === 'boolean') return layer.editableContent;
  return layer.type === 'text' || layer.type === 'image';
}

export function layerAllowsContentEdit(layer: Layer): boolean {
  if (layer.locked) return false;
  return defaultEditableContent(layer);
}

export function layerAllowsTransform(layer: Layer): boolean {
  if (layer.locked) return false;
  return Boolean(layer.allowTransform);
}

/** Publication treats an unlocked layer as movable. End-user mode still uses the template flag. */
export function layerCanTransform(layer: Layer, mode: DesignerMode): boolean {
  if (layer.locked) return false;
  if (mode === 'admin' || mode === 'publication') return true;
  return Boolean(layer.allowTransform);
}

/** Instance editing. Layer lock, transform, and content flags come from the template. */
export function modeUsesTemplatePolicy(mode: DesignerMode): boolean {
  return mode === 'endUser' || mode === 'publication';
}

export function layerIsSelectable(
  layer: Layer,
  mode: DesignerMode,
  settings?: DesignerSettings
): boolean {
  if (!layerIsShown(layer, settings)) return false;
  if (mode === 'admin') return true;
  if (mode === 'publication') return !layer.locked;
  return layerAllowsContentEdit(layer) || layerAllowsTransform(layer);
}

export function emptyInstance(templateId: string): DesignerInstanceDocument {
  return { version: 1, templateId, overrides: {} };
}

export function parseDesignerInstance(raw: unknown): DesignerInstanceDocument | null {
  if (!raw || typeof raw !== 'object') return null;
  const record = raw as Record<string, unknown>;
  if (record.version !== 1) return null;
  if (typeof record.templateId !== 'string') return null;
  if (!record.overrides || typeof record.overrides !== 'object' || Array.isArray(record.overrides)) {
    return null;
  }

  const overrides: Record<string, LayerOverride> = {};
  for (const [id, value] of Object.entries(record.overrides as Record<string, unknown>)) {
    if (!value || typeof value !== 'object') continue;
    const item = value as Record<string, unknown>;
    const override: LayerOverride = {};
    for (const key of ['x', 'y', 'width', 'height', 'rotation'] as const) {
      if (typeof item[key] === 'number' && Number.isFinite(item[key])) {
        override[key] = item[key] as number;
      }
    }
    for (const key of ['text', 'fill', 'color', 'src'] as const) {
      if (typeof item[key] === 'string') {
        override[key] = item[key] as string;
      }
    }
    if (Object.keys(override).length > 0) {
      overrides[id] = override;
    }
  }

  return {
    version: 1,
    templateId: record.templateId,
    overrides,
    fields: compactFieldValues(record.fields),
  };
}

export function compactFieldValues(raw: unknown): Record<string, string> | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const fields: Record<string, string> = {};
  for (const [id, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value === 'string' && value.trim()) fields[id] = value;
  }
  return Object.keys(fields).length > 0 ? fields : undefined;
}

function applyLayerOverrides(
  layers: Layer[],
  overrides: Record<string, LayerOverride>,
  mode: DesignerMode
): Layer[] {
  return layers.map((layer) => {
    const override = overrides[layer.id];
    if (!override) return layer;
    const next: Layer = { ...layer };
    if (layerCanTransform(layer, mode)) {
      if (typeof override.x === 'number') next.x = override.x;
      if (typeof override.y === 'number') next.y = override.y;
      if (typeof override.width === 'number') next.width = override.width;
      if (typeof override.height === 'number') next.height = override.height;
      if (typeof override.rotation === 'number') next.rotation = override.rotation || undefined;
    }
    if (layerAllowsContentEdit(layer)) {
      if (typeof override.text === 'string') next.text = override.text;
      if (typeof override.fill === 'string') next.fill = override.fill;
      if (typeof override.color === 'string') next.color = override.color;
      if (typeof override.src === 'string') next.src = override.src;
    }
    return next;
  });
}

function layersForOverrides(doc: DesignerDocument): Layer[] {
  const synced = syncActiveTemplatePage(doc);
  if (synced.pages?.length) return synced.pages.flatMap((page) => page.layers);
  return synced.layers;
}

export function mergeTemplateAndInstance(
  template: DesignerDocument,
  instance: DesignerInstanceDocument | null | undefined,
  mode: DesignerMode = 'endUser'
): DesignerDocument {
  const base = cloneDocument(template);
  if (!instance?.overrides) return base;
  const layers = applyLayerOverrides(base.layers, instance.overrides, mode);
  return {
    ...base,
    layers,
    pages: base.pages?.map((page) => ({
      ...page,
      layers:
        page.id === base.activePageId
          ? layers
          : applyLayerOverrides(page.layers, instance.overrides, mode),
    })),
  };
}

export function diffInstanceOverrides(
  template: DesignerDocument,
  merged: DesignerDocument,
  templateId: string,
  fieldValues?: Record<string, string>,
  mode: DesignerMode = 'endUser'
): DesignerInstanceDocument {
  const overrides: Record<string, LayerOverride> = {};
  const byId = new Map(layersForOverrides(template).map((layer) => [layer.id, layer]));

  for (const layer of layersForOverrides(merged)) {
    const base = byId.get(layer.id);
    if (!base) continue;
    const override: LayerOverride = {};

    if (layerCanTransform(base, mode)) {
      if (layer.x !== base.x) override.x = layer.x;
      if (layer.y !== base.y) override.y = layer.y;
      if (layer.width !== base.width) override.width = layer.width;
      if (layer.height !== base.height) override.height = layer.height;
      if ((layer.rotation ?? 0) !== (base.rotation ?? 0)) override.rotation = layer.rotation ?? 0;
    }
    if (layerAllowsContentEdit(base)) {
      if (!base.fieldId && (layer.text ?? '') !== (base.text ?? '')) override.text = layer.text;
      if ((layer.fill ?? '') !== (base.fill ?? '')) override.fill = layer.fill;
      if ((layer.color ?? '') !== (base.color ?? '')) override.color = layer.color;
      if ((layer.src ?? '') !== (base.src ?? '')) override.src = layer.src;
    }

    if (Object.keys(override).length > 0) {
      overrides[layer.id] = override;
    }
  }

  const fields = compactFieldValues(fieldValues);
  return fields ? { version: 1, templateId, overrides, fields } : { version: 1, templateId, overrides };
}

/** Restrict an end-user patch to fields allowed by layer policy. */
export function filterEndUserPatch(
  layer: Layer,
  patch: Partial<Layer>,
  mode: DesignerMode = 'endUser'
): Partial<Layer> {
  const next: Partial<Layer> = {};
  if (layerCanTransform(layer, mode)) {
    if (patch.x !== undefined) next.x = patch.x;
    if (patch.y !== undefined) next.y = patch.y;
    if (patch.width !== undefined) next.width = patch.width;
    if (patch.height !== undefined) next.height = patch.height;
    if ('rotation' in patch) next.rotation = patch.rotation;
  }
  if (layerAllowsContentEdit(layer)) {
    if (patch.text !== undefined) next.text = patch.text;
    if (patch.fill !== undefined) next.fill = patch.fill;
    if (patch.color !== undefined) next.color = patch.color;
    if (patch.src !== undefined) next.src = patch.src;
  }
  return next;
}
