import { Link } from "react-router";
import "./Navigation.css";

function Navigation({ onSignInClick }) {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Home
      </Link>

      <Link className="navigation__link" to="/saved-news">
        Saved articles
      </Link>

      <button
        className="navigation__button"
        type="button"
        onClick={onSignInClick}
      >
        Sign in
      </button>
    </nav>
  );
}

export default Navigation;
