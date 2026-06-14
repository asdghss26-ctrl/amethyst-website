"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const achievements = [
  { icon: "🎓", text: "MD in Dermatology — Madras Medical College" },
  { icon: "🌍", text: "MRCP SCE in Dermatology (UK)" },
  { icon: "📝", text: "3 Published Research Articles" },
];

export default function DoctorBioSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            el.style.transition = `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`;
            el.style.opacity = "1";
            el.style.transform = "translateX(0) translateY(0) scale(1)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    const els: HTMLElement[] = [];

    if (photoRef.current) {
      photoRef.current.style.opacity = "0";
      photoRef.current.style.transform = "translateX(-40px)";
      observer.observe(photoRef.current);
      els.push(photoRef.current);
    }

    if (nameRef.current) {
      nameRef.current.style.opacity = "0";
      nameRef.current.style.transform = "translateY(-20px)";
      nameRef.current.dataset.delay = "0.5s";
      observer.observe(nameRef.current);
      els.push(nameRef.current);
    }

    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(-10px)";
      titleRef.current.dataset.delay = "0.7s";
      observer.observe(titleRef.current);
      els.push(titleRef.current);
    }

    if (pillRef.current) {
      pillRef.current.style.opacity = "0";
      pillRef.current.style.transform = "scale(0.8)";
      pillRef.current.dataset.delay = "0.4s";
      observer.observe(pillRef.current);
      els.push(pillRef.current);
    }

    achievementRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateX(30px)";
        ref.dataset.delay = `${0.9 + i * 0.2}s`;
        observer.observe(ref);
        els.push(ref);
      }
    });

    return () => els.forEach((el) => observer.unobserve(el));
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
          <div className="flex flex-col gap-5">
            <h2
              ref={nameRef}
              className="text-3xl md:text-4xl lg:text-5xl text-[#5B1F6A]"
              style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}
            >
              Dr. Shruthi Pavana Janardhanan
            </h2>

            <p
              ref={titleRef}
              className="text-base md:text-lg italic text-[#6B6570]"
            >
              Lead Dermatologist &amp; Aesthetic Specialist
            </p>

            <div
              ref={pillRef}
              className="self-start text-xs md:text-sm font-medium"
              style={{
                background: "#f3eaf8",
                color: "#5B1F6A",
                borderRadius: "20px",
                padding: "6px 16px",
              }}
            >
              MBBS · MD.DVL · DNB.DVL · MNAMS · MRCP SCE DERM(UK)
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  ref={(el) => { achievementRefs.current[i] = el; }}
                  className="flex items-center gap-4"
                >
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <span className="text-sm md:text-base text-[#2E2E2E] font-medium">
                    {a.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm text-[#8F8F8F] mt-2">
              Active member of IADVL · IASTD · NAMS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
