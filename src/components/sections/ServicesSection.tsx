"use client";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { motion } from "framer-motion";
import { Reveal } from "../ui/RevealAnimation";

export default function Services() {
  return (
    <section id="services" className="pt-9 pb-0 md:pt-10 md:pb-0 bg-[#F7F3EF]">
      <div className="max-w-[480px] mx-auto px-6">
        <Reveal delay={0.1}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Services</span>
            </div>
            <h2
              className="text-3xl md:text-4xl text-[#2E2E2E]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Our treatments
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-[12px]">
          {services.slice(0, 4).map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative group bg-white/50 backdrop-blur-xl border border-white/70 rounded-[20px] p-5 flex flex-col justify-start h-[190px] shadow-[0_8px_32px_rgba(91,31,106,0.06)] hover:shadow-[0_16px_48px_rgba(91,31,106,0.12)] hover:bg-white/70 transition-all duration-500 overflow-hidden"
              style={{
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 8px 32px rgba(91,31,106,0.06)',
              }}
            >
              {/* Liquid Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none transition-opacity duration-300" />
              
              <div className="w-9 h-9 rounded-full bg-[#f3eaf8]/80 backdrop-blur-sm border border-white flex items-center justify-center text-[#5B1F6A] text-base mb-3 flex-shrink-0 z-10 relative">
                {s.icon}
              </div>
              <div className="z-10 relative">
                <h3 className="text-[#5B1F6A] font-bold text-[14px] mb-1 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[#6B6570] text-[12px] leading-[1.5] line-clamp-3">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="flex justify-center mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#5B1F6A] text-white text-xs font-medium uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-[#4A1F4D] transition-all duration-300"
            >
              Explore All Treatments &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
