function Notification({ bgColor = "#fff", text = "" }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "100px",
        border: "1px solid #ccc",
        borderRadius: "20px",
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          fontFamily: '"Montserrat", sans-serif',
          fontSize: "1.1rem",
          color: "var(--heading-color)",
          margin: 0,
          textAlign: "center",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Notification;
