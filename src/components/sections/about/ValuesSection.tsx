"use client";

import { Reveal } from "@/components/ui/RevealAnimation";

const values = [
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
];

export default function ValuesSection() {
  return (
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
          {values.map((v, i) => (
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
  );
}
