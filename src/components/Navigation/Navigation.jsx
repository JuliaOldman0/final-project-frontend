import { NavLink } from "react-router";
import "./Navigation.css";
import logoutIcon from "../../assets/icons/logout.png";
import logoutBlackIcon from "../../assets/icons/logout_black.png";

function Navigation({
  onSignInClick,
  isLoggedIn,
  currentUser,
  onSignOut,
  isSavedNewsPage,
}) {
  return (
    <nav className="navigation">
      <NavLink
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
        to="/"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
          to="/saved-news"
        >
          Saved articles
        </NavLink>
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
            src={isSavedNewsPage ? logoutBlackIcon : logoutIcon}
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
