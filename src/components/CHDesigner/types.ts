export type LayerType = 'frame' | 'rect' | 'text' | 'image' | 'group';

export type TextAlign = 'left' | 'middle' | 'right';

/** Admin builds the template. End user and publication edit an instance; publication hides layout tools. */
export type DesignerMode = 'admin' | 'endUser' | 'publication';

export type LayerRole = 'static' | 'text' | 'brand' | 'picker' | 'hidden';

export type LayerSlot = 'lhs' | 'rhs' | 'image' | 'logo' | 'partnerLogo';

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
  /**
   * Portion of `text` drawn in this frame when the story continues on another page.
   * The start frame keeps the full story in `text`.
   */
  flowText?: string;
  /** Overflow from this frame continues on the next page. */
  flowOverflow?: boolean;
  /** Start frame that owns the full story, when this frame is a continuation. */
  continuesFrom?: string;
  fontSize?: number;
  /** CSS family. A loaded font is matched by this PostScript or family name. */
  fontFamily?: string;
  /** Used when the face was added as a weight of a shared family. */
  fontWeight?: number;
  fontStyle?: 'normal' | 'italic';
  /** Horizontal alignment inside the frame. Defaults to left, or right for RTL. */
  align?: TextAlign;
  /** Font size fits the box, and refits when the box or the text changes. */
  dynamicSize?: boolean;
  color?: string;
  src?: string;
  /** Pin to canvas edges so page-size changes keep insets. Undefined = infer until any pin is set. */
  pinLeft?: boolean;
  pinRight?: boolean;
  pinTop?: boolean;
  pinBottom?: boolean;
  /** Inset from a pinned edge, in canvas pixels. */
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  /** Per page-size geometry so switching A4/landscape etc. restores this item. */
  pageLayouts?: Record<string, LayerPageLayout>;
  /** How an image fills its box after the page size changes. */
  objectFit?: 'cover' | 'contain';
  /** InDesign layer this item was imported from. */
  sourceLayerId?: string;
  sourceLayerName?: string;
  role?: LayerRole;
  /** Brand side or picker kind, when role is brand or picker. */
  slot?: LayerSlot;
  /** Brand name for a brand-slot layer, such as Hampton. */
  option?: string;
  direction?: 'ltr' | 'rtl';
  /** Magic-string field whose value replaces this frame’s story on an output. */
  fieldId?: string;
  /** Group this layer sits inside. Groups are folders in the layers panel, not drawn on the page. */
  parentId?: string;
}

export interface DesignerField {
  id: string;
  /** Magic string body, without braces. `dish_name` is shown as `{{dish_name}}`. */
  key: string;
  /** Name shown when someone fills the field. */
  label: string;
}

export interface DesignerTemplatePage {
  id: string;
  name: string;
  width: number;
  height: number;
  layers: Layer[];
}

export interface DesignerFont {
  id: string;
  family: string;
  postScriptName: string;
  weight: number;
  style: 'normal' | 'italic';
  /** File bytes, so a saved document still has the face. */
  dataUrl: string;
}

export interface DesignerSettings {
  /** Selected brand option id, keyed by slot (`lhs`, `rhs`). */
  brands: Record<string, string>;
  /** Customer OTF and TTF faces for text layers. */
  fonts?: DesignerFont[];
}

export interface LayerPageLayout {
  x: number;
  y: number;
  width: number;
  height: number;
  pinLeft: boolean;
  pinRight: boolean;
  pinTop: boolean;
  pinBottom: boolean;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
}

export interface DesignerCanvasSize {
  width: number;
  height: number;
  background?: string;
  presetId?: string;
}

export interface DesignerDocument {
  version: 1;
  canvas: DesignerCanvasSize;
  /** Layers of the active template page. */
  layers: Layer[];
  /** Every page imported from a template. Absent on hand-built documents. */
  pages?: DesignerTemplatePage[];
  activePageId?: string;
  settings?: DesignerSettings;
  /** Magic-string catalog. Sample copy stays on each layer. */
  fields?: DesignerField[];
}

export type LayerOverride = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rotation?: number;
  text?: string;
  fill?: string;
  color?: string;
  src?: string;
};

export interface DesignerInstanceDocument {
  version: 1;
  templateId: string;
  overrides: Record<string, LayerOverride>;
  /** Entered values keyed by field id. An empty or missing value keeps the sample. */
  fields?: Record<string, string>;
}

export interface ViewportState {
  zoom: number;
  panX: number;
  panY: number;
  /** Bumped to ask the canvas to fit the page into the stage. */
  fitNonce: number;
  /** Stage size in screen pixels, used to zoom around the center. */
  stageWidth: number;
  stageHeight: number;
}

export type DesignerAction =
  | { type: 'ADD_LAYER'; layerType: LayerType; at?: { x: number; y: number } }
  | { type: 'UPDATE_LAYER'; id: string; patch: Partial<Layer>; pushHistory?: boolean }
  | { type: 'DELETE_LAYERS'; ids?: string[] }
  | { type: 'SELECT'; ids: string[]; additive?: boolean }
  | { type: 'UNSELECT_ALL' }
  | { type: 'REORDER'; fromIndex: number; toIndex: number }
  | { type: 'SET_VISIBILITY'; id: string; visible: boolean }
  | { type: 'SET_BRANCH'; id: string; visible?: boolean; locked?: boolean }
  | { type: 'ADD_GROUP' }
  | { type: 'PLACE_LAYER'; id: string; parentId: string | null; toIndex: number }
  | { type: 'COPY_SELECTION' }
  | { type: 'COPY_ALL_LAYERS' }
  | { type: 'PASTE' }
  | { type: 'PASTE_ITEM' }
  | { type: 'PASTE_ITEMS' }
  | { type: 'BRING_FORWARD' }
  | { type: 'SEND_BACKWARD' }
  | { type: 'ZOOM_SET'; zoom: number }
  | { type: 'ZOOM_BY'; factor: number }
  | { type: 'ZOOM_RESET' }
  | { type: 'STAGE_SIZE'; width: number; height: number }
  | { type: 'PAN_SET'; panX: number; panY: number }
  | { type: 'VIEWPORT_SET'; zoom: number; panX: number; panY: number }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'LOAD_DOCUMENT'; document: DesignerDocument }
  | { type: 'SET_CANVAS_SIZE'; width: number; height: number; presetId?: string }
  | { type: 'SET_TEMPLATE_PAGE'; pageId: string }
  | { type: 'ADD_TEMPLATE_PAGE' }
  | { type: 'REMOVE_TEMPLATE_PAGE' }
  | { type: 'SET_BRAND_OPTION'; slot: string; option: string }
  | { type: 'ADD_FONTS'; fonts: DesignerFont[] }
  | { type: 'REMOVE_FONT'; id: string }
  | { type: 'REPLACE_FONT'; from: string; font: DesignerFont | null }
  | { type: 'PUSH_LAYER_TO_ALL_PAGES'; id: string }
  | { type: 'SET_FIELD_VALUE'; fieldId: string; value: string }
  | { type: 'SET_FIELD_LABEL'; fieldId: string; label: string }
  | { type: 'SET_LAYER_FIELD'; layerId: string; fieldId: string | null }
  | { type: 'ADD_MAGIC_STRINGS' }
  | { type: 'COMMIT' };

export const MIN_LAYER_SIZE = 24;
export const DEFAULT_ZOOM = 1;
export const MIN_ZOOM = 0.05;
export const MAX_ZOOM = 8;

export const CONTENT_OVERRIDE_KEYS = ['text', 'fill', 'color', 'src'] as const;
export const TRANSFORM_OVERRIDE_KEYS = ['x', 'y', 'width', 'height', 'rotation'] as const;
