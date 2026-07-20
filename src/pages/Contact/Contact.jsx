import React, { useRef, useState, forwardRef } from 'react';
import styles from '../../pages/Contact/Contact.module.css';
import { Button } from '@mui/material';
import emailjs from 'emailjs-com';
import Notification from '../../components/Toast_Notification/Notification';

function Contact(ref) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState('');
  const [color, setColor] = useState('');
  const [showToast, setShowToast] = useState(false);
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_hi1re2n';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_4l20rkn';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'jnwXsPB_umqpi1SeY';

  const sendEmail = async e => {
    e.preventDefault();
    if (!form.current) return;
    setIsSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      e.target.reset();
      setResult('✅ Message sent successfully!');
      setColor('#e8f5e8');
      setShowToast(true);
      setIsSending(false);
      setTimeout(() => setShowToast(false), 3000);
    } catch {
      setResult('❌ Failed to send message, please try again.');
      setColor('#ffeaea');
      setShowToast(true);
      setIsSending(false);
      setTimeout(() => setShowToast(false), 3000);
    }
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
          <textarea name="message" placeholder="Your Message" required rows={4} />
          <Button
            disabled={isSending}
            type="submit"
            sx={{ color: 'var(--heading-color)', fontSize: '1.2rem' }}
            variant="outlined"
            color="inherit"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        {showToast && (
          <div className={styles.toastNotification}>
            <Notification text={result} bgColor={color} />
          </div>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Contact);
