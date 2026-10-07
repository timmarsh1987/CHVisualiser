export { bindingLabel, resolveBinding } from "./bindings.js";
export type { BindingResolution } from "./bindings.js";
export { parseColor } from "./color.js";
export type { RgbColor } from "./color.js";
export { firstBaseline, topLeftRectToPdf } from "./coords.js";
export type { Rect } from "./coords.js";
export {
  FontResolutionError,
  FormatError,
  GeneratedAtError,
  PdfSafetyError,
  TemplateValidationError,
} from "./errors.js";
export { loadDefaultFonts } from "./fontFiles.js";
export { createFontMetrics, LIBERATION_SANS, resolveFontFace } from "./fonts.js";
export type { FontFaceSelection, FontMetrics } from "./fonts.js";
export { applyFormat, stringifyPlain } from "./format.js";
export { parseGeneratedAt } from "./generatedAt.js";
export { canonicalJson, hashInput } from "./hash.js";
export { assertPdfSafe, bytesInclude } from "./pdfSafety.js";
export { renderDocument } from "./render.js";
export type { RenderResources, RenderResult } from "./render.js";
export { emptyRegionReport } from "./report.js";
export type { LayoutReport, RegionReport, RegionStatus } from "./report.js";
export { formatSchemaIssues, parseDataContext, parseTemplate, templateSchema } from "./schema.js";
export type {
  Binding,
  DataContext,
  FlowBlock,
  FlowLayout,
  FlowRow,
  FontDef,
  Format,
  PageDef,
  Region,
  StaticTextRegion,
  Template,
  TextRegion,
  TextStyle,
} from "./schema.js";
export { columnWidth, layoutFlow, readImageSize, spanWidth } from "./flowLayout.js";
export { resolveStyle } from "./style.js";
export type { ResolvedStyle } from "./style.js";
export {
  ellipsizeLine,
  fontSizeCandidates,
  layoutText,
  lineX,
  maxLinesThatFit,
  truncateToFit,
  wrapLines,
} from "./textLayout.js";
export type { LayoutLine, LayoutTextOptions, TextLayout } from "./textLayout.js";
