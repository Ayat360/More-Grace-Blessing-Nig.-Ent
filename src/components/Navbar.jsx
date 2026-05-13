import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="enterprise-navbar">

      <div className="navbar-inner">

        {/* BRAND */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src="images/logo.png"
            alt="More Grace & Blessing"
            className="brand-logo"
          />

          <div className="brand-text">
            <h2>
              MORE GRACE & BLESSING
              <span>NIGERIA ENTERPRISE</span>
            </h2>

            {/* CAC UNDER NAME (FIXED STRUCTURE) */}
            <small className="cac-label">
              CAC REGISTERED BUSINESS
            </small>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noreferrer"
          className="navbar-cta"
        >
          WhatsApp Us
        </a>

        {/* MOBILE TOGGLE */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-drawer ${menuOpen ? "show" : ""}`}>

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/gallery" onClick={closeMenu}>
          Gallery
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noreferrer"
          className="mobile-whatsapp"
        >
          Contact on WhatsApp
        </a>

      </div>

    </header>
  );
}

export default Navbar;