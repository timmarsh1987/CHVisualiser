/**
 * Extract and parse JSON from a CodeMie assistant response that may include markdown fences.
 * @param {string} generated
 */
export function parseJsonFromGenerated(generated) {
  const trimmed = generated.trim();
  if (!trimmed) {
    throw new Error('CodeMie returned an empty response');
  }

  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = (fenced?.[1] ?? trimmed).trim();

  try {
    return JSON.parse(candidate);
  } catch {
    const start = candidate.indexOf('{');
    const end = candidate.lastIndexOf('}');
    if (start >= 0 && end > start) {
      return JSON.parse(candidate.slice(start, end + 1));
    }
    throw new Error('Could not parse JSON from CodeMie response');
  }
}
