import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { IconTile } from '@/components/common/Card';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';

export function PositioningSection() {
  return (
    <Section labelledBy="positioning-heading">
      <Reveal>
        <SectionTitle
          id="positioning-heading"
          wide
          title="Product-Based & Service-Based Software Company"
          description="USK Software Solutions builds its own software products and also develops customized solutions for businesses. Start with something ready to use, or build exactly what you need."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="relative h-full overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="relative">
              <IconTile tone="dark">
                <Icon name="package" size={22} />
              </IconTile>
              <h3 className="mt-6 text-2xl font-bold">Products</h3>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-slate-300">
                Ready-to-use software solutions available through subscription, rental and customized pricing models.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-sm text-brand-100">
                {['Subscription', 'Rental', 'Custom pricing', 'Enterprise'].map((label) => (
                  <li key={label} className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-inset ring-white/15">
                    {label}
                  </li>
                ))}
              </ul>
              <Button to="/products" variant="light" className="mt-8" arrow>
                Explore Products
              </Button>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
            <IconTile>
              <Icon name="code" size={22} />
            </IconTile>
            <h3 className="mt-6 text-2xl font-bold text-navy-900">Services</h3>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-slate-600">
              Custom software development and technology services designed around your business requirements.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm text-slate-700">
              {['Web applications', 'Java & Spring Boot', 'React', 'APIs', 'Automation'].map((label) => (
                <li key={label} className="rounded-full bg-slate-100 px-3 py-1 ring-1 ring-inset ring-slate-200">
                  {label}
                </li>
              ))}
            </ul>
            <Button to="/services" variant="outline" className="mt-8" arrow>
              Explore Services
            </Button>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
