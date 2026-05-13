import "./Main.css";
import SearchForm from "../SearchForm/SearchForm.jsx";

function Main() {
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
    </main>
  );
}

export default Main;
