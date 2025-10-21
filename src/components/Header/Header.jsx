import React, { useContext, useState } from "react";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import CategoryIcon from "@mui/icons-material/Category";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../App";
import styles from '../../components/Header/Header.module.css'

function Header({ scrollRefs }) {
  const { homeRef, aboutRef, projectsRef, contactRef, skillsRef } = scrollRefs;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <CategoryIcon sx={{ fontSize: "3rem" }} fontSize="large" />
        </div>
        
        <div className={styles.navbar}>
          <ul>
            <li onClick={() => handleScroll(homeRef)}>HOME</li>
            <li onClick={() => handleScroll(aboutRef)}>ABOUT</li>
            <li onClick={() => handleScroll(skillsRef)}>SKILLS</li>
            <li onClick={() => handleScroll(projectsRef)}>PROJECTS</li>
            <li onClick={() => handleScroll(contactRef)}>CONTACT</li>
          </ul>
        </div>

        <div className={styles.themeBtn}>
          <button onClick={toggleTheme} className={styles.toggleBtn}>
            {theme === "light" ? (
              <BedtimeIcon color="action" />
            ) : (
              <SunnyIcon sx={{ color: "white" }} />
            )}
          </button>
        </div>

        <div className={styles.hamburger}>
          <button onClick={toggleMenu} className={styles.hamburgerBtn}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li onClick={() => handleScroll(homeRef)}>HOME</li>
          <li onClick={() => handleScroll(aboutRef)}>ABOUT</li>
          <li onClick={() => handleScroll(skillsRef)}>SKILLS</li>
          <li onClick={() => handleScroll(projectsRef)}>PROJECTS</li>
          <li onClick={() => handleScroll(contactRef)}>CONTACT</li>
        </ul>
        
        <div className={styles.mobileThemeBtn}>
          <button onClick={toggleTheme} className={styles.toggleBtn}>
            {theme === "light" ? (
              <BedtimeIcon color="action" />
            ) : (
              <SunnyIcon sx={{ color: "white" }} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;