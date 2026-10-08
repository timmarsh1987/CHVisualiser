import { describe, expect, it } from "vitest";
import { bindingLabel, resolveBinding } from "../src/index.js";

const data = {
  Product: {
    Name: "Hex nut",
    ProductStandard: {
      Title: "NYLK.NE.N5.Z",
      DimensionRows: [{ Size: "1/4" }, { Size: "3/8" }],
    },
  },
  Empty: null,
};

describe("resolveBinding", () => {
  it("reads a property path", () => {
    const binding = { kind: "property" as const, path: "Product.Name" };
    expect(bindingLabel(binding)).toBe("Product.Name");
    expect(resolveBinding(binding, data)).toEqual({ status: "ok", value: "Hex nut" });
  });

  it("reads a relation path and then the property", () => {
    const binding = { kind: "relation" as const, path: "Product>ProductStandard", property: "Title" };
    expect(bindingLabel(binding)).toBe("Product>ProductStandard>Title");
    expect(resolveBinding(binding, data)).toEqual({ status: "ok", value: "NYLK.NE.N5.Z" });
  });

  it("returns a repeating array", () => {
    const binding = { kind: "repeating" as const, path: "Product>ProductStandard>DimensionRows" };
    expect(bindingLabel(binding)).toBe("Product>ProductStandard>DimensionRows");
    const resolved = resolveBinding(binding, data);
    expect(resolved.status).toBe("ok");
    if (resolved.status === "ok") expect(resolved.value).toHaveLength(2);
  });

  it("reads a property from the first related record", () => {
    const related = {
      PCMProductStatusToProduct: [{ ProductStatusName: "Approved" }],
      PCMProductToMasterAsset: [{ id: 60735, FileName: "pill-image-1.jpg" }],
    };
    expect(
      resolveBinding(
        { kind: "relation", path: "PCMProductStatusToProduct", property: "ProductStatusName" },
        related,
      ),
    ).toEqual({ status: "ok", value: "Approved" });
    expect(
      resolveBinding({ kind: "relation", path: "PCMProductToMasterAsset", property: "FileName" }, related),
    ).toEqual({ status: "ok", value: "pill-image-1.jpg" });
  });

  it("reads a property whose name contains dots", () => {
    expect(resolveBinding({ kind: "property", path: "M.PCM.Product.IsVariant" }, { "M.PCM.Product.IsVariant": false })).toEqual({
      status: "ok",
      value: false,
    });
  });

  it("reports missing paths as unbound", () => {
    expect(resolveBinding({ kind: "property", path: "Product.Missing" }, data)).toEqual({
      status: "unbound",
      path: "Product.Missing",
    });
    expect(resolveBinding({ kind: "property", path: "Empty" }, data).status).toBe("unbound");
    expect(
      resolveBinding({ kind: "repeating", path: "Product>Name" }, data),
    ).toEqual({ status: "unbound", path: "Product>Name" });
  });

  it("reports computed bindings as unsupported and does not evaluate them", () => {
    const binding = { kind: "computed" as const, expression: "process.exit(1)" };
    expect(bindingLabel(binding)).toBe("process.exit(1)");
    expect(resolveBinding(binding, data)).toEqual({ status: "unsupported", path: "process.exit(1)" });
  });
});
