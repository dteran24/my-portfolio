import styles from "./ProjectCard.module.css";
import { BsCodeSlash } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { BiDumbbell } from "react-icons/bi";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";

import Project from "../models/ProjectModel";
import { useState } from "react";
interface projectProp {
  project: Project;
}
function ProjectCard(props: React.PropsWithChildren<projectProp>) {
  const { project } = props;
  const [hover, setHover] = useState(false);

  const iconMapping: {
    [key: string]: JSX.Element;
    rocket: JSX.Element;
    store: JSX.Element;
    dumbell: JSX.Element;
  } = {
    rocket: <BsRocketTakeoffFill color="black" fontSize="8rem" />,
    store: <MdLocalGroceryStore color="lightblue" fontSize="3rem" />,
    dumbell: <BiDumbbell color="gray" fontSize="3rem" />,
  };
  return (
    <>
      {project.id === 1 ? (
        <div className={styles.card}>
          <div className={styles.icon}>{iconMapping[project.icon]}</div>
          <h3 className={styles["card-header"]}>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles["bttn-container-first"]}>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${styles.bttn} ${styles.first}`}>
                <CgScreen />
                Live
              </button>
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${styles.bttn} ${styles.first}`}>
                <BsCodeSlash />
                Code
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
            onMouseLeave={() => setHover(false)}
          >
            <div className={styles.card} onMouseEnter={() => setHover(true)}>
              <div className={styles["card-header"]}>
                {iconMapping[project.icon]}
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className={styles["bttn-container-mobile"]}>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={`${styles.bttn} ${styles.first}`}>
                    <BsCodeSlash />
                    Code
                  </button>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={`${styles.bttn} ${styles.first}`}>
                    <CgScreen />
                    Live
                  </button>
                </a>
              </div>
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
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles["bttn"]}>
                  <CgScreen />
                  Live
                </button>
              </a>
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
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ProjectCard;
