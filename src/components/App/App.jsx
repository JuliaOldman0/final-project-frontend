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
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SuccessModal from "../SuccessModal/SuccessModal.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleSignInClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegistrationSuccess = ({ email, username }) => {
    const user = {
      email,
      name: username,
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    setActiveModal("success");
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedArticles([]);
  };

  function handleLogin({ email, password }) {
    login({ email, password })
      .then((data) => {
        const savedUser = JSON.parse(localStorage.getItem("currentUser"));

        localStorage.setItem("jwt", data.token);
        setCurrentUser(savedUser || data.user);
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
      .then((user) => {
        const savedUser = JSON.parse(localStorage.getItem("currentUser"));

        setCurrentUser(savedUser || user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setCurrentUser(null);
      });
  }, []);

  return (
    <div className="page">
      <Header
        onSignInClick={handleSignInClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignOut={handleSignOut}
      />

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
        onSignUpClick={handleSignUpClick}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onSignInClick={handleSignInClick}
        onRegistrationSuccess={handleRegistrationSuccess}
      />

      <SuccessModal
        isOpen={activeModal === "success"}
        onSignInClick={handleSignInClick}
      />
    </div>
  );
}

export default App;
