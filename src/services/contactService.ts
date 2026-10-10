import { env } from '@/config/env';
import { siteConfig } from '@/config/siteConfig';
import { contactServiceOptions } from '@/data/company';
import type { ContactFormValues } from '@/types';
import { postJson } from './apiClient';

export interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

const serviceLabel = (value: string) => contactServiceOptions.find((option) => option.value === value)?.label ?? value;

function toPayload(values: ContactFormValues): EnquiryPayload {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim() || undefined,
    company: values.company.trim() || undefined,
    service: values.service,
    budget: values.budget || undefined,
    message: values.message.trim(),
  };
}

function openMailClient(payload: EnquiryPayload) {
  const lines: string[] = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    ...(payload.phone ? [`Phone: ${payload.phone}`] : []),
    ...(payload.company ? [`Company: ${payload.company}`] : []),
    `Service: ${serviceLabel(payload.service)}`,
    ...(payload.budget ? [`Budget: ${payload.budget}`] : []),
    '',
    payload.message,
  ];

  const subject = encodeURIComponent(`Website enquiry: ${serviceLabel(payload.service)}`);
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

/**
 * Single entry point for the contact form.
 *
 *  mock   → simulates success (default; no data leaves the browser)
 *  mailto → opens the visitor's mail app, pre-filled
 *  api    → POSTs JSON to your backend (e.g. Spring Boot @PostMapping("/api/v1/enquiries"))
 */
export async function submitEnquiry(values: ContactFormValues): Promise<void> {
  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (values.website) return;

  const payload = toPayload(values);

  switch (env.contactMode) {
    case 'api':
      await postJson<EnquiryPayload>(env.contactEndpoint, payload);
      return;
    case 'mailto':
      openMailClient(payload);
      return;
    default:
      await new Promise((resolve) => setTimeout(resolve, 900));
      if (import.meta.env.DEV) console.info('[contactService:mock] enquiry (not sent)', payload);
  }
}
