import React from "react";
import styles from "../Header/Header.module.css";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

function Header() {
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
        <button className={styles.toggleBtn}>
          <SunnyIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;
