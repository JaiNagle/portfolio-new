import { ArrowUpRight } from "lucide-react";
import { contactMethods, profile } from "@/data/content";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Let's talk
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl mb-8">
              I'm currently {profile.status.toLowerCase()}. If you're
              building something in Python or machine learning and want a
              second set of hands, get in touch.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-lg font-medium border-b border-ink pb-0.5 hover:text-signal hover:border-signal transition-colors"
            >
              {profile.email}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <div className="lg:col-span-5">
            <ul className="border-t border-line">
              {contactMethods.map((method) => (
                <li key={method.label} className="border-b border-line">
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 hover:text-signal transition-colors"
                  >
                    <span className="text-sm text-slate group-hover:text-signal transition-colors">
                      {method.label}
                    </span>
                    <span className="font-mono text-sm">{method.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="max-w-content mx-auto px-6 md:px-10 mt-24 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-slate">Built with React & Tailwind</p>
      </footer>
    </section>
  );
};

export default Contact;
