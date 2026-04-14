import FadeInSection from "../components/common/FadeInSection";
import PageHero from "../components/common/PageHero";

function DownloadPage() {
  return (
    <section className="section-shell bg-section-dark text-white min-vh-100">
      <div className="container-xl">
        <FadeInSection>
          <PageHero
            badge="Trung tâm tải game"
            title="Tải Delta Force"
            subtitle="Chọn nền tảng phù hợp để tải game và tham gia chiến trường ngay hôm nay."
            icon={<i className="bi bi-download" />}
          />

          <div className="row g-4">
            <div className="col-md-6 col-xl-4">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="fs-1 mb-3">
                  <i className="bi bi-apple" />
                </div>
                <h4 className="fw-bold mb-2">iOS</h4>
                <p className="text-muted-custom mb-4">
                  Dành cho iPhone và iPad, tối ưu trải nghiệm điều khiển và hiệu năng.
                </p>
                <a href="#" className="btn btn-outline-light rounded-pill px-4">
                  Download on App Store
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="fs-1 mb-3">
                  <i className="bi bi-android2" />
                </div>
                <h4 className="fw-bold mb-2">Android</h4>
                <p className="text-muted-custom mb-4">
                  Trải nghiệm chiến đấu mượt mà trên thiết bị Android với tối ưu mới nhất.
                </p>
                <a href="#" className="btn btn-outline-light rounded-pill px-4">
                  Get it on Google Play
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="glass-panel p-4 h-100 text-center">
                <div className="fs-1 mb-3">
                  <i className="bi bi-windows" />
                </div>
                <h4 className="fw-bold mb-2">Windows</h4>
                <p className="text-muted-custom mb-4">
                  Bản PC đầy đủ tính năng, hình ảnh chất lượng cao và hỗ trợ điều khiển nâng cao.
                </p>
                <a href="#" className="btn btn-neon rounded-pill px-4">
                  Download for Windows
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 p-lg-5 mt-4">
            <h3 className="fw-bold mb-3">Cấu hình đề xuất</h3>
            <div className="table-responsive">
              <table className="table table-dark table-striped align-middle mb-0">
                <thead>
                  <tr>
                    <th>Nền tảng</th>
                    <th>CPU</th>
                    <th>RAM</th>
                    <th>GPU</th>
                    <th>Dung lượng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Windows</td>
                    <td>Intel i5 / Ryzen 5</td>
                    <td>16GB</td>
                    <td>GTX 1660 trở lên</td>
                    <td>50GB</td>
                  </tr>
                  <tr>
                    <td>Android</td>
                    <td>Snapdragon 865</td>
                    <td>8GB</td>
                    <td>Adreno tương đương</td>
                    <td>12GB</td>
                  </tr>
                  <tr>
                    <td>iOS</td>
                    <td>A14 Bionic</td>
                    <td>6GB</td>
                    <td>Tích hợp</td>
                    <td>12GB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default DownloadPage;