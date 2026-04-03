import React, { useState } from "react";
import { Link } from "react-router-dom";
import bucketImg from "../assets/images/bucket.jpg";
import platesImg from "../assets/images/plates.jpg";
import bowlsImg from "../assets/images/bowls.jpg";
import basinImg from "../assets/images/basin.jpg";
import containerImg from "../assets/images/container.jpg";
import spoonImg from "../assets/images/spoon-set.jpg";

function Home() {
    const [openFaq, setOpenFaq] = useState(0);
  const featuredProducts = [
    {
      name: "Durable Buckets",
      desc: "Strong and reliable buckets for home and commercial use.",
      image: bucketImg,
    },
    {
      name: "Plastic Plates",
      desc: "Quality reusable plates designed for everyday convenience.",
      image: platesImg,
    },
    {
      name: "Kitchen Bowls",
      desc: "Versatile bowls for kitchens, food prep, and storage needs.",
      image: bowlsImg,
    },
  ];

const categories = [
  {
    title: "Buckets & Basins",
    image: basinImg,
  },
  {
    title: "Plates & Bowls",
    image: platesImg,
  },
  {
    title: "Kitchen Utensils",
    image: spoonImg,
  },
  {
    title: "Storage Containers",
    image: containerImg,
  },
  {
    title: "Household Essentials",
    image: bucketImg,
  },
  {
    title: "Plastic Accessories",
    image: bowlsImg,
  },
];

  const trustStats = [
    { number: "100+", label: "Products Supplied" },
    { number: "50+", label: "Happy Buyers" },
    { number: "Bulk", label: "Retail & Wholesale Orders" },
    { number: "Reliable", label: "Business Service" },
  ];

const testimonials = [
  {
    name: "Retail Buyer",
    role: "Store Reseller",
    text: "Their products are strong, neat, and easy to resell. Delivery and communication were smooth.",
  },
  {
    name: "Household Customer",
    role: "Home Buyer",
    text: "We bought bowls and buckets and the quality was honestly better than what we expected.",
  },
  {
    name: "Business Customer",
    role: "Bulk Supply Client",
    text: "A reliable supplier for practical plastic products. Good for repeat orders and business use.",
  },
];

const faqs = [
  {
    question: "Do you sell in bulk?",
    answer:
      "Yes, we support both retail and wholesale orders for business owners, resellers, and individual customers.",
  },
  {
    question: "Can I place an order through WhatsApp?",
    answer:
      "Yes, you can contact us directly on WhatsApp for product inquiries, order discussions, and quick responses.",
  },
  {
    question: "What kind of plastic products do you supply?",
    answer:
      "We supply practical household plastic products such as buckets, bowls, plates, basins, storage containers, and kitchen utensils.",
  },
  {
    question: "Do you supply products for shops and resellers?",
    answer:
      "Yes, we provide products for retail shops, resellers, and business buyers who need dependable plastic household items in quantity.",
  },
];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section reveal">
        <div className="hero-text">
          <span className="hero-badge">Trusted Plastic Products Supplier</span>
          <h1>Quality Plastic Products for Homes & Businesses</h1>
          <p>
            MORE GRACE & BLESSING NIGERIA ENTERPRISE delivers durable,
            affordable, and practical household plastic products for families,
            retailers, and bulk buyers.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-btn btn-link">
              View Products
            </Link>
            <Link to="/contact" className="secondary-btn btn-link">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={bucketImg} alt="Plastic household products" />
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="stats-section reveal">
        <div className="stats-grid">
          {trustStats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-section reveal section-divider">
        <div className="section-header">
          <span>Featured Products</span>
          <h2>Reliable Products Built for Everyday Use</h2>
          <p>
            Explore some of our most in-demand household plastic products trusted by customers.
          </p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <div className="product-card-content">
                <span className="product-badge">Best Seller</span>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="product-order-btn"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section reveal section-divider">
        <div className="section-header">
          <span>Why Choose Us</span>
          <h2>Why Customers Trust Our Products</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <h3>Quality Materials</h3>
            <p>Our products are built to last and serve everyday household needs effectively.</p>
          </div>

          <div className="why-card">
            <h3>Affordable Pricing</h3>
            <p>We offer practical pricing for both individual buyers and wholesale customers.</p>
          </div>

          <div className="why-card">
            <h3>Bulk Supply</h3>
            <p>Perfect for retailers, distributors, and business owners buying in quantity.</p>
          </div>

          <div className="why-card">
            <h3>Trusted Service</h3>
            <p>We focus on reliability, customer satisfaction, and long-term business relationships.</p>
          </div>
        </div>
      </section>

      {/* BUSINESS BUYERS SECTION */}
      <section className="business-section reveal section-divider">
        <div className="business-content">
          <div className="business-text">
            <span>Business Supply Advantage</span>
            <h2>Built for Homes, Shops, Resellers & Bulk Buyers</h2>
            <p>
              Whether you are buying for personal use, resale, store supply,
              or commercial distribution, we provide practical household plastic
              products with dependable service and flexible order support.
            </p>

            <ul className="business-list">
              <li>Bulk order support for resellers and retailers</li>
              <li>Reliable product availability</li>
              <li>Affordable pricing for repeat business</li>
              <li>Simple order communication through WhatsApp</li>
            </ul>

            <Link to="/contact" className="primary-btn btn-link">
              Request Supply
            </Link>
          </div>

          <div className="business-image">
            <img src={platesImg} alt="Business supply products" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
<section className="categories-section reveal section-divider">
  <div className="section-header">
    <span>Our Categories</span>
    <h2>Products for Every Household Need</h2>
    <p>
      Explore our product families designed for homes, resellers, and everyday use.
    </p>
  </div>

  <div className="curve-carousel-wrapper">
    <button
      className="curve-arrow left"
      onClick={() => {
        document.getElementById("curveCarousel").scrollBy({
          left: -320,
          behavior: "smooth",
        });
      }}
    >
      ←
    </button>

    <div className="curve-carousel" id="curveCarousel">
      {categories.map((category, index) => (
        <div className="curve-slide" key={index}>
          <div className="curve-slide-inner">
            <img src={category.image} alt={category.title} />
            <div className="curve-slide-overlay">
              <h3>{category.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      className="curve-arrow right"
      onClick={() => {
        document.getElementById("curveCarousel").scrollBy({
          left: 320,
          behavior: "smooth",
        });
      }}
    >
      →
    </button>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="testimonial-section reveal section-divider">
  <div className="testimonial-layout">
    <div className="testimonial-intro">
      <span>Customer Feedback</span>
      <h2>Trusted by Buyers Who Care About Quality</h2>
      <p>
        From home users to retailers and bulk buyers, our customers choose us
        for practical products, reliable service, and business-friendly support.
      </p>

      <div className="testimonial-mini-stats">
        <div className="mini-stat">
          <h3>Reliable</h3>
          <p>Supply Experience</p>
        </div>
        <div className="mini-stat">
          <h3>Bulk</h3>
          <p>Order Support</p>
        </div>
        <div className="mini-stat">
          <h3>Trusted</h3>
          <p>Customer Service</p>
        </div>
      </div>
    </div>

    <div className="testimonial-modern-grid">
      {testimonials.map((item, index) => (
        <div className="testimonial-modern-card" key={index}>
          <div className="quote-mark">“</div>
          <p className="testimonial-modern-text">{item.text}</p>
          <div className="testimonial-user">
            <div className="testimonial-avatar">
              {item.name.charAt(0)}
            </div>
            <div>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ */}
<section className="faq-section reveal section-divider">
  <div className="faq-modern-layout">
    <div className="faq-intro">
      <span>Frequently Asked Questions</span>
      <h2>Everything Buyers Usually Want to Know</h2>
      <p>
        Here are quick answers to the most common questions customers ask before placing an order.
      </p>
    </div>

    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${openFaq === index ? "active" : ""}`}
          key={index}
        >
          <button
            className="faq-question"
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
          </button>

          <div className={`faq-answer-wrap ${openFaq === index ? "show" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA SECTION */}
      <section className="cta-section reveal section-divider">
        <div className="cta-box">
          <h2>Need Durable Household Plastic Products?</h2>
          <p>
            Contact MORE GRACE & BLESSING NIGERIA ENTERPRISE today for reliable
            supply, bulk orders, and quality service.
          </p>
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noreferrer"
            className="primary-btn cta-link-btn"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;