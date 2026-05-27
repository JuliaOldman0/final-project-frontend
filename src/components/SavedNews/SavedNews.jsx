import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard.jsx";

function SavedNews({ savedArticles, onSaveArticle, isLoggedIn, currentUser }) {
  const keywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ].filter(Boolean);

  const visibleKeywords = keywords.slice(0, 2).join(", ");
  const remainingKeywords = keywords.length - 2;

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <p className="saved-news__label">Saved articles</p>

        <h1 className="saved-news__title">
          {currentUser?.name || "User"}, you have {savedArticles.length} saved{" "}
          article{savedArticles.length === 1 ? "" : "s"}
        </h1>

        {savedArticles.length > 0 && keywords.length > 0 && (
          <p className="saved-news__keywords">
            By keywords:{" "}
            <span className="saved-news__keyword">
              {visibleKeywords}
              {remainingKeywords > 0 && `, and ${remainingKeywords} other`}
            </span>
          </p>
        )}
      </section>

      {savedArticles.length > 0 && (
        <section className="saved-news__cards">
          <ul className="saved-news__list">
            {savedArticles.map((article) => (
              <NewsCard
                key={article.url}
                article={article}
                isLoggedIn={isLoggedIn}
                savedArticles={savedArticles}
                onSaveArticle={onSaveArticle}
                isSavedPage={true}
              />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default SavedNews;
