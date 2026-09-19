type SectionHeaderProps = { icon: string; title: string; trailing?: string };
export function SectionHeader({ icon, title, trailing }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        <span className="section-icon">{icon}</span>
        <h2>{title}</h2>
      </div>
      {trailing && <span className="section-trailing">{trailing}</span>}
    </div>
  );
}
