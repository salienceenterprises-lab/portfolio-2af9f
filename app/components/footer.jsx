"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer({ data }) {
  const year = new Date().getFullYear();
  const name = data?.name || "Portfolio";

  const socials = [
    {
      icon: <FaGithub />,
      href: data?.github || "#",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: data?.linkedin || "#",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: data?.email ? `mailto:${data.email}` : "#",
      label: "Email",
    },
  ];

  return (
    <footer
      style={{
        background: "#050000",
        borderTop: "1px solid rgba(225,29,29,0.15)",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle scan-line overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(225,29,29,0.02) 3px, rgba(225,29,29,0.02) 4px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.25rem",
          position: "relative",
        }}
      >
        {/* LEFT: name + copyright */}
        <div>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#f5f0e8",
              letterSpacing: "0.04em",
              marginBottom: "0.2rem",
            }}
          >
            {name}
            <span style={{ color: "#e11d1d" }}>_</span>
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.08em",
            }}
          >
            &copy; {year} {name}. All rights reserved.
          </p>
        </div>

        {/* CENTER: Built with Salience */}
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.35)",
          }}
        >
          Built with{" "}
          <span
            style={{
              color: "#e11d1d",
              fontWeight: 700,
            }}
          >
            Salience
          </span>
        </p>

        {/* RIGHT: social icons */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                color: "rgba(245,240,232,0.4)",
                fontSize: "1.1rem",
                transition: "color 0.2s",
                display: "inline-flex",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e11d1d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(245,240,232,0.4)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
