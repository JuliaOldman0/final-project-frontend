import "./NewsCard.css";

function NewsCard() {
  return (
    <article className="news-card">
      <div className="news-card__image"></div>
      <div className="news-card__content">
        <p className="news-card__date">January 1, 2026</p>
        <h3 className="news-card__title">News card title</h3>
        <p className="news-card__text">
          This is where the news article description will go.
        </p>
        <p className="news-card__source">Source</p>
      </div>
    </article>
  );
}

export default NewsCard;
