import { FounderCard } from '@/components/about/FounderCard';
import { Button } from '@/components/common/Button';
import { CTASection } from '@/components/common/CTASection';
import { Icon } from '@/components/common/Icon';
import { IconTile } from '@/components/common/Card';
import { PageHeader } from '@/components/common/PageHeader';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { companyPillars, founder, teamMembers, testimonials, values } from '@/data/company';
import { useSeo } from '@/hooks/useSeo';

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'USK Software Solutions was founded to build practical, scalable and accessible software for businesses — combining product development, custom software, automation and long-term support.',
    path: '/about',
  });

  return (
    <>
      <PageHeader
        title="Building Software That Solves Real Business Problems"
        description="USK Software Solutions was founded with the vision of building practical, scalable and accessible software solutions for businesses."
        breadcrumbs={[{ label: 'About' }]}
      />

      <Section labelledBy="story-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              id="story-heading"
              title="Our story"
              description="We believe good software should be understandable, dependable and within reach of businesses of every size. That belief shapes how we build both our own products and the custom solutions we deliver for others."
            />
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-slate-600">
              The company combines product development with custom engineering so that customers can start with something ready to use, or build exactly what their business needs.
            </p>
            <Button to="/contact" className="mt-8" arrow>
              Talk to Us
            </Button>
          </Reveal>

          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {companyPillars.map((pillar, index) => (
              <li key={pillar.title}>
                <Reveal delay={Math.min(index, 3) * 0.05}>
                  <div className="flex gap-5 py-5">
                    <IconTile>
                      <Icon name={pillar.icon} size={22} />
                    </IconTile>
                    <div>
                      <h3 className="font-bold text-navy-900">{pillar.title}</h3>
                      <p className="mt-1 text-pretty text-slate-600">{pillar.description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="mist" labelledBy="founder-heading">
        <SectionTitle id="founder-heading" title="Founder" description="USK Software Solutions is led by a hands-on engineer who builds and ships software every day." />
        <div className="mt-10">
          <Reveal>
            <FounderCard founder={founder} />
          </Reveal>
        </div>
      </Section>

      <Section labelledBy="values-heading">
        <SectionTitle id="values-heading" title="How we approach our work" />
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <IconTile>
                <Icon name={value.icon} size={22} />
              </IconTile>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {teamMembers.length > 0 && (
        <Section tone="mist" labelledBy="team-heading">
          <SectionTitle id="team-heading" title="Team" />
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <li key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="font-bold text-navy-900">{member.name}</h3>
                <p className="text-sm font-medium text-brand-700">{member.role}</p>
                {member.bio && <p className="mt-2 text-sm text-slate-600">{member.bio}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {testimonials.length > 0 && (
        <Section labelledBy="testimonials-heading">
          <SectionTitle id="testimonials-heading" title="What clients say" />
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <li key={item.author}>
                <figure className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                  <blockquote className="text-pretty text-lg text-navy-900">{item.quote}</blockquote>
                  <figcaption className="mt-4 text-sm text-slate-600">
                    <span className="font-semibold text-navy-900">{item.author}</span>, {item.role}, {item.company}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CTASection
        surface="white"
        title="Looking for the Right Software? Explore Our Products."
        description="See what is available today, or tell us what you need and we will help you decide."
        primary={{ label: 'Explore Products', to: '/products' }}
        secondary={{ label: 'Talk to Us', to: '/contact' }}
      />
    </>
  );
}
