import { cn } from '@/utils/cn';

export type Billing = 'monthly' | 'yearly';

interface BillingToggleProps {
  value: Billing;
  onChange: (value: Billing) => void;
}

const options: Array<{ value: Billing; label: string }> = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' },
];

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div role="group" aria-label="Billing period" className="inline-flex rounded-full bg-slate-100 p-1 ring-1 ring-inset ring-slate-200">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            'min-h-[44px] rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600',
            value === option.value ? 'bg-navy-900 text-white shadow-sm' : 'text-slate-600 hover:text-navy-900',
          )}
        >
          {option.label}
          {option.value === 'yearly' && (
            <>
              {' '}
              <span className={cn("ml-1.5 text-xs font-medium", value === "yearly" ? "text-brand-200" : "text-brand-700")}>Save more</span>
            </>
          )}
        </button>
      ))}
    </div>
  );
}
