import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header/Navbar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          background: "#f8f8f8",
          borderBottom: "1px solid #ddd",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <img
          src="/Logo.png"
          alt="Logo"
          style={{ height: "100px", objectFit: "contain" }}
        />

        {/* Menu button (3 dots) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ⋮
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <nav
            style={{
              position: "absolute",
              top: "80px",
              right: "20px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              padding: "10px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li style={{ margin: "8px 0" }}>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="/faq" onClick={() => setMenuOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li style={{ margin: "8px 0" }}>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Page Content Placeholder */}
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        {/* Empty for now — this is where your hero section / homepage content will go */}
      </div>
    </>
  );
}

export default App;