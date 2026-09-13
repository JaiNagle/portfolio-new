import { about, education } from "@/data/content";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              About
            </h2>
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-foreground/80 leading-relaxed max-w-2xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <dl className="border border-line rounded-sm divide-y divide-line">
              {about.details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <dt className="text-sm text-slate">{detail.label}</dt>
                  <dd className="font-mono text-sm text-right">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="font-mono text-xs text-slate mt-8 mb-3">
              Education
            </p>
            <div className="border border-line rounded-sm divide-y divide-line">
              {education.map((edu) => (
                <div key={edu.institution} className="px-5 py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium">{edu.institution}</p>
                    <p className="font-mono text-xs text-slate shrink-0">
                      {edu.dates}
                    </p>
                  </div>
                  <p className="text-sm text-slate mt-0.5">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
