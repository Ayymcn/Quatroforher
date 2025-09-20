import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FAQ from "./pages/FAQ";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const purple = "#6b4e9b";
  const lightPurple = "#8b6bc3";

  return (
    <>
      {/* Animated Background Wrapper with multiple shapes */}
      <div className="animated-background-wrapper">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
      </div>
      
      {/* Header/Navbar */}
      <header className="header">
        <img src="/Logo.png" alt="Logo" className="logo" />

        <nav className="desktop-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact" className="contact-btn">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Desktop language button */}
        <div className="lang-container">
          <button className="desktop-lang-btn" onClick={() => setLangOpen(!langOpen)}>
            <img src="/icon.png" alt="Language" className="lang-icon" />
          </button>
          {langOpen && (
            <ul className="lang-dropdown">
              <li>English</li>
              <li>French</li>
              <li>Arabic</li>
            </ul>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      {menuOpen && (
        <div className="mobile-overlay">
          <button className="overlay-close-btn" onClick={() => setMenuOpen(false)}>✖</button>

          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li>
              <div className="lang-container">
                <button className="mobile-lang-btn" onClick={() => setLangOpen(!langOpen)}>
                  <img src="/icon.png" alt="Language" className="lang-icon" />
                </button>
                {langOpen && (
                  <ul className="lang-dropdown">
                    <li>English</li>
                    <li>French</li>
                    <li>Arabic</li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* Routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
        </Routes>
      </main>

      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: "Times New Roman", Times, serif;
          background-color: #fdf5e6; /* Base background for safety */
        }

        .animated-background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
          background-color: #fdf5e6; /* Base background color */
        }

        .shape {
          position: absolute;
          border-radius: 50%; /* Make them circular */
          opacity: 0.3; /* Subtle transparency */
          filter: blur(50px); /* Soften the edges */
          animation: floatAndFade 25s infinite ease-in-out alternate;
        }

        .shape1 {
          background-color: #ffc0cb; /* Soft Pink - femininity */
          width: 250px; height: 250px;
          top: 10%; left: 5%;
          animation-delay: 0s;
          animation-duration: 20s;
        }

        .shape2 {
          background-color: #a2d2ff; /* Calming Blue - science/health */
          width: 300px; height: 300px;
          top: 60%; left: 70%;
          animation-delay: 5s;
          animation-duration: 22s;
        }

        .shape3 {
          background-color: #d6c2e2; /* Elegant Lavender - subtle */
          width: 200px; height: 200px;
          top: 30%; left: 40%;
          animation-delay: 10s;
          animation-duration: 25s;
        }

        .shape4 {
          background-color: #b3e0ff; /* Lighter Blue - cleanliness */
          width: 180px; height: 180px;
          top: 80%; left: 15%;
          animation-delay: 2s;
          animation-duration: 18s;
        }

        .shape5 {
          background-color: #ffe0e6; /* Very light pink */
          width: 220px; height: 220px;
          top: 0%; left: 80%;
          animation-delay: 7s;
          animation-duration: 23s;
        }

        @keyframes floatAndFade {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(10vw, 5vh) scale(1.05);
            opacity: 0.4;
          }
          50% {
            transform: translate(0, 10vh) scale(0.95);
            opacity: 0.2;
          }
          75% {
            transform: translate(-10vw, 5vh) scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
        }


        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          background-color: rgba(255, 241, 228, 0.7); /* Frosted Glass Effect */
          backdrop-filter: blur(10px); /* Blurs the elements behind it */
          -webkit-backdrop-filter: blur(10px); /* For Safari support */
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* Adds a subtle shadow */
          z-index: 1000;
        }

        .logo { height: 60px; object-fit: contain; }

        .desktop-nav ul {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-nav a {
          text-decoration: none;
          color: ${purple};
          font-weight: bold;
          position: relative;
          transition: all 0.3s ease;
        }
        .desktop-nav a:hover { color: ${lightPurple}; }

        .desktop-nav a:not(.contact-btn)::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: ${purple};
          transition: width 0.3s ease;
        }
        .desktop-nav a:not(.contact-btn):hover::after { width: 100%; }

        .contact-btn {
          background-color: ${purple};
          color: #fff !important;
          padding: 8px 16px;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .contact-btn:hover {
          background-color: ${lightPurple};
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transform: translateY(-2px);
        }

        .desktop-lang-btn, .mobile-lang-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.2s ease;
        }
        .desktop-lang-btn:hover, .mobile-lang-btn:hover { transform: scale(1.2); }

        .lang-container { position: relative; display: inline-block; }

        .lang-icon { width: 28px; height: 28px; }

        .lang-dropdown {
          position: absolute;
          top: 40px;
          right: 0;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 6px;
          list-style: none;
          padding: 5px 0;
          margin: 0;
          width: 100px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          z-index: 3000;
        }
        .lang-dropdown li {
          padding: 6px 12px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .lang-dropdown li:hover {
          background-color: ${lightPurple};
          color: #fff;
        }

        .mobile-menu-btn {
          display: none;
          font-size: 28px;
          color: ${purple};
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .mobile-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #fff1e4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.4s ease;
        }

        .overlay-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 36px;
          background: none;
          border: none;
          cursor: pointer;
          color: ${purple};
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .overlay-close-btn:hover { transform: scale(1.2); color: ${lightPurple}; }

        .mobile-overlay ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        .mobile-overlay li { margin: 20px 0; }

        .mobile-overlay a, .mobile-lang-btn {
          font-size: 28px;
          text-decoration: none;
          color: ${purple};
          font-weight: bold;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-overlay .contact-btn {
          background-color: ${purple};
          color: #fff !important;
          padding: 8px 16px;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .mobile-overlay .contact-btn:hover {
          background-color: ${lightPurple};
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transform: translateY(-2px);
        }

        .mobile-overlay a:hover, .mobile-lang-btn:hover { color: ${lightPurple}; transform: scale(1.1); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .main-content { padding-top: 100px; text-align: center; }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .desktop-lang-btn { display: none; }
          .mobile-menu-btn { display: block; }
        }
      `}</style>
    </>
  );
}

export default App;