import type { ReactNode } from 'react';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { siteConfig } from '@/config/siteConfig';

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  intro: string;
  breadcrumb: string;
  sections: LegalSection[];
}

export function LegalPage({ title, intro, breadcrumb, sections }: LegalPageProps) {
  return (
    <>
      <PageHeader title={title} description={intro} breadcrumbs={[{ label: breadcrumb }]} />
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-slate-500">Last updated: {siteConfig.legal.lastUpdated}</p>
            <div className="mt-8 space-y-10">
              {sections.map((section, index) => (
                <section key={section.heading} aria-labelledby={`legal-${index}`}>
                  <h2 id={`legal-${index}`} className="text-xl font-bold tracking-tight text-navy-900">
                    {index + 1}. {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-pretty leading-relaxed text-slate-700">{section.body}</div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
