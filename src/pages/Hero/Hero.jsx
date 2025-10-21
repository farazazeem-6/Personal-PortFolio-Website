import React, { forwardRef } from "react";
import styles from "../Hero/Hero.module.css";
// import { TypingText } from "../../components/lightswind/TypeText";
import heroImg from "../../utils/images/hero.jpg";


function Hero(props,ref) {
  return (
    <div ref={ref} className={styles.heroContainer}>
      <div className={styles.heroTextSection}>
        <h1 className={styles.typingHeading}>FARAZ AZEEM!</h1>
        <h1 className={styles.typingHeading2}>A FRONT END DEVELOPER</h1>
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

export default React.forwardRef(Hero);
