import React, { useState, useEffect } from "react";

const categories = ["Buckets", "Basins", "Plates", "Containers"];

const galleryData = [
  {
    id: 1,
    category: "Buckets",
    title: "Heavy Duty Water Bucket",
    image: "/images/products/bucket1.jpg",
    details: "Strong plastic bucket designed for water storage and daily household use.",
  },
  {
    id: 2,
    category: "Buckets",
    title: "Premium Household Bucket",
    image: "/images/products/bucket2.jpg",
    details: "Durable bucket suitable for cleaning and outdoor use.",
  },
  {
    id: 3,
    category: "Basins",
    title: "Laundry Basin Large Size",
    image: "/images/products/basin1.jpg",
    details: "Large basin ideal for washing clothes and home chores.",
  },
  {
    id: 4,
    category: "Plates",
    title: "Family Dining Plate Set",
    image: "/images/products/plate1.jpg",
    details: "Lightweight plastic plates perfect for daily meals.",
  },
  {
    id: 5,
    category: "Containers",
    title: "Food Storage Container",
    image: "/images/products/container1.jpg",
    details: "Airtight container for storing food safely.",
  }
];

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);
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

        <h1 className="gallery-title">Product Gallery</h1>

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
      <div
        key={item.id}
        className="gallery-card"
        onClick={() => setQuickView(item)}
      >
      <img
  src={item.image}
  alt={item.title}
  loading="lazy"
/>

        <div className="gallery-info">
          <h4>{highlightText(item.title, search)}</h4>
          <span>{item.category}</span>
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
  <div className="quickview-overlay" onClick={() => setQuickView(null)}>
    <div
      className="quickview-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setQuickView(null)}
      >
        ×
      </button>

      <img src={quickView.image} alt={quickView.title} />

      <h2>{quickView.title}</h2>
      <p>{quickView.details}</p>

      <span className="tag">{quickView.category}</span>
    </div>
  </div>
)}

        {/* MODAL */}
        {activeItem && (
          <div
            className="modal-overlay show"
            onClick={() => setActiveItem(null)}
          >
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <img src={activeItem.image} alt={activeItem.title} />
              <h2>{activeItem.title}</h2>
              <p>{activeItem.details}</p>
              <button onClick={() => setActiveItem(null)}>Close</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}