import React from "react";
import styles from "../../components/Card/Card.module.css";
import { Button } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

function Card({ img }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
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
    </div>
  );
}

export default Card;
