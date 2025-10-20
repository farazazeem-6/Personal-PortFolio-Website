import React from "react";
import styles from "../../components/Card/Card.module.css";
import { Button } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

function Card({ img, link }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <a target="_blank" href={link}>
        <Button
          sx={{
            width: "100%",
            border: "1px solid #ccc",
            color: "rgb(95,85,85)",
            fontWeight: "600",
            fontSize: "18px",
          }}
          variant="outlined"
          endIcon={<CallMadeIcon />}
        >
          Go to code
        </Button>
      </a>
    </div>
  );
}

export default Card;
