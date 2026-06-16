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
          href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
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