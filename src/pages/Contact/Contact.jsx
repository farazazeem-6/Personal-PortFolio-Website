import React, { useRef, useState, forwardRef } from "react";
import styles from "../../pages/Contact/Contact.module.css";
import { Button } from "@mui/material";
import emailjs from "emailjs-com";
import Notification from "../../components/Toast_Notification/Notification";
import { rgba } from "framer-motion";

function Contact(props, ref) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_hi1re2n", //  EmailJS Service ID
        "template_4l20rkn", // EmailJS Template ID
        form.current,
        "jnwXsPB_umqpi1SeY" // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setResult("✅ Message sent successfully!");
          setColor("#e8f5e8");
          setIsSending(false);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setResult("❌ Failed to send message, please try again.");
          setColor("#ffeaea");
          setIsSending(false);

          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      );
  };
  return (
    <div ref={ref} className={styles.contactOuter}>
      <h1>Contact Me</h1>
      <div className={styles.contactContainer}>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Your Name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Your Email" required />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
          />
          <Button
            disabled={isSending}
            type="submit"
            sx={{ color: "var(--heading-color)", fontSize: "1.2rem" }}
            variant="outlined"
            color="inherit"
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {showToast && (
          <div className={styles.toastNotification}>
            <Notification propText={result} bkColor={color} />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.forwardRef(Contact);
