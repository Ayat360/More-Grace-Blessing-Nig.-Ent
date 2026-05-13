import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
<header className="enterprise-navbar">

  <div className="navbar-inner">

    {/* LEFT */}
    <Link
      to="/"
      className="navbar-brand"
      onClick={closeMenu}
    >
      <img
        src="/logo.png"
        alt="More Grace & Blessing"
        className="brand-logo"
      />

      <div className="brand-text">
        <h2>
          MORE GRACE & BLESSING
        </h2>

        <span>
          NIGERIA ENTERPRISE
        </span>

        <small className="cac-label">
          CAC REGISTERED BUSINESS
        </small>
      </div>
    </Link>

    {/* DESKTOP NAV */}
    <nav className="desktop-nav">

      <Link to="/">Home</Link>

      <Link to="/gallery">
        Gallery
      </Link>

      <Link to="/about">
        About
      </Link>

      <Link to="/contact">
        Contact
      </Link>

    </nav>

    {/* RIGHT CTA */}
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
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>

  {/* MOBILE MENU */}
  <div className={`mobile-drawer ${menuOpen ? "show" : ""}`}>

    <Link to="/" onClick={closeMenu}>
      Home
    </Link>

    <Link to="/gallery" onClick={closeMenu}>
      Gallery
    </Link>

    <Link to="/about" onClick={closeMenu}>
      About
    </Link>

    <Link to="/contact" onClick={closeMenu}>
      Contact
    </Link>

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