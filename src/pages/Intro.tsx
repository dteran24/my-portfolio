import "./Intro.css";

function Intro() {
  return (
    <div className="pageContainer">
      <div className="introContainer">
        <h1 className="introText">Hey There! My name is</h1>
        <br />
        <h1 className="introName">Daniel Teran</h1>
        <br />
        <h1 className="introText">I am a Software Engineer.</h1>
      </div>
      <div className="bttnContainer">
        <button>Linkedin</button>
        <button>Github</button>
      </div>
    </div>
  );
}
export default Intro;
