import React, { useState } from 'react';

const ShopNow = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const purple = "#6b4e9b";
    const lightPurple = "#8b6bc3";
    const accentPink = "#e55f9a";

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to a backend service or an email list.
        // For this example, we'll just show a success message.
        console.log("Subscribed with email:", email);
        setMessage("Thank you for your interest! We'll notify you when the product launches.");
        setEmail(''); // Clear the input field
    };

    return (
        <div className="shop-now-container">
            <h1 className="main-heading">Coming Soon: Quatro for Her</h1>
            <p className="sub-heading">Get ready to feel balanced, comfortable, and confident every day.</p>

            <div className="product-showcase">
                <img
                    src="/products.png" // Use your existing product image
                    alt="A display of Quatro for Her products"
                    className="product-image"
                />
                <div className="product-details">
                    <p className="product-description">
                        **Quatro for Her** is a revolutionary plant-based solution designed to help women navigate the challenges of menopause naturally. Our unique formula combines four essential ingredients to help reduce hot flashes, improve sleep, support hormonal balance, and enhance overall well-being.
                    </p>
                    <p className="product-description">
                        We believe in a holistic approach to wellness, offering a safe and effective alternative to hormone replacement therapy. Join our community and be the first to experience the relief and freedom that Quatro for Her provides.
                    </p>
                </div>
            </div>

            <div className="cta-section">
                <h2>Be the First to Know!</h2>
                <p>
                    Enter your email below to receive exclusive launch updates, special offers, and early access to our product.
                </p>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe Now</button>
                </form>
                {message && <p className="success-message">{message}</p>}
            </div>

            <style>{`
                .shop-now-container {
                    padding: 100px 20px 80px;
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                    font-family: 'Times New Roman', Times, serif;
                    color: ${purple};
                }

                .main-heading {
                    font-size: clamp(2.5rem, 6vmin, 4rem);
                    font-weight: 700;
                    color: ${accentPink};
                    margin-bottom: 10px;
                }
                
                .sub-heading {
                    font-size: 1.2rem;
                    color: #555;
                    margin-bottom: 50px;
                }

                .product-showcase {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                    margin-bottom: 60px;
                }

                .product-image {
                    max-width: 100%;
                    width: 700px;
                    height: auto;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .product-details {
                    text-align: left;
                    max-width: 700px;
                }

                .product-description {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: #444;
                    margin-bottom: 20px;
                }
                
                .cta-section {
                    background-image: linear-gradient(to right bottom, #8b6bc3, #6b4e9b);
                    color: #fff;
                    padding: 50px 30px;
                    border-radius: 20px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    margin: 0 auto;
                }

                .cta-section h2 {
                    font-size: clamp(1.8rem, 5vmin, 2.8rem);
                    margin-top: 0;
                }

                .cta-section p {
                    font-size: 1rem;
                    max-width: 600px;
                    margin: 0 auto 25px;
                    line-height: 1.6;
                }

                .subscribe-form {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .subscribe-form input {
                    padding: 15px 20px;
                    border-radius: 50px;
                    border: 1px solid #ccc;
                    width: 100%;
                    max-width: 350px;
                    font-size: 1rem;
                }

                .subscribe-form button {
                    padding: 15px 30px;
                    border-radius: 50px;
                    border: none;
                    background-color: ${accentPink};
                    color: #fff;
                    font-size: 1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .subscribe-form button:hover {
                    background-color: #d84b85;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                .success-message {
                    margin-top: 20px;
                    font-weight: bold;
                    font-size: 1.1rem;
                    color: #fff;
                }

                @media (min-width: 768px) {
                    .product-showcase {
                        flex-direction: row;
                        justify-content: space-between;
                        text-align: left;
                    }
                    .product-details {
                        text-align: left;
                        max-width: 50%;
                    }
                    .cta-section {
                        padding: 60px 40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ShopNow;