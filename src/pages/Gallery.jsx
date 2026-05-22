import React, { useState, useEffect } from "react";

const categories = ["Buckets", "Basins", "Plates", "Containers", "Flask", "chairs", "drums", "cup"];

const galleryData = [
  {
    id: 1,
    category: "Buckets",
    title: "Heavy Duty Water Bucket",
    code: "MG-001",
    status: "Available",
    image: "/images/products/bucket1.jpg",
    details:
      "Strong plastic bucket designed for water storage and daily household use.",
  },

  {
    id: 2,
    category: "Buckets",
    title: "Premium Household Bucket",
    code: "MG-002",
    status: "In Stock",
    image: "/images/products/bucket2.jpg",
    details:
      "Durable bucket suitable for cleaning and outdoor use.",
  },

  {
    id: 3,
    category: "Basins",
    title: "Laundry Basin Large Size",
    code: "MG-003",
    status: "Available",
    image: "/images/products/basin1.jpg",
    details:
      "Large basin ideal for washing clothes and home chores.",
  },

  {
    id: 4,
    category: "Plates",
    title: "Small Plate Set",
    code: "MG-004",
    status: "In Stock",
    image: "/images/products/plate1.jpg",
    details:
      "Lightweight plastic plates perfect for daily meals.",
  },

  {
    id: 5,
    category: "Containers",
    title: "Food Storage Container",
    code: "MG-005",
    status: "Available",
    image: "/images/products/container1.jpg",
    details:
      "Airtight container for storing food safely.",
  },

  {
    id: 6,
    category: "Flask",
    title: "Insulated Water Flask",
    code: "MG-006",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/flask1.jpg",
    details:
      "Insulated Water flask.",
  },

   {
    id: 7,
    category: "Flask",
    title: "Insulated Food Flask",
    code: "MG-007",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/flask2.jpg",
    details:
      "Insulated food flask suitable for preserving meal temperature.",
  },

   {
    id: 8,
    category: "Flask",
    title: "Insulated Water Flask",
    code: "MG-008",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/flask3.jpg",
    details:
      "Insulated Office Water flask.",
  },

   {
    id: 9,
    category: "Flask",
    title: "Insulated Food Flask",
    code: "MG-009",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/flask4.jpg",
    details:
      "Insulated food flask suitable for preserving meal temperature.",
  },

   {
    id: 10,
    category: "Flask",
    title: "Insulated Food Flask",
    code: "MG-010",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/flask5.jpg",
    details:
      "Insulated Water flask.",
  },

  {
    id: 11,
    category: "Plates",
    title: "Family Dining Plate Set",
    code: "MG-011",
    status: "In Stock",
    image: "/images/products/plate2.jpg",
    details:
      "Lightweight plastic plates perfect for daily meals.",
  },

  {
    id: 12,
    category: "Plates",
    title: "Family Dining Plate Set",
    code: "MG-012",
    status: "In Stock",
    image: "/images/products/plate3.jpg",
    details:
      "Lightweight plastic plates perfect for daily meals.",
  },

  {
    id: 13,
    category: "Plates",
    title: "Unbreakable Plate Set",
    code: "MG-013",
    status: "In Stock",
    image: "/images/products/plate4.jpg",
    details:
      "Lightweight plastic plates perfect for daily meals.",
  },

    {
    id: 14,
    category: "chairs",
    title: "Unbreakable Chair Set",
    code: "MG-014",
    status: "In Stock",
    image: "/images/products/chairs1.jpg",
    details:
      "Lightweight plastic chairs perfect for daily use.",
  },

    {
    id: 15,
    category: "chairs",
    title: "Unbreakable Chair Set",
    code: "MG-015",
    status: "In Stock",
    image: "/images/products/chairs2.jpg",
    details:
      "Lightweight plastic chairs perfect for daily use.",
  },

  {
    id: 16,
    category: "chairs",
    title: "Unbreakable Chair Set",
    code: "MG-016",
    status: "In Stock",
    image: "/images/products/chairs3.jpg",
    details:
      "Lightweight plastic chairs perfect for daily use.",
  },

  {
    id: 17,
    category: "chairs",
    title: "Unbreakable Chair Set",
    code: "MG-017",
    status: "In Stock",
    image: "/images/products/chairs4.jpg",
    details:
      "Lightweight plastic chairs perfect for daily use.",
  },

    {
    id: 18,
    category: "Buckets",
    title: "Premium Household Bucket",
    code: "MG-018",
    status: "In Stock",
    image: "/images/products/bucket3.jpg",
    details:
      "Durable bucket suitable for cleaning and outdoor use.",
  },

  {
    id: 19,
    category: "drums",
    title: "Premium Household Drum",
    code: "MG-019",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/drum1.jpg",
    details:
      "Durable drum suitable for cleaning and outdoor use.",
  },

  {
    id: 20,
    category: "drums",
    title: "Premium Household Drum",
    code: "MG-020",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/drum2.jpg",
    details:
      "Durable drum suitable for cleaning and outdoor use.",
  },

  {
    id: 21,
    category: "Buckets",
    title: "Premium Household Bucket",
    code: "MG-021",
    status: "In Stock",
    image: "/images/products/bucket4.jpg",
    details:
      "Durable bucket suitable for cleaning and outdoor use.",
  },

  {
    id: 22,
    category: "Buckets",
    title: "Premium Household Bucket",
    code: "MG-022",
    status: "In Stock",
    image: "/images/products/bucket5.jpg",
    details:
      "Durable bucket suitable for cleaning and outdoor use.",
  },

  {
    id: 23,
    category: "Containers",
    title: "Food Storage Container",
    code: "MG-023",
    status: "Available",
    image: "/images/products/container2.jpg",
    details:
      "Airtight container for storing food safely.",
  },

  {
    id: 24,
    category: "Containers",
    title: "Food Storage Container",
    code: "MG-024",
    status: "Available",
    image: "/images/products/container3.jpg",
    details:
      "Container for storing salt safely.",
  },

  {
    id: 25,
    category: "cup",
    title: "Cup Set",
    code: "MG-025",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/cup1.jpg",
    details:
      "Tea cup suitable for daily use.",
  },

  {
    id: 26,
    category: "cup",
    title: "Cup Set",
    code: "MG-026",
    status: "Bulk Ready for Supply Only",
    image: "/images/products/cup2.jpg",
    details:
      "Tea cup suitable for daily use.",
  },
];

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [quickView, setQuickView] = useState(null);

  useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 600);
  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    document.title = "Gallery | More Grace & Blessing Nigeria Enterprise";
  }, []);

  const filtered = galleryData.filter((item) => {
    const matchCategory = filter === "All" || item.category === filter;

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const highlightText = (text, query) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
};

  return (
    <section className="gallery-page">
      <div className="gallery-container">

        <div className="gallery-topbar">

  <div>
    <h1 className="gallery-title">
      Product Catalog
    </h1>

    <p className="gallery-subtitle">
      Explore our available household plastic products
      for retail, wholesale, and commercial supply.
    </p>
  </div>

  <div className="gallery-count">
    {filtered.length} Products
  </div>

</div>

        {/* SEARCH BAR */}
        <div className="gallery-search">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTERS */}
        <div className="gallery-filters">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="gallery-grid">

  {loading ? (
    Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="skeleton-card"></div>
    ))
  ) : filtered.length === 0 ? (
    <div className="no-results">
      <h3>No products found</h3>
      <p>Try adjusting your search or category filter.</p>
    </div>
  ) : (
filtered.map((item) => (
  <div className="gallery-card" key={item.id}>

    <div className="gallery-image-wrap">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
      />
    </div>

<div className="gallery-content">

  <div className="gallery-meta-top">

    <span className="gallery-category">
      {item.category}
    </span>

    <span className="product-status">
      {item.status}
    </span>

  </div>

  <h3>
    {highlightText(item.title, search)}
  </h3>

  <p>{item.details}</p>

  <div className="product-code">
    Product Code: {item.code}
  </div>

  <button
    className="gallery-view-btn"
    onClick={() => setQuickView(item)}
  >
    View Details
  </button>

</div>

  </div>
))
  )}

</div>

        {filtered.length === 0 && (
  <div className="no-results">
    <h3>No products found</h3>
    <p>Try adjusting your search or category filter.</p>
  </div>
)}

{quickView && (
  <div
    className="details-overlay"
    onClick={() => setQuickView(null)}
  >
    <div
      className="details-panel"
      onClick={(e) => e.stopPropagation()}
    >

      {/* LEFT IMAGE */}
      <div className="details-image">
        <img
          src={quickView.image}
          alt={quickView.title}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="details-content">

        <span className="details-category">
          {quickView.category}
        </span>

        <h2>{quickView.title}</h2>

        <p>{quickView.details}</p>
        <div className="details-meta">

  <div className="details-meta-item">
    <span>Product Code</span>
    <strong>{quickView.code}</strong>
  </div>

  <div className="details-meta-item">
    <span>Status</span>
    <strong>{quickView.status}</strong>
  </div>

  <div className="details-meta-item">
    <span>Category</span>
    <strong>{quickView.category}</strong>
  </div>

</div>

        <div className="details-actions">

          <a
            href="https://wa.me/2348026312854"
            target="_blank"
            rel="noreferrer"
            className="details-btn primary"
          >
            Contact on WhatsApp
          </a>

          <button
            className="details-btn secondary"
            onClick={() => setQuickView(null)}
          >
            Close Preview
          </button>

        </div>

      </div>

    </div>
  </div>
)}
      </div>
    </section>
  );
}