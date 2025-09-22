import React, { useState, useEffect } from 'react';

// Removed FontAwesome imports as symptoms are no longer present
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBed, faTint, faVenus, faBone } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    // Removed showSymptoms state and its useEffect as symptoms are no longer present

    const purple = "#6b4e9b";
    const lightPurple = "#8a66b9";
    const accentPink = "#e55f9a";

    // Removed symptomsData array as symptoms are no longer present

    return (
        <div className="home-container">
            <div className={`hero-content ${showContent ? 'visible' : ''}`}>
                <div className="text-section-left"> {/* New wrapper for left-aligned text */}
                    <h1 className="hero-heading-left smaller-text"> {/* Added smaller-text class */}
                        Because every woman deserves comfort, balance, and peace of mind...
                    </h1>
                    <h1 className="hero-heading-right smaller-text"> {/* Added smaller-text class */}
                        <span className="highlight-text">Quatro for Her</span> is here to help you feel like yourself again<span className="heart-icon">💜</span>
                    </h1>
                    <button className="hero-cta">Discover Our Solution</button>
                </div>
                
                <img 
                    src="/homeintro.png" 
                    alt="A serene woman introducing Quatro for Her" 
                    className={`intro-image ${showContent ? 'visible' : ''}`} // New class for the intro image
                /> 
            </div>

            <style>{`
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
                    justify-content: center; /* Center content vertically */
                }

                .hero-content {
                    display: flex;
                    align-items: center; /* Align items vertically in the center */
                    justify-content: center; /* Center items horizontally */
                    width: 100%;
                    max-width: 1200px;
                    padding: 40px;
                    gap: 60px; /* Increased gap for better separation */
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 1s ease-out, transform 1s ease-out;
                }
                
                .hero-content.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .text-section-left { /* New style for the left text column */
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; /* Align text to the left */
                    gap: 20px; /* Space between headings and button */
                    flex: 1; /* Allow text section to grow */
                    max-width: 600px; /* Limit width for better readability */
                }

                .hero-heading-left, .hero-heading-right {
                    font-weight: 600;
                    line-height: 1.3;
                    color: ${purple};
                    margin: 0;
                    white-space: pre-wrap;
                    width: 100%;
                    text-align: left; /* Ensure text is left-aligned */
                }

                .hero-heading-left.smaller-text, 
                .hero-heading-right.smaller-text {
                    font-size: clamp(1.8rem, 4.5vmin, 3rem); /* Smaller font size */
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
                    align-self: flex-start; /* Align button to the left */
                }

                .hero-cta:hover {
                    background-color: ${lightPurple};
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }

                .intro-image { /* Style for the new image */
                    width: 100%;
                    max-width: 550px; /* Made slightly bigger */
                    height: auto;
                    object-fit: contain; /* Ensure the image fits within its bounds */
                    opacity: 0;
                    transform: scale(0.95);
                    transition: opacity 1s ease-out, transform 1s ease-out;
                }
                
                .intro-image.visible {
                    opacity: 1;
                    transform: scale(1);
                }

                @media (max-width: 992px) { /* Adjust for medium screens */
                    .hero-content {
                        flex-direction: column; /* Stack text and image on smaller screens */
                        text-align: center;
                        gap: 40px;
                    }
                    .text-section-left {
                        align-items: center; /* Center text and button on smaller screens */
                        max-width: 100%;
                    }
                    .hero-heading-left, .hero-heading-right {
                        text-align: center;
                    }
                    .hero-cta {
                        align-self: center; /* Center button on smaller screens */
                    }
                    .intro-image {
                        max-width: 450px; /* Adjust image size for smaller screens */
                    }
                }

                @media (max-width: 768px) {
                    .hero-heading-left.smaller-text, 
                    .hero-heading-right.smaller-text {
                        font-size: clamp(1.5rem, 5vmin, 2.5rem); /* Even smaller on mobile */
                    }
                    .hero-cta {
                        padding: 15px 30px;
                        font-size: 1rem;
                    }
                    .intro-image {
                        max-width: 350px; /* Further adjust image size for mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;