import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Data Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal-style intro */}
        <div className="mb-8 inline-block">
          <span className="font-mono text-sm text-muted-foreground">
            <span className="text-secondary">~/</span>portfolio
            <span className="text-primary"> $</span> whoami
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-foreground">Hola, soy </span>
          <span className="text-gradient">Valentina</span>
        </h1>

        <div className="h-16 mb-8">
          <p className="text-2xl md:text-4xl font-mono text-muted-foreground">
            {"<"}
            <span className="text-primary">{displayText}</span>
            <span className="typing-cursor text-secondary">|</span>
            {" />"}
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          5+ años transformando datos en decisiones. 
          Especializado en <span className="text-primary">pipelines ETL</span>, 
          <span className="text-secondary"> DataOps</span> y 
          <span className="text-accent"> soluciones cloud</span>.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "5+", label: "Años experiencia" },
            { value: "20+", label: "Proyectos" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer group"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
