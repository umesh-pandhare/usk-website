import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Icon } from './Icon';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}

/** Dark intro band used at the top of every inner page. Renders the page's <h1>. */
export function PageHeader({ title, description, breadcrumbs, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-navy-950 pb-14 pt-12 sm:pb-20 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl" />
      <Container className="relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="rounded transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <Icon name="chevronDown" size={14} className="-rotate-90 text-slate-600" />
                  {crumb.to ? (
                    <Link to={crumb.to} className="rounded transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-slate-200">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </header>
  );
}
