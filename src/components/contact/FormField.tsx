import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface FieldShellProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: ReactNode;
  children: ReactNode;
}

export function FieldShell({ id, label, required, error, hint, children }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required ? (
          <span className="ml-1 text-brand-600" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-slate-500">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

const controlClass = (error?: string) =>
  cn(
    'block min-h-[48px] w-full rounded-lg border bg-white px-3.5 py-2.5 text-base text-navy-900 shadow-sm transition-colors placeholder:text-slate-400',
    'focus:border-brand-500 focus:outline focus:outline-2 focus:outline-brand-500/40',
    error ? 'border-red-500' : 'border-slate-300 hover:border-slate-400',
  );

const describedBy = (id: string, error?: string, hint?: ReactNode) =>
  error ? `${id}-error` : hint ? `${id}-hint` : undefined;

type CommonFieldProps = { id: string; label: string; error?: string; hint?: ReactNode };

export function TextInput({ id, label, error, hint, required, ...rest }: CommonFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <input
        id={id}
        name={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        className={controlClass(error)}
        {...rest}
      />
    </FieldShell>
  );
}

export function SelectInput({
  id,
  label,
  error,
  hint,
  required,
  children,
  ...rest
}: CommonFieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <select
        id={id}
        name={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        className={controlClass(error)}
        {...rest}
      >
        {children}
      </select>
    </FieldShell>
  );
}

export function TextArea({ id, label, error, hint, required, ...rest }: CommonFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <textarea
        id={id}
        name={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClass(error), 'min-h-[140px] resize-y')}
        {...rest}
      />
    </FieldShell>
  );
}
