import React, { useState, type FormEvent } from "react";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // In a real application, this would authenticate with backend
    console.log("Login attempt:", { email: formData.email });

    // Placeholder: Show alert that this is a future feature
    alert(
      "Login functionality will be implemented in a future phase. This will provide admin access to manage translators, companies, and revenue insights."
    );

    // Optionally redirect to home
    // navigate('/');
  };

  return (
    <main>
      {/* Login Section */}
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "calc(100vh - 120px)",
          backgroundColor: "var(--color-light)",
          padding: "var(--spacing-8) var(--spacing-4)",
        }}
      >
        <div
          className="card border-0"
          style={{
            width: "100%",
            maxWidth: "450px",
            padding: "var(--spacing-6)",
          }}
        >
          <div className="card-body">
            <div className="text-center mb-4">
              <h2
                className="mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                Welcome Back
              </h2>
              <p
                style={{
                  color: "var(--color-gray-600)",
                  fontSize: "var(--font-size-base)",
                }}
              >
                Sign in to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              {/* Email Field */}
              <div className="d-flex flex-column">
                <label htmlFor="email" className="form-label fw-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="your.email@example.com"
                  style={{
                    borderRadius: "var(--radius-md)",
                    padding: "var(--spacing-2)",
                    border: "1px solid var(--color-gray-300)",
                  }}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Password Field */}
              <div className="d-flex flex-column">
                <label htmlFor="password" className="form-label fw-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your password"
                  style={{
                    borderRadius: "var(--radius-md)",
                    padding: "var(--spacing-2)",
                    border: "1px solid var(--color-gray-300)",
                  }}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberMe"
                    style={{ fontSize: "var(--font-size-sm)" }}
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  style={{
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-primary)",
                    textDecoration: "none",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Password reset functionality will be implemented in a future phase."
                    );
                  }}
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 mt-2"
                style={{
                  padding: "var(--spacing-2)",
                  fontSize: "var(--font-size-base)",
                  fontWeight: "var(--font-weight-medium)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Sign In
              </button>
            </form>

            {/* Info Box */}
            <div
              className="mt-4 p-3"
              style={{
                backgroundColor: "var(--color-accent-blue)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-primary)",
              }}
            >
              <p
                className="mb-0"
                style={{
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-gray-700)",
                }}
              >
                <strong>Note:</strong> This login feature is a placeholder. Full
                functionality will provide admin access to a dashboard for
                managing translators, companies, and revenue insights.
              </p>
            </div>

            {/* Register Link */}
            <div className="text-center mt-4">
              <p
                style={{
                  color: "var(--color-gray-600)",
                  fontSize: "var(--font-size-sm)",
                }}
              >
                Don't have an account?{" "}
                <a
                  href="#"
                  style={{
                    color: "var(--color-primary)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Registration will be available in a future phase.");
                  }}
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
