import { metrics, profile } from "../data/resumeData";
import { Button } from "./Button";
import { Navbar } from "./Navbar";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <Navbar />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-end px-5 pb-[250px] pt-32 text-center sm:px-8">
        <a
          href="#work"
          className="group mb-8 inline-flex items-center rounded-full bg-white/10 p-1.5 backdrop-blur-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="rounded-full bg-white/90 px-4 py-1.5 font-body text-xs font-medium text-[#171717] backdrop-blur-md">
            Featured in Fortune
          </span>
        </a>

        <div className="relative mx-auto max-w-5xl px-6 py-7 sm:px-10">
          <span className="absolute left-0 top-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />
          <span className="absolute right-0 top-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />
          <span className="absolute bottom-0 left-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />
          <span className="absolute bottom-0 right-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />
          <h1 className="text-white">
            <span className="block font-body text-[42px] font-light leading-[0.95] sm:text-[54px] lg:text-[64px]">
              Agency that makes your
            </span>
            <span className="block font-heading text-[42px] italic leading-[0.95] sm:text-[54px] lg:text-[64px]">
              videos & reels viral
            </span>
          </h1>
        </div>

        <p className="mt-7 max-w-2xl font-body text-base leading-7 text-white/75 sm:text-lg">
          {profile.valueProposition}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#work">View Work</Button>
          <Button href="#contact">Contact Me</Button>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border border-white/15 bg-black/20 p-4 text-left backdrop-blur-sm">
              <p className="font-heading text-3xl italic text-white">{metric.value}</p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.16em] text-white/65">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
