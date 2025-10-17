import React from "react";
import styles from "../About/About.module.css";
import aboutImg1 from "../../utils/images/about1.jpg";
import aboutImg2 from "../../utils/images/about2.jpg";
import aboutImg3 from "../../utils/images/about3.jpg";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 >About Me</h1>
      <div className={styles.aboutData}>
        <div className={styles.aboutImg}>
          <img src={aboutImg1} alt="" />
        </div>
        <div className={styles.abouttext}>
          <p>
            <h4>My Introduction</h4>
            Hi, I’m Faraz — a front-end developer who thrives at the
            intersection of clean code and creative design. I specialize in
            building modern, responsive web applications using React, Vite,
            Tailwind CSS, and a growing toolkit of UI libraries and animation
            frameworks.I’m passionate about crafting distraction-free
            interfaces, integrating secure and scalable architecture, and
            constantly leveling up my skills — from mastering bundlers like
            Parcel and Babel to exploring ethical hacking and system-level
            tools.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
