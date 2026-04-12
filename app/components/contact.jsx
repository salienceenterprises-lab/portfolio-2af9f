"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
  FaCircleNotch,
} from "react-icons/fa";

export default function Contact({ data }) {
  const web3forms_key = data?.web3forms_key || "";
  const hasForm = Boolean(web3forms_key);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasForm) return;
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3forms_key,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: data?.email ? `mailto:${data.email}` : "#",
      display: data?.email || "—",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: data?.github || "#",
      display: data?.github
        ? data.github.replace(/^https?:\/\/(www\.)?github\.com\//, "")
        : "—",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: data?.linkedin || "#",
      display: data?.linkedin
        ? data.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "")
        : "—",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "#080000",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`@media (max-width: 767px) { .kr-two-col { display: block !important; } }`}</style>
      {/* scan-line overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(225,29,29,0.03) 3px, rgba(225,29,29,0.03) 4px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* section label */}
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "#e11d1d",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          [ 07 ] / Contact
        </p>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#f5f0e8",
            marginBottom: "3rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Get In Touch
        </motion.h2>

        <div
          className="kr-two-col"
          style={{
            display: "grid",
            gridTemplateColumns: hasForm ? "1fr 1.4fr" : "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* ── LEFT: contact links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              {data?.contactBlurb ||
                "Have a project in mind or just want to connect? Reach out through any of the channels below."}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.85rem 1.25rem",
                    borderLeft: "3px solid #e11d1d",
                    background: "rgba(225,29,29,0.05)",
                    color: "#f5f0e8",
                    textDecoration: "none",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(225,29,29,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(225,29,29,0.05)";
                  }}
                >
                  <span style={{ color: "#e11d1d", fontSize: "1.1rem" }}>
                    {link.icon}
                  </span>
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.45)",
                        marginBottom: "0.1rem",
                      }}
                    >
                      {link.label}
                    </span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                      {link.display}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: form ── */}
          {hasForm && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                background: "rgba(225,29,29,0.04)",
                border: "1px solid rgba(225,29,29,0.15)",
                padding: "2rem",
              }}
            >
              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  htmlFor="kname"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.5)",
                  }}
                >
                  Name
                </label>
                <input
                  id="kname"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    background: "#050000",
                    border: "1px solid rgba(225,29,29,0.2)",
                    color: "#f5f0e8",
                    padding: "0.75rem 1rem",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#e11d1d";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(225,29,29,0.2)";
                  }}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  htmlFor="kemail"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.5)",
                  }}
                >
                  Email
                </label>
                <input
                  id="kemail"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    background: "#050000",
                    border: "1px solid rgba(225,29,29,0.2)",
                    color: "#f5f0e8",
                    padding: "0.75rem 1rem",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#e11d1d";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(225,29,29,0.2)";
                  }}
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  htmlFor="kmessage"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.5)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="kmessage"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    background: "#050000",
                    border: "1px solid rgba(225,29,29,0.2)",
                    color: "#f5f0e8",
                    padding: "0.75rem 1rem",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#e11d1d";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(225,29,29,0.2)";
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                style={{
                  background: status === "success" ? "rgba(225,29,29,0.25)" : "#e11d1d",
                  color: "#f5f0e8",
                  border: "none",
                  padding: "0.9rem 1.75rem",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor:
                    status === "sending" || status === "success"
                      ? "not-allowed"
                      : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  transition: "background 0.2s, opacity 0.2s",
                  opacity: status === "sending" ? 0.75 : 1,
                  alignSelf: "flex-start",
                  minWidth: "160px",
                }}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <FaPaperPlane /> Send Message
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                        style={{ display: "inline-flex" }}
                      >
                        <FaCircleNotch />
                      </motion.span>
                      Sending...
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <FaCheckCircle /> Sent!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <FaPaperPlane /> Try Again
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {status === "error" && (
                <p
                  style={{
                    color: "#e11d1d",
                    fontSize: "0.8rem",
                    marginTop: "-0.5rem",
                  }}
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
