import { useState, useRef } from "react";
import operatorsData from "../data/operatorsData";
import "./OperatorsSection.css";

function OperatorsSection() {
  const [activeId, setActiveId] = useState(operatorsData[0]?.id || "");
  const activeOp = operatorsData.find((item) => item.id === activeId) || operatorsData[0];
  const currentIndex = operatorsData.findIndex(op => op.id === activeId);
  
  const scrollRef = useRef(null);

  const scrollTimeline = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrevOp = () => {
    let idx = currentIndex - 1;
    while(idx >= 0 && operatorsData[idx].locked) idx--;
    if(idx >= 0) setActiveId(operatorsData[idx].id);
  };

  const handleNextOp = () => {
    let idx = currentIndex + 1;
    while(idx < operatorsData.length && operatorsData[idx].locked) idx++;
    if(idx < operatorsData.length) setActiveId(operatorsData[idx].id);
  };

  if (!activeOp) return null;

  return (
    <section id="operators" className="ops-section-wrapper">

      <div 
        className="ops-bg-image" 
        style={{ 
          backgroundImage: `url(${activeOp.image})`,
          '--mobile-bg-pos': activeOp.mobileBgPos || 'center top' // Nhận data từ operatorsData.js
        }} 
      />
      <div className="ops-bg-vignette" />

      <button className="ops-big-arrow left d-block d-lg-none" onClick={handlePrevOp} disabled={currentIndex === 0}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <button className="ops-big-arrow right d-block d-lg-none" onClick={handleNextOp} disabled={currentIndex === operatorsData.length - 1 || operatorsData[currentIndex + 1]?.locked}>
        <i className="bi bi-chevron-right"></i>
      </button>

      <div className="ops-mobile-header d-block d-lg-none position-relative z-3 text-center w-100 pt-4">
        <h2 className="ops-mobile-title">| ĐẶC VỤ |</h2>
      </div>

      <div className="container-xl h-100 position-relative z-3">
        <div className="row h-100 ops-content-row d-flex flex-column-reverse flex-lg-row">

          <div className="col-12 col-lg-3 ops-left-col mt-auto mt-lg-0 pb-3 pb-lg-0">
            <h2 className="ops-giant-title d-none d-lg-block">ĐẶC VỤ</h2>
            
            <div className="ops-nav-mobile-wrapper d-flex align-items-center">
              <button className="ops-nav-arrow d-block d-lg-none" onClick={() => scrollTimeline('left')}>
                <i className="bi bi-chevron-left"></i>
              </button>

              <div className="ops-timeline-container" ref={scrollRef}>
                <div className="ops-timeline-line-mobile d-block d-lg-none"></div>

                {operatorsData.map((item) => (
                  <button
                    key={item.id}
                    className={`ops-tab-card ${activeId === item.id ? "active" : ""} ${item.locked ? "locked" : ""}`}
                    onClick={() => !item.locked && setActiveId(item.id)}
                  >
                    <img src={item.thumb} alt={item.label} className="ops-tab-bg-img" />
                    <div className="ops-tab-overlay"></div>

                    {activeId === item.id && !item.locked && (
                      <div className="ops-active-indicator">
                        <div className="ops-indicator-square"></div>
                        <div className="ops-indicator-line d-none d-lg-block"></div>
                      </div>
                    )}

                    {activeId !== item.id && !item.locked && (
                      <div className="ops-mobile-inactive-square d-block d-lg-none"></div>
                    )}

                    {item.locked && <i className="bi bi-lock-fill ops-lock-icon" />}
                    <span className="ops-tab-label">{item.label}</span>
                  </button>
                ))}
              </div>

              <button className="ops-nav-arrow d-block d-lg-none" onClick={() => scrollTimeline('right')}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-5 ms-auto ops-right-col mb-4 mb-lg-0">
            <div key={activeId} className="ops-detail-box-animated">
              <div className="ops-detail-box">
                <h3 className="ops-detail-name">{activeOp.name}</h3>
                <div className="ops-detail-realname">{activeOp.realName}</div>
                <hr className="ops-divider-main d-none d-lg-block" />

                {activeOp.role && (
                  <div className="ops-skill-row mb-3 mb-lg-4 ops-mobile-role-row">
                    <div className="ops-skill-icon ops-role-icon-mobile" style={{ color: activeOp.roleColor }}>
                      <i className={activeOp.roleIcon} />
                    </div>
                    <div className="ops-skill-text">
                      <h4 className="ops-role-title d-block d-lg-block d-inline-lg-none" style={{ color: activeOp.roleColor }}>
                        {activeOp.role}
                      </h4>
                      <p className="ops-desc-text d-inline"> {activeOp.roleDesc}</p>
                    </div>
                  </div>
                )}

                <div className="ops-skills-list ops-mobile-skills-grid">
                  {activeOp.skills.map((skill, index) => {
                    const parts = skill.title.split(' – ');
                    const skillType = parts[0];
                    const skillName = parts.length > 1 ? parts[1] : '';

                    return (
                      <div key={index} className="ops-skill-wrapper">
                        <hr className="ops-divider-thin d-none d-lg-block" />
                        <div className="ops-skill-row mt-0 mt-lg-3 mb-0 mb-lg-3 ops-mobile-skill-item">
                          <div className="ops-skill-icon text-white">
                            <i className={skill.icon} />
                          </div>
                          <div className="ops-skill-text">
                            <h4 className="ops-skill-title d-none d-lg-block">{skill.title}</h4>
                            <div className="ops-skill-mobile-title d-block d-lg-none">
                              <div className="ops-skill-title-top">{skillType}</div>
                              <div className="ops-skill-title-bottom">{skillName}</div>
                            </div>
                            <p className="ops-desc-text d-none d-lg-block">{skill.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OperatorsSection;