export class PdfSafetyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PdfSafetyError";
  }
}

export class TemplateValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TemplateValidationError";
  }
}

export class FontResolutionError extends Error {
  readonly code: "missing-family" | "missing-file";

  constructor(message: string, code: "missing-family" | "missing-file") {
    super(message);
    this.name = "FontResolutionError";
    this.code = code;
  }
}

export class FormatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FormatError";
  }
}

export class GeneratedAtError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GeneratedAtError";
  }
}
