export type LayerType = 'frame' | 'rect' | 'text' | 'image';

export type DesignerMode = 'admin' | 'endUser';

export interface Layer {
  id: string;
  type: LayerType;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  visible: boolean;
  /** Admin/end-user: fully locked — no select/move/edit in end-user mode. */
  locked?: boolean;
  /** End user may move/resize (default false). */
  allowTransform?: boolean;
  /** End user may edit text/fill/src (default true for text/image). */
  editableContent?: boolean;
  fill?: string;
  text?: string;
  fontSize?: number;
  color?: string;
  src?: string;
}

export interface DesignerCanvasSize {
  width: number;
  height: number;
  background?: string;
}

export interface DesignerDocument {
  version: 1;
  canvas: DesignerCanvasSize;
  layers: Layer[];
}

export type LayerOverride = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  text?: string;
  fill?: string;
  color?: string;
  src?: string;
};

export interface DesignerInstanceDocument {
  version: 1;
  templateId: string;
  overrides: Record<string, LayerOverride>;
}

export interface ViewportState {
  zoom: number;
  panX: number;
  panY: number;
}

export type DesignerAction =
  | { type: 'ADD_LAYER'; layerType: LayerType; at?: { x: number; y: number } }
  | { type: 'UPDATE_LAYER'; id: string; patch: Partial<Layer>; pushHistory?: boolean }
  | { type: 'DELETE_LAYERS'; ids?: string[] }
  | { type: 'SELECT'; ids: string[]; additive?: boolean }
  | { type: 'UNSELECT_ALL' }
  | { type: 'REORDER'; fromIndex: number; toIndex: number }
  | { type: 'SET_VISIBILITY'; id: string; visible: boolean }
  | { type: 'BRING_FORWARD' }
  | { type: 'SEND_BACKWARD' }
  | { type: 'ZOOM_SET'; zoom: number }
  | { type: 'ZOOM_RESET' }
  | { type: 'PAN_SET'; panX: number; panY: number }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'LOAD_DOCUMENT'; document: DesignerDocument }
  | { type: 'COMMIT' };

export const MIN_LAYER_SIZE = 24;
export const DEFAULT_ZOOM = 1;
export const MIN_ZOOM = 0.25;
export const MAX_ZOOM = 3;

export const CONTENT_OVERRIDE_KEYS = ['text', 'fill', 'color', 'src'] as const;
export const TRANSFORM_OVERRIDE_KEYS = ['x', 'y', 'width', 'height'] as const;
