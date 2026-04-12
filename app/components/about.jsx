"use client";
import { motion } from "framer-motion";

export default function PortfolioAbout({ data }) {
  if (!data?.bio) return null;
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden" style={{ background: "#080000" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #e11d1d 0px, #e11d1d 1px, transparent 1px, transparent 5px)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(225,29,29,0.12)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e11d1d" }}>[ 01 ]</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "rgba(245,240,232,0.2)" }}>About</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black uppercase leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.03em", color: "#f5f0e8" }}>
          Who I Am
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }} className="h-0.5 mb-14"
          style={{ background: "#e11d1d" }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
            {data.bio}
          </motion.p>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4">
            {[
              { label: "Name", value: data.name },
              { label: "Role", value: data.title },
              { label: "Email", value: data.email },
            ].filter(i => i.value).map((item) => (
              <div key={item.label} className="flex items-center gap-4 py-3"
                style={{ borderBottom: "1px solid rgba(225,29,29,0.1)" }}>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] w-16 flex-shrink-0"
                  style={{ color: "#e11d1d" }}>{item.label}</span>
                <div className="w-px h-4" style={{ background: "rgba(225,29,29,0.2)" }} />
                <span className="text-sm font-black uppercase tracking-wider"
                  style={{ color: "rgba(245,240,232,0.7)" }}>{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
