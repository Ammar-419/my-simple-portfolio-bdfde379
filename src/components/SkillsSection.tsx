import { Code2, Palette, Database, Globe, Shield, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "UI/UX Tools",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Responsive Design", "Accessibility"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST APIs"],
  },
  {
    title: "DevOps & Tools",
    icon: Globe,
    skills: ["Git", "GitHub", "Vercel", "Docker", "CI/CD"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "PWA", "Mobile-First Design"],
  },
  {
    title: "Security Awareness",
    icon: Shield,
    skills: ["OWASP Basics", "Secure Coding", "Authentication"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle mb-10">
        Technologies and tools I work with to bring ideas to life.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="card-base">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 bg-secondary text-muted-foreground rounded-full border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
