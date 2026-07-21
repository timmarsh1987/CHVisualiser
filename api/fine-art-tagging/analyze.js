import { callCodeMieAssistant, uploadCodeMieFile } from '../lib/codemie/client.js';
import { downloadPreviewImage } from '../lib/codemie/downloadPreview.js';
import { parseJsonFromGenerated } from '../lib/codemie/parseJson.js';
import { applyCors } from '../lib/cors.js';
import { verifyEmbedAuth } from '../lib/embedAuth.js';

export const config = {
  maxDuration: 60,
};

/**
 * @param {unknown} value
 */
function asString(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return '';
}

/**
 * @param {unknown} value
 */
function asStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value.map((entry) => asString(entry)).filter(Boolean);
}

/**
 * @param {Record<string, unknown>} asset
 * @param {Record<string, unknown>} [options]
 * @param {{ imageAttached: boolean, imageUploadError?: string }} [imageContext]
 */
function buildTaggingPrompt(asset, options = {}, imageContext = { imageAttached: false }) {
  const displayName = asString(options.displayName) || 'Fine Art';

  const assetLines = [
    `Asset ID: ${asString(asset.id) || 'unknown'}`,
    `Name: ${asString(asset.name) || 'unknown'}`,
    `File name: ${asString(asset.fileName) || 'unknown'}`,
    `MIME type: ${asString(asset.mimeType) || 'unknown'}`,
    `Description: ${asString(asset.description) || 'none'}`,
    `Entity definition: ${asString(asset.definition) || 'unknown'}`,
  ];

  if (Array.isArray(asset.metadata) && asset.metadata.length > 0) {
    assetLines.push('Metadata:');
    for (const entry of asset.metadata) {
      if (entry && typeof entry === 'object') {
        const record = /** @type {Record<string, unknown>} */ (entry);
        assetLines.push(`- ${asString(record.key)}: ${asString(record.value)}`);
      }
    }
  }

  const visionInstructions = imageContext.imageAttached
    ? `An image file of this artwork is attached to this message. Visually inspect it for subject, medium cues, style/movement, composition, palette, and tagging. Do not say you cannot see the image.`
    : imageContext.imageUploadError
      ? `No image file could be attached (${imageContext.imageUploadError}). Base your assessment on metadata only and note that visual review was unavailable.`
      : `No preview image was available. Base your assessment on metadata, file name, and MIME type, and note that visual review was unavailable.`;

  return `You are a ${displayName} tagging analyst for a museum / DAM collection.

${visionInstructions}

Analyze the digital artwork asset and return ONLY valid JSON (no markdown fences) matching this schema:
{
  "artworks": [
    {
      "file_name": "string",
      "concise_visual_analysis": {
        "subject_matter": "string",
        "setting": "string",
        "dominant_colors": ["string"],
        "lighting": "string",
        "texture_mark_making": "string",
        "line_quality": "string",
        "perspective_space": "string",
        "composition": "string"
      },
      "medium_format_cues": {
        "likely_medium": "string",
        "evidence": "string"
      },
      "style_movement_hypotheses": [
        {
          "label": "string",
          "confidence": 0.0,
          "evidence": "string"
        }
      ],
      "suggested_tags_grouped": {
        "Medium/Materials": { "tags": ["string"], "rationale": "string" },
        "Technique": { "tags": ["string"], "rationale": "string" },
        "Style/Movement": { "tags": ["string"], "rationale": "string" },
        "Genre": { "tags": ["string"], "rationale": "string" },
        "Subject": { "tags": ["string"], "rationale": "string" },
        "Motifs/Symbols": { "tags": ["string"], "rationale": "string" },
        "Mood/Theme": { "tags": ["string"], "rationale": "string" },
        "Color/Palette": { "tags": ["string"], "rationale": "string" },
        "Composition/Form": { "tags": ["string"], "rationale": "string" },
        "Period_cues": { "tags": ["string"], "rationale": "string" }
      },
      "tag_pack": {
        "must_have": ["string"],
        "nice_to_have": ["string"]
      }
    }
  ]
}

Asset to analyze:
${assetLines.join('\n')}

Prefer visual evidence from the attached image when available. Keep confidence values between 0 and 1.`;
}

/**
 * @param {unknown} raw
 */
function normalizeTagGroup(raw) {
  const record = raw && typeof raw === 'object' ? /** @type {Record<string, unknown>} */ (raw) : {};
  return {
    tags: asStringArray(record.tags),
    rationale: asString(record.rationale),
  };
}

/**
 * @param {unknown} raw
 */
function normalizeGroupedTags(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return {};
  }

  /** @type {Record<string, { tags: string[], rationale: string }>} */
  const result = {};
  for (const [key, value] of Object.entries(/** @type {Record<string, unknown>} */ (raw))) {
    const group = normalizeTagGroup(value);
    if (group.tags.length > 0 || group.rationale) {
      result[key] = group;
    }
  }
  return result;
}

/**
 * @param {unknown} artwork
 * @param {string} [fallbackFileName]
 */
function normalizeArtwork(artwork, fallbackFileName = '') {
  const record =
    artwork && typeof artwork === 'object'
      ? /** @type {Record<string, unknown>} */ (artwork)
      : {};

  const visual =
    record.concise_visual_analysis && typeof record.concise_visual_analysis === 'object'
      ? /** @type {Record<string, unknown>} */ (record.concise_visual_analysis)
      : {};

  const medium =
    record.medium_format_cues && typeof record.medium_format_cues === 'object'
      ? /** @type {Record<string, unknown>} */ (record.medium_format_cues)
      : {};

  const tagPack =
    record.tag_pack && typeof record.tag_pack === 'object'
      ? /** @type {Record<string, unknown>} */ (record.tag_pack)
      : {};

  const hypotheses = Array.isArray(record.style_movement_hypotheses)
    ? record.style_movement_hypotheses
        .filter((entry) => entry && typeof entry === 'object')
        .map((entry) => {
          const item = /** @type {Record<string, unknown>} */ (entry);
          const confidenceRaw = Number(item.confidence);
          return {
            label: asString(item.label),
            confidence: Number.isFinite(confidenceRaw)
              ? Math.max(0, Math.min(1, confidenceRaw))
              : 0,
            evidence: asString(item.evidence),
          };
        })
        .filter((entry) => entry.label)
    : [];

  return {
    file_name: asString(record.file_name) || fallbackFileName || undefined,
    concise_visual_analysis: {
      subject_matter: asString(visual.subject_matter),
      setting: asString(visual.setting),
      dominant_colors: asStringArray(visual.dominant_colors),
      lighting: asString(visual.lighting),
      texture_mark_making: asString(visual.texture_mark_making),
      line_quality: asString(visual.line_quality),
      perspective_space: asString(visual.perspective_space),
      composition: asString(visual.composition),
    },
    medium_format_cues: {
      likely_medium: asString(medium.likely_medium),
      evidence: asString(medium.evidence),
    },
    style_movement_hypotheses: hypotheses,
    suggested_tags_grouped: normalizeGroupedTags(record.suggested_tags_grouped),
    tag_pack: {
      must_have: asStringArray(tagPack.must_have),
      nice_to_have: asStringArray(tagPack.nice_to_have),
    },
    analyzedAt: new Date().toISOString(),
  };
}

/**
 * Pick the artwork entry that matches the asset file name, else the first entry.
 * @param {unknown} payload
 * @param {Record<string, unknown>} asset
 */
function normalizeReport(payload, asset) {
  const record =
    payload && typeof payload === 'object'
      ? /** @type {Record<string, unknown>} */ (payload)
      : {};

  const fallbackFileName = asString(asset.fileName) || asString(asset.name);
  const artworks = Array.isArray(record.artworks) ? record.artworks : [];

  if (artworks.length > 0) {
    const preferredName = fallbackFileName.toLowerCase();
    const matched =
      preferredName
        ? artworks.find((entry) => {
            if (!entry || typeof entry !== 'object') return false;
            const name = asString(/** @type {Record<string, unknown>} */ (entry).file_name).toLowerCase();
            return name && (name === preferredName || name.includes(preferredName) || preferredName.includes(name));
          })
        : undefined;

    return normalizeArtwork(matched ?? artworks[0], fallbackFileName);
  }

  // Agent may return a single artwork object instead of { artworks: [...] }
  if (
    record.tag_pack != null ||
    record.suggested_tags_grouped != null ||
    record.concise_visual_analysis != null
  ) {
    return normalizeArtwork(record, fallbackFileName);
  }

  return normalizeArtwork({}, fallbackFileName);
}

/**
 * @param {import('http').IncomingMessage & { body?: unknown }} req
 */
async function readJsonBody(req) {
  if (req.body != null) {
    if (typeof req.body === 'string') {
      return req.body.trim() ? JSON.parse(req.body) : {};
    }
    return req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8').trim();
  return raw ? JSON.parse(raw) : {};
}

/**
 * Download preview from Content Hub and upload to CodeMie.
 * @param {Record<string, unknown>} asset
 * @returns {Promise<{ fileNames: string[], imageAttached: boolean, imageUploadError?: string }>}
 */
async function prepareAssetImage(asset) {
  const previewUrl = asString(asset.previewUrl);
  if (!previewUrl) {
    return { fileNames: [], imageAttached: false };
  }

  try {
    const downloaded = await downloadPreviewImage(previewUrl);
    if (!downloaded) {
      return {
        fileNames: [],
        imageAttached: false,
        imageUploadError: 'preview URL was invalid',
      };
    }

    const preferredName = asString(asset.fileName) || downloaded.fileName;
    const safeName = preferredName.replace(/[^\w.\-]+/g, '_') || downloaded.fileName;
    const fileUrl = await uploadCodeMieFile(downloaded.bytes, safeName, downloaded.mimeType);

    return {
      fileNames: [fileUrl],
      imageAttached: true,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'image prepare failed';
    console.error('[fine-art-tagging] image prepare failed:', message);
    return {
      fileNames: [],
      imageAttached: false,
      imageUploadError: message,
    };
  }
}

function resolveFineArtAssistantId() {
  return (
    process.env.CODEMIE_FINE_ART_TAGGING_ASSISTANT_ID?.trim() ||
    process.env.CODEMIE_MY_AGENT_ASSISTANT_ID?.trim() ||
    ''
  );
}

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const auth = verifyEmbedAuth(req);
  if (!auth.ok) {
    res.statusCode = auth.status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: auth.error }));
    return;
  }

  try {
    const body = await readJsonBody(req);
    const asset = body.asset && typeof body.asset === 'object' ? body.asset : {};
    const options = body.options && typeof body.options === 'object' ? body.options : {};

    const assistantId = resolveFineArtAssistantId();
    if (!assistantId) {
      res.statusCode = 503;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          error:
            'Fine-art tagging assistant is not configured — set CODEMIE_FINE_ART_TAGGING_ASSISTANT_ID',
        })
      );
      return;
    }

    const imagePrep = await prepareAssetImage(asset);
    const prompt = buildTaggingPrompt(asset, options, {
      imageAttached: imagePrep.imageAttached,
      imageUploadError: imagePrep.imageUploadError,
    });

    const generated = await callCodeMieAssistant(prompt, {
      assistantId,
      fileNames: imagePrep.fileNames,
    });
    const parsed = parseJsonFromGenerated(generated);
    const report = {
      ...normalizeReport(parsed, asset),
      imageAttached: imagePrep.imageAttached,
      ...(imagePrep.imageUploadError ? { imageUploadError: imagePrep.imageUploadError } : {}),
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ report }));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Fine-art tagging analysis failed';
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: message }));
  }
}
