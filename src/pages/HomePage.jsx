import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTint, faVenus, faBone } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    const [showContent, setShowContent] = useState(false);
    const [showSymptoms, setShowSymptoms] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showContent) {
            const symptomsTimer = setTimeout(() => {
                setShowSymptoms(true);
            }, 1000); 

            return () => clearTimeout(symptomsTimer);
        }
    }, [showContent]);

    const purple = "#6b4e9b";
    const lightPurple = "#8a66b9";
    const accentPink = "#e55f9a";

    const symptomsData = [
        {
            icon: faBed,
            text: "Sleep disorders & fatigue",
            stats: "Up to 61% of menopausal women report insomnia.",
            animationClass: 'symptom-item-1'
        },
        {
            icon: faTint,
            text: "Hot flashes & night sweats",
            stats: "Experienced by up to 80% of menopausal women.",
            animationClass: 'symptom-item-2'
        },
        {
            icon: faVenus,
            text: "Vaginal dryness & discomfort",
            stats: "Affects nearly 1 in 2 menopausal women.",
            animationClass: 'symptom-item-3'
        },
        {
            icon: faBone,
            text: "Osteoporosis & joint pain",
            stats: "Bone density loss accelerates after menopause.",
            animationClass: 'symptom-item-4'
        }
    ];

    return (
        <div className="home-container">
            <div className={`hero-content ${showContent ? 'visible' : ''}`}>
                <div className="text-wrapper">
                    <h1 className="hero-heading-left">
                        Because every woman deserves comfort, balance, and peace of mind...
                    </h1>
                    <h1 className="hero-heading-right">
                        <span className="highlight-text">Quatro for Her</span> is here to help you feel like yourself again<span className="heart-icon">💜</span>
                    </h1>
                </div>
                <button className="hero-cta">Discover Our Solution</button>
            </div>
            
            <div className={`issue-section ${showContent ? 'visible' : ''}`}>
                <p className="issue-text">
                    Menopause is a natural stage of life, but its symptoms don't have to control you.
                </p>

                <div className={`content-layout ${showSymptoms ? 'visible' : ''}`}>
                    <div className="symptoms-column left-column">
                        <div className={`symptom-item ${symptomsData[1].animationClass}`}>
                            <FontAwesomeIcon icon={symptomsData[1].icon} className="symptom-icon" />
                            <div className="symptom-details">
                                <h3>{symptomsData[1].text}</h3>
                                <p className="symptom-stats">{symptomsData[1].stats}</p>
                            </div>
                        </div>
                        <div className={`symptom-item ${symptomsData[0].animationClass}`}>
                            <FontAwesomeIcon icon={symptomsData[0].icon} className="symptom-icon" />
                            <div className="symptom-details">
                                <h3>{symptomsData[0].text}</h3>
                                <p className="symptom-stats">{symptomsData[0].stats}</p>
                            </div>
                        </div>
                    </div>

                    <img 
                        src="/homemain.png" 
                        alt="A woman stressing due to menopause symptoms" 
                        className={`main-image`}
                    /> 

                    <div className="symptoms-column right-column">
                        <div className={`symptom-item ${symptomsData[2].animationClass}`}>
                            <FontAwesomeIcon icon={symptomsData[2].icon} className="symptom-icon" />
                            <div className="symptom-details">
                                <h3>{symptomsData[2].text}</h3>
                                <p className="symptom-stats">{symptomsData[2].stats}</p>
                            </div>
                        </div>
                        <div className={`symptom-item ${symptomsData[3].animationClass}`}>
                            <FontAwesomeIcon icon={symptomsData[3].icon} className="symptom-icon" />
                            <div className="symptom-details">
                                <h3>{symptomsData[3].text}</h3>
                                <p className="symptom-stats">{symptomsData[3].stats}</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                }

                .hero-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 1200px;
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

                .text-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .hero-heading-left {
                    font-size: clamp(2rem, 8vmin, 5rem);
                    font-weight: 600;
                    line-height: 1.3;
                    color: ${purple};
                    margin: 0;
                    white-space: pre-wrap;
                    width: 100%;
                    text-align: left;
                }

                .hero-heading-right {
                    font-size: clamp(2rem, 8vmin, 5rem);
                    font-weight: 600;
                    line-height: 1.3;
                    color: ${purple};
                    margin: 30px 0 0 15%;
                    white-space: pre-wrap;
                    text-align: left;
                    width: 85%;
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
                }

                .hero-cta:hover {
                    background-color: ${lightPurple};
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }

                .issue-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 1200px;
                    text-align: center;
                    padding: 20px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 1s ease-out, transform 1s ease-out;
                }
                
                .issue-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .issue-text {
                    font-size: clamp(1.2rem, 3.5vmin, 2.5rem);
                    font-weight: 500;
                    color: ${lightPurple};
                    margin: 40px 0;
                    max-width: 800px;
                    line-height: 1.5;
                }

                .content-layout {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 50px;
                    width: 100%;
                    opacity: 0;
                    transition: opacity 1s ease-out;
                }
                
                .content-layout.visible {
                    opacity: 1;
                }

                .main-image {
                    width: 100%;
                    max-width: 400px;
                    height: auto;
                }
                
                .symptoms-column {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    flex-basis: 30%;
                }

                .symptom-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    padding: 20px;
                    background-color: #f7f3fd;
                    border-radius: 15px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    opacity: 0;
                    transform: translateX(-50px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .content-layout.visible .symptom-item-1 { transition-delay: 0.2s; transform: translateX(0); opacity: 1; }
                .content-layout.visible .symptom-item-2 { transition-delay: 0s; transform: translateX(0); opacity: 1; }
                .content-layout.visible .symptom-item-3 { transition-delay: 0.4s; transform: translateX(0); opacity: 1; }
                .content-layout.visible .symptom-item-4 { transition-delay: 0.6s; transform: translateX(0); opacity: 1; }

                .symptom-icon {
                    font-size: 2rem;
                    color: ${accentPink};
                    min-width: 2rem;
                }

                .symptom-details {
                    text-align: left;
                }

                .symptom-details h3 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin: 0 0 5px 0;
                    color: ${purple};
                }

                .symptom-details p {
                    font-size: 0.9rem;
                    font-weight: 400;
                    margin: 0;
                    color: #555;
                }
                
                @media (max-width: 768px) {
                    .hero-heading-right {
                        margin: 20px 0 0 0;
                        text-align: center;
                        width: 100%;
                    }

                    .content-layout {
                        flex-direction: column;
                        gap: 40px;
                    }

                    .symptoms-column {
                        width: 100%;
                        flex-basis: auto;
                        gap: 20px;
                    }

                    .symptom-item {
                        transform: translateX(0);
                        opacity: 1;
                        transition: none;
                    }
                    
                    .content-layout.visible .symptom-item {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;