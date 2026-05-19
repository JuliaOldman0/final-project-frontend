import "./Main.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";

function Main({ articles }) {
  return (
    <main className="main">
      <section className="main__search">
        <h2 className="main__title">What&apos;s going on in the world?</h2>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </section>

      <section className="main__news news">
        <h2 className="news__title">Search results</h2>

        <ul className="news__list">
          {articles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </ul>

        <button className="news__button" type="button">
          Show more
        </button>
      </section>
    </main>
  );
}

export default Main;
