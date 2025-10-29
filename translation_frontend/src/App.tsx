import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Languages from "./pages/Languages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import "./styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <Navbar />

        <div id="main-content" style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/languages" element={<Languages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* Add placeholder routes for footer links */}
            <Route
              path="/privacy"
              element={
                <div className="container py-5">
                  <h1>Privacy Policy</h1>
                  <p>Privacy policy content will be added here.</p>
                </div>
              }
            />
            <Route
              path="/terms"
              element={
                <div className="container py-5">
                  <h1>Terms of Service</h1>
                  <p>Terms of service content will be added here.</p>
                </div>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
