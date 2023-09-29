import styles from "./Intro.module.css";

function Intro() {
  return (
    <section id="intro" className={styles.pageContainer}>
      <div className={styles.introContainer}>
        <h1 className={styles.introText}>Hey There! My name is</h1>
        <br />
        <h1 className={styles.introName}>Daniel Teran.</h1>
        <br />
        <h1 className={styles.introSub}>I am a Software Engineer.</h1>
        <p className={styles.introParagraph}>Focusing on gaining new experiences and always trying to improve.</p>
      </div>
      {/* <div className={styles.bttnContainer}>
        <a href="https://www.linkedin.com/in/daniel-teran-/" target="_blank"><button className={styles.primaryBttn}>Linkedin</button></a>
        <a href="https://github.com/dteran24" target="_blank"><button className={styles.secondaryBttn}>Github</button></a>
      </div> */}
    </section>
  );
}
export default Intro;
