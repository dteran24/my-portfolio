import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `${styles["nav-container"]} ${
    isScrolled ? styles.scrolled : ""
  } ${isOpen ? styles.active : ""}`;

  const lineClass = `${styles.line} ${
    isScrolled || isOpen ? styles.scrolled : ""
  }`;

  return (
    <nav className={navbarClass}>
      <div
        className={
          isOpen
            ? styles.hamburger + " " + styles["is-active"]
            : styles.hamburger
        }
        id="hamburger-9"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={lineClass}></span>
        <span className={lineClass}></span>
        <span className={lineClass}></span>
      </div>
      {isOpen ? (
        <ul>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-400}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-490}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};
export default Navbar;
