import React, { useContext } from "react";
import styles from "../Header/Header.module.css";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { ThemeContext } from "../../App";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>FARAZ .</div>
      <div className={styles.navbar}>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
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
