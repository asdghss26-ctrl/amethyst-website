"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollingProps {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    (window as any).lenis = lenis;

    // Scroll-snap: snap to nearest section after scrolling stops
    const snapIds = ["home", "about", "services", "testimonials", "blog", "faq", "contact"];
    let snapTimeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        let closestId = snapIds[0];
        let closestDist = Infinity;
        snapIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const dist = Math.abs(rect.top);
            if (dist < closestDist) {
              closestDist = dist;
              closestId = id;
            }
          }
        });
        const target = document.getElementById(closestId);
        if (target) lenis.scrollTo(target, { duration: 0.8 });
      }, 120);
    };

    lenis.on("scroll", onScroll);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(snapTimeout);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}
