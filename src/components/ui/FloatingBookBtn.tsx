"use client";

import { useState, useEffect } from "react";

export default function FloatingBookBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book Appointment"
      className="glass-book-btn"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(10px)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-cream.svg" alt="" className="glass-book-btn-logo" />
      <span>Book Appointment</span>
    </a>
  );
}
