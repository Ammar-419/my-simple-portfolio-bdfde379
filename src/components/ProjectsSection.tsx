import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SabiBoss",
    description:
      "A comprehensive platform designed to help businesses manage operations, track performance, and scale efficiently with intuitive tools.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "sabi-boss.vercel.app", // TODO: Replace with actual live demo URL
    githubUrl: "https://github.com/Ammar-419/remix-of-sabi-boss-biz-aid", // TODO: Replace with actual GitHub URL
  },
  {
    title: "Freelancing platform",
    description:
      "A website made by student for student to help them with guidiance for their assigment project and aot more ",
    techStack: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    liveUrl: "Octapus,org", // TODO: Replace with actual live demo URL
    githubUrl: "#", // TODO: Replace with actual GitHub URL
  },
  {
    title: "OctaLearn",
    description:
      "An interactive learning platform with course management, progress tracking, and engaging educational content delivery.",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "#", // TODO: Replace with actual live demo URL
    githubUrl: "https://github.com/Lanslot47/OctaLearn", // TODO: Replace with actual GitHub URL
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
