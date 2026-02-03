import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InteractiveViewer } from "@/components/InteractiveViewer";
import { Features } from "@/components/Features";
import { Architecture } from "@/components/Architecture";
import { QuickStart } from "@/components/QuickStart";
import { APIShowcase } from "@/components/APIShowcase";
import { PluginSystem } from "@/components/PluginSystem";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <InteractiveViewer />
        <Features />
        <Architecture />
        <QuickStart />
        <APIShowcase />
        <PluginSystem />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
