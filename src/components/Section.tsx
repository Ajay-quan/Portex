import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 font-body text-sm uppercase tracking-[0.24em] text-white/55">{eyebrow}</p>
          <h2 className="font-body text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
