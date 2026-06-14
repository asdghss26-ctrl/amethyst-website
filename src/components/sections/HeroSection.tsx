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
    <section ref={sectionRef} className="relative bg-[#F5F0EB] overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* ─── NAV SPACER ─── */}
      <div className="pt-24" />

      {/* ─── CENTERED HEADLINE ─── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Floating badge: Board Certified */}
        <Reveal delay={0.1}>
          <div className="relative md:absolute md:-left-16 md:top-0 mb-6 md:mb-0 bg-white/80 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 border border-[#E8DCCC] shadow-sm animate-float z-20">
            <div className="w-9 h-9 rounded-full bg-[#F5F0EB] flex items-center justify-center text-base">🏆</div>
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[#4A2E2A]">Board Certified</p>
              <p className="text-[10px] text-[#8B7355]">Dermatologist team</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" className="h-16 w-auto mb-6" />
            <h1
              className="text-[clamp(3.5rem,12vw,7rem)] leading-[1.05] text-[#5B1F6A]"
              style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}
            >
              AMETHYST
            </h1>
            <p className="text-lg md:text-xl tracking-[0.25em] font-medium text-[#5B1F6A] mt-2">
              SKIN CLINIC
            </p>
            <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-[#8B5F9A] mt-3 font-medium">
              MEDICAL & AESTHETIC DERMATOLOGY
            </p>
          </div>
        </Reveal>

        {/* Floating badge: review */}
        <Reveal delay={0.4}>
          <div className="relative md:absolute md:-right-12 md:top-0 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#E8DCCC] shadow-sm max-w-[260px] md:max-w-[190px] animate-float-delay z-20 mx-auto mb-10 md:mb-0">
            <div className="flex gap-0.5 mb-2 md:mb-1.5">
              {[1,2,3,4,5].map(i=>(
                <svg key={i} className="w-3 h-3 text-[#C4924A] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-[12px] md:text-[11px] text-[#4A2E2A] leading-relaxed italic text-left">&ldquo;My acne finally cleared after years of trying everything. The treatment plan was simple, clear, and effective.&rdquo;</p>
            
            <div className="flex justify-between items-end mt-3 md:mt-1.5">
              <div className="text-left">
                <p className="text-[11px] md:text-[10px] text-[#8B5E3C] font-semibold">Sofia Hale</p>
                <p className="text-[10px] text-[#8B7355]">Actress</p>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4C4B0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" alt="Sofia Hale" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
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
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10" />
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
              const x = Math.sin(rad) * orbitRadius;
              const y = -Math.cos(rad) * orbitRadius;

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${pillAngle + 90}deg)`,
                  }}
                >
                  <div
                    style={{
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
            width: "360px",
            height: "140px",
            background: "#F5F0EB",
            borderTopLeftRadius: "180px 140px",
            borderTopRightRadius: "180px 140px",
          }}
        >
          <Link
            href="/services"
            className="flex flex-col items-center gap-1 mb-4 md:mb-6 group transition-all duration-500"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" className="h-6 w-auto group-hover:scale-110 transition-transform" />
            <span className="text-[10px] md:text-xs font-semibold text-[#2E2E2E] text-center max-w-[120px] md:max-w-none">
              Explore our treatments
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
