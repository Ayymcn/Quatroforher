import React, { useState, useEffect, useRef } from 'react';
import SymptomsSection from './SymptomsSection'; 
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    const [showContent, setShowContent] = useState(false);
    const productsSectionRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleScrollToProducts = (e) => {
        e.preventDefault(); 
        if (productsSectionRef.current) {
            const headerHeight = 80;
            const topOffset = productsSectionRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    const purple = "#6b4e9b";
    const lightPurple = "#8a66b9";
    const accentPink = "#e55f9a";

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className={`hero-content ${showContent ? 'visible' : ''}`}>
                <div className="text-section-left">
                    <h1 className="hero-heading-left bigger-text">
                        <span className="gradient-text">{t("homepage.hero.heading1")}</span>
                    </h1>
                    <h1 className="hero-heading-right bigger-text">
                        <span className="hero-highlight">Quatro for Her</span><span className="gradient-text">{t("homepage.hero.heading2")}</span>
                    </h1>
                    <a href="#products-section" className="hero-cta" onClick={handleScrollToProducts}>{t("homepage.hero.cta")}</a>
                </div>

                <img
                    src="/homeintro.png"
                    alt={t("homepage.hero.imageAlt")}
                    className={`intro-image ${showContent ? 'visible' : ''}`}
                />
            </div>

            <hr className="divider"/>
            
            {/* Products Section with Link */}
            <div id="products-section" ref={productsSectionRef} className="products-container">
                <Link to="/shop-now">
                    <img
                        src="/products.png"
                        alt={t("homepage.products.imageAlt")}
                        className="products-image"
                    />
                </Link>
            </div>
            
            {/* The SymptomsSection */}
            <hr className="divider" />
            <div id="menopause-section">
                <SymptomsSection />
            </div>
            
            <style>{`
                /* Add smooth scrolling to the entire page */
                html {
                    scroll-behavior: smooth;
                }

                body {
                    font-size: 110%;
                }

                .home-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-height: calc(100vh - 80px);
                    padding: 20px;
                    font-family: 'Times New Roman', Times, serif;
                    color: ${purple};
                    overflow-x: hidden;
                    box-sizing: border-box;
                    justify-content: center;
                    width: 100%;
                }

                .hero-content {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    width: 100%;
                    max-width: 1200px;
                    padding: 40px;
                    gap: 60px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 1s ease-out, transform 1s ease-out;
                }

                .hero-content.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .text-section-left {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;
                    flex: 1;
                    max-width: 800px;
                    margin-right: 0;
                }

                .hero-heading-left, .hero-heading-right {
                    font-weight: 600;
                    line-height: 1.3;
                    color: ${purple};
                    margin: 0;
                    white-space: pre-wrap;
                    width: 100%;
                    text-align: left;
                }

                .hero-heading-left.bigger-text,
                .hero-heading-right.bigger-text {
                    font-size: clamp(2.7rem, 7vmin, 4.8rem);
                }

                .gradient-text {
                    background: linear-gradient(to right, ${purple}, ${accentPink});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    color: transparent;
                }

                .hero-highlight {
                    color: ${purple};
                    font-weight: 700;
                    text-shadow: 0 0 10px ${purple}, 0 0 20px rgba(107, 78, 155, 0.5);
                    display: inline-block;
                    animation: pulseGlow 2s infinite alternate ease-in-out;
                }

                .heart-icon {
                    color: ${purple};
                    font-size: 1.2em;
                    margin-left: 8px;
                }

                @keyframes pulseGlow {
                    from { transform: scale(1); text-shadow: 0 0 10px ${purple}, 0 0 15px rgba(107, 78, 155, 0.5); }
                    to { transform: scale(1.03); text-shadow: 0 0 15px ${purple}, 0 0 25px rgba(107, 78, 155, 0.8); }
                }

                .hero-cta {
                    padding: 18px 40px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #fff;
                    background-color: ${purple};
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    align-self: flex-start;
                    text-decoration: none;
                    font-family: 'Times New Roman', Times, serif;
                }

                .hero-cta:hover {
                    background-color: ${lightPurple};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }

                .intro-image {
                    width: 100%;
                    max-width: 400px;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(229, 95, 154, 0.3);
                    opacity: 0;
                    transform: scale(0.9);
                    transition: opacity 1s ease-out, transform 1s ease-out;
                }

                .intro-image.visible {
                    opacity: 1;
                    transform: scale(1);
                    animation: heartbeat 2s infinite alternate ease-in-out;
                }

                @keyframes heartbeat {
                    0% {
                        transform: scale(1);
                        box-shadow: 0 0 10px rgba(229, 95, 154, 0.3);
                    }
                    50% {
                        transform: scale(1.03);
                        box-shadow: 0 0 25px rgba(229, 95, 154, 0.8);
                    }
                    100% {
                        transform: scale(1);
                        box-shadow: 0 0 10px rgba(229, 95, 154, 0.3);
                    }
                }

                /* Products Section CSS */
                .divider {
                    width: 80%;
                    max-width: 1200px;
                    border: 0;
                    height: 1px;
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(107, 78, 155, 0.75), rgba(0, 0, 0, 0));
                    margin: 40px 0;
                }

                .products-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                    max-width: 1200px;
                    padding: 40px 20px;
                    scroll-margin-top: 80px; 
                }

                .products-heading {
                    font-size: clamp(2rem, 5vmin, 3.5rem);
                    font-weight: 700;
                    margin-bottom: 30px;
                    color: ${purple};
                }

                .products-image {
                    width: 100%;
                    max-width: 800px;
                    height: auto;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                    cursor: pointer;
                }

                .products-image:hover {
                    transform: scale(1.02);
                }
                
                #menopause-section {
                    scroll-margin-top: 80px;
                }

                @media (max-width: 992px) {
                    .hero-content {
                        flex-direction: column;
                        text-align: center;
                        gap: 40px;
                        justify-content: center;
                        padding: 40px 20px;
                    }
                    .text-section-left {
                        align-items: center;
                        max-width: 100%;
                        margin-right: 0;
                    }
                    .hero-heading-left, .hero-heading-right {
                        text-align: center;
                    }
                    .hero-cta {
                        align-self: center;
                    }
                    .intro-image {
                        max-width: 320px;
                        height: 320px;
                    }
                    .products-container {
                        padding: 20px;
                    }
                }

                @media (max-width: 768px) {
                    .hero-heading-left.bigger-text,
                    .hero-heading-right.bigger-text {
                        font-size: clamp(2.5rem, 8vmin, 4rem);
                    }
                    .hero-cta {
                        padding: 15px 30px;
                        font-size: 1rem;
                    }
                    .intro-image {
                        max-width: 250px;
                        height: 250px;
                    }
                    .products-container {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;