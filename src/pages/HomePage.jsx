import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const purple = "#6b4e9b";
    const lightPurple = "#8a66b9";
    const accentPink = "#e55f9a";

    return (
        <div className="home-container">
            <div className={`hero-content ${showContent ? 'visible' : ''}`}>
                <div className="text-section-left">
                    <h1 className="hero-heading-left bigger-text">
                        Because every woman deserves comfort, balance, and peace of mind...
                    </h1>
                    <h1 className="hero-heading-right bigger-text">
                        <span className="highlight-text">Quatro for Her</span> is here to help you feel like yourself again<span className="heart-icon">💜</span>
                    </h1>
                    <button className="hero-cta">Discover Our Solution</button>
                </div>
                
                <img 
                    src="/homeintro.png" 
                    alt="A serene woman introducing Quatro for Her" 
                    className={`intro-image ${showContent ? 'visible' : ''}`}
                /> 
            </div>

            <style>{`
                /* Apply base font size increase to the entire page */
                body {
                    font-size: 110%; 
                }

                .home-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center; 
                    min-height: calc(100vh - 80px);
                    padding: 20px;
                    font-family: 'Poppins', sans-serif;
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
                    /* Adjusted font-size to be slightly larger to account for the body change */
                    font-size: clamp(2.7rem, 7vmin, 4.8rem); 
                }
                
                .highlight-text {
                    color: ${accentPink};
                    font-weight: 700;
                    text-shadow: 0 0 10px ${accentPink}, 0 0 20px rgba(229, 95, 154, 0.5);
                    display: inline-block;
                    animation: pulseGlow 2s infinite alternate ease-in-out;
                }

                .heart-icon {
                    color: ${purple};
                    font-size: 1.2em;
                    margin-left: 8px;
                }

                @keyframes pulseGlow {
                    from { transform: scale(1); text-shadow: 0 0 10px ${accentPink}, 0 0 15px rgba(229, 95, 154, 0.5); }
                    to { transform: scale(1.03); text-shadow: 0 0 15px ${accentPink}, 0 0 25px rgba(229, 95, 154, 0.8); }
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
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    align-self: flex-start;
                }

                .hero-cta:hover {
                    background-color: ${lightPurple};
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
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
                }
            `}</style>
        </div>
    );
};

export default HomePage;