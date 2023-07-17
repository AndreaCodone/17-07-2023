import styles from "@/styles/About.module.scss";
import Footer from "../components/Footer";
import ReturnBtn from "../components/ReturnBtn";

function About() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.navbar}`}>
        <ReturnBtn />
        <h1>About</h1>
      </div>
      <div className={`${styles.description}`}>
        <h2>Introduction</h2>
        <p>This is my presentation about myself and my work.</p>
      </div>
      <div className={`${styles.description}`}>
        <h2>About Me</h2>
        <p>
          I am a web developer with a passion for creating beautiful and
          user-friendly websites. I am also a skilled App developer and AI
          student.
        </p>
      </div>
      <div className={`${styles.description}`}>
        <h2>My Work</h2>
        <p>Here are some examples of my work:</p>
        <ul>
          <li className={`${styles.link}`}>
            <a href="#">Website</a>
          </li>
          <li className={`${styles.link}`}>
            <a href="#">App</a>
          </li>
          <li className={`${styles.link}`}>
            <a href="#">AI</a>
          </li>
        </ul>
      </div>
      <div className={`${styles.description}`}>
        <h2>Contact</h2>
        <p>
          If you would like to contact me, please send me an email at{" "}
          <a href="#">email@address.com</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
