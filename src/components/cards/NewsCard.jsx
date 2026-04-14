import { Link } from "react-router-dom";

function NewsCard({ item }) {
  return (
    <div className="card h-100 bg-black text-white border-secondary news-card-custom">
      <div className="position-relative">
        <img
          src={item.image}
          alt={item.title}
          className="card-img-top"
          style={{ height: "240px", objectFit: "cover" }}
        />
        <span className="position-absolute top-0 start-0 m-3 badge rounded-pill text-bg-dark border border-secondary">
          {item.categoryLabel || item.category}
        </span>
      </div>

      <div className="card-body d-flex flex-column">
        <small className="text-neon mb-2">{item.date}</small>
        <h5 className="card-title fw-bold mb-2 news-card-title">
          {item.title}
        </h5>
        <p className="card-text text-secondary flex-grow-1">
          {item.description}
        </p>

        <Link to={`/news/${item.slug}`} className="text-neon fw-semibold">
          Xem thêm <i className="bi bi-arrow-right-short" />
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;