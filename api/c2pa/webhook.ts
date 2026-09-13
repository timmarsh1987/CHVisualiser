import { timingSafeEqual } from 'node:crypto';
import { processWebhook } from '../../services/c2pa-provenance/src/webhook.js';

export const config = {
  maxDuration: 300,
};

interface VercelRequest {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
}

function bearerToken(request: VercelRequest): string | null {
  const raw = request.headers.authorization;
  const header = Array.isArray(raw) ? raw[0] : raw;
  const match = header?.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() ?? null;
}

function equalSecret(provided: string | null, expected: string): boolean {
  if (!provided) return false;
  const left = Buffer.from(provided);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
): Promise<void> {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ message: 'Method not allowed.' });
    return;
  }

  const secret = process.env.C2PA_WEBHOOK_SECRET?.trim();
  if (!secret) {
    response.status(503).json({ message: 'C2PA_WEBHOOK_SECRET is not configured.' });
    return;
  }
  if (!equalSecret(bearerToken(request), secret)) {
    response.status(401).json({ message: 'Unauthorized.' });
    return;
  }

  try {
    const payload =
      typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
    const result = await processWebhook(payload, {
      error: (...values: unknown[]) => console.error(...values),
    });
    response.status(result.status === 'failed' ? 500 : 200).json(result);
  } catch (error) {
    console.error('C2PA webhook request failed.', error);
    response.status(400).json({
      status: 'failed',
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
