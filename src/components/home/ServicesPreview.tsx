import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { services } from '@/data/services';

export function ServicesPreview() {
  const featured = services.filter((service) => service.featured);

  return (
    <Section labelledBy="services-preview-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div>
              <SectionTitle
                id="services-preview-heading"
                title="Custom software, built around your business"
                description="From a first prototype to a production system, we design, build and support software that fits the way you work."
              />
            </div>
            <Button to="/services" className="mt-8" arrow>
              Explore Services
            </Button>
          </div>
        </Reveal>

        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {featured.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={Math.min(index, 3) * 0.05}>
                <div className="flex gap-5 py-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
                    <p className="mt-1.5 text-pretty text-slate-600">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
