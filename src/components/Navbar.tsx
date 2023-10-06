import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/daniel-teran-/",
    },
    { icon: <AiFillGithub />, link: "https://github.com/dteran24" },
    { icon: <HiDocumentText />, link: "public/resume.pdf" },
  ];

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

  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        event.target instanceof Node &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Add the event listener when the navbar is open
      document.addEventListener("click", handleClickOutside);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const navbarClass = `${styles["nav-container"]} ${
    isScrolled ? styles.scrolled : ""
  } ${isOpen ? styles.active : ""}`;

  const lineClass = `${styles.line} ${
    isScrolled || isOpen ? styles.scrolled : ""
  }`;

  return (
    <nav className={navbarClass} ref={navbarRef}>
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
        <>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
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
            <li className={styles.navListItem}>
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
            <li className={styles.navListItem}>
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
          <ul className={styles.iconList}>
            {links.map((item) => {
              return (
                <li className={styles.iconListItem}>
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        ""
      )}
    </nav>
  );
};
export default Navbar;
