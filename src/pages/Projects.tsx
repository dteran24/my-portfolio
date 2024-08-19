import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h1>Projects.</h1>
      <div className={styles.cards}>
        {projects.projects.map((project, index) => {
          return (
            <div
              className={`${index === 0 ? styles.oneColumn : ""}`}
              key={project.id}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
      <span>
        *Some applications require a backend service, to reduce costs these
        services will be turned off 5pm CST and turned back on 9am CST. Thank
        you for understanding.*
      </span>
    </section>
  );
}
export default Projects;
