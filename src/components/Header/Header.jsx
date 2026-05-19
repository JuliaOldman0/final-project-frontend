import { Link, useLocation } from "react-router";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ onSignInClick, isLoggedIn, currentUser, onSignOut }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNewsPage ? "header_light" : ""}`}>
      <Link className="header__logo" to="/">
        NewsExplorer
      </Link>

      <Navigation
        onSignInClick={onSignInClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignOut={onSignOut}
        isSavedNewsPage={isSavedNewsPage}
      />
    </header>
  );
}

export default Header;
