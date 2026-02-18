import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";

const roles = ["AI Engineering", "DataOps", "Cloud Solutions", "Data Engineering"];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Cycle through roles: type → pause → delete → next
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        // Still typing
        const timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Finished typing — pause then start deleting
        const timer = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        // Still deleting
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Finished deleting — move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayText, isDeleting, roleIndex]);

  // Memoize particles so they don't regenerate on every render
  const particles = useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${4 + Math.random() * 4}s`,
        size: Math.random() > 0.7 ? "w-1.5 h-1.5" : "w-1 h-1",
      })),
    []
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col overflow-hidden pt-16">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`floating-particle ${p.size}`}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center">
        {/* Terminal-style intro */}
        <div className="mb-6 inline-block animate-fade-in">
          <span className="font-mono text-sm text-muted-foreground bg-muted/30 px-4 py-1.5 rounded-full border border-border/50">
            <span className="text-secondary">~/</span>portfolio
            <span className="text-primary"> $</span> whoami
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="text-foreground">Hola, soy </span>
          <span className="text-gradient hero-name-glow">Valentina</span>
        </h1>

        {/* Rotating roles */}
        <div className="h-14 md:h-16 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <p className="text-2xl md:text-4xl font-mono text-muted-foreground">
            {"<"}
            <span className="text-primary">{displayText}</span>
            <span className="typing-cursor text-secondary">|</span>
            {"/>"}
          </p>
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          Diseño y automatizo{" "}
          <span className="text-primary font-medium">pipelines de datos</span> que
          escalan. De la ingesta al insight,{" "}
          <span className="text-secondary font-medium">transformo infraestructura</span>{" "}
          en ventaja competitiva.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-row gap-3 justify-center mb-8 animate-slide-up"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "0 0 20px hsl(var(--primary) / 0.2)",
            }}
          >
            Ver proyectos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium border border-border text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <Mail className="w-4 h-4" />
            Contactar
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "5+", label: "Años experiencia" },
            { value: "30+", label: "Proyectos entregados" },
            { value: "15+", label: "Tecnologías" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient transition-transform group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
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
