import { FormatError } from "./errors.js";
import type { Format } from "./schema.js";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

const CULTURE = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/;

export function applyFormat(value: unknown, format?: Format, language = "en"): string {
  if (format === undefined) return stringifyPlain(value, language);
  switch (format.kind) {
    case "date":
      return formatDate(value, format.pattern);
    case "number":
      return formatNumber(value, format.decimals);
    case "case":
      return format.case === "upper"
        ? stringifyPlain(value, language).toLocaleUpperCase("en-US")
        : stringifyPlain(value, language).toLocaleLowerCase("en-US");
    case "prefix":
      return `${format.text}${stringifyPlain(value, language)}`;
    case "suffix":
      return `${stringifyPlain(value, language)}${format.text}`;
  }
}

export function stringifyPlain(value: unknown, language = "en"): string {
  const stored = readStoredText(value, language);
  if (stored !== null) return stored;
  if (typeof value === "string") return value;
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new FormatError("Value is not a number.");
    return String(value);
  }
  if (typeof value === "boolean") return value ? "true" : "false";
  throw new FormatError("This binding did not resolve to text.");
}

function readStoredText(value: unknown, language: string): string | null {
  if (!isRecord(value)) return null;
  if (typeof value.identifier === "string" && isRecord(value.labels)) {
    return cultureText(value.labels, language) ?? value.identifier;
  }
  const keys = Object.keys(value);
  if (keys.length === 0) return "";
  if (keys.every((key) => CULTURE.test(key) && typeof value[key] === "string")) {
    return cultureText(value, language) ?? "";
  }
  return null;
}

function cultureText(record: Record<string, unknown>, language: string): string | null {
  const entries = Object.entries(record).filter((entry): entry is [string, string] => typeof entry[1] === "string");
  if (entries.length === 0) return null;
  const wanted = language.toLowerCase();
  const exact = entries.find(([key]) => key.toLowerCase() === wanted);
  if (exact) return exact[1];
  const primary = wanted.split("-")[0] ?? wanted;
  const prefixed = entries.find(([key]) => {
    const tag = key.toLowerCase();
    return tag === primary || tag.startsWith(`${primary}-`);
  });
  return prefixed ? prefixed[1] : entries[0][1];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof Date);
}

function formatNumber(value: unknown, decimals: number | undefined): string {
  const numeric = typeof value === "number" ? value : typeof value === "string" ? Number(value) : Number.NaN;
  if (!Number.isFinite(numeric)) throw new FormatError("Value is not a number.");
  if (decimals === undefined) return String(numeric);
  return numeric.toFixed(decimals);
}

function formatDate(value: unknown, pattern: "YYYY-MM-DD" | "DD MMM YYYY"): string {
  const date = parseDate(value);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const monthNumber = String(month + 1).padStart(2, "0");
  const dayNumber = String(day).padStart(2, "0");
  if (pattern === "YYYY-MM-DD") return `${year}-${monthNumber}-${dayNumber}`;
  return `${dayNumber} ${MONTHS[month]} ${year}`;
}

function parseDate(value: unknown): Date {
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) throw new FormatError("Value is not a date.");
    return value;
  }
  if (typeof value !== "string") throw new FormatError("Value is not a date.");
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (dateOnly) {
    const year = Number(dateOnly[1]);
    const month = Number(dateOnly[2]);
    const day = Number(dateOnly[3]);
    const date = new Date(Date.UTC(year, month - 1, day));
    if (
      date.getUTCFullYear() !== year ||
      date.getUTCMonth() !== month - 1 ||
      date.getUTCDate() !== day
    ) {
      throw new FormatError("Value is not a date.");
    }
    return date;
  }
  if (!/^\d{4}-\d{2}-\d{2}T/.test(value)) throw new FormatError("Value is not a date.");
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw new FormatError("Value is not a date.");
  return date;
}
