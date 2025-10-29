import React from "react";
import PlaceholderIcon from "../assets/icons/PlaceholderIcon";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Elena Petrov",
      role: "Managing Director",
      image: "elena.jpg",
      bio: "Over 20 years of experience in translation services and language education.",
    },
    {
      name: "Marco Rossi",
      role: "Head of Translation",
      image: "marco.jpg",
      bio: "Certified translator specializing in legal and technical documentation.",
    },
    {
      name: "Sarah Johnson",
      role: "Interpretation Manager",
      image: "sarah.jpg",
      bio: "Expert simultaneous interpreter with experience in international conferences.",
    },
    {
      name: "Dimitri Kovač",
      role: "Course Director",
      image: "dimitri.jpg",
      bio: "Language educator with expertise in multiple European languages.",
    },
    {
      name: "Maria García",
      role: "Quality Assurance Lead",
      image: "maria.jpg",
      bio: "Ensuring the highest standards in all translation and interpretation projects.",
    },
    {
      name: "Thomas Weber",
      role: "Business Development",
      image: "thomas.jpg",
      bio: "Building partnerships and expanding our global language services network.",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "300px",
          backgroundColor: "var(--color-accent-blue)",
          color: "var(--color-dark)",
          padding: "var(--spacing-8) var(--spacing-4)",
        }}
      >
        <div className="container">
          <h1
            className="mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            About Us
          </h1>
          <p
            style={{
              fontSize: "var(--font-size-xl)",
              maxWidth: "700px",
              margin: "0 auto",
              color: "var(--color-gray-700)",
            }}
          >
            Building bridges across languages since 2001
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-5 align-items-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                flex: "1",
                minHeight: "400px",
                backgroundColor: "var(--color-gray-200)",
                borderRadius: "var(--radius-lg)",
                color: "var(--color-gray-500)",
                maxWidth: "500px",
              }}
            >
              Company Image Placeholder
            </div>

            <div className="d-flex flex-column" style={{ flex: "1" }}>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                Our Story
              </h2>
              <p
                style={{
                  fontSize: "var(--font-size-base)",
                  color: "var(--color-gray-700)",
                  lineHeight: "1.8",
                  marginBottom: "var(--spacing-3)",
                }}
              >
                IN & OUT Translation and Course Centre has been present in the
                Macedonian market since 2001, established as a foreign language
                school, outgrowing the translation capacities it currently
                offers and expanding activities as a result of the many sectors
                and professional services it offers.
              </p>
              <p
                style={{
                  fontSize: "var(--font-size-base)",
                  color: "var(--color-gray-700)",
                  lineHeight: "1.8",
                  marginBottom: "var(--spacing-3)",
                }}
              >
                The Company is at disposal of business premises necessary for
                the relevant activities as well as of other modern tools
                ensuring efficient and prompt service performance. The work team
                is structured of highly-qualified professionals in possession of
                specific knowledge and experience in given area and who always
                respond to a client's specific request and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="section-lg"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              Meet Our Team
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-gray-700)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Our dedicated professionals bring expertise, passion, and
              precision to every project
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card border-0"
                style={{
                  flex: "1 1 calc(33.333% - 1rem)",
                  minWidth: "280px",
                  maxWidth: "350px",
                }}
              >
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  {/* Team Member Photo Placeholder */}
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-gray-200)",
                      color: "var(--color-gray-500)",
                      fontSize: "var(--font-size-xs)",
                      overflow: "hidden",
                    }}
                  >
                    <PlaceholderIcon size={48} color="var(--color-gray-400)" />
                  </div>

                  <h5
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    {member.name}
                  </h5>

                  <p
                    className="mb-3"
                    style={{
                      color: "var(--color-primary)",
                      fontSize: "var(--font-size-sm)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    {member.role}
                  </p>

                  <p
                    style={{
                      color: "var(--color-gray-600)",
                      fontSize: "var(--font-size-sm)",
                      lineHeight: "1.6",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2
            className="mb-5 text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Our Location
          </h2>

          <div className="d-flex flex-column flex-lg-row gap-5">
            {/* Contact Information */}
            <div className="d-flex flex-column gap-4" style={{ flex: "1" }}>
              <div>
                <h5
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Visit Us
                </h5>
                <p
                  style={{
                    color: "var(--color-gray-700)",
                    fontSize: "var(--font-size-base)",
                    lineHeight: "1.8",
                  }}
                >
                  <strong>IN & OUT Translation and Course Centre</strong>
                  <br />
                  123 Language Street
                  <br />
                  Skopje 1000
                  <br />
                  North Macedonia
                </p>
              </div>

              <div>
                <h5
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Contact Information
                </h5>
                <p
                  style={{
                    color: "var(--color-gray-700)",
                    fontSize: "var(--font-size-base)",
                    lineHeight: "1.8",
                  }}
                >
                  <strong>Email:</strong> info@inout-translation.com
                  <br />
                  <strong>Phone:</strong> +389 2 123 4567
                  <br />
                  <strong>Fax:</strong> +389 2 123 4568
                </p>
              </div>

              <div>
                <h5
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Business Hours
                </h5>
                <p
                  style={{
                    color: "var(--color-gray-700)",
                    fontSize: "var(--font-size-base)",
                    lineHeight: "1.8",
                  }}
                >
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div style={{ flex: "1", minHeight: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.0824050173574!2d21.4252818!3d41.9981294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU5JzUzLjMiTiAyMcKwMjUnMzEuMCJF!5e0!3m2!1sen!2smk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IN & OUT Translation Centre Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
