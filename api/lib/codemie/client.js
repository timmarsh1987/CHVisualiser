import { getCodeMieAccessToken, getCodeMieApiBase } from './auth.js';

/**
 * @param {string} prompt
 * @param {{ assistantId?: string, llmModel?: string, propagateHeaders?: boolean, headers?: Record<string, string> }} [options]
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
