import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  // دالة التحريك بسلاسة نحو قسم معين
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // روابط التنقل داخل الصفحة
  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  // روابط وسائل التواصل الاجتماعي
  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/sou.uuha.2025/" },
    { icon: <FaTwitter />, link: "" },
    { icon: <FaLinkedin />, link: "" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/ds_souuuha/" },
    
  ];

  return (
    <footer className={styles.footer}>
      <h2 className={styles.name}>Douas Souha</h2>

      {/* روابط التنقل */}
      <nav className={styles.nav}>
        {links.map((item, index) => (
          <button
            key={index}
            onClick={() => handleScroll(item.id)}
            className={styles.navLink}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* أيقونات التواصل الاجتماعي */}
      <div className={styles.social}>
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className={styles.copyright}>
        © 2025 Douas Souha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
