import { useState } from "react";
import AppToast from "../components/common/AppToast";
import FadeInSection from "../components/common/FadeInSection";
import PageHero from "../components/common/PageHero";

function GiftCodePage() {
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
      <section className="section-shell bg-section-soft text-white min-vh-100">
        <div className="container-xl">
          <FadeInSection>
            <PageHero
              badge="Trung tâm Gift Code"
              title="Nhập Gift Code Delta Force"
              subtitle="Nhập mã quà để nhận vật phẩm, skin, tiền tệ ingame hoặc phần thưởng từ sự kiện."
              icon={<i className="bi bi-gift-fill" />}
            />

            <div className="row g-4">
              <div className="col-lg-7">
                <div className="glass-panel p-4 p-lg-5 h-100">
                  <h3 className="fw-bold mb-4">Nhập mã quà</h3>

                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label className="form-label">UID / Tài khoản</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Nhập UID hoặc tài khoản"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Máy chủ</label>
                      <select className="form-select bg-dark text-white border-secondary">
                        <option>Việt Nam</option>
                        <option>SEA</option>
                        <option>Global</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Gift Code</label>
                      <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Ví dụ: DELTA-2026-VN"
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-neon rounded-pill px-4">
                        Xác nhận đổi mã
                      </button>
                    </div>
                  </form>

                  <div className="mt-4 pt-4 border-top border-secondary">
                    <h5 className="fw-bold mb-3">Quy định sử dụng</h5>
                    <ul className="text-muted-custom ps-3 mb-0">
                      <li>Mỗi mã chỉ sử dụng được trong thời gian quy định.</li>
                      <li>Một số mã chỉ dùng 1 lần cho mỗi tài khoản.</li>
                      <li>Phần thưởng sẽ được gửi vào hộp thư ingame.</li>
                      <li>Mã có thể không áp dụng cho một số khu vực hoặc máy chủ nhất định.</li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-top border-secondary">
                    <h5 className="fw-bold mb-3">Lịch sử đổi mã gần đây</h5>

                    <div className="table-responsive">
                      <table className="table table-dark table-striped align-middle mb-0">
                        <thead>
                          <tr>
                            <th>Mã</th>
                            <th>Ngày đổi</th>
                            <th>Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>DELTA-OPEN-2026</td>
                            <td>26/03/2026</td>
                            <td><span className="badge text-bg-success">Thành công</span></td>
                          </tr>
                          <tr>
                            <td>SPRING-BATTLE-PASS</td>
                            <td>20/03/2026</td>
                            <td><span className="badge text-bg-warning">Đã dùng</span></td>
                          </tr>
                          <tr>
                            <td>DF-COMMUNITY-2026</td>
                            <td>15/03/2026</td>
                            <td><span className="badge text-bg-info">Đã nhận quà</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="glass-panel p-4 p-lg-5 h-100">
                  <h3 className="fw-bold mb-4">Mã gần đây</h3>

                  <div className="d-flex flex-column gap-3">
                    <div className="rounded-4 p-3 border border-secondary bg-dark">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>DELTA-OPEN-2026</strong>
                        <span className="badge text-bg-success">Còn hiệu lực</span>
                      </div>
                      <p className="mb-0 text-muted-custom">
                        Quà tân thủ: skin hiếm, EXP boost và vật phẩm hỗ trợ.
                      </p>
                    </div>

                    <div className="rounded-4 p-3 border border-secondary bg-dark">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>SPRING-BATTLE-PASS</strong>
                        <span className="badge text-bg-warning">Giới hạn</span>
                      </div>
                      <p className="mb-0 text-muted-custom">
                        Nhận phần thưởng sự kiện mùa xuân và vật phẩm giới hạn.
                      </p>
                    </div>

                    <div className="rounded-4 p-3 border border-secondary bg-dark">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>DF-COMMUNITY-2026</strong>
                        <span className="badge text-bg-info">Sự kiện</span>
                      </div>
                      <p className="mb-0 text-muted-custom">
                        Quà tặng dành cho người chơi tham gia hoạt động cộng đồng.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-top border-secondary">
                    <h5 className="fw-bold mb-3">Lưu ý</h5>
                    <p className="text-muted-custom mb-0">
                      Nếu bạn nhập mã hợp lệ nhưng chưa nhận được quà, vui lòng liên hệ
                      CSKH để được hỗ trợ kiểm tra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <AppToast
        show={showToast}
        title="Đổi mã thành công"
        message="Gift Code đã được ghi nhận. Phần thưởng sẽ được gửi vào hộp thư ingame."
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

export default GiftCodePage;