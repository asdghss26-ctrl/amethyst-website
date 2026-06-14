"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  end,
  suffix = "",
  duration = 2000,
  className,
  style,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = performance.now();
          const startValue = 0;

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(startValue + (end - startValue) * eased));

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(step);
            }
          };

          animationRef.current = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {count}
      {suffix}
    </span>
  );
}
