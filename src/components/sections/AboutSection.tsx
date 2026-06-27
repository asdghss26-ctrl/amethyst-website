"use client";

import { Reveal } from "../ui/RevealAnimation";
import CountUp from "../ui/CountUp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* ─── CLINIC IMAGE + BULLETS ─── */}
      <section id="about" className="pt-4 pb-9 md:pb-10 bg-[#F5F0EB]">
        <div className="max-w-[480px] md:max-w-5xl lg:max-w-6xl mx-auto px-6">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">
                About Our Clinic
              </span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal delay={0.3}>
              <div className="relative rounded-[24px] overflow-hidden w-full h-[280px] md:h-[360px]">
                <Image
                  src="/images/clinic/mosaic-1.jpg"
                  alt="Amethyst Skin Clinic interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-5">
                {[
                  "Advanced Science-Backed Treatments",
                  "Expert Certified Team",
                  "Personalized Care Plans",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#5B1F6A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-[#2E2E2E] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── DOCTOR PROFILE ─── */}
      <section className="pt-4 pb-9 md:pb-10 bg-[#f3eaf8]">
        <div className="max-w-[480px] md:max-w-4xl lg:max-w-6xl mx-auto px-6">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B1F6A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5B1F6A]">
                Meet Your Doctor
              </span>
            </div>
          </Reveal>

          <div className="bg-white rounded-[32px] md:rounded-[40px] overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="h-[400px] md:h-full min-h-[500px] relative"
              >
                <Image
                  src="/images/doctor/dr-shruthi.jpg"
                  alt="Dr. Shruthi Pavana Janardhanan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center h-full p-6 md:p-10 lg:p-12"
                style={{ background: "#f3eaf8" }}
              >
                <h2 style={{ color: "#5B1F6A", fontSize: "20px", fontWeight: 700, margin: "0 0 4px", fontFamily: "serif" }}>
                  Dr. Shruthi Pavana Janardhanan
                </h2>
                <p style={{ color: "#7a4a8a", fontSize: "13px", fontStyle: "italic", margin: "0 0 12px" }}>
                  Lead Dermatologist &amp; Aesthetic Specialist
                </p>

                <p style={{ color: "#6B6570", fontSize: "13px", lineHeight: "1.6", marginBottom: "16px" }}>
                  A board-certified dermatologist with extensive experience in clinical and aesthetic dermatology. With an MD from Madras Medical College and advanced training in injectables and energy-based devices, she brings expert, personalized care from leading centers in Chennai and Mumbai.
                </p>

                <div
                  style={{
                    display: "inline-block",
                    background: "white",
                    border: "1px solid #d4a8e8",
                    borderRadius: "20px",
                    padding: "6px 16px",
                    marginBottom: "16px",
                    alignSelf: "flex-start",
                  }}
                >
                  <span style={{ color: "#5B1F6A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px" }}>
                    MBBS &nbsp;·&nbsp; MD.DVL &nbsp;·&nbsp; DNB.DVL &nbsp;·&nbsp; MNAMS &nbsp;·&nbsp; MRCP SCE DERM(UK)
                  </span>
                </div>

                <div style={{ width: "100%", height: "1px", background: "#d4a8e8", marginBottom: "16px" }} />

                <div style={{ background: "#f3eaf8", borderRadius: "12px", padding: "16px" }}>
                  {[
                    { label: "Qualification", value: "MD in Dermatology — Madras Medical College" },
                    { label: "International", value: "MRCP SCE in Dermatology (UK)" },
                    { label: "Research", value: "3 Published Research Articles" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", marginBottom: i < 2 ? "12px" : "0", alignItems: "flex-start" }}>
                      <div style={{ width: "4px", minWidth: "4px", height: "40px", background: "#5B1F6A", borderRadius: "2px" }} />
                      <div>
                        <span style={{ color: "#5B1F6A", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                          {item.label}
                        </span>
                        <p style={{ color: "#444", fontSize: "13px", margin: "2px 0 0", lineHeight: "1.5" }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ width: "100%", height: "1px", background: "#d4a8e8", margin: "20px 0" }} />

                <p style={{ color: "#5B1F6A", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px" }}>
                  Professional Memberships
                </p>
                <p style={{ color: "#666", fontSize: "13px", margin: 0, lineHeight: "1.7" }}>
                  Indian Association of Dermatologists, Venereologists &amp; Leprologists (IADVL) &nbsp;·&nbsp; Indian Association for the Study of Sexually Transmitted Diseases (IASTD) &nbsp;·&nbsp; National Academy of Medical Sciences (NAMS)
                </p>

                <div style={{ width: "100%", height: "1px", background: "#d4a8e8", margin: "20px 0" }} />

                <p style={{ color: "#5B1F6A", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 10px" }}>
                  Clinical Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Aesthetic Dermatology", "Injectables & Fillers", "Energy-Based Devices", "Clinical Dermatology", "Hair Loss Treatments", "Pigmentation Correction"].map((spec, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white text-[#6B6570] text-[11px] font-semibold rounded-full border border-[#e8d5f0] shadow-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="bg-[#5B1F6A] select-none">
        <div className="max-w-[480px] md:max-w-5xl lg:max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { end: 10, suffix: "+", label: "Years" },
              { end: 28, suffix: "+", label: "Reviews" },
              { end: 100, suffix: "%", label: "Ethical" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-white mb-1"
                  style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 700, fontSize: "22px" }}
                >
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2000} className="text-white" />
                </p>
                <p className="text-white/80 font-medium" style={{ fontSize: "11px" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
