import React, { useState, useEffect } from "react";

const galleryData = [
  {
    id: 1,
    category: "Buckets",
    image: "/images/gallery/bucket1.jpg",
    title: "Durable Bucket",
    details:
      "Strong, long-lasting plastic bucket suitable for household and commercial use.",
  },
  {
    id: 2,
    category: "Basins",
    image: "/images/gallery/basin1.jpg",
    title: "Heavy Duty Basin",
    details:
      "Multipurpose basin designed for laundry, kitchen, and storage use.",
  },
  {
    id: 3,
    category: "Spoons",
    image: "/images/gallery/spoon1.jpg",
    title: "Plastic Spoon Set",
    details:
      "High-quality reusable spoon set ideal for events and daily use.",
  },
];
const categories = ["All", "Buckets", "Basins", "Spoons"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    document.title = "Gallery | More Grace & Blessing Nigeria Enterprise";
  }, []);

  const filtered =
    filter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  return (
    <section className="gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Product Gallery</h1>

        {/* FILTERS */}
        <div className="gallery-filters">
          {categories.map((cat) => (
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
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveItem(item)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeItem && (
          <div className="modal-overlay" onClick={() => setActiveItem(null)}>
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