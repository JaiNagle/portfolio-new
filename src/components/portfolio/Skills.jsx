import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Python Development",
      icon: Code,
      skills: ["Python", "FastAPI", "Django", "Flask", "Pytest"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "API Development",
      icon: Database,
      skills: ["REST APIs", "GraphQL", "PostgreSQL", "Redis", "Docker"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "RedHat Linux",
      icon: Server,
      skills: ["System Administration", "Shell Scripting", "DevOps", "Kubernetes", "CI/CD"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="glass-card shadow-card hover:shadow-elegant transition-smooth group animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} p-4 mx-auto group-hover:glow-primary transition-smooth`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="w-full justify-center py-2 text-sm hover:bg-primary/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;