import { Link, useParams } from "react-router-dom";
import { newsData } from "../data/newsData";
import { getRelatedNews } from "../utils/newsHelpers";
import FadeInSection from "../components/common/FadeInSection";

function NewsDetailPage() {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);
  const relatedNews = getRelatedNews(newsData, slug, 3);

  if (!article) {
    return (
      <section className="section-shell bg-section-dark text-white min-vh-100 d-flex align-items-center">
        <div className="container text-center">
          <h2 className="section-title mb-3">Không tìm thấy bài viết</h2>
          <p className="text-muted-custom mb-4">
            Bài viết bạn đang tìm không tồn tại hoặc đã được thay đổi đường dẫn.
          </p>
          <Link to="/news" className="btn btn-neon rounded-pill px-4">
            Quay lại trang tin tức
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell bg-section-soft text-white min-vh-100">
      <div className="container-xl">
        <FadeInSection>
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-muted-custom">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/news" className="text-muted-custom">Tin tức</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="glass-panel overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-100"
                  style={{ height: "420px", objectFit: "cover" }}
                />

                <div className="p-4 p-lg-5">
                  <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                    <span className="badge rounded-pill text-bg-dark border border-secondary">
                      {article.categoryLabel}
                    </span>
                    <span className="text-muted-custom">{article.date}</span>
                    <span className="text-muted-custom">•</span>
                    <span className="text-muted-custom">{article.readTime}</span>
                  </div>

                  <h1 className="section-title mb-3">{article.title}</h1>

                  <p className="text-neon fw-semibold mb-4">
                    Tác giả: {article.author}
                  </p>

                  <p className="lead text-muted-custom mb-4">
                    {article.description}
                  </p>

                  <div className="d-flex flex-column gap-4">
                    {article.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-0 text-muted-custom"
                        style={{ lineHeight: "1.9", fontSize: "1.08rem" }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-top border-secondary d-flex flex-wrap gap-3">
                    <Link to="/news" className="btn btn-outline-light rounded-pill px-4">
                      <i className="bi bi-arrow-left me-2" />
                      Quay lại tin tức
                    </Link>

                    <Link to="/" className="btn btn-neon rounded-pill px-4">
                      Về trang chủ
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="glass-panel p-4">
                  <h4 className="fw-bold mb-3">Bài viết liên quan</h4>

                  <div className="row g-3">
                    {relatedNews.map((item) => (
                      <div key={item.id} className="col-md-4">
                        <Link
                          to={`/news/${item.slug}`}
                          className="d-block rounded-4 overflow-hidden border border-secondary bg-dark h-100"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-100"
                            style={{ height: "160px", objectFit: "cover" }}
                          />
                          <div className="p-3">
                            <small className="text-neon d-block mb-2">{item.date}</small>
                            <h6 className="fw-bold mb-0">{item.title}</h6>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default NewsDetailPage;