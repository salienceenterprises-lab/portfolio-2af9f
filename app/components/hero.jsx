"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  if (!data) return null;
  const hasPhoto = !!data?.heroImageBase64;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#050000" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ background: "linear-gradient(135deg, transparent 38%, #e11d1d 38%, #e11d1d 39.5%, transparent 39.5%)" }} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(225,29,29,0.2)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className={hasPhoto ? "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" : ""}>
          <div className={hasPhoto ? "" : "max-w-3xl"}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#e11d1d" }} />
              <span className="text-[9px] font-black uppercase tracking-[0.6em]" style={{ color: "#e11d1d" }}>Portfolio</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              {(data.name || "YOUR NAME").split(" ").map((word, i) => (
                <div key={i} className="block font-black uppercase leading-none"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "-0.03em",
                    color: i % 2 === 0 ? "#f5f0e8" : "transparent",
                    WebkitTextStrokeWidth: i % 2 === 0 ? "0" : "1.5px",
                    WebkitTextStrokeColor: i % 2 === 0 ? "transparent" : "rgba(225,29,29,0.8)",
                  }}>
                  {word}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 mt-5 mb-5">
              <div className="w-12 h-0.5" style={{ background: "#e11d1d" }} />
              <span className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: "rgba(225,29,29,0.9)" }}>
                {data.title || "Professional Title"}
              </span>
            </motion.div>

            {data.sloganHeroSection && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base mb-8 max-w-md leading-relaxed" style={{ color: "rgba(245,240,232,0.4)" }}>
                {data.sloganHeroSection}
              </motion.p>
            )}

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4">
              {(data?.resumeBase64 || data?.resume) && (
                <a href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : "/resume.pdf"}
                  download className="inline-flex items-center gap-2 px-7 py-3.5 font-black text-[11px] uppercase tracking-widest text-white"
                  style={{ background: "#e11d1d" }}>
                  <FaDownload className="w-3 h-3" /> Resume
                </a>
              )}
              <div className="flex items-center gap-4">
                {data?.github && (
                  <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,240,232,0.3)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#f5f0e8"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(245,240,232,0.3)"}>
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {data?.linkedin && (
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,240,232,0.3)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#e11d1d"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(245,240,232,0.3)"}>
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {hasPhoto && (
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: "#e11d1d" }} />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: "#e11d1d" }} />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: "#e11d1d" }} />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: "#e11d1d" }} />
                <img src={data.heroImageBase64} alt={data.name} className="w-72 h-96 object-cover"
                  style={{ filter: "grayscale(15%) contrast(1.1)", boxShadow: "6px 6px 0 #e11d1d" }} />
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
              </div>
            </motion.div>
          )}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-6 flex items-center gap-3">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #e11d1d, transparent)" }} />
          <span className="text-[9px] font-black uppercase tracking-[0.5em]" style={{ color: "rgba(225,29,29,0.4)" }}></span>
        </motion.div>
      </div>
    </section>
  );
}
