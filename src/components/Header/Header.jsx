import { Link } from "react-router";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        NewsExplorer
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
