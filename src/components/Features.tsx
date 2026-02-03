import { Monitor, Globe, Puzzle, Zap, Code, Eye } from "lucide-react";
import geometricShapes from "@/assets/geometric-shapes.jpg";

export const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Desktop Application",
      description: "Native Python application with PySide2 for optimal performance and native OS integration.",
      details: ["3D rendering with pythonOCC", "Native file system access", "Optimized for heavy computations"]
    },
    {
      icon: Globe,
      title: "Web Application", 
      description: "Modern Django + React web platform accessible from any browser with full feature parity.",
      details: ["RESTful API architecture", "Real-time 3D visualization", "Cross-browser compatibility"]
    },
    {
      icon: Puzzle,
      title: "Plugin System",
      description: "Extensible architecture allows installing new geometric shapes and calculations at runtime.",
      details: ["Runtime plugin installation", "GitHub repository integration", "Custom shape definitions"]
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized 3D rendering and calculations for both desktop and web platforms.",
      details: ["Efficient CAD rendering", "Real-time calculations", "Smooth user interactions"]
    },
    {
      icon: Code,
      title: "Developer API",
      description: "Comprehensive REST API with endpoints for all geometric operations and calculations.",
      details: ["Full CRUD operations", "Batch processing", "Comprehensive documentation"]
    },
    {
      icon: Eye,
      title: "3D Visualization",
      description: "Interactive 3D models with manipulation, rotation, and detailed geometric analysis.",
      details: ["Real-time manipulation", "Multiple view modes", "Detailed measurements"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
        <img src={geometricShapes} alt="" className="w-96 h-96 object-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for professional 3D geometric visualization and analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-card hover:bg-card-hover rounded-lg p-6 border border-border shadow-card hover:shadow-interactive transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};