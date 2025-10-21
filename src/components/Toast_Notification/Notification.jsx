import React from "react";

function Notification({ bkColor, propText }) {
  console.log(bkColor);
  console.log(propText);

  return (
    <div
      style={{
        width: "500px",
        height: "100px",
        border: "1px solid #ccc",
        borderRadius: "20px",
        backgroundColor: `${bkColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontFamily: '"Montserrat", sans-serif',
          fontSize: "1.4rem",
          color: "var(--heading-color)",
        }}
      >
        {propText}
      </p>
    </div>
  );
}

export default Notification;
