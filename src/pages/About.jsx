import React from "react";
import bucketImg from "../assets/images/bucket.jpg";
import bowlsImg from "../assets/images/bowls.jpg";

function About() {
  const values = [
    {
      title: "Quality Products",
      text: "We focus on supplying durable and practical household plastic products customers can rely on every day.",
    },
    {
      title: "Customer Trust",
      text: "We believe in building long-term relationships through honest service, dependable supply, and consistency.",
    },
    {
      title: "Business Support",
      text: "We serve both individual buyers and bulk customers with flexible supply support and responsive communication.",
    },
    {
      title: "Affordable Value",
      text: "Our goal is to provide quality products at practical prices that work for homes, shops, and resellers.",
    },
  ];

  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero reveal">
        <div className="about-hero-text">
          <span>About Our Business</span>
          <h1>Built on Practical Products, Honest Service & Reliable Supply</h1>
          <p>
            MORE GRACE & BLESSING NIGERIA ENTERPRISE is committed to supplying
            quality household plastic products that serve everyday needs for
            homes, retailers, resellers, and bulk buyers.
          </p>
        </div>

        <div className="about-hero-image">
          <img src={bucketImg} alt="Plastic products business" />
        </div>
      </div>

      {/* STORY */}
      <div className="about-story-section reveal">
        <div className="about-story-card">
          <span>Who We Are</span>
          <h2>A Business Focused on Everyday Utility</h2>
          <p>
            Our business is built around supplying useful household plastic
            products that customers genuinely need — from buckets and bowls to
            plates, basins, containers, and more.
          </p>
          <p>
            We understand that customers are not just looking for products —
            they are looking for durability, affordability, and a supplier they
            can trust consistently.
          </p>
        </div>

        <div className="about-story-image">
          <img src={bowlsImg} alt="Household plastic products" />
        </div>
      </div>

      {/* VALUES */}
      <div className="about-values-section reveal">
        <div className="section-header">
          <span>What We Stand For</span>
          <h2>The Values Behind Our Business</h2>
          <p>
            Everything we do is guided by reliability, usefulness, and service
            that makes buying easier for customers.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <div className="about-value-card" key={index}>
              <div className="value-icon">{index + 1}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <div className="about-mission-section reveal">
        <div className="about-mission-box">
          <span>Our Mission</span>
          <h2>To Deliver Everyday Plastic Products with Reliability and Value</h2>
          <p>
            Our mission is simple: to make quality household plastic products
            easily available to customers while maintaining dependable service,
            fair pricing, and long-term trust.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;