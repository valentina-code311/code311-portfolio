import { Database, Cloud, Workflow, Bot, BarChart3, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Diseño e implementación de pipelines ETL/ELT robustos y escalables.",
      features: ["Arquitecturas de datos", "Data Lakes & Warehouses", "Modelado dimensional"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migración y optimización de infraestructura en la nube.",
      features: ["AWS & GCP", "BigQuery & Redshift", "Infraestructura como código"],
    },
    {
      icon: Workflow,
      title: "DataOps & MLOps",
      description: "Automatización de flujos de datos con mejores prácticas DevOps.",
      features: ["CI/CD para datos", "Orquestación (Airflow)", "Monitoreo y alertas"],
    },
    {
      icon: Bot,
      title: "AI & Automatización",
      description: "Integración de modelos de IA y automatización inteligente.",
      features: ["Agentes de IA", "Vertex AI", "n8n & workflows"],
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Dashboards y reportes para toma de decisiones basada en datos.",
      features: ["Power BI & Looker", "KPIs estratégicos", "Self-service analytics"],
    },
    {
      icon: Cog,
      title: "Consultoría Data",
      description: "Asesoría estratégica para proyectos de transformación digital.",
      features: ["Auditoría de datos", "Roadmaps técnicos", "Capacitación equipos"],
    },
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {"// "}Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Cómo puedo <span className="text-gradient">ayudarte</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones end-to-end para transformar tus datos en valor de negocio
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 
                transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4
                group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> ¿Tienes un proyecto específico?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Hablemos →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
