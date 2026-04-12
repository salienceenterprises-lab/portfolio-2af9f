"use client";
import { motion } from "framer-motion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, y: 16, scale: 0.85 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 240, damping: 18 } } };

export default function PortfolioSkills({ data }) {
  if (!data?.skills?.length) return null;
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden" style={{ background: "#080000" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(225,29,29,0.12)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e11d1d" }}>[ 05 ]</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "rgba(245,240,232,0.2)" }}>Skills</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black uppercase leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", color: "#f5f0e8" }}>
          Arsenal
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }} className="h-0.5 mb-14" style={{ background: "#e11d1d" }} />

        <motion.div variants={container} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} className="flex flex-wrap gap-3">
          {data.skills.map((skill, i) => (
            <motion.div key={`${skill}-${i}`} variants={item} whileHover={{ y: -4, scale: 1.05 }} className="group relative cursor-default">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "rgba(225,29,29,0.3)", filter: "blur(8px)" }} />
              <div className="relative flex items-center gap-2.5 px-5 py-3 transition-all duration-200"
                style={{ background: "rgba(225,29,29,0.05)", border: "1px solid rgba(225,29,29,0.18)" }}>
                <div className="w-1 h-4 flex-shrink-0" style={{ background: "#e11d1d" }} />
                <span className="text-sm font-black uppercase tracking-wider" style={{ color: "rgba(245,240,232,0.75)" }}>
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }} className="flex items-center gap-4 mt-14">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #e11d1d, transparent)" }} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(225,29,29,0.4)" }}>
            {data.skills.length} Technologies
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, rgba(245,240,232,0.1), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
