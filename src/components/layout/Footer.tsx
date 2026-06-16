import Link from "next/link";

export default function Footer() {
  const quickLinkItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ─── CTA BANNER ─── */}
      <div
        className="text-center"
        style={{
          background: 'linear-gradient(135deg, #5B1F6A 0%, #8B4A9C 100%)',
          borderRadius: '20px',
          margin: '0 16px 32px 16px',
          padding: '32px 24px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-cream.svg"
          alt="Amethyst Logo"
          width="32"
          height="32"
          style={{ marginBottom: '12px', display: 'inline-block' }}
        />
        <h2
          className="text-white font-bold leading-tight"
          style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: '22px' }}
        >
          Ready for Glowing Skin?
        </h2>
        <p className="text-white/80" style={{ fontSize: '13px', marginTop: '4px' }}>
          Consult Dr. Shruthi Pavana Janardhanan today
        </p>
        <a
          href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#5B1F6A] font-bold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
          style={{
            padding: '12px 32px',
            borderRadius: '24px',
            marginTop: '20px',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#5B1F6A">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book on WhatsApp
        </a>
      </div>

      {/* ─── MAIN FOOTER ─── */}
      <footer style={{ background: '#0D0712' }}>
        <div className="max-w-5xl mx-auto" style={{ padding: '40px 20px 20px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Column 1 — Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-cream.svg" alt="Amethyst Logo" width="24" height="24" />
                <span
                  className="text-white font-bold"
                  style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: '18px' }}
                >
                  AMETHYST
                </span>
              </Link>
              <p
                className="text-[#a855c8] uppercase tracking-wide mb-5"
                style={{ fontSize: '11px', letterSpacing: '1px' }}
              >
                Medical &amp; Aesthetic Dermatology
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://wa.me/918870445185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#5B1F6A]"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 text-[#a855c8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/amethystskinclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#5B1F6A]"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-[#a855c8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm-5 15a5 5 0 110-10 5 5 0 010 10zm3.5-11.5a1 1 0 100-2 1 1 0 000 2z"/>
                  </svg>
                </a>
                <a
                  href="mailto:hello@amethystskinclinic.com"
                  className="flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#5B1F6A]"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  aria-label="Email"
                >
                  <svg className="w-4 h-4 text-[#a855c8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 — Navigate */}
            <div>
              <p
                className="text-[#a855c8] font-bold uppercase tracking-wide"
                style={{ fontSize: '10px', letterSpacing: '2px' }}
              >
                Navigate
              </p>
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  background: '#5B1F6A',
                  marginTop: '8px',
                  marginBottom: '16px',
                }}
              />
              <ul className="space-y-1">
                {quickLinkItems.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-[#cccccc] transition-all duration-300 hover:text-[#a855c8]"
                      style={{ fontSize: '13px', padding: '4px 0' }}
                    >
                      <span className="text-[#a855c8] transition-all duration-300 group-hover:translate-x-1 inline-block">→</span>
                      <span className="transition-all duration-300 group-hover:translate-x-1 inline-block">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Reach Us */}
            <div>
              <p
                className="text-[#a855c8] font-bold uppercase tracking-wide"
                style={{ fontSize: '10px', letterSpacing: '2px' }}
              >
                Reach Us
              </p>
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  background: '#5B1F6A',
                  marginTop: '8px',
                  marginBottom: '16px',
                }}
              />
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#a855c8" className="flex-shrink-0">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  <a href="tel:+918870445185" className="text-[#cccccc] hover:text-[#a855c8] transition-colors duration-300" style={{ fontSize: '13px' }}>
                    +91 88704 45185
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855c8" strokeWidth={2} className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:hello@amethystskinclinic.com" className="text-[#cccccc] hover:text-[#a855c8] transition-colors duration-300" style={{ fontSize: '13px' }}>
                    hello@amethystskinclinic.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855c8" strokeWidth={2} className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-[#cccccc]" style={{ fontSize: '13px' }}>
                    Chennai, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855c8" strokeWidth={2} className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[#cccccc]" style={{ fontSize: '13px' }}>
                    Mon–Sat: 10am – 7pm
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-2"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '16px 20px',
              marginTop: '32px',
              marginLeft: '-20px',
              marginRight: '-20px',
            }}
          >
            <p style={{ fontSize: '11px', color: '#666666' }}>
              &copy; 2025 Amethyst Skin Clinic
            </p>
            <p style={{ fontSize: '11px', color: '#666666' }}>
              Made with &#160;💜&#160; in Chennai
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
