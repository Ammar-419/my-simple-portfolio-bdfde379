interface TeamMemberCardProps {
  name: string;
  role: string;
  collaborationNote: string;
  imageUrl?: string;
}

const TeamMemberCard = ({
  name,
  role,
  collaborationNote,
  imageUrl,
}: TeamMemberCardProps) => {
  return (
    <article className="card-base flex items-start gap-4 group">
      {/* Avatar */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-0.5 flex-shrink-0">
        <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-lg font-semibold text-primary">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-primary/80 font-medium">{role}</p>
        <p className="text-sm text-muted-foreground mt-1">{collaborationNote}</p>
      </div>
    </article>
  );
};

export default TeamMemberCard;
