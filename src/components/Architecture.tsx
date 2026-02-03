import { Database, Server, Monitor, Puzzle } from "lucide-react";
import architectureDiagram from "@/assets/architecture-diagram.jpg";

export const Architecture = () => {
  const components = [
    {
      icon: Database,
      title: "Core Module",
      description: "Shared business logic, calculations, and database access layer",
      tech: ["Python", "SQLite/PostgreSQL", "Data Models"]
    },
    {
      icon: Monitor,
      title: "Desktop App",
      description: "Native desktop application with advanced 3D rendering capabilities", 
      tech: ["PySide2", "pythonOCC", "OpenGL"]
    },
    {
      icon: Server,
      title: "Web Backend",
      description: "Django REST API serving geometric data and calculations",
      tech: ["Django", "REST API", "PostgreSQL"]
    },
    {
      icon: Puzzle,
      title: "Plugin System",
      description: "Runtime extensibility for custom geometric shapes and calculations",
      tech: ["Dynamic Loading", "GitHub Integration", "Plugin Manager"]
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Modular Architecture
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Built with a clean, modular architecture that separates concerns and enables 
              both desktop and web deployment from shared core components.
            </p>

            <div className="space-y-6">
              {components.map((component, index) => (
                <div 
                  key={component.title}
                  className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-interactive transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <component.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                      <p className="text-muted-foreground mb-3">{component.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {component.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-glow absolute inset-0 rounded-lg opacity-20" />
            <img 
              src={architectureDiagram} 
              alt="Architecture Diagram" 
              className="w-full rounded-lg border border-border shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};