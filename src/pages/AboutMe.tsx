import styles from "./AboutMe.module.css";
function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <h1>About Me</h1>
      <div className={styles.paragraphContainer}>
        <p>
          I have a passion for building and creating, constantly striving to
          enhance my skills and explore emerging technologies. There's an
          immense satisfaction in adding innovative features to projects or
          solving complex bugs after investing hours of dedicated effort (we've
          all experienced those moments). Throughout my professional journey, I
          have not only collaborated with diverse teams but also taken on
          leadership roles. I excel in working harmoniously with others and
          possess a natural adaptability. I am eager to contribute to an
          established team, while also embracing the opportunity to learn and
          grow alongside my peers.
        </p>
      </div>
    </div>
  );
}
export default AboutMe;
