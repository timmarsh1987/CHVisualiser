// ImageComposer.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { isLogoId, LOGOS, type LogoId } from "./logos";

export type Background = {
  id: number;
  name: string;
  url: string;
  anchorX: number;
  anchorBottom: number;
  headshotHeight: number;
  sortOrder: number;
};

export type Layout = {
  cx: number; // horizontal center of the cutout, 0 to 1 of canvas width
  by: number; // bottom edge of the cutout, 0 to 1 of canvas height
  h: number; // cutout height as a fraction of canvas height
  flipped: boolean;
  cutoutAssetId: number;
  cutoutFingerprint: string;
  text: string;
  logo: LogoId;
};

type Props = {
  cutoutUrl: string;
  cutoutAssetId: number;
  cutoutFingerprint: string;
  backgrounds: Background[];
  // Optional: a saved composition being reopened
  initial?: { layout: Layout; backgroundId: number };
  // Returns the id of the new asset
  onSave: (blob: Blob, layout: Layout, background: Background) => Promise<number>;
  // Builds a link to an asset detail page, used for the "saved" confirmation
  buildAssetUrl?: (assetId: number) => string;
};

const OUT_W = 1200;
const OUT_H = 1200;

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // Same origin in Content Hub. If renditions come from a CDN it must send CORS headers,
    // otherwise the canvas is tainted and toBlob throws.
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load ${url}`));
    img.src = url;
  });
}

// Draws the cutout small and checks that a meaningful share of pixels are see-through.
// If we cannot read the pixels, do not block the user.
export function hasTransparency(img: HTMLImageElement): boolean {
  const size = 64;
  const scale = size / Math.max(img.naturalWidth, img.naturalHeight);
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  try {
    ctx.drawImage(img, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    let seeThrough = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 250) seeThrough++;
    }
    return seeThrough / (w * h) >= 0.01;
  } catch {
    return true;
  }
}

function drawLogo(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  const margin = 48;
  const maxW = OUT_W * 0.36;
  const maxH = OUT_H * 0.12;
  const scale = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight);
  ctx.drawImage(img, margin, margin, img.naturalWidth * scale, img.naturalHeight * scale);
}

function wrapLine(ctx: CanvasRenderingContext2D, line: string, maxWidth: number): string[] {
  const words = line.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const lines: string[] = [];
  let current = words[0];
  for (const word of words.slice(1)) {
    const next = `${current} ${word}`;
    if (ctx.measureText(next).width <= maxWidth) {
      current = next;
    } else {
      lines.push(current);
      current = word;
    }
  }
  lines.push(current);
  return lines;
}

function drawCaption(ctx: CanvasRenderingContext2D, text: string) {
  const source = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (source.length === 0) return;

  const margin = 48;
  const maxWidth = OUT_W - margin * 2;
  ctx.save();
  ctx.font = "600 46px Arial, Helvetica, sans-serif";
  ctx.textBaseline = "bottom";
  const lines = source.flatMap((line) => wrapLine(ctx, line, maxWidth));
  const lineHeight = 58;
  let y = OUT_H - margin;
  ctx.shadowColor = "rgba(0,0,0,0.72)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = "#ffffff";
  for (let i = lines.length - 1; i >= 0; i--) {
    ctx.fillText(lines[i], margin, y);
    y -= lineHeight;
  }
  ctx.restore();
}

export function ImageComposer({
  cutoutUrl,
  cutoutAssetId,
  cutoutFingerprint,
  backgrounds,
  initial,
  onSave,
  buildAssetUrl,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cutout, setCutout] = useState<HTMLImageElement | null>(null);
  const [bgImages, setBgImages] = useState<Record<number, HTMLImageElement>>({});
  const [selectedId, setSelectedId] = useState<number | null>(
    initial?.backgroundId ?? backgrounds[0]?.id ?? null
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<number | null>(null);
  const [logoImages, setLogoImages] = useState<Partial<Record<LogoId, HTMLImageElement>>>({});
  const [opaque, setOpaque] = useState(false);
  const [staleDismissed, setStaleDismissed] = useState(false);
  const drag = useRef<{ startX: number; startY: number; cx: number; by: number } | null>(null);

  const makeDefault = useCallback(
    (bg: Background): Layout => ({
      cx: bg.anchorX,
      by: bg.anchorBottom,
      h: bg.headshotHeight,
      flipped: false,
      cutoutAssetId,
      cutoutFingerprint,
      text: "",
      logo: "none",
    }),
    [cutoutAssetId, cutoutFingerprint]
  );

  const [layout, setLayout] = useState<Layout>(() => {
    const base = initial?.layout ?? (backgrounds[0] ? makeDefault(backgrounds[0]) : null);
    if (base) {
      return {
        ...base,
        text: base.text ?? "",
        logo: isLogoId(base.logo) ? base.logo : "none",
      };
    }
    return {
      cx: 0.5,
      by: 1,
      h: 0.85,
      flipped: false,
      cutoutAssetId,
      cutoutFingerprint,
      text: "",
      logo: "none",
    };
  });

  const selected = backgrounds.find((b) => b.id === selectedId) ?? null;

  // The cutout changed after this composition was saved
  const isStale =
    !!initial &&
    !staleDismissed &&
    !!initial.layout.cutoutFingerprint &&
    initial.layout.cutoutFingerprint !== cutoutFingerprint;

  // Load the cutout and all backgrounds once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [cut, ...bgs] = await Promise.all([
          loadImage(cutoutUrl),
          ...backgrounds.map((b) => loadImage(b.url)),
        ]);
        if (cancelled) return;
        setCutout(cut);
        setOpaque(!hasTransparency(cut));
        const map: Record<number, HTMLImageElement> = {};
        backgrounds.forEach((b, i) => (map[b.id] = bgs[i]));
        setBgImages(map);
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cutoutUrl, backgrounds]);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      LOGOS.map(async (logo) => [logo.id, await loadImage(logo.src)] as const)
    )
      .then((pairs) => {
        if (cancelled) return;
        const map: Partial<Record<LogoId, HTMLImageElement>> = {};
        for (const [id, img] of pairs) map[id] = img;
        setLogoImages(map);
      })
      .catch((e) => {
        if (!cancelled) setError((e as Error).message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Draw whenever anything changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !cutout || !selected) return;
    const bg = bgImages[selected.id];
    if (!bg) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, OUT_W, OUT_H);

    // Background: cover fit, centered
    const scale = Math.max(OUT_W / bg.naturalWidth, OUT_H / bg.naturalHeight);
    const bw = bg.naturalWidth * scale;
    const bh = bg.naturalHeight * scale;
    ctx.drawImage(bg, (OUT_W - bw) / 2, (OUT_H - bh) / 2, bw, bh);

    // Cutout: sized by height, anchored at bottom center
    const h = OUT_H * layout.h;
    const w = h * (cutout.naturalWidth / cutout.naturalHeight);
    ctx.save();
    ctx.translate(layout.cx * OUT_W, layout.by * OUT_H);
    if (layout.flipped) ctx.scale(-1, 1);
    ctx.drawImage(cutout, -w / 2, -h, w, h);
    ctx.restore();

    const logoImage = layout.logo !== "none" ? logoImages[layout.logo] : null;
    if (logoImage) drawLogo(ctx, logoImage);
    drawCaption(ctx, layout.text);
  }, [cutout, bgImages, selected, layout, logoImages]);

  const chooseBackground = (bg: Background) => {
    setSelectedId(bg.id);
    setLayout((current) => ({
      ...makeDefault(bg),
      text: current.text,
      logo: current.logo,
    }));
    setStaleDismissed(true);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { startX: e.clientX, startY: e.clientY, cx: layout.cx, by: layout.by };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const d = drag.current;
    if (!d) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - d.startX) / rect.width;
    const dy = (e.clientY - d.startY) / rect.height;
    setLayout((l) => ({ ...l, cx: d.cx + dx, by: d.by + dy }));
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  const reset = () =>
    selected &&
    setLayout((current) => ({
      ...makeDefault(selected),
      text: current.text,
      logo: current.logo,
    }));

  const save = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas || !selected) return;
    setSaving(true);
    setError(null);
    setSavedId(null);
    try {
      const blob: Blob = await new Promise((resolve, reject) =>
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("Canvas export failed"))),
          "image/jpeg",
          0.92
        )
      );
      const id = await onSave(blob, { ...layout, cutoutAssetId, cutoutFingerprint }, selected);
      setSavedId(id);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }, [layout, onSave, selected, cutoutAssetId, cutoutFingerprint]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 260px", gap: 16 }}>
      <div>
        {opaque && (
          <div
            role="alert"
            style={{
              background: "#fdecea",
              border: "1px solid #f1a9a0",
              borderRadius: 6,
              padding: "8px 12px",
              marginBottom: 8,
              fontSize: 13,
            }}
          >
            This cutout has no transparent area. The headshot will show as a box. Re-run background
            removal.
          </div>
        )}
        {isStale && (
          <div
            style={{
              background: "#fff4e5",
              border: "1px solid #f0c36d",
              borderRadius: 6,
              padding: "8px 12px",
              marginBottom: 8,
              fontSize: 13,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>The cutout has changed since this was saved.</span>
            <button onClick={() => setStaleDismissed(true)}>Keep layout</button>
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={OUT_W}
          height={OUT_H}
          style={{
            display: "block",
            width: "min(100%, calc(100vh - 180px))",
            maxWidth: "100%",
            height: "auto",
            aspectRatio: "1 / 1",
            touchAction: "none",
            cursor: "grab",
            borderRadius: 8,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        />
      </div>

      <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <strong>Background</strong>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
            {backgrounds.map((b) => (
              <button
                key={b.id}
                onClick={() => chooseBackground(b)}
                style={{
                  padding: 0,
                  border: b.id === selectedId ? "2px solid #0a6cff" : "2px solid transparent",
                  borderRadius: 6,
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src={b.url}
                  alt={b.name}
                  style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 4 }}
                />
                <div style={{ fontSize: 12, padding: "4px 0" }}>{b.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <strong>Logo</strong>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
            <button
              type="button"
              onClick={() => setLayout((l) => ({ ...l, logo: "none" }))}
              style={{
                minHeight: 52,
                border: layout.logo === "none" ? "2px solid #0a6cff" : "2px solid #ddd",
                borderRadius: 6,
                background: "#fff",
                cursor: "pointer",
              }}
            >
              None
            </button>
            {LOGOS.map((logo) => (
              <button
                key={logo.id}
                type="button"
                onClick={() => setLayout((l) => ({ ...l, logo: logo.id }))}
                style={{
                  padding: 6,
                  border: layout.logo === logo.id ? "2px solid #0a6cff" : "2px solid #ddd",
                  borderRadius: 6,
                  background: logo.id === "epam-white" ? "#1a1a1a" : "#fff",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  style={{ width: "100%", height: 28, objectFit: "contain" }}
                />
                <div
                  style={{
                    fontSize: 11,
                    paddingTop: 4,
                    color: logo.id === "epam-white" ? "#fff" : "#222",
                  }}
                >
                  {logo.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          Custom text
          <textarea
            value={layout.text}
            rows={3}
            placeholder="Add a name or caption"
            onChange={(e) => setLayout((l) => ({ ...l, text: e.target.value }))}
            style={{ width: "100%", resize: "vertical", font: "inherit" }}
          />
        </label>

        <label>
          Size
          <input
            type="range"
            min={0.2}
            max={1.6}
            step={0.01}
            value={layout.h}
            onChange={(e) => setLayout((l) => ({ ...l, h: Number(e.target.value) }))}
            onWheel={(e) => e.currentTarget.blur()}
            style={{ width: "100%" }}
          />
        </label>

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setLayout((l) => ({ ...l, flipped: !l.flipped }))}>Flip</button>
          <button onClick={reset}>Reset</button>
        </div>

        <button
          onClick={save}
          disabled={saving || !cutout || opaque}
          style={{ padding: "10px 14px" }}
        >
          {saving ? "Saving..." : "Save as new asset"}
        </button>

        {savedId !== null && (
          <div role="status" style={{ color: "#1a7f37", fontSize: 13 }}>
            Saved as a new asset.{" "}
            {buildAssetUrl ? <a href={buildAssetUrl(savedId)}>Open it</a> : `Asset id ${savedId}.`}
          </div>
        )}

        {error && (
          <div role="alert" style={{ color: "#b00020", fontSize: 13 }}>
            {error}
          </div>
        )}
      </aside>
    </div>
  );
}
