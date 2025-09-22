import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaArrowRight } from 'react-icons/fa';

function Contact() {
  const purple = "#6b4e9b";
  const lightPurple = "#8b6bc3";
  const darkPurple = "#4a3a63";

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="contact-page-container">
      {/* 1. Get in Touch Header */}
      <div className="contact-header-section">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-paragraph">
          We're here to help! Whether you have questions about our products, need support, or just want to say hello, we'd love to hear from you.
        </p>
      </div>

      {/* 2. Send Us a Message Section */}
      <div className="message-section-full-width">
        <div className="message-form-container">
          <h2>Send Us a Message</h2>
          <p className="message-intro-paragraph">
            Leave us a message, and we'll get back to you as soon as possible!
          </p>
          <form onSubmit={handleFormSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* 3. Merged Contact & Follow Our Journey Section */}
      <div className="merged-section-full-width">
        <div className="merged-content-container">
          <h2>Contact & Follow Our Journey</h2>
          <p>
            We are always ready to assist you. Stay connected and get the latest updates on our products, news, and more by following us on social media.
          </p>
          <div className="social-icons-contact">
            <a 
              href="https://www.instagram.com/quatro_for_her/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a 
              href="mailto:quatroforher@gmail.com"
              aria-label="Send us an email"
            >
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* 4. Where to Find Us Section */}
      <div className="map-section-full-width">
        <div className="map-container">
          <h2>Where to Find Us</h2>
          <p className="map-intro-paragraph">
            Find our location on the map below. We are located in the heart of Bab Ezzouar.
          </p>
          <iframe
            title="Bab Ezzouar Location"
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

      <style>{`
        .contact-page-container {
          padding-top: 0;
          padding-bottom: 80px;
          font-family: "Times New Roman", Times, serif;
          color: #333;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: transparent;
        }

        .contact-header-section {
          text-align: center;
          margin-bottom: 30px;
          max-width: 700px;
          padding: 0 20px;
          margin-top: 50px;
        }

        .contact-heading {
          font-size: 3rem;
          color: ${purple};
          font-weight: bold;
          margin-bottom: 10px;
        }

        .contact-paragraph {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
        }

        .message-section-full-width {
          width: 100%;
          background-color: #fff1e4;
          padding: 50px 20px;
          box-sizing: border-box;
          text-align: left;
        }
        
        .message-form-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .message-section-full-width h2 {
          color: ${purple};
          font-size: 1.8rem;
          margin-top: 0;
          margin-bottom: 10px;
          font-weight: 700;
          text-align: center;
        }

        .message-intro-paragraph {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          text-align: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
        
        .form-group label {
          font-weight: 600;
          color: ${darkPurple};
          font-size: 0.95rem;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: ${lightPurple};
          box-shadow: 0 0 0 3px rgba(139, 107, 195, 0.2);
        }

        .send-btn {
          background-color: ${purple};
          color: #fff;
          padding: 15px 25px;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          align-self: center;
        }
        
        .send-btn:hover {
          background-color: ${lightPurple};
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .merged-section-full-width {
          width: 100%;
          padding: 50px 20px;
          box-sizing: border-box;
          background-color: transparent;
        }

        .merged-content-container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .merged-content-container h2 {
          color: ${purple};
          font-size: 1.8rem;
          font-weight: 700;
        }

        .social-icons-contact {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 20px;
        }

        .social-icon {
          font-size: 2.5rem;
          color: ${purple};
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          color: ${lightPurple};
          transform: translateY(-3px) scale(1.1);
        }

        .map-section-full-width {
          width: 100%;
          padding: 0; /* Removed padding for full width */
          box-sizing: border-box;
          background-color: #fdf5e6;
        }

        .map-container {
          max-width: 100%; /* Set to full width */
          margin: 0 auto;
          text-align: center;
          padding: 0 20px; /* Added padding to contain text content */
        }

        .map-container h2 {
          color: ${purple};
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .map-intro-paragraph {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .map-container iframe {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .message-form-container, .merged-content-container, .map-container {
            max-width: 100%;
            padding: 0 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;