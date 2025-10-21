import React from "react";
import styles from "../../pages/Footer/Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerIcons}>
        <a target="_blank" href="https://github.com/farazazeem-6">
          <GitHubIcon
            sx={{ fontSize: "3rem", color: "var(--heading-color)" }}
            color="inherit"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/faraz-azeem-45207727b/"
        >
          <LinkedInIcon
            sx={{ fontSize: "3rem", color: "var(--heading-color)" }}
            color="inherit"
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/faraz_dhillon6/">
          <InstagramIcon
            sx={{ fontSize: "3rem", color: "var(--heading-color)" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
