import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div style={{ textAlign: 'center', padding: '20px', background: '#F5F0EB' }}>
        <a
          href="https://u.tatvacare.in/r/mDN7hS"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#5B1F6A',
            color: 'white',
            padding: '12px 36px',
            borderRadius: '24px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '700',
            letterSpacing: '1px',
            boxShadow: '0 4px 16px rgba(91,31,106,0.35)'
          }}
        >
          ✦ Book Now
        </a>
      </div>
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </main>
  );
}