import type { Binding, DataContext } from "./schema.js";

export type BindingResolution =
  | { status: "ok"; value: unknown }
  | { status: "unbound"; path: string }
  | { status: "unsupported"; path: string };

export function bindingLabel(binding: Binding): string {
  switch (binding.kind) {
    case "property":
      return binding.path;
    case "relation":
      return `${binding.path}>${binding.property}`;
    case "repeating":
      return binding.path;
    case "computed":
      return binding.expression;
  }
}

export function resolveBinding(binding: Binding, data: DataContext): BindingResolution {
  if (binding.kind === "computed") {
    return { status: "unsupported", path: binding.expression };
  }
  if (binding.kind === "property") {
    if (Object.prototype.hasOwnProperty.call(data, binding.path)) {
      const value = data[binding.path];
      if (value === undefined || value === null) return { status: "unbound", path: binding.path };
      return { status: "ok", value };
    }
    const found = readPath(data, binding.path.split("."));
    if (!found.ok) return { status: "unbound", path: binding.path };
    return { status: "ok", value: found.value };
  }
  if (binding.kind === "relation") {
    const found = readPath(data, binding.path.split(">"));
    const record = found.ok ? firstRecord(found.value) : null;
    if (!record || !Object.prototype.hasOwnProperty.call(record, binding.property)) {
      return { status: "unbound", path: bindingLabel(binding) };
    }
    const value = record[binding.property];
    if (value === undefined || value === null) return { status: "unbound", path: bindingLabel(binding) };
    return { status: "ok", value };
  }
  const found = readPath(data, binding.path.split(">"));
  if (!found.ok || !Array.isArray(found.value)) {
    return { status: "unbound", path: binding.path };
  }
  return { status: "ok", value: found.value };
}

function firstRecord(value: unknown): Record<string, unknown> | null {
  if (Array.isArray(value)) return firstRecord(value[0]);
  if (!value || typeof value !== "object") return null;
  return value as Record<string, unknown>;
}

function readPath(root: unknown, segments: string[]): { ok: true; value: unknown } | { ok: false } {
  let current: unknown = root;
  for (const segment of segments) {
    if (current === null || typeof current !== "object" || Array.isArray(current)) {
      return { ok: false };
    }
    const record = current as Record<string, unknown>;
    if (!Object.prototype.hasOwnProperty.call(record, segment)) {
      return { ok: false };
    }
    current = record[segment];
  }
  if (current === undefined || current === null) return { ok: false };
  return { ok: true, value: current };
}
