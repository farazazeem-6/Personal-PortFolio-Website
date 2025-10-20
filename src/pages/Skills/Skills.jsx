import React from "react";
import styles from "../../pages/Skills/Skills.module.css";

function Skills() {
  return (
    <div className={styles.skillOuter}>
      <h1>Personal Skills</h1>
      <div className={styles.skillsContainer}>
        <div className={styles.skillTextSection}>
          <h5>Skills</h5>
          <div className="skillsIcons">
            <div className="skill">
              <i class="fa-brands fa-html5"></i>
              <p>
                Proficient in semantic HTML5, writing clean, accessible and
                SEO-friendly markup. I structure responsive page layouts and
                integrate forms, media and ARIA attributes for better
                accessibility.
              </p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-css"></i>
              <p>
                Skilled in modern CSS3, creating clean and responsive UI
                designs. I use Flexbox, Grid, animations, and transitions for
                smooth user experiences. Capable of building fully responsive
                layouts across all screen s
              </p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-bootstrap"></i>
              <p>
                Experienced in Bootstrap for creating clean, responsive, and
                mobile-first designs. I use its grid system, prebuilt
                components, and utility classes to speed up development. Capable
                of customizing themes and styling for a unique look.
              </p>
            </div>
            <div className="skill">
              <i class="ri-javascript-fill"></i>
              <p>
                Proficient in JavaScript to make websites interactive and
                dynamic. I handle DOM manipulation, events, and API integration
                for real-time data. Capable of writing clean, reusable code to
                enhance user experience.
              </p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-react"></i>
              <p>
                Proficient in React for creating fast and scalable web
                applications. I use components, hooks, and state management to
                build interactive UIs. Capable of integrating APIs and managing
                data flow efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.skillImgSection}>
          <img
            src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
