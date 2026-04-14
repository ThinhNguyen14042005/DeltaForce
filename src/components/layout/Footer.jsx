import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white">
      <div className="container-xl">
        <div className="row g-4">
          <div className="col-lg-5">
            <h4 className="fw-bold text-uppercase mb-3 text-neon">
              Delta Force
            </h4>
            <p className="text-muted-custom mb-3">
              Website demo phong cách landing page game FPS hiện đại, xây dựng
              bằng React, React Router, Bootstrap 5 và dữ liệu tách riêng để dễ
              quản lý.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="footer-social-link">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="footer-social-link">
                <i className="bi bi-youtube" />
              </a>
              <a href="#" className="footer-social-link">
                <i className="bi bi-discord" />
              </a>
              <a href="#" className="footer-social-link">
                <i className="bi bi-tiktok" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h5 className="fw-bold mb-3">Điều hướng</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li><a href="#hero">Trang chủ</a></li>
              <li><a href="#news">Tin tức</a></li>
              <li><a href="#modes">Chế độ chơi</a></li>
              <li><a href="#operators">Đặc vụ</a></li>
              <li><a href="#weapons">Vũ khí</a></li>
              <li><a href="#vehicles">Phương tiện</a></li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-4">
            <h5 className="fw-bold mb-3">Thông tin liên hệ</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 text-muted-custom">
              <li>Công ty TNHH Dịch vụ Phần mềm 1 thành viên Gia Thịnh</li>
              <li>Hà Nội, Việt Nam</li>
              <li>Email: thinh@gmail.com</li>
              <li>Hotline: 08 9899 7468</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom border-top mt-4 pt-4">
          <p className="mb-2 text-muted-custom">
            Quyết định phát hành trò chơi điện tử G1 trên mạng: Số 307/QĐ-PTTH&TTĐT ngày 08/07/2025
          </p>
          <p className="mb-2">
            Giấy phép:
            <a
              href="https://giayphep.abei.gov.vn/g1/131724"
              target="_blank"
              rel="noreferrer"
              className="ms-2 text-neon"
            >
              https://giayphep.abei.gov.vn/g1/131724
            </a>
          </p>
          <small className="text-muted-custom d-block">
            Copyright © Garena Online. Demo UI React by AI Assistant.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;