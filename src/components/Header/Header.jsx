import { Link } from "react-router";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ onSignInClick, isLoggedIn, currentUser, onSignOut }) {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        NewsExplorer
      </Link>

      <Navigation
        onSignInClick={onSignInClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignOut={onSignOut}
      />
    </header>
  );
}

export default Header;
