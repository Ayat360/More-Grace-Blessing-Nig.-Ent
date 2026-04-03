import React from "react";
import bucketImg from "../assets/images/bucket.jpg";
import platesImg from "../assets/images/plates.jpg";
import bowlsImg from "../assets/images/bowls.jpg";
import basinImg from "../assets/images/basin.jpg";
import containerImg from "../assets/images/container.jpg";
import spoonImg from "../assets/images/spoon-set.jpg";

function Products() {
  const products = [
    {
      title: "Buckets & Basins",
      category: "Household Utility",
      image: bucketImg,
      description:
        "Strong and practical plastic buckets and basins suitable for home, shop, and everyday use.",
    },
    {
      title: "Plates & Bowls",
      category: "Kitchen Essentials",
      image: platesImg,
      description:
        "Durable everyday plates and bowls designed for family use, resale, and convenience.",
    },
    {
      title: "Kitchen Utensils",
      category: "Daily Use Items",
      image: spoonImg,
      description:
        "Useful plastic kitchen utensils made for serving, storage, and practical household tasks.",
    },
    {
      title: "Storage Containers",
      category: "Home Organization",
      image: containerImg,
      description:
        "Functional storage containers that help keep food items and household essentials organized.",
    },
    {
      title: "Bowls & Serving Sets",
      category: "Household Plastic",
      image: bowlsImg,
      description:
        "Neat and useful serving bowls and household sets for daily home use and reselling.",
    },
    {
      title: "Basins & Accessories",
      category: "Bulk Supply Ready",
      image: basinImg,
      description:
        "Reliable plastic accessories and basins available for individual and bulk customer needs.",
    },
  ];

  return (
    <section className="products-page">
      {/* HERO */}
      <div className="products-hero reveal">
        <div className="products-hero-text">
          <span>Our Product Collection</span>
          <h1>Practical Plastic Products for Homes, Shops & Bulk Buyers</h1>
          <p>
            Explore our range of durable household plastic products designed for
            everyday use, retail supply, and practical customer needs.
          </p>
        </div>
      </div>

      {/* PRODUCT SHOWCASE */}
      <div className="products-showcase reveal">
        <div className="products-showcase-head">
          <div>
            <span>Product Categories</span>
            <h2>Explore Our Available Product Lines</h2>
          </div>
          <p>
            Carefully selected household plastic essentials built for everyday
            convenience, durability, and business-friendly supply.
          </p>
        </div>

        <div className="modern-products-grid">
          {products.map((product, index) => (
            <div className="modern-product-card" key={index}>
              <div className="modern-product-image">
                <img src={product.image} alt={product.title} />
                <span className="product-badge">{product.category}</span>
              </div>

              <div className="modern-product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="product-enquiry-btn"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="products-trust-strip reveal">
        <div className="trust-pill">Durable Everyday Products</div>
        <div className="trust-pill">Retail & Wholesale Supply</div>
        <div className="trust-pill">Bulk Orders Supported</div>
        <div className="trust-pill">Practical Household Utility</div>
      </div>
    </section>
  );
}

export default Products;