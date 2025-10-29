import React, { useEffect, useRef } from "react";
import PlaceholderIcon from "../assets/icons/PlaceholderIcon";

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  // Partner/Company names
  const partners = [
    "Global Partners",
    "Tech Solutions",
    "Innovation Hub",
    "Business Corp",
    "Enterprise Ltd",
    "Digital Agency",
    "Creative Studio",
    "Corporate Group",
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "var(--color-gray-100)", overflow: "hidden" }}
    >
      <h4
        className="text-center mb-5"
        style={{
          color: "var(--color-gray-600)",
          //   fontSize: "var(--font-size-sm)",
          fontWeight: "var(--font-weight-bold)",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Trusted by leading organizations
      </h4>
      <div className="container">
        <div
          ref={sliderRef}
          className="d-flex gap-5 align-items-center"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="d-flex align-items-center gap-2"
              style={{
                minWidth: "200px",
                padding: "var(--spacing-2)",
                opacity: 0.6,
                transition: "opacity var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
            >
              <PlaceholderIcon size={32} color="var(--color-gray-500)" />
              <span
                style={{
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--color-gray-700)",
                }}
              >
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
