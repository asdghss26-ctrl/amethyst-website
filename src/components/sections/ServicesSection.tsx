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
              className="bg-white rounded-[16px] p-[20px] flex flex-col justify-between min-h-[140px] h-full shadow-[0_4px_16px_rgba(91,31,106,0.08)] hover:shadow-[0_8px_24px_rgba(91,31,106,0.15)] transition-all duration-300"
              style={{ border: '1px solid #e8d5f0', borderTop: '3px solid #5B1F6A' }}
            >
              <div className="w-9 h-9 rounded-full bg-[#f3eaf8] flex items-center justify-center text-[#5B1F6A] text-base mb-3 flex-shrink-0">
                {s.icon}
              </div>
              <div>
                <h3 className="text-[#5B1F6A] font-bold text-[14px] mb-1">
                  {s.title}
                </h3>
                <p className="text-[#888] text-[12px] leading-[1.6]">{s.description}</p>
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
