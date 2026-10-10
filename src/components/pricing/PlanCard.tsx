import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import type { PricingPlan } from '@/types';
import { cn } from '@/utils/cn';
import { formatCurrency } from '@/utils/format';
import type { Billing } from './BillingToggle';

interface PlanCardProps {
  plan: PricingPlan;
  billing: Billing;
  showBilling: boolean;
}

export function PlanCard({ plan, billing, showBilling }: PlanCardProps) {
  const yearly = showBilling && billing === 'yearly' && plan.yearlyPrice !== null;
  const hasNumericPrice = plan.monthlyPrice !== null;
  const savings = plan.monthlyPrice !== null && plan.yearlyPrice !== null ? plan.monthlyPrice * 12 - plan.yearlyPrice : 0;
  const dark = plan.highlighted;

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-2xl p-6 sm:p-7',
        dark ? 'bg-navy-900 text-white shadow-glow' : 'border border-slate-200 bg-white shadow-card',
      )}
    >
      {plan.highlighted && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
          Most popular
        </span>
      )}
      <h3 className={cn('text-xl font-bold', dark ? 'text-white' : 'text-navy-900')}>{plan.name}</h3>
      <p className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-slate-300' : 'text-slate-600')}>{plan.description}</p>

      <div className="mt-6">
        {hasNumericPrice ? (
          <>
            <p className="flex items-baseline gap-1">
              <span className={cn('text-4xl font-extrabold tracking-tight', !dark && 'text-navy-900')}>
                {formatCurrency(yearly ? (plan.yearlyPrice as number) : (plan.monthlyPrice as number))}
              </span>
              <span className={cn('text-sm font-medium', dark ? 'text-slate-400' : 'text-slate-500')}>{yearly ? '/ year' : '/ month'}</span>
            </p>
            <p className={cn('mt-1 min-h-[1.25rem] text-sm', dark ? 'text-brand-200' : 'text-brand-700')}>
              {yearly && savings > 0 ? `Save ${formatCurrency(savings)} compared with monthly` : plan.priceNote ?? ''}
            </p>
          </>
        ) : (
          <>
            <p className={cn('text-4xl font-extrabold tracking-tight', !dark && 'text-navy-900')}>{plan.priceLabel ?? 'Custom'}</p>
            <p className={cn('mt-1 min-h-[1.25rem] text-sm', dark ? 'text-slate-400' : 'text-slate-500')}>{plan.priceNote ?? ''}</p>
          </>
        )}
      </div>

      <ul className="mt-6 space-y-3" aria-label={`${plan.name} features`}>
        {plan.features.map((feature) => (
          <li key={feature} className={cn('flex items-start gap-2.5 text-sm', dark ? 'text-slate-200' : 'text-slate-700')}>
            <Icon name="check" size={16} className={cn('mt-0.5 shrink-0', dark ? 'text-brand-300' : 'text-brand-600')} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button to={plan.cta.to} variant={dark ? 'light' : hasNumericPrice ? 'primary' : 'outline'} fullWidth>
          {plan.cta.label}
        </Button>
      </div>
    </article>
  );
}
