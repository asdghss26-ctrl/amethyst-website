"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function DoctorBioSection() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(-40px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo */}
          <div
            ref={photoRef}
            className="relative overflow-hidden"
            style={{
              borderRadius: "16px",
              height: "580px",
              boxShadow: "0 12px 40px rgba(91,31,106,0.18)",
            }}
          >
            <Image
              src="/images/doctor/dr-shruthi.jpg"
              alt="Dr. Shruthi Pavana Janardhanan"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Details */}
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
        </div>
      </div>
    </section>
  );
}
