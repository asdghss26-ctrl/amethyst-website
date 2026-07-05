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
      href="https://u.tatvacare.in/r/mDN7hS"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book Appointment"
      className={`glass-book-btn ${visible ? "visible" : "hidden"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-cream.svg" alt="" width={24} height={24} className="glass-book-btn-logo" />
      <span>Book Appointment</span>
    </a>
  );
}
