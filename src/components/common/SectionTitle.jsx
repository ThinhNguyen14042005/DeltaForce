function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;