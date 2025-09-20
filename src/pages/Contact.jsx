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
      <div className="contact-header-section">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-paragraph">
          We're here to help! Whether you have questions about our products, need support, or just want to say hello, we'd love to hear from you.
        </p>
      </div>

      <div className="contact-content-card">
        {/* Left Side: Contact Info & Socials */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p className="info-intro-paragraph">
            We are always ready to assist you. Feel free to reach out to us through any of the following channels.
          </p>
          <div className="contact-detail">
            <FaEnvelope className="contact-icon" />
            <div className="detail-text">
              <h4>Email Address</h4>
              <p>
                <a href="mailto:quatroforher@gmail.com" className="email-link">
                  quatroforher@gmail.com <FaArrowRight style={{ marginLeft: '5px', fontSize: '0.8rem' }} />
                </a>
              </p>
            </div>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="detail-text">
              <h4>Location</h4>
              <p>Algiers, Algeria</p>
            </div>
          </div>

          <div className="follow-us-section">
            <h4 style={{ color: darkPurple, marginBottom: '5px' }}>Follow Our Journey</h4>
            <p className="follow-us-paragraph">
              Stay connected and get the latest updates on our products, news, and more by following us on social media.
            </p>
          </div>

          <div className="social-icons-footer">
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

        {/* Right Side: Message Form */}
        <div className="message-form-section">
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

      <style>{`
        .contact-page-container {
          padding-top: 0;
          padding-bottom: 80px;
          font-family: 'Poppins', sans-serif;
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
          margin-top: 50px; /* Increased margin to move it down */
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

        .contact-content-card {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          max-width: none;
          background-color: #fff1e4;
          border-radius: 0;
          box-shadow: none;
          overflow: hidden;
        }

        .contact-info-section,
        .message-form-section {
          padding: 50px;
          flex: 1;
          min-width: 300px;
          text-align: left;
        }

        .contact-info-section {
          width: 40%;
          max-width: 400px;
          margin-left: 0;
          color: ${darkPurple};
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .contact-info-section h2 {
          color: ${purple};
          font-size: 1.8rem;
          margin-top: 0;
          margin-bottom: 10px;
          font-weight: 700;
        }
        
        .info-intro-paragraph {
          font-size: 1rem;
          line-height: 1.6;
          margin-top: 0;
          margin-bottom: 0;
        }
        
        .message-form-section {
          background-color: transparent;
          flex: 1.5;
        }
        
        .message-form-section h2 {
          color: ${purple};
          font-size: 1.8rem;
          margin-top: 0;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .message-intro-paragraph {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .contact-icon {
          font-size: 2rem;
          color: ${lightPurple};
        }

        .detail-text h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .detail-text p {
          margin: 0;
          font-size: 0.9rem;
          color: #777;
        }
        
        .email-link {
          color: ${darkPurple};
          text-decoration: underline;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
        }
        .email-link:hover {
          color: ${lightPurple};
        }
        
        .follow-us-section {
          margin-top: 25px;
        }

        .social-icons-footer {
          display: flex;
          gap: 20px;
          margin-top: 10px;
        }

        .social-icon {
          font-size: 2.2rem;
          color: ${purple};
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          color: ${lightPurple};
          transform: translateY(-3px) scale(1.1);
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
        }
        
        .send-btn:hover {
          background-color: ${lightPurple};
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 768px) {
          .contact-content-card {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;