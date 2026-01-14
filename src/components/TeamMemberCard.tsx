import { User } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  collaborationNote: string;
}

const TeamMemberCard = ({
  name,
  role,
  collaborationNote,
}: TeamMemberCardProps) => {
  return (
    <article className="card-base flex items-start gap-4">
      {/* Avatar Placeholder */}
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
        <User className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-primary">{role}</p>
        <p className="text-sm text-muted-foreground mt-1">{collaborationNote}</p>
      </div>
    </article>
  );
};

export default TeamMemberCard;
