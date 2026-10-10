import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { CTASection } from '@/components/common/CTASection';
import { PageHeader } from '@/components/common/PageHeader';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projectCategories, projectStackLabels, projects } from '@/data/projects';
import { useSeo } from '@/hooks/useSeo';
import type { ProjectStack } from '@/types';
import { cn } from '@/utils/cn';

type StackFilter = 'all' | ProjectStack;
const filters = Object.keys(projectStackLabels) as StackFilter[];

export default function Projects() {
  useSeo({
    title: 'Projects & Development Experience',
    description:
      'Selected projects and development experience behind USK Software Solutions: CRM, cold storage management, service desk, asset management and federation console applications.',
    path: '/projects',
  });
  const [filter, setFilter] = useState<StackFilter>('all');

  return (
    <>
      <PageHeader
        title="Projects & development experience"
        description="We separate our own products, client solutions and the selected projects that demonstrate our engineering experience."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <Section labelledBy="projects-intro-heading" className="!pb-0">
        <SectionTitle id="projects-intro-heading" title="How to read this page" as="h2" />
        <dl className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {projectCategories.map((category) => (
            <div key={category.id} className="rounded-2xl border border-slate-200 bg-mist p-6">
              <dt className="font-bold text-navy-900">{category.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">{category.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {projectCategories.map((category, categoryIndex) => {
        const items = projects.filter(
          (project) => project.category === category.id && (filter === 'all' || project.stack === filter),
        );
        const hasAnyInCategory = projects.some((project) => project.category === category.id);
        const headingId = `projects-${category.id}-heading`;

        return (
          <Section key={category.id} tone={categoryIndex % 2 === 0 ? 'white' : 'mist'} labelledBy={headingId}>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionTitle id={headingId} title={category.title} description={category.description} />
              {category.id === 'experience' && hasAnyInCategory && (
                <div role="group" aria-label="Filter projects by technology" className="flex flex-wrap gap-2">
                  {filters.map((key) => (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={filter === key}
                      onClick={() => setFilter(key)}
                      className={cn(
                        'min-h-[44px] rounded-full px-4 text-sm font-semibold ring-1 ring-inset transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600',
                        filter === key
                          ? 'bg-navy-900 text-white ring-navy-900'
                          : 'bg-white text-slate-700 ring-slate-300 hover:ring-brand-400',
                      )}
                    >
                      {projectStackLabels[key]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 ? (
              <ul className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {items.map((project, index) => (
                  <li key={project.id}>
                    <Reveal delay={(index % 2) * 0.06} className="h-full">
                      <ProjectCard project={project} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="mx-auto max-w-xl text-pretty text-slate-600">
                  {hasAnyInCategory ? 'No projects match this filter.' : category.emptyMessage}
                </p>
                {category.id === 'product' && (
                  <Button to="/products" variant="outline" className="mt-5" arrow>
                    View products
                  </Button>
                )}
                {category.id === 'client' && (
                  <p className="mt-3 text-sm text-slate-500">
                    Have a project in mind?{' '}
                    <Link to="/contact" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
                      Start a conversation
                    </Link>
                    .
                  </p>
                )}
                {hasAnyInCategory && (
                  <Button variant="ghost" className="mt-4" onClick={() => setFilter('all')}>
                    Clear filter
                  </Button>
                )}
              </div>
            )}
          </Section>
        );
      })}

      <CTASection
        surface="mist"
        title="Need a Custom Solution? Talk to Our Team."
        description="Whether it is a CRM, an operations tool or a customer-facing platform, we can help you scope and build it."
        primary={{ label: 'Talk to Our Team', to: '/contact' }}
        secondary={{ label: 'View Services', to: '/services' }}
      />
    </>
  );
}
