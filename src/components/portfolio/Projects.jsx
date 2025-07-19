import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap } from "lucide-react";

const Projects = () => {
  const project = {
    title: "Image and Video Super-resolution",
    description: "An advanced machine learning solution that transforms low-quality images and videos into high-resolution content using state-of-the-art super-resolution algorithms. This project demonstrates the power of deep learning in computer vision applications.",
    longDescription: "This project leverages cutting-edge neural network architectures to upscale images and videos while preserving and enhancing fine details. The solution includes custom preprocessing pipelines, optimized inference engines, and a user-friendly interface for seamless media enhancement.",
    technologies: ["Python", "Machine Learning", "Computer Vision", "Deep Learning", "Neural Networks"],
    features: [
      "Real-time image upscaling",
      "Batch video processing",
      "Multiple enhancement algorithms",
      "Quality preservation",
      "Optimized performance"
    ],
    github: "#",
    demo: "#"
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
            Featured Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of innovation and technical excellence
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card shadow-elegant hover:shadow-elegant transition-smooth group overflow-hidden">
            {/* Project Header */}
            <CardHeader className="space-y-6 pb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary to-accent">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {project.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Detailed Description */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Project Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-sm py-1 px-3 hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  className="gradient-primary hover:glow-primary transition-smooth flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="glass-card hover:bg-primary/10 transition-smooth flex-1"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* More Projects Coming Soon */}
          <div className="text-center mt-12">
            <Card className="glass-card shadow-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="text-2xl font-semibold text-muted-foreground">
                    More Projects Coming Soon
                  </div>
                  <p className="text-muted-foreground">
                    I'm constantly working on new projects and innovations. 
                    Stay tuned for more exciting developments!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;