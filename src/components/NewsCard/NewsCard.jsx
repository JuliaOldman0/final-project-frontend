import "./NewsCard.css";

function NewsCard({ article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <li className="news-card">
      <img
        className="news-card__image"
        src={article.urlToImage || "https://placehold.co/400x300?text=No+Image"}
        alt={article.title || "News image"}
      />

      <div className="news-card__content">
        <p className="news-card__date">{formattedDate}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__text">
          {article.description || "No description available."}
        </p>
        <p className="news-card__source">
          {article.source?.name || "Unknown source"}
        </p>
      </div>
    </li>
  );
}

export default NewsCard;
