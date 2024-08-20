import styles from "./ProjectCard.module.css";
import { BsCodeSlash } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { BiDumbbell } from "react-icons/bi";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaPaw, FaBookOpen } from "react-icons/fa";

import Project from "../models/ProjectModel";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
interface projectProp {
  project: Project;
}
function ProjectCard(props: React.PropsWithChildren<projectProp>) {
  const { project } = props;
  const [hover, setHover] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 860px)" });

  const iconMapping: {
    [key: string]: JSX.Element;
  } = {
    rocket: (
      <BsRocketTakeoffFill
        color="black"
        fontSize={isMobile ? "8rem" : "3rem"}
      />
    ),
    store: (
      <MdLocalGroceryStore
        color="lightblue"
        fontSize={isMobile ? "8rem" : "3rem"}
      />
    ),
    dumbell: <BiDumbbell color="gray" fontSize={isMobile ? "8rem" : "3rem"} />,
    paw: <FaPaw color="green" fontSize="8rem" />,
    book: <FaBookOpen color="brown" fontSize={isMobile ? "8rem" : "3rem"} />,
  };
  console.log(hover);
  return (
    <>
      {project.id === 1 ? (
        <div className={`${styles.cardXL} ${styles.card}`}>
          <div className={styles.icon}>{iconMapping[project.icon]}</div>
          <h3 className={styles["card-headerXL"]}>{project.title}</h3>
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
            onMouseEnter={() => setHover(true)}
          >
            <div className={styles.card}>
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
                  ? `${styles["bttn-container"]} ${styles.show}`
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
