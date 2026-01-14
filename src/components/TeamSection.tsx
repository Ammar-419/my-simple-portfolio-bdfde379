import TeamMemberCard from "./TeamMemberCard";

/*
 * This section showcases collaboration experience with teammates.
 * It is NOT meant to imply ownership or leadership claims.
 * 
 * You can customize this section to:
 * - Show collaborators you've worked with
 * - Highlight team projects
 * - Or remove entirely if not needed
 * 
 * Keep it minimal and professional.
 */

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Backend Developer",
    collaborationNote: "Collaborated on Task Management App",
  },
  {
    name: "Marcus Johnson",
    role: "UI/UX Designer",
    collaborationNote: "Collaborated on E-commerce Dashboard",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    collaborationNote: "Worked together on multiple projects",
  },
  {
    name: "Alex Kim",
    role: "DevOps Engineer",
    collaborationNote: "CI/CD setup and deployment workflows",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-container">
      <h2 className="section-title">Team & Collaboration</h2>
      <p className="section-subtitle mb-10">
        Great products are built by great teams. Here are some talented people 
        I've had the pleasure of working with.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
