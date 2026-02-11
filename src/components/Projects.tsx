import { useState } from "react";
import { Rocket, Bot, Share2, ShoppingCart, Mail, TrendingUp, FileText, Package, Dumbbell, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      icon: Rocket,
      title: "Portal de Plantillas Cloud",
      description: "Portal centralizado para despliegue ágil de proyectos en GCP. Integración directa con GitLab para CI/CD automático, plantillas preconfiguradas de ETL con Dataflow, BigQuery, Workflows y monitoreo listo para producción.",
      tags: ["GCP", "GitLab", "Terraform", "Dataflow", "BigQuery"],
      impact: "Reduce setup de proyectos en 80%",
      color: "primary",
    },
    {
      icon: Bot,
      title: "Interfaces Agentic AI",
      description: "Interfaces web conversacionales para agentes de IA autónomos. Integración con Vertex AI y OpenAI para experiencias multi-turno con ejecución de herramientas y toma de decisiones en tiempo real.",
      tags: ["Vertex AI", "OpenAI", "React", "Python"],
      impact: "3 productos en producción",
      color: "secondary",
    },
    {
      icon: ShoppingCart,
      title: "Catálogo & Despachos E-commerce",
      description: "Sistema integral de comercio electrónico: catálogo de productos, autenticación de clientes, gestión de ciudades, módulo de despacho y pasarela de pagos. Dashboard analítico para seguimiento de pedidos y métricas de negocio.",
      tags: ["FastAPI", "Supabase", "React", "GCP"],
      impact: "Pipeline completo de e-commerce",
      color: "accent",
    },
    {
      icon: FileText,
      title: "Gestor Documental Inteligente",
      description: "Sistema de creación documental impulsado por IA. Sesiones configurables con prompts que, combinados con el contexto del proyecto y las interacciones por chat, generan documentos estructurados de forma iterativa.",
      tags: ["AI", "LLM", "React", "Python"],
      impact: "Generación documental automatizada",
      color: "primary",
    },
    {
      icon: Share2,
      title: "Automatización n8n",
      description: "Flujos automatizados de publicación multicanal en redes sociales. Scheduling inteligente basado en métricas de engagement y análisis de rendimiento por plataforma.",
      tags: ["n8n", "APIs", "Social Media", "Webhooks"],
      impact: "50+ posts/semana automatizados",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Plataforma de Forecasting",
      description: "Plataforma de pronósticos con modelos estadísticos SES, SED y ARIMA. Dashboard interactivo para visualización de tendencias, estacionalidad y comparación de precisión entre modelos.",
      tags: ["Time Series", "Python", "Plotly", "FastAPI"],
      impact: "Precisión MAPE < 10%",
      color: "accent",
    },
    {
      icon: Mail,
      title: "Clasificación Inteligente de Emails",
      description: "Agente autónomo con Vertex AI que etiqueta correos en Gmail y extrae datos de documentos adjuntos. Incluye dashboard en Looker Studio para analítica de volumen y patrones de comunicación.",
      tags: ["Vertex AI", "Gmail API", "Looker Studio", "GCP"],
      impact: "95% precisión en clasificación",
      color: "primary",
    },
    {
      icon: Package,
      title: "Sistema de Gestión de Inventario",
      description: "Plataforma de solicitudes de inventario multiárea. Control de productos disponibles, límites de cantidad por área, días de despacho configurables, gestión de pendientes y trazabilidad completa de entregas.",
      tags: ["Python", "PostgreSQL", "AWS", "Docker"],
      impact: "Control centralizado multiárea",
      color: "secondary",
    },
    {
      icon: Dumbbell,
      title: "Plataforma para Entrenadores",
      description: "Sistema integral para entrenadores personales: seguimiento de clientes, gestión de agenda, planes de alimentación, métricas de peso y repeticiones por ejercicio. Catálogo de ejercicios con contenido multimedia.",
      tags: ["React", "FastAPI", "Supabase", "GCP"],
      impact: "Gestión completa de clientes",
      color: "accent",
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

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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
          {visibleProjects.map((project, index) => (
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
            </div>
          ))}
        </div>

        {/* Show more/less button */}
        {projects.length > 3 && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="font-mono gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary"
            >
              {showAll ? (
                <>
                  Ver menos
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver todos los proyectos ({projects.length})
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
