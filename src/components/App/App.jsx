import { Routes, Route } from "react-router";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
