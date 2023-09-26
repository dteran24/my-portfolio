import styles from "./ProjectCard.module.css";
import { BsCodeSlash } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import Project from "../models/ProjectModel";
interface projectProp {
  project: Project;
}
function ProjectCard(props: React.PropsWithChildren<projectProp>) {
  const { project } = props;
  return (
    <div className={styles.container}>
      <img></img>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles["bttn-container"]}>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          <button className={styles["bttn"]}>
            <BsCodeSlash />
            Code
          </button>
        </a>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <button className={styles["bttn"]}>
            <CgScreen />
            Live
          </button>
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
