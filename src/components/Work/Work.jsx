import React, { useState } from "react";
import { projects } from "../../constants";
import styles from "./Work.module.css";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="work" className={styles.workSection}>
      {/* Section Title */}
      <div className={styles.header}>
        <h2>PROJECTS</h2>
        <div className={styles.line}></div>
        <p>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className={styles.card}
          >
            <div className={styles.imgContainer}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={handleCloseModal}>
              &times;
            </button>
            <div className={styles.modalContent}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={styles.modalImg}
              />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className={styles.modalTags}>
                {selectedProject.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
