"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  if (!data?.education?.length) return null;
  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden" style={{ background: "#050000" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(225,29,29,0.12)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e11d1d" }}>[ 02 ]</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "rgba(245,240,232,0.2)" }}>Education</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black uppercase leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", color: "#f5f0e8" }}>
          Training
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }} className="h-0.5 mb-14" style={{ background: "#e11d1d" }} />

        <div className="space-y-6">
          {data.education.map((edu, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-6 p-7 transition-all duration-300"
              style={{ background: "rgba(245,240,232,0.02)", border: "1px solid rgba(225,29,29,0.1)", borderLeft: "3px solid #e11d1d" }}>
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: "rgba(225,29,29,0.08)", border: "1px solid rgba(225,29,29,0.2)" }}>
                <FaGraduationCap className="w-4 h-4" style={{ color: "#e11d1d" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                  <h3 className="font-black uppercase tracking-tight text-lg leading-tight"
                    style={{ color: "#f5f0e8" }}>{edu.degree}</h3>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] flex-shrink-0"
                    style={{ color: "#e11d1d" }}>{edu.period}</span>
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest mb-3"
                  style={{ color: "rgba(225,29,29,0.6)" }}>
                  {edu.institution}{edu.location ? ` — ${edu.location}` : ""}
                </p>
                {edu.description && (
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.4)" }}>{edu.description}</p>
                )}
                {edu.achievements?.filter(a => a?.trim()).length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {edu.achievements.filter(a => a?.trim()).map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>
                        <span className="mt-1.5 w-1 h-1 flex-shrink-0" style={{ background: "#e11d1d" }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
