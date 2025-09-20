import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "How is Quatro For Her different from hormone replacement therapy (HRT)?",
    answer: "Unlike HRT, Quatro For Her does not contain synthetic hormones. Instead, it combines natural plant extracts, synbiotics, and supportive nutrients that work in harmony with your body. This makes it a safe alternative for women who prefer or need to avoid hormone-based treatments."
  },
  {
    question: "Is it safe if I’ve had breast cancer?",
    answer: "Yes. Quatro For Her is specifically designed for women who cannot or do not wish to take hormones, including those with a history of hormone-dependent cancers. Its formula is free from estrogen and works through natural, non-hormonal pathways to support comfort and balance. (As with any supplement, we recommend consulting your healthcare professional before starting.)"
  },
  {
    question: "How long before I feel results?",
    answer: "Every woman is unique, but many notice improvements such as reduced hot flashes, better sleep, and improved comfort within the first 3–4 weeks of consistent use. Maximum benefits are usually felt after 2–3 months as the body restores balance."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page-container">
      <div className="faq-header-content">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to the most common questions about our product and its benefits.</p>
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
        <h2>Can't find your answer?</h2>
        <p>
          We're here to help! Our team is ready to assist you.
          <Link to="/contact" className="contact-link-btn">Contact Our Support Team</Link>
        </p>
      </div>

      <style>{`
        .faq-page-container {
          max-width: 900px;
          margin: 120px auto 80px;
          padding: 0 20px;
          font-family: 'Poppins', sans-serif;
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
          font-weight: 600;
          flex-grow: 1;
          margin-right: 15px;
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
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          color: #fff;
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.4, 1), box-shadow 0.4s ease;
        }
        
        .contact-cta-card:hover {
          transform: translateY(-5px);
          box-shadow: 15px 40px rgba(0,0,0,0.2);
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
          box-shadow: 6px 20px rgba(0, 0, 0, 0.2);
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