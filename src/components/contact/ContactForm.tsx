import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { budgetOptions, contactServiceOptions } from '@/data/company';
import { submitEnquiry } from '@/services/contactService';
import type { ContactFormErrors, ContactFormValues } from '@/types';
import { MESSAGE_MAX_LENGTH, validateContactForm } from '@/utils/validators';
import { SelectInput, TextArea, TextInput } from './FormField';

const emptyValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  website: '',
};

const fieldOrder: Array<keyof ContactFormValues> = ['name', 'email', 'phone', 'company', 'service', 'budget', 'message'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const successRef = useRef<HTMLDivElement>(null);

  // Pre-select the service when arriving from a service / product / pricing CTA.
  useEffect(() => {
    const requested = searchParams.get('service');
    if (requested && contactServiceOptions.some((option) => option.value === requested)) {
      setValues((current) => (current.service ? current : { ...current, service: requested }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof ContactFormValues]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      await submitEnquiry(values);
      setStatus('success');
      setValues(emptyValues);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center outline-none"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Icon name="checkCircle" size={26} />
        </span>
        <h2 className="mt-4 text-xl font-bold text-navy-900">Thank you — your enquiry is ready.</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-700">
          We will review your requirement and get back to you by email.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-heading" className="space-y-5">
      <h2 id="contact-form-heading" className="sr-only">
        Enquiry form
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextInput id="name" label="Name" required autoComplete="name" value={values.name} onChange={handleChange} error={errors.name} />
        <TextInput
          id="email"
          label="Email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextInput
          id="phone"
          label="Phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <TextInput id="company" label="Company" autoComplete="organization" value={values.company} onChange={handleChange} />
        <SelectInput id="service" label="Service required" required value={values.service} onChange={handleChange} error={errors.service}>
          <option value="">Select a service</option>
          {contactServiceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectInput>
        <SelectInput id="budget" label="Budget" value={values.budget} onChange={handleChange}>
          <option value="">Select a budget range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectInput>
      </div>

      <TextArea
        id="message"
        label="Message"
        required
        rows={6}
        maxLength={MESSAGE_MAX_LENGTH}
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        hint="Tell us what you want to build or achieve."
      />

      {/* Honeypot field — hidden from people and assistive tech */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          We could not send your enquiry. Please try again, or email us directly.
        </p>
      )}

      <Button type="submit" size="lg" fullWidth disabled={status === 'submitting'} className="sm:w-auto">
        {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        {status !== 'submitting' && <Icon name="send" size={16} />}
      </Button>
    </form>
  );
}
