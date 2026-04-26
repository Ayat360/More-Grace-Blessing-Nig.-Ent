import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-badge">MORE GRACE & BLESSING</span>
          <h2>NIGERIA ENTERPRISE</h2>
          <p>
            Supplying durable household plastic products for homes, retailers,
            resellers, and bulk buyers with reliable service and practical value.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <p>Buckets & Basins</p>
            <p>Plates & Bowls</p>
            <p>Kitchen Utensils</p>
            <p>Storage Containers</p>
          </div>

          <div className="footer-column">
            <h3>Business Info</h3>
            <p>Lagos, Nigeria</p>
            <p>Retail & Wholesale Supply</p>
            <p>Mon - Sat: 8AM - 6PM</p>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MORE GRACE & BLESSING NIGERIA ENTERPRISE. All rights reserved.</p>
        <div className="footer-socials">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
  >
    <FaFacebook />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram />
  </a>
</div>
        <span>Built for trust, supply, and everyday value.</span>
      </div>
    </footer>
  );
}

export default Footer;