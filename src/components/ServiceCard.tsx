import type { Service } from "../data/resumeData";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="border border-white/12 bg-[#0b0b0b] p-6 transition-colors hover:border-white/35">
      <h3 className="font-body text-xl font-medium text-white">{service.title}</h3>
      <p className="mt-4 font-body text-sm leading-6 text-white/70">{service.description}</p>
    </article>
  );
}
