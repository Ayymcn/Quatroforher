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
      {/* Background with animated bubbles */}
      <div className="animated-background-wrapper"></div>

      <div className="about-us-content">
        {/* Left side: Animated Logo */}
        <div className="about-us-logo">
          <img src="/logogif.gif" alt="Quatro For Her Animated Logo" />
        </div>

        {/* Right side: Sliding Text */}
        <div className="about-us-text">
          <div className={`about-us-title-slide ${showTitle ? 'visible' : ''}`}>
            <h1 className="about-us-heading">What is Quatro For Her?</h1>
          </div>
          <div className={`about-us-intro-slide ${showIntro ? 'visible' : ''}`}>
            <p className="about-us-paragraph">
              Quatro For Her was born from a simple yet powerful mission: to bring comfort, balance, and confidence back to women navigating the challenges of menopause. Our unique natural solution combines capsules to support hormonal and gut balance with a vaginal cream to restore comfort and intimacy — all without hormones, and with safety in mind for women, including those with a history of hormone-dependent cancers. We believe every woman deserves to feel like herself again, naturally.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-us-container {
          min-height: 100vh;
          padding-top: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Poppins', sans-serif;
          color: #333;
          text-align: center;
          position: relative;
          z-index: 1; /* To keep content above the animated background */
        }
        
        .animated-background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(
            -45deg,
            #d6c2e2,
            #ffc0cb,
            #d6c2e2,
            #ffc0cb
          );
          background-size: 400% 400%;
          animation: fluidBackground 20s ease-in-out infinite;
        }

        @keyframes fluidBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .about-us-content {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1000px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          flex-wrap: wrap; /* Allows wrapping on smaller screens */
          margin-bottom: 50px;
        }

        .about-us-logo {
          flex: 1;
          min-width: 250px;
          display: flex;
          justify-content: center;
          padding: 20px;
          position: relative; /* Added for precise positioning */
          right: 100px; /* Moves it further left */
          margin-top: -70px; /* Moves it further up */
        }

        .about-us-logo img {
          max-width: 100%;
          height: auto;
          animation: pulse 2s infinite; /* Gentle pulsing animation */
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .about-us-text {
          flex: 2;
          min-width: 300px;
          text-align: left;
          padding: 20px;
        }
        
        .about-us-title-slide,
        .about-us-intro-slide {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          margin-bottom: 20px;
        }

        .about-us-title-slide.visible,
        .about-us-intro-slide.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-us-title-slide {
          transition-delay: 0.5s;
        }
        
        .about-us-intro-slide {
          transition-delay: 1s;
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
          .about-us-content {
            flex-direction: column;
          }
          .about-us-logo {
            right: 0; /* Reset positioning for mobile */
            margin-top: 0;
            padding-bottom: 0; /* Reduce space below logo on mobile */
          }

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