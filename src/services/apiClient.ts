import { env } from '@/config/env';

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

/**
 * Minimal JSON fetch wrapper. Point VITE_API_BASE_URL at your Spring Boot
 * service when it is ready. Never send secrets from the browser.
 */
export async function postJson<TBody, TResponse = unknown>(path: string, body: TBody): Promise<TResponse> {
  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new ApiError(`Request failed with status ${response.status}`, response.status);
  }

  if (response.status === 204) return undefined as TResponse;
  return (await response.json()) as TResponse;
}
