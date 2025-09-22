import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTint, faVenus, faBone } from '@fortawesome/free-solid-svg-icons';

const SymptomsSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    // IntersectionObserver to detect when the section enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // If the entry is intersecting (is in the viewport)
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    // Stop observing after it's visible to prevent re-triggering
                    observer.unobserve(entries[0].target);
                }
            },
            {
                // Trigger when the component is 25% visible
                threshold: 0.25,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup function to disconnect the observer
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

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
        <div ref={sectionRef} className={`issue-section ${isVisible ? 'visible' : ''}`}>
            <p className="issue-text">
                Menopause is a natural stage of life, but its symptoms don't have to control you.
            </p>

            <div className={`content-layout ${isVisible ? 'visible' : ''}`}>
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

            <style>{`
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
                    font-size: clamp(1.8rem, 4.5vmin, 3rem);
                    font-weight: 500;
                    color: ${lightPurple};
                    margin: 40px 0;
                    max-width: 800px;
                    line-height: 1.5;
                    font-family: 'Monotype Corsiva', cursive;
                }

                .content-layout {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 60px;
                    width: 100%;
                    opacity: 0;
                    transition: opacity 1s ease-out;
                }
                
                .content-layout.visible {
                    opacity: 1;
                }

                .main-image {
                    width: 100%;
                    max-width: 550px;
                    height: auto;
                    object-fit: contain;
                }
                
                .symptoms-column {
                    display: flex;
                    flex-direction: column;
                    gap: 150px;
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

export default SymptomsSection;