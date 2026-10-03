import { getCodeMieAccessToken, getCodeMieApiBase } from './auth.js';

/**
 * @param {Buffer} bytes
 * @param {string} fileName
 * @param {string} [mimeType]
 * @returns {Promise<string>} CodeMie file_url to pass in file_names
 */
export async function uploadCodeMieFile(bytes, fileName, mimeType = 'application/octet-stream') {
  const token = await getCodeMieAccessToken();
  const apiBase = getCodeMieApiBase();

  const form = new FormData();
  form.append(
    'file',
    new Blob([new Uint8Array(bytes)], { type: mimeType || 'application/octet-stream' }),
    fileName || 'asset.bin'
  );

  const response = await fetch(`${apiBase}/v1/files/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: form,
  });

  const text = await response.text();
  if (text.trim().startsWith('<')) {
    throw new Error('CodeMie file upload returned HTML — check auth credentials');
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`CodeMie file upload returned non-JSON (${response.status})`);
  }

  if (!response.ok) {
    throw new Error(data.error ?? data.message ?? `CodeMie file upload failed (${response.status})`);
  }

  const fileUrl =
    data.file_url ??
    data.fileUrl ??
    data.id ??
    data.files?.[0]?.file_url ??
    data.files?.[0]?.fileUrl;

  if (!fileUrl || typeof fileUrl !== 'string') {
    throw new Error('CodeMie file upload succeeded but no file_url was returned');
  }

  return fileUrl;
}

/**
 * @param {string} prompt
 * @param {{
 *   assistantId?: string,
 *   llmModel?: string,
 *   propagateHeaders?: boolean,
 *   headers?: Record<string, string>,
 *   fileNames?: string[],
 * }} [options]
 */
export async function callCodeMieAssistant(prompt, options = {}) {
  const assistantId =
    options.assistantId ??
    process.env.CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID?.trim() ??
    process.env.CODEMIE_MY_AGENT_ASSISTANT_ID?.trim();

  if (!assistantId) {
    throw new Error('Missing CodeMie assistant ID (set CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID)');
  }

  const token = await getCodeMieAccessToken();
  const apiBase = getCodeMieApiBase();
  const fileNames = Array.isArray(options.fileNames)
    ? options.fileNames.filter((name) => typeof name === 'string' && name.trim())
    : [];

  const response = await fetch(`${apiBase}/v1/assistants/${assistantId}/model`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers ?? {}),
    },
    body: JSON.stringify({
      text: prompt,
      stream: false,
      ...(fileNames.length > 0 ? { file_names: fileNames } : {}),
      ...(options.llmModel ? { llmModel: options.llmModel } : {}),
      ...(options.propagateHeaders ? { propagate_headers: true } : {}),
    }),
  });

  const text = await response.text();

  if (text.trim().startsWith('<')) {
    throw new Error('CodeMie returned HTML — check auth credentials');
  }

  const data = JSON.parse(text);

  if (!response.ok) {
    throw new Error(data.error ?? `CodeMie failed (${response.status})`);
  }

  return data.generated?.trim() ?? '';
}
