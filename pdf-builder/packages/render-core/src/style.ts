import type { Template } from "./schema.js";
import type { TextStyle } from "./schema.js";

export interface ResolvedStyle {
  fontFamily: string;
  fontSize: number;
  minSize: number;
  color: string;
  align: "left" | "right" | "center";
  lineHeight: number;
  bold: boolean;
  italic: boolean;
}

export function resolveStyle(style: TextStyle, defaults: Template["defaults"]): ResolvedStyle {
  const fontSize = style.fontSize ?? defaults.fontSize;
  return {
    fontFamily: style.fontFamily ?? defaults.fontFamily,
    fontSize,
    minSize: style.minSize ?? fontSize,
    color: style.color ?? defaults.color,
    align: style.align ?? "left",
    lineHeight: style.lineHeight ?? 1.2,
    bold: style.bold ?? false,
    italic: style.italic ?? false,
  };
}
