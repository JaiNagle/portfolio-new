import { skills } from "@/data/content";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Skills
        </h2>

        <div className="border-t border-line">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 py-6 border-b border-line"
            >
              <h3 className="md:col-span-3 font-display text-lg">
                {group.category}
              </h3>
              <div className="md:col-span-9 flex flex-wrap gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
