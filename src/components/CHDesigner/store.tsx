import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cloneDocument, createSeedDocument, defaultLayerForType, parseDesignerDocument } from './document';
import {
  DEFAULT_ZOOM,
  MAX_ZOOM,
  MIN_LAYER_SIZE,
  MIN_ZOOM,
  type DesignerAction,
  type DesignerDocument,
  type Layer,
  type ViewportState,
} from './types';
import { clamp } from './coords';

const MAX_HISTORY = 50;

interface DesignerStoreValue {
  document: DesignerDocument;
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

export function DesignerProvider({ children }: { children: React.ReactNode }) {
  const seedRef = useRef<DesignerDocument | null>(null);
  if (!seedRef.current) {
    seedRef.current = createSeedDocument();
  }

  const [document, setDocument] = useState<DesignerDocument>(() => cloneDocument(seedRef.current!));
  const [selection, setSelection] = useState<string[]>([]);
  const [viewport, setViewport] = useState<ViewportState>({
    zoom: DEFAULT_ZOOM,
    panX: 40,
    panY: 40,
  });
  const historyRef = useRef<DesignerDocument[]>([cloneDocument(seedRef.current)]);
  const historyIndexRef = useRef(0);
  const [historyTick, setHistoryTick] = useState(0);
  const selectionRef = useRef(selection);
  selectionRef.current = selection;

  const bumpHistoryUi = useCallback(() => setHistoryTick((n) => n + 1), []);

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
      if (recordHistory) {
        pushHistory(nextDoc);
      }
    },
    [pushHistory]
  );

  const dispatch = useCallback(
    (action: DesignerAction) => {
      switch (action.type) {
        case 'ADD_LAYER': {
          const layer = defaultLayerForType(action.layerType, action.at);
          setDocument((prev) => {
            const next = { ...prev, layers: [...prev.layers, layer] };
            pushHistory(next);
            return next;
          });
          setSelection([layer.id]);
          break;
        }
        case 'UPDATE_LAYER': {
          const push = action.pushHistory !== false;
          setDocument((prev) => {
            const next: DesignerDocument = {
              ...prev,
              layers: prev.layers.map((layer) => {
                if (layer.id !== action.id) return layer;
                const patched: Layer = { ...layer, ...action.patch };
                if (typeof patched.width === 'number') {
                  patched.width = Math.max(MIN_LAYER_SIZE, patched.width);
                }
                if (typeof patched.height === 'number') {
                  patched.height = Math.max(MIN_LAYER_SIZE, patched.height);
                }
                return patched;
              }),
            };
            if (push) pushHistory(next);
            return next;
          });
          break;
        }
        case 'DELETE_LAYERS': {
          const ids = new Set(action.ids ?? selectionRef.current);
          if (ids.size === 0) return;
          setDocument((prev) => {
            const next = {
              ...prev,
              layers: prev.layers.filter((layer) => !ids.has(layer.id)),
            };
            pushHistory(next);
            return next;
          });
          setSelection((prev) => prev.filter((id) => !ids.has(id)));
          break;
        }
        case 'SELECT': {
          setSelection((prev) => {
            if (action.additive) {
              const set = new Set(prev);
              for (const id of action.ids) {
                if (set.has(id)) set.delete(id);
                else set.add(id);
              }
              return Array.from(set);
            }
            return action.ids;
          });
          break;
        }
        case 'UNSELECT_ALL': {
          setSelection([]);
          break;
        }
        case 'REORDER': {
          setDocument((prev) => {
            const next = {
              ...prev,
              layers: moveLayerInList(prev.layers, action.fromIndex, action.toIndex),
            };
            pushHistory(next);
            return next;
          });
          break;
        }
        case 'SET_VISIBILITY': {
          setDocument((prev) => {
            const next = {
              ...prev,
              layers: prev.layers.map((layer) =>
                layer.id === action.id ? { ...layer, visible: action.visible } : layer
              ),
            };
            pushHistory(next);
            return next;
          });
          break;
        }
        case 'BRING_FORWARD': {
          const ids = selectionRef.current;
          setDocument((prev) => {
            const next = { ...prev, layers: nudgeSelected(prev.layers, ids, 'forward') };
            pushHistory(next);
            return next;
          });
          break;
        }
        case 'SEND_BACKWARD': {
          const ids = selectionRef.current;
          setDocument((prev) => {
            const next = { ...prev, layers: nudgeSelected(prev.layers, ids, 'backward') };
            pushHistory(next);
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
          setViewport({ zoom: DEFAULT_ZOOM, panX: 40, panY: 40 });
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
          setDocument(cloneDocument(historyRef.current[historyIndexRef.current]));
          setSelection([]);
          bumpHistoryUi();
          break;
        }
        case 'REDO': {
          if (historyIndexRef.current >= historyRef.current.length - 1) return;
          historyIndexRef.current += 1;
          setDocument(cloneDocument(historyRef.current[historyIndexRef.current]));
          setSelection([]);
          bumpHistoryUi();
          break;
        }
        case 'LOAD_DOCUMENT': {
          applyDocument(cloneDocument(action.document), true);
          setSelection([]);
          break;
        }
        case 'COMMIT': {
          setDocument((prev) => {
            pushHistory(prev);
            return prev;
          });
          break;
        }
        default:
          break;
      }
    },
    [applyDocument, bumpHistoryUi, pushHistory]
  );

  const exportDocument = useCallback(() => cloneDocument(document), [document]);

  const importDocumentJson = useCallback(
    (json: string) => {
      try {
        const parsed = parseDesignerDocument(JSON.parse(json));
        if (!parsed) return false;
        applyDocument(parsed, true);
        setSelection([]);
        return true;
      } catch {
        return false;
      }
    },
    [applyDocument]
  );

  const value = useMemo<DesignerStoreValue>(
    () => ({
      document,
      selection,
      viewport,
      canUndo: historyIndexRef.current > 0,
      canRedo: historyIndexRef.current < historyRef.current.length - 1,
      dispatch,
      exportDocument,
      importDocumentJson,
    }),
    [document, selection, viewport, dispatch, exportDocument, importDocumentJson, historyTick]
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

export function useDesignerDocument(): DesignerDocument {
  return useDesignerStore().document;
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
    canUndo: store.canUndo,
    canRedo: store.canRedo,
    exportDocument: store.exportDocument,
    importDocumentJson: store.importDocumentJson,
    dispatch: store.dispatch,
  };
}
