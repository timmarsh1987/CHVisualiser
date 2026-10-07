import { PdfSafetyError } from "./errors.js";

const PDF_HEADER = [0x25, 0x50, 0x44, 0x46, 0x2d];

const REJECTED_TOKENS: { token: string; message: string }[] = [
  { token: "/Encrypt", message: "This PDF is encrypted or password protected." },
  { token: "/JavaScript", message: "This PDF contains JavaScript and was rejected." },
  { token: "/JS", message: "This PDF contains JavaScript and was rejected." },
  { token: "/Launch", message: "This PDF contains a launch action and was rejected." },
  { token: "/OpenAction", message: "This PDF contains an open action and was rejected." },
];

export function assertPdfSafe(bytes: Uint8Array): void {
  if (!hasPdfHeader(bytes)) {
    throw new PdfSafetyError("The file is not a PDF.");
  }
  for (const check of REJECTED_TOKENS) {
    if (bytesInclude(bytes, check.token)) {
      throw new PdfSafetyError(check.message);
    }
  }
}

function hasPdfHeader(bytes: Uint8Array): boolean {
  const limit = Math.min(bytes.length, 1024);
  for (let index = 0; index <= limit - PDF_HEADER.length; index += 1) {
    let matched = true;
    for (let offset = 0; offset < PDF_HEADER.length; offset += 1) {
      if (bytes[index + offset] !== PDF_HEADER[offset]) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }
  return false;
}

export function bytesInclude(bytes: Uint8Array, token: string): boolean {
  const needle = new TextEncoder().encode(token);
  if (needle.length === 0 || bytes.length < needle.length) return false;
  const limit = bytes.length - needle.length;
  for (let index = 0; index <= limit; index += 1) {
    let matched = true;
    for (let offset = 0; offset < needle.length; offset += 1) {
      if (bytes[index + offset] !== needle[offset]) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }
  return false;
}
