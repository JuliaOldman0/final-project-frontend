import "./About.css";
import authorImage from "../../assets/images/newsexplorerapp.JPG";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={authorImage} alt="Project author" />

      <div className="about__content">
        <h2 className="about__title">About the author</h2>

        <p className="about__text">
          My name is Julia Oldman. I am a software developer with experience in
          HTML, CSS, JavaScript, React, PHP, Laravel, MySQL, and responsive web
          design. I enjoy building clean, functional websites and applications
          that solve real problems for users.
        </p>

        <p className="about__text">
          Through TripleTen, I strengthened my frontend development skills,
          learned how to work with APIs, React components, routing, form
          validation, and deployment. I can help clients create modern websites,
          improve existing projects, and build user-friendly digital products.
        </p>
      </div>
    </section>
  );
}

export default About;
