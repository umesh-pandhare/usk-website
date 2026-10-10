import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Icon } from '@/components/common/Icon';
import { Logo } from '@/components/common/Logo';
import { siteConfig } from '@/config/siteConfig';
import { footerNav, legalNav } from '@/data/company';

const linkClass =
  'rounded text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400';

const socials = [
  { key: 'github', label: 'GitHub', icon: 'github' as const, href: siteConfig.socialLinks.github },
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin' as const, href: siteConfig.socialLinks.linkedin },
].filter((item) => Boolean(item.href));

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-300">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 text-lg font-semibold text-white">{siteConfig.companyName}</p>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-400">{siteConfig.tagline}</p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {socials.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.companyName} on ${item.label}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-brand-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
                    >
                      <Icon name={item.icon} size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold text-white">Navigation</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-sm font-semibold text-white">Legal</h2>
            <ul className="mt-4 space-y-3">
              {legalNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <p>{siteConfig.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
