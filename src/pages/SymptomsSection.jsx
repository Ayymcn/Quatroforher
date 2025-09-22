import React from 'react';
import { FaFire, FaBed, FaVenus, FaBone } from 'react-icons/fa';

const SymptomsSection = () => {
    const purple = "#6b4e9b";
    const lightPurple = "#8a66b9";
    const accentPink = "#e55f9a";
    const iconSize = "3.5rem";

    return (
        <div className="symptoms-container">
            <h2 className="symptoms-heading">
                Menopause is a natural stage of life, but its symptoms don't have to control you.
            </h2>

            <div className="symptoms-content">
                {/* Left Side Symptoms */}
                <div className="symptoms-list symptoms-left">
                    <div className="symptom-block">
                        <div className="symptom-item">
                            <FaFire className="symptom-icon floating" size={iconSize} />
                            <div>
                                <h3>Hot Flashes & Night Sweats</h3>
                                <p className="symptom-stats">Affects up to <span style={{ color: accentPink }}>80%</span> of women</p>
                            </div>
                        </div>
                    </div>
                    <div className="symptom-block">
                        <div className="symptom-item">
                            <FaVenus className="symptom-icon floating" size={iconSize} />
                            <div>
                                <h3>Vaginal Dryness & Discomfort</h3>
                                <p className="symptom-stats">Experienced by around <span style={{ color: accentPink }}>40%</span> of postmenopausal women</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Central Image */}
                <div className="symptom-image-wrapper">
                    <img
                        src="/homemain.png"
                        alt="A stressed woman dealing with menopause symptoms"
                        className="symptom-image"
                    />
                </div>

                {/* Right Side Symptoms */}
                <div className="symptoms-list symptoms-right">
                    <div className="symptom-block">
                        <div className="symptom-item">
                            <FaBed className="symptom-icon floating" size={iconSize} />
                            <div>
                                <h3>Sleep Disorders & Fatigue</h3>
                                <p className="symptom-stats">Sleep issues are a primary concern for <span style={{ color: accentPink }}>61%</span> of menopausal women</p>
                            </div>
                        </div>
                    </div>
                    <div className="symptom-block">
                        <div className="symptom-item">
                            <FaBone className="symptom-icon floating" size={iconSize} />
                            <div>
                                <h3>Osteoporosis & Joint Pain</h3>
                                <p className="symptom-stats">Bone density loss accelerates by up to <span style={{ color: accentPink }}>10%</span> in the first 5 years post-menopause</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for the component */}
            <style>{`
                .symptoms-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                    max-width: 1200px;
                    padding: 60px 20px;
                    color: ${purple};
                }

                .symptoms-heading {
                    font-size: clamp(1.8rem, 4vmin, 2.8rem);
                    font-weight: 600;
                    margin-bottom: 50px;
                    line-height: 1.3;
                }

                .symptoms-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 40px;
                    width: 100%;
                }

                .symptoms-image-wrapper {
                    flex-shrink: 0;
                    width: 350px;
                    height: 350px;
                    overflow: hidden;
                    border-radius: 50%;
                    border: 5px solid ${accentPink};
                    box-shadow: 0 0 30px rgba(229, 95, 154, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .symptom-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transform: scale(1.05);
                }

                .symptoms-list {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 30px;
                    flex: 1;
                    padding: 0 20px;
                }
                
                .symptoms-left {
                    align-items: flex-end;
                    text-align: right;
                }

                .symptoms-right {
                    align-items: flex-start;
                    text-align: left;
                }

                .symptom-block {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.8));
                    border-radius: 15px;
                    padding: 20px 30px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    animation: pulse 2s infinite ease-in-out alternate;
                    border: 1px solid rgba(107, 78, 155, 0.2);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 350px;
                    height: 120px;
                    box-sizing: border-box;
                }

                .symptom-block:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
                }
                
                .symptom-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    width: 100%;
                }

                .symptoms-left .symptom-item {
                    flex-direction: row-reverse;
                }

                .symptom-icon {
                    color: ${accentPink};
                    text-shadow: 0 0 5px rgba(229, 95, 154, 0.5);
                }

                .symptom-item h3 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin: 0;
                    color: ${purple};
                }

                .symptom-item p {
                    font-size: 0.9rem;
                    margin: 5px 0 0;
                    line-height: 1.5;
                    color: #555;
                }

                .symptom-stats {
                    font-weight: 500;
                    color: ${lightPurple};
                }

                /* Animations */
                @keyframes pulse {
                    from { transform: scale(1); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); }
                    to { transform: scale(1.02); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); }
                }

                @keyframes floating {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }

                .floating {
                    animation: floating 3s infinite ease-in-out;
                }

                /* Media Queries for Responsiveness */
                @media (max-width: 992px) {
                    .symptoms-content {
                        flex-direction: column;
                        gap: 40px;
                    }
                    .symptoms-list {
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 0;
                    }
                    .symptom-block {
                        width: 100%;
                        max-width: 350px;
                    }
                    .symptoms-left, .symptoms-right {
                        text-align: center;
                        align-items: center;
                    }
                    .symptoms-left .symptom-item {
                        flex-direction: column;
                    }
                    .symptom-item {
                        flex-direction: column;
                    }
                    .symptoms-image-wrapper {
                        width: 250px;
                        height: 250px;
                    }
                }
            `}</style>
        </div>
    );
};

export default SymptomsSection;