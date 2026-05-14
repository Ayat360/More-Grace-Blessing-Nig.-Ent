import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

function Contact() {
useEffect(() => {
  document.title = "Contact | More Grace & Blessing Nigeria Enterprise";
}, []);

  const [state, handleSubmit] = useForm("mnnjzqpr"); 
  // 👆 Replace "xkgzqvab" with your real Formspree Form ID later

  if (state.succeeded) {
    return (
      <section className="contact-page">
        <div className="contact-success-box reveal">
          <span>Enquiry Sent Successfully</span>
          <h1>Thank You for Reaching Out</h1>
          <p>
            Your message has been sent successfully. We’ll get back to you as soon as possible regarding your product enquiry or request.
          </p>

          <a
            href="https://wa.me/2348026312854"
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp-big"
          >
            Chat on WhatsApp Instead
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero reveal">
        <span>Contact Our Business</span>
        <h1>Let’s Help You Find the Right Household Plastic Products</h1>
        <p>
          Reach out for product enquiries, bulk supply requests, pricing details,
          or general business communication. We’re available to assist homes,
          retailers, and wholesale buyers.
        </p>
      </div>

      {/* CONTACT LAYOUT */}
      <div className="contact-modern-layout reveal">
        {/* LEFT INFO */}
        <div className="contact-info-panel">
          <div className="contact-info-box">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Business Location</h3>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <div className="contact-info-box">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Call or WhatsApp</h3>
              <p>+234 802 631 2854</p>
            </div>
          </div>

          <div className="contact-info-box">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email Address</h3>
              <p>aregbeakeemadekunle@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-box">
            <div className="contact-icon">🕒</div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday – Saturday · 8:00AM – 6:00PM</p>
            </div>
          </div>

          <a
            href="https://wa.me/2348026312854"
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp-big"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-panel">
          <div className="contact-form-head">
            <span>Send an Enquiry</span>
            <h2>Tell Us What You Need</h2>
            <p>
              Fill in your details and let us know the kind of products or quantity you’re looking for.
            </p>
          </div>

          <form className="modern-contact-form" onSubmit={handleSubmit}>
            <div className="form-grid-two">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Enter your full name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" name="phone" placeholder="Enter your phone number" required />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>
            </div>

            <div className="form-grid-two">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email address" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label>Business Type</label>
                <input type="text" name="businessType" placeholder="Retail, Wholesale, Home Buyer..." />
              </div>
            </div>

            <div className="form-group">
              <label>Product Interest</label>
              <input
                type="text"
                name="productInterest"
                placeholder="Buckets, Bowls, Plates, Containers, etc."
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us what you need, quantity, or any question you have..."
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Honeypot anti-spam field */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Enquiry"}
            </button>

            <ValidationError errors={state.errors} />
          </form>
        </div>
      </div>

      {/* LOCATION MAP */}
<div className="contact-map-section reveal">

  <div className="map-text">
    <span>Visit Our Location</span>

    <h2>
      Find MORE GRACE & BLESSING
      NIGERIA ENTERPRISE
    </h2>

    <p>
      Customers, retailers, and wholesale buyers can easily locate
      our business for enquiries, supply discussions, and product inspection.
    </p>
  </div>

  <div className="map-wrapper">
    <iframe
      title="Business Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7756224615223!2d3.255301075374894!3d6.549988993442995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8547886c08c5%3A0x1dfc3716c1517dc5!2sMORE%20GRACE%20%26%20BLESSING%20NIGERIA%20ENTERPRISE!5e0!3m2!1sen!2sng!4v1778768245680!5m2!1sen!2sng"
      loading="lazy"
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

</div>
    </section>
  );
}

export default Contact;