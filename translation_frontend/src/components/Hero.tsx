import React from "react";
import { Link } from "react-router-dom";
import HeroGraphic from "../assets/Hero-graphic.svg";
import HeroImage from "../assets/images/Hero-img.png";

const Hero: React.FC = () => {
  return (
    <section
      className="d-flex align-items-center position-relative overflow-hidden"
      style={{
        minHeight: "48em",
        backgroundColor: "white",
        padding: "var(--spacing-10) 0",
      }}
    >
      {/* Tilted Blue Background */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "var(--color-accent-blue)",
          transform: "skewY(3deg)",
          transformOrigin: "top right",
          zIndex: 0,
        }}
      />

      {/* Hero Graphic Background Element */}
      <img
        src={HeroGraphic}
        alt=""
        style={{
          position: "absolute",
          right: "10%",
          top: "40%",
          transform: "translateY(-50%)",
          width: "450px",
          height: "auto",
          zIndex: 1,
          opacity: 0.9,
        }}
      />

      {/* Hero Image on top of graphic with tilted mask */}
      <div
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          height: "85%",
          width: "45%",
          zIndex: 2,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 7.75% 95%)",
          overflow: "hidden",
        }}
      >
        <img
          src={HeroImage}
          alt="Professional translator"
          style={{
            position: "absolute",
            right: "5%",
            bottom: "0",
            height: "100%",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
          {/* Left Content */}
          <div
            className="d-flex flex-column"
            style={{ flex: "1", maxWidth: "600px" }}
          >
            <h1
              className="mb-4 text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-weight-bold)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                lineHeight: "1.2",
              }}
            >
              Bold heading text goes on this side of the screen
            </h1>

            <p
              className="mb-4 text-white"
              style={{
                fontSize: "var(--font-size-lg)",
                lineHeight: "1.7",
                opacity: 0.95,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing & typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Link
                to="/services"
                className="btn"
                style={{
                  padding: "0.5rem 1.5rem",
                  fontSize: "var(--font-size-sm)",
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
                See courses
              </Link>

              <Link
                to="/about"
                className="btn"
                style={{
                  padding: "0.5rem 1.5rem",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "transparent",
                  color: "var(--color-dark)",
                  border: "2px solid var(--color-dark)",
                  transition: "all var(--transition-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-dark)";
                  e.currentTarget.style.color = "var(--color-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-dark)";
                }}
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Spacer for right side to maintain layout balance */}
          <div style={{ flex: "1", maxWidth: "500px" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
