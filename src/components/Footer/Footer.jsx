import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
      <nav className="footer__links">
        <a className="footer__link" href="/">
          Home
        </a>
        <a
          className="footer__link"
          href="https://tripleten.com"
          target="_blank"
        >
          TripleTen
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
