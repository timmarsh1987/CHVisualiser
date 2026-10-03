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
import { cloneDocument, createSeedDocument, defaultLayerForType, parseDesignerDocument } from './document';
import { assignMagicStrings, resolveFieldText } from './fields';
import { addTemplatePage, removeActiveTemplatePage, syncActiveTemplatePage } from './templateSettings';
import { reflowTextStory, scaleFontWithBox } from './textFlow';
import {
  diffInstanceOverrides,
  filterEndUserPatch,
  layerIsSelectable,
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
import { clamp } from './coords';

const MAX_HISTORY = 50;

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
  });
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
    if (modeRef.current === 'endUser') {
      const id = templateIdRef.current ?? '';
      onInstanceChangeRef.current?.(
        diffInstanceOverrides(templateBaselineRef.current, nextDoc, id, fieldValuesRef.current)
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
      const isEndUser = modeRef.current === 'endUser';

      switch (action.type) {
        case 'ADD_LAYER': {
          if (isEndUser) return;
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
              const patch = isEndUser ? filterEndUserPatch(layer, action.patch) : action.patch;
              if (Object.keys(patch).length === 0) return layer;
              const patched: Layer = { ...layer, ...patch };
              if (typeof patched.width === 'number') {
                patched.width = Math.max(MIN_LAYER_SIZE, patched.width);
              }
              if (typeof patched.height === 'number') {
                patched.height = Math.max(MIN_LAYER_SIZE, patched.height);
              }
              const scaled = scaleFontWithBox(layer, patched, action.patch);
              return isEndUser || !persistLayout ? scaled : persistCurrentPageLayout(scaled, prev.canvas);
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
          if (isEndUser) return;
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
            const layers = synced.layers.filter(keep);
            const next: DesignerDocument = synced.pages
              ? {
                  ...synced,
                  layers,
                  pages: synced.pages.map((page) => ({
                    ...page,
                    layers: page.id === synced.activePageId ? layers : page.layers.filter(keep),
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
          if (isEndUser) return;
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
        case 'SET_VISIBILITY': {
          if (isEndUser) return;
          setDocument((prev) => {
            const next = {
              ...prev,
              layers: prev.layers.map((layer) =>
                layer.id === action.id ? { ...layer, visible: action.visible } : layer
              ),
            };
            pushHistory(next);
            emitChanges(next);
            return next;
          });
          break;
        }
        case 'BRING_FORWARD': {
          if (isEndUser) return;
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
          if (isEndUser) return;
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
          if (isEndUser) return;
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
          if (isEndUser) return;
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
          if (isEndUser) return;
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
        case 'SET_BRAND_OPTION': {
          setDocument((prev) => {
            const next: DesignerDocument = {
              ...prev,
              settings: {
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
          if (isEndUser) return;
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
          if (!isEndUser) return;
          const nextValues = { ...fieldValuesRef.current };
          if (action.value.trim()) nextValues[action.fieldId] = action.value;
          else delete nextValues[action.fieldId];
          fieldValuesRef.current = nextValues;
          setFieldValues(nextValues);
          emitChanges(documentRef.current);
          break;
        }
        case 'SET_FIELD_LABEL': {
          if (isEndUser) return;
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
          if (isEndUser) return;
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
          if (isEndUser) return;
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
      if (modeRef.current === 'endUser') return false;
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
    if (mode === 'endUser' && templateDocument) {
      templateBaselineRef.current = cloneDocument(templateDocument);
    }
  }, [initialDocument, templateDocument, mode]);

  const outputDocument = useMemo(() => {
    const resolved = mode === 'endUser' ? resolveFieldText(document, fieldValues) : document;
    if (mode !== 'endUser' || !viewPageId || !resolved.pages) return resolved;
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
    exportDocument: store.exportDocument,
    importDocumentJson: store.importDocumentJson,
    dispatch: store.dispatch,
  };
}
