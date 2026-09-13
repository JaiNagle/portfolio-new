import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/content";
import ThemeToggle from "@/components/portfolio/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-sm transition-shadow ${
        isScrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-lg font-medium tracking-tight"
          >
            <span className="text-slate">&lt;</span>
            JN
            <span className="text-slate">/&gt;</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-slate hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <a
              href={`mailto:${profile.email}`}
              className="text-sm border border-line rounded-sm px-3 py-1.5 hover:border-foreground/40 transition-colors"
            >
              Say hello
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 -mr-2"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-line bg-background">
          <div className="max-w-content mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-2.5 text-sm text-slate hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
