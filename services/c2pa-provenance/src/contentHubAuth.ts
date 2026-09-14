import type { AppConfig } from './config.js';

interface ContentHubTokenResponse {
  access_token: string;
  token_type?: string;
  expires_in?: number;
}

type ContentHubConfig = AppConfig['contentHub'];

function compactError(value: string): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, 500);
}

function absoluteUrl(baseUrl: string, path: string): string {
  return new URL(path, `${baseUrl.replace(/\/+$/, '')}/`).toString();
}

export class ContentHubAuthService {
  private cachedToken: { token: string; expiresAt: number } | null = null;

  invalidate(): void {
    this.cachedToken = null;
  }

  async getAccessToken(config: ContentHubConfig): Promise<string> {
    if (this.cachedToken && this.cachedToken.expiresAt > Date.now() + 60_000) {
      return this.cachedToken.token;
    }

    const response = await fetch(absoluteUrl(config.baseUrl, '/oauth/token'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: config.clientId,
        client_secret: config.clientSecret,
      }),
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(
        `Content Hub authentication failed: HTTP ${response.status} ${compactError(
          await response.text()
        )}`
      );
    }

    const token = (await response.json()) as Partial<ContentHubTokenResponse>;
    if (!token.access_token) {
      throw new Error('Content Hub token response did not include access_token.');
    }

    const expiresIn = Number.isFinite(token.expires_in)
      ? Math.max(1, Number(token.expires_in))
      : 300;
    this.cachedToken = {
      token: token.access_token,
      expiresAt: Date.now() + expiresIn * 1000,
    };
    return token.access_token;
  }
}

export const contentHubAuth = new ContentHubAuthService();

export async function contentHubFetch(
  config: ContentHubConfig,
  path: string,
  init: RequestInit = {}
): Promise<Response> {
  const execute = async (token: string): Promise<Response> => {
    const headers = new Headers(init.headers);
    if (!headers.has('Accept')) headers.set('Accept', 'application/json');
    headers.set('Authorization', `Bearer ${token}`);
    return fetch(absoluteUrl(config.baseUrl, path), {
      ...init,
      headers,
      cache: 'no-store',
    });
  };

  let response = await execute(await contentHubAuth.getAccessToken(config));
  if (response.status === 401) {
    contentHubAuth.invalidate();
    response = await execute(await contentHubAuth.getAccessToken(config));
  }
  return response;
}
