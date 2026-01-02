import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import styles from "./Skills.module.css";

const Skills = () => (
  <section id="skills" className={styles.skillsSection}>
    {/* Section Title */}
    <div className={styles.header}>
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.line}></div>
      <p className={styles.subtitle}>
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className={styles.categories}>
      {SkillsInfo.map((category) => (
        <div key={category.title} className={styles.categoryCard}>
          <h3 className={styles.categoryTitle}>{category.title}</h3>

          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className={styles.skillsGrid}>
              {category.skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <img src={skill.logo} alt={`${skill.name} logo`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
