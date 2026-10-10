import { Button } from '@/components/common/Button';
import { CTASection } from '@/components/common/CTASection';
import { Icon } from '@/components/common/Icon';
import { IconTile } from '@/components/common/Card';
import { PageHeader } from '@/components/common/PageHeader';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { siteConfig } from '@/config/siteConfig';
import { careerPerks, jobOpenings } from '@/data/company';
import { useSeo } from '@/hooks/useSeo';

export default function Careers() {
  useSeo({
    title: 'Careers',
    description: 'Join USK Software Solutions and help build software products and technology solutions for modern businesses.',
    path: '/careers',
  });

  return (
    <>
      <PageHeader
        title="Build software with us"
        description="We are a small team focused on practical, well-engineered software. If that sounds like your kind of work, we would like to hear from you."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <Section labelledBy="perks-heading">
        <SectionTitle id="perks-heading" title="Why work at USK" />
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {careerPerks.map((perk) => (
            <li key={perk.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <IconTile>
                <Icon name={perk.icon} size={22} />
              </IconTile>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{perk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{perk.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="openings-heading">
        <SectionTitle id="openings-heading" title="Open positions" />
        {jobOpenings.length > 0 ? (
          <ul className="mt-10 space-y-4">
            {jobOpenings.map((job) => (
              <li key={job.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{job.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {job.type} · {job.location}
                  </p>
                  <p className="mt-2 text-slate-600">{job.summary}</p>
                </div>
                <Button
                  href={`mailto:${job.applyEmail ?? siteConfig.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  variant="outline"
                >
                  Apply
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center sm:p-12">
            <h3 className="text-xl font-bold text-navy-900">No open positions right now</h3>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-slate-600">
              We are not hiring for a specific role at the moment, but we are always interested in meeting capable developers and designers. Send us your details and a short note about your work.
            </p>
            <Button
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('General application')}`}
              className="mt-6"
              size="lg"
            >
              Send your details
            </Button>
          </div>
        )}
      </Section>

      <CTASection
        surface="mist"
        title="Have a Software Idea? Let’s Build It Together."
        description="Not looking for a job? Tell us about a project instead."
        primary={{ label: 'Start a Project', to: '/contact' }}
      />
    </>
  );
}
