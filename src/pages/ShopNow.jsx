import React from 'react';

const ShopNow = () => {
    const purple = "#6b4e9b";
    const lightPurple = "#8a66b9";

    return (
        <div className="shop-container">
            <h1 className="shop-heading">Coming Soon!</h1>
            <p className="shop-text">
                Thank you for your interest! Our products are not yet available for purchase. Please check back soon for updates.
            </p>
            <style>{`
                .shop-container {
                    padding: 80px 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: calc(100vh - 160px); /* Adjust based on your header/footer */
                    color: ${purple};
                    font-family: 'Poppins', sans-serif;
                }
                .shop-heading {
                    font-size: clamp(3rem, 8vmin, 5rem);
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: ${purple};
                }
                .shop-text {
                    font-size: clamp(1.2rem, 3vmin, 1.8rem);
                    max-width: 600px;
                    line-height: 1.6;
                    color: ${lightPurple};
                }
            `}</style>
        </div>
    );
};

export default ShopNow;