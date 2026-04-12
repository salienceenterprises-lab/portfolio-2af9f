"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  if (!data) return null;

  const allNavLinks = [
    { label: "About",      href: "#about",      key: "about" },
    { label: "Education",  href: "#education",  key: "education" },
    { label: "Experience", href: "#experience", key: "experience" },
    { label: "Projects",   href: "#projects",   key: "projects" },
    { label: "Skills",     href: "#skills",     key: "skills" },
    { label: "Impact",     href: "#community",  key: "community" },
    { label: "Contact",    href: "#contact",    key: "email" },
  ];

  const activeLinks = allNavLinks.filter((link) => {
    if (link.label === "About") return true;
    const d = data?.[link.key];
    return Array.isArray(d) ? d.length > 0 : !!d;
  });

  useEffect(() => {
    const sectionIds = activeLinks.map((l) => l.href.replace("#", ""));
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sorted = sectionIds
        .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? Infinity }))
        .filter((s) => s.top !== Infinity)
        .sort((a, b) => a.top - b.top);
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (window.scrollY >= sorted[i].top - 130) { setActiveSection(sorted[i].id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,0,0,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(225,29,29,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" onClick={(e) => handleNavClick(e, "#about")}
          className="font-black uppercase tracking-tighter text-white text-lg leading-none">
          {data.name || "Portfolio"}
          <span style={{ color: "#e11d1d" }}>_</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {activeLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <div key={link.href} className="relative">
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-200 block"
                  style={{ color: isActive ? "#e11d1d" : "rgba(245,240,232,0.35)" }}>
                  {link.label}
                  {isActive && (
                    <motion.div layoutId="kr-indicator" className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: "#e11d1d" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                </a>
              </div>
            );
          })}
          {(data?.resumeBase64 || data?.resume) && (
            <a href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : "/resume.pdf"}
              download={`${data.name || "Resume"}.pdf`}
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all"
              style={{ background: "#e11d1d", color: "#fff" }}>
              <FaDownload className="w-2.5 h-2.5" /> Resume
            </a>
          )}
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden transition-colors"
          style={{ color: "rgba(245,240,232,0.5)" }}>
          {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-6 pt-2 overflow-hidden"
            style={{ background: "rgba(5,0,0,0.98)", borderBottom: "1px solid rgba(225,29,29,0.15)" }}>
            {activeLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-sm font-black uppercase tracking-widest border-b transition-colors"
                style={{ color: "rgba(245,240,232,0.4)", borderColor: "rgba(225,29,29,0.08)" }}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
