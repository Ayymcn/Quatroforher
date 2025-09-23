import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const purple = "#6b4e9b";
  const lightPurple = "#8b6bc3";
  const darkPurple = "#4a3a63";

  // Replace with your actual credentials from the EmailJS dashboard
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  useEffect(() => {
    // Initialize EmailJS with your Public Key
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]); // Dependency array to run only once

  const handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then((result) => {
        console.log(result.text);
        alert(t("contact.form.alert"));
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again later.');
      });
  };

  return (
    <div className="contact-page-container">
      {/* 1. Get in Touch Header */}
      <div className="contact-header-section">
        <h1 className="contact-heading">{t("contact.header.title")}</h1>
        <p className="contact-paragraph">
          {t("contact.header.paragraph")}
        </p>
      </div>

      {/* 2. Send Us a Message Section */}
      <div className="message-section-full-width">
        <div className="message-form-container">
          <h2>{t("contact.form.title")}</h2>
          <p className="message-intro-paragraph">
            {t("contact.form.paragraph")}
          </p>
          <form ref={form} onSubmit={handleFormSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t("contact.form.name")}</label>
              <input type="text" id="name" name="from_name" placeholder={t("contact.form.name_placeholder")} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("contact.form.email")}</label>
              <input type="email" id="email" name="from_email" placeholder={t("contact.form.email_placeholder")} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t("contact.form.message")}</label>
              <textarea id="message" name="message" placeholder={t("contact.form.message_placeholder")} rows="5" required></textarea>
            </div>
            <button type="submit" className="send-btn">{t("contact.form.button")}</button>
          </form>
        </div>
      </div>

      {/* 3. Merged Contact & Follow Our Journey Section */}
      <div className="merged-section-full-width">
        <div className="merged-content-container">
          <h2>{t("contact.social.title")}</h2>
          <p>
            {t("contact.social.paragraph")}
          </p>
          <div className="social-icons-contact">
            <a 
              href="https://www.instagram.com/quatro_for_her/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t("contact.social.instagram_aria_label")}
            >
              <FaInstagram className="social-icon" />
            </a>
            <a 
              href="mailto:quatroforher@gmail.com"
              aria-label={t("contact.social.email_aria_label")}
            >
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* 4. Where to Find Us Section */}
      <div className="map-section-full-width">
        <div className="map-container">
          <h2>{t("contact.map.title")}</h2>
          <p className="map-intro-paragraph">
            {t("contact.map.paragraph")}
          </p>
          <iframe
            title={t("contact.map.title")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599.1994640103688!2d3.1670114949500753!3d36.72147171694209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e51921f061e87%3A0x6331902096773345!2sBab%20Ezzouar%2C%20Algiers%2C%20Algeria!5e0!3m2!1sen!2sus!4v1695420000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Inline styles */}
      <style>{`
        .contact-page-container { padding-top: 0; padding-bottom: 80px; font-family: "Times New Roman", Times, serif; color: #333; display: flex; flex-direction: column; align-items: center; background-color: transparent; }
        .contact-header-section { text-align: center; margin-bottom: 30px; max-width: 700px; padding: 0 20px; margin-top: 50px; }
        .contact-heading { font-size: 3rem; color: ${purple}; font-weight: bold; margin-bottom: 10px; }
        .contact-paragraph { font-size: 1.1rem; color: #555; line-height: 1.6; }
        .message-section-full-width { width: 100%; background-color: #fff1e4; padding: 50px 20px; box-sizing: border-box; text-align: left; }
        .message-form-container { max-width: 600px; margin: 0 auto; }
        .message-section-full-width h2 { color: ${purple}; font-size: 1.8rem; margin-top: 0; margin-bottom: 10px; font-weight: 700; text-align: center; }
        .message-intro-paragraph { font-size: 1rem; line-height: 1.6; margin-bottom: 30px; text-align: center; }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-group { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
        .form-group label { font-weight: 600; color: ${darkPurple}; font-size: 0.95rem; }
        .contact-form input, .contact-form textarea { width: 100%; padding: 15px; border-radius: 8px; border: 1px solid #ddd; font-size: 1rem; font-family: inherit; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
        .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: ${lightPurple}; box-shadow: 0 0 0 3px rgba(139, 107, 195, 0.2); }
        .send-btn { background-color: ${purple}; color: #fff; padding: 15px 25px; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); align-self: center; }
        .send-btn:hover { background-color: ${lightPurple}; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); }
        .merged-section-full-width { width: 100%; padding: 50px 20px; box-sizing: border-box; background-color: transparent; }
        .merged-content-container { max-width: 600px; margin: 0 auto; text-align: center; }
        .merged-content-container h2 { color: ${purple}; font-size: 1.8rem; font-weight: 700; }
        .social-icons-contact { display: flex; justify-content: center; gap: 30px; margin-top: 20px; }
        .social-icon { font-size: 2.5rem; color: ${purple}; transition: all 0.3s ease; }
        .social-icon:hover { color: ${lightPurple}; transform: translateY(-3px) scale(1.1); }
        .map-section-full-width { width: 100%; padding: 0; box-sizing: border-box; background-color: #fdf5e6; }
        .map-container { max-width: 100%; margin: 0 auto; text-align: center; padding: 0 20px; }
        .map-container h2 { color: ${purple}; font-size: 1.8rem; font-weight: 700; margin-bottom: 10px; }
        .map-intro-paragraph { font-size: 1rem; line-height: 1.6; margin-bottom: 30px; }
        .map-container iframe { border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
        @media (max-width: 768px) { .message-form-container, .merged-content-container, .map-container { max-width: 100%; padding: 0 10px; } }
      `}</style>
    </div>
  );
}

export default Contact;