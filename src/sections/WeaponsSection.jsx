import { useState, useRef } from "react";
import weaponsData from "../data/weaponsData";
import "./WeaponsSection.css";

function WeaponsSection() {
  const [activeId, setActiveId] = useState(weaponsData[0]?.id || "");
  const activeWeapon = weaponsData.find((item) => item.id === activeId) || weaponsData[0];
  const currentIndex = weaponsData.findIndex(w => w.id === activeId);

  const scrollRef = useRef(null);

  const scrollTimeline = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrevWpn = () => {
    let idx = currentIndex - 1;
    while(idx >= 0 && weaponsData[idx].locked) idx--;
    if(idx >= 0) setActiveId(weaponsData[idx].id);
  };

  const handleNextWpn = () => {
    let idx = currentIndex + 1;
    while(idx < weaponsData.length && weaponsData[idx].locked) idx++;
    if(idx < weaponsData.length) setActiveId(weaponsData[idx].id);
  };

  return (
    <section id="weapons" className="wpn-section-wrapper">

      {/* BACKGROUND SỬ DỤNG BIẾN CSS ĐỂ TRÁO ẢNH GIỮA PC VÀ MOBILE */}
      <div 
        className="wpn-bg-image" 
        style={{ 
          '--desktop-bg': activeWeapon.image ? `url(${activeWeapon.image})` : 'none',
          '--mobile-bg': activeWeapon.mobileImage ? `url(${activeWeapon.mobileImage})` : (activeWeapon.image ? `url(${activeWeapon.image})` : 'none'),
          '--mobile-bg-pos': activeWeapon.mobileBgPos || 'center center'
        }} 
      />
      <div className="wpn-bg-overlay" />

      {/* MŨI TÊN CHUYỂN SÚNG (CHỈ HIỆN TRÊN MOBILE) */}
      <button className="wpn-big-arrow left d-block d-lg-none" onClick={handlePrevWpn} disabled={currentIndex === 0}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <button className="wpn-big-arrow right d-block d-lg-none" onClick={handleNextWpn} disabled={currentIndex === weaponsData.length - 1 || weaponsData[currentIndex + 1]?.locked}>
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* HEADER MOBILE */}
      <div className="wpn-mobile-header d-block d-lg-none position-relative z-3 text-center w-100 pt-4">
        <h2 className="wpn-mobile-title">| VŨ KHÍ |</h2>
      </div>

      <div className="container-xl h-100 position-relative z-3">
        <div className="row h-100 wpn-content-row d-flex flex-column-reverse flex-lg-row">

          <div className="col-12 col-lg-4 col-xl-3 wpn-left-col mt-auto mt-lg-0 pb-3 pb-lg-0">
            <h2 className="wpn-giant-title d-none d-lg-block">VŨ KHÍ</h2>
            
            {/* THÔNG TIN SÚNG (TÊN + MÔ TẢ) CHỈ HIỆN TRÊN MOBILE CHUẨN ẢNH BẠN GỬI */}
            {!activeWeapon.locked && (
              <div className="wpn-mobile-info-block d-block d-lg-none">
                <h3 className="wpn-mobile-info-name">{activeWeapon.label}</h3>
                <hr className="wpn-mobile-info-line" />
                <p className="wpn-mobile-info-desc">{activeWeapon.desc}</p>
              </div>
            )}

            <div className="wpn-nav-mobile-wrapper d-flex align-items-center">
              <button className="wpn-nav-arrow d-block d-lg-none" onClick={() => scrollTimeline('left')}>
                <i className="bi bi-chevron-left"></i>
              </button>

              <div className="wpn-timeline-container" ref={scrollRef}>
                {weaponsData.map((item) => (
                  <button
                    key={item.id}
                    className={`wpn-tab-card ${activeId === item.id ? "active" : ""} ${item.locked ? "locked" : ""}`}
                    onClick={() => !item.locked && setActiveId(item.id)}
                  >
                    {activeId === item.id && !item.locked && (
                      <div className="wpn-active-indicator">
                        <div className="wpn-indicator-square"></div>
                        <div className="wpn-indicator-line d-none d-lg-block"></div>
                      </div>
                    )}

                    {activeId !== item.id && !item.locked && (
                      <div className="wpn-mobile-inactive-square d-block d-lg-none"></div>
                    )}

                    <div className="wpn-tab-content">
                      <div className="wpn-tab-thumb-box d-none d-lg-flex">
                        {item.locked ? (
                          <i className="bi bi-lock-fill wpn-lock-icon" />
                        ) : (
                          <img src={item.thumb} alt={item.label} className="wpn-tab-thumb-img" />
                        )}
                      </div>

                      {item.locked && <i className="bi bi-lock-fill wpn-lock-icon-mobile d-block d-lg-none" />}

                      <span className="wpn-tab-label">{item.locked ? "SẮP RA MẮT" : item.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <button className="wpn-nav-arrow d-block d-lg-none" onClick={() => scrollTimeline('right')}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-8 col-xl-9 wpn-right-col mb-4 mb-lg-0"></div>

        </div>
      </div>
    </section>
  );
}

export default WeaponsSection;