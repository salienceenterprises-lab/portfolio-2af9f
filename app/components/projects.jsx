"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  if (!data?.projects?.length) return null;
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden" style={{ background: "#050000" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(225,29,29,0.12)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e11d1d" }}>[ 04 ]</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "rgba(245,240,232,0.2)" }}>Projects</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black uppercase leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", color: "#f5f0e8" }}>
          Weapons
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }} className="h-0.5 mb-14" style={{ background: "#e11d1d" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((proj, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 18, delay: i * 0.07 }}
              className="group relative flex flex-col overflow-hidden transition-all duration-300"
              style={{ background: "rgba(245,240,232,0.02)", border: "1px solid rgba(225,29,29,0.1)" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(225,29,29,0.4)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(225,29,29,0.1)"}>
              <motion.div className="absolute top-0 left-0 right-0 h-0.5 origin-left"
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.06 }}
                style={{ background: "#e11d1d" }} />

              {proj.imageBase64 ? (
                <div className="relative h-44 overflow-hidden">
                  <img src={proj.imageBase64} alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "grayscale(20%) contrast(1.1)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, #050000)" }} />
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black text-white"
                        style={{ background: "#e11d1d" }} onClick={(e) => e.stopPropagation()}>
                        <FaGithub className="w-3 h-3" /> Code
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black"
                        style={{ background: "rgba(245,240,232,0.9)", color: "#050000" }} onClick={(e) => e.stopPropagation()}>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative h-20 flex items-center justify-between px-6"
                  style={{ background: "rgba(225,29,29,0.04)", borderBottom: "1px solid rgba(225,29,29,0.08)" }}>
                  <div className="font-black select-none"
                    style={{ fontSize: "4rem", lineHeight: 1, color: "rgba(225,29,29,0.06)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(225,29,29,0.1)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex gap-3">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,240,232,0.2)" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#e11d1d"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "rgba(245,240,232,0.2)"}>
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,240,232,0.2)" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#f5f0e8"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "rgba(245,240,232,0.2)"}>
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-black uppercase tracking-tight text-base mb-2 transition-colors duration-200"
                  style={{ color: "#f5f0e8" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#e11d1d"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#f5f0e8"}>
                  {proj.title}
                </h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: "rgba(245,240,232,0.4)" }}>{proj.description}</p>
                {proj.stack?.filter(t => t?.trim()).length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4" style={{ borderTop: "1px solid rgba(225,29,29,0.08)" }}>
                    {proj.stack.filter(t => t?.trim()).map((tech) => (
                      <span key={tech} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1"
                        style={{ color: "rgba(225,29,29,0.7)", background: "rgba(225,29,29,0.06)", border: "1px solid rgba(225,29,29,0.15)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
