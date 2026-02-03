import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Puzzle, Download, Code, Zap } from "lucide-react";

export const PluginSystem = () => {
  const pluginTypes = [
    {
      name: "Cylinder Plugin",
      description: "Circular cylindrical shapes with radius and height parameters",
      status: "Available",
      downloads: "2.1k"
    },
    {
      name: "Sphere Plugin", 
      description: "Perfect spheres with radius-based calculations",
      status: "Available",
      downloads: "1.8k"
    },
    {
      name: "Pyramid Plugin",
      description: "Various pyramid types including square and triangular bases",
      status: "Beta",
      downloads: "942"
    },
    {
      name: "Cone Plugin",
      description: "Circular and elliptical cone shapes with apex calculations",
      status: "Coming Soon",
      downloads: "0"
    }
  ];

  return (
    <section id="plugins" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Plugin Ecosystem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Extend Prism Viewer with custom geometric shapes and calculations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Runtime Plugin Installation</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-accent rounded-lg">
                  <Puzzle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dynamic Loading</h4>
                  <p className="text-muted-foreground">
                    Install new geometric shapes without restarting the application
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-accent rounded-lg">
                  <Download className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">GitHub Integration</h4>
                  <p className="text-muted-foreground">
                    Directly install plugins from GitHub repositories
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-accent rounded-lg">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Simple Interface</h4>
                  <p className="text-muted-foreground">
                    Inherit from ShapePlugin base class and implement required methods
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-accent rounded-lg">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hot Reload</h4>
                  <p className="text-muted-foreground">
                    Test and iterate on plugins with instant reload capability
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Example Plugin Implementation</CardTitle>
                <CardDescription>
                  Simple cylinder plugin with volume and surface area calculations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="text-xs bg-background-accent p-4 rounded-lg overflow-x-auto">
{`from core.plugin_interface import ShapePlugin

class CylinderPlugin(ShapePlugin):
    @property
    def name(self):
        return "Cylinder"
    
    def calculate_volume(self, **parameters):
        radius = parameters['radius']
        height = parameters['height']
        return 3.14159 * radius * radius * height
    
    def calculate_surface_area(self, **parameters):
        radius = parameters['radius']
        height = parameters['height']
        return 2 * 3.14159 * radius * (radius + height)
    
    def get_parameters(self):
        return ['radius', 'height']`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Available Plugins</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pluginTypes.map((plugin, index) => (
              <Card 
                key={plugin.name}
                className="hover:shadow-interactive transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{plugin.name}</CardTitle>
                    <Badge 
                      variant={plugin.status === "Available" ? "default" : 
                              plugin.status === "Beta" ? "secondary" : "outline"}
                    >
                      {plugin.status}
                    </Badge>
                  </div>
                  <CardDescription>{plugin.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {plugin.downloads} downloads
                    </span>
                    <Button 
                      size="sm" 
                      disabled={plugin.status === "Coming Soon"}
                      className="bg-gradient-secondary hover:opacity-90"
                    >
                      {plugin.status === "Coming Soon" ? "Coming Soon" : "Install"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};