import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="/">
        Home
      </a>
      <button className="navigation__button" type="button">
        Sign in
      </button>
    </nav>
  );
}

export default Navigation;
