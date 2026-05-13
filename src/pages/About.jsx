import React, { useEffect } from "react";
import aboutImg from "../assets/images/hero-plastic.jpg";

export default function About() {

  useEffect(() => {
    document.title =
      "About | More Grace & Blessing Nigeria Enterprise";
  }, []);

  return (
    <section className="about-page">

      {/* HERO */}

      <div className="about-hero">

        <div className="about-hero-text">

          <span className="about-tag">
            About Our Company
          </span>

          <h1>
            Trusted Household Plastic Product Supplier
            in Nigeria
          </h1>

          <p>
            MORE GRACE & BLESSING NIGERIA ENTERPRISE
            is committed to supplying practical,
            durable, and affordable household plastic
            products for homes, retailers, resellers,
            and wholesale buyers.
          </p>

        </div>

        <div className="about-hero-image">
          <img src={aboutImg} alt="About Company" />
        </div>

      </div>

      {/* STORY */}

      <div className="about-story">

        <div className="about-story-card">

          <h2>Who We Are</h2>

          <p>
            We are a Nigerian enterprise focused on
            delivering reliable household plastic
            products that support everyday living,
            retail businesses, and commercial supply needs.
          </p>

          <p>
            Our business is built on consistency,
            customer satisfaction, dependable supply,
            and practical value for buyers.
          </p>

        </div>

        <div className="about-story-card">

          <h2>What We Supply</h2>

          <ul>

            <li>Buckets & Basins</li>

            <li>Plastic Plates & Bowls</li>

            <li>Storage Containers</li>

            <li>Kitchen Utensils</li>

            <li>Household Essentials</li>

          </ul>

        </div>

      </div>

      {/* VALUES */}

      <div className="about-values">

        <div className="value-card">
          <h3>Quality</h3>
          <p>
            Durable products designed for everyday use.
          </p>
        </div>

        <div className="value-card">
          <h3>Reliability</h3>
          <p>
            Consistent service and dependable supply support.
          </p>
        </div>

        <div className="value-card">
          <h3>Business Friendly</h3>
          <p>
            Supporting retailers, resellers, and bulk buyers.
          </p>
        </div>

      </div>

      {/* CTA */}

      <div className="about-cta">

        <h2>
          Looking for Reliable Plastic Product Supply?
        </h2>

        <p>
          Contact us today for product inquiries,
          wholesale supply, and business orders.
        </p>

        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noreferrer"
          className="about-btn"
        >
          Contact on WhatsApp
        </a>

      </div>

    </section>
  );
}