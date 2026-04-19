import React, { useState, useEffect } from "react";

const categories = ["Buckets", "Basins", "Plates", "Containers"];

const descriptions = {
  Buckets:
    "Durable household bucket designed for water storage, cleaning, and everyday home use.",
  Basins:
    "Strong plastic basin suitable for laundry, washing, and general household tasks.",
  Plates:
    "Lightweight and durable plastic plates designed for daily family meals and events.",
  Containers:
    "Multi-purpose storage container for food preservation and household organization.",
};


const galleryData = Array.from({ length: 50 }, (_, i) => {
  const category = categories[i % categories.length];

  return {
    id: i + 1,
    category,
    title: `${category} Product ${i + 1}`,
    image: "/images/gallery/placeholder.jpg",
    details: descriptions[category],
  };
});

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);
  const [loading, setLoading] = useState(true);

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
        onClick={() => setActiveItem(item)}
      >
        <img src={item.image} alt={item.title} />

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