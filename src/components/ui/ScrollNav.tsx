"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface Section {
  label: string;
  id: string;
  href?: string;
}

const sections: Section[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery", href: "/gallery" },
  { label: "Contact", id: "contact" },
];

export default function ScrollNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (pathname !== "/") return;

    const elMap = sections
      .map((s, i) => ({ el: document.getElementById(s.id), idx: i }))
      .filter((item) => item.el);

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIdx = activeIndex;
        let bestRatio = 0;
        entries.forEach((entry) => {
          const matched = elMap.find((item) => item.el === entry.target);
          if (matched && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIdx = matched.idx;
          }
        });
        if (bestRatio > 0) setActiveIndex(bestIdx);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-80px 0px -40% 0px" }
    );

    elMap.forEach((item) => item.el && observer.observe(item.el));
    return () => observer.disconnect();
  }, [pathname]);

  const handleClick = (s: Section) => {
    if (s.href && s.id === "gallery") {
      router.push(s.href);
      return;
    }
    const lenis = (window as any).lenis;
    const el = document.getElementById(s.id);
    if (lenis && el) {
      lenis.scrollTo(el, { duration: 1 });
    }
  };

  if (pathname !== "/") return null;

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-3">
      {/* Vertical line */}
      <div className="w-px h-6 bg-[#5B1F6A]/20" />
      {sections.map((s, i) => {
        const isGallery = s.id === "gallery";
        const isActive = i === activeIndex && !isGallery;
        return (
          <button
            key={s.id}
            onClick={() => handleClick(s)}
            className="group relative flex items-center justify-center"
            aria-label={s.label}
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-[#5B1F6A] border-2 border-[#5B1F6A] shadow-[0_0_0_4px_rgba(91,31,106,0.15)]"
                  : "w-2.5 h-2.5 border-2 border-[#5B1F6A]/40 bg-transparent hover:border-[#5B1F6A]/70"
              }`}
            />
            <span className="absolute right-full mr-3 whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-[#5B1F6A] opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E4DFE8] shadow-sm pointer-events-none">
              {s.label}
            </span>
          </button>
        );
      })}
      <div className="w-px h-6 bg-[#5B1F6A]/20" />
    </nav>
  );
}
