import { z } from "zod";
import { TemplateValidationError } from "./errors.js";

const hexColor = z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Color must be a #RRGGBB value.");

const rectSchema = z
  .object({
    x: z.number(),
    y: z.number(),
    width: z.number().positive(),
    height: z.number().positive(),
  })
  .strict();

const textStyleSchema = z
  .object({
    fontFamily: z.string().min(1).optional(),
    fontSize: z.number().positive().optional(),
    minSize: z.number().positive().optional(),
    color: hexColor.optional(),
    align: z.enum(["left", "right", "center"]).optional(),
    lineHeight: z.number().positive().optional(),
    bold: z.boolean().optional(),
    italic: z.boolean().optional(),
  })
  .strict();

const propertyBindingSchema = z
  .object({
    kind: z.literal("property"),
    path: z.string().min(1),
  })
  .strict();

const relationBindingSchema = z
  .object({
    kind: z.literal("relation"),
    path: z.string().min(1),
    property: z.string().min(1),
  })
  .strict();

const repeatingBindingSchema = z
  .object({
    kind: z.literal("repeating"),
    path: z.string().min(1),
  })
  .strict();

const computedBindingSchema = z
  .object({
    kind: z.literal("computed"),
    expression: z.string().min(1),
  })
  .strict();

const bindingSchema = z.discriminatedUnion("kind", [
  propertyBindingSchema,
  relationBindingSchema,
  repeatingBindingSchema,
  computedBindingSchema,
]);

const formatSchema = z.discriminatedUnion("kind", [
  z
    .object({
      kind: z.literal("date"),
      pattern: z.enum(["YYYY-MM-DD", "DD MMM YYYY"]),
    })
    .strict(),
  z
    .object({
      kind: z.literal("number"),
      decimals: z.number().int().min(0).max(8).optional(),
    })
    .strict(),
  z
    .object({
      kind: z.literal("case"),
      case: z.enum(["upper", "lower"]),
    })
    .strict(),
  z
    .object({
      kind: z.literal("prefix"),
      text: z.string(),
    })
    .strict(),
  z
    .object({
      kind: z.literal("suffix"),
      text: z.string(),
    })
    .strict(),
]);

const regionBase = {
  id: z.string().min(1),
  label: z.string().min(1),
  rect: rectSchema,
  visibleWhen: z.unknown().optional(),
  coverFill: z.boolean().optional(),
};

const textRegionSchema = z
  .object({
    ...regionBase,
    type: z.literal("text"),
    binding: bindingSchema,
    format: formatSchema.optional(),
    style: textStyleSchema,
    overflow: z.enum(["shrink", "truncate", "error"]).optional(),
    maxLines: z.number().int().positive().optional(),
  })
  .strict();

const staticRegionSchema = z
  .object({
    ...regionBase,
    type: z.literal("static"),
    text: z.string(),
    style: textStyleSchema,
  })
  .strict();

const regionSchema = z.discriminatedUnion("type", [textRegionSchema, staticRegionSchema]);

const fontSchema = z
  .object({
    family: z.string().min(1),
    regular: z.string().min(1),
    bold: z.string().min(1).optional(),
    italic: z.string().min(1).optional(),
    boldItalic: z.string().min(1).optional(),
  })
  .strict();

const pageSchema = z
  .object({
    pageIndex: z.number().int().min(0),
    size: z
      .object({
        width: z.number().positive(),
        height: z.number().positive(),
      })
      .strict(),
    regions: z.array(regionSchema),
  })
  .strict();

const textBindingSchema = z.discriminatedUnion("kind", [propertyBindingSchema, relationBindingSchema]);

const tableColumnSchema = z
  .object({
    header: z.string().min(1),
    binding: propertyBindingSchema,
    width: z.number().positive(),
    align: z.enum(["left", "right", "center"]).optional(),
  })
  .strict();

const blockBase = {
  id: z.string().min(1),
  label: z.string().min(1),
  span: z.number().int().min(1).max(12),
};

const textBlockSchema = z
  .object({
    ...blockBase,
    type: z.literal("text"),
    binding: textBindingSchema,
    style: textStyleSchema.optional(),
  })
  .strict();

const imageBlockSchema = z
  .object({
    ...blockBase,
    type: z.literal("image"),
    binding: propertyBindingSchema,
  })
  .strict();

const tableBlockSchema = z
  .object({
    ...blockBase,
    type: z.literal("table"),
    binding: repeatingBindingSchema.optional(),
    columns: z.array(tableColumnSchema).min(1),
    style: textStyleSchema.optional(),
  })
  .strict();

const listBlockSchema = z
  .object({
    ...blockBase,
    type: z.literal("list"),
    binding: repeatingBindingSchema,
    itemProperty: z.string().min(1).optional(),
    style: textStyleSchema.optional(),
  })
  .strict();

const spacerBlockSchema = z
  .object({
    ...blockBase,
    type: z.literal("spacer"),
  })
  .strict();

const blockSchema = z.discriminatedUnion("type", [
  textBlockSchema,
  imageBlockSchema,
  tableBlockSchema,
  listBlockSchema,
  spacerBlockSchema,
]);

const layoutRowSchema = z
  .object({
    id: z.string().min(1),
    blocks: z.array(blockSchema),
  })
  .strict();

const layoutSchema = z
  .object({
    columnCount: z.literal(12),
    margin: z.number().nonnegative(),
    columnGap: z.number().nonnegative(),
    rowGap: z.number().nonnegative(),
    rows: z.array(layoutRowSchema),
  })
  .strict();

export const templateSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
    version: z.number().int().positive(),
    language: z
      .string()
      .regex(/^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/, "Language must be a short BCP 47 tag.")
      .optional(),
    pages: z.array(pageSchema).min(1),
    layout: layoutSchema.optional(),
    fonts: z.array(fontSchema).min(1),
    defaults: z
      .object({
        fontFamily: z.string().min(1),
        fontSize: z.number().positive(),
        color: hexColor,
      })
      .strict(),
  })
  .strict()
  .superRefine((template, ctx) => {
    const regionIds = new Set<string>();
    const pageIndexes = new Set<number>();
    for (const [pageOffset, page] of template.pages.entries()) {
      if (pageIndexes.has(page.pageIndex)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["pages", pageOffset, "pageIndex"],
          message: `Page index ${page.pageIndex} is duplicated.`,
        });
      }
      pageIndexes.add(page.pageIndex);
      for (const [regionOffset, region] of page.regions.entries()) {
        if (regionIds.has(region.id)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["pages", pageOffset, "regions", regionOffset, "id"],
            message: `Region id ${region.id} is duplicated.`,
          });
        }
        regionIds.add(region.id);
        const fontSize = region.style.fontSize ?? template.defaults.fontSize;
        const minSize = region.style.minSize ?? fontSize;
        if (minSize > fontSize) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["pages", pageOffset, "regions", regionOffset, "style", "minSize"],
            message: "Minimum size cannot be larger than the font size.",
          });
        }
        if (region.type === "text") {
          assertBindingPath(region.binding, ctx, ["pages", pageOffset, "regions", regionOffset, "binding"]);
        }
      }
    }
    if (!template.layout) return;
    for (const [rowOffset, row] of template.layout.rows.entries()) {
      const span = row.blocks.reduce((sum, block) => sum + block.span, 0);
      if (span > template.layout.columnCount) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["layout", "rows", rowOffset],
          message: `Row ${row.id} spans ${span} columns, which is more than ${template.layout.columnCount}.`,
        });
      }
      for (const [blockOffset, block] of row.blocks.entries()) {
        if (regionIds.has(block.id)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["layout", "rows", rowOffset, "blocks", blockOffset, "id"],
            message: `Block id ${block.id} is duplicated.`,
          });
        }
        regionIds.add(block.id);
        if (block.type === "text" || block.type === "table" || block.type === "list") {
          const fontSize = block.style?.fontSize ?? template.defaults.fontSize;
          const minSize = block.style?.minSize ?? fontSize;
          if (minSize > fontSize) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ["layout", "rows", rowOffset, "blocks", blockOffset, "style", "minSize"],
              message: "Minimum size cannot be larger than the font size.",
            });
          }
        }
        if (block.type === "text" || block.type === "image") {
          assertBindingPath(block.binding, ctx, ["layout", "rows", rowOffset, "blocks", blockOffset, "binding"]);
        }
        if (block.type === "list") {
          assertBindingPath(block.binding, ctx, ["layout", "rows", rowOffset, "blocks", blockOffset, "binding"]);
        }
        if (block.type === "table" && block.binding) {
          assertBindingPath(block.binding, ctx, ["layout", "rows", rowOffset, "blocks", blockOffset, "binding"]);
        }
        if (block.type === "table") {
          for (const [columnOffset, column] of block.columns.entries()) {
            assertBindingPath(column.binding, ctx, [
              "layout",
              "rows",
              rowOffset,
              "blocks",
              blockOffset,
              "columns",
              columnOffset,
              "binding",
            ]);
          }
        }
      }
    }
  });

const dataContextSchema = z.record(z.string(), z.unknown());

export type Template = z.infer<typeof templateSchema>;
export type PageDef = Template["pages"][number];
export type Region = PageDef["regions"][number];
export type TextRegion = Extract<Region, { type: "text" }>;
export type StaticTextRegion = Extract<Region, { type: "static" }>;
export type TextStyle = TextRegion["style"];
export type Binding = TextRegion["binding"];
export type Format = NonNullable<TextRegion["format"]>;
export type FontDef = Template["fonts"][number];
export type FlowLayout = NonNullable<Template["layout"]>;
export type FlowRow = FlowLayout["rows"][number];
export type FlowBlock = FlowRow["blocks"][number];
export type DataContext = z.infer<typeof dataContextSchema>;

function assertBindingPath(
  binding: Binding,
  ctx: z.RefinementCtx,
  path: (string | number)[],
): void {
  if (binding.kind === "computed") return;
  const separator = binding.kind === "property" ? "." : ">";
  const segments = binding.path.split(separator);
  if (segments.some((segment) => segment.length === 0)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: [...path, "path"],
      message: "Binding path segments cannot be empty.",
    });
  }
  if (binding.kind === "relation" && binding.property.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: [...path, "property"],
      message: "Relation property cannot be empty.",
    });
  }
}

export function formatSchemaIssues(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const path = issue.path.length > 0 ? issue.path.join(".") : "template";
      return `${path}: ${issue.message}`;
    })
    .join("\n");
}

export function parseTemplate(input: unknown): Template {
  const result = templateSchema.safeParse(input);
  if (!result.success) {
    throw new TemplateValidationError(formatSchemaIssues(result.error));
  }
  return result.data;
}

export function parseDataContext(input: unknown): DataContext {
  const result = dataContextSchema.safeParse(input);
  if (!result.success) {
    throw new TemplateValidationError(formatSchemaIssues(result.error));
  }
  return result.data;
}
