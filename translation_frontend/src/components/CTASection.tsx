import React, { useState } from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, this would send to the backend
      console.log("Subscribed:", email);
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section
      className="section-lg"
      style={{ backgroundColor: "var(--color-light)" }}
    >
      <div className="container">
        <div className="d-flex flex-column flex-lg-row gap-5">
          {/* Left Side - Get in Touch */}
          <div className="d-flex flex-column" style={{ flex: "1" }}>
            <h3
              className="mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-dark)",
              }}
            >
              Get in Touch with Us
            </h3>
            <p
              className="mb-4"
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-gray-700)",
                lineHeight: "1.7",
                flex: "1",
              }}
            >
              Have a translation project or need language services? Our team of
              professional translators and interpreters is ready to help you
              communicate across languages and cultures.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary align-self-start"
              style={{
                padding: "var(--spacing-2) var(--spacing-4)",
                fontSize: "var(--font-size-base)",
                fontWeight: "var(--font-weight-medium)",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-accent-pink)",
                color: "var(--color-light)",
                border: "none",
                transition: "all var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Contact Us Today
            </Link>
          </div>

          {/* Right Side - Newsletter */}
          <div className="d-flex flex-column" style={{ flex: "1" }}>
            <h3
              className="mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-dark)",
              }}
            >
              Subscribe to Our Newsletter
            </h3>
            <p
              className="mb-4"
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-gray-700)",
                lineHeight: "1.7",
                flex: "1",
              }}
            >
              Stay updated with the latest language tips, translation insights,
              and special offers. Join our community of language enthusiasts!
            </p>

            {subscribed ? (
              <div
                className="alert alert-success"
                style={{
                  backgroundColor: "var(--color-success)",
                  color: "white",
                  padding: "var(--spacing-2) var(--spacing-3)",
                  borderRadius: "var(--radius-md)",
                  fontSize: "var(--font-size-base)",
                }}
              >
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="form-control"
                  style={{
                    flex: "1",
                    padding: "var(--spacing-2)",
                    fontSize: "var(--font-size-base)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-gray-300)",
                  }}
                />
                <button
                  type="submit"
                  className="btn"
                  style={{
                    padding: "var(--spacing-2) var(--spacing-4)",
                    fontSize: "var(--font-size-base)",
                    fontWeight: "var(--font-weight-medium)",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-accent-pink)",
                    color: "var(--color-light)",
                    border: "none",
                    transition: "all var(--transition-base)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
