"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { treatments } from "@/lib/data/treatments";
import { Reveal } from "../ui/RevealAnimation";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const wheel = wheelRef.current;
    if (!wheel) return () => window.removeEventListener("resize", handleResize);

    // Pause CSS animation when off-screen to reduce lag
    let paused = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && paused) {
          wheel.style.animationPlayState = "running";
          paused = false;
        } else if (!entry.isIntersecting && !paused) {
          wheel.style.animationPlayState = "paused";
          paused = true;
        }
      },
      { threshold: 0 }
    );
    observer.observe(sectionRef.current!);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  // Pills span the full 360° evenly
  const pillCount = treatments.length;
  const orbitRadius = 260; // px — fixed distance from center to pill midpoint

  const wheelAnimation = "wheelSpin 50s linear infinite";

  return (
    <section id="home" ref={sectionRef} className="relative bg-[#F5F0EB] overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* ─── NAV SPACER ─── */}
      <div className="pt-24" />

      {/* ─── CENTERED HEADLINE ─── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
      </div>

      {/* ─── SPINNING WHEEL SECTION ─── */}
      <div className="relative w-full overflow-hidden mt-10" style={{ height: 680 }}>
        {/* Full-bleed skin-toned background image */}
        <div
          className="absolute inset-0 rounded-[48px] mx-4 overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1400&q=80" 
              alt="Skin treatment"
              className="w-full h-full object-cover"
            />
          {/* Top gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ─── LOGO OVERLAY ON BACKGROUND IMAGE ─── */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-12 md:pt-20 pointer-events-none">
          <div className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-cream.svg" alt="" className="h-16 w-auto mb-1 animate-icon-drop" />
            <h1
              className="text-[clamp(3.5rem,12vw,7rem)] leading-[1.05] text-white animate-text-reveal"
              style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}
            >
              AMETHYST
            </h1>
            <p className="text-lg md:text-xl tracking-[0.25em] font-medium text-white/90 mt-0 animate-slide-up-fade">
              SKIN CLINIC
            </p>
            <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-white/70 mt-0.5 font-medium animate-letter-expand">
              MEDICAL & AESTHETIC DERMATOLOGY
            </p>
          </div>
        </div>

        {/* ─── THE SPINNING WHEEL ─── */}
        <div
          className="absolute left-1/2 z-10"
          style={{
            width: `${orbitRadius * 2}px`,
            height: `${orbitRadius * 2}px`,
            bottom: `-${orbitRadius}px`,
            transform: "translateX(-50%)",
          }}
        >
          <div
            ref={wheelRef}
            className="w-full h-full rounded-full"
            style={{
              animation: wheelAnimation,
              transformOrigin: "center center",
            }}
          >
            {treatments.map((t, i) => {
              const angleStep = 360 / pillCount;
              const pillAngle = i * angleStep;
              const rad = (pillAngle * Math.PI) / 180;
              const x = Math.round(Math.sin(rad) * orbitRadius * 1000) / 1000;
              const y = Math.round(-Math.cos(rad) * orbitRadius * 1000) / 1000;

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${Math.round(pillAngle + 90)}deg)`,
                  }}
                >
                  <div
                    style={{
                      width: "220px",
                      height: "48px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "4px",
                      paddingRight: "16px",
                      gap: "10px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        overflow: "hidden",
                        border: "2px solid rgba(255,255,255,0.8)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.img} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: isMobile ? "10px" : "11px",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {t.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── CENTER BADGE: "Explore our treatments" Dome Cutout ─── */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end"
          style={{
            width: "460px",
            height: "200px",
            background: "#F5F0EB",
            borderTopLeftRadius: "230px 200px",
            borderTopRightRadius: "230px 200px",
          }}
        >
          <Link
            href="/services"
            className="flex flex-col items-center gap-2 mb-4 group transition-all duration-500"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Amethyst Logo" className="h-10 md:h-12 w-auto group-hover:scale-110 transition-transform" />
            <span className="text-sm md:text-base font-semibold text-[#2E2E2E] text-center">
              Explore our treatments
            </span>
          </Link>
          
          {/* SPACE FOR THE UPCOMING BOOK APPOINTMENT BUTTON */}
          <div className="mb-4 md:mb-6 flex justify-center w-full min-h-[44px]">
             {/* You will drop the Book Appointment button component right here */}
          </div>
        </div>
      </div>
    </section>
  );
}
