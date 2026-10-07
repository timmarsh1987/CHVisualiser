export function canonicalJson(value: unknown): string {
  if (value === undefined) {
    throw new Error("canonicalJson does not accept undefined.");
  }
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return JSON.stringify(value);
  }
  if (typeof value === "bigint") {
    throw new Error("canonicalJson only accepts JSON values.");
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalJson(item)).join(",")}]`;
  }
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record)
      .filter((key) => record[key] !== undefined)
      .sort();
    const body = keys
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`)
      .join(",");
    return `{${body}}`;
  }
  throw new Error("canonicalJson only accepts JSON values.");
}

export async function hashInput(data: unknown): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error("SHA-256 is not available in this runtime.");
  }
  const encoded = new TextEncoder().encode(canonicalJson(data));
  const digest = await subtle.digest("SHA-256", encoded);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
