import type { ContactFormErrors, ContactFormValues } from '@/types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidEmail = (value: string): boolean => EMAIL_PATTERN.test(value.trim());

export const isValidPhone = (value: string): boolean => {
  const digits = value.replace(/\D/g, '');
  return /^[+()\d\s-]+$/.test(value.trim()) && digits.length >= 7 && digits.length <= 15;
};

export const MESSAGE_MIN_LENGTH = 20;
export const MESSAGE_MAX_LENGTH = 2000;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Your name must be at least 2 characters.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';

  if (values.phone.trim() && !isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number, for example +1 555 000 0000.';
  }

  if (!values.service) errors.service = 'Please select the service you need.';

  if (!values.message.trim()) errors.message = 'Please tell us a little about your requirement.';
  else if (values.message.trim().length < MESSAGE_MIN_LENGTH) {
    errors.message = `Please write at least ${MESSAGE_MIN_LENGTH} characters so we can understand your requirement.`;
  } else if (values.message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Please keep your message under ${MESSAGE_MAX_LENGTH} characters.`;
  }

  return errors;
}
