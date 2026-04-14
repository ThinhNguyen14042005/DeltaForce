import { useState } from "react";
import VideoModal from "../components/common/VideoModal";
import "./HeroSection.css";

function HeroSection() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="hero-section position-relative overflow-hidden text-white"
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />
        <div className="hero-grid-overlay" />

        <div className="container-xl position-relative z-2">
          <div className="row min-vh-100 align-items-center justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              <span className="hero-badge mb-3 d-inline-block">
                Mùa giải mới đã bắt đầu
              </span>

              <h1 className="hero-title text-uppercase fw-bold mb-1">
                Delta Force
              </h1>

              <p className="hero-desc text-white mb-4 mx-auto">
                Game FPS Đa Nền Tảng Miễn Phí
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
                <button
                  className="btn btn-neon rounded-pill px-4 py-3"
                  onClick={() => setOpenVideo(true)}
                >
                  <i className="bi bi-play-fill me-2" />
                  Xem trailer
                </button>

                <a
                  href="#news"
                  className="btn btn-outline-light rounded-pill px-4 py-3"
                >
                  <i className="bi bi-newspaper me-2" />
                  Khám phá tin tức
                </a>
              </div>

              <div className="d-flex gap-4 justify-content-center fs-2 hero-platforms">
                <i className="bi bi-android2" />
                <i className="bi bi-apple" />
                <i className="bi bi-windows" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        videoUrl="https://www.youtube.com/embed/ZgK9kNXxGzo?autoplay=1&rel=0"
      />
    </>
  );
}

export default HeroSection;