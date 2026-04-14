import { useMemo, useState } from "react";
import NewsCard from "../components/cards/NewsCard";
import FadeInSection from "../components/common/FadeInSection";
import PageHero from "../components/common/PageHero";
import { newsCategories, newsData } from "../data/newsData";

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [keyword, setKeyword] = useState("");

  const filteredNews = useMemo(() => {
    let result = newsData;

    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (keyword.trim()) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    return result;
  }, [activeCategory, keyword]);

  return (
    <section className="section-shell bg-section-dark text-white min-vh-100">
      <div className="container-xl">
        <FadeInSection>
          <PageHero
            badge="Trung tâm tin tức"
            title="Tất cả tin tức Delta Force"
            subtitle="Cập nhật mới nhất về sự kiện, hướng dẫn, chiến thuật, cộng đồng và thay đổi gameplay."
            icon={<i className="bi bi-newspaper" />}
          />

          <div className="glass-panel p-5 mb-2">
            <div className="row g-2">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Tìm kiếm bài viết..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div className="col-lg-6">
                <div className="d-flex flex-wrap gap-2">
                  {newsCategories.map((item) => (
                    <button
                      key={item.key}
                      className={`btn  px-4 py-2 ${
                        activeCategory === item.key ? "btn-neon" : "btn-outline-light"
                      }`}
                      onClick={() => setActiveCategory(item.key)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {filteredNews.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-xl-4">
                <NewsCard item={item} />
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="glass-panel p-5 text-center mt-4">
              <h4 className="fw-bold mb-2">Không tìm thấy bài viết</h4>
              <p className="text-muted-custom mb-0">
                Hãy thử từ khóa khác hoặc chọn danh mục khác.
              </p>
            </div>
          )}
        </FadeInSection>
      </div>
    </section>
  );
}

export default NewsPage;