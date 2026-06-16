"use client";
import { useState } from "react";
import { faqItems } from "@/lib/data/faq";
import { Reveal } from "../ui/RevealAnimation";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f3eaf8 0%, #F5F0EB 100%)",
        padding: "48px 20px",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — heading block */}
          <Reveal delay={0.1}>
            <div className="md:sticky md:top-28">
              <p className="text-[#5B1F6A] text-xs font-semibold tracking-[0.15em] mb-3">
                ● FAQ
              </p>
              <h2
                className="text-[#5B1F6A] font-bold leading-tight"
                style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: "24px" }}
              >
                Still have questions?
              </h2>
              <p className="text-[13px] text-[#6B6570] mt-3 leading-relaxed max-w-sm">
                Our team is here to help. Get in touch for personalized answers.
              </p>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#5B1F6A",
                  marginTop: "16px",
                  marginBottom: "24px",
                }}
              />
              <div className="space-y-3">
                <a
                  href="tel:+918870445185"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#f3eaf8" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#5B1F6A">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#2E2E2E] group-hover:text-[#5B1F6A] transition-colors duration-300">
                    +91 88704 45185
                  </span>
                </a>
                <a
                  href="mailto:hello@amethystskinclinic.com"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#f3eaf8" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#5B1F6A">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#2E2E2E] group-hover:text-[#5B1F6A] transition-colors duration-300">
                    hello@amethystskinclinic.com
                  </span>
                </a>
              </div>
              <a
                href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-[0.1em] mt-6 hover:opacity-90 transition-all duration-300"
                style={{
                  background: "#5B1F6A",
                  borderRadius: "24px",
                  padding: "12px 28px",
                }}
              >
                Contact Us
              </a>
            </div>
          </Reveal>

          {/* Right — FAQ accordion */}
          <div className="space-y-[10px]">
            {faqItems.map((faq, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <div
                  className="bg-white overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                  style={{
                    borderRadius: "12px",
                    borderLeft: "3px solid #5B1F6A",
                    boxShadow: "0 2px 12px rgba(91,31,106,0.08)",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-sm font-bold text-[#5B1F6A] pr-4">{faq.q}</span>
                    <span className="text-lg font-bold text-[#5B1F6A] flex-shrink-0 leading-none">
                      {open === i ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out"
                    style={{ maxHeight: open === i ? "200px" : "0", overflow: "hidden" }}
                  >
                    <p className="px-5 pb-4 text-[13px] text-[#666666]" style={{ lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
