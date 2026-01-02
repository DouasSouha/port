import React from "react";
import { education } from "../../constants";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      
      {/* Section Title */}
      <div className={styles.header}>
        <h2 className={styles.title}>EDUCATION</h2>
        <div className={styles.line}></div>
        <p className={styles.subtitle}>
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        <div className={styles.verticalLine}></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`${styles.entry} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            {/* Circle */}
            <div className={styles.circle}>
              <img src={edu.img} alt={edu.school} />
            </div>

            {/* Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.logo}>
                  <img src={edu.img} alt={edu.school} />
                </div>

                <div>
                  <span>{edu.date}</span>
                  <h4>{edu.school}</h4>
                  
                <  h3>{edu.degree}</h3>
                </div>
              </div>

              <p className={styles.desc}>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
