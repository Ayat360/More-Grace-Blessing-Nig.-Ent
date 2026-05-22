import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

function Footer() {
  return (
<footer className="enterprise-footer">

  <div className="footer-container">

    {/* COLUMN 1 */}

    <div className="footer-brand">

      <img
        src="/footerlogo.png"
        alt="More Grace & Blessing"
        className="footer-logo"
      />

      <h2>
        MORE GRACE & BLESSING
      </h2>

      <span>
        NIGERIA ENTERPRISE
      </span>

      <p>
        Trusted supplier of practical household plastic
        products for homes, retailers, and wholesale buyers.
      </p>

      <div className="footer-cac-badge">

  <FaCheckCircle />

  <span>
    CAC VERIFIED BUSINESS
  </span>

</div>

    </div>

    {/* COLUMN 2 */}

    <div className="footer-column">

      <h3>Quick Links</h3>

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

    </div>

    {/* COLUMN 3 */}

    <div className="footer-column">

      <h3>Business Info</h3>

      <p>Lagos, Nigeria</p>

      <p>Retail & Wholesale Supply</p>

      <p>Household Plastic Products</p>

      <p>Fast WhatsApp Response</p>

    </div>

    {/* COLUMN 4 */}

    <div className="footer-column">

      <h3>Contact</h3>

      <a
        href="https://wa.me/2348000000000"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <a href="mailto:info@moregrace.com">
        info@moregrace.com
      </a>

     <div className="footer-socials">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <>
  <FaFacebookF />
  <span>Facebook</span>
</>
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <>
  <FaInstagram />
  <span>Instagram</span>
</>
  </a>

  <a
    href="https://wa.me/2348026312854"
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
  >
    <>
  <FaWhatsapp />
  <span>WhatsApp</span>
</>
  </a>

</div>

    </div>

  </div>

  {/* BOTTOM */}

  <div className="footer-bottom">

    <p>
      © 2026 MORE GRACE & BLESSING NIGERIA ENTERPRISE.
      All rights reserved.
    </p>

  </div>

</footer>
  );
}

export default Footer;