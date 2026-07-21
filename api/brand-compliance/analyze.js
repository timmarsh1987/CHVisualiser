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
 * @param {Record<string, unknown>} asset
 * @param {Record<string, unknown>} [options]
 * @param {{ imageAttached: boolean, imageUploadError?: string }} [imageContext]
 */
function buildCompliancePrompt(asset, options = {}, imageContext = { imageAttached: false }) {
  const brandName = asString(options.brandName) || 'Cytiva';
  const brandGuidelines =
    asString(options.brandGuidelines) ||
    asString(options.rulesSummary) ||
    'Follow Cytiva brand standards for logo usage, color palette, typography, imagery style, and regulatory disclaimers.';

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
    ? `An image file of this asset is attached to this message. Visually inspect it for brand compliance (logo usage, colors, typography, composition, disclaimers, crop/quality issues). Do not say you cannot see the image.`
    : imageContext.imageUploadError
      ? `No image file could be attached (${imageContext.imageUploadError}). Base your assessment on metadata only and note that visual review was unavailable.`
      : `No preview image was available. Base your assessment on metadata, file name, and MIME type, and note that visual review was unavailable.`;

  return `You are a DAM brand compliance analyst for ${brandName}.

${visionInstructions}

Review the digital asset against the brand guidelines and return ONLY valid JSON (no markdown fences) matching this schema:
{
  "status": "pass" | "warning" | "fail",
  "score": number between 0 and 100,
  "summary": "one paragraph executive summary",
  "issues": [
    {
      "id": "issue-1",
      "severity": "critical" | "major" | "minor",
      "category": "logo | color | typography | imagery | copy | legal | metadata | other",
      "title": "short issue title",
      "description": "what is wrong",
      "recommendation": "how to fix it"
    }
  ],
  "passedChecks": ["short bullet of what looks compliant"]
}

Brand guidelines:
${brandGuidelines}

Asset to review:
${assetLines.join('\n')}

Be specific and actionable. Prefer visual evidence from the attached image when available.`;
}

/**
 * @param {unknown} payload
 */
function normalizeReport(payload) {
  const record = payload && typeof payload === 'object' ? /** @type {Record<string, unknown>} */ (payload) : {};

  const status = asString(record.status);
  const normalizedStatus =
    status === 'pass' || status === 'warning' || status === 'fail' ? status : 'warning';

  const scoreRaw = Number(record.score);
  const score = Number.isFinite(scoreRaw) ? Math.max(0, Math.min(100, scoreRaw)) : 0;

  const issues = Array.isArray(record.issues)
    ? record.issues
        .filter((issue) => issue && typeof issue === 'object')
        .map((issue, index) => {
          const item = /** @type {Record<string, unknown>} */ (issue);
          const severity = asString(item.severity);
          return {
            id: asString(item.id) || `issue-${index + 1}`,
            severity:
              severity === 'critical' || severity === 'major' || severity === 'minor'
                ? severity
                : 'minor',
            category: asString(item.category) || 'other',
            title: asString(item.title) || 'Compliance issue',
            description: asString(item.description) || '',
            recommendation: asString(item.recommendation) || '',
          };
        })
    : [];

  const passedChecks = Array.isArray(record.passedChecks)
    ? record.passedChecks.map((entry) => asString(entry)).filter(Boolean)
    : [];

  return {
    status: normalizedStatus,
    score,
    summary: asString(record.summary) || 'Brand compliance analysis completed.',
    issues,
    passedChecks,
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
    console.error('[brand-compliance] image prepare failed:', message);
    return {
      fileNames: [],
      imageAttached: false,
      imageUploadError: message,
    };
  }
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

    const imagePrep = await prepareAssetImage(asset);
    const prompt = buildCompliancePrompt(asset, options, {
      imageAttached: imagePrep.imageAttached,
      imageUploadError: imagePrep.imageUploadError,
    });

    const generated = await callCodeMieAssistant(prompt, {
      fileNames: imagePrep.fileNames,
    });
    const parsed = parseJsonFromGenerated(generated);
    const report = {
      ...normalizeReport(parsed),
      imageAttached: imagePrep.imageAttached,
      ...(imagePrep.imageUploadError ? { imageUploadError: imagePrep.imageUploadError } : {}),
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ report }));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Brand compliance analysis failed';
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: message }));
  }
}
