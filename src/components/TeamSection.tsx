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
    name: "Sadis Isah Sulaiman",
    role: "Cyber Security Specialist",
    collaborationNote: "Security audits and vulnerability assessments",
    imageUrl: "IMG_2757.JPEG",
  },
  {
    name: "Muhammad Jibril",
    role: "Backend Developer",
    collaborationNote: "API development and database architecture",
    imageUrl: "IMG_2757.JPEG",
  },
  {
    name: "Ibrahim Yahaya Ibrahim",
    role: "Product Manager",
    collaborationNote: "Product strategy and roadmap planning",
    imageUrl: "IMG_2757.JPEG",
  },
  {
    name: "Khadija Babangida",
    role: "UI/UX Designer",
    collaborationNote: "User research and interface design",
    imageUrl: "IMG_2757.JPEG",
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
