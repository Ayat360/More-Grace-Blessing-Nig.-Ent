import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import bucketImg from "../assets/images/bucket.jpg";
import platesImg from "../assets/images/plates.jpg";
import bowlsImg from "../assets/images/bowls.jpg";
import basinImg from "../assets/images/basin.jpg";
import containerImg from "../assets/images/container.jpg";
import spoonImg from "../assets/images/spoon-set.jpg";

function Products() {
    useEffect(() => {
    document.title = "Products | More Grace & Blessing Nigeria Enterprise";
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Buckets & Basins",
      category: "Household Utility",
      image: bucketImg,
      description:
        "Strong and practical plastic buckets and basins suitable for home, shop, and everyday use.",
      details:
        "Available in multiple sizes and colors for domestic use, retail sale, and bulk customer supply.",
    },
    {
      title: "Plates & Bowls",
      category: "Kitchen Essentials",
      image: platesImg,
      description:
        "Durable everyday plates and bowls designed for family use, resale, and convenience.",
      details:
        "Designed for durability and daily use, with supply options for households and resellers.",
    },
    {
      title: "Kitchen Utensils",
      category: "Daily Use Items",
      image: spoonImg,
      description:
        "Useful plastic kitchen utensils made for serving, storage, and practical household tasks.",
      details:
        "Includes useful kitchen accessories suitable for regular home use and retail stock supply.",
    },
    {
      title: "Storage Containers",
      category: "Home Organization",
      image: containerImg,
      description:
        "Functional storage containers that help keep food items and household essentials organized.",
      details:
        "Ideal for food storage, home arrangement, and practical everyday household organization.",
    },
    {
      title: "Bowls & Serving Sets",
      category: "Kitchen Essentials",
      image: bowlsImg,
      description:
        "Neat and useful serving bowls and household sets for daily home use and reselling.",
      details:
        "Suitable for serving, home use, and customer demand in both retail and wholesale quantity.",
    },
    {
      title: "Basins & Accessories",
      category: "Household Utility",
      image: basinImg,
      description:
        "Reliable plastic accessories and basins available for individual and bulk customer needs.",
      details:
        "Useful for home chores, utility needs, and consistent bulk ordering support.",
    },
  ];

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

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

      {/* FILTERS */}
      <div className="products-filter-wrap reveal">
        <div className="products-filter-head">
          <span>Browse Categories</span>
          <h2>Find Products by Category</h2>
        </div>

        <div className="products-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="products-showcase reveal">
        <div className="modern-products-grid">
          {filteredProducts.map((product, index) => (
            <div className="modern-product-card" key={index}>
              <div className="modern-product-image">
                <img src={product.image} alt={product.title} />
                <span className="product-badge">{product.category}</span>
              </div>

              <div className="modern-product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <div className="product-actions">
                  <button
                    className="view-details-btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>

                  <a
                    href="https://wa.me/2348000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="product-enquiry-btn"
                  >
                    Enquire
                  </a>
                </div>
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

      {/* MODAL */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div
            className="product-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="product-modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="product-modal-image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>

            <div className="product-modal-content">
              <span>{selectedProduct.category}</span>
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
              <p>{selectedProduct.details}</p>

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
        </div>
      )}
    </section>
  );
}

export default Products;