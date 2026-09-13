import { experience } from "@/data/content";

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Experience
        </h2>

        <div className="border-t border-line">
          {experience.map((entry) => (
            <div
              key={entry.company}
              className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 py-8 border-b border-line"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-slate">{entry.dates}</p>
                <p className="font-mono text-xs text-slate mt-1">
                  {entry.location}
                </p>
              </div>

              <div className="md:col-span-9 space-y-4">
                <div>
                  <h3 className="font-display text-xl">{entry.role}</h3>
                  <p className="text-slate text-sm mt-0.5">{entry.company}</p>
                </div>

                <ul className="space-y-2.5">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-signal shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
