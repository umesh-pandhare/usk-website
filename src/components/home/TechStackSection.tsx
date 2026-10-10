import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { techStack } from '@/data/company';

export function TechStackSection() {
  return (
    <Section labelledBy="tech-heading">
      <Reveal>
        <div>
          <SectionTitle
            id="tech-heading"
            title="Modern, proven technology"
            description="We choose well-supported technologies that are secure, maintainable and easy to hire for."
          />
        </div>
      </Reveal>
      <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {techStack.map((group) => (
          <Reveal key={group.group}>
            <div className="border-t border-slate-200 pt-5">
              <dt className="text-base font-bold text-navy-900">{group.group}</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-lg bg-mist px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
