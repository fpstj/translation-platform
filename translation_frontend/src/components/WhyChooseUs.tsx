import React from "react";
import PlaceholderIcon from "../assets/icons/PlaceholderIcon";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: "🌍",
      title: "Trusted Worldwide",
      description:
        "Trusted by over 50 companies across 20+ countries, our clients rely on us for consistent, accurate, and culturally relevant translations.",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description:
        "We understand the importance of deadlines. Our streamlined process ensures quick delivery without compromising on quality.",
    },
    {
      icon: "📜",
      title: "Certified & Legal Translations",
      description:
        "From contracts to official documents, we provide certified translations in 50+ languages, accepted by authorities and institutions worldwide.",
    },
    {
      icon: "💬",
      title: "Expert Native Translators",
      description:
        "Our team of native-speaking professionals ensures every project sounds natural, accurate, and perfectly adapted to the target audience.",
    },
  ];

  return (
    <section className="section-lg" style={{ backgroundColor: "white" }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
              fontSize: "var(--font-size-4xl)",
              color: "var(--color-dark)",
            }}
          >
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="d-flex flex-column"
              style={{
                flex: "1 1 calc(50% - 1rem)",
                minWidth: "300px",
                maxWidth: "550px",
                padding: "var(--spacing-4)",
              }}
            >
              {/* Icon */}
              <div className="mb-3">
                <PlaceholderIcon size={48} color="var(--color-accent-pink)" />
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                  fontSize: "var(--font-size-xl)",
                  color: "var(--color-dark)",
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "var(--font-size-base)",
                  color: "var(--color-gray-700)",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
