import { Link } from "react-router";
import "./Navigation.css";
import logoutIcon from "../../assets/icons/logout.png";

function Navigation({ onSignInClick, isLoggedIn, currentUser, onSignOut }) {
  return (
    <nav className="navigation">
      <Link className="navigation__link navigation__link_active" to="/">
        Home
      </Link>

      {isLoggedIn && (
        <Link className="navigation__link" to="/saved-news">
          Saved articles
        </Link>
      )}

      {isLoggedIn ?
        <button
          className="navigation__button navigation__button_user"
          type="button"
          onClick={onSignOut}
        >
          {currentUser?.name || "User"}
          <img
            className="navigation__logout-icon"
            src={logoutIcon}
            alt="Log out"
          />
        </button>
      : <button
          className="navigation__button"
          type="button"
          onClick={onSignInClick}
        >
          Sign in
        </button>
      }
    </nav>
  );
}

export default Navigation;
