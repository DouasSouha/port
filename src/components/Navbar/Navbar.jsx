import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // حذف ": string" باش يكون الكود صحيح في JSX
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.accent}>&lt;</span>
          <span>Douas </span>
          <span className={styles.accent}>/</span>
          <span>Souha</span>
          <span className={styles.accent}>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`${styles.menuItem} ${
                activeSection === item.id ? styles.active : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className={styles.social}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className={styles.mobileIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`${styles.menuItem} ${
                  activeSection === item.id ? styles.active : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className={styles.mobileSocial}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
