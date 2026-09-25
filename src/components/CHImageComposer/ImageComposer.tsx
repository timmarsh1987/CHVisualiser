// ImageComposer.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";

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
    }),
    [cutoutAssetId, cutoutFingerprint]
  );

  const [layout, setLayout] = useState<Layout>(() => {
    if (initial) return initial.layout;
    if (backgrounds[0]) return makeDefault(backgrounds[0]);
    return { cx: 0.5, by: 1, h: 0.85, flipped: false, cutoutAssetId, cutoutFingerprint };
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
  }, [cutout, bgImages, selected, layout]);

  const chooseBackground = (bg: Background) => {
    setSelectedId(bg.id);
    setLayout(makeDefault(bg));
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

  const onWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    setLayout((l) => {
      const next = l.h * (e.deltaY < 0 ? 1.03 : 0.97);
      return { ...l, h: Math.min(1.6, Math.max(0.1, next)) };
    });
  };

  const reset = () => selected && setLayout(makeDefault(selected));

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
            width: "100%",
            aspectRatio: "1 / 1",
            touchAction: "none",
            cursor: "grab",
            borderRadius: 8,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onWheel={onWheel}
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

        <label>
          Size
          <input
            type="range"
            min={0.2}
            max={1.6}
            step={0.01}
            value={layout.h}
            onChange={(e) => setLayout((l) => ({ ...l, h: Number(e.target.value) }))}
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
