import React from "react";
import { Link } from "react-router-dom";
import PlaceholderIcon from "../assets/icons/PlaceholderIcon";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-4">
          {/* Company Info */}
          <div className="d-flex flex-column" style={{ flex: "1" }}>
            <div className="d-flex align-items-center mb-3">
              <PlaceholderIcon size={32} color="white" />
              <span
                className="ms-2 fw-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--font-size-xl)",
                }}
              >
                IN & OUT
              </span>
            </div>
            <p style={{ color: "var(--color-gray-400)", maxWidth: "300px" }}>
              Professional translation and interpretation services since 2001.
              Your trusted partner for multilingual communication.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <PlaceholderIcon size={20} color="var(--color-gray-400)" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <PlaceholderIcon size={20} color="var(--color-gray-400)" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <PlaceholderIcon size={20} color="var(--color-gray-400)" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <PlaceholderIcon size={20} color="var(--color-gray-400)" />
              </a>
            </div>
          </div>

          {/* Translations */}
          <div className="d-flex flex-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3" style={{ color: "white" }}>
              Translations
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  UI design
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  UX design
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Wireframing
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Diagramming
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Brainstorming
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Online whiteboard
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Team collaboration
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="d-flex flex-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3" style={{ color: "white" }}>
              Courses
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Design
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Prototyping
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Development features
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Design systems
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Collaboration features
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Design process
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  FigJam
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="d-flex flex-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3" style={{ color: "white" }}>
              Contact Us
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/contact" style={{ color: "var(--color-gray-400)" }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "var(--color-gray-400)" }}>
                  Best practices
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Colors
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Color wheel
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "var(--color-gray-400)" }}>
                  Support
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "var(--color-gray-400)" }}>
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "var(--color-gray-400)" }}>
                  Resource library
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 pt-4"
          style={{ borderTop: "1px solid var(--color-gray-700)" }}
        >
          <p
            className="mb-2 mb-md-0"
            style={{
              color: "var(--color-gray-400)",
              fontSize: "var(--font-size-sm)",
            }}
          >
            © {currentYear} IN & OUT Translation and Course Centre. All rights
            reserved.
          </p>
          <div className="d-flex gap-4">
            <Link
              to="/privacy"
              style={{
                color: "var(--color-gray-400)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{
                color: "var(--color-gray-400)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
