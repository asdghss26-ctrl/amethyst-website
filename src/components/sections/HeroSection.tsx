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

  // Only display the original treatments in the hero wheel so it doesn't get overcrowded
  const ORIGINAL_TREATMENT_IDS = [
    "prp-hair", "gfc-hair", "iprf-scalp", "hair-threads",
    "subcision", "mnrf", "tca-cross",
    "picolaser", "picofusion", "cosmelan",
    "excimer",
    "skin-tag", "milia", "earlobe", "biopsy"
  ];
  const displayTreatments = treatments.filter(t => ORIGINAL_TREATMENT_IDS.includes(t.id));

  // ─── RESPONSIVE VALUES ───
  const pillCount = displayTreatments.length;
  const orbitRadius = isMobile ? 170 : 260;
  const pillWidth = isMobile ? 160 : 220;
  const pillHeight = isMobile ? 38 : 48;
  const thumbSize = isMobile ? 30 : 40;
  const sectionHeight = isMobile ? 500 : 680;
  const domeWidth = isMobile ? 200 : 380;
  const domeHeight = isMobile ? 100 : 170;
  
  // Lowers the spinning wheel further down behind the dome on desktop
  const wheelOffset = isMobile ? 0 : 40;

  const wheelAnimation = "wheelSpin 50s linear infinite";

  return (
    <section id="home" ref={sectionRef} className="relative bg-[#F5F0EB] overflow-hidden">
      {/* ─── NAV SPACER ─── */}
      <div className="pt-20 md:pt-24" />

      {/* ─── CENTERED HEADLINE ─── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
      </div>

      {/* ─── SPINNING WHEEL SECTION ─── */}
      <div className="relative w-full overflow-hidden mt-6 md:mt-10" style={{ height: sectionHeight }}>
        {/* Full-bleed skin-toned background image */}
        <div
          className="absolute inset-0 rounded-[28px] md:rounded-[48px] mx-3 md:mx-4 overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1400&q=80" 
              alt="Skin treatment"
              width={1400}
              height={933}
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-8 md:pt-20 pointer-events-none">
          <div className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-cream.svg" alt="" width={64} height={64} className="h-10 md:h-16 w-auto mb-1 animate-icon-drop" style={{ filter: "brightness(0) invert(1)" }} />
            <h1
              className="text-[clamp(2.5rem,12vw,7rem)] leading-[1.05] text-white animate-text-reveal"
              style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              AMETHYST
            </h1>
            <p className="text-sm md:text-xl tracking-[0.25em] font-medium text-white mt-0 animate-slide-up-fade" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
              SKIN CLINIC
            </p>
            <p className="text-[10px] md:text-sm tracking-[0.15em] uppercase text-white mt-0.5 font-medium animate-letter-expand" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
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
            {displayTreatments.map((t, i) => {
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
                      width: `${pillWidth}px`,
                      height: `${pillHeight}px`,
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "4px",
                      paddingRight: isMobile ? "10px" : "16px",
                      gap: isMobile ? "6px" : "10px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: `${thumbSize}px`,
                        height: `${thumbSize}px`,
                        borderRadius: "50%",
                        flexShrink: 0,
                        overflow: "hidden",
                        border: "2px solid rgba(255,255,255,0.8)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.img} alt="" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: isMobile ? "9px" : "11px",
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
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 overflow-hidden"
          style={{
            width: `${domeWidth}px`,
            height: `${domeHeight}px`,
            background: "#F5F0EB",
            borderTopLeftRadius: `${domeWidth / 2}px ${domeHeight}px`,
            borderTopRightRadius: `${domeWidth / 2}px ${domeHeight}px`,
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2 md:pb-3">
            <Link
              href="/services"
              className="flex flex-col items-center gap-1 md:gap-1.5 group transition-all duration-500"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Amethyst Logo" width={48} height={48} className="w-7 md:w-10 lg:w-12 h-auto group-hover:scale-110 transition-transform duration-300" />
              <p className="text-[12px] md:text-base lg:text-lg font-semibold text-center text-[#2E2E2E] tracking-tight leading-tight">
                Explore our<br className="md:hidden" /> treatments
              </p>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

