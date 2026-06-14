"use client";

import { Reveal } from "../ui/RevealAnimation";
import CountUp from "../ui/CountUp";

export default function About() {
  return (
    <>
      {/* ─── SECTION 1: CLINIC INTRO ─── */}
      <section id="about" className="py-28 md:py-36 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B1F6A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5B1F6A]">
                About Our Clinic
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.15] max-w-3xl mb-6"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Where Science Meets the Art of Beautiful Skin
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base md:text-lg text-[#5C5C5C] leading-relaxed max-w-2xl mb-12 md:mb-16">
              Amethyst Skin Clinic is a premium medical and aesthetic dermatology center dedicated to delivering science-backed, results-driven skin care in a warm and welcoming environment.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal delay={0.3}>
              <div className="rounded-[24px] overflow-hidden">
                <img
                  src="/images/clinic/mosaic-1.jpg"
                  alt="Amethyst Skin Clinic interior"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-6">
                {[
                  "Advanced Science-Backed Treatments",
                  "Expert Certified Team",
                  "Personalized Care Plans",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#5B1F6A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg text-[#2E2E2E] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: DOCTOR PROFILE ─── */}
      <section className="py-28 md:py-36 bg-[#f3eaf8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[32px] md:rounded-[40px] overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <Reveal delay={0.1}>
                <div className="h-[400px] md:h-full min-h-[500px] relative">
                  <img
                    src="/images/doctor/dr-shruthi.jpg"
                    alt="Dr. Shruthi Pavana Janardhanan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div style={{ background: "#f3eaf8", borderRadius: "20px", padding: "32px 24px" }}>
                  {/* Doctor Name &amp; Title */}
                  <h2 style={{ color: "#5B1F6A", fontSize: "22px", fontWeight: 700, margin: "0 0 6px", fontFamily: "serif" }}>
                    Dr. Shruthi Pavana Janardhanan
                  </h2>
                  <p style={{ color: "#7a4a8a", fontSize: "14px", fontStyle: "italic", margin: "0 0 16px" }}>
                    Lead Dermatologist &amp; Aesthetic Specialist
                  </p>

                  {/* Credentials Pill */}
                  <div
                    style={{
                      display: "inline-block",
                      background: "white",
                      border: "1px solid #d4a8e8",
                      borderRadius: "20px",
                      padding: "6px 16px",
                      marginBottom: "24px",
                    }}
                  >
                    <span style={{ color: "#5B1F6A", fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px" }}>
                      MBBS &nbsp;·&nbsp; MD.DVL &nbsp;·&nbsp; DNB.DVL &nbsp;·&nbsp; MNAMS &nbsp;·&nbsp; MRCP SCE DERM(UK)
                    </span>
                  </div>

                  {/* Divider */}
                  <div style={{ width: "100%", height: "1px", background: "#d4a8e8", marginBottom: "20px" }} />

                  {/* Achievements */}
                  {[
                    { label: "Qualification", value: "MD in Dermatology — Madras Medical College" },
                    { label: "International", value: "MRCP SCE in Dermatology (UK)" },
                    { label: "Research", value: "3 Published Research Articles" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "14px", alignItems: "flex-start" }}>
                      <div style={{ width: "4px", minWidth: "4px", height: "40px", background: "#5B1F6A", borderRadius: "2px" }} />
                      <div>
                        <span style={{ color: "#5B1F6A", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                          {item.label}
                        </span>
                        <p style={{ color: "#444", fontSize: "13px", margin: "2px 0 0", lineHeight: "1.5" }}>{item.value}</p>
                      </div>
                    </div>
                  ))}

                  {/* Divider */}
                  <div style={{ width: "100%", height: "1px", background: "#d4a8e8", margin: "20px 0" }} />

                  {/* Memberships */}
                  <p style={{ color: "#5B1F6A", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px" }}>
                    Professional Memberships
                  </p>
                  <p style={{ color: "#666", fontSize: "13px", margin: 0, lineHeight: "1.7" }}>
                    Indian Association of Dermatologists, Venereologists &amp; Leprologists (IADVL) &nbsp;·&nbsp; Indian Association for the Study of Sexually Transmitted Diseases (IASTD) &nbsp;·&nbsp; National Academy of Medical Sciences (NAMS)
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: STATS BAR ─── */}
      <section className="py-20 md:py-24" style={{ background: "#5B1F6A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { end: 10, suffix: "+", label: "Years of Excellence" },
              { end: 86, suffix: "+", label: "5-Star Reviews" },
              { end: 4, suffix: "", label: "Core Specialties" },
              { end: 100, suffix: "%", label: "Personalized Plans" },
            ].map((stat, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <div className="text-center">
                  <p
                    className="text-4xl md:text-5xl text-white mb-2"
                    style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}
                  >
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2000} />
                  </p>
                  <p className="text-sm md:text-base text-white/80 font-medium">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: VALUES CARDS ─── */}
      <section className="py-28 md:py-36 bg-[#F5F0EB] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Doctor intro */}
          <Reveal delay={0.1}>
            <div className="text-center mb-14 md:mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5B1F6A] mb-4">
                • MEET OUR DOCTOR
              </p>
              <h2
                className="text-4xl md:text-5xl text-[#5B1F6A] mb-3"
                style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}
              >
                Dr. Shruthi Pavana Janardhanan
              </h2>
              <p className="text-sm md:text-base text-[#6B6570] max-w-2xl mx-auto">
                Lead Dermatologist &amp; Aesthetic Specialist — MBBS · MD.DVL · DNB.DVL · MNAMS · MRCP SCE DERM(UK)
              </p>
            </div>
          </Reveal>

          <div className="w-16 h-1 bg-[#5B1F6A] rounded-full mx-auto mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path d="M9 14l2 2 4-4" />
                  </svg>
                ),
                title: "Personalized Treatment Plans",
                description: "Every patient receives a customized treatment plan tailored to their unique skin type, concerns, and goals.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
                title: "Transparent Recommendations",
                description: "We believe in honest, evidence-based recommendations with no unnecessary procedures.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Medical-Grade Safety",
                description: "All procedures follow strict clinical protocols with medical-grade equipment and certified techniques.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C8 14 10 14 11 15" />
                  </svg>
                ),
                title: "Comforting Environment",
                description: "Our clinic is designed to make you feel calm, welcome, and at ease from the moment you arrive.",
              },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  className="bg-white rounded-[16px] p-6 h-auto w-full break-words overflow-hidden"
                  style={{
                    borderTop: "3px solid #5B1F6A",
                    borderLeft: "1px solid #e8d5f0",
                    borderRight: "1px solid #e8d5f0",
                    borderBottom: "1px solid #e8d5f0",
                    minHeight: "200px",
                    boxShadow: "0 4px 16px rgba(91,31,106,0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(91,31,106,0.16)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(91,31,106,0.08)";
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#f3eaf8",
                      borderRadius: "50%",
                      marginBottom: "14px",
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#5B1F6A",
                      overflowWrap: "break-word",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "13px",
                      color: "#888",
                      lineHeight: "1.7",
                      overflowWrap: "break-word",
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
