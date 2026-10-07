import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { runCli } from "../src/cli.js";
import { LIBERATION_SANS } from "../src/index.js";
import { blankPdf } from "./helpers.js";

const dirs: string[] = [];

afterEach(async () => {
  await Promise.all(dirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("runCli", () => {
  it("writes a PDF and prints the layout report", async () => {
    const dir = await mkdtemp(join(tmpdir(), "pdfbuilder-"));
    dirs.push(dir);
    const template = {
      id: "tpl-cli",
      name: "CLI sheet",
      version: 1,
      fonts: [LIBERATION_SANS],
      defaults: { fontFamily: "Liberation Sans", fontSize: 12, color: "#000000" },
      pages: [
        {
          pageIndex: 0,
          size: { width: 612, height: 792 },
          regions: [
            {
              id: "title",
              label: "Title",
              type: "text",
              binding: { kind: "property", path: "Title" },
              rect: { x: 72, y: 72, width: 200, height: 24 },
              style: { fontSize: 12, color: "#000000", align: "left", lineHeight: 1.2 },
            },
          ],
        },
      ],
    };
    await writeFile(join(dir, "template.json"), JSON.stringify(template));
    await writeFile(join(dir, "data.json"), JSON.stringify({ Title: "Hex nut" }));
    await writeFile(join(dir, "background.pdf"), await blankPdf());
    let stdout = "";
    const code = await runCli(
      [
        "--template",
        join(dir, "template.json"),
        "--data",
        join(dir, "data.json"),
        "--background",
        join(dir, "background.pdf"),
        "--out",
        join(dir, "out.pdf"),
      ],
      {
        stdout: (text) => {
          stdout += text;
        },
        stderr: () => undefined,
      },
    );
    expect(code).toBe(0);
    const report = JSON.parse(stdout) as { regions: { status: string }[] };
    expect(report.regions[0]?.status).toBe("ok");
    const output = await readFile(join(dir, "out.pdf"));
    expect(output.subarray(0, 5).toString()).toBe("%PDF-");
  });

  it("returns a non-zero code when a required argument is missing", async () => {
    let stderr = "";
    const code = await runCli([], {
      stdout: () => undefined,
      stderr: (text) => {
        stderr += text;
      },
    });
    expect(code).toBe(1);
    expect(stderr).toMatch(/Missing --template/);
  });
});
