import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Calculator, Box, Code } from "lucide-react";

export const APIShowcase = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/api/prisms/",
      description: "List all prism designations with pagination and filtering",
      response: "Array of prism objects with basic metadata"
    },
    {
      method: "GET", 
      path: "/api/prisms/{id}/",
      description: "Get detailed prism dimensions and properties",
      response: "Complete prism object with all parameters"
    },
    {
      method: "GET",
      path: "/api/prisms/{id}/compute/",
      description: "Calculate volume and surface area in real-time",
      response: "Computed geometric properties and formulas"
    },
    {
      method: "GET",
      path: "/api/prisms/{id}/cad/",
      description: "Retrieve CAD model data for 3D visualization",
      response: "3D mesh data, vertices, and rendering parameters"
    },
    {
      method: "POST",
      path: "/api/prisms/",
      description: "Create new prism with custom parameters",
      response: "Created prism object with generated ID"
    },
    {
      method: "PUT",
      path: "/api/prisms/{id}/",
      description: "Update existing prism dimensions and properties",
      response: "Updated prism object with new calculations"
    }
  ];

  const features = [
    {
      icon: Database,
      title: "Full CRUD Operations",
      description: "Complete create, read, update, delete operations for all geometric objects"
    },
    {
      icon: Calculator,
      title: "Real-time Calculations",
      description: "Instant computation of volume, surface area, and other geometric properties"
    },
    {
      icon: Box,
      title: "3D Model Export",
      description: "Export CAD-compatible 3D model data for visualization and analysis"
    },
    {
      icon: Code,
      title: "RESTful Design",
      description: "Clean, predictable API following REST principles with JSON responses"
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-secondary text-secondary-foreground";
      case "POST": return "bg-primary text-primary-foreground";
      case "PUT": return "bg-accent text-primary-foreground";
      case "DELETE": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="api" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Developer API
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive REST API for geometric operations and 3D visualization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>API Endpoints</CardTitle>
            <CardDescription>
              Complete reference for all available endpoints and operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div 
                  key={`${endpoint.method}-${endpoint.path}`}
                  className="border border-border rounded-lg p-4 hover:bg-card-hover transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <Badge className={getMethodColor(endpoint.method)}>
                      {endpoint.method}
                    </Badge>
                    <div className="flex-1">
                      <code className="text-sm font-mono text-accent mb-2 block">
                        {endpoint.path}
                      </code>
                      <p className="text-muted-foreground text-sm mb-1">
                        {endpoint.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Returns:</span> {endpoint.response}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-background-secondary rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Example Request</h4>
              <code className="text-sm text-accent block">
                GET /api/prisms/1/compute/
              </code>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Example Response</h4>
                <pre className="text-xs text-muted-foreground bg-background-accent p-3 rounded overflow-x-auto">
{`{
  "id": 1,
  "volume": 125.0,
  "surface_area": 150.0,
  "parameters": {
    "length": 5.0,
    "width": 5.0,
    "height": 5.0
  },
  "formulas": {
    "volume": "length × width × height",
    "surface_area": "2(lw + lh + wh)"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};