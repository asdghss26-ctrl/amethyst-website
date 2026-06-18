"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showAlt = isContact && !scrolled;

  return (
    <nav className={`w-full fixed top-0 z-[100] transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-[#F7F3EF]/90 backdrop-blur-xl rounded-full shadow-sm px-8 py-3" : ""}`}>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
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
          ))}
        </div>

        <Link href="/" onClick={(e) => { if (window.location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo.svg"
            alt="AMETHYST logo"
            width={42}
            height={42}
            style={{
              height: "42px",
              width: "auto",
              ...(showAlt ? { filter: "brightness(0) invert(1)", WebkitFilter: "brightness(0) invert(1)" } : {}),
            }}
          />
          <span
            className="text-xl tracking-wide"
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontWeight: 600,
              color: showAlt ? "white" : "#5A2A5D",
            }}
          >
            AMETHYST
          </span>
        </Link>

        <div className="hidden md:block ml-auto">
          <a
            href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
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
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.12em] text-[#2E2E2E]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="bg-[#5A2A5D] text-white text-xs font-medium uppercase tracking-[0.1em] px-5 py-3 rounded-full text-center hover:bg-[#4A1F4D] transition-all duration-300 flex items-center justify-center gap-2" onClick={() => setMenuOpen(false)}>
            <img src="/logo-cream.svg" alt="" width={20} height={20} className="h-5 w-auto" />
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}