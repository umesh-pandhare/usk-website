import { CTASection } from '@/components/common/CTASection';
import { PageHeader } from '@/components/common/PageHeader';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ServiceCard } from '@/components/services/ServiceCard';
import { engagementModels, services } from '@/data/services';
import { useSeo } from '@/hooks/useSeo';

export default function Services() {
  useSeo({
    title: 'Software Development Services',
    description:
      'Custom software, web applications, React, Java and Spring Boot development, REST APIs, business automation, maintenance and technical consulting.',
    path: '/services',
  });

  return (
    <>
      <PageHeader
        title="Software development services"
        description="Custom software and technology services designed around your business requirements — from first idea to long-term support."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <Section labelledBy="services-list-heading">
        <SectionTitle id="services-list-heading" title="What we can build for you" description="Pick a single service or combine several. Every engagement starts with understanding your goals." />
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={(index % 3) * 0.06} className="h-full">
                <ServiceCard service={service} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="engagement-heading">
        <SectionTitle id="engagement-heading" title="Ways to work with us" description="Choose the engagement style that matches your project." />
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {engagementModels.map((model) => (
            <li key={model.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-navy-900">{model.title}</h3>
              <p className="mt-2 text-pretty text-slate-600">{model.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ProcessSection />

      <div className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <CTASection
          title="Looking for the Right Software? Explore Our Products."
          description="Sometimes a ready-made product is the fastest route. See what is available before commissioning a custom build."
          primary={{ label: 'Explore Products', to: '/products' }}
          secondary={{ label: 'Start a Project', to: '/contact' }}
        />
      </div>
    </>
  );
}
