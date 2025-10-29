import React, { useState, type FormEvent } from "react";

interface ContactFormProps {
  formType?: "contact" | "job";
}

const ContactForm: React.FC<ContactFormProps> = ({ formType = "contact" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formType === "contact" && !formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (formType === "contact" && !formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (formType === "job" && !formData.file) {
      newErrors.file = "Please upload your CV or portfolio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // In a real application, this would send to the backend
    console.log("Form submitted:", formData);

    // Show success message
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null,
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div
        className="alert alert-success d-flex align-items-center justify-content-center p-5"
        role="alert"
        style={{
          borderRadius: "var(--radius-lg)",
          backgroundColor: "var(--color-success)",
          color: "white",
          fontSize: "var(--font-size-lg)",
          fontWeight: "var(--font-weight-medium)",
        }}
      >
        <div className="text-center">
          <h4 className="mb-2" style={{ color: "white" }}>
            Thank you!
          </h4>
          <p className="mb-0">
            {formType === "contact"
              ? "Your message has been sent successfully. We'll get back to you soon."
              : "Your application has been submitted successfully. We'll review it and contact you soon."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
      {/* Name Field */}
      <div className="d-flex flex-column">
        <label htmlFor="name" className="form-label fw-medium">
          Name <span style={{ color: "var(--color-error)" }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Your full name"
          style={{
            borderRadius: "var(--radius-md)",
            padding: "var(--spacing-2)",
            border: "1px solid var(--color-gray-300)",
          }}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      {/* Email Field */}
      <div className="d-flex flex-column">
        <label htmlFor="email" className="form-label fw-medium">
          Email <span style={{ color: "var(--color-error)" }}>*</span>
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
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      {/* Contact Form Fields */}
      {formType === "contact" && (
        <>
          <div className="d-flex flex-column">
            <label htmlFor="subject" className="form-label fw-medium">
              Subject <span style={{ color: "var(--color-error)" }}>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              placeholder="What is this regarding?"
              style={{
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-2)",
                border: "1px solid var(--color-gray-300)",
              }}
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>

          <div className="d-flex flex-column">
            <label htmlFor="message" className="form-label fw-medium">
              Message <span style={{ color: "var(--color-error)" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              placeholder="Your message..."
              rows={6}
              style={{
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-2)",
                border: "1px solid var(--color-gray-300)",
                resize: "vertical",
              }}
            />
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>
        </>
      )}

      {/* Job Application Field */}
      {formType === "job" && (
        <div className="d-flex flex-column">
          <label htmlFor="file" className="form-label fw-medium">
            CV or Portfolio{" "}
            <span style={{ color: "var(--color-error)" }}>*</span>
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className={`form-control ${errors.file ? "is-invalid" : ""}`}
            accept=".pdf,.doc,.docx"
            style={{
              borderRadius: "var(--radius-md)",
              padding: "var(--spacing-2)",
              border: "1px solid var(--color-gray-300)",
            }}
          />
          <small className="form-text text-muted mt-1">
            Accepted formats: PDF, DOC, DOCX (Max 5MB)
          </small>
          {errors.file && <div className="invalid-feedback">{errors.file}</div>}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary align-self-start mt-2"
        style={{
          padding: "var(--spacing-2) var(--spacing-5)",
          fontSize: "var(--font-size-base)",
          fontWeight: "var(--font-weight-medium)",
          borderRadius: "var(--radius-md)",
        }}
      >
        {formType === "contact" ? "Send Message" : "Submit Application"}
      </button>
    </form>
  );
};

export default ContactForm;
