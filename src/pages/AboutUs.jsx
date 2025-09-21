import React, { useEffect, useState, useRef } from 'react';

function AboutUs() {
  const [showTitle, setShowTitle] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showProductsTitle, setShowProductsTitle] = useState(false);
  const [showProduct1Image, setShowProduct1Image] = useState(false);
  const [showProduct1Text, setShowProduct1Text] = useState(false);
  const [showProduct2Image, setShowProduct2Image] = useState(false);
  const [showProduct2Text, setShowProduct2Text] = useState(false);

  const productsSectionRef = useRef(null);

  useEffect(() => {
    // Initial animations for the header section
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 500);

    const introTimer = setTimeout(() => {
      setShowIntro(true);
    }, 1000);

    // Set up the Intersection Observer for the products section
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is intersecting, start the sequential animations
        if (entry.isIntersecting && !showProductsTitle) { // The !showProductsTitle check prevents re-triggering
          const productsTitleTimer = setTimeout(() => {
            setShowProductsTitle(true);
          }, 0); // Start immediately once the section is in view

          const product1ImageTimer = setTimeout(() => {
            setShowProduct1Image(true);
          }, 500); // 0.5s delay after the title

          const product1TextTimer = setTimeout(() => {
            setShowProduct1Text(true);
          }, 1000); // 1s delay after the title

          const product2ImageTimer = setTimeout(() => {
            setShowProduct2Image(true);
          }, 1500); // 1.5s delay after the title

          const product2TextTimer = setTimeout(() => {
            setShowProduct2Text(true);
          }, 2000); // 2s delay after the title
          
          // Clean up the timers created by the observer
          return () => {
            clearTimeout(productsTitleTimer);
            clearTimeout(product1ImageTimer);
            clearTimeout(product1TextTimer);
            clearTimeout(product2ImageTimer);
            clearTimeout(product2TextTimer);
          };
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    // Start observing the products section when the component mounts
    if (productsSectionRef.current) {
      observer.observe(productsSectionRef.current);
    }

    // Main component cleanup
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(introTimer);
      observer.disconnect();
    };
  }, [showProductsTitle]); // Rerun effect if showProductsTitle changes (to prevent re-observing)

  const purple = "#6b4e9b";

  return (
    <div className="about-us-container">
      <div className="animated-background-wrapper"></div>

      <div className="about-us-content">
        <div className="about-us-logo">
          <img src="/logogif.gif" alt="Quatro For Her Animated Logo" />
        </div>
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
      
      {/* Attach the ref to this container to observe its position */}
      <div className="products-section-container" ref={productsSectionRef}>
        <div className={`products-title-slide ${showProductsTitle ? 'visible' : ''}`}>
            <h2 className="products-heading">Our Products:</h2>
            <p className="products-intro-paragraph">
                Our revolutionary solution is a two-part system designed to address menopause symptoms from both the inside and out.
            </p>
        </div>

        <div className="products-row">
            <div className={`product-item ${showProduct1Image ? 'visible' : ''}`}>
                <div className="product-image-container">
                    <img src="/product1.png" alt="Quatro Capsules" className="product-image"/>
                </div>
            </div>
            <div className={`product-item ${showProduct1Text ? 'visible' : ''}`}>
                <div className="product-text-container">
                    <ul>
                        <li>• Support natural hormonal balance without synthetic hormones</li>
                        <li>• Enriched with plant extracts to reduce hot flashes & night sweats</li>
                        <li>• Contains prebiotics to restore intestinal microbiome</li>
                        <li>• Promotes better sleep, mood, and energy</li>
                    </ul>
                </div>
            </div>
            <div className={`product-item product-item-2 ${showProduct2Image ? 'visible' : ''}`}>
                <div className="product-image-container">
                    <img src="/product2.png" alt="Quatro Vaginal Cream" className="product-image"/>
                </div>
            </div>
            <div className={`product-item ${showProduct2Text ? 'visible' : ''}`}>
                <div className="product-text-container">
                    <ul>
                        <li>• Provides fast relief from dryness, itching, and discomfort</li>
                        <li>• Restores and maintains the natural vaginal flora</li>
                        <li>• Improves hydration, elasticity, and comfort</li>
                        <li>• Designed for women who want a gentle, hormone-free solution</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <style>{`
        .about-us-container {
          min-height: 100vh;
          padding-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Poppins', sans-serif;
          color: #333;
          position: relative;
          z-index: 1;
          overflow-x: hidden; 
        }
        
        .animated-background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
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
          max-width: 1400px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          flex-wrap: wrap;
          margin-bottom: 50px;
          margin-top: -50px;
        }

        .about-us-logo {
          width: 450px;
          display: flex;
          justify-content: center;
          align-self: center;
          margin-right: 50px;
        }

        .about-us-logo img {
          max-width: 100%;
          height: auto;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .about-us-text {
          flex: 1;
          min-width: 300px;
          text-align: center;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .about-us-title-slide,
        .about-us-intro-slide {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          margin-bottom: 20px;
          width: 100%;
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
        
        .products-section-container {
            width: 100%;
            max-width: 1400px;
            padding: 50px 20px;
            text-align: center;
            margin-bottom: 50px;
        }

        .products-heading {
            font-size: 2.5rem;
            color: ${purple};
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .products-intro-paragraph {
            font-size: 1.1rem;
            color: #555;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto 40px;
        }

        .products-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            padding: 0 50px;
        }
        
        .product-item,
        .products-title-slide { /* Apply transitions to all animated elements */
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .product-item.visible,
        .products-title-slide.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .product-image-container {
            width: 200px;
            height: auto;
            margin-bottom: 10px;
        }

        .product-image {
            max-width: 100%;
            height: auto;
        }

        .product-text-container {
            max-width: 400px;
            text-align: left;
        }
        
        .product-text-container ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        
        .product-text-container li {
            margin-bottom: 8px;
            color: #444;
            font-size: 1rem;
            line-height: 1.4;
        }

        @media (min-width: 769px) {
          .about-us-content {
            flex-wrap: nowrap;
            justify-content: space-between;
          }
          .about-us-logo {
            margin-right: auto;
            margin-top: 0;
            margin-left: 0;
          }
          .about-us-text {
            margin-left: auto;
            margin-right: auto;
          }
          .products-row {
            flex-wrap: nowrap;
            justify-content: center;
            align-items: flex-start;
          }
          .product-item-2 {
            margin-top: -60px;
          }
        }
        
        @media (max-width: 768px) {
          .about-us-container {
            overflow-x: hidden;
          }
          .about-us-content {
            flex-direction: column;
            margin-top: 0;
          }
          .about-us-logo {
            width: 250px;
            justify-content: center;
            align-self: center;
            padding-bottom: 0;
            margin: 0;
          }
          .about-us-text {
            text-align: center;
          }
          .about-us-heading {
            font-size: 2.2rem;
          }
          .about-us-paragraph {
            font-size: 1rem;
          }
          .products-row {
            flex-direction: column;
            align-items: center;
          }
          .product-item {
              padding: 10px 0;
          }
          .product-item-2 {
              margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUs;