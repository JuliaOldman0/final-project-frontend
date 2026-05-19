import { Link } from "react-router";
import "./Footer.css";
import githubIcon from "../../assets/icons/github.png";
import linkedInIcon from "../../assets/icons/LinkedIn.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {currentYear} Supersite, Powered by News API
      </p>

      <nav className="footer__links">
        <Link
          className="footer__link"
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Home
        </Link>

        <a
          className="footer__link"
          href="https://tripleten.com"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>

        <a
          className="footer__icon-link"
          href="https://github.com/JuliaOldman0"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img className="footer__icon" src={githubIcon} alt="GitHub" />
        </a>

        <a
          className="footer__icon-link"
          href="https://www.linkedin.com/in/julia-oldman-1281831a7/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img className="footer__icon" src={linkedInIcon} alt="LinkedIn" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
