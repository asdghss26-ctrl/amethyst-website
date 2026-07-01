"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { treatments } from "@/lib/data/treatments";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

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
  const pillCount = displayTreatments.length;

  // Use DESKTOP values for the server render. CSS will handle mobile sizing.
  const orbitRadius = 260;
  const pillWidth = 220;
  const pillHeight = 48;
  const thumbSize = 40;

  const wheelAnimation = "wheelSpin 50s linear infinite";

  return (
    <section id="home" ref={sectionRef} className="relative bg-[#F5F0EB] overflow-hidden">
      {/* ─── NAV SPACER ─── */}
      <div className="pt-20 md:pt-24" />

      {/* ─── CENTERED HEADLINE ─── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
      </div>

      {/* ─── SPINNING WHEEL SECTION ─── */}
      <div className="hero-wheel-section relative w-full overflow-hidden mt-6 md:mt-10 h-[500px] md:h-[680px]">
        {/* Full-bleed skin-toned background image */}
        <div
          className="absolute inset-0 rounded-[28px] md:rounded-[48px] mx-3 md:mx-4 overflow-hidden"
        >
            <Image 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1400&q=75" 
              alt="Skin treatment"
              fill
              priority
              sizes="(max-width: 768px) 95vw, 1400px"
              className="object-cover"
              quality={75}
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
            <Image src="/logo-cream.svg" alt="" width={64} height={64} className="h-10 md:h-16 w-auto mb-1 animate-icon-drop" style={{ filter: "brightness(0) invert(1)" }} />
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
              MEDICAL &amp; AESTHETIC DERMATOLOGY
            </p>
          </div>
        </div>

        {/* ─── THE SPINNING WHEEL ─── */}
        <div
          className="hero-orbit-container absolute left-1/2 z-10"
          style={{ transform: "translateX(-50%)" }}
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
              // Use desktop orbit radius for pill positioning — CSS scales the container
              const x = Math.round(Math.sin(rad) * orbitRadius * 1000) / 1000;
              const y = Math.round(-Math.cos(rad) * orbitRadius * 1000) / 1000;

              return (
                <div
                  key={i}
                  className="hero-pill-wrapper"
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) rotate(${Math.round(pillAngle + 90)}deg)`,
                  }}
                >
                  <div className="hero-pill">
                    <div className="hero-thumb">
                      <Image src={t.img} alt="" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <span className="hero-pill-text">
                      {t.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── CENTER BADGE: "Explore our treatments" Dome Cutout ─── */}
        <div className="hero-dome absolute bottom-0 left-1/2 -translate-x-1/2 z-20 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2 md:pb-3">
            <Link
              href="/services"
              className="flex flex-col items-center gap-1 md:gap-1.5 group transition-all duration-500"
            >
              <Image src="/logo.svg" alt="Amethyst Logo" width={48} height={48} className="w-7 md:w-10 lg:w-12 h-auto group-hover:scale-110 transition-transform duration-300" />
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
