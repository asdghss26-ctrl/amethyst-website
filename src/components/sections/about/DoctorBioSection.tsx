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

          {/* Right: Bio Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5B1F6A] font-serif mb-2">
                Dr. Shruthi Pavana Janardhanan
              </h2>
              <p className="text-[#8E5C8F] text-sm md:text-base font-medium tracking-wide uppercase">
                Lead Dermatologist & Aesthetic Specialist
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['MBBS', 'MD.DVL', 'DNB.DVL', 'MNAMS', 'MRCP SCE DERM(UK)'].map((cred, i) => (
                <span key={i} className="px-3 py-1.5 bg-white text-[#5B1F6A] text-xs font-bold rounded-full border border-[#e8d5f0] shadow-sm">
                  {cred}
                </span>
              ))}
            </div>

            <div className="space-y-5 text-[#6B6570] text-[15px] leading-[1.8] border-l-2 border-[#d4a8e8] pl-6 relative">
              {/* Decorative accent */}
              <div className="absolute left-[-2px] top-0 w-[2px] h-12 bg-[#5B1F6A]" />

              <p>
                <strong className="text-[#5B1F6A] font-semibold">Dr. Shruthi Pavana Janardhanan</strong> is a board-certified dermatologist with a strong academic background and versatile clinical experience. She completed her MD in Dermatology from the prestigious Madras Medical College, followed by a DNB from the National Board of Examinations and the MRCP SCE in Dermatology (UK).
              </p>
              <p>
                She has extensive experience in both clinical and aesthetic dermatology, with advanced training in injectables and energy-based devices. Her professional journey includes work at leading dermatology centers in Chennai and Mumbai.
              </p>
              <p>
                Dr. Shruthi has authored three published research articles and is an active member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL), the Indian Association for the Study of Sexually Transmitted Diseases (IASTD), and the National Academy of Medical Sciences (NAMS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
