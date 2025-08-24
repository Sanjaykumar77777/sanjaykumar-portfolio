import { useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Force dark mode for cyberpunk aesthetic
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-muted-foreground">
            © 2024 Your Name. Crafted with 💜 using React, Framer Motion & Three.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
