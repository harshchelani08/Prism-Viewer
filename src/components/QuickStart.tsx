import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Globe, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const QuickStart = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Quick Start
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running with Prism Viewer in minutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="desktop" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-background-accent">
              <TabsTrigger value="desktop" className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Desktop App
              </TabsTrigger>
              <TabsTrigger value="web" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Web App
              </TabsTrigger>
            </TabsList>

            <TabsContent value="desktop" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Desktop Application Setup
                  </CardTitle>
                  <CardDescription>
                    Native Python application with advanced 3D rendering
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      Prerequisites
                      <Badge variant="outline">Required</Badge>
                    </h4>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Python 3.8+</li>
                      <li>• PySide2</li>
                      <li>• OpenGL support</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-background-accent rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">Install Dependencies</h5>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard("pip install -r requirements.txt")}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <code className="text-sm text-accent">pip install -r requirements.txt</code>
                    </div>

                    <div className="bg-background-accent rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">Run Application</h5>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => copyToClipboard("python src/desktop/main_window.py")}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <code className="text-sm text-accent">python src/desktop/main_window.py</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="web" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Backend (Django)</CardTitle>
                    <CardDescription>RESTful API server</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-background-accent rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Setup Virtual Environment</h5>
                      <code className="text-sm text-accent block">cd src/web/backend</code>
                      <code className="text-sm text-accent block">python -m venv venv</code>
                      <code className="text-sm text-accent block">source venv/bin/activate</code>
                    </div>
                    
                    <div className="bg-background-accent rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Install & Run</h5>
                      <code className="text-sm text-accent block">pip install -r requirements.txt</code>
                      <code className="text-sm text-accent block">python manage.py migrate</code>
                      <code className="text-sm text-accent block">python manage.py runserver</code>
                    </div>

                    <Badge className="bg-secondary text-secondary-foreground">
                      Available at: localhost:8000
                    </Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frontend (React)</CardTitle>
                    <CardDescription>Modern web interface</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-background-accent rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Setup</h5>
                      <code className="text-sm text-accent block">cd src/web/frontend</code>
                      <code className="text-sm text-accent block">npm install</code>
                    </div>
                    
                    <div className="bg-background-accent rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Development Server</h5>
                      <code className="text-sm text-accent block">npm start</code>
                    </div>

                    <Badge className="bg-primary text-primary-foreground">
                      Available at: localhost:3000
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};