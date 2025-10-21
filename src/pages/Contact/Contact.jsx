import React from "react";
import styles from "../../pages/Contact/Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactOuter}>
      <h1>Contact Me</h1>
      <div className={styles.contactContainer}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" placeholder="Enter Name" />
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="text" placeholder="Enter Email" />
        <label htmlFor="message">Message</label>
        <textarea name="" id="message" rows="4" cols="50">
          Enter Message
        </textarea>
      </div>
    </div>
  );
}

export default Contact;
