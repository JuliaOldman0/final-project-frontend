import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { mockNewsArticles } from "../../utils/mockNews.js";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSignInClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

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
        <Route path="/" element={<Main articles={mockNewsArticles} />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />

      <LoginModal isOpen={activeModal === "login"} onClose={closeActiveModal} />
    </div>
  );
}

export default App;
