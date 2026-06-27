"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/navigation";

const serviceDropdownItems = [
  { label: "Hair Loss", href: "/services?category=hair-loss" },
  { label: "Acne & Scars", href: "/services?category=acne-scar" },
  { label: "Laser Hair Reduction", href: "/services?category=laser-hair" },
  { label: "Pigmentation", href: "/services?category=pigmentation" },
  { label: "Vitiligo", href: "/services?category=vitiligo" },
  { label: "Dermatosurgery", href: "/services?category=dermatosurgery" },
  { label: "Medical Dermatology", href: "/services?category=medical-dermatology" },
  { label: "Anti-Ageing", href: "/services?category=anti-ageing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showAlt = isContact && !scrolled;

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <nav className={`w-full fixed top-0 z-[100] transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-[#F7F3EF]/90 backdrop-blur-xl rounded-full shadow-sm px-8 py-3" : ""}`}>
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            item.label === "Services" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={`text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                    showAlt
                      ? "text-white hover:text-white/70"
                      : "text-[#2E2E2E] hover:text-[#5A2A5D]"
                  }`}
                >
                  {item.label}
                  <svg className="inline-block w-3 h-3 ml-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* ─── DROPDOWN ─── */}
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white rounded-2xl shadow-xl border border-[#E4DFE8] py-2 min-w-[200px] animate-in fade-in slide-in-from-top-2 duration-200">
                      {serviceDropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          className="block px-5 py-2.5 text-xs font-medium tracking-wide text-[#2E2E2E] hover:bg-[#F5F0EB] hover:text-[#5A2A5D] transition-colors duration-200"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                      <div className="border-t border-[#E4DFE8] mt-1 pt-1">
                        <Link
                          href="/services"
                          className="block px-5 py-2.5 text-xs font-semibold tracking-wide text-[#5A2A5D] hover:bg-[#F5F0EB] transition-colors duration-200"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                  showAlt
                    ? "text-white hover:text-white/70"
                    : "text-[#2E2E2E] hover:text-[#5A2A5D]"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <Link href="/" onClick={(e) => { if (window.location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} className="flex items-center gap-1.5 md:gap-2 absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo.svg"
            alt="AMETHYST logo"
            width={42}
            height={42}
            style={{
              height: "32px",
              width: "auto",
              ...(showAlt ? { filter: "brightness(0) invert(1)", WebkitFilter: "brightness(0) invert(1)" } : {}),
            }}
            className="md:!h-[42px]"
          />
          <div className="flex flex-col">
            <span
              className="text-[13px] md:text-lg tracking-wide whitespace-nowrap leading-tight"
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontWeight: 600,
                color: showAlt ? "white" : "#5A2A5D",
              }}
            >
              AMETHYST SKIN CLINIC
            </span>
            <span
              className="text-[7.5px] sm:text-[8px] md:text-[10px] tracking-[0.15em] uppercase opacity-80 whitespace-nowrap"
              style={{
                color: showAlt ? "white" : "#5A2A5D",
                marginTop: "-1px"
              }}
            >
              by Dr. Shruthi Janardhanan
            </span>
          </div>
        </Link>

        <div className="hidden md:block ml-auto">
          <a
            href="https://u.tatvacare.in/r/mDN7hS"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-all duration-300 ${
              showAlt
                ? "bg-white text-[#5B1F6A] border border-white hover:bg-white/90"
                : "bg-[#5A2A5D] border border-[#5A2A5D] text-white hover:bg-[#4A1F4D] hover:border-[#4A1F4D]"
            }`}
          >
            <img src="/logo-cream.svg" alt="" width={20} height={20} className="h-5 w-auto" />
            Book Appointment
          </a>
        </div>

        <button
          aria-label="Toggle Menu"
          className={`md:hidden ml-auto w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105 ${
            showAlt ? "bg-white/20 text-white" : "bg-[#5A2A5D] text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 bg-[#F7F3EF] rounded-3xl border border-[#E4DFE8] px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            item.label === "Services" ? (
              <div key={item.label} className="flex flex-col gap-2">
                <Link
                  href={item.href}
                  className="text-xs font-medium uppercase tracking-[0.12em] text-[#2E2E2E]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#E4DFE8]">
                  {serviceDropdownItems.map((dropItem) => (
                    <Link
                      key={dropItem.label}
                      href={dropItem.href}
                      className="text-[11px] font-medium tracking-wide text-[#6B6570] hover:text-[#5A2A5D] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {dropItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.12em] text-[#2E2E2E]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          <a href="https://u.tatvacare.in/r/mDN7hS" target="_blank" rel="noopener noreferrer" className="bg-[#5A2A5D] text-white text-xs font-medium uppercase tracking-[0.1em] px-5 py-3 rounded-full text-center hover:bg-[#4A1F4D] transition-all duration-300 flex items-center justify-center gap-2" onClick={() => setMenuOpen(false)}>
            <img src="/logo-cream.svg" alt="" width={20} height={20} className="h-5 w-auto" />
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}