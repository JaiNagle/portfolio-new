import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/content";

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="bg-card border border-line rounded-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal/60" />
                <span className="ml-3 font-mono text-xs text-slate">
                  ~/projects/{project.slug}
                </span>
                {project.status && (
                  <span className="ml-auto font-mono text-xs text-signal">
                    [{project.status.toLowerCase()}]
                  </span>
                )}
              </div>

              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-7 space-y-5">
                  <h3 className="font-display text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-slate border border-line rounded-sm px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm border-b border-foreground/40 pb-0.5 hover:border-signal hover:text-signal transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-slate">
                        source private
                      </span>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm border-b border-foreground/40 pb-0.5 hover:border-signal hover:text-signal transition-colors"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-mono text-xs text-slate mb-3">
                    Key features
                  </p>
                  <ul className="space-y-2.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate">
          More projects are on the way, check back soon.
        </p>
      </div>
    </section>
  );
};

export default Projects;
