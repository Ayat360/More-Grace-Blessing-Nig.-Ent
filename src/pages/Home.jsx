import React, { useState, useEffect } from "react";
  
import { Link } from "react-router-dom";
  
import bucketImg from "../assets/images/bucket.jpg";
  
import platesImg from "../assets/images/plates.jpg";
  
import bowlsImg from "../assets/images/bowls.jpg";
  
import basinImg from "../assets/images/basin.jpg";
  
import containerImg from "../assets/images/container.jpg";
  
import spoonImg from "../assets/images/spoon-set.jpg";
  
import heroImg from "../assets/images/hero-plastic.jpg";
  

  
// =========================
  
// COUNT UP HOOK (ADD HERE)
  
// =========================
  
const useCountUp = (end, duration = 1500, trigger = true) => {
  
  const [count, setCount] = useState(0);
  
  useEffect(() => {
  
    if (!trigger) return;
  

  
    let start = 0;
  
    const increment = end / (duration / 16);
  

  
    const counter = setInterval(() => {
  
      start += increment;
  

  
      if (start >= end) {
  
        clearInterval(counter);
  
        setCount(end);
  
      } else {
  
        setCount(Math.floor(start));
  
      }
  
    }, 16);
  

  
    return () => clearInterval(counter);
  
  }, [end, duration, trigger]);
  

  
  return count;
  
};
  

  
function Home() {
  
    const [startCount, setStartCount] = useState(false);
  
    const [openFaq, setOpenFaq] = useState(null);

    const [reviews, setReviews] = useState([
  {
    name: "Aisha M.",
    text: "Very durable products. Delivery was fast and professional.",
  },

  {
    name: "Kunle A.",
    text: "Best plastic supplier I’ve worked with in Lagos honestly.",
  },
]);

const [reviewForm, setReviewForm] = useState({
  name: "",
  text: "",
});

const handleReviewSubmit = async (e) => {
  e.preventDefault();

  if (!reviewForm.name || !reviewForm.text) return;

  try {
    const response = await fetch("https://more-grace-blessing-nig-ent.onrender.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: reviewForm.name,
        text: reviewForm.text,
      }),
    });

    const data = await response.json();
console.log(data);

    setReviews((prev) => [
      {
        id: Date.now(),
        name: reviewForm.name,
        text: reviewForm.text,
      },
      ...prev,
    ]);

    setReviewForm({
      name: "",
      text: "",
    });

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetch("http://127.0.0.1:5000/reviews")
    .then((res) => res.json())
    .then((data) => setReviews(data))
    .catch((err) => console.log(err));
}, []);
  
    useEffect(() => {
  
  const handleScroll = () => {
  
    const section = document.querySelector(".stats-section");
  
    if (!section) return;
  

  
    const rect = section.getBoundingClientRect();
  

  
    if (rect.top < window.innerHeight - 100) {
  
      setStartCount(true);
  
    }
  
  };
  

  
  window.addEventListener("scroll", handleScroll);
  
  handleScroll();
  

  
  return () => window.removeEventListener("scroll", handleScroll);
  
}, []);
  

  
    const productsCount = useCountUp(100, 1500, startCount);
  
const buyersCount = useCountUp(50, 1500, startCount);
  

  
    useEffect(() => {
  
      document.title = "Home | More Grace & Blessing Nigeria Enterprise";
  
    }, []);
  

  
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
  
{/* PREMIUM HERO SECTION */}
  
<section className="premium-hero">
  
  <div className="premium-hero-content">
  
    {/* LEFT SIDE */}
  
    <div className="premium-hero-text">
  
      <span className="hero-tag">Trusted Household Plastic Supplier</span>
  

  
      <h1>
  
        Durable Plastic Products for
  
        <br />
  
        Homes, Retailers & Bulk Buyers
  
      </h1>
  

  
      <p>
  
        MORE GRACE & BLESSING NIGERIA ENTERPRISE supplies practical and
  
        durable household plastic products designed for everyday use, retail
  
        supply, and dependable bulk purchase needs.
  
      </p>
  

  
      <div className="premium-hero-buttons">
  
        <a href="/gallery" className="hero-primary-btn">
  
          Explore Products
  
        </a>
  

  
        <a
  
          href="https://wa.me/2348026312854"
  
          target="_blank"
  
          rel="noreferrer"
  
          className="hero-secondary-btn"
  
        >
  
          Chat on WhatsApp
  
        </a>
  
      </div>
  

  
      <div className="hero-trust-badges">
  
        <div className="hero-badge">Reliable Product Supply</div>
  
        <div className="hero-badge">Retail & Wholesale Orders</div>
  
        <div className="hero-badge">Business-Friendly Service</div>
  
      </div>
  
    </div>
  

  
    {/* RIGHT SIDE */}
  
    <div className="premium-hero-visual">
  
      <div className="hero-main-card">
  
        <img
  
          src={heroImg}
  
          alt="Plastic Household Products"
  
        />
  
      </div>
  

  
      <div className="hero-floating-card top-card">
  
        <span>Top Category</span>
  
        <h4>Household Utility</h4>
  
        <p>Buckets, Basins & Everyday Essentials</p>
  
      </div>
  

  
      <div className="hero-floating-card bottom-card">
  
        <span>Business Ready</span>
  
        <h4>Bulk Orders Supported</h4>
  
        <p>Reliable supply for homes, retailers, and resellers</p>
  
      </div>
  
    </div>
  
  </div>
  
</section>
  
{/* ENTERPRISE INFO STRIP */}
  

  
<section className="enterprise-strip">
  

  
  <div className="enterprise-strip-grid">
  

  
    <div className="enterprise-strip-item">
  
      <h4>Lagos Based</h4>
  
      <p>Reliable household plastic supplier</p>
  
    </div>
  

  
    <div className="enterprise-strip-item">
  
      <h4>Retail & Wholesale</h4>
  
      <p>Flexible supply for businesses and homes</p>
  
    </div>
  

  
    <div className="enterprise-strip-item">
  
      <h4>Fast Response</h4>
  
      <p>Quick communication through WhatsApp</p>
  
    </div>
  

  
    <div className="enterprise-strip-item">
  
      <h4>Trusted Service</h4>
  
      <p>Focused on quality and reliability</p>
  
    </div>
  

  
  </div>
  

  
</section>
  
{/* STATSTRUST */}
  
<section className="stats-section reveal">
  
<div className="stats-marquee">
  
  <div className="stats-track">
  

  
    <div className="stat-card">
  
      <div className="stat-line"></div>
  
      <h3>{productsCount}+</h3>
  
      <p>Products Supplied</p>
  
    </div>
  

  
    <div className="stat-card">
  
      <div className="stat-line"></div>
  
      <h3>{buyersCount}+</h3>
  
      <p>Happy Buyers</p>
  
    </div>
  

  
    <div className="stat-card">
  
      <div className="stat-line"></div>
  
      <h3>Bulk</h3>
  
      <p>Retail & Wholesale</p>
  
    </div>
  

  
    <div className="stat-card">
  
      <div className="stat-line"></div>
  
      <h3>Reliable</h3>
  
      <p>Business Service</p>
  
    </div>
  

  
    {/* duplicate for loop */}
  
    <div className="stat-card">
  
      <div className="stat-line"></div>
  
      <h3>{productsCount}+</h3>
  
      <p>Products Supplied</p>
  
    </div>
  

  
    <div className="stat-card">
  
      <div className="stat-line"></div>
  
      <h3>{buyersCount}+</h3>
  
      <p>Happy Buyers</p>
  
    </div>
  

  
  </div>
  
</div>
  
</section>
  

  
     {/* BUSINESS ADVANTAGES */}
  

  
<section className="advantages-section reveal section-divider">
  

  
  <div className="advantages-header">
  
    <span>Business Advantages</span>
  

  
    <h2>
  
      Built Around Reliable Product Supply
  
    </h2>
  

  
    <p>
  
      MORE GRACE & BLESSING NIGERIA ENTERPRISE focuses on
  
      dependable household plastic products, business-friendly
  
      service, and consistent supply support for homes,
  
      retailers, and wholesale buyers.
  
    </p>
  
  </div>
  

  
  <div className="advantages-layout">
  

  
    {/* LEFT */}
  

  
    <div className="advantages-main-card">
  

  
      <div className="advantage-number">
  
        01
  
      </div>
  

  
      <h3>
  
        Reliable Everyday Products
  
      </h3>
  

  
      <p>
  
        Our household plastic products are selected to support
  
        practical daily use with durability, affordability,
  
        and dependable availability.
  
      </p>
  

  
    </div>
  

  
    {/* RIGHT */}
  

  
    <div className="advantages-grid">
  

  
      <div className="advantage-mini-card">
  
        <h4>Wholesale Support</h4>
  

  
        <p>
  
          Flexible supply for retailers, distributors,
  
          and repeat business orders.
  
        </p>
  
      </div>
  

  
      <div className="advantage-mini-card">
  
        <h4>Fast Communication</h4>
  

  
        <p>
  
          Easy customer inquiries and order discussions
  
          through WhatsApp support.
  
        </p>
  
      </div>
  

  
      <div className="advantage-mini-card">
  
        <h4>Consistent Availability</h4>
  

  
        <p>
  
          Product categories designed around everyday
  
          household demand.
  
        </p>
  
      </div>
  

  
      <div className="advantage-mini-card">
  
        <h4>Business Reliability</h4>
  

  
        <p>
  
          Focused on long-term customer trust and
  
          dependable supply relationships.
  
        </p>
  
      </div>
  

  
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
  
{reviews.map((review, index) => (
  <div className="review-card" key={index}>
    
    <div className="quote-mark">“</div>

    <p className="testimonial-modern-text">
      {review.text}
    </p>

    <div className="testimonial-user">
      
      <div className="testimonial-avatar">
        {review.name.charAt(0)}
      </div>

      <div>
        <h4>{review.name}</h4>
        <span>Verified Customer</span>
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
  
{/* CUSTOMER REVIEWS */}

<section className="customer-feedback-section reveal section-divider">

  <div className="feedback-top">

    <div className="feedback-intro">

      <span>
        CUSTOMER FEEDBACK
      </span>

      <h2>
        What Customers Say About Us
      </h2>

      <p>
        Real comments from customers and business buyers who trust our products and services.
      </p>
      <p  style ={{ color: 'red', fontStyle: 'italic' }} ><i>please if you have any feedback, please let us know!
        and it takes 50s for it to send</i></p>

    </div>

    <form
      className="feedback-form"
      onSubmit={handleReviewSubmit}
    >

      <input
        type="text"
        placeholder="Your Name"
        value={reviewForm.name}
        onChange={(e) =>
          setReviewForm({
            ...reviewForm,
            name: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Write your feedback..."
        rows="5"
        value={reviewForm.text}
        onChange={(e) =>
          setReviewForm({
            ...reviewForm,
            text: e.target.value,
          })
        }
      ></textarea>

      <button type="submit">
        Submit Review
      </button>

    </form>

  </div>

  <div className="feedback-grid">

    {reviews.map((review, index) => (

      <div className="feedback-card" key={index}>

        <div className="feedback-stars">
          ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        <p>
          {review.text}
        </p>

        <div className="feedback-user">

          <div className="feedback-avatar">
            {review.name.charAt(0)}
          </div>

          <div>
            <h4>
              {review.name}
            </h4>

            <span>
              Verified Customer
            </span>
          </div>

        </div>

      </div>

    ))}

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
