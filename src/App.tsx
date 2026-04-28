import { ContactForm } from "./components/ContactForm";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { ServiceCard } from "./components/ServiceCard";
import { contactLinks, education, experiences, profile, projects, services, skillGroups } from "./data/resumeData";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />

      <Section id="work" eyebrow="Work" title="Production-minded AI, automation, and vision systems.">
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="Agency-style execution for intelligent digital systems." className="bg-[#050505]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="About" title="I turn technical depth into systems people can actually use.">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 font-body text-base leading-8 text-white/72">
            <p>{profile.about}</p>
            <p>
              My work spans AI/ML systems, workflow automation, REST APIs, cloud services, access controls, dashboards,
              and computer vision. The throughline is practical delivery: building tools that reduce manual work,
              increase reliability, and communicate clearly to both technical and non-technical stakeholders.
            </p>
          </div>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.school} className="border border-white/12 bg-white/[0.035] p-5">
                <p className="font-body text-sm text-white/50">{item.dates} - {item.location}</p>
                <h3 className="mt-2 font-body text-lg font-medium text-white">{item.school}</h3>
                <p className="mt-1 font-body text-sm text-white/70">{item.degree}</p>
                <p className="mt-1 font-body text-sm text-white/60">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="A compact stack for AI products and engineering automation." className="bg-[#050505]">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="border border-white/12 p-5">
              <h3 className="font-body text-lg font-medium text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-[2px] bg-white/10 px-2.5 py-1 font-body text-xs text-white/80">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Enterprise automation, AI tooling, and clinical ML delivery.">
        <ExperienceTimeline experiences={experiences} />
      </Section>

      <Section id="contact" eyebrow="Contact" title="Have a system, workflow, or product that needs sharper execution?" className="bg-[#050505]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-body text-base leading-8 text-white/72">
              Reach out for AI/ML systems, automation workflows, full-stack tooling, dashboards, or computer vision work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[2px] border border-white/15 px-4 py-2 font-body text-sm text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}

export default App;
