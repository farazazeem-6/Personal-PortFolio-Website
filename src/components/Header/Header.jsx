import React, { useContext } from "react";
import styles from "../Header/Header.module.css";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import CategoryIcon from "@mui/icons-material/Category";
import { ThemeContext } from "../../App";
import { Link } from "@mui/material";

function Header({ scrollRefs }) {
  const { homeRef, aboutRef, projectsRef, contactRef,skillsRef } = scrollRefs;

  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(theme);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <CategoryIcon sx={{ fontSize: "3rem" }} fontSize="large" />
      </div>
      <div className={styles.navbar}>
        <ul>
          {/* <Link onClick={()=>scrollTo(homeref)}>Home</Link> */}
          <li onClick={() => handleScroll(homeRef)}>HOME</li>
          <li onClick={() => handleScroll(aboutRef)}>ABOUT</li>
          <li onClick={() => handleScroll(skillsRef)}>SKILLS</li>
          <li onClick={() => handleScroll(projectsRef)}>PROJECTS</li>
          <li onClick={() => handleScroll(contactRef)}>CONTACT</li>
        </ul>
      </div>
      <div className="themeBtn">
        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {theme === "light" ? (
            <BedtimeIcon color="action" />
          ) : (
            <SunnyIcon sx={{ color: "white" }} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
