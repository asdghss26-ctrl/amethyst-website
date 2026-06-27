"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/RevealAnimation";

const faqItems = [
  {
    q: "What treatments do you offer?",
    a: "We offer Hair Loss Treatments, Acne Scar Revision, Pigmentation Correction, Vitiligo Treatments, Dermatosurgery, Anti-Ageing, Laser Hair Reduction, and more. Visit our Services page for full details.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book directly via WhatsApp at +91 88704 45185.",
  },
  {
    q: "Is there a consultation fee?",
    a: "Please contact us via WhatsApp for consultation details.",
  },
  {
    q: "Where is the clinic located?",
    a: "We are located in Chennai, Tamil Nadu.",
  },
];

const hours = [
  { day: "Monday", hours: "10:00 AM – 7:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
  { day: "Friday", hours: "10:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 7:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className="bg-white overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
      style={{ borderRadius: "12px", borderLeft: "3px solid #5B1F6A" }}
      onClick={toggle}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-sm font-semibold text-[#5B1F6A] pr-4">{question}</span>
        <span className="text-lg font-bold text-[#5B1F6A] flex-shrink-0 leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div
        className="transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "200px" : "0", overflow: "hidden" }}
      >
        <p className="px-5 pb-4 text-[13px] text-[#666666]" style={{ lineHeight: 1.7 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ─── HERO BANNER ─── */}
      <section
        className="text-center"
        style={{
          background: "linear-gradient(135deg, #5B1F6A 0%, #8B4A9C 100%)",
          padding: "110px 20px 60px",
        }}
      >
        <p className="text-white/70 tracking-[0.15em] text-xs font-semibold mb-3">
          ● GET IN TOUCH
        </p>
        <h1
          className="text-white font-bold leading-tight mb-3"
          style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: "28px" }}
        >
          We&apos;d Love to Hear From You
        </h1>
        <p className="text-white/80 text-sm max-w-md mx-auto">
          Reach out to book a consultation or ask us anything
        </p>
      </section>

      {/* ─── CONTACT CARDS ─── */}
      <section style={{ background: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto px-6" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* Phone Card */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: "20px",
                boxShadow: "0 4px 20px rgba(91,31,106,0.06)",
                borderTop: "3px solid #5B1F6A",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(91,31,106,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(91,31,106,0.06)";
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "#f3eaf8" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5B1F6A">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-[#5B1F6A] mb-1.5">Call Us</h3>
              <a href="tel:+918870445185" className="text-xs text-[#5B1F6A] font-medium hover:underline block mb-0.5">
                +91 88704 45185
              </a>
              <p className="text-[11px] text-[#9A94A0]">Mon–Sat: 10am – 7pm</p>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: "20px",
                boxShadow: "0 4px 20px rgba(91,31,106,0.06)",
                borderTop: "3px solid #5B1F6A",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(91,31,106,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(91,31,106,0.06)";
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "#e6f7e6" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-[#5B1F6A] mb-1.5">WhatsApp</h3>
              <p className="text-xs text-[#6B6570] mb-3">Chat with us instantly</p>
              <a
                href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:opacity-90 transition-opacity duration-300"
                style={{
                  background: "#25D366",
                  borderRadius: "20px",
                  padding: "8px 20px",
                }}
              >
                Start Chat →
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="col-span-2 md:col-span-1 bg-white rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: "20px",
                boxShadow: "0 4px 20px rgba(91,31,106,0.06)",
                borderTop: "3px solid #5B1F6A",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(91,31,106,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(91,31,106,0.06)";
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "#f3eaf8" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5B1F6A">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-[#5B1F6A] mb-1.5">Email Us</h3>
              <a href="mailto:amethystskinclinic@gmail.com" className="text-xs text-[#5B1F6A] font-medium hover:underline block mb-0.5">
                amethystskinclinic@gmail.com
              </a>
              <p className="text-[11px] text-[#9A94A0]">We reply within 24 hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION / HOURS ─── */}
      <section style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-6" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Address */}
            <Reveal delay={0.1} direction="left">
              <div className="text-center md:text-left">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4"
                  style={{ background: "#f3eaf8" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#5B1F6A">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h2
                  className="text-xl font-bold text-[#5B1F6A] mb-2"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  Our Location
                </h2>
                <p className="text-sm text-[#6B6570] mb-5 leading-relaxed">
                  Shop 3, 1st Floor, Block-1, Thalambur Rd, Truliv, Navallur, Chennai, Tamil Nadu 600130
                </p>
                <a
                  href="https://www.google.com/maps/place/Amethyst+Skin+Clinic+by+Dr.+Shruthi+Janardhanan/@12.8480867,80.2144724,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525be06d65e053:0xd4bf02961337a48b!8m2!3d12.8480867!4d80.2170473!16s%2Fg%2F11yht_3smd?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5B1F6A] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#8B4A9C] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Get Directions
                </a>
              </div>
            </Reveal>

            {/* Hours */}
            <Reveal delay={0.2} direction="right">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 4px 20px rgba(91,31,106,0.06)" }}
              >
                <div className="bg-[#5B1F6A] px-6 py-4">
                  <h3 className="text-white font-bold text-sm">Clinic Hours</h3>
                </div>
                <div>
                  {hours.map((row, i) => (
                    <div
                      key={row.day}
                      className="flex items-center justify-between px-6 py-3"
                      style={{ background: i % 2 === 0 ? "#f9f5ff" : "white" }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: row.day === "Sunday" ? "#E53E3E" : "#2E2E2E" }}
                      >
                        {row.day}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: row.hours === "Closed" ? "#E53E3E" : "#6B6570" }}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FAQ STRIP ─── */}
      <section style={{ background: "#f3eaf8" }}>
        <div className="max-w-3xl mx-auto px-6" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <Reveal delay={0.1}>
            <h2
              className="text-xl font-bold text-[#5B1F6A] text-center mb-8"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <AccordionItem
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaq === i}
                  toggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
