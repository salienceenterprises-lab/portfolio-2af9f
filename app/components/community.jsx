"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  if (!data?.community?.length) return null;
  return (
    <section id="community" className="relative py-28 px-6 overflow-hidden" style={{ background: "#050000" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(225,29,29,0.12)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e11d1d" }}>[ 06 ]</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "rgba(245,240,232,0.2)" }}>Impact</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black uppercase leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", color: "#f5f0e8" }}>
          Community
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }} className="h-0.5 mb-14" style={{ background: "#e11d1d" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.community.map((item, i) => {
            if (!item) return null;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ type: "spring", stiffness: 120, damping: 16, delay: i * 0.07 }}
                className="group relative p-7 transition-all duration-300"
                style={{ background: "rgba(245,240,232,0.02)", border: "1px solid rgba(225,29,29,0.1)" }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(225,29,29,0.35)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(225,29,29,0.1)"}>
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "#e11d1d" }} />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(225,29,29,0.08)", border: "1px solid rgba(225,29,29,0.2)" }}>
                    <div className="w-3 h-3 rotate-45" style={{ background: "#e11d1d" }} />
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,240,232,0.2)" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#e11d1d"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "rgba(245,240,232,0.2)"}>
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="font-black uppercase tracking-tight text-white mb-1.5 group-hover:text-[#e11d1d] transition-colors">
                  {item.role || "Contributor"}
                </h3>
                <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: "rgba(225,29,29,0.6)" }}>
                  {item.organization || "Community Initiative"}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
                  {item.description || ""}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
