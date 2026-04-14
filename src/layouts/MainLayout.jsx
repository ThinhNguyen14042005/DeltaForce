import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BottomNav from "../components/layout/BottomNav";
import MobileBottomNav from "../components/layout/MobileBottomNav";
import AgeWarning from "../components/common/AgeWarning";
import BackToTop from "../components/common/BackToTop";

function MainLayout() {
  return (
    <div className="app-shell bg-app-dark text-white">
      <Header />
      <AgeWarning />

      <main>
        <Outlet />
      </main>

      <Footer />
      <BottomNav />
      <MobileBottomNav />
      <BackToTop />
    </div>
  );
}

export default MainLayout;