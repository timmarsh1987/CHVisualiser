import { callCodeMieAssistant, uploadCodeMieFile } from '../../lib/codemie/client.js';
import { downloadPreviewImage } from '../../lib/codemie/downloadPreview.js';
import { parseJsonFromGenerated } from '../../lib/codemie/parseJson.js';
import { applyCors } from '../../lib/cors.js';
import { verifyEmbedAuth } from '../../lib/embedAuth.js';

export const config = {
  maxDuration: 60,
};

const CHECKS = [
  {
    id: 'minors',
    label: 'Children / minors',
    affectsStatus: true,
    instructions:
      'Report whether any person who appears to be a child or minor is visible. Set detected true only when a minor appears to be present. summary must be a short non-graphic reason, such as "a child is visible in the foreground". Do not estimate an exact age. Do not describe bodies. Do not assess or describe sexual content.',
  },
  {
    id: 'animals',
    label: 'Animals',
    affectsStatus: true,
    instructions:
      'Report whether any animal is visible, including pets, wildlife, livestock, birds, and insects.',
  },
  {
    id: 'culturalSensitive',
    label: 'Cultural or sensitive imagery',
    affectsStatus: true,
    instructions:
      'Report whether the image contains religious or sacred imagery, cultural ceremonies, culturally significant dress or artifacts, memorials, or politically sensitive scenes. This is a review flag, not a moral judgment.',
  },
  {
    id: 'firearmsOffensive',
    label: 'Firearms or offensive items',
    affectsStatus: true,
    instructions:
      'Report whether the image contains firearms, other weapons, hate symbols, or graphic violence.',
  },
  {
    id: 'whatYouSee',
    label: 'Tell me what you see',
    affectsStatus: false,
    instructions:
      'Describe what is visible in a few sentences: subject, setting, and notable objects. Put that description in summary. Set detected to true when you can describe the image. This is a description, not a problem flag.',
  },
  {
    id: 'medical',
    label: 'Medical or pharmaceuticals',
    affectsStatus: true,
    instructions:
      'Report whether medicines, pills, syringes, medical devices, pharmaceutical packaging or branding, or a clinical setting are visible.',
  },
  {
    id: 'logos',
    label: 'Logo detection',
    affectsStatus: true,
    instructions:
      'Report whether a logo, brand mark, or wordmark is visible. If you recognize it, name it in the summary. If a mark is visible but not identifiable, say a logo is visible but not identified.',
  },
  {
    id: 'nudityGraphic',
    label: 'Nudity or graphic content',
    affectsStatus: true,
    instructions:
      'Report whether nudity or graphic content such as gore or severe injury is visible. summary must be a short non-graphic reason, such as "nudity is visible" or "a severe injury is visible". Do not describe sexual acts or graphic detail.',
  },
];

const CHECK_IDS = new Set(CHECKS.map((check) => check.id));

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
 * @returns {string[]}
 */
function parseChecks(value) {
  if (!Array.isArray(value)) return [];
  const seen = new Set();
  const selected = [];
  for (const entry of value) {
    const id = asString(entry);
    if (CHECK_IDS.has(id) && !seen.has(id)) {
      seen.add(id);
      selected.push(id);
    }
  }
  return selected;
}

const IMAGE_EXTENSION = /\.(jpe?g|png|gif|webp|tiff?|bmp|heic|heif|svg)$/i;
const NON_IMAGE_EXTENSION = /\.(pdf|docx?|pptx?|xlsx?|mp4|mov|avi|mkv|webm|mp3|wav|zip|txt|html?)$/i;

/**
 * @param {Record<string, unknown>} asset
 */
function isClearlyNonImage(asset) {
  const mime = asString(asset.mimeType).toLowerCase();
  const name = asString(asset.fileName).toLowerCase();

  if (mime.startsWith('image/') || IMAGE_EXTENSION.test(name)) {
    return false;
  }

  if (
    mime.startsWith('video/') ||
    mime.startsWith('audio/') ||
    mime.startsWith('application/') ||
    mime.startsWith('text/') ||
    NON_IMAGE_EXTENSION.test(name)
  ) {
    return true;
  }

  return false;
}

/**
 * @param {Record<string, unknown>} asset
 */
function pickImageUrl(asset) {
  return asString(asset.fileUrl) || asString(asset.previewUrl) || asString(asset.downloadUrl);
}

/**
 * @param {Record<string, unknown>} asset
 * @param {string[]} checks
 * @param {{ imageAttached: boolean, imageUploadError?: string }} imageContext
 */
function buildDetectionPrompt(asset, checks, imageContext) {
  const selected = CHECKS.filter((check) => checks.includes(check.id));
  const assetLines = [
    `Asset ID: ${asString(asset.id) || 'unknown'}`,
    `Name: ${asString(asset.name) || 'unknown'}`,
    `File name: ${asString(asset.fileName) || 'unknown'}`,
    `MIME type: ${asString(asset.mimeType) || 'unknown'}`,
    `Description: ${asString(asset.description) || 'none'}`,
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

  const checkLines = selected
    .map((check) => `- ${check.id} (${check.label}): ${check.instructions}`)
    .join('\n');

  const findingExample = selected
    .map(
      (check) =>
        `    { "id": "${check.id}", "detected": false, "confidence": 0, "summary": "short reason", "regions": [] }`
    )
    .join(',\n');

  const visionInstructions = imageContext.imageAttached
    ? 'An image file is attached to this message. Base every finding on what is visible in that image. Do not say you cannot see the image.'
    : imageContext.imageUploadError
      ? `No image file could be attached (${imageContext.imageUploadError}). Set every finding detected to false, confidence to 0, and explain that visual review was unavailable.`
      : 'No image was available. Set every finding detected to false, confidence to 0, and explain that visual review was unavailable.';

  return `You are an image content detection analyst for a digital asset library.

${visionInstructions}

Run only these checks:
${checkLines}

Return ONLY valid JSON (no markdown fences) matching this schema:
{
  "summary": "one short paragraph covering the selected checks",
  "findings": [
${findingExample}
  ]
}

Rules:
- Include one finding for each requested check id, and no others.
- detected is true only when the check subject is visibly present.
- confidence is an integer from 0 to 100.
- summary on each finding is one short sentence.
- Prefer visual evidence. Do not invent content that is not in the image.
- whatYouSee is a description. Include it when requested. It does not mean the image is a problem.
- regions is an array of boxes around what you can see for that check. Each box is percentages of the image, origin at the top left: { "x": 10, "y": 20, "width": 30, "height": 40 }. Use 0-100, not pixels.
- When detected is false, regions must be [].
- When detected is true, include one loose box per visible instance. If you cannot place a box, use [].
- For minors and nudityGraphic, one loose box around the relevant area is enough. Do not outline a body.

Asset:
${assetLines.join('\n')}`;
}

/**
 * @param {unknown} value
 * @returns {number | null}
 */
function asPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  const scaled = number >= 0 && number <= 1 ? number * 100 : number;
  if (scaled < 0 || scaled > 100) return null;
  return Math.round(scaled * 10) / 10;
}

/**
 * @param {unknown} value
 */
function normalizeRegions(value) {
  if (!Array.isArray(value)) return [];
  const regions = [];
  for (const entry of value) {
    if (!entry || typeof entry !== 'object') continue;
    const box = /** @type {Record<string, unknown>} */ (entry);
    const x = asPercent(box.x);
    const y = asPercent(box.y);
    const width = asPercent(box.width);
    const height = asPercent(box.height);
    if (x == null || y == null || width == null || height == null || width < 2 || height < 2) {
      continue;
    }
    const clampedWidth = Math.min(width, 100 - x);
    const clampedHeight = Math.min(height, 100 - y);
    if (clampedWidth < 2 || clampedHeight < 2) continue;
    regions.push({ x, y, width: clampedWidth, height: clampedHeight });
    if (regions.length >= 6) break;
  }
  return regions;
}

function normalizeReport(payload, checks) {
  const record = payload && typeof payload === 'object' ? /** @type {Record<string, unknown>} */ (payload) : {};
  const returned = Array.isArray(record.findings) ? record.findings : [];

  const findings = checks.map((id) => {
    const definition = CHECKS.find((check) => check.id === id);
    const match = returned.find((entry) => {
      if (!entry || typeof entry !== 'object') return false;
      return asString(/** @type {Record<string, unknown>} */ (entry).id) === id;
    });
    const item = match && typeof match === 'object' ? /** @type {Record<string, unknown>} */ (match) : {};
    const confidenceRaw = Number(item.confidence);
    const confidence = Number.isFinite(confidenceRaw) ? Math.max(0, Math.min(100, Math.round(confidenceRaw))) : 0;
    const detected = item.detected === true;

    return {
      id,
      label: definition?.label ?? id,
      detected,
      confidence,
      summary:
        asString(item.summary) ||
        (match ? '' : 'No result returned for this check.'),
      regions: detected ? normalizeRegions(item.regions) : [],
    };
  });

  const flagged = findings.some((finding) => {
    const definition = CHECKS.find((check) => check.id === finding.id);
    return definition?.affectsStatus !== false && finding.detected;
  });
  const descriptionOnly = findings.every((finding) => {
    const definition = CHECKS.find((check) => check.id === finding.id);
    return definition?.affectsStatus === false;
  });

  return {
    status: flagged ? 'flagged' : 'clear',
    summary:
      asString(record.summary) ||
      (flagged
        ? 'One or more selected checks were detected in the image.'
        : descriptionOnly
          ? 'Image description completed.'
          : 'None of the selected checks were detected in the image.'),
    findings,
    checksRun: checks,
    analyzedAt: new Date().toISOString(),
  };
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
 * @param {Record<string, unknown>} asset
 */
async function prepareAssetImage(asset) {
  const sourceUrl = pickImageUrl(asset);
  if (!sourceUrl) {
    return { fileNames: [], imageAttached: false, imageUploadError: 'no image URL was available' };
  }

  try {
    const downloaded = await downloadPreviewImage(sourceUrl, {
      expectedMimeType: asString(asset.mimeType) || undefined,
      fileName: asString(asset.fileName) || undefined,
    });

    if (!downloaded) {
      return {
        fileNames: [],
        imageAttached: false,
        imageUploadError: 'image URL was invalid',
      };
    }

    if (
      downloaded.mimeType &&
      !downloaded.mimeType.startsWith('image/') &&
      downloaded.mimeType !== 'application/octet-stream'
    ) {
      return {
        fileNames: [],
        imageAttached: false,
        imageUploadError: `downloaded file is ${downloaded.mimeType}, not an image`,
      };
    }

    const preferredName = asString(asset.fileName) || downloaded.fileName;
    const safeName = preferredName.replace(/[^\w.\-]+/g, '_') || downloaded.fileName;
    const uploadedUrl = await uploadCodeMieFile(downloaded.bytes, safeName, downloaded.mimeType);

    return {
      fileNames: [uploadedUrl],
      imageAttached: true,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'image prepare failed';
    console.error('[image-detection] image prepare failed:', message);
    return {
      fileNames: [],
      imageAttached: false,
      imageUploadError: message,
    };
  }
}

function resolveImageDetectionAssistantId() {
  return (
    process.env.CODEMIE_IMAGE_DETECTION_ASSISTANT_ID?.trim() ||
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
    const checks = parseChecks(body.checks);

    if (checks.length === 0) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Select at least one detection check.' }));
      return;
    }

    if (isClearlyNonImage(asset)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Image detection requires an image asset.' }));
      return;
    }

    const assistantId = resolveImageDetectionAssistantId();
    if (!assistantId) {
      res.statusCode = 503;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          error:
            'Image detection assistant is not configured — set CODEMIE_IMAGE_DETECTION_ASSISTANT_ID',
        })
      );
      return;
    }

    const imagePrep = await prepareAssetImage(asset);
    if (!imagePrep.imageAttached) {
      const unavailableNote = imagePrep.imageUploadError
        ? `Visual review was unavailable (${imagePrep.imageUploadError}).`
        : 'Visual review was unavailable because no image could be attached.';
      res.statusCode = 422;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: unavailableNote }));
      return;
    }

    const prompt = buildDetectionPrompt(asset, checks, { imageAttached: true });
    const generated = await callCodeMieAssistant(prompt, {
      assistantId,
      fileNames: imagePrep.fileNames,
    });
    const parsed = parseJsonFromGenerated(generated);
    const report = {
      ...normalizeReport(parsed, checks),
      imageAttached: true,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ report }));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Image detection analysis failed';
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: message }));
  }
}
