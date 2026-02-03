import { ExternalLink, Workflow, Bot, Share2, Mail, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Workflow,
      title: "Template ETL para GCP",
      description: "Plantilla reutilizable para desplegar proyectos de ETL en Google Cloud Platform. Incluye Workflow, Dataflow, BigQuery y monitoreo integrado.",
      tags: ["GCP", "Dataflow", "BigQuery", "Terraform"],
      impact: "Reduce tiempo de setup en 80%",
      color: "primary",
    },
    {
      icon: Bot,
      title: "Interfaces Agentic AI",
      description: "Desarrollo de interfaces web para interactuar con modelos agentic utilizando Vertex AI y OpenAI. Experiencia conversacional avanzada.",
      tags: ["Vertex AI", "OpenAI", "React", "Python"],
      impact: "3 productos en producción",
      color: "secondary",
    },
    {
      icon: Share2,
      title: "Automatización n8n",
      description: "Flujos automatizados para publicación de contenido en múltiples redes sociales. Scheduling inteligente y análisis de engagement.",
      tags: ["n8n", "APIs", "Social Media", "Webhooks"],
      impact: "50+ posts/semana automatizados",
      color: "accent",
    },
    {
      icon: Mail,
      title: "Email & Document Processing",
      description: "Sistema de etiquetado automático de correos y extracción de información de documentos adjuntos usando NLP y OCR.",
      tags: ["NLP", "OCR", "Cloud Functions", "ML"],
      impact: "95% precisión en clasificación",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Plataforma de Forecasting",
      description: "Desarrollo de plataforma para realizar pronósticos con modelos estadísticos SES, SED y ARIMA. Dashboard interactivo incluido.",
      tags: ["Time Series", "Python", "Plotly", "FastAPI"],
      impact: "Precisión MAPE < 10%",
      color: "secondary",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "primary": return "text-primary";
      case "secondary": return "text-secondary";
      case "accent": return "text-accent";
      default: return "text-primary";
    }
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {"// "}Proyectos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos de <span className="text-gradient">Alto Impacto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones que han transformado la manera de trabajar con datos
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border-gradient p-6 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-4 
                group-hover:scale-110 transition-transform ${getColorClass(project.color)}`}>
                <project.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Impact badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono
                  bg-muted/50 ${getColorClass(project.color)}`}>
                  ⚡ {project.impact}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 text-xs font-mono bg-muted/30 text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center text-sm text-muted-foreground 
                group-hover:text-primary transition-colors">
                <span className="font-mono">Ver más</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 
                  -translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
