import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <AboutMe />
    </>
  );
}

export default App;
