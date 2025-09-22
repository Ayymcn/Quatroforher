import React from 'react';

const ShopNow = () => {
    const purple = "#6b4e9b";
    const accentPink = "#e55f9a";

    return (
        <div className="coming-soon-container">
            <div className="coming-soon-content">
                <h1>Shop Coming Soon!</h1>
                <p>We're working hard to bring you something special. Stay tuned for our official launch.</p>
            </div>

            <style>{`
                .coming-soon-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: calc(100vh - 80px); /* Full screen minus header height */
                    text-align: center;
                    font-family: 'Times New Roman', Times, serif;
                    padding: 20px;
                    color: ${purple};
                }
                
                .coming-soon-content {
                    max-width: 600px;
                    opacity: 0;
                    animation: fadeIn 1.5s forwards ease-in-out;
                    animation-delay: 0.5s;
                }

                .coming-soon-content h1 {
                    font-size: clamp(3rem, 8vw, 5rem);
                    font-weight: bold;
                    margin: 0;
                    line-height: 1.2;
                    background: linear-gradient(to right, ${purple}, ${accentPink});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    color: transparent;
                    animation: pulseGlow 3s infinite alternate ease-in-out;
                }

                .coming-soon-content p {
                    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
                    margin-top: 15px;
                    color: #555;
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }

                @keyframes pulseGlow {
                    from {
                        transform: scale(1);
                        text-shadow: 0 0 10px rgba(107, 78, 155, 0.4);
                    }
                    to {
                        transform: scale(1.03);
                        text-shadow: 0 0 20px rgba(107, 78, 155, 0.8);
                    }
                }
            `}</style>
        </div>
    );
};

export default ShopNow;