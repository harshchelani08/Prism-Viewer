import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, Text3D, Center } from "@react-three/drei";
import { useState, Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Box, Triangle, Hexagon, Octagon, Pentagon, Settings, RotateCcw } from "lucide-react";

// 3D Shape Components
const RectangularPrism = ({ wireframe = false, color = "#4f46e5" }) => {
  return (
    <mesh rotation={[0.2, 0.2, 0]}>
      <boxGeometry args={[2, 1.5, 3]} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};

const TriangularPrism = ({ wireframe = false, color = "#06b6d4" }) => {
  return (
    <mesh rotation={[0.2, 0.2, 0]}>
      <cylinderGeometry args={[0, 1.5, 3, 3]} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};

const HexagonalPrism = ({ wireframe = false, color = "#10b981" }) => {
  return (
    <mesh rotation={[0.2, 0.2, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 3, 6]} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};

const PentagonalPrism = ({ wireframe = false, color = "#f59e0b" }) => {
  return (
    <mesh rotation={[0.2, 0.2, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 3, 5]} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};

const OctagonalPrism = ({ wireframe = false, color = "#ef4444" }) => {
  return (
    <mesh rotation={[0.2, 0.2, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 3, 8]} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
};

const Scene = ({ prismType, wireframe, autoRotate, showGrid }) => {
  const prismComponents = {
    rectangular: RectangularPrism,
    triangular: TriangularPrism,
    hexagonal: HexagonalPrism,
    pentagonal: PentagonalPrism,
    octagonal: OctagonalPrism,
  };

  const PrismComponent = prismComponents[prismType as keyof typeof prismComponents] || RectangularPrism;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {showGrid && <Grid infiniteGrid fadeDistance={50} fadeStrength={2} />}
      
      <PrismComponent wireframe={wireframe} />
      
      <OrbitControls 
        autoRotate={autoRotate} 
        autoRotateSpeed={2}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />
    </>
  );
};

const prismData = {
  rectangular: { faces: 6, edges: 12, vertices: 8, euler: 2 },
  triangular: { faces: 5, edges: 9, vertices: 6, euler: 2 },
  hexagonal: { faces: 8, edges: 18, vertices: 12, euler: 2 },
  pentagonal: { faces: 7, edges: 15, vertices: 10, euler: 2 },
  octagonal: { faces: 10, edges: 24, vertices: 16, euler: 2 },
};

export const InteractiveViewer = () => {
  const [prismType, setPrismType] = useState("rectangular");
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [showStats, setShowStats] = useState(true);

  const currentPrism = prismData[prismType as keyof typeof prismData];

  return (
    <section id="viewer" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Interactive 3D Viewer
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Prism Viewer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive 3D visualization of geometric prisms with real-time controls and geometric properties
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Controls Panel */}
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Controls</h3>
            </div>

            <div className="space-y-6">
              {/* Prism Type Selection */}
              <div>
                <label className="text-sm font-medium mb-3 block">Prism Type</label>
                <Select value={prismType} onValueChange={setPrismType}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rectangular">
                      <div className="flex items-center gap-2">
                        <Box className="w-4 h-4" />
                        Rectangular Prism
                      </div>
                    </SelectItem>
                    <SelectItem value="triangular">
                      <div className="flex items-center gap-2">
                        <Triangle className="w-4 h-4" />
                        Triangular Prism
                      </div>
                    </SelectItem>
                    <SelectItem value="pentagonal">
                      <div className="flex items-center gap-2">
                        <Pentagon className="w-4 h-4" />
                        Pentagonal Prism
                      </div>
                    </SelectItem>
                    <SelectItem value="hexagonal">
                      <div className="flex items-center gap-2">
                        <Hexagon className="w-4 h-4" />
                        Hexagonal Prism
                      </div>
                    </SelectItem>
                    <SelectItem value="octagonal">
                      <div className="flex items-center gap-2">
                        <Octagon className="w-4 h-4" />
                        Octagonal Prism
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* View Options */}
              <div>
                <label className="text-sm font-medium mb-3 block">View Options</label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Wireframe Mode</span>
                    <Switch checked={wireframe} onCheckedChange={setWireframe} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auto Rotate</span>
                    <Switch checked={autoRotate} onCheckedChange={setAutoRotate} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Show Grid</span>
                    <Switch checked={showGrid} onCheckedChange={setShowGrid} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Show Statistics</span>
                    <Switch checked={showStats} onCheckedChange={setShowStats} />
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.location.reload()}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset View
              </Button>
            </div>
          </Card>

          {/* 3D Viewer */}
          <div className="lg:col-span-3">
            <Card className="bg-card/30 backdrop-blur-sm border-border overflow-hidden shadow-card">
              <div className="h-[600px] w-full">
                <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                  <Suspense fallback={null}>
                    <Scene 
                      prismType={prismType}
                      wireframe={wireframe}
                      autoRotate={autoRotate}
                      showGrid={showGrid}
                    />
                  </Suspense>
                </Canvas>
              </div>

              {/* Statistics Overlay */}
              {showStats && (
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <h4 className="text-sm font-semibold mb-2">Geometric Properties</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Faces:</span>
                      <span className="ml-2 font-medium">{currentPrism.faces}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Edges:</span>
                      <span className="ml-2 font-medium">{currentPrism.edges}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Vertices:</span>
                      <span className="ml-2 font-medium">{currentPrism.vertices}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Euler χ:</span>
                      <span className="ml-2 font-medium">{currentPrism.euler}</span>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
            <h3 className="text-lg font-semibold mb-4">How to Use</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Box className="w-6 h-6 text-primary" />
                </div>
                <strong>Select Shape</strong>
                <p className="text-muted-foreground">Choose from different prism types</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="w-6 h-6 text-secondary" />
                </div>
                <strong>Interact</strong>
                <p className="text-muted-foreground">Drag to rotate, scroll to zoom</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Settings className="w-6 h-6 text-accent" />
                </div>
                <strong>Customize</strong>
                <p className="text-muted-foreground">Toggle wireframe and auto-rotate</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};