import { Terminal, Database, Cloud, GitBranch } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2019",
      title: "Inicio en Data Engineering",
      description: "Primeros pasos en el mundo de los datos, aprendiendo Python, SQL y fundamentos de ETL.",
    },
    {
      year: "2020",
      title: "Especialización en Cloud",
      description: "Profundización en Google Cloud Platform, BigQuery y arquitecturas de datos modernas.",
    },
    {
      year: "2022",
      title: "DataOps & CI/CD",
      description: "Implementación de prácticas DevOps en proyectos de datos con GitLab y GitHub Actions.",
    },
    {
      year: "2024",
      title: "AWS",
      description: "Migración de procesos a AWS, implementando soluciones escalables y de alto impacto.",
    },
    {
      year: "2025",
      title: "AI & Automatización",
      description: "Integración de modelos agentic, Vertex AI y automatizaciones inteligentes.",
    },
  ];

  const highlights = [
    { icon: Terminal, label: "SQL, Python, Scala, JavaScript, Linux, PowerShell" },
    { icon: Database, label: "PostgreSQL, BigQuery, Redshift, Redis, MongoDB, Neo4j" },
    { icon: GitBranch, label: "GitLab CI/CD, GitHub Actions, Docker, Copier, Terraform" },
    { icon: Cloud, label: "GCP y AWS" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {"// "}Trayectoria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mi <span className="text-gradient">Recorrido</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5 años construyendo soluciones de datos escalables y de alto impacto
          </p>
        </div>

        {/* Quick highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="border-gradient p-4 text-center group hover:scale-105 transition-transform duration-300"
            >
              <item.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-secondary transition-colors" />
              <span className="font-mono text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 animate-pulse-glow" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="font-mono text-2xl font-bold text-gradient">{item.year}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
