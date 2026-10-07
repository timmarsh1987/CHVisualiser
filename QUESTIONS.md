# Questions

These items are open. Do not guess entity names, relation names, or API shapes.

## Content Hub

1. What is the target Content Hub version, and what is the exact `createExternalRoot` contract, hosting method, and registration steps for that version?
2. Which PCM schema is in the target tenant? Are `M.PCM.Product` and related definitions present and unmodified?
3. Which browsers does that Content Hub version support?
4. Is the documented default of 15 API calls per second per integration user still current for the target tenant?

## Fastenal product standard

5. Is `Fastenal.ProductStandard` a new entity, or should those fields live on an existing product family? Who owns that data, and how is it loaded?
6. How should dimension rows be loaded and edited: a grid on the entity page, a spreadsheet import, or both?
7. Should the FPS dimensional table be generated from the same product attributes the Fastenal site already shows?
8. On regeneration, should an unchanged file name create a new asset version, or should each revision be a new asset? What file name pattern should the output use?
9. Does a generated PDF need an approval step before suppliers can see it?
10. Which fonts do the source PDFs use, and are they licensed for embedding?
11. Are there languages other than English?

## Phase 1 gaps

12. What is the full `visibleWhen` language? Phase 1 stores the value and does not evaluate it.
13. Which date patterns are required beyond `YYYY-MM-DD` and `DD MMM YYYY`?

## Fixtures

14. The Fastenal FPS pack was not in the repository, Documents, Downloads, or Desktop. Please place these files before the nut-standard fixture is authored:
    - `pdf-builder/fixtures/backgrounds/NYLK.NE.N5.Z.05.pdf`
    - The part-number schema, specification table, dimensional table, and change log spreadsheets, original filenames kept, under `pdf-builder/fixtures/source/`

    Phase 1 does not include a synthesized stand-in for that PDF.
