import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import NewsCard from "../components/cards/NewsCard";
import FadeInSection from "../components/common/FadeInSection";
import { newsCategories, newsData } from "../data/newsData";
import "./NewsSection.css";

function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredNews = useMemo(() => {
    if (activeCategory === "all") return newsData;
    return newsData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const visibleNews = filteredNews.slice(0, visibleCount);

  return (
  <section id="news" className="section-shell bg-section-soft text-white">
    <FadeInSection className="container-xl h-100 position-relative z-3">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4 pt-3">
          <SectionTitle
            title="| Tin tức |"
            subtitle="Theo dõi các cập nhật quan trọng, hướng dẫn chiến đấu và hoạt động cộng đồng mới nhất."
          />

          <Link to="/news" className="btn btn-outline-light rounded-pill px-4 ">
            Xem tất cả
          </Link>
        </div>

        <div className="news-category-container d-flex flex-wrap mb-4">
          {newsCategories.map((item) => (
            <button
              key={item.key}
              className={`news-tab-btn ${activeCategory === item.key ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(item.key);
                setVisibleCount(6);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="row g-3">
          {visibleNews.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-xl-4">
              <NewsCard item={item} />
            </div>
          ))}
        </div>

        {visibleCount < filteredNews.length && (
          <div className="text-center mt-4 pt-2 mb-3">
            <button
              className="btn btn-neon rounded-pill px-4 py-2"
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              Tải thêm
            </button>
          </div>
        )}
      </FadeInSection>
    </section>
);
}

export default NewsSection;