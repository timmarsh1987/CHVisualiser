import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { persistCurrentPageLayout, pushLayerToAllPages, switchDocumentPage } from './pageLayout';
import { resolveCanvasPresetId } from './printPresets';
import {
  cloneDocument,
  createSeedDocument,
  defaultLayerForType,
  duplicateLayers,
  layerBranchIds,
  nextGroupName,
  parseDesignerDocument,
} from './document';
import { assignMagicStrings, resolveFieldText } from './fields';
import { addTemplatePage, removeActiveTemplatePage, syncActiveTemplatePage } from './templateSettings';
import { reflowTextStory, scaleFontWithBox } from './textFlow';
import {
  diffInstanceOverrides,
  filterEndUserPatch,
  layerIsSelectable,
  modeUsesTemplatePolicy,
} from './policy';
import {
  DEFAULT_ZOOM,
  MAX_ZOOM,
  MIN_LAYER_SIZE,
  MIN_ZOOM,
  type DesignerAction,
  type DesignerDocument,
  type DesignerInstanceDocument,
  type DesignerMode,
  type Layer,
  type ViewportState,
} from './types';
import { clamp, zoomAroundPoint } from './coords';

const MAX_HISTORY = 50;

interface ClipboardSlot {
  layers: Layer[];
  sourcePageId: string | null;
  pastes: number;
}

export interface DesignerProviderProps {
  children: React.ReactNode;
  mode?: DesignerMode;
  /** Document shown in the canvas (merged template+instance for endUser). */
  initialDocument?: DesignerDocument;
  /** Template-only baseline used to compute instance overrides (endUser). */
  templateDocument?: DesignerDocument;
  /** Template id used when emitting instance overrides in endUser mode. */
  templateId?: string;
  /** Entered magic-string values for end-user mode. */
  initialFieldValues?: Record<string, string>;
  onDocumentChange?: (document: DesignerDocument) => void;
  onInstanceChange?: (instance: DesignerInstanceDocument) => void;
}

interface DesignerStoreValue {
  mode: DesignerMode;
  templateId?: string;
  document: DesignerDocument;
  /** Document with field values applied. Admin mode returns the stored document. */
  outputDocument: DesignerDocument;
  fieldValues: Record<string, string>;
  selection: string[];
  viewport: ViewportState;
  canUndo: boolean;
  canRedo: boolean;
  canPaste: boolean;
  dispatch: (action: DesignerAction) => void;
  exportDocument: () => DesignerDocument;
  importDocumentJson: (json: string) => boolean;
}

const DesignerStoreContext = createContext<DesignerStoreValue | null>(null);

function moveLayerInList(layers: Layer[], fromIndex: number, toIndex: number): Layer[] {
  if (
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= layers.length ||
    toIndex >= layers.length ||
    fromIndex === toIndex
  ) {
    return layers;
  }
  const next = [...layers];
  const [item] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, item);
  return next;
}

function nudgeSelected(layers: Layer[], selectedIds: string[], direction: 'forward' | 'backward'): Layer[] {
  if (selectedIds.length === 0) return layers;
  const selected = new Set(selectedIds);
  const next = [...layers];

  if (direction === 'forward') {
    for (let i = next.length - 2; i >= 0; i -= 1) {
      if (selected.has(next[i].id) && !selected.has(next[i + 1].id)) {
        const tmp = next[i];
        next[i] = next[i + 1];
        next[i + 1] = tmp;
      }
    }
  } else {
    for (let i = 1; i < next.length; i += 1) {
      if (selected.has(next[i].id) && !selected.has(next[i - 1].id)) {
        const tmp = next[i];
        next[i] = next[i - 1];
        next[i - 1] = tmp;
      }
    }
  }
  return next;
}

export function DesignerProvider({
  children,
  mode = 'admin',
  initialDocument,
  templateDocument,
  templateId,
  initialFieldValues,
  onDocumentChange,
  onInstanceChange,
}: DesignerProviderProps) {
  const seedRef = useRef<DesignerDocument | null>(null);
  if (!seedRef.current) {
    seedRef.current = initialDocument ? cloneDocument(initialDocument) : createSeedDocument();
  }

  const templateBaselineRef = useRef<DesignerDocument>(
    cloneDocument(templateDocument ?? initialDocument ?? seedRef.current)
  );
  const modeRef = useRef(mode);
  modeRef.current = mode;

  const [document, setDocument] = useState<DesignerDocument>(() => cloneDocument(seedRef.current!));
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() => ({ ...(initialFieldValues ?? {}) }));
  const [viewPageId, setViewPageId] = useState<string | null>(null);
  const [selection, setSelection] = useState<string[]>([]);
  const [viewport, setViewport] = useState<ViewportState>({
    zoom: DEFAULT_ZOOM,
    panX: 40,
    panY: 40,
    fitNonce: 0,
    stageWidth: 0,
    stageHeight: 0,
  });
  const [clipboard, setClipboard] = useState<ClipboardSlot | null>(null);
  const clipboardRef = useRef<ClipboardSlot | null>(null);
  const historyRef = useRef<DesignerDocument[]>([cloneDocument(seedRef.current)]);
  const historyIndexRef = useRef(0);
  const [historyTick, setHistoryTick] = useState(0);
  const selectionRef = useRef(selection);
  selectionRef.current = selection;
  const documentRef = useRef(document);
  documentRef.current = document;
  const fieldValuesRef = useRef(fieldValues);
  fieldValuesRef.current = fieldValues;

  const onDocumentChangeRef = useRef(onDocumentChange);
  onDocumentChangeRef.current = onDocumentChange;
  const onInstanceChangeRef = useRef(onInstanceChange);
  onInstanceChangeRef.current = onInstanceChange;
  const templateIdRef = useRef(templateId);
  templateIdRef.current = templateId;

  const bumpHistoryUi = useCallback(() => setHistoryTick((n) => n + 1), []);

  const emitChanges = useCallback((nextDoc: DesignerDocument) => {
    onDocumentChangeRef.current?.(cloneDocument(syncActiveTemplatePage(nextDoc)));
    if (modeUsesTemplatePolicy(modeRef.current)) {
      const id = templateIdRef.current ?? '';
      onInstanceChangeRef.current?.(
        diffInstanceOverrides(
          templateBaselineRef.current,
          nextDoc,
          id,
          fieldValuesRef.current,
          modeRef.current
        )
      );
    }
  }, []);

  const pushHistory = useCallback(
    (nextDoc: DesignerDocument) => {
      const clipped = historyRef.current.slice(0, historyIndexRef.current + 1);
      clipped.push(cloneDocument(nextDoc));
      while (clipped.length > MAX_HISTORY) {
        clipped.shift();
      }
      historyRef.current = clipped;
      historyIndexRef.current = clipped.length - 1;
      bumpHistoryUi();
    },
    [bumpHistoryUi]
  );

  const applyDocument = useCallback(
    (nextDoc: DesignerDocument, recordHistory: boolean) => {
      setDocument(nextDoc);
      documentRef.current = nextDoc;
      if (recordHistory) {
        pushHistory(nextDoc);
      }
      emitChanges(nextDoc);
    },
    [emitChanges, pushHistory]
  );

  const dispatch = useCallback(
    (action: DesignerAction) => {
      const constrained = modeUsesTemplatePolicy(modeRef.current);

      switch (action.type) {
        case 'ADD_LAYER': {
          if (constrained) return;
          const layer = defaultLayerForType(action.layerType, action.at);
          setDocument((prev) => {
            let next: DesignerDocument = { ...prev, layers: [...prev.layers, layer] };
            if (layer.type === 'text' && layer.flowOverflow) {
              next = reflowTextStory(next, layer.id);
            }
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection([layer.id]);
          break;
        }
        case 'UPDATE_LAYER': {
          const push = action.pushHistory !== false;
          setDocument((prev) => {
            const applyPatch = (layer: Layer, persistLayout: boolean): Layer => {
              if (layer.id !== action.id) return layer;
              const patch = constrained
                ? filterEndUserPatch(layer, action.patch, modeRef.current)
                : action.patch;
              if (Object.keys(patch).length === 0) return layer;
              const patched: Layer = { ...layer, ...patch };
              if (typeof patched.width === 'number') {
                patched.width = Math.max(MIN_LAYER_SIZE, patched.width);
              }
              if (typeof patched.height === 'number') {
                patched.height = Math.max(MIN_LAYER_SIZE, patched.height);
              }
              const scaled = scaleFontWithBox(layer, patched, action.patch);
              return constrained || !persistLayout ? scaled : persistCurrentPageLayout(scaled, prev.canvas);
            };
            const layers = prev.layers.map((layer) => applyPatch(layer, true));
            const pages = prev.pages?.map((page) => ({
              ...page,
              layers:
                page.id === prev.activePageId
                  ? layers
                  : page.layers.map((layer) => applyPatch(layer, false)),
            }));
            let next: DesignerDocument = pages ? { ...prev, layers, pages } : { ...prev, layers };
            const touched =
              layers.find((layer) => layer.id === action.id) ||
              pages?.flatMap((page) => page.layers).find((layer) => layer.id === action.id);
            const shouldFlow =
              touched?.type === 'text' &&
              (Boolean(touched.flowOverflow) ||
                Boolean(touched.continuesFrom) ||
                action.patch.flowOverflow === false);
            if (shouldFlow && touched) {
              next = reflowTextStory(next, touched.continuesFrom || touched.id);
            }
            if (push) pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'DELETE_LAYERS': {
          if (constrained) return;
          const ids = new Set(action.ids ?? selectionRef.current);
          if (ids.size === 0) return;
          setDocument((prev) => {
            const synced = syncActiveTemplatePage(prev);
            const drop = new Set(ids);
            const pool = synced.pages?.flatMap((page) => page.layers) ?? synced.layers;
            for (const layer of pool) {
              if (layer.continuesFrom && drop.has(layer.continuesFrom)) drop.add(layer.id);
            }
            const keep = (layer: Layer) => !drop.has(layer.id);
            const release = (layer: Layer): Layer => {
              if (!layer.parentId || !drop.has(layer.parentId)) return layer;
              const next = { ...layer };
              delete next.parentId;
              return next;
            };
            const layers = synced.layers.filter(keep).map(release);
            const next: DesignerDocument = synced.pages
              ? {
                  ...synced,
                  layers,
                  pages: synced.pages.map((page) => ({
                    ...page,
                    layers:
                      page.id === synced.activePageId
                        ? layers
                        : page.layers.filter(keep).map(release),
                  })),
                }
              : { ...synced, layers };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection((prev) => prev.filter((id) => !ids.has(id)));
          break;
        }
        case 'SELECT': {
          setSelection((prev) => {
            const allowed = action.ids.filter((id) => {
              const layer = documentRef.current.layers.find((l) => l.id === id);
              return layer
                ? layerIsSelectable(layer, modeRef.current, documentRef.current.settings)
                : false;
            });
            if (action.additive) {
              const set = new Set(prev);
              for (const id of allowed) {
                if (set.has(id)) set.delete(id);
                else set.add(id);
              }
              return Array.from(set);
            }
            return allowed;
          });
          break;
        }
        case 'UNSELECT_ALL': {
          setSelection([]);
          break;
        }
        case 'REORDER': {
          if (constrained) return;
          setDocument((prev) => {
            const next = {
              ...prev,
              layers: moveLayerInList(prev.layers, action.fromIndex, action.toIndex),
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'COPY_SELECTION': {
          if (constrained) return;
          const ids = new Set(selectionRef.current);
          for (const id of [...ids]) {
            for (const branchId of layerBranchIds(documentRef.current.layers, id)) ids.add(branchId);
          }
          const layers = documentRef.current.layers.filter((layer) => ids.has(layer.id));
          if (layers.length === 0) return;
          const slot: ClipboardSlot = {
            layers: JSON.parse(JSON.stringify(layers)) as Layer[],
            sourcePageId: documentRef.current.activePageId ?? null,
            pastes: 0,
          };
          clipboardRef.current = slot;
          setClipboard(slot);
          break;
        }
        case 'COPY_ALL_LAYERS': {
          if (constrained) return;
          const layers = documentRef.current.layers;
          if (layers.length === 0) return;
          const slot: ClipboardSlot = {
            layers: JSON.parse(JSON.stringify(layers)) as Layer[],
            sourcePageId: documentRef.current.activePageId ?? null,
            pastes: 0,
          };
          clipboardRef.current = slot;
          setClipboard(slot);
          break;
        }
        case 'PASTE':
        case 'PASTE_ITEM':
        case 'PASTE_ITEMS': {
          if (constrained) return;
          const copied = clipboardRef.current;
          if (!copied || copied.layers.length === 0) return;
          const pageId = documentRef.current.activePageId ?? null;
          const samePage = copied.sourcePageId === pageId;
          const pastes = samePage ? copied.pastes + 1 : copied.pastes;
          const copies = duplicateLayers(copied.layers, samePage ? 16 * pastes : 0);
          const nextSlot = { ...copied, pastes };
          clipboardRef.current = nextSlot;
          setClipboard(nextSlot);
          setDocument((prev) => {
            const synced = syncActiveTemplatePage(prev);
            const layers = [...synced.layers, ...copies];
            const next: DesignerDocument =
              synced.pages?.length && synced.activePageId
                ? {
                    ...synced,
                    layers,
                    pages: synced.pages.map((page) =>
                      page.id === synced.activePageId ? { ...page, layers } : page
                    ),
                  }
                : { ...synced, layers };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection(copies.map((layer) => layer.id));
          break;
        }
        case 'SET_VISIBILITY': {
          if (constrained) return;
          setDocument((prev) => {
            if (!prev.layers.some((layer) => layer.id === action.id)) return prev;
            const ids = new Set(layerBranchIds(prev.layers, action.id));
            const layers = prev.layers.map((layer) =>
              ids.has(layer.id) ? { ...layer, visible: action.visible } : layer
            );
            const next = syncActiveTemplatePage({ ...prev, layers });
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'SET_BRANCH': {
          if (constrained) return;
          setDocument((prev) => {
            if (!prev.layers.some((layer) => layer.id === action.id)) return prev;
            const ids = new Set(layerBranchIds(prev.layers, action.id));
            const layers = prev.layers.map((layer) => {
              if (!ids.has(layer.id)) return layer;
              return {
                ...layer,
                ...(action.visible !== undefined ? { visible: action.visible } : {}),
                ...(action.locked !== undefined ? { locked: action.locked } : {}),
              };
            });
            const next = syncActiveTemplatePage({ ...prev, layers });
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'ADD_GROUP': {
          if (constrained) return;
          const group = defaultLayerForType('group');
          group.name = nextGroupName(documentRef.current.layers);
          const selected = new Set(selectionRef.current);
          setDocument((prev) => {
            if (prev.layers.some((layer) => layer.id === group.id)) return prev;
            const layers = prev.layers.map((layer) =>
              selected.has(layer.id) && layer.type !== 'group' ? { ...layer, parentId: group.id } : layer
            );
            layers.push(group);
            const next = syncActiveTemplatePage({ ...prev, layers });
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection([group.id]);
          break;
        }
        case 'PLACE_LAYER': {
          if (constrained) return;
          setDocument((prev) => {
            const moving = prev.layers.find((layer) => layer.id === action.id);
            if (!moving || action.parentId === moving.id) return prev;
            if (moving.type === 'group' && action.parentId) return prev;
            if (action.parentId) {
              const parent = prev.layers.find((layer) => layer.id === action.parentId);
              if (!parent || parent.type !== 'group') return prev;
            }
            const layers = prev.layers.map((layer) => {
              if (layer.id !== action.id) return layer;
              const next = { ...layer };
              if (action.parentId) next.parentId = action.parentId;
              else delete next.parentId;
              return next;
            });
            const fromIndex = layers.findIndex((layer) => layer.id === action.id);
            const toIndex = Math.max(0, Math.min(action.toIndex, layers.length - 1));
            const next = syncActiveTemplatePage({
              ...prev,
              layers: moveLayerInList(layers, fromIndex, toIndex),
            });
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'BRING_FORWARD': {
          if (constrained) return;
          const ids = selectionRef.current;
          setDocument((prev) => {
            const next = { ...prev, layers: nudgeSelected(prev.layers, ids, 'forward') };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'SEND_BACKWARD': {
          if (constrained) return;
          const ids = selectionRef.current;
          setDocument((prev) => {
            const next = { ...prev, layers: nudgeSelected(prev.layers, ids, 'backward') };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'ZOOM_SET': {
          setViewport((prev) => ({
            ...prev,
            zoom: clamp(action.zoom, MIN_ZOOM, MAX_ZOOM),
          }));
          break;
        }
        case 'ZOOM_BY': {
          setViewport((prev) => {
            const nextZoom = clamp(prev.zoom * action.factor, MIN_ZOOM, MAX_ZOOM);
            const anchorX = prev.stageWidth > 0 ? prev.stageWidth / 2 : 0;
            const anchorY = prev.stageHeight > 0 ? prev.stageHeight / 2 : 0;
            return { ...prev, ...zoomAroundPoint(prev, nextZoom, anchorX, anchorY) };
          });
          break;
        }
        case 'STAGE_SIZE': {
          const width = Math.max(0, Math.round(action.width));
          const height = Math.max(0, Math.round(action.height));
          setViewport((prev) => {
            if (prev.stageWidth === width && prev.stageHeight === height) return prev;
            return { ...prev, stageWidth: width, stageHeight: height };
          });
          break;
        }
        case 'ZOOM_RESET': {
          setViewport((prev) => ({ ...prev, fitNonce: prev.fitNonce + 1 }));
          break;
        }
        case 'VIEWPORT_SET': {
          setViewport((prev) => ({
            ...prev,
            zoom: clamp(action.zoom, MIN_ZOOM, MAX_ZOOM),
            panX: action.panX,
            panY: action.panY,
          }));
          break;
        }
        case 'PAN_SET': {
          setViewport((prev) => ({
            ...prev,
            panX: action.panX,
            panY: action.panY,
          }));
          break;
        }
        case 'UNDO': {
          if (historyIndexRef.current <= 0) return;
          historyIndexRef.current -= 1;
          const prevDoc = cloneDocument(historyRef.current[historyIndexRef.current]);
          setDocument(prevDoc);
          documentRef.current = prevDoc;
          setSelection([]);
          bumpHistoryUi();
          emitChanges(prevDoc);
          break;
        }
        case 'REDO': {
          if (historyIndexRef.current >= historyRef.current.length - 1) return;
          historyIndexRef.current += 1;
          const nextDoc = cloneDocument(historyRef.current[historyIndexRef.current]);
          setDocument(nextDoc);
          documentRef.current = nextDoc;
          setSelection([]);
          bumpHistoryUi();
          emitChanges(nextDoc);
          break;
        }
        case 'LOAD_DOCUMENT': {
          applyDocument(cloneDocument(action.document), true);
          setSelection([]);
          break;
        }
        case 'SET_CANVAS_SIZE': {
          if (constrained) return;
          setDocument((prev) => {
            const next = switchDocumentPage(prev, action.width, action.height, action.presetId);
            if (next === prev) return prev;
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'SET_TEMPLATE_PAGE': {
          const synced = syncActiveTemplatePage(documentRef.current);
          const target = synced.pages?.find((page) => page.id === action.pageId);
          if (!target) {
            setViewPageId(action.pageId);
            setSelection([]);
            break;
          }
          setViewPageId(null);
          setDocument((prev) => {
            const current = syncActiveTemplatePage(prev);
            const page = current.pages?.find((item) => item.id === action.pageId);
            if (!page || page.id === prev.activePageId) return prev;
            const next: DesignerDocument = {
              ...current,
              activePageId: page.id,
              canvas: {
                ...current.canvas,
                width: page.width,
                height: page.height,
                presetId: resolveCanvasPresetId(page.width, page.height),
              },
              layers: page.layers.map((layer) => ({ ...layer })),
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection([]);
          break;
        }
        case 'ADD_TEMPLATE_PAGE': {
          if (constrained) return;
          setDocument((prev) => {
            const next = addTemplatePage(prev);
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection([]);
          break;
        }
        case 'REMOVE_TEMPLATE_PAGE': {
          if (constrained) return;
          setDocument((prev) => {
            const next = removeActiveTemplatePage(prev);
            if (!next) return prev;
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection([]);
          break;
        }
        case 'ADD_FONTS': {
          if (constrained || action.fonts.length === 0) return;
          setDocument((prev) => {
            const current = prev.settings?.fonts ?? [];
            const nextFonts = [...current];
            for (const font of action.fonts) {
              const index = nextFonts.findIndex((item) => item.postScriptName === font.postScriptName);
              if (index >= 0) nextFonts[index] = font;
              else nextFonts.push(font);
            }
            const next: DesignerDocument = {
              ...prev,
              settings: { ...prev.settings, brands: prev.settings?.brands ?? {}, fonts: nextFonts },
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'REMOVE_FONT': {
          if (constrained) return;
          setDocument((prev) => {
            const current = prev.settings?.fonts ?? [];
            if (!current.some((font) => font.id === action.id)) return prev;
            const next: DesignerDocument = {
              ...prev,
              settings: {
                ...prev.settings,
                brands: prev.settings?.brands ?? {},
                fonts: current.filter((font) => font.id !== action.id),
              },
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'REPLACE_FONT': {
          if (constrained) return;
          const from = action.from.trim();
          if (!from) return;
          const replacement = action.font;
          setDocument((prev) => {
            const synced = syncActiveTemplatePage(prev);
            const replaceLayer = (layer: Layer): Layer => {
              if (layer.type !== 'text' || layer.fontFamily?.trim() !== from) return layer;
              if (!replacement) {
                return { ...layer, fontFamily: undefined, fontWeight: undefined, fontStyle: undefined };
              }
              return {
                ...layer,
                fontFamily: replacement.postScriptName,
                fontWeight: replacement.weight,
                fontStyle: replacement.style,
              };
            };
            const layers = synced.layers.map(replaceLayer);
            const next: DesignerDocument = {
              ...synced,
              layers,
              pages: synced.pages?.map((page) => ({
                ...page,
                layers: page.id === synced.activePageId ? layers : page.layers.map(replaceLayer),
              })),
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'SET_BRAND_OPTION': {
          setDocument((prev) => {
            const next: DesignerDocument = {
              ...prev,
              settings: {
                ...prev.settings,
                brands: { ...prev.settings?.brands, [action.slot]: action.option },
              },
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          setSelection([]);
          break;
        }
        case 'PUSH_LAYER_TO_ALL_PAGES': {
          if (constrained) return;
          setDocument((prev) => {
            const next: DesignerDocument = {
              ...prev,
              layers: prev.layers.map((layer) => {
                if (layer.id !== action.id) return layer;
                return { ...layer, ...pushLayerToAllPages(layer, prev.canvas) };
              }),
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'SET_FIELD_VALUE': {
          if (!constrained) return;
          const nextValues = { ...fieldValuesRef.current };
          if (action.value.trim()) nextValues[action.fieldId] = action.value;
          else delete nextValues[action.fieldId];
          fieldValuesRef.current = nextValues;
          setFieldValues(nextValues);
          emitChanges(documentRef.current);
          break;
        }
        case 'SET_FIELD_LABEL': {
          if (constrained) return;
          if (!action.label.trim()) return;
          setDocument((prev) => {
            if (!prev.fields?.some((field) => field.id === action.fieldId)) return prev;
            const next: DesignerDocument = {
              ...prev,
              fields: prev.fields.map((field) =>
                field.id === action.fieldId ? { ...field, label: action.label } : field
              ),
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'SET_LAYER_FIELD': {
          if (constrained) return;
          setDocument((prev) => {
            if (action.fieldId && !prev.fields?.some((field) => field.id === action.fieldId)) return prev;
            const apply = (layer: Layer): Layer => {
              if (layer.id !== action.layerId || layer.continuesFrom) return layer;
              if (!action.fieldId) {
                const cleared = { ...layer };
                delete cleared.fieldId;
                return cleared;
              }
              return { ...layer, fieldId: action.fieldId };
            };
            const layers = prev.layers.map(apply);
            const next: DesignerDocument = prev.pages
              ? {
                  ...prev,
                  layers,
                  pages: prev.pages.map((page) => ({
                    ...page,
                    layers: page.id === prev.activePageId ? layers : page.layers.map(apply),
                  })),
                }
              : { ...prev, layers };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'ADD_MAGIC_STRINGS': {
          if (constrained) return;
          setDocument((prev) => {
            const next = assignMagicStrings(prev);
            if (next === prev) return prev;
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'COMMIT': {
          setDocument((prev) => {
            pushHistory(prev);
            emitChanges(prev);
            return prev;
          });
          break;
        }
        default:
          break;
      }
    },
    [applyDocument, bumpHistoryUi, emitChanges, pushHistory]
  );

  const exportDocument = useCallback(
    () => cloneDocument(syncActiveTemplatePage(document)),
    [document]
  );

  const importDocumentJson = useCallback(
    (json: string) => {
      if (modeUsesTemplatePolicy(modeRef.current)) return false;
      try {
        const parsed = parseDesignerDocument(JSON.parse(json));
        if (!parsed) return false;
        templateBaselineRef.current = cloneDocument(parsed);
        applyDocument(parsed, true);
        setSelection([]);
        return true;
      } catch {
        return false;
      }
    },
    [applyDocument]
  );

  // Keep admin baseline aligned with the working template document.
  useEffect(() => {
    if (mode === 'admin' && initialDocument) {
      templateBaselineRef.current = cloneDocument(initialDocument);
    }
    if (modeUsesTemplatePolicy(mode) && templateDocument) {
      templateBaselineRef.current = cloneDocument(templateDocument);
    }
  }, [initialDocument, templateDocument, mode]);

  const outputDocument = useMemo(() => {
    const resolved = modeUsesTemplatePolicy(mode) ? resolveFieldText(document, fieldValues) : document;
    if (!modeUsesTemplatePolicy(mode) || !viewPageId || !resolved.pages) return resolved;
    const page = resolved.pages.find((item) => item.id === viewPageId);
    if (!page) return resolved;
    return {
      ...resolved,
      activePageId: page.id,
      layers: page.layers,
      canvas: { ...resolved.canvas, width: page.width, height: page.height },
    };
  }, [mode, document, fieldValues, viewPageId]);

  const value = useMemo<DesignerStoreValue>(
    () => ({
      mode,
      templateId,
      document,
      outputDocument,
      fieldValues,
      selection,
      viewport,
      canUndo: historyIndexRef.current > 0,
      canRedo: historyIndexRef.current < historyRef.current.length - 1,
      canPaste: Boolean(clipboard?.layers.length),
      dispatch,
      exportDocument,
      importDocumentJson,
    }),
    [
      mode,
      templateId,
      document,
      outputDocument,
      fieldValues,
      selection,
      viewport,
      clipboard,
      dispatch,
      exportDocument,
      importDocumentJson,
      historyTick,
    ]
  );

  return (
    <DesignerStoreContext.Provider value={value}>{children}</DesignerStoreContext.Provider>
  );
}

function useDesignerStore(): DesignerStoreValue {
  const ctx = useContext(DesignerStoreContext);
  if (!ctx) {
    throw new Error('useDesignerStore must be used within DesignerProvider');
  }
  return ctx;
}

export function useDesignerMode(): DesignerMode {
  return useDesignerStore().mode;
}

export function useDesignerDocument(): DesignerDocument {
  return useDesignerStore().document;
}

export function useOutputDocument(): DesignerDocument {
  return useDesignerStore().outputDocument;
}

export function useFieldValues(): Record<string, string> {
  return useDesignerStore().fieldValues;
}

export function useLayers(): Layer[] {
  return useDesignerStore().document.layers;
}

export function useSelection(): string[] {
  return useDesignerStore().selection;
}

export function useViewport(): ViewportState {
  return useDesignerStore().viewport;
}

export function useDesignerAction(): (action: DesignerAction) => void {
  return useDesignerStore().dispatch;
}

export function useDesignerApi() {
  const store = useDesignerStore();
  return {
    mode: store.mode,
    canUndo: store.canUndo,
    canRedo: store.canRedo,
    canPaste: store.canPaste,
    exportDocument: store.exportDocument,
    importDocumentJson: store.importDocumentJson,
    dispatch: store.dispatch,
  };
}
