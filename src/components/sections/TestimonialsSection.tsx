"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { reviews } from "@/lib/data/testimonials";
import { Reveal } from "../ui/RevealAnimation";

const StarIcon = () => (
  <svg className="w-4 h-4 text-[#F5A623] fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitioningRef = useRef(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerPage(3);
      else if (w >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const navigate = useCallback((page: number) => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(((page % totalPages) + totalPages) % totalPages);
      setIsTransitioning(false);
      transitioningRef.current = false;
    }, 300);
  }, [totalPages]);

  const next = useCallback(() => navigate(activePage + 1), [activePage, navigate]);
  const prev = useCallback(() => navigate(activePage - 1), [activePage, navigate]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const startIdx = activePage * itemsPerPage;
  const visible = reviews.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section className="py-9 md:py-10 bg-[#EFE7DF]">
      <div className="max-w-[480px] mx-auto px-6">
        <Reveal delay={0.1}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Patient Stories</span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl text-[#2E2E2E] leading-[1.1]"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                What our<br />patients say
              </h2>
            </div>
            <div className="flex gap-2 flex-shrink-0 self-end">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-[#E4DFE8] flex items-center justify-center text-[#2E2E2E] hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300"
                aria-label="Previous reviews"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-[#E4DFE8] flex items-center justify-center text-[#2E2E2E] hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300"
                aria-label="Next reviews"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div className="overflow-hidden">
          <div
            className="grid gap-4 transition-opacity duration-500"
            style={{
              opacity: isTransitioning ? 0 : 1,
              gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
            }}
          >
            {visible.map((review, i) => (
              <div
                key={startIdx + i}
                className="bg-white rounded-2xl p-5 flex flex-col"
                style={{ boxShadow: "0 4px 20px rgba(91,31,106,0.08)" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="text-[#555] text-[13px] leading-relaxed mb-4 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#5B1F6A] text-sm">{review.name}{review.badge ? <span className="font-normal text-[#999] text-[11px] ml-1">· {review.badge}</span> : null}</p>
                  <p className="text-[10px] text-[#aaa] mt-0.5">Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activePage === i ? "w-8 bg-[#5A2A5D]" : "w-3 bg-[#E4DFE8]"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
