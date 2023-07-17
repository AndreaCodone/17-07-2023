import styles from "@/styles/Contacts.module.scss";
import ReturnBtn from "../components/ReturnBtn";
import Footer from "../components/Footer";

function Contacts() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.navbar}`}>
        <ReturnBtn />
        <h1>Contacts</h1>
      </div>
      <div className={`${styles.form}`}>
        <form>
          <input
            className={`${styles.input}`}
            type="text"
            name="name"
            placeholder="Name"
          ></input>
          <input
            className={`${styles.input}`}
            type="text"
            name="surname"
            placeholder="Surname"
          ></input>
          <input
            className={`${styles.input}`}
            type="text"
            name="email"
            placeholder="Email"
          ></input>
          <textarea
            className={`${styles.textarea}`}
            name="message"
            placeholder="Your Message"
          ></textarea>
          <input
            className={`${styles.formBtn}`}
            type="submit"
            value="Send"
          ></input>
        </form>
      </div>
      <div className={`${styles.description}`}>
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong>
          123 Main Street, Anytown, CA 91234
        </p>
        <p>
          <strong>Phone:</strong>
          (555) 555-5555
        </p>
        <p>
          <strong>Email:</strong>
          contact@example.com
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
