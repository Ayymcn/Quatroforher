import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <header style={{
        position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "100px",          // ⬅️ increase header height
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",        // ⬅️ vertical padding removed
    background: "#f8f8f8",
    borderBottom: "1px solid #ddd",
    zIndex: 1000
      }}>
        {/* Logo on the left */}
        <img src="/Logo.png" alt="Logo" style={{ height: "50px" }} />

        {/* Menu button (three dots) */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            ⋮
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <div style={{
              position: "absolute",
              right: 0,
              top: "40px",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              padding: "10px"
            }}>
              <p><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></p>
              <p><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></p>
              <p><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></p>
              <p><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></p>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
