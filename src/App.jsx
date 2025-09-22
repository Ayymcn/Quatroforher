import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"; 
import { FaGlobe } from 'react-icons/fa';
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const purple = "#6b4e9b";
  const lightPurple = "#8b6bc3";

  // Function to handle the smooth scroll to the top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Animated Background Wrapper */}
      <div className="animated-background-wrapper"></div>
      
      {/* Header/Navbar */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <img src="/Logo.png" alt="Logo" className="logo" />
        </div>

        <nav className="desktop-nav">
          <ul>
            {/* Added onClick handler to all page links */}
            <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
            <li><a href="#menopause-section">Menopause</a></li>
            <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
            <li><Link to="/faq" onClick={handleScrollToTop}>FAQ</Link></li>
            <li><Link to="/contact" className="contact-btn" onClick={handleScrollToTop}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Desktop language button */}
        <div className="lang-container">
          <button className="desktop-lang-btn" onClick={() => setLangOpen(!langOpen)}>
            <FaGlobe className="lang-icon" />
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
            {/* Added onClick handler to all mobile page links */}
            <li><Link to="/" onClick={() => { setMenuOpen(false); handleScrollToTop(); }}>Home</Link></li>
            <li><a href="#menopause-section" onClick={() => setMenuOpen(false)}>Menopause</a></li>
            <li><Link to="/about" onClick={() => { setMenuOpen(false); handleScrollToTop(); }}>About Us</Link></li>
            <li><Link to="/faq" onClick={() => { setMenuOpen(false); handleScrollToTop(); }}>FAQ</Link></li>
            <li><Link to="/contact" className="contact-btn" onClick={() => { setMenuOpen(false); handleScrollToTop(); }}>Contact Us</Link></li>
            <li>
              <div className="lang-container">
                <button className="mobile-lang-btn" onClick={() => setLangOpen(!langOpen)}>
                  <FaGlobe className="lang-icon" />
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

      {/* Routes and Main Content */}
      <main className="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* The rest of your CSS remains the same */}
      <style>{`
        body {
          margin: 0;
          font-family: "Times New Roman", Times, serif;
          background-color: #fdf5e6;
        }

        .animated-background-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(
            -45deg,
            #d6c2e2,
            #ffc0cb,
            #d6c2e2,
            #ffc0cb
          );
          background-size: 400% 400%;
          animation: fluidBackground 20s ease-in-out infinite;
        }

        @keyframes fluidBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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
          background-color: #fff1e4;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 1000;
          transition: background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
        }

        .header.scrolled {
          background-color: rgba(255, 241, 228, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .logo-container, .lang-container {
          box-sizing: border-box;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }

        .scrolled .logo-container, .scrolled .lang-container {
        }
        
        .logo { 
          height: 60px; 
          object-fit: contain; 
          display: block;
        }
        
        .lang-icon {
          width: 28px;
          height: 28px;
          display: block;
          color: ${purple};
        }

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