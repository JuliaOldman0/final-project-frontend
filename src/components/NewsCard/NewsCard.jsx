import "./NewsCard.css";
import normalIcon from "../../assets/icons/normal.png";
import hoverIcon from "../../assets/icons/hover.png";
import markedIcon from "../../assets/icons/marked.png";
import trashIcon from "../../assets/icons/trash.png";
import trashBlackIcon from "../../assets/icons/trash_black.png";

function NewsCard({
  article,
  isLoggedIn = false,
  savedArticles,
  onSaveArticle,
  isSavedPage = false,
}) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  const isSaved = savedArticles.some(
    (savedArticle) => savedArticle.url === article.url,
  );

  return (
    <li className="news-card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={
            article.urlToImage || "https://placehold.co/400x300?text=No+Image"
          }
          alt={article.title || "News image"}
        />

        {isSavedPage && (
          <span className="news-card__keyword">{article.keyword}</span>
        )}

        <button
          className={`news-card__save-button ${
            isSaved ? "news-card__save-button_active" : ""
          } ${isSavedPage ? "news-card__save-button_delete" : ""}`}
          type="button"
          aria-label={isSavedPage ? "Remove from saved" : "Save article"}
          onClick={() => onSaveArticle(article)}
        >
          {isSavedPage ?
            <>
              <img
                className="news-card__save-icon news-card__save-icon_normal"
                src={trashIcon}
                alt=""
              />
              <img
                className="news-card__save-icon news-card__save-icon_hover"
                src={trashBlackIcon}
                alt=""
              />
            </>
          : <>
              <img
                className="news-card__save-icon news-card__save-icon_normal"
                src={normalIcon}
                alt=""
              />
              <img
                className="news-card__save-icon news-card__save-icon_hover"
                src={hoverIcon}
                alt=""
              />
              <img
                className="news-card__save-icon news-card__save-icon_marked"
                src={markedIcon}
                alt=""
              />
            </>
          }
        </button>

        {!isLoggedIn && !isSavedPage && (
          <span className="news-card__tooltip">Sign in to save articles</span>
        )}

        {isSavedPage && (
          <span className="news-card__tooltip news-card__tooltip_saved">
            Remove from saved
          </span>
        )}
      </div>

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
