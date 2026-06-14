"use client";

import Link from "next/link";
import { Reveal } from "../ui/RevealAnimation";
import CountUp from "../ui/CountUp";

const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const achievements = [
  { icon: "🏥", text: "MD from Madras Medical College" },
  { icon: "🌍", text: "MRCP SCE Dermatology UK" },
  { icon: "📄", text: "3 Published Research Articles" },
];

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Personalized Treatment Plans",
    description: "Every treatment begins with a thorough consultation and a custom plan tailored to your unique skin type, concerns, and goals.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Transparent Recommendations",
    description: "No upselling — only honest, ethical advice about what will truly benefit your skin.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Medical-Grade Safety",
    description: "All treatments are performed using FDA-approved equipment and medical-grade products under strict clinical protocols.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B1F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Comforting Environment",
    description: "From the moment you walk in, our warm, spa-like atmosphere and caring team make every visit a relaxing experience.",
  },
];

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
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-[#5B1F6A]/10 rounded-full px-4 py-1.5 mb-5 self-start">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5B1F6A]">
                      MBBS, MD.DVL, DNB.DVL, MNAMS, MRCP SCE DERM(UK)
                    </span>
                  </div>

                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl text-[#5B1F6A] mb-2"
                    style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}
                  >
                    Dr. Shruthi Pavana Janardhanan
                  </h3>
                  <p className="text-sm md:text-base text-[#6B6570] font-medium mb-8">
                    Lead Dermatologist &amp; Aesthetic Specialist
                  </p>

                  <div className="space-y-4 mb-10">
                    {achievements.map((a, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-lg flex-shrink-0">{a.icon}</span>
                        <span className="text-sm md:text-base text-[#2E2E2E]">{a.text}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#5B1F6A] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#4A184F] transition-all duration-300 hover:-translate-y-0.5 shadow-md self-start"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book a Consultation
                  </a>
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
      <section className="py-28 md:py-36 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Purple divider */}
          <div className="w-16 h-1 bg-[#5B1F6A] rounded-full mx-auto mb-10" />

          <Reveal delay={0.1}>
            <div className="text-center mb-14 md:mb-16">
              <h2
                className="text-4xl md:text-5xl text-[#5B1F6A] mb-4"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                Why Choose Amethyst?
              </h2>
              <p className="text-base md:text-lg text-[#6B6570] max-w-xl mx-auto">
                Every visit is designed around you — your skin, your goals, your comfort.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  className="bg-white rounded-[16px] p-7 h-full"
                  style={{
                    borderLeft: "4px solid #5B1F6A",
                    boxShadow: "0 4px 20px rgba(91,31,106,0.10)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(91,31,106,0.18)";
                    e.currentTarget.style.borderLeftColor = "#7B3F8A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(91,31,106,0.10)";
                    e.currentTarget.style.borderLeftColor = "#5B1F6A";
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-4"
                    style={{
                      background: "#f3eaf8",
                      borderRadius: "50%",
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: "#5B1F6A", fontSize: "18px" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}
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
