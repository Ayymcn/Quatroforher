import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: t("faq.questions.q1.question"),
      answer: t("faq.questions.q1.answer")
    },
    {
      question: t("faq.questions.q2.question"),
      answer: t("faq.questions.q2.answer")
    },
    {
      question: t("faq.questions.q3.question"),
      answer: t("faq.questions.q3.answer")
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page-container">
      <div className="faq-header-content">
        <h1>{t("faq.header.title")}</h1>
        <p>{t("faq.header.subtitle")}</p>
      </div>

      <div className="faq-list">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`faq-card ${openIndex === idx ? "expanded" : ""}`}
            onClick={() => toggle(idx)}
          >
            <div className="faq-card-front">
              <div className="faq-question-content">
                <h2>{item.question}</h2>
                <div className="faq-arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b4e9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="faq-card-back">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-cta-card">
        <h2>{t("faq.cta.title")}</h2>
        <p>
          {t("faq.cta.subtitle")}
          <Link to="/contact" className="contact-link-btn">{t("faq.cta.button")}</Link>
        </p>
      </div>

      <style>{`
        .faq-page-container {
          max-width: 800px;
          margin: 100px auto 80px;
          padding: 0 20px;
          font-family: "Times New Roman", Times, serif;
          color: #333;
        }

        .faq-header-content {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .faq-header-content h1 {
          font-size: 3rem;
          color: #6b4e9b;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .faq-header-content p {
          font-size: 1.1rem;
          color: #555;
        }

        .faq-list {
          display: grid;
          gap: 25px;
        }

        .faq-card {
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.4, 1), box-shadow 0.4s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .faq-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .faq-question-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 30px;
          border-bottom: 1px solid #f0eaf8;
        }
        
        .faq-card.expanded .faq-question-content {
          border-bottom: none;
        }

        .faq-question-content h2 {
          font-size: 1.25rem;
          margin: 0;
          color: #6b4e9b;
          font-weight: bold; 
          flex-grow: 1;
          margin-right: 15px;
          font-style: italic;
        }

        .faq-arrow-icon {
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.4, 1);
        }

        .faq-card.expanded .faq-arrow-icon {
          transform: rotate(180deg);
        }

        .faq-card-back {
          padding: 0 30px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.2, 0.8, 0.4, 1), padding 0.6s cubic-bezier(0.2, 0.8, 0.4, 1);
          opacity: 0;
        }

        .faq-card.expanded .faq-card-back {
          max-height: 500px;
          padding: 0 30px 25px;
          opacity: 1;
        }
        
        .faq-card-back p {
          line-height: 1.7;
          margin: 0;
          color: #555;
        }

        .contact-cta-card {
          text-align: center;
          margin-top: 80px;
          padding: 50px 30px;
          background-image: linear-gradient(to right bottom, #8b6bc3, #6b4e9b);
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08); 
          color: #fff;
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.4, 1), box-shadow 0.4s ease;
        }
        
        .contact-cta-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }

        .contact-link-btn {
          display: inline-block;
          padding: 14px 30px;
          background-color: #fff;
          color: #6b4e9b;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .contact-link-btn:hover {
          background-color: #f0eaf8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .faq-page-container { margin: 100px 15px 40px; }
          .faq-header-content h1 { font-size: 2.5rem; }
          .faq-card { border-radius: 12px; }
          .faq-question-content h2 { font-size: 1.1rem; }
          .contact-cta-card h2 { font-size: 1.6rem; }
        }
      `}</style>
    </div>
  );
}

export default FAQ;