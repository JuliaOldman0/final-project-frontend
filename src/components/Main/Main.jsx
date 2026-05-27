import "./Main.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import About from "../About/About.jsx";
import notFoundIcon from "../../assets/icons/not-found.svg";

function Main({
  articles,
  isLoading,
  searchError,
  onSearchSubmit,
  hasSearched,
  visibleCards,
  setVisibleCards,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
}) {
  const visibleArticles = articles.slice(0, visibleCards);

  return (
    <main className="main">
      <section className="main__search">
        <h2 className="main__title">What&apos;s going on in the world?</h2>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm onSearchSubmit={onSearchSubmit} searchError={searchError} />
      </section>

      {hasSearched && (
        <section className="main__news news">
          <h2 className="news__title">Search results</h2>

          {isLoading && <Preloader />}

          {!isLoading &&
            searchError ===
              "Sorry, something went wrong during the request. Please try again later." && (
              <p className="news__error">{searchError}</p>
            )}

          {hasSearched &&
            !isLoading &&
            !searchError &&
            articles.length === 0 && (
              <div className="news__not-found">
                <img
                  className="news__not-found-icon"
                  src={notFoundIcon}
                  alt="Nothing found"
                />
                <h3 className="news__not-found-title">Nothing found</h3>
                <p className="news__not-found-text">
                  Sorry, but nothing matched your search terms.
                </p>
              </div>
            )}

          {!isLoading && !searchError && articles.length > 0 && (
            <ul className="news__list">
              {visibleArticles.map((article) => (
                <NewsCard
                  key={article.url}
                  article={article}
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onSaveArticle={onSaveArticle}
                />
              ))}
            </ul>
          )}

          {!isLoading && !searchError && articles.length > visibleCards && (
            <button
              className="news__button"
              type="button"
              onClick={() => setVisibleCards(visibleCards + 3)}
            >
              Show more
            </button>
          )}
        </section>
      )}
      <About />
    </main>
  );
}

export default Main;
