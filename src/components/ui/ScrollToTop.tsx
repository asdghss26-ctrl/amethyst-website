"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    const wrapper = document.getElementById("smooth-wrapper");
    if (wrapper) {
      wrapper.scrollTo(0, 0);
      wrapper.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
