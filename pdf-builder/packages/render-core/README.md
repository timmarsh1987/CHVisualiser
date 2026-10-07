# @pdfbuilder/render-core

Shared renderer for the PDF data sheet builder. It takes a template, a plain data context, and a background PDF, and returns PDF bytes plus a layout report. It does not know about any one product or about Content Hub.

Phase 1 draws `text` and `static` regions. `image` and `table` regions are rejected. Computed bindings are recognized and reported as unsupported. `visibleWhen` is stored and not evaluated.

## Walkthrough

Use the generic example. It is not a Fastenal document. Any one-page PDF can be the background. Letter size (612 by 792 points) matches the example coordinates.

```text
pnpm --dir pdf-builder render -- --template fixtures/examples/template.json --data fixtures/examples/data.json --background path/to/background.pdf --out out.pdf
```

Run that from the repository root. The command prints the layout report and writes `out.pdf`. The example stamps the static label "Data sheet" and the `Title` value from the data file.

The Fastenal nut standard (`NYLK.NE.N5.Z.05.pdf`) and its spreadsheets are not in the repo yet. Put them in `pdf-builder/fixtures/backgrounds/` and `pdf-builder/fixtures/source/` when they are available. See `QUESTIONS.md` at the repository root. Do not substitute a drawn copy of that file.

## API

```ts
renderDocument(template, dataContext, resources) => { bytes, report }
```

`resources.backgroundPdf` is the original PDF. `resources.fonts` maps font file names to bytes. `resources.generatedAt` is an ISO-8601 UTC timestamp. Pass a fixed timestamp when you need byte-stable output.

The report lists every region with status, font size used, truncated, overflow, missing glyphs, and unbound fields. `inputHash` is a SHA-256 of the canonical data context.

## Template rules

- Coordinates are PDF points with a top-left origin. They are converted to PDF user space at draw time.
- Property bindings walk a dotted path (`Product.Name`). Relation bindings walk `>` segments and then a property (`Product>ProductStandard` plus `Title`). Repeating bindings return an array. A text region that receives an array or object is an error.
- Text shrinks from `fontSize` down to `minSize` in 0.25 point steps. If it still does not fit:
  - `shrink` draws at the minimum size and sets overflow.
  - `truncate` shortens the text with `...` and sets truncated.
  - `error` does not draw that region and sets overflow.
- The default overflow is `shrink`.
- `coverFill: true` paints a white rectangle behind a region that is drawn.
- Dates accept `YYYY-MM-DD` and `DD MMM YYYY`. Numbers use a dot decimal separator.
- Encrypted PDFs, and PDFs whose bytes contain `/JavaScript`, `/JS`, `/Launch`, or `/OpenAction`, are rejected.

## Fonts

Overlay text uses Liberation Sans (regular, bold, italic, bold italic), licensed under the SIL Open Font License. The license is in `fonts/OFL.txt`. Fonts already embedded in the background PDF are left in place. Whether those source fonts may be embedded in new output is still an open question.

## Browser preview

```text
pnpm --dir pdf-builder preview
```

That serves a local page which calls `renderDocument` in the browser. The Node entry point still loads fonts from disk. The browser entry is `@pdfbuilder/render-core/browser`, which does not import Node file APIs.

## Tests

```text
pnpm --dir pdf-builder test
pnpm --dir pdf-builder lint
pnpm --dir pdf-builder typecheck
```
