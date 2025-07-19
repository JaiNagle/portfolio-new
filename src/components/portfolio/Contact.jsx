import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "jainagle36@gmail.com",
      href: "mailto:jainagle36@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "linkedin.com/in/jainagle",
      href: "https://www.linkedin.com/in/jainagle/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/JaiNagle",
      href: "https://github.com/JaiNagle",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project or just want to say hello? I'd
            love to hear from you.
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card
                  key={method.title}
                  className="glass-card shadow-card hover:shadow-elegant transition-smooth group animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} p-4 mx-auto group-hover:glow-primary transition-smooth`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {method.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center">
                    <Button
                      variant="outline"
                      className="glass-card hover:bg-primary/10 transition-smooth w-full"
                      asChild
                    >
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.value}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="glass-card shadow-elegant">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">
                  Ready to Start Something Amazing?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you have a project in mind, want to collaborate, or
                  just want to chat about technology and innovation, I'm always
                  excited to connect with fellow creators and innovators.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary hover:glow-primary transition-smooth text-lg px-8 py-4 rounded-full"
                  asChild
                >
                  <a href="mailto:jainagle36@gmail.com">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="glass-card hover:bg-primary/10 transition-smooth text-lg px-8 py-4 rounded-full"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/jainagle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Available worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
