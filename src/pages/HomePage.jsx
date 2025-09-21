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
    const accentPink = "#e55f9a"; // A more saturated pink for better visibility

    return (
        <div className="home-container">
            <div className={`hero-content ${showContent ? 'visible' : ''}`}>
                <div className="hero-text-container">
                    <h1 className="hero-heading">
                        Because every woman deserves comfort, balance, and peace of mind.
                        <br />
                        <span className="highlight-text">Quatro for Her</span> is here to help you feel like yourself again.
                    </h1>
                    <button className="hero-cta">Discover Our Solution</button>
                </div>
            </div>

            <style>{`
                .home-container {
                    display: flex;
                    min-height: calc(100vh - 80px);
                    padding-top: 20px;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Poppins', sans-serif;
                    overflow: hidden;
                    color: ${purple};
                    text-align: center;
                }

                .hero-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 1000px;
                    padding: 40px;
                    gap: 40px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 1s ease-out, transform 1s ease-out;
                }
                
                .hero-content.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-text-container {
                    flex: none;
                    min-width: unset;
                    text-align: center;
                }

                .hero-heading {
                    font-size: clamp(2rem, 4vw, 3.5rem); /* Adjusted font size to be smaller */
                    font-weight: 600;
                    line-height: 1.3;
                    color: ${purple};
                    margin-bottom: 40px;
                    white-space: pre-wrap;
                }

                .highlight-text {
                    color: ${accentPink}; /* Changed to a more vibrant pink */
                    font-weight: 700;
                    text-shadow: 0 0 10px ${accentPink}, 0 0 20px rgba(229, 95, 154, 0.5); /* Enhanced glow */
                    display: inline-block;
                    animation: pulseGlow 2s infinite alternate ease-in-out;
                }

                @keyframes pulseGlow {
                    from {
                        transform: scale(1);
                        text-shadow: 0 0 10px ${accentPink}, 0 0 15px rgba(229, 95, 154, 0.5);
                    }
                    to {
                        transform: scale(1.03);
                        text-shadow: 0 0 15px ${accentPink}, 0 0 25px rgba(229, 95, 154, 0.8);
                    }
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
                }

                .hero-cta:hover {
                    background-color: ${lightPurple};
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }
                
                @media (max-width: 768px) {
                    .home-container {
                        padding-top: 100px;
                    }
                    .hero-content {
                        padding: 20px;
                        gap: 30px;
                    }
                    .hero-heading {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;