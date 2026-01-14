import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Task Management App",
    description:
      "A drag-and-drop task board for managing personal and team projects. Features real-time updates and a clean, minimal interface.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    liveUrl: "#", // TODO: Replace with actual live demo URL
    githubUrl: "#", // TODO: Replace with actual GitHub URL
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for an online store with sales analytics, inventory management, and order tracking features.",
    techStack: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    liveUrl: "#", // TODO: Replace with actual live demo URL
    githubUrl: "#", // TODO: Replace with actual GitHub URL
  },
  {
    title: "Weather Forecast PWA",
    description:
      "Progressive web app providing 7-day weather forecasts with location detection and offline support.",
    techStack: ["React", "PWA", "OpenWeather API", "CSS Modules"],
    liveUrl: "#", // TODO: Replace with actual live demo URL
    githubUrl: "#", // TODO: Replace with actual GitHub URL
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle mb-10">
        A selection of projects I've built and contributed to.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
