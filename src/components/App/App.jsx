import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { searchNews } from "../../utils/newsApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  const handleSignInClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  function handleSearchSubmit(keyword) {
    if (!keyword.trim()) {
      setSearchError("Please enter a keyword");
      return;
    }

    setSearchError("");
    setArticles([]);
    setVisibleCards(3);
    setHasSearched(true);
    setIsLoading(true);

    searchNews(keyword)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.error(err);
        setSearchError(
          "Sorry, something went wrong during the request. Please try again later.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  return (
    <div className="page">
      <Header onSignInClick={handleSignInClick} />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              articles={articles}
              isLoading={isLoading}
              searchError={searchError}
              onSearchSubmit={handleSearchSubmit}
              hasSearched={hasSearched}
              visibleCards={visibleCards}
              setVisibleCards={setVisibleCards}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />

      <LoginModal isOpen={activeModal === "login"} onClose={closeActiveModal} />
    </div>
  );
}

export default App;
