import { useState } from "react";
import FadeInSection from "../components/common/FadeInSection";
import modesData from "../data/modesData";
import "./ModesSection.css";

function ModesSection() {
  const [activeId, setActiveId] = useState(modesData[0]?.id || "");
  const activeMode = modesData.find((item) => item.id === activeId) || modesData[0];

  if (!activeMode) return null;

  return (
    <section id="modes" className="modes-section-wrapper">
      
      <div 
        className="modes-bg-image" 
        style={{ backgroundImage:activeMode?.image ? `url('${activeMode.image}')` : 'none' }} 
      />
      <div className="modes-bg-vignette" />

      <div className="container-xl h-100 position-relative z-3">
        <div className="row h-100 modes-content-row">
          
          <div className="col-12 col-lg-4 col-xl-3 modes-left-col">
            <h2 className="modes-giant-title">CHẾ ĐỘ CHƠI</h2>
            
            <div className="modes-timeline-container">
              {modesData.map((item) => (
                <button
                  key={item.id}
                  className={`modes-tab-card ${activeId === item.id ? "active" : ""} ${item.locked ? "locked" : ""}`}
                  style={{ backgroundImage: window.innerWidth >= 992 ? `url(${item.image})` : 'none' }}
                  onClick={() => !item.locked && setActiveId(item.id)}
                >
                  <div className="tab-card-overlay"></div>
                  
                  {activeId === item.id && !item.locked && (
                    <div className="tab-active-indicator">
                      <div className="indicator-square"></div>
                      <div className="indicator-line"></div>
                    </div>
                  )}

                  {item.locked && <i className="bi bi-lock-fill tab-lock-icon" />}
                  <span className="tab-card-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-8 col-xl-7 ms-auto modes-right-col">
            <FadeInSection key={activeId}>
              <div className="modes-detail-box">
                <h3 className="detail-main-title">{activeMode.title}</h3>
                <p className="detail-main-desc">{activeMode.desc}</p>

                <div className="detail-points-wrapper">
                  {activeMode.points.map((point, index) => (
                    <div key={index} className="point-item">
                      <h4 className="point-title">{point.title}</h4>
                      <p className="point-desc">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ModesSection;