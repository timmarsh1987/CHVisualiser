import { describe, expect, it } from "vitest";
import { GeneratedAtError, parseGeneratedAt } from "../src/index.js";

describe("parseGeneratedAt", () => {
  it("parses an ISO UTC timestamp", () => {
    expect(parseGeneratedAt("2024-01-02T03:04:05.000Z").toISOString()).toBe("2024-01-02T03:04:05.000Z");
  });

  it("rejects local timestamps and empty strings", () => {
    expect(() => parseGeneratedAt("2024-01-02")).toThrow(GeneratedAtError);
    expect(() => parseGeneratedAt("")).toThrow(/ISO-8601/);
  });
});
