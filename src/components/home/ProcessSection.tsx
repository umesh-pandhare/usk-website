import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { processSteps } from '@/data/company';

export function ProcessSection() {
  return (
    <Section tone="navy" labelledBy="process-heading">
      <Reveal>
        <div>
          <SectionTitle
            id="process-heading"
            tone="dark"
            title="How we work with you"
            description="A simple, transparent process — you always know what is being built, why, and what comes next."
          />
        </div>
      </Reveal>

      <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <li key={step.title} className="bg-navy-950 p-7">
            <span className="text-sm font-semibold tabular-nums text-brand-300">Step {index + 1}</span>
            <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-400">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
