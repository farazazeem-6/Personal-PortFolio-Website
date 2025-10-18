import React from "react";
import styles from "../Hero/Hero.module.css";
import { TypingText } from "../../components/lightswind/TypeText";
import heroImg from "../../utils/images/hero.jpg";






function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTextSection}>
        <TypingText className={styles.typingHeading}>Faraz</TypingText>
        <TypingText className={styles.typingHeading}>Azeem!</TypingText>
        <TypingText className={styles.typingBody1}>
          ------A Front End
        </TypingText>
        <TypingText className={styles.typingBody2}>Developer</TypingText>
      </div>
      <div className={styles.heroImgSection}>
        <div className={styles.heroImg}>
          <img src={heroImg} alt="" />
        </div>
        <div className={styles.heroText}>
          <p>
            With a strong grip on React, Tailwind, and modern tooling, I turn
            ideas into smooth, scalable experiences. I love debugging, refining
            UI flows, and experimenting with animations that bring interfaces to
            life.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
