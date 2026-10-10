import { Badge } from '@/components/common/Badge';
import { Icon } from '@/components/common/Icon';
import { ScreenMock } from '@/components/common/ScreenMock';
import { projectStackLabels } from '@/data/projects';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  /** Compact variant hides the full technology list (used on the Home page). */
  compact?: boolean;
}

export function ProjectCard({ project, compact }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
      <div className="bg-navy-950 p-4 sm:p-5">
        <ScreenMock variant={project.mock} title={project.title.split(' — ')[0]} />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="neutral">{project.type}</Badge>
          <Badge tone="brand">{projectStackLabels[project.stack]}</Badge>
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-900">{project.title}</h3>
        <p className="mt-2 text-pretty text-slate-600">{project.summary}</p>

        {!compact && (
          <>
            <h4 className="mt-6 text-sm font-semibold text-navy-900">Key features</h4>
            <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-sm font-semibold text-navy-900">Technology</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <li key={tech} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                  {tech}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
