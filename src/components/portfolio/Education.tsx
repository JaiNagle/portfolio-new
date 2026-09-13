import { education } from "@/data/content";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Education
        </h2>

        <div className="border-t border-line">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2 py-8 border-b border-line"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-slate">{edu.dates}</p>
                <p className="font-mono text-xs text-slate mt-1">
                  {edu.location}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-xl">{edu.institution}</h3>
                <p className="text-slate text-sm mt-0.5">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
