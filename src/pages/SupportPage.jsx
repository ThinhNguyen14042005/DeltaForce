import { useState } from "react";
import AppToast from "../components/common/AppToast";
import FadeInSection from "../components/common/FadeInSection";
import PageHero from "../components/common/PageHero";

function SupportPage() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <>
      <section className="section-shell bg-section-dark text-white min-vh-100">
        <div className="container-xl">
          <FadeInSection>
            <PageHero
              badge="Hỗ trợ khách hàng"
              title="Trung tâm CSKH Delta Force"
              subtitle="Gửi yêu cầu hỗ trợ, tra cứu lỗi tài khoản, lỗi nạp thẻ, lỗi đăng nhập và các vấn đề phát sinh trong quá trình trải nghiệm game."
              icon={<i className="bi bi-headset" />}
            />

            <div className="row g-4 mb-4">
              <div className="col-md-6 col-xl-3">
                <div className="glass-panel p-4 h-100 text-center">
                  <div className="fs-2 text-neon mb-3">
                    <i className="bi bi-person-lock" />
                  </div>
                  <h5 className="fw-bold mb-2">Tài khoản</h5>
                  <p className="text-muted-custom mb-0">
                    Hỗ trợ khóa/mở tài khoản, đổi mật khẩu, xác minh đăng nhập.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="glass-panel p-4 h-100 text-center">
                  <div className="fs-2 text-neon mb-3">
                    <i className="bi bi-credit-card" />
                  </div>
                  <h5 className="fw-bold mb-2">Thanh toán</h5>
                  <p className="text-muted-custom mb-0">
                    Xử lý các vấn đề liên quan đến nạp game, giao dịch và hóa đơn.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="glass-panel p-4 h-100 text-center">
                  <div className="fs-2 text-neon mb-3">
                    <i className="bi bi-bug" />
                  </div>
                  <h5 className="fw-bold mb-2">Lỗi kỹ thuật</h5>
                  <p className="text-muted-custom mb-0">
                    Gửi thông tin lỗi game, crash, giật lag, lỗi cập nhật hoặc anti-cheat.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="glass-panel p-4 h-100 text-center">
                  <div className="fs-2 text-neon mb-3">
                    <i className="bi bi-shield-check" />
                  </div>
                  <h5 className="fw-bold mb-2">Bảo mật</h5>
                  <p className="text-muted-custom mb-0">
                    Báo cáo hành vi bất thường, đánh cắp tài khoản và hỗ trợ bảo vệ dữ liệu.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-7">
                <div className="glass-panel p-4 p-lg-5 h-100">
                  <h3 className="fw-bold mb-4">Gửi yêu cầu hỗ trợ</h3>

                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label className="form-label">Họ và tên</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">UID / Tên nhân vật</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Nhập UID hoặc tên nhân vật"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Loại hỗ trợ</label>
                      <select className="form-select bg-dark text-white border-secondary">
                        <option>Tài khoản</option>
                        <option>Thanh toán</option>
                        <option>Lỗi kỹ thuật</option>
                        <option>Bảo mật</option>
                        <option>Khác</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Mô tả chi tiết</label>
                      <textarea
                        rows="5"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Mô tả vấn đề bạn đang gặp..."
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-neon rounded-pill px-4">
                        Gửi yêu cầu
                      </button>
                    </div>
                  </form>

                  <div className="mt-4 pt-4 border-top border-secondary">
                    <h5 className="fw-bold mb-3">Trạng thái yêu cầu gần đây</h5>

                    <div className="d-flex flex-column gap-3">
                      <div className="rounded-4 p-3 border border-secondary bg-dark">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <strong>#CSKH-2026-0012</strong>
                          <span className="badge text-bg-warning">Đang xử lý</span>
                        </div>
                        <p className="mb-0 text-muted-custom">
                          Yêu cầu hỗ trợ đăng nhập tài khoản đang được kiểm tra.
                        </p>
                      </div>

                      <div className="rounded-4 p-3 border border-secondary bg-dark">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <strong>#CSKH-2026-0008</strong>
                          <span className="badge text-bg-success">Hoàn tất</span>
                        </div>
                        <p className="mb-0 text-muted-custom">
                          Yêu cầu kiểm tra giao dịch nạp thẻ đã được xác nhận thành công.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="glass-panel p-4 p-lg-5 h-100">
                  <h3 className="fw-bold mb-4">Câu hỏi thường gặp</h3>

                  <div className="accordion accordion-flush" id="supportFaq">
                    <div className="accordion-item bg-transparent text-white border-secondary">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqOne"
                        >
                          Tôi quên mật khẩu tài khoản thì làm sao?
                        </button>
                      </h2>
                      <div id="faqOne" className="accordion-collapse collapse" data-bs-parent="#supportFaq">
                        <div className="accordion-body text-muted-custom">
                          Bạn có thể dùng chức năng khôi phục mật khẩu bằng email hoặc gửi yêu cầu CSKH.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item bg-transparent text-white border-secondary">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqTwo"
                        >
                          Nạp game thành công nhưng chưa nhận vật phẩm?
                        </button>
                      </h2>
                      <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#supportFaq">
                        <div className="accordion-body text-muted-custom">
                          Hãy lưu lại mã giao dịch và gửi yêu cầu hỗ trợ để được kiểm tra.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item bg-transparent text-white border-secondary">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-dark text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqThree"
                        >
                          Game bị crash sau khi cập nhật?
                        </button>
                      </h2>
                      <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#supportFaq">
                        <div className="accordion-body text-muted-custom">
                          Hãy thử cập nhật driver, chạy lại launcher hoặc gửi log lỗi qua biểu mẫu hỗ trợ.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-top border-secondary">
                    <p className="mb-1 text-muted-custom">Email hỗ trợ: legal@garena.vn</p>
                    <p className="mb-0 text-muted-custom">Hotline: 024 7305 3939</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <AppToast
        show={showToast}
        title="Gửi yêu cầu thành công"
        message="Yêu cầu hỗ trợ của bạn đã được ghi nhận. Vui lòng chờ phản hồi từ CSKH."
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

export default SupportPage;