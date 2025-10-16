import React from "react";
import styles from "../Hero/Hero.module.css";
import { TypingText } from "../../components/lightswind/TypeText";
import heroImg from "../../utils/images/hero.jpg";
function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTextSection}>
        <TypingText className={styles.typingHeading}>
          Hello,I'm Faraz Azeem!
        </TypingText>
      </div>
      <div className={styles.heroImgSection}>
        <div className={styles.heroImg}>
          <img src={heroImg} alt="" />
        </div>
        <div className={styles.heroText}>
          <p>
            I'm a front-end developer who blends clean code with thoughtful
            design to build fast, responsive web interfaces. With a strong grip
            on React, Tailwind, and modern tooling, I turn ideas into smooth,
            scalable experiences. I love debugging, refining UI flows, and
            experimenting with animations that bring interfaces to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
