import React from "react";
import PlaceholderIcon from "../assets/icons/PlaceholderIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  iconColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconColor = "var(--color-primary)",
}) => {
  return (
    <div
      className="card h-100 border-0"
      style={{ transition: "all var(--transition-base)" }}
    >
      <div className="card-body d-flex flex-column align-items-start p-4">
        <div
          className="d-flex align-items-center justify-content-center mb-3"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--color-gray-100)",
            flexShrink: 0,
          }}
        >
          <PlaceholderIcon size={28} color={iconColor} />
        </div>

        <h5
          className="fw-bold mb-3"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-dark)",
          }}
        >
          {title}
        </h5>

        <p
          style={{
            color: "var(--color-gray-600)",
            fontSize: "var(--font-size-sm)",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
