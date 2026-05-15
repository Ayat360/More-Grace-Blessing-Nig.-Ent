import { useEffect, useState } from "react";

function Reviews() {

  const [reviews, setReviews] = useState([]);

  const [form, setForm] = useState({
    name: "",
    message: ""
  });

  // FETCH REVIEWS
  useEffect(() => {
    fetch("http://127.0.0.1:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // SUBMIT REVIEW
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    setReviews([data, ...reviews]);

    setForm({
      name: "",
      message: ""
    });
  };

  return (
    <section className="reviews-section">

      <div className="reviews-heading">
        <span>Customer Feedback</span>
        <h2>What Customers Say About Us</h2>
      </div>

      {/* FORM */}

      <form
        className="review-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
          required
        />

        <textarea
          placeholder="Write your experience..."
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value
            })
          }
          required
        />

        <button type="submit">
          Post Review
        </button>

      </form>

      {/* REVIEWS */}

      <div className="reviews-grid">

        {reviews.map((review) => (

          <div
            className="review-card"
            key={review.id}
          >

            <h3>{review.name}</h3>

            <p>{review.message}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;