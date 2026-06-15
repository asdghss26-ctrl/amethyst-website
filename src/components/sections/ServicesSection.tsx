import Link from "next/link";
import { services } from "@/lib/data/services";
import { Reveal } from "../ui/RevealAnimation";

export default function Services() {
  return (
    <section id="services" className="pt-9 pb-0 md:pt-10 md:pb-0 bg-[#F7F3EF]">
      <div className="max-w-[480px] mx-auto px-6">
        <Reveal delay={0.1}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Services</span>
            </div>
            <h2
              className="text-3xl md:text-4xl text-[#2E2E2E]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Our treatments
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <div className="bg-white border border-[#E4DFE8] rounded-2xl p-5 flex flex-col items-start hover:border-[#8E5C8F] hover:shadow-md transition-all duration-300 w-full box-border">
                <div className="w-9 h-9 rounded-full bg-[#F2EAF3] border border-[#E4DFE8] flex items-center justify-center text-[#8E5C8F] text-base mb-3 flex-shrink-0">
                  {s.icon}
                </div>
                <h3
                  className="text-sm font-semibold text-[#2E2E2E] mb-1"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[11px] text-[#6B6570] leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="flex justify-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#5B1F6A] text-white text-xs font-medium uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-[#4A1F4D] transition-all duration-300"
            >
              Explore All Treatments &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
