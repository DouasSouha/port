import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>
        Let’s build something meaningful together!
      </p>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.input}
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className={styles.textarea}
        />

        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
