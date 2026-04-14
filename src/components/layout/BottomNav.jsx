import { Link, useLocation } from "react-router-dom";
import useActiveSection from "../../hooks/useActiveSection";
import "./BottomNav.css";

function BottomNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeSection = useActiveSection();

  const getClassName = (sectionId) =>
    `bottom-nav-link ${isHome && activeSection === sectionId ? "active" : ""}`;

  return (
    <nav className="bottom-nav d-none d-lg-block">
      <div className="container-xl h-100">
        <div className="bottom-nav-inner h-100">
          <a href="/#hero" className={getClassName("hero")}>Sảnh</a>
          <a href="/#news" className={getClassName("news")}>Tin tức</a>
          <a href="/#modes" className={getClassName("modes")}>Chế độ chơi</a>

          <Link to="/download" className="bottom-nav-play">
            <div className="triangle-shape">
              <div className="triangle-inner">
                <span className="triangle-text">CHƠI<br/>NGAY</span>
              </div>
            </div>
          </Link>
        
          <a href="/#operators" className={getClassName("operators")}>Đặc vụ</a>
          <a href="/#weapons" className={getClassName("weapons")}>Vũ khí</a>
          <a href="/#vehicles" className={getClassName("vehicles")}>Phương tiện</a>

        </div>
      </div>
    </nav>
  );
}

export default BottomNav;