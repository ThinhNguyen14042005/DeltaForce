function PageHero({ badge, title, subtitle, icon }) {
  return (
    <div className="glass-panel p-4 p-lg-5 mb-4">
      <div className="row align-items-center g-4">
        <div className="col-lg-8">
          {badge && (
            <span className="badge rounded-pill text-bg-dark border border-secondary mb-3">
              {badge}
            </span>
          )}
          <h1 className="section-title mb-3">{title}</h1>
          <p className="section-subtitle mb-0">{subtitle}</p>
        </div>

        <div className="col-lg-4 text-lg-end">
          <div className="fs-1 text-neon">{icon}</div>
        </div>
      </div>
    </div>
  );
}

export default PageHero;