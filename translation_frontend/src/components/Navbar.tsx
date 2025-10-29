import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PlaceholderIcon from "../assets/icons/PlaceholderIcon";

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if any services-related page is active
  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
      style={{ zIndex: "var(--z-fixed)" }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <PlaceholderIcon size={32} color="var(--color-accent-pink)" />
          <span
            className="ms-2 fw-bold"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-xl)",
            }}
          >
            IN & OUT
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-accent-pink)"
                    : "var(--color-dark)",
                  fontWeight: isActive
                    ? "var(--font-weight-medium)"
                    : "var(--font-weight-normal)",
                })}
              >
                Home
              </NavLink>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                className="nav-link"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isServicesOpen}
                style={{
                  color: isServicesActive
                    ? "var(--color-accent-pink)"
                    : "var(--color-dark)",
                  fontWeight: isServicesActive
                    ? "var(--font-weight-medium)"
                    : "var(--font-weight-normal)",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                }}
              >
                Services
              </a>
              <ul
                className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services"
                    style={{
                      backgroundColor: "transparent",
                      color:
                        location.pathname === "/services"
                          ? "var(--color-accent-pink)"
                          : "var(--color-dark)",
                      fontWeight:
                        location.pathname === "/services"
                          ? "var(--font-weight-medium)"
                          : "var(--font-weight-normal)",
                      transition: "all var(--transition-fast)",
                    }}
                    // onMouseEnter={(e) => {
                    //   e.currentTarget.style.backgroundColor = "transparent";
                    //   //   e.currentTarget.style.color = "var(--color-accent-pink)";
                    // //   e.currentTarget.style.fontWeight =
                    // //     "var(--font-weight-medium)";
                    // }}
                    // onMouseLeave={(e) => {
                    //   e.currentTarget.style.backgroundColor = "transparent";
                    //   //   e.currentTarget.style.color =
                    //   //     location.pathname === "/services"
                    //   //       ? "var(--color-accent-pink)"
                    //   //       : "var(--color-dark)";
                    //   e.currentTarget.style.fontWeight =
                    //     location.pathname === "/services"
                    //       ? "var(--font-weight-medium)"
                    //       : "var(--font-weight-normal)";
                    // }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/languages"
                    style={{
                      backgroundColor: "transparent",
                      color:
                        location.pathname === "/services/languages"
                          ? "var(--color-accent-pink)"
                          : "var(--color-dark)",
                      fontWeight:
                        location.pathname === "/services/languages"
                          ? "var(--font-weight-medium)"
                          : "var(--font-weight-normal)",
                      transition: "all var(--transition-fast)",
                    }}
                    // onMouseEnter={(e) => {
                    //   e.currentTarget.style.backgroundColor = "transparent";
                    //   //   e.currentTarget.style.color = "var(--color-accent-pink)";
                    //   e.currentTarget.style.fontWeight =
                    //     "var(--font-weight-medium)";
                    // }}
                    // onMouseLeave={(e) => {
                    //   e.currentTarget.style.backgroundColor = "transparent";
                    //   //   e.currentTarget.style.color =
                    //   //     location.pathname === "/services/languages"
                    //   //       ? "var(--color-accent-pink)"
                    //   //       : "var(--color-dark)";
                    //   e.currentTarget.style.fontWeight =
                    //     location.pathname === "/services/languages"
                    //       ? "var(--font-weight-medium)"
                    //       : "var(--font-weight-normal)";
                    // }}
                  >
                    Languages
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-accent-pink)"
                    : "var(--color-dark)",
                  fontWeight: isActive
                    ? "var(--font-weight-medium)"
                    : "var(--font-weight-normal)",
                })}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-accent-pink)"
                    : "var(--color-dark)",
                  fontWeight: isActive
                    ? "var(--font-weight-medium)"
                    : "var(--font-weight-normal)",
                })}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <Link
                to="/about"
                className="btn"
                style={{
                  padding: "0.3rem 1.5rem",
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
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
