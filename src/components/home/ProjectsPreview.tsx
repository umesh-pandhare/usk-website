import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export function ProjectsPreview() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <Section tone="mist" labelledBy="projects-preview-heading">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <div>
            <SectionTitle
              id="projects-preview-heading"
              title="Selected projects & development experience"
              description="Applications our founder has built across CRM, operations and support — the engineering experience behind USK Software Solutions."
            />
          </div>
        </Reveal>
        <Button to="/projects" variant="outline" arrow className="self-start sm:self-auto">
          View all projects
        </Button>
      </div>
      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={index * 0.06} className="h-full">
              <ProjectCard project={project} compact />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
