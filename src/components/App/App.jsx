import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { searchNews } from "../../utils/newsApi";
import {
  login,
  checkToken,
  saveArticle,
  deleteArticle,
} from "../../utils/mockApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleSignInClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  function handleLogin({ email, password }) {
    login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  function handleSaveArticle(article) {
    if (!isLoggedIn) {
      return;
    }

    const isAlreadySaved = savedArticles.some(
      (savedArticle) => savedArticle.url === article.url,
    );

    if (isAlreadySaved) {
      deleteArticle(article)
        .then(() => {
          setSavedArticles((currentSavedArticles) =>
            currentSavedArticles.filter(
              (savedArticle) => savedArticle.url !== article.url,
            ),
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      saveArticle(article)
        .then((savedArticle) => {
          setSavedArticles((currentSavedArticles) => [
            ...currentSavedArticles,
            savedArticle,
          ]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return;
    }

    checkToken(token)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
      });
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
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
              onSaveArticle={handleSaveArticle}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeActiveModal}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
