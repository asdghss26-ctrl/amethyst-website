import Link from "next/link";
import { quickLinks, contactInfo, WHATSAPP_URL } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] border-t border-[#3E3E3E]">
      <div className="max-w-5xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Column 1: Logo + Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <img src="/logo-cream.svg" alt="AMETHYST logo" style={{ height: "28px", width: "auto" }} />
              <span className="text-white text-base" style={{ fontFamily: "var(--font-dm-serif), serif", fontWeight: 600 }}>
                Amethyst
              </span>
            </Link>
            <p className="text-xs text-[#9A94A0] leading-relaxed mb-3 max-w-xs">
              Professional dermatology care focused on results, safety, and personalized treatment.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[10px] text-white border border-[#4E4E4E] rounded-full px-2.5 py-1">
                <svg className="w-2.5 h-2.5 text-[#8E5C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                FDA Approved
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-white border border-[#4E4E4E] rounded-full px-2.5 py-1">
                <svg className="w-2.5 h-2.5 text-[#8E5C8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Board Certified
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-3">Links</p>
            <ul className="space-y-1.5">
              {quickLinks.filter(l => !l.label.includes("Static")).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#9A94A0] hover:text-[#CFA1A8] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + Social */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-3">Contact</p>
            <ul className="space-y-2">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-xs mt-0.5 flex-shrink-0">{item.icon}</span>
                  <a
                    href={item.href}
                    className="text-xs text-[#9A94A0] hover:text-[#CFA1A8] transition-colors leading-relaxed"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social icons */}
            <div className="flex gap-2 mt-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-[#4E4E4E] flex items-center justify-center hover:border-[#CFA1A8] transition-colors" aria-label="WhatsApp">
                <svg className="w-3.5 h-3.5 text-[#9A94A0]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="mailto:hello@amethystskinclinic.com" className="w-7 h-7 rounded-full border border-[#4E4E4E] flex items-center justify-center hover:border-[#CFA1A8] transition-colors" aria-label="Email">
                <svg className="w-3.5 h-3.5 text-[#9A94A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
              <a href="https://www.instagram.com/amethystskinclinicchennai/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-[#4E4E4E] flex items-center justify-center hover:border-[#CFA1A8] transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 text-[#9A94A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm-5 15a5 5 0 110-10 5 5 0 010 10zm3.5-11.5a1 1 0 100-2 1 1 0 000 2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-[#3E3E3E] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[10px] text-[#6B6570]">&copy; 2026 Amethyst. All rights reserved.</p>
          <p className="text-[10px] text-[#6B6570]">
            Designed by <span className="text-[#9A94A0]">Webestica</span> &middot; Powered by <span className="text-[#9A94A0]">Webflow</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
