import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/content";

const Hero = () => {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p
            className="animate-fade-up flex items-center gap-2 font-mono text-sm text-slate mb-6"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            {profile.status}
          </p>

          <h1
            className="animate-fade-up font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
            style={{ animationDelay: "60ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="animate-fade-up mt-3 font-display text-2xl md:text-3xl text-slate"
            style={{ animationDelay: "120ms" }}
          >
            {profile.role}
          </p>

          <p
            className="animate-fade-up mt-8 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl"
            style={{ animationDelay: "180ms" }}
          >
            {profile.intro}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-base font-medium border-b border-ink pb-0.5 hover:text-signal hover:border-signal transition-colors"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
