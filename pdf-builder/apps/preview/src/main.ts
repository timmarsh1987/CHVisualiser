import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { parseDataContext, parseTemplate, renderDocument } from "@pdfbuilder/render-core/browser";
import type { FlowBlock, FlowLayout, FlowRow, Template } from "@pdfbuilder/render-core/browser";
import entityJson from "../../../fixtures/examples/entity.json";
import fieldsJson from "../../../fixtures/examples/fields.json";
import templateJson from "../../../fixtures/examples/flow-template.json";
import boldItalicUrl from "../../../packages/render-core/fonts/LiberationSans-BoldItalic.ttf?url";
import boldUrl from "../../../packages/render-core/fonts/LiberationSans-Bold.ttf?url";
import italicUrl from "../../../packages/render-core/fonts/LiberationSans-Italic.ttf?url";
import regularUrl from "../../../packages/render-core/fonts/LiberationSans-Regular.ttf?url";

const FONT_URLS: Record<string, string> = {
  "LiberationSans-Regular.ttf": regularUrl,
  "LiberationSans-Bold.ttf": boldUrl,
  "LiberationSans-Italic.ttf": italicUrl,
  "LiberationSans-BoldItalic.ttf": boldItalicUrl,
};

const coverImage = async (): Promise<Uint8Array<ArrayBuffer>> => {
  const sheet = document.createElement("canvas");
  sheet.width = 160;
  sheet.height = 120;
  const context = sheet.getContext("2d");
  if (!context) throw new Error("Could not create the sample image.");
  context.fillStyle = "#d9e2ec";
  context.fillRect(0, 0, sheet.width, sheet.height);
  context.strokeStyle = "#1d4e89";
  context.lineWidth = 4;
  context.strokeRect(8, 8, 144, 104);
  context.fillStyle = "#1d4e89";
  context.font = "20px sans-serif";
  context.fillText("Cover", 52, 68);
  const blob = await new Promise<Blob>((resolve, reject) => {
    sheet.toBlob((file) => {
      if (file) resolve(file);
      else reject(new Error("Could not create the sample image."));
    }, "image/png");
  });
  return copyBytes(new Uint8Array(await blob.arrayBuffer()));
};

type BlockType = "text" | "image" | "table" | "list";
type FieldKind = BlockType | "localized" | "option" | "relation";

interface CatalogColumn {
  header: string;
  path: string;
  width: number;
  align?: "left" | "right" | "center";
}

interface CatalogField {
  id: string;
  label: string;
  kind: FieldKind;
  path: string;
  columns?: CatalogColumn[];
}

GlobalWorkerOptions.workerSrc = workerUrl;

const palette = document.querySelector<HTMLElement>("#palette");
const canvas = document.querySelector<HTMLElement>("#canvas");
const inspectorEmpty = document.querySelector<HTMLElement>("#inspector-empty");
const inspectorFields = document.querySelector<HTMLElement>("#inspector-fields");
const fieldSelect = document.querySelector<HTMLSelectElement>("#field");
const relationPropertyLabel = document.querySelector<HTMLElement>("#relation-property-label");
const relationPropertyField = document.querySelector<HTMLInputElement>("#relation-property");
const spanField = document.querySelector<HTMLInputElement>("#span");
const tableColumns = document.querySelector<HTMLElement>("#table-columns");
const columnList = document.querySelector<HTMLElement>("#column-list");
const addColumnSelect = document.querySelector<HTMLSelectElement>("#add-column");
const moveUpButton = document.querySelector<HTMLButtonElement>("#move-up");
const moveDownButton = document.querySelector<HTMLButtonElement>("#move-down");
const deleteButton = document.querySelector<HTMLButtonElement>("#delete-block");
const downloadJsonButton = document.querySelector<HTMLButtonElement>("#download-json");
const uploadJsonField = document.querySelector<HTMLInputElement>("#upload-json");
const statusLine = document.querySelector<HTMLElement>("#status");
const reportBlock = document.querySelector<HTMLElement>("#report");
const pages = document.querySelector<HTMLElement>("#pages");
const downloadLink = document.querySelector<HTMLAnchorElement>("#download");

if (
  !palette ||
  !canvas ||
  !inspectorEmpty ||
  !inspectorFields ||
  !fieldSelect ||
  !relationPropertyLabel ||
  !relationPropertyField ||
  !spanField ||
  !tableColumns ||
  !columnList ||
  !addColumnSelect ||
  !moveUpButton ||
  !moveDownButton ||
  !deleteButton ||
  !downloadJsonButton ||
  !uploadJsonField ||
  !statusLine ||
  !reportBlock ||
  !pages ||
  !downloadLink
) {
  throw new Error("Preview page is missing a required element.");
}

const fields = (fieldsJson as { fields: CatalogField[] }).fields;
const sampleData = parseDataContext(entityJson);
let template: Template = parseTemplate(templateJson);
let selectedId: string | null = "product-name";
let fonts: Record<string, Uint8Array> = {};
let currentUrl: string | null = null;
let jsonUrl: string | null = null;
let renderTimer = 0;

const copyBytes = (bytes: Uint8Array): Uint8Array<ArrayBuffer> => {
  const copy = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(copy).set(bytes);
  return new Uint8Array(copy);
};

const layoutOf = (): FlowLayout => {
  if (!template.layout) throw new Error("This file is not a column template.");
  return template.layout;
};

const newId = (prefix: string): string => `${prefix}-${crypto.randomUUID()}`;

const bindingText = (block: FlowBlock): string => {
  if (!block.binding) {
    return block.type === "table" ? block.columns.map((column) => column.header).join(", ") : "";
  }
  if (block.binding.kind === "relation") {
    return block.binding.property === "Unbound" ? block.binding.path : `${block.binding.path}>${block.binding.property}`;
  }
  return block.binding.path;
};

const findSelection = (): { row: FlowRow; rowIndex: number; block: FlowBlock } | null => {
  const rows = layoutOf().rows;
  for (const [rowIndex, row] of rows.entries()) {
    const block = row.blocks.find((item) => item.id === selectedId);
    if (block) return { row, rowIndex, block };
  }
  return null;
};

const fieldsFor = (block: FlowBlock): CatalogField[] =>
  fields.filter((field) => {
    if (block.type === "text") return field.kind === "text" || field.kind === "localized" || field.kind === "option" || field.kind === "relation";
    return field.kind === block.type;
  });

const createBlock = (type: BlockType): FlowBlock => {
  const id = newId("block");
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  if (type === "text" || type === "image") {
    return { id, label, type, span: 12, binding: { kind: "property", path: "Unbound" } };
  }
  if (type === "list") {
    return { id, label, type, span: 12, binding: { kind: "repeating", path: "Unbound" } };
  }
  return {
    id,
    label,
    type: "table",
    span: 12,
    columns: [{ header: "ProductName", binding: { kind: "property", path: "ProductName" }, width: 1 }],
  };
};

const addBlock = (type: BlockType, rowId: string | null): void => {
  const block = createBlock(type);
  const rows = layoutOf().rows;
  if (!rowId) {
    rows.push({ id: newId("row"), blocks: [block] });
  } else {
    const rowIndex = rows.findIndex((row) => row.id === rowId);
    const row = rows[rowIndex];
    if (!row) return;
    const used = row.blocks.reduce((sum, item) => sum + item.span, 0);
    const room = 12 - used;
    if (room < 1) {
      rows.splice(rowIndex + 1, 0, { id: newId("row"), blocks: [block] });
    } else {
      block.span = Math.min(6, room);
      row.blocks.push(block);
    }
  }
  selectedId = block.id;
  paintCanvas();
  paintInspector();
  scheduleRender();
};

const setSpan = (value: number): void => {
  const found = findSelection();
  if (!found) return;
  const others = found.row.blocks.reduce((sum, block) => sum + (block.id === found.block.id ? 0 : block.span), 0);
  const span = Math.min(12 - others, Math.max(1, Math.round(value)));
  found.block.span = span;
  spanField.value = String(span);
  paintCanvas();
  scheduleRender();
};

const columnFields = (): CatalogField[] =>
  fields.filter((field) => field.kind === "text" || field.kind === "localized" || field.kind === "option");

const addTableColumn = (fieldId: string): void => {
  const found = findSelection();
  const field = fields.find((item) => item.id === fieldId);
  if (!found || found.block.type !== "table" || !field) return;
  if (field.kind !== "text" && field.kind !== "localized" && field.kind !== "option") return;
  found.block.columns.push({
    header: field.label,
    binding: { kind: "property", path: field.path },
    width: 1,
  });
  paintCanvas();
  paintInspector();
  scheduleRender();
};

const removeTableColumn = (index: number): void => {
  const found = findSelection();
  if (!found || found.block.type !== "table" || found.block.columns.length < 2) return;
  found.block.columns.splice(index, 1);
  paintCanvas();
  paintInspector();
  scheduleRender();
};

const applyField = (fieldId: string): void => {
  const found = findSelection();
  const field = fields.find((item) => item.id === fieldId);
  if (!found || !field || !fieldsFor(found.block).some((item) => item.id === field.id)) return;
  const block = found.block;
  block.label = field.label;
  if (block.type === "text" && field.kind === "relation") {
    const property = relationPropertyField.value.trim();
    block.binding = { kind: "relation", path: field.path, property: property.length > 0 ? property : "Unbound" };
  } else if (block.type === "text" || block.type === "image") {
    block.binding = { kind: "property", path: field.path };
  } else if (block.type === "list") {
    block.binding = { kind: "repeating", path: field.path };
  } else {
    block.binding = { kind: "repeating", path: field.path };
    block.columns = (field.columns ?? [{ header: "Column", path: "Value", width: 1 }]).map((column) => ({
      header: column.header,
      binding: { kind: "property" as const, path: column.path },
      width: column.width,
      align: column.align,
    }));
  }
  paintCanvas();
  scheduleRender();
};

const deleteSelected = (): void => {
  const rows = layoutOf().rows;
  for (const row of rows) {
    const index = row.blocks.findIndex((block) => block.id === selectedId);
    if (index >= 0) row.blocks.splice(index, 1);
  }
  for (let index = rows.length - 1; index >= 0; index -= 1) {
    if (rows[index]?.blocks.length === 0) rows.splice(index, 1);
  }
  selectedId = null;
  paintCanvas();
  paintInspector();
  scheduleRender();
};

const moveSelectedRow = (direction: -1 | 1): void => {
  const found = findSelection();
  if (!found) return;
  const rows = layoutOf().rows;
  const next = found.rowIndex + direction;
  if (next < 0 || next >= rows.length) return;
  const [row] = rows.splice(found.rowIndex, 1);
  if (!row) return;
  rows.splice(next, 0, row);
  paintCanvas();
  paintInspector();
  scheduleRender();
};

const paintCanvas = (): void => {
  canvas.replaceChildren();
  const rows = layoutOf().rows;
  if (rows.length === 0) {
    const hint = document.createElement("p");
    hint.className = "drop-hint";
    hint.textContent = "Drop a block here.";
    canvas.append(hint);
    return;
  }
  for (const row of rows) {
    const rowElement = document.createElement("div");
    rowElement.className = "row";
    rowElement.dataset.rowId = row.id;
    for (const block of row.blocks) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = block.id === selectedId ? "block selected" : "block";
      button.style.gridColumn = `span ${block.span}`;
      button.dataset.blockId = block.id;
      const title = document.createElement("strong");
      title.textContent = block.label;
      const detail = document.createElement("span");
      detail.textContent = `${block.type} · span ${block.span} · ${bindingText(block)}`;
      button.append(title, detail);
      button.addEventListener("click", () => {
        selectedId = block.id;
        paintCanvas();
        paintInspector();
      });
      rowElement.append(button);
    }
    canvas.append(rowElement);
  }
};

const paintInspector = (): void => {
  const found = findSelection();
  inspectorEmpty.hidden = Boolean(found);
  inspectorFields.hidden = !found;
  if (!found) return;
  const fieldLabel = fieldSelect.closest("label");
  if (fieldLabel instanceof HTMLElement) fieldLabel.hidden = found.block.type === "table";
  const matching = fieldsFor(found.block);
  fieldSelect.replaceChildren();
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = "Choose a field";
  fieldSelect.append(empty);
  const currentPath = found.block.binding?.path ?? "";
  for (const field of matching) {
    const option = document.createElement("option");
    option.value = field.id;
    option.textContent = field.kind === "text" ? field.label : `${field.label} (${field.kind})`;
    option.selected = field.path === currentPath;
    fieldSelect.append(option);
  }
  const relationBinding = found.block.type === "text" && found.block.binding.kind === "relation" ? found.block.binding : null;
  relationPropertyLabel.hidden = !relationBinding;
  if (relationBinding) {
    relationPropertyField.value = relationBinding.property === "Unbound" ? "" : relationBinding.property;
  }
  const table = found.block.type === "table" ? found.block : null;
  tableColumns.hidden = !table;
  columnList.replaceChildren();
  addColumnSelect.replaceChildren();
  if (table) {
    table.columns.forEach((column, index) => {
      const row = document.createElement("div");
      row.className = "column-row";
      const name = document.createElement("span");
      name.textContent = `${column.header} (${column.binding.path})`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Remove";
      remove.disabled = table.columns.length < 2;
      remove.addEventListener("click", () => {
        removeTableColumn(index);
      });
      row.append(name, remove);
      columnList.append(row);
    });
    const emptyColumn = document.createElement("option");
    emptyColumn.value = "";
    emptyColumn.textContent = "Add a field";
    addColumnSelect.append(emptyColumn);
    for (const field of columnFields()) {
      const option = document.createElement("option");
      option.value = field.id;
      option.textContent = field.kind === "text" ? field.label : `${field.label} (${field.kind})`;
      addColumnSelect.append(option);
    }
  }
  const others = found.row.blocks.reduce((sum, block) => sum + (block.id === found.block.id ? 0 : block.span), 0);
  spanField.max = String(Math.max(1, 12 - others));
  spanField.value = String(found.block.span);
  const rows = layoutOf().rows;
  moveUpButton.disabled = found.rowIndex === 0;
  moveDownButton.disabled = found.rowIndex === rows.length - 1;
};

const showPdf = async (bytes: Uint8Array): Promise<void> => {
  const fileBytes = copyBytes(bytes);
  const url = URL.createObjectURL(new Blob([fileBytes], { type: "application/pdf" }));
  downloadLink.href = url;
  downloadLink.download = "column-template.pdf";
  if (currentUrl) URL.revokeObjectURL(currentUrl);
  currentUrl = url;

  const doc = await getDocument({ data: copyBytes(bytes) }).promise;
  pages.replaceChildren();
  for (let index = 1; index <= doc.numPages; index += 1) {
    const sheet = document.createElement("canvas");
    pages.append(sheet);
    const page = await doc.getPage(index);
    const viewport = page.getViewport({ scale: 1.25 });
    sheet.width = viewport.width;
    sheet.height = viewport.height;
    await page.render({ canvas: sheet, viewport }).promise;
  }
};

const renderNow = async (): Promise<void> => {
  statusLine.classList.remove("error");
  statusLine.textContent = "Rendering...";
  try {
    const parsed = parseTemplate(template);
    template = parsed;
    const result = await renderDocument(parsed, sampleData, {
      fonts,
      images: { cover: await coverImage() },
      generatedAt: new Date().toISOString(),
    });
    await showPdf(result.bytes);
    const summary = result.report.regions.map((region) => `${region.regionId}: ${region.status}`).join(", ");
    statusLine.textContent = summary.length > 0 ? summary : "Rendered an empty page.";
    reportBlock.textContent = JSON.stringify(result.report, null, 2);
  } catch (error) {
    statusLine.classList.add("error");
    statusLine.textContent = error instanceof Error ? error.message : "Render failed.";
  }
};

const scheduleRender = (): void => {
  window.clearTimeout(renderTimer);
  renderTimer = window.setTimeout(() => {
    void renderNow();
  }, 300);
};

const loadFonts = async (): Promise<Record<string, Uint8Array>> => {
  const entries = await Promise.all(
    Object.entries(FONT_URLS).map(async ([name, url]) => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Could not load font ${name}.`);
      return [name, copyBytes(new Uint8Array(await response.arrayBuffer()))] as const;
    }),
  );
  return Object.fromEntries(entries);
};

const isBlockType = (value: string): value is BlockType =>
  value === "text" || value === "image" || value === "table" || value === "list";

for (const button of Array.from(palette.querySelectorAll<HTMLButtonElement>("button[data-block]"))) {
  button.addEventListener("dragstart", (event: DragEvent) => {
    const type = button.dataset.block ?? "";
    event.dataTransfer?.setData("text/plain", `block:${type}`);
  });
}

canvas.addEventListener("dragover", (event) => {
  event.preventDefault();
  canvas.classList.add("drag-over");
});

canvas.addEventListener("dragleave", () => {
  canvas.classList.remove("drag-over");
});

canvas.addEventListener("drop", (event) => {
  event.preventDefault();
  canvas.classList.remove("drag-over");
  const raw = event.dataTransfer?.getData("text/plain") ?? "";
  const type = raw.startsWith("block:") ? raw.slice("block:".length) : "";
  if (!isBlockType(type)) return;
  const target = event.target instanceof Element ? event.target : null;
  const row = target?.closest<HTMLElement>("[data-row-id]");
  addBlock(type, row?.dataset.rowId ?? null);
});

fieldSelect.addEventListener("change", () => {
  applyField(fieldSelect.value);
  paintInspector();
});

relationPropertyField.addEventListener("input", () => {
  const found = findSelection();
  if (!found || found.block.type !== "text" || found.block.binding.kind !== "relation") return;
  const property = relationPropertyField.value.trim();
  found.block.binding = {
    kind: "relation",
    path: found.block.binding.path,
    property: property.length > 0 ? property : "Unbound",
  };
  paintCanvas();
  scheduleRender();
});

spanField.addEventListener("input", () => {
  setSpan(Number(spanField.value));
});

addColumnSelect.addEventListener("change", () => {
  if (!addColumnSelect.value) return;
  addTableColumn(addColumnSelect.value);
});

deleteButton.addEventListener("click", deleteSelected);
moveUpButton.addEventListener("click", () => {
  moveSelectedRow(-1);
});
moveDownButton.addEventListener("click", () => {
  moveSelectedRow(1);
});

downloadJsonButton.addEventListener("click", () => {
  const file = new Blob([JSON.stringify(template, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "column-template.json";
  link.click();
  if (jsonUrl) URL.revokeObjectURL(jsonUrl);
  jsonUrl = url;
});

uploadJsonField.addEventListener("change", () => {
  const file = uploadJsonField.files?.[0];
  if (!file) return;
  void file.text().then((text) => {
    try {
      template = parseTemplate(JSON.parse(text) as unknown);
      if (!template.layout) throw new Error("This file is not a column template.");
      selectedId = template.layout.rows[0]?.blocks[0]?.id ?? null;
      paintCanvas();
      paintInspector();
      void renderNow();
      statusLine.classList.remove("error");
    } catch (error) {
      statusLine.classList.add("error");
      statusLine.textContent = error instanceof Error ? error.message : "Could not read that JSON file.";
    }
  });
});

paintCanvas();
paintInspector();
fonts = await loadFonts();
await renderNow();
