import type { Experience } from "../data/resumeData";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6">
      {experiences.map((experience) => (
        <article key={`${experience.company}-${experience.role}`} className="grid gap-5 border-l border-white/20 pl-6 md:grid-cols-[240px_1fr]">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.18em] text-white/50">{experience.dates}</p>
            <h3 className="mt-2 font-body text-xl font-medium text-white">{experience.company}</h3>
            <p className="mt-1 font-body text-sm text-white/65">{experience.role}</p>
          </div>
          <ul className="space-y-3">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="font-body text-sm leading-6 text-white/72">
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
