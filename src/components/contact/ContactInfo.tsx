import { Icon, type IconName } from '@/components/common/Icon';
import { siteConfig } from '@/config/siteConfig';

interface InfoRow {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}

const rows: InfoRow[] = [
  { icon: 'mail', label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: 'phone', label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, '')}` },
  { icon: 'mapPin', label: 'Location', value: siteConfig.address },
  { icon: 'globe', label: 'Website', value: siteConfig.domain, href: siteConfig.url },
];

export function ContactInfo() {
  return (
    <aside aria-label="Contact details" className="min-w-0 rounded-2xl bg-navy-900 p-7 text-white sm:p-8">
      <h2 className="text-xl font-bold">Contact details</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">Prefer to write directly? Reach us using the details below.</p>
      <ul className="mt-7 space-y-6">
        {rows.map((row) => (
          <li key={row.label} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-200">
              <Icon name={row.icon} size={20} />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-slate-400">{row.label}</p>
              {row.href ? (
                <a
                  href={row.href}
                  {...(row.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="break-words font-medium text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
                >
                  {row.value}
                </a>
              ) : (
                <p className="break-words font-medium text-white">{row.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
