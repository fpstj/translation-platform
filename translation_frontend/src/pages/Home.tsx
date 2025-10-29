import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import LogoSlider from "../components/LogoSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";

const Home: React.FC = () => {
  const services = [
    {
      title: "Sworn translators",
      description:
        "We have sworn translators, that are able to certify documents as true and authoritative translations for use.",
    },
    {
      title: "Legal translation",
      description:
        "We provide certified translation services backed by one of the world's most respected translation companies.",
    },
    {
      title: "Interpreting",
      description:
        "Seasoned and professionally trained interpreters ensure that you receive the most accurate interpretation services.",
    },
    {
      title: "Proofreading",
      description:
        "Proofreading is the final stage of the editing process, focusing on surface errors such as misspellings and mistakes in grammar and punctuation.",
    },
    {
      title: "Text editing",
      description:
        "Classic symptoms of poor editing are inconsistencies in language and format, poor structure, factual inaccuracies and lack of consideration to the reader.",
    },
    {
      title: "Courses",
      description:
        "We provide group, as well as, individual classes in English, German, Italian, French, Spanish, Albanian, and Macedonian for foreigners.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              Our Services
            </h2>
            <p
              style={{
                color: "var(--color-gray-600)",
                fontSize: "var(--font-size-lg)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Translation | Interpreting | Proofreading | Editing
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 calc(33.333% - 1rem)",
                  minWidth: "300px",
                  maxWidth: "400px",
                }}
              >
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

      {/* Video/Image Placeholders Section */}
      {/* <section
        className="py-5"
        style={{ backgroundColor: "var(--color-light)" }}
      >
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                flex: "1",
                minHeight: "400px",
                backgroundColor: "var(--color-gray-300)",
                borderRadius: "var(--radius-lg)",
                color: "var(--color-gray-600)",
              }}
            >
              Video/Image Placeholder
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                flex: "1",
                minHeight: "400px",
                backgroundColor: "var(--color-gray-300)",
                borderRadius: "var(--radius-lg)",
                color: "var(--color-gray-600)",
              }}
            >
              Video/Image Placeholder
            </div>
          </div>
        </div>
      </section> */}

      {/* Our History Section */}
      {/* <section className="section-lg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Our History
          </h2>

          <div
            className="d-flex flex-column gap-4"
            style={{ maxWidth: "900px" }}
          >
            <p
              style={{
                color: "var(--color-gray-700)",
                fontSize: "var(--font-size-base)",
                lineHeight: "1.8",
              }}
            >
              IN & OUT Translation and Course Centre has been present in the
              Macedonian market since 2001, established as a foreign language
              school, outgrowing the translation capacities it currently offers
              and expanding activities as a result of the many sectors and
              professional services it offers.
            </p>

            <p
              style={{
                color: "var(--color-gray-700)",
                fontSize: "var(--font-size-base)",
                lineHeight: "1.8",
              }}
            >
              The Company is at disposal of business premises necessary for the
              relevant activities as well as of other modern tools ensuring
              efficient and prompt service performance. The work team is
              structured of highly-qualified professionals in possession of
              specific knowledge and experience in given area and who always
              respond to a client's specific request and needs.
            </p>

            <p
              style={{
                color: "var(--color-gray-700)",
                fontSize: "var(--font-size-base)",
                lineHeight: "1.8",
              }}
            >
              The company development contributed to professional accomplishment
              and cooperation with great number of national governmental
              institutions (General Secretariat of the Republic of Macedonia,
              Ministry of Justice, Ministry of Labour and Social Policy of RM,
              Secretariat for Legislation of RM, Health Security Fund of RM,
              Project Unit for Coordination within the Ministry of Health of RM
              and etc.), foreign governmental institutions (General Secretariat
              of the Republic of Slovenia), non-governmental institutions
              (Balkan Civil Society Foundation), (Kalkan Skopje) and Youth
              Foundation, Global Education, Institute for Good Governance and
              Euro Atlantic Perspective, Narmak Project, SINTEF, BAR E.C.E.) and
              many national and international private companies (KPPMG, Ernst &
              Young, STAR DESIGN, Slovenia, AD MEPSO International markets
              through continuous professional, timely and quality services as
              well as through investment in its professional and technical
              capacities.
            </p>

            <p
              style={{
                color: "var(--color-gray-700)",
                fontSize: "var(--font-size-base)",
                lineHeight: "1.8",
              }}
            >
              The Company, maintains its leadership in the national and
              international markets through continuous professional, timely and
              quality services as well as through investment in its professional
              and technical capacities.
            </p>

            <p
              style={{
                color: "var(--color-gray-700)",
                fontSize: "var(--font-size-base)",
                lineHeight: "1.8",
              }}
            >
              Urban Invest, National Institute for Democracy - Skopje).
            </p>
          </div>
        </div>
      </section> */}

      {/* Logo Slider */}
      <LogoSlider />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default Home;
