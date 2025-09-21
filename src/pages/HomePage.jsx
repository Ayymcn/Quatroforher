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

    return (
        <div className="home-container">
            <div className={`hero-content ${showContent ? 'visible' : ''}`}>
                {/* Image on the left */}
                <div className="hero-image-container">
                    <img src="/mainhero.png" alt="A woman looking peaceful and serene" className="hero-image" />
                </div>
                {/* Animated text on the right */}
                <div className="hero-text-container">
                    <h1 className="hero-heading">
                        Because every woman deserves comfort, balance, and peace of mind.<br />Quatro for Her is here to help you feel like yourself again.
                    </h1>
                    <button className="hero-cta">Discover Our Solution</button>
                </div>
            </div>

            <style>{`
                .home-container {
                    display: flex;
                    min-height: calc(100vh - 80px);
                    padding-top: 20px; /* Reduced padding to move content up */
                    justify-content: center;
                    align-items: center;
                    font-family: 'Poppins', sans-serif;
                    overflow: hidden;
                    color: ${purple};
                }

                .hero-content {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 1400px;
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

                .hero-image-container {
                    flex: 1;
                    min-width: 400px; 
                    max-width: 70%; 
                    position: relative;
                }

                .hero-image {
                    width: 100%;
                    height: auto;
                    border-radius: 15px;
                    object-fit: cover;
                }
                
                .hero-text-container {
                    flex: 1;
                    min-width: 300px;
                    text-align: left;
                }

                .hero-heading {
                    font-size: clamp(1.2rem, 2.5vw, 2rem);
                    font-weight: 500;
                    line-height: 1.5;
                    color: ${purple};
                    margin-bottom: 30px;
                    white-space: pre-wrap;
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
                        flex-direction: column;
                        gap: 40px;
                        padding: 20px;
                        text-align: center;
                    }
                    .hero-image-container {
                        max-width: 80%;
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