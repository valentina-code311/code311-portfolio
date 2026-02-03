const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Scala", level: 75 },
        { name: "Bash/Linux", level: 85 },
      ],
    },
    {
      title: "Cloud & Data",
      skills: [
        { name: "GCP (BigQuery, Dataflow)", level: 90 },
        { name: "AWS (S3, Lambda, Redshift)", level: 80 },
        { name: "Cloud Composer", level: 80 },
        { name: "Vertex AI", level: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "GitLab CI/CD", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Terraform", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {"// "}Habilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stack <span className="text-gradient">Tecnológico</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las herramientas que uso para construir soluciones de datos robustas
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className="border-gradient p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="font-mono text-lg font-semibold text-primary mb-6">
                {`{${category.title}}`}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          background: "var(--gradient-primary)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Apache Beam", "Airflow", "dbt", "Spark", 
              "Kafka", "Redis", "PostgreSQL", "MongoDB",
              "OpenAI API", "n8n", "FastAPI", "Pandas",
              "S3", "Lambda", "Redshift", "EC2"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-muted/50 text-muted-foreground font-mono text-sm
                  hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
