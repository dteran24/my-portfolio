import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.cards}>
        {projects.projects.map((project, index) => {
          return (
            <div
              className={`${index === 1 ? styles.oneColumn : ""}`}
              key={project.id}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
