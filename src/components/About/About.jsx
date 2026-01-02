import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Left Side */}
        <div className={styles.left}>
          <h1 className={styles.greeting}>Hi, I am</h1>

          <h2 className={styles.name}>Douas Souha</h2>

          <h3 className={styles.role}>
            <span className={styles.roleText}>I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className={styles.cursor}>{cursor}</span>
              )}
            />
          </h3>

          <p className={styles.description}>
            I am a passionate full-stack developer and computer science student with hands-on experience in building modern web applications. I work with front-end and back-end technologies, including Next.js, JavaScript, PHP, and databases, and I have a strong interest in integrating artificial intelligence into real-world solutions, especially in the healthcare field. I enjoy transforming ideas into functional, user-friendly platforms while continuously learning and pushing myself to grow both technically and creatively.
          </p>

          <a
            href="https://drive.google.com/file/d/1ILNv5xng7q8H-_ThCnHftgKsgv2zxIde/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            View My CV
          </a>
        </div>

  
        <div className={styles.right}>
          <Tilt
            className={styles.tilt}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            
          >
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className={styles.image}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
