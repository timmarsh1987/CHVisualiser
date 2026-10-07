export interface LayoutLine {
  text: string;
  width: number;
}

export interface TextLayout {
  lines: LayoutLine[];
  fontSize: number;
  truncated: boolean;
  overflow: boolean;
  draw: boolean;
  missingGlyphs: string[];
}

export interface LayoutTextOptions {
  text: string;
  measure: (text: string, fontSize: number) => number;
  missingGlyphs?: (text: string) => string[];
  maxWidth: number;
  maxHeight: number;
  fontSize: number;
  minSize: number;
  lineHeight: number;
  overflow: "shrink" | "truncate" | "error";
  maxLines?: number;
}

const SIZE_STEP = 0.25;

export function fontSizeCandidates(fontSize: number, minSize: number): number[] {
  if (fontSize <= 0 || minSize <= 0) {
    throw new Error("Font size and minimum size must be positive.");
  }
  const max = Math.max(fontSize, minSize);
  const min = Math.min(fontSize, minSize);
  const sizes: number[] = [];
  const count = Math.round((max - min) / SIZE_STEP);
  for (let index = 0; index <= count; index += 1) {
    const size = Number((max - index * SIZE_STEP).toFixed(2));
    if (size + 0.001 < min) break;
    sizes.push(size);
  }
  const minRounded = Number(min.toFixed(2));
  const last = sizes[sizes.length - 1];
  if (last === undefined || last > minRounded + 0.001) {
    sizes.push(minRounded);
  }
  return sizes;
}

export function maxLinesThatFit(
  maxHeight: number,
  fontSize: number,
  lineHeight: number,
  maxLines?: number,
): number {
  const box = fontSize * lineHeight;
  if (box <= 0 || maxHeight <= 0) return 0;
  const byHeight = Math.floor((maxHeight + 0.001) / box);
  if (maxLines === undefined) return Math.max(0, byHeight);
  return Math.max(0, Math.min(maxLines, byHeight));
}

export function wrapLines(
  text: string,
  maxWidth: number,
  measure: (line: string) => number,
): string[] {
  if (text.length === 0) return [];
  const lines: string[] = [];
  for (const paragraph of text.split("\n")) {
    const words = paragraph.split(/[ \t]+/).filter((word) => word.length > 0);
    if (words.length === 0) {
      lines.push("");
      continue;
    }
    let current = words[0] ?? "";
    for (let index = 1; index < words.length; index += 1) {
      const word = words[index] ?? "";
      const candidate = `${current} ${word}`;
      if (measure(candidate) <= maxWidth) {
        current = candidate;
      } else {
        lines.push(current);
        current = word;
      }
    }
    lines.push(current);
  }
  return lines;
}

export function ellipsizeLine(
  line: string,
  maxWidth: number,
  measure: (line: string) => number,
): string {
  const ellipsis = "...";
  if (measure(ellipsis) > maxWidth) return "";
  const chars = Array.from(line);
  for (let count = chars.length; count >= 0; count -= 1) {
    const candidate = `${chars.slice(0, count).join("")}${ellipsis}`;
    if (measure(candidate) <= maxWidth) return candidate;
  }
  return "";
}

export function truncateToFit(
  text: string,
  maxWidth: number,
  maxLines: number,
  measure: (line: string) => number,
): { lines: string[]; truncated: boolean } {
  const wrapped = wrapLines(text, maxWidth, measure);
  if (maxLines < 1) return { lines: [], truncated: text.length > 0 };
  const tooWide = wrapped.some((line) => line.length > 0 && measure(line) > maxWidth);
  if (!tooWide && wrapped.length <= maxLines) {
    return { lines: wrapped, truncated: false };
  }
  const kept = wrapped.slice(0, maxLines);
  const more = wrapped.length > maxLines;
  const lines = kept.map((line, index) => {
    const needsEllipsis = measure(line) > maxWidth || (more && index === kept.length - 1);
    return needsEllipsis ? ellipsizeLine(line, maxWidth, measure) : line;
  });
  return { lines, truncated: true };
}

export function lineX(
  align: "left" | "right" | "center",
  rectX: number,
  rectWidth: number,
  lineWidth: number,
): number {
  if (align === "center") return rectX + (rectWidth - lineWidth) / 2;
  if (align === "right") return rectX + rectWidth - lineWidth;
  return rectX;
}

export function layoutText(options: LayoutTextOptions): TextLayout {
  const minSize = Math.min(options.fontSize, options.minSize);
  const glyphs = options.missingGlyphs?.(options.text) ?? [];
  if (options.text.length === 0) {
    return {
      lines: [],
      fontSize: options.fontSize,
      truncated: false,
      overflow: false,
      draw: false,
      missingGlyphs: [],
    };
  }

  for (const size of fontSizeCandidates(options.fontSize, minSize)) {
    const wrapped = wrapLines(options.text, options.maxWidth, (line) => options.measure(line, size));
    if (linesFit(wrapped, size, options)) {
      return {
        lines: wrapped.map((text) => ({ text, width: options.measure(text, size) })),
        fontSize: size,
        truncated: false,
        overflow: false,
        draw: true,
        missingGlyphs: glyphs,
      };
    }
  }

  if (options.overflow === "error") {
    return {
      lines: [],
      fontSize: minSize,
      truncated: false,
      overflow: true,
      draw: false,
      missingGlyphs: glyphs,
    };
  }

  if (options.overflow === "truncate") {
    const allowed = maxLinesThatFit(options.maxHeight, minSize, options.lineHeight, options.maxLines);
    const truncated = truncateToFit(options.text, options.maxWidth, allowed, (line) =>
      options.measure(line, minSize),
    );
    const drawable = truncated.lines.some((line) => line.length > 0);
    return {
      lines: truncated.lines.map((text) => ({ text, width: options.measure(text, minSize) })),
      fontSize: minSize,
      truncated: truncated.truncated,
      overflow: !drawable,
      draw: drawable,
      missingGlyphs: glyphs,
    };
  }

  const wrapped = wrapLines(options.text, options.maxWidth, (line) => options.measure(line, minSize));
  return {
    lines: wrapped.map((text) => ({ text, width: options.measure(text, minSize) })),
    fontSize: minSize,
    truncated: false,
    overflow: true,
    draw: true,
    missingGlyphs: glyphs,
  };
}

function linesFit(lines: string[], size: number, options: LayoutTextOptions): boolean {
  const allowed = maxLinesThatFit(options.maxHeight, size, options.lineHeight, options.maxLines);
  if (lines.length > allowed) return false;
  return lines.every((line) => line.length === 0 || options.measure(line, size) <= options.maxWidth + 0.01);
}
