import { Link } from "react-router";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        NewsExplorer
      </Link>
      <Navigation onSignInClick={onSignInClick} />
    </header>
  );
}

export default Header;
