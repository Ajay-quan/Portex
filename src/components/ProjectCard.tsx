import type { Project } from "../data/resumeData";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-white/12 bg-white/[0.035] p-6 transition-colors hover:bg-white/[0.07]">
      <div className="flex min-h-full flex-col">
        <h3 className="font-body text-2xl font-light leading-tight text-white">{project.title}</h3>
        <p className="mt-4 font-body text-sm leading-6 text-white/70">{project.summary}</p>
        <ul className="mt-6 space-y-3">
          {project.results.map((result) => (
            <li key={result} className="flex gap-3 font-body text-sm leading-6 text-white/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-white" aria-hidden="true" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-[2px] bg-white/10 px-2.5 py-1 font-body text-xs text-white/85">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
