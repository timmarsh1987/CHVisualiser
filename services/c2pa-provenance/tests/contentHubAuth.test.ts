import { afterEach, describe, expect, it, vi } from 'vitest';
import type { AppConfig } from '../src/config.js';
import {
  ContentHubAuthService,
  contentHubAuth,
  contentHubFetch,
} from '../src/contentHubAuth.js';

const config: AppConfig['contentHub'] = {
  baseUrl: 'https://content-hub.example.com',
  clientId: 'client-id',
  clientSecret: 'client-secret',
  originalRenditionNames: ['original'],
  updateMethod: 'PUT',
};

afterEach(() => {
  vi.unstubAllGlobals();
  contentHubAuth.invalidate();
});

describe('ContentHubAuthService', () => {
  it('requests and caches a client-credentials access token', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      Response.json({ access_token: 'token-1', token_type: 'Bearer', expires_in: 3600 })
    );
    vi.stubGlobal('fetch', fetchMock);
    const service = new ContentHubAuthService();

    await expect(service.getAccessToken(config)).resolves.toBe('token-1');
    await expect(service.getAccessToken(config)).resolves.toBe('token-1');
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const request = fetchMock.mock.calls[0];
    expect(request[0]).toBe('https://content-hub.example.com/oauth/token');
    expect(String(request[1]?.body)).toContain('grant_type=client_credentials');
  });

  it('invalidates the cached token and retries an API request once after 401', async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(Response.json({ access_token: 'token-1', expires_in: 3600 }))
      .mockResolvedValueOnce(new Response('', { status: 401 }))
      .mockResolvedValueOnce(Response.json({ access_token: 'token-2', expires_in: 3600 }))
      .mockResolvedValueOnce(Response.json({ id: 75233 }));
    vi.stubGlobal('fetch', fetchMock);

    const response = await contentHubFetch(config, '/api/entities/75233');
    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect((fetchMock.mock.calls[3][1]?.headers as Headers).get('Authorization'))
      .toBe('Bearer token-2');
  });
});
