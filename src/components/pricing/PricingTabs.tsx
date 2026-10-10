import { useState, type KeyboardEvent } from 'react';
import { pricingModels } from '@/data/pricing';
import { cn } from '@/utils/cn';
import { BillingToggle, type Billing } from './BillingToggle';
import { PlanCard } from './PlanCard';

/** Tabbed pricing: Subscription / Rental / Custom development, with a monthly–yearly toggle where relevant. */
export function PricingTabs() {
  const [activeId, setActiveId] = useState(pricingModels[0].id);
  const [billing, setBilling] = useState<Billing>('monthly');
  const active = pricingModels.find((model) => model.id === activeId) ?? pricingModels[0];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % pricingModels.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + pricingModels.length) % pricingModels.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = pricingModels.length - 1;
    else return;
    event.preventDefault();
    setActiveId(pricingModels[next].id);
    document.getElementById(`pricing-tab-${pricingModels[next].id}`)?.focus();
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-6">
        <div role="tablist" aria-label="Pricing model" className="flex w-full max-w-full gap-1 overflow-x-auto rounded-xl bg-slate-100 p-1 ring-1 ring-inset ring-slate-200 sm:w-auto">
          {pricingModels.map((model, index) => {
            const selected = model.id === activeId;
            return (
              <button
                key={model.id}
                id={`pricing-tab-${model.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`pricing-panel-${model.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(model.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  'min-h-[44px] flex-1 whitespace-nowrap rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 sm:flex-none sm:px-6',
                  selected ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-600 hover:text-navy-900',
                )}
              >
                {model.label}
              </button>
            );
          })}
        </div>

        <p className="max-w-2xl text-center text-pretty text-slate-600">{active.description}</p>
        {active.supportsBillingToggle && <BillingToggle value={billing} onChange={setBilling} />}
      </div>

      <div
        id={`pricing-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`pricing-tab-${active.id}`}
        tabIndex={0}
        className={cn(
          'mt-10 grid grid-cols-1 gap-6 rounded-2xl outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 md:grid-cols-2',
          active.plans.length >= 4 ? 'xl:grid-cols-4' : 'lg:grid-cols-3',
        )}
      >
        {active.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} billing={billing} showBilling={active.supportsBillingToggle} />
        ))}
      </div>
    </div>
  );
}
