import React from "react";

const Languages: React.FC = () => {
  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "German", flag: "🇩🇪" },
    { name: "French", flag: "🇫🇷" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "Italian", flag: "🇮🇹" },
    { name: "Portuguese", flag: "🇵🇹" },
    { name: "Russian", flag: "🇷🇺" },
    { name: "Chinese", flag: "🇨🇳" },
    { name: "Japanese", flag: "🇯🇵" },
    { name: "Arabic", flag: "🇸🇦" },
    { name: "Turkish", flag: "🇹🇷" },
    { name: "Greek", flag: "🇬🇷" },
    { name: "Albanian", flag: "🇦🇱" },
    { name: "Macedonian", flag: "🇲🇰" },
    { name: "Serbian", flag: "🇷🇸" },
    { name: "Croatian", flag: "🇭🇷" },
    { name: "Bulgarian", flag: "🇧🇬" },
    { name: "Romanian", flag: "🇷🇴" },
    { name: "Polish", flag: "🇵🇱" },
    { name: "Czech", flag: "🇨🇿" },
    { name: "Hungarian", flag: "🇭🇺" },
    { name: "Dutch", flag: "🇳🇱" },
    { name: "Swedish", flag: "🇸🇪" },
    { name: "Norwegian", flag: "🇳🇴" },
  ];

  return (
    <main>
      {/* Page Header */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "300px",
          backgroundColor: "var(--color-accent-pink)",
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
            Languages We Cover
          </h1>
          <p
            style={{
              fontSize: "var(--font-size-xl)",
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.95,
            }}
          >
            Professional translation and interpretation services in over 20
            languages
          </p>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="mb-5 text-center">
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-gray-700)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Our network of native-speaking, professionally trained translators
              and interpreters covers a wide range of languages to meet your
              global communication needs.
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {languages.map((language, index) => (
              <div
                key={index}
                className="card border-0 d-flex align-items-center justify-content-center"
                style={{
                  flex: "0 1 auto",
                  minWidth: "150px",
                  padding: "var(--spacing-3)",
                  transition: "all var(--transition-base)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  const span = e.currentTarget.querySelector("span");
                  if (span) span.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "white";
                  const span = e.currentTarget.querySelector("span");
                  if (span) span.style.color = "var(--color-dark)";
                }}
              >
                <div className="text-center">
                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "var(--spacing-1)",
                    }}
                  >
                    {language.flag}
                  </div>
                  <span
                    style={{
                      fontSize: "var(--font-size-base)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--color-dark)",
                      transition: "color var(--transition-fast)",
                    }}
                  >
                    {language.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section
        className="section-lg"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-5 align-items-center">
            <div className="d-flex flex-column" style={{ flex: "1" }}>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                Can't Find Your Language?
              </h2>
              <p
                style={{
                  fontSize: "var(--font-size-lg)",
                  color: "var(--color-gray-700)",
                  lineHeight: "1.8",
                  marginBottom: "var(--spacing-4)",
                }}
              >
                Don't worry! We have an extensive network of translators and
                interpreters covering many more languages than listed here.
                Contact us with your specific language needs, and we'll be happy
                to assist you.
              </p>
              <a
                href="/contact"
                className="btn btn-primary align-self-start"
                style={{
                  padding: "var(--spacing-2) var(--spacing-4)",
                  fontSize: "var(--font-size-base)",
                  fontWeight: "var(--font-weight-medium)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Get in Touch
              </a>
            </div>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                flex: "1",
                minHeight: "300px",
                backgroundColor: "var(--color-gray-200)",
                borderRadius: "var(--radius-lg)",
                color: "var(--color-gray-500)",
                maxWidth: "500px",
              }}
            >
              Image Placeholder
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Languages;
