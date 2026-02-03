import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", username: "@tuusuario" },
    { icon: Linkedin, label: "LinkedIn", href: "#", username: "in/tuusuario" },
    { icon: Mail, label: "Email", href: "mailto:tu@email.com", username: "tu@email.com" },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <span className="font-mono text-sm text-primary mb-2 block">
          {"// "}Contacto
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hablemos de tu <span className="text-gradient">próximo proyecto</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          ¿Tienes un proyecto de datos en mente? Me encantaría ayudarte a hacerlo realidad.
        </p>

        {/* Terminal-style CTA */}
        <div className="bg-card border border-border rounded-lg p-6 mb-12 max-w-lg mx-auto text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-secondary/60" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="font-mono text-sm">
            <p className="text-muted-foreground mb-1">
              <span className="text-secondary">~</span> $ echo "¿Listo para colaborar?"
            </p>
            <p className="text-foreground mb-3">¿Listo para colaborar?</p>
            <p className="text-muted-foreground">
              <span className="text-secondary">~</span> $ <span className="text-primary">send_message</span> --to="tu@email.com"
              <span className="typing-cursor text-primary">|</span>
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-center gap-3 px-6 py-4 border-gradient 
                hover:scale-105 transition-transform duration-300"
            >
              <link.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
              <div className="text-left">
                <div className="text-sm font-medium text-foreground">{link.label}</div>
                <div className="font-mono text-xs text-muted-foreground">{link.username}</div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:tu@email.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold
            text-primary-foreground transition-all duration-300 hover:scale-105 animate-pulse-glow"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Send className="w-5 h-5" />
          Enviar mensaje
        </a>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-mono text-sm text-muted-foreground">
            {"</"} Diseñado y desarrollado con{" "}
            <span className="text-primary">♥</span> en {new Date().getFullYear()}{" />"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
