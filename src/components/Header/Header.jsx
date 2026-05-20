import { useState } from "react";
import { Link, useLocation } from "react-router";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import menuIcon from "../../assets/icons/menu.png";
import logoutIcon from "../../assets/icons/logout.png";
import menuBlackIcon from "../../assets/icons/menu_black.png";

function Header({ onSignInClick, isLoggedIn, currentUser, onSignOut }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const handleMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileSignInClick = () => {
    handleMenuClose();
    onSignInClick();
  };

  return (
    <header
      className={`header ${isSavedNewsPage ? "header_light" : ""} ${
        isMobileMenuOpen ? "header_menu-opened" : ""
      }`}
    >
      <Link className="header__logo" to="/" onClick={handleMenuClose}>
        NewsExplorer
      </Link>

      <Navigation
        onSignInClick={onSignInClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onSignOut={onSignOut}
        isSavedNewsPage={isSavedNewsPage}
      />

      <button
        className="header__menu-button"
        type="button"
        aria-label="Menu"
        onClick={handleMenuClick}
      >
        <img
          className="header__menu-icon"
          src={isSavedNewsPage ? menuBlackIcon : menuIcon}
          alt="Menu"
        />
      </button>

      {isMobileMenuOpen && (
        <>
          <div
            className="header__mobile-overlay"
            onClick={handleMenuClose}
          ></div>

          <div className="header__mobile-menu">
            <div className="header__mobile-top">
              <Link
                className="header__mobile-logo"
                to="/"
                onClick={handleMenuClose}
              >
                NewsExplorer
              </Link>

              <button
                className="header__mobile-close"
                type="button"
                aria-label="Close menu"
                onClick={handleMenuClose}
              >
                ×
              </button>
            </div>

            <Link
              className="header__mobile-link"
              to="/"
              onClick={handleMenuClose}
            >
              Home
            </Link>

            {isLoggedIn && (
              <Link
                className="header__mobile-link"
                to="/saved-news"
                onClick={handleMenuClose}
              >
                Saved articles
              </Link>
            )}

            {isLoggedIn ?
              <button
                className="header__mobile-button"
                type="button"
                onClick={() => {
                  handleMenuClose();
                  onSignOut();
                }}
              >
                {currentUser?.name || "User"}
                <img
                  className="header__mobile-logout-icon"
                  src={logoutIcon}
                  alt="Log out"
                />
              </button>
            : <button
                className="header__mobile-button"
                type="button"
                onClick={handleMobileSignInClick}
              >
                Sign in
              </button>
            }
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
