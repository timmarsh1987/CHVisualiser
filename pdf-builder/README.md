# pdf-builder

Phase 1 is a product-agnostic PDF overlay engine. It loads a background PDF and draws text and static regions on top. Later phases add the Content Hub data model, the template designer, images, tables, the product-page viewer, and the generation service.

## Commands

From this directory:

```text
pnpm test
pnpm lint
pnpm typecheck
pnpm render -- --template <file> --data <file> --background <pdf> --out <pdf>
pnpm preview
```

`pnpm preview` opens a local page at http://localhost:5174. It runs the same renderer in the browser, fills the example template, and refreshes the PDF as you edit the title. You can also choose a background PDF from your computer.

`pnpm render` prints a JSON layout report and writes the PDF. The same inputs and the same `generatedAt` timestamp produce the same bytes. The CLI stamps the current time, so two CLI runs of the same files are not byte identical.

See [packages/render-core/README.md](packages/render-core/README.md) for the template shape and a walkthrough.
