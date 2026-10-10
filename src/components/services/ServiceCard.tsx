import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { IconTile } from '@/components/common/Card';
import type { Service } from '@/types';
import { contactLink } from '@/utils/format';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-7">
      <div className="flex items-center justify-between">
        <IconTile>
          <Icon name={service.icon} size={22} />
        </IconTile>
        <span className="text-sm font-semibold tabular-nums text-slate-400" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-navy-900">{service.title}</h3>
      <p className="mt-2 text-pretty text-slate-600">{service.description}</p>
      <ul className="mt-5 space-y-2" aria-label={`${service.title} benefits`}>
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-700">
            <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Button
          to={contactLink(service.contactOption)}
          variant="ghost"
          arrow
          className="-ml-4"
          aria-label={`Discuss ${service.title}`}
        >
          Discuss this service
        </Button>
      </div>
    </article>
  );
}
