import React from "react";
import styles from "../About/About.module.css";
import aboutImg1 from "../../utils/images/about1.jpg";
import aboutImg2 from "../../utils/images/about2.jpg";
import aboutImg3 from "../../utils/images/about3.jpg";
import {Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 data-scroll data-scroll-direction="horizontal">About Me</h1>
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
            frameworks
          </p>
        </div>
         <div className="resumeBtn">
          <Button variant="contained" endIcon={<SendIcon/>}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
