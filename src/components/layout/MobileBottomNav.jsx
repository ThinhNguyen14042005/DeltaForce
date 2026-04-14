import { Link, useLocation } from "react-router-dom";
import "./MobileBottomNav.css";

function MobileBottomNav() {
  const location = useLocation();

  const getClassName = (path) =>
    `mobile-bottom-link ${location.pathname === path ? "active" : ""}`;

  return (
    <nav className="mobile-bottom-nav d-lg-none">
      <Link to="/" className={getClassName("/")}>
        <i className="bi bi-house-door" />
        <span>Home</span>
      </Link>

      <Link to="/news" className={getClassName("/news")}>
        <i className="bi bi-newspaper" />
        <span>Tin tức</span>
      </Link>

      <Link to="/download" className="mobile-bottom-play">
        <i className="bi bi-download" />
        <span>Tải</span>
      </Link>

      <Link to="/cskh" className={getClassName("/cskh")}>
        <i className="bi bi-headset" />
        <span>CSKH</span>
      </Link>

      <Link to="/gift-code" className={getClassName("/gift-code")}>
        <i className="bi bi-gift" />
        <span>Code</span>
      </Link>
    </nav>
  );
}

export default MobileBottomNav;