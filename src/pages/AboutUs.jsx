import React, { useEffect, useState } from 'react';

function AboutUs() {
  const [showTitle, setShowTitle] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Show the title after a brief delay
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 500);

    // Show the intro paragraph after another delay
    const introTimer = setTimeout(() => {
      setShowIntro(true);
    }, 1000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(introTimer);
    };
  }, []);

  const purple = "#6b4e9b";

  return (
    <div className="about-us-container">
      <div className={`about-us-title-slide ${showTitle ? 'visible' : ''}`}>
        <h1 className="about-us-heading">What is Quatro For Her?</h1>
      </div>

      <div className={`about-us-intro-slide ${showIntro ? 'visible' : ''}`}>
        <p className="about-us-paragraph">
          Quatro For Her was born from a simple yet powerful mission: to bring comfort, balance, and confidence back to women navigating the challenges of menopause. Our unique natural solution combines capsules to support hormonal and gut balance with a vaginal cream to restore comfort and intimacy — all without hormones, and with safety in mind for women, including those with a history of hormone-dependent cancers. We believe every woman deserves to feel like herself again, naturally.
        </p>
      </div>

      <style>{`
        .about-us-container {
          min-height: 100vh;
          padding-top: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fdf5e6;
          font-family: 'Poppins', sans-serif;
          color: #333;
          text-align: center;
        }
        
        .about-us-title-slide,
        .about-us-intro-slide {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          padding: 0 20px;
          max-width: 800px;
          margin-bottom: 20px;
        }

        .about-us-title-slide.visible,
        .about-us-intro-slide.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-us-title-slide {
          transition-delay: 0.5s; /* Delay for the title slide */
        }
        
        .about-us-intro-slide {
          transition-delay: 1s; /* Delay for the intro paragraph */
        }

        .about-us-heading {
          font-size: 3rem;
          color: ${purple};
          font-weight: bold;
          margin-bottom: 10px;
        }

        .about-us-paragraph {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-us-heading {
            font-size: 2.2rem;
          }
          .about-us-paragraph {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUs;