import "./Preloader.css";
import ellipseIcon from "../../assets/icons/Ellipse.png";

function Preloader() {
  return (
    <section className="preloader">
      <img className="preloader__circle" src={ellipseIcon} alt="Loading" />
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}

export default Preloader;
