import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      title: "Sworn Translation",
      description:
        "We have sworn translators who are able to certify documents as true and authoritative translations for legal use. Our certified translations are accepted by courts, government agencies, and official institutions worldwide.",
      image: "sworn-translation.jpg",
    },
    {
      title: "Legal Translation",
      description:
        "We provide certified translation services backed by one of the world's most respected translation companies. Our legal translators have expertise in contracts, court documents, patents, and corporate legal materials.",
      image: "legal-translation.jpg",
    },
    {
      title: "Interpreting Services",
      description:
        "Seasoned and professionally trained interpreters ensure that you receive the most accurate interpretation services. We offer both simultaneous and consecutive interpreting for conferences, meetings, and legal proceedings.",
      image: "interpreting.jpg",
    },
    {
      title: "Proofreading",
      description:
        "Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation. Our expert proofreaders ensure your documents are error-free and polished.",
      image: "proofreading.jpg",
    },
    {
      title: "Text Editing",
      description:
        "Classic symptoms of poor editing are inconsistencies in language and format, poor structure, factual inaccuracies and lack of consideration to the reader. Our editing services improve clarity, flow, and overall quality.",
      image: "text-editing.jpg",
    },
    {
      title: "Language Courses",
      description:
        "We provide group, as well as, individual classes in English, German, Italian, French, Spanish, Albanian, and Macedonian for foreigners. Our courses are designed for all levels, from beginners to advanced speakers.",
      image: "courses.jpg",
    },
  ];

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
            Our Services
          </h1>
          <p
            style={{
              fontSize: "var(--font-size-xl)",
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.95,
            }}
          >
            Professional translation, interpretation, and language education
            services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="d-flex flex-column"
                style={{
                  flex: "1 1 calc(50% - 1rem)",
                  minWidth: "320px",
                  maxWidth: "500px",
                }}
              >
                {/* Service Image Placeholder */}
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "100%",
                    height: "250px",
                    backgroundColor: "var(--color-gray-200)",
                    borderRadius: "var(--radius-lg)",
                    color: "var(--color-gray-500)",
                    fontSize: "var(--font-size-sm)",
                  }}
                >
                  {service.image}
                </div>

                <ServiceCard
                  title={service.title}
                  description={service.description}
                  iconColor="var(--color-primary)"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="section-lg text-center"
        style={{ backgroundColor: "var(--color-accent-blue)" }}
      >
        <div className="container">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="mb-4"
            style={{
              fontSize: "var(--font-size-lg)",
              color: "var(--color-gray-700)",
              maxWidth: "600px",
              margin: "0 auto var(--spacing-4)",
            }}
          >
            Contact us today to discuss your translation, interpretation, or
            language learning needs.
          </p>
          <a
            href="/contact"
            className="btn btn-primary"
            style={{
              padding: "var(--spacing-2) var(--spacing-5)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-medium)",
              borderRadius: "var(--radius-md)",
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
