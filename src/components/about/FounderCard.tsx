import { Badge } from '@/components/common/Badge';
import type { Founder } from '@/types';

export function FounderCard({ founder }: { founder: Founder }) {
  const initials = founder.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
      <div className="grid md:grid-cols-[16rem_1fr]">
        <div className="relative flex items-center justify-center bg-navy-900 px-6 py-10 md:py-0">
          <div aria-hidden="true" className="absolute inset-0 bg-grid-light bg-[size:32px_32px] opacity-60" />
          <span
            aria-hidden="true"
            className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-4xl font-extrabold text-white ring-4 ring-white/10"
          >
            {initials}
          </span>
        </div>
        <div className="p-7 sm:p-9">
          <h3 className="text-2xl font-bold tracking-tight text-navy-900">{founder.name}</h3>
          <p className="mt-1 font-medium text-brand-700">{founder.title}</p>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-slate-600">{founder.bio}</p>
          <h4 className="mt-6 text-sm font-semibold text-navy-900">Core skills</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {founder.skills.map((skill) => (
              <li key={skill}>
                <Badge tone="neutral">{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
