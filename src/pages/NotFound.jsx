import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notfound-page reveal">
      <div className="notfound-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to something useful.
        </p>

        <Link to="/" className="notfound-btn">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}

export default NotFound;