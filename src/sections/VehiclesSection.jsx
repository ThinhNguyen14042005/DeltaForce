import { useState, useRef } from "react";
import vehiclesData from "../data/vehiclesData";
import "./VehiclesSection.css";

function VehiclesSection() {
  const [activeId, setActiveId] = useState(vehiclesData[0]?.id || "");
  const activeVehicle = vehiclesData.find((item) => item.id === activeId) || vehiclesData[0];
  const currentIndex = vehiclesData.findIndex(v => v.id === activeId);

  const scrollRef = useRef(null);

  const scrollTimeline = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrevVeh = () => {
    let idx = currentIndex - 1;
    while(idx >= 0 && vehiclesData[idx].locked) idx--;
    if(idx >= 0) setActiveId(vehiclesData[idx].id);
  };

  const handleNextVeh = () => {
    let idx = currentIndex + 1;
    while(idx < vehiclesData.length && vehiclesData[idx].locked) idx++;
    if(idx < vehiclesData.length) setActiveId(vehiclesData[idx].id);
  };

  return (
    <section id="vehicles" className="veh-section-wrapper">

      {/* BACKGROUND ĐỘNG: Tráo ảnh PC và Mobile theo đúng kích thước màn hình */}
      <div 
        className="veh-bg-image" 
        style={{ 
          '--desktop-bg': activeVehicle.image ? `url('${activeVehicle.image}')` : 'none',
          '--mobile-bg': activeVehicle.mobileImage ? `url('${activeVehicle.mobileImage}')` : (activeVehicle.image ? `url('${activeVehicle.image}')` : 'none'),
          '--mobile-bg-pos': activeVehicle.mobileBgPos || 'center center'
        }} 
      />
      <div className="veh-bg-vignette" />

      {/* MŨI TÊN CHUYỂN PHƯƠNG TIỆN (CHỈ HIỆN TRÊN MOBILE) */}
      <button className="veh-big-arrow left d-block d-lg-none" onClick={handlePrevVeh} disabled={currentIndex === 0}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <button className="veh-big-arrow right d-block d-lg-none" onClick={handleNextVeh} disabled={currentIndex === vehiclesData.length - 1 || vehiclesData[currentIndex + 1]?.locked}>
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* HEADER MOBILE */}
      <div className="veh-mobile-header d-block d-lg-none position-relative z-3 text-center w-100 pt-4">
        <h2 className="veh-mobile-title">| PHƯƠNG TIỆN |</h2>
      </div>

      <div className="container-xl h-100 position-relative z-3">
        <div className="row h-100 veh-content-row d-flex flex-column-reverse flex-lg-row">

          <div className="col-12 col-lg-3 veh-left-col mt-auto mt-lg-0 pb-3 pb-lg-0">
            <h2 className="veh-giant-title d-none d-lg-block">PHƯƠNG TIỆN</h2>

            {/* THÔNG TIN MOBILE RÚT GỌN KÈM HIỆU ỨNG TRƯỢT TEXT */}
            {!activeVehicle.locked && (
              <div key={activeId} className="veh-mobile-info-block d-block d-lg-none">
                <h3 className="veh-mobile-info-name">{activeVehicle.name}</h3>
                <hr className="veh-mobile-info-line" />
                <p className="veh-mobile-info-desc">{activeVehicle.description}</p>
              </div>
            )}
            
            <div className="veh-nav-mobile-wrapper d-flex align-items-center">
              <button className="veh-nav-arrow d-block d-lg-none" onClick={() => scrollTimeline('left')}>
                <i className="bi bi-chevron-left"></i>
              </button>

              <div className="veh-timeline-container" ref={scrollRef}>
                {vehiclesData.map((item) => (
                  <button
                    key={item.id}
                    className={`veh-tab-card ${activeId === item.id ? "active" : ""} ${item.locked ? "locked" : ""}`}
                    onClick={() => !item.locked && setActiveId(item.id)}
                  >
                    {/* INDICATOR ACTIVE (Dùng chung) */}
                    {activeId === item.id && !item.locked && (
                      <div className="veh-active-indicator">
                        <div className="veh-indicator-square"></div>
                        <div className="veh-indicator-line d-none d-lg-block"></div>
                      </div>
                    )}

                    {/* INDICATOR INACTIVE (Chỉ Mobile) */}
                    {activeId !== item.id && !item.locked && (
                      <div className="veh-mobile-inactive-square d-block d-lg-none"></div>
                    )}

                    <div className="veh-tab-content">
                      <div className="veh-tab-thumb-box d-none d-lg-flex">
                        {item.locked ? (
                          <i className="bi bi-lock-fill veh-lock-icon" />
                        ) : (
                          <img src={item.thumb} alt={item.label} className="veh-tab-thumb-img" />
                        )}
                      </div>

                      {/* Ổ Khóa (Chỉ hiện trên dòng kẻ ngang của Mobile) */}
                      {item.locked && <i className="bi bi-lock-fill veh-lock-icon-mobile d-block d-lg-none" />}

                      <span className="veh-tab-label">{item.locked ? "SẮP RA MẮT" : item.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <button className="veh-nav-arrow d-block d-lg-none" onClick={() => scrollTimeline('right')}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* CỘT PHẢI CHI TIẾT KỸ NĂNG (TÀNG HÌNH TRÊN MOBILE ĐỂ LỘ MÔ HÌNH XE) */}
          <div className="col-12 col-lg-5 ms-auto veh-right-col d-none d-lg-block">
            <div key={activeId} className="veh-detail-box-animated">
              <div className="veh-detail-box">

                <h3 className="veh-detail-name">{activeVehicle.name}</h3>
                <div className="veh-detail-type" style={{ color: activeVehicle.typeColor }}>
                  {activeVehicle.type}
                </div>
                <hr className="veh-divider-main" />

                <div className="veh-skill-row mb-4">
                  <div className="veh-skill-icon" style={{ color: activeVehicle.typeColor }}>
                    <i className={activeVehicle.typeIcon} />
                  </div>
                  <div className="veh-skill-text">
                    <h4 className="veh-role-title" style={{ color: activeVehicle.typeColor }}>
                      Vai Trò Tác Chiến
                    </h4>
                    <p className="veh-desc-text">{activeVehicle.description}</p>
                  </div>
                </div>

                <div className="veh-skills-list">
                  {activeVehicle.features && activeVehicle.features.map((feat, index) => (
                    <div key={index} className="veh-skill-wrapper">
                      <hr className="veh-divider-thin" />
                      <div className="veh-skill-row mt-3 mb-3">
                        <div className="veh-skill-icon text-white">
                          <i className={feat.icon} />
                        </div>
                        <div className="veh-skill-text">
                          <h4 className="veh-skill-title">{feat.title}</h4>
                          <p className="veh-desc-text">{feat.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VehiclesSection;