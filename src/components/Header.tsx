import { Button } from "@/components/ui/button";
import { Box, Github, Download } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
              <Box className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Prism Viewer</h1>
              <p className="text-xs text-muted-foreground">3D Visualization Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#viewer" className="text-muted-foreground hover:text-foreground transition-colors">
              Interactive Demo
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#architecture" className="text-muted-foreground hover:text-foreground transition-colors">
              Architecture
            </a>
            <a href="#api" className="text-muted-foreground hover:text-foreground transition-colors">
              API
            </a>
            <a href="#plugins" className="text-muted-foreground hover:text-foreground transition-colors">
              Plugins
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-interactive">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};