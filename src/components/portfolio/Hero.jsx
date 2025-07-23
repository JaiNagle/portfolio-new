import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Main heading with shimmer effect */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold animate-text-shimmer leading-[1.4] py-4">
              Jai Nagle
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground font-light">
              Software Engineer
            </div>
          </div>

          {/* TEMP */}
          <h3 className="md:text-5xl font-bold animate-text-shimmer">
            Work-in-progress.
          </h3>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions with Python, Machine Learning, and
            cutting-edge technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="gradient-primary hover:glow-primary transition-smooth text-lg px-8 py-4 rounded-full font-medium"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass-card hover:bg-primary/10 transition-smooth rounded-full p-4"
                asChild
              >
                <a
                  href="https://github.com/JaiNagle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass-card hover:bg-primary/10 transition-smooth rounded-full p-4"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/jainagle/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass-card hover:bg-primary/10 transition-smooth rounded-full p-4"
                asChild
              >
                <a href="mailto:jainagle36@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
