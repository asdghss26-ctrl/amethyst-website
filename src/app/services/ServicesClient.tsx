"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { treatments, Treatment } from "@/lib/data/treatments";
import { Reveal } from "@/components/ui/RevealAnimation";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

interface ServicesClientProps {
  initialCategory?: string;
}

const CATEGORIES = [
  { id: "hair-loss", label: "Hair Loss", icon: "✦" },
  { id: "acne-scar", label: "Acne Scar", icon: "◈" },
  { id: "pigmentation", label: "Pigmentation", icon: "☀" },
  { id: "vitiligo", label: "Vitiligo", icon: "⬡" },
  { id: "quick-procedures", label: "Quick Procedures", icon: "✚" },
];

export default function ServicesClient({ initialCategory }: ServicesClientProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Validate the initial category, fallback to hair-loss
  const defaultCategory = CATEGORIES.some((c) => c.id === initialCategory)
    ? (initialCategory as Treatment["category"])
    : "hair-loss";

  const [activeCategory, setActiveCategory] = useState<Treatment["category"]>(defaultCategory);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // Sync category state from initial prop if it changes
  useEffect(() => {
    if (initialCategory && CATEGORIES.some((c) => c.id === initialCategory)) {
      setActiveCategory(initialCategory as Treatment["category"]);
    }
  }, [initialCategory]);

  const handleCategoryChange = (category: Treatment["category"]) => {
    setActiveCategory(category);
    router.replace(`${pathname}?category=${category}`, { scroll: false });
  };

  const filteredTreatments = treatments.filter((t) => t.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-[#F7F3EF]">
      {/* ─── HERO SECTION ─── */}
      <section className="max-w-5xl mx-auto px-6 mb-16 md:mb-20">
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">
              Treatments & Services
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal delay={0.2}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl text-[#2E2E2E] leading-[1.1]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              World-class dermatology & aesthetics
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-sm md:text-base text-[#6B6570] leading-relaxed md:pt-4">
              At Amethyst, our procedures combine evidence-based medicine with state-of-the-art aesthetic technology. Under the leadership of Dr. Shruthi Pavana Janardhanan, we design custom protocols tailored to your unique skin biology to ensure safe, authentic, and life-changing results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── CATEGORY TABS ─── */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex overflow-x-auto pb-4 scrollbar-none gap-2.5 border-b border-[#E4DFE8] -mx-6 px-6 md:mx-0 md:px-0">
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id as Treatment["category"])}
                className={`flex-shrink-0 flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] px-6 py-3.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#5A2A5D] text-white shadow-md shadow-[#5A2A5D]/10"
                    : "bg-white text-[#2E2E2E] border border-[#E4DFE8] hover:border-[#8E5C8F]"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#8E5C8F]"}>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── TREATMENTS GRID ─── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((t, idx) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white rounded-[32px] border border-[#E4DFE8] overflow-hidden flex flex-col hover:border-[#8E5C8F] hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full h-[220px] overflow-hidden bg-[#FBF8F5] rounded-t-xl">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-xl md:text-2xl text-[#2E2E2E] mb-3 group-hover:text-[#5A2A5D] transition-colors"
                      style={{ fontFamily: "var(--font-dm-serif), serif" }}
                    >
                      {t.name}
                    </h3>
                    <p className="text-[13px] text-[#6B6570] leading-relaxed mb-6 line-clamp-3">
                      {t.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F5F0E8]">
                    <span className="text-[11px] font-medium text-[#9A94A0]">
                      Downtime: <span className="text-[#2E2E2E]">{t.downtime.split(" ")[0]}</span>
                    </span>
                    <button
                      onClick={() => setSelectedTreatment(t)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#5A2A5D] hover:text-[#8E5C8F] transition-colors"
                    >
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ─── BEFORE & AFTER RESULTS SECTION ─── */}
      <section className="bg-white border-y border-[#E4DFE8] py-24 mb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">
                Clinical Efficacy
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#2E2E2E] mb-4"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Proven, authentic outcomes
            </h2>
            <p className="text-sm text-[#6B6570] leading-relaxed">
              We stand by our results. Drag the sliders below to explore the real dermatological transformations achieved under our customized clinical protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Case 1 */}
            <div className="flex flex-col gap-5">
              <BeforeAfterSlider
                beforeImage="/images/results/acne-before.jpg"
                afterImage="/images/results/acne-after.jpg"
                beforeLabel="Before Treatment"
                afterLabel="After 3 Sessions"
              />
              <div>
                <h4 className="text-lg font-bold text-[#2E2E2E]" style={{ fontFamily: "var(--font-dm-serif), serif" }}>
                  Case Study: Acne Scar Revision
                </h4>
                <p className="text-xs text-[#6B6570] mt-1 leading-relaxed">
                  Treatment: Micro-needling Fractional Radiofrequency (MNRF) combined with targeted subcision for rolling and boxcar scars. Note the significant reduction in scar depth and refinement in skin texture.
                </p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="flex flex-col gap-5">
              <BeforeAfterSlider
                beforeImage="/images/results/pigment-before.jpg"
                afterImage="/images/results/pigment-after.jpg"
                beforeLabel="Before Treatment"
                afterLabel="After 4 Sessions"
              />
              <div>
                <h4 className="text-lg font-bold text-[#2E2E2E]" style={{ fontFamily: "var(--font-dm-serif), serif" }}>
                  Case Study: Pigmentation Correction
                </h4>
                <p className="text-xs text-[#6B6570] mt-1 leading-relaxed">
                  Treatment: Picosecond Laser Toning combined with active Tyrosinase-inhibiting medical peels. Realizes clear elimination of dermal sun spots, freckles, and general epidermal melasma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE FAQS ─── */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl text-[#2E2E2E] mb-3"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Service FAQs
          </h2>
          <p className="text-xs text-[#6B6570]">Common questions regarding our clinic treatments</p>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              q: "How do I know which treatment is right for my concerns?",
              a: "During your initial consultation, Dr. Shruthi Pavana Janardhanan performs a complete clinical examination and digital skin analysis. We review your medical history, current skin concerns, and goals to design a fully customized, multi-modal treatment program."
            },
            {
              q: "Are the procedures safe for sensitive or darker skin tones?",
              a: "Yes, absolutely. We use premium devices equipped with fractional delivery systems and customizable settings. For example, our Picosecond laser toning and MNRF microneedling are globally recognized as safe and effective for Fitzpatrick skin types I through VI, presenting minimal risk of hyperpigmentation."
            },
            {
              q: "Is there any preparation required before starting a procedure?",
              a: "Yes. Depending on the procedure, we advise avoiding active topicals (like retinols, glycolic acid, or salicylic acid) for 3-5 days prior. For lasers and chemical peels, strict sun protection and avoidance of tanning for 2 weeks prior is mandatory."
            },
            {
              q: "How many sessions are typically required to see results?",
              a: "Aesthetic concerns like scarring and pigmentation usually require a series of 3 to 6 sessions spaced 4 weeks apart to achieve long-term remodeling. Quick procedures like skin tags and milia extraction are resolved instantly in a single session."
            }
          ].map((faq, idx) => (
            <Reveal key={idx} delay={0.1 + idx * 0.1}>
            <details
              className="card-hover group bg-white rounded-2xl border border-[#E4DFE8] p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-[#8E5C8F] transition-all"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-sm md:text-base text-[#2E2E2E] select-none list-none">
                <span>{faq.q}</span>
                <span className="w-6 h-6 rounded-full bg-[#F2EAF3] text-[#8E5C8F] flex items-center justify-center text-xs group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>
              <p className="text-xs md:text-sm text-[#6B6570] leading-relaxed mt-4 pt-4 border-t border-[#F5F0E8] cursor-default">
                {faq.a}
              </p>
            </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="max-w-5xl mx-auto px-6">
        <div
          className="relative rounded-[32px] md:rounded-[48px] overflow-hidden min-h-[300px] flex items-center justify-center p-8 md:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, #5A2A5D 0%, #8E5C8F 60%, #CFA1A8 100%)",
          }}
        >
          <div className="max-w-xl relative z-10">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Begin your personalized skin transformation
            </h2>
            <p className="text-[#F3DADF] text-xs sm:text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Schedule an in-depth consultation with Dr. Shruthi Pavana Janardhanan to map out a dedicated, result-oriented clinical protocol.
            </p>
            <a
              href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#5A2A5D] px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#F8F6F9] transition-all duration-300 hover:-translate-y-0.5"
            >
              <img src="/logo.svg" alt="" className="h-5 w-auto" /> Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ─── CLINICAL DETAIL DRAWER ─── */}
      <AnimatePresence>
        {selectedTreatment && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[500px] md:w-[600px] bg-white z-50 shadow-2xl border-l border-[#E4DFE8] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#E4DFE8]">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8E5C8F] bg-[#F2EAF3] px-3 py-1 rounded-full">
                  {activeCategory.replace("-", " ")}
                </span>
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="w-10 h-10 rounded-full hover:bg-[#F7F3EF] flex items-center justify-center text-[#6B6570] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Content (Scrollable) */}
              <div className="flex-grow overflow-y-auto p-6 md:p-8 scrollbar-thin">
                <h2
                  className="text-3xl md:text-4xl text-[#2E2E2E] mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  {selectedTreatment.name}
                </h2>

                {/* Cover Image */}
                <div className="relative h-[220px] md:h-[260px] w-full rounded-2xl overflow-hidden mb-8 border border-[#E4DFE8]">
                  <img
                    src={selectedTreatment.img}
                    alt={selectedTreatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-[#6B6570] leading-relaxed mb-8">
                  {selectedTreatment.description}
                </p>

                {/* Quick stats grid */}
                <div className="grid grid-cols-3 gap-3 bg-[#F7F3EF] border border-[#E4DFE8] rounded-2xl p-4 mb-8 text-center">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.1em] text-[#9A94A0] mb-1">
                      ⏱ Duration
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-[#2E2E2E]">
                      {selectedTreatment.duration.split(" ")[0]} mins
                    </span>
                  </div>
                  <div className="border-x border-[#E4DFE8]">
                    <span className="block text-[10px] uppercase tracking-[0.1em] text-[#9A94A0] mb-1">
                      🛡 Downtime
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-[#2E2E2E]">
                      {selectedTreatment.downtime.split(" ")[0]}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.1em] text-[#9A94A0] mb-1">
                      🔄 Sessions
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-[#2E2E2E]">
                      {selectedTreatment.sessions.split(" ")[0]} Recommended
                    </span>
                  </div>
                </div>

                {/* Technology used */}
                {selectedTreatment.technology && (
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2E2E2E] mb-3">
                      Clinical Tech & Methods
                    </h4>
                    <p className="text-xs text-[#6B6570] bg-white border border-[#E4DFE8] rounded-xl px-4 py-3 leading-relaxed">
                      {selectedTreatment.technology}
                    </p>
                  </div>
                )}

                {/* Key Benefits */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2E2E2E] mb-3">
                    Expected Benefits
                  </h4>
                  <ul className="space-y-2">
                    {selectedTreatment.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#6B6570]">
                        <span className="text-[#8E5C8F] mt-0.5">✔</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pre-Care & Post-Care */}
                {selectedTreatment.preCare && selectedTreatment.preCare.length > 0 && (
                  <div className="mb-8 border-t border-[#F5F0E8] pt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2E2E2E] mb-3">
                      Pre-Procedure Guidelines
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedTreatment.preCare.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-[#6B6570] leading-relaxed">
                          <span className="text-[#9A94A0] font-semibold">{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTreatment.postCare && selectedTreatment.postCare.length > 0 && (
                  <div className="mb-8 border-t border-[#F5F0E8] pt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2E2E2E] mb-3">
                      Post-Procedure Recovery
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedTreatment.postCare.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-[#6B6570] leading-relaxed">
                          <span className="text-[#9A94A0] font-semibold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA block before footer */}
                <div style={{ padding: '32px 20px', background: '#f3eaf8', borderRadius: '16px', margin: '0 0 24px', textAlign: 'center' }}>
                  <p style={{ color: '#5B1F6A', fontWeight: 700, fontSize: '18px', margin: '0 0 8px' }}>
                    Interested in this treatment?
                  </p>
                  <p style={{ color: '#666', fontSize: '14px', margin: '0 0 20px' }}>
                    Book a consultation with Dr. Shruthi Pavana Janardhanan
                  </p>
                  <a
                    href={`https://wa.me/918870445185?text=${encodeURIComponent(`Hi Amethyst Skin Clinic, I would like to book a consultation for ${selectedTreatment.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#5B1F6A', color: 'white', padding: '14px 32px', borderRadius: '24px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, display: 'inline-block' }}
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-[#E4DFE8] bg-[#FBF8F5] flex gap-3">
                <a
                  href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedTreatment(null)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#5A2A5D] text-white text-xs font-semibold uppercase tracking-[0.1em] py-4 rounded-xl hover:bg-[#4A1F4D] transition-colors"
                >
                  <img src="/logo-cream.svg" alt="" className="h-5 w-auto" /> Book Treatment Session
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
