import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="modern-navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-mark">MG</div>
          <div className="logo-text">
            <h2>MORE GRACE & BLESSING</h2>
            <span>NIGERIA ENTERPRISE</span>
          </div>
        </Link>

        {/* DESKTOP / MOBILE LINKS */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" className="nav-link">
  Home
</NavLink>

<NavLink to="/about" className="nav-link">
  About
</NavLink>

<NavLink to="/products" className="nav-link">
  Products
</NavLink>

<NavLink to="/gallery" className="nav-link">
  Gallery
</NavLink>

<NavLink to="/contact" className="nav-link">
  Contact
</NavLink>

          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp-btn"
            onClick={closeMenu}
          >
            WhatsApp Us
          </a>
        </nav>

        {/* RIGHT CTA */}
        <div className="navbar-actions">
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noreferrer"
            className="navbar-cta"
          >
            WhatsApp Us
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;