import { about } from "@/data/content";

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
