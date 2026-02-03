import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Box, Shapes, Zap } from "lucide-react";
import heroImage from "@/assets/hero-prism.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-accent">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Box className="w-12 h-12 text-primary opacity-60 animate-glow-pulse" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <Shapes className="w-8 h-8 text-secondary opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Zap className="w-10 h-10 text-accent opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Prism Viewer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Cross-platform 3D visualization platform for geometric shapes
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Desktop & Web applications with plugin support, interactive 3D rendering, 
            and comprehensive API for developers
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-interactive" onClick={() => document.getElementById('viewer')?.scrollIntoView({ behavior: 'smooth' })}>
            <Play className="w-5 h-5 mr-2" />
            Try Interactive Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-border-hover hover:bg-background-accent" onClick={() => document.getElementById('api')?.scrollIntoView({ behavior: 'smooth' })}>
            View Documentation
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border shadow-card hover:shadow-interactive transition-all">
            <Box className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">3D Visualization</h3>
            <p className="text-muted-foreground text-sm">
              Interactive 3D rendering with real-time manipulation
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border shadow-card hover:shadow-interactive transition-all">
            <Shapes className="w-8 h-8 text-secondary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Plugin System</h3>
            <p className="text-muted-foreground text-sm">
              Extensible architecture for custom geometric shapes
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border shadow-card hover:shadow-interactive transition-all">
            <Zap className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Cross-Platform</h3>
            <p className="text-muted-foreground text-sm">
              Desktop & web applications with unified API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};