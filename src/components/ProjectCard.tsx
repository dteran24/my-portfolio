import styles from "./ProjectCard.module.css";
import { BsCodeSlash } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import Project from "../models/ProjectModel";
import { useState } from "react";
interface projectProp {
  project: Project;
}
function ProjectCard(props: React.PropsWithChildren<projectProp>) {
  const { project } = props;
  const [hover, setHover] = useState(false);
  return (
    <>
      {project.id === 1 ? (
        <div className={styles.card}>
          <img></img>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles["bttn-container-first"]}>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles["bttn"]}>
                <BsCodeSlash />
                Code
              </button>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles["bttn"]}>
                <CgScreen />
                Live
              </button>
            </a>
          </div>
          <ul className={styles.tech + " " + styles.first}>
            {project.tech.map((word) => {
              return <li>{word}</li>;
            })}
          </ul>
        </div>
      ) : (
        <>
          <div
            className={styles["card-container"]}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className={styles.card}>
              <img></img>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.tech}>
                {project.tech.map((word) => {
                  return <li>{word}</li>;
                })}
              </ul>
            </div>
            <div
              className={
                hover
                  ? styles["bttn-container"] + " " + styles.show
                  : styles["bttn-container"]
              }
            >
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles["bttn"]}>
                  <BsCodeSlash />
                  Code
                </button>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles["bttn"]}>
                  <CgScreen />
                  Live
                </button>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ProjectCard;
