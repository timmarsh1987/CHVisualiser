import { describe, expect, it } from "vitest";
import { canonicalJson, hashInput } from "../src/index.js";

describe("canonicalJson", () => {
  it("sorts object keys and preserves array order", () => {
    expect(canonicalJson({ b: 1, a: { d: true, c: null } })).toBe('{"a":{"c":null,"d":true},"b":1}');
    expect(canonicalJson(["b", "a"])).toBe('["b","a"]');
    expect(canonicalJson({ z: undefined, a: 1 })).toBe('{"a":1}');
  });

  it("rejects values that are not JSON", () => {
    expect(() => canonicalJson(undefined)).toThrow(/undefined/);
    expect(() => canonicalJson(1n)).toThrow(/JSON values/);
    expect(() => canonicalJson(() => 1)).toThrow(/JSON values/);
  });
});

describe("hashInput", () => {
  it("is stable when only key order changes", async () => {
    const left = await hashInput({ b: 1, a: "nut" });
    const right = await hashInput({ a: "nut", b: 1 });
    expect(left).toBe(right);
    expect(left).toMatch(/^[0-9a-f]{64}$/);
    expect(await hashInput({ a: "bolt" })).not.toBe(left);
  });
});
