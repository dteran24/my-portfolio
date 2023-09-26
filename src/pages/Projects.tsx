import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h1>Projects</h1>
      {projects.projects.map((project) => {
        return <ProjectCard project={project} key={project.id}/>;
      })}
    </section>
  );
}
export default Projects;
