import { GeneratedAtError } from "./errors.js";

const GENERATED_AT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/;

export function parseGeneratedAt(value: string): Date {
  if (!GENERATED_AT.test(value)) {
    throw new GeneratedAtError("generatedAt must be an ISO-8601 UTC timestamp.");
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new GeneratedAtError("generatedAt must be an ISO-8601 UTC timestamp.");
  }
  return date;
}
