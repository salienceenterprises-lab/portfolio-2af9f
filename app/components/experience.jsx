"use client";
import { motion } from "framer-motion";

export default function PortfolioExperience({ data }) {
  if (!data?.experience?.length) return null;
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden" style={{ background: "#080000" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(225,29,29,0.12)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e11d1d" }}>[ 03 ]</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "rgba(245,240,232,0.2)" }}>Experience</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black uppercase leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", color: "#f5f0e8" }}>
          Deployments
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }} className="h-0.5 mb-14" style={{ background: "#e11d1d" }} />

        <div className="space-y-5">
          {data.experience.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 18, delay: i * 0.07 }}
              className="group relative p-7 transition-all duration-300"
              style={{ background: "rgba(245,240,232,0.02)", border: "1px solid rgba(225,29,29,0.1)" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(225,29,29,0.35)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(225,29,29,0.1)"}>
              {/* Number */}
              <div className="absolute top-7 right-7 font-black select-none"
                style={{ fontSize: "4rem", lineHeight: 1, color: "rgba(225,29,29,0.05)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(225,29,29,0.07)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="absolute top-0 left-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#e11d1d" }} />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-black uppercase tracking-tight text-lg leading-tight mb-1" style={{ color: "#f5f0e8" }}>
                    {exp.role}
                  </h3>
                  <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "#e11d1d" }}>
                    {exp.company}{exp.location ? ` — ${exp.location}` : ""}
                  </p>
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] flex-shrink-0"
                  style={{ color: "rgba(225,29,29,0.6)" }}>{exp.period}</span>
              </div>

              {exp.description && (
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.4)" }}>{exp.description}</p>
              )}
              {exp.highlights?.filter(h => h?.trim()).length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {exp.highlights.filter(h => h?.trim()).map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>
                      <span className="mt-2 w-1 h-1 flex-shrink-0 rotate-45" style={{ background: "#e11d1d" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {exp.stack?.filter(s => s?.trim()).length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(225,29,29,0.08)" }}>
                  {exp.stack.filter(s => s?.trim()).map((s) => (
                    <span key={s} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1"
                      style={{ color: "rgba(225,29,29,0.7)", background: "rgba(225,29,29,0.06)", border: "1px solid rgba(225,29,29,0.15)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
