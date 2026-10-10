import type { ReactNode } from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { Reveal } from './Reveal';

interface CTAAction {
  label: string;
  to: string;
}

interface CTASectionProps {
  title: string;
  description: ReactNode;
  primary: CTAAction;
  secondary?: CTAAction;
  id?: string;
  /** Background of the surrounding band, so the card blends into the page section above. */
  surface?: 'white' | 'mist';
}

/** Reusable closing call-to-action band. */
export function CTASection({ title, description, primary, secondary, id = 'cta-heading', surface = 'white' }: CTASectionProps) {
  return (
    <section aria-labelledby={id} className={`pb-16 sm:pb-20 lg:pb-24 ${surface === 'mist' ? 'bg-mist' : 'bg-white'}`}>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
            />
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 id={id} className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button to={primary.to} variant="light" size="lg" arrow>
                  {primary.label}
                </Button>
                {secondary && (
                  <Button to={secondary.to} variant="secondary" size="lg">
                    {secondary.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
