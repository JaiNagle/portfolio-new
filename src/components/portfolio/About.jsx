import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
                About Me
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Software Engineer with a deep fascination for the intersection of 
                technology and innovation. My journey in software development has been driven by 
                curiosity and a constant desire to solve complex problems through elegant code.
              </p>
              
              <p>
                Specializing in Python development and Machine Learning, I've dedicated my career 
                to building intelligent systems that make a real-world impact. From developing 
                sophisticated APIs to creating cutting-edge ML models, I thrive on challenges 
                that push the boundaries of what's possible.
              </p>
              
              <p>
                When I'm not coding, I'm exploring the latest developments in AI, contributing to 
                open-source projects, or diving deep into system architecture on RedHat Linux 
                environments. I believe that great software is not just about functionality, 
                but about creating experiences that truly matter.
              </p>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="glass-card shadow-card hover:shadow-elegant transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-gradient-primary group-hover:animate-text-shimmer">
                  3+
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Years Experience
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card shadow-card hover:shadow-elegant transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-gradient-primary group-hover:animate-text-shimmer">
                  50+
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Projects Completed
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card shadow-card hover:shadow-elegant transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-gradient-primary group-hover:animate-text-shimmer">
                  4
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Core Technologies
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card shadow-card hover:shadow-elegant transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-gradient-primary group-hover:animate-text-shimmer">
                  ∞
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Passion for Learning
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;