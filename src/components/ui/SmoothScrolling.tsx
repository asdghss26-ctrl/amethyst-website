"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

interface SmoothScrollingProps {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  useEffect(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    // Scroll-snap logic using GSAP ScrollTrigger
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
        if (target) {
          smoother.scrollTo(target, true, "top top");
        }
      }, 120);
    };

    ScrollTrigger.addEventListener("scrollEnd", onScroll);

    return () => {
      clearTimeout(snapTimeout);
      ScrollTrigger.removeEventListener("scrollEnd", onScroll);
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
