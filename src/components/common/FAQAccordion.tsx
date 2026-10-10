import { useId, useState } from 'react';
import type { FAQ } from '@/types';
import { cn } from '@/utils/cn';
import { Icon } from './Icon';

interface FAQAccordionProps {
  items: FAQ[];
}

/** Accessible disclosure list (button + region, aria-expanded). */
export function FAQAccordion({ items }: FAQAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-card">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy-900 transition-colors hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600 sm:px-6"
              >
                <span>{item.question}</span>
                <Icon
                  name="chevronDown"
                  className={cn('shrink-0 text-slate-400 transition-transform duration-200', open && 'rotate-180 text-brand-600')}
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
              <p className="px-5 pb-5 text-pretty leading-relaxed text-slate-600 sm:px-6">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
