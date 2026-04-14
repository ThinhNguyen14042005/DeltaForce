import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-transparent position-fixed top-0 start-0 end-0 header-super-top">
      <div className="container-xl">

        <div className="header-inner d-flex align-items-center justify-content-between py-1">
          <div className="d-flex align-items-center gap-4">
            <Link to="/" className="d-flex align-items-center gap-3 text-uppercase fw-bold header-brand text-decoration-none" >
              <img src="/images/logo/garena.png" style={{ height: '45px', objectFit: 'contain' }} />
              <span className="header-garena text-danger fs-5">Garena</span>
              <span className="vr text-white opacity-50" style={{ width: '2px', height: '36px' }} />
              <img src="/images/logo/delta-force.png" style={{ height: '36px', objectFit: 'contain' }} />
              <span className="header-delta text-white fs-7">Delta Force</span>
            </Link>

            <div className="d-none d-lg-flex align-items-center gap-2">
              <Link to="/cskh" className="header-action-btn-square">
                CSKH <i className="bi bi-headset ms-5" />
              </Link>
              <Link to="/gift-code" className="header-action-btn-square">
                GIFT CODE <i className="bi bi-gift ms-5" />
              </Link>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="d-none d-xl-flex align-items-center gap-2 me-2">
              <a href="#" className="header-icon-link"><i className="bi bi-facebook" /></a>
              <a href="#" className="header-icon-link"><i className="bi bi-tiktok" /></a>
              <a href="#" className="header-icon-link"><i className="bi bi-youtube" /></a>
              <a href="#" className="header-icon-link"><i className="bi bi-discord" /></a>
            </div>

            <div className="lang-dropdown-wrapper ms-xl-4">
              <div className="lang-dropdown-btn">
                <i className="bi bi-globe fs-6" />
                <span className="ms-2 me-3 lang-text">Tiếng Việt</span>
                <i className="bi bi-chevron-down small mt-1" />
              </div>
              
              <div className="lang-dropdown-menu">
                <a href="#" className="lang-item active">Tiếng Việt</a>
                <a href="#" className="lang-item">English</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;