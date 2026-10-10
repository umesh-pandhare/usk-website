/** Typed access to environment variables (only VITE_* values reach the browser). */
export type ContactMode = 'mock' | 'mailto' | 'api';

const rawMode = (import.meta.env.VITE_CONTACT_MODE as string | undefined) ?? 'mock';

export const env = {
  contactMode: (['mock', 'mailto', 'api'].includes(rawMode) ? rawMode : 'mock') as ContactMode,
  apiBaseUrl: ((import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '').replace(/\/$/, ''),
  contactEndpoint: (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) ?? '/api/v1/enquiries',
} as const;
