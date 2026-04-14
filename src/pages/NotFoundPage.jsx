import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="section-shell bg-section-dark text-white min-vh-100 d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-1 fw-bold text-neon">404</h1>
        <h3 className="fw-bold mb-3">Không tìm thấy trang</h3>
        <p className="text-muted-custom mb-4">
          Liên kết bạn truy cập không tồn tại hoặc đã bị thay đổi.
        </p>
        <Link to="/" className="btn btn-neon rounded-pill px-4">
          Quay về trang chủ
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;