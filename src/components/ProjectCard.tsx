import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <article className="card-base flex flex-col h-full">
      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 flex-grow">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2 border-t border-border">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm link-accent"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm link-accent"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
