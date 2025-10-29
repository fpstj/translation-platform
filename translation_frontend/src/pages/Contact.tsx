import React from "react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <main>
      {/* Page Header */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "300px",
          backgroundColor: "var(--color-primary)",
          color: "white",
          padding: "var(--spacing-8) var(--spacing-4)",
        }}
      >
        <div className="container">
          <h1
            className="mb-3 text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Get in Touch
          </h1>
          <p
            style={{
              fontSize: "var(--font-size-xl)",
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.95,
            }}
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-5">
            {/* Contact Form */}
            <div className="d-flex flex-column" style={{ flex: "1" }}>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                Send Us a Message
              </h2>
              <p
                className="mb-4"
                style={{
                  color: "var(--color-gray-700)",
                  fontSize: "var(--font-size-base)",
                }}
              >
                Have a question or need a quote? Fill out the form below and our
                team will get back to you within 24 hours.
              </p>
              <ContactForm formType="contact" />
            </div>

            {/* Job Application Form */}
            <div className="d-flex flex-column" style={{ flex: "1" }}>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                Join Our Team
              </h2>
              <p
                className="mb-4"
                style={{
                  color: "var(--color-gray-700)",
                  fontSize: "var(--font-size-base)",
                }}
              >
                Are you a professional translator or interpreter? We're always
                looking for talented individuals to join our team.
              </p>
              <ContactForm formType="job" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section
        className="section-lg"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div className="container">
          <h2
            className="mb-5 text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Other Ways to Reach Us
          </h2>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            {/* Email */}
            <div
              className="card border-0 text-center"
              style={{
                flex: "1 1 calc(33.333% - 1rem)",
                minWidth: "250px",
                maxWidth: "350px",
                padding: "var(--spacing-4)",
              }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-blue)",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>📧</span>
                </div>
                <h5
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Email
                </h5>
                <p style={{ color: "var(--color-gray-700)" }}>
                  info@inout-translation.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="card border-0 text-center"
              style={{
                flex: "1 1 calc(33.333% - 1rem)",
                minWidth: "250px",
                maxWidth: "350px",
                padding: "var(--spacing-4)",
              }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-blue)",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>📞</span>
                </div>
                <h5
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Phone
                </h5>
                <p style={{ color: "var(--color-gray-700)" }}>
                  +389 2 123 4567
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              className="card border-0 text-center"
              style={{
                flex: "1 1 calc(33.333% - 1rem)",
                minWidth: "250px",
                maxWidth: "350px",
                padding: "var(--spacing-4)",
              }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-blue)",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>📍</span>
                </div>
                <h5
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Visit Us
                </h5>
                <p style={{ color: "var(--color-gray-700)" }}>
                  123 Language Street
                  <br />
                  Skopje 1000, North Macedonia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2
            className="mb-5 text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            className="d-flex flex-column gap-4"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <div className="card border-0 p-4">
              <h5
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                  marginBottom: "var(--spacing-2)",
                }}
              >
                How long does a translation take?
              </h5>
              <p style={{ color: "var(--color-gray-700)", marginBottom: 0 }}>
                Translation time depends on the length and complexity of the
                document. Typically, we can translate 2000-3000 words per day.
                Rush services are available for urgent requests.
              </p>
            </div>

            <div className="card border-0 p-4">
              <h5
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                  marginBottom: "var(--spacing-2)",
                }}
              >
                Are your translations certified?
              </h5>
              <p style={{ color: "var(--color-gray-700)", marginBottom: 0 }}>
                Yes, we have sworn translators who can provide certified
                translations with official stamps that are accepted by courts,
                government agencies, and institutions worldwide.
              </p>
            </div>

            <div className="card border-0 p-4">
              <h5
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                  marginBottom: "var(--spacing-2)",
                }}
              >
                What are your rates?
              </h5>
              <p style={{ color: "var(--color-gray-700)", marginBottom: 0 }}>
                Our rates vary depending on the language pair, document type,
                and turnaround time. Contact us with your specific requirements
                for a detailed quote.
              </p>
            </div>

            <div className="card border-0 p-4">
              <h5
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                  marginBottom: "var(--spacing-2)",
                }}
              >
                Do you offer interpretation services?
              </h5>
              <p style={{ color: "var(--color-gray-700)", marginBottom: 0 }}>
                Yes, we provide both simultaneous and consecutive interpretation
                services for conferences, meetings, legal proceedings, and other
                events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
