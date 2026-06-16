'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { aboutCTA } from '@/lib/data/about'

export default function AboutCTASection() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = [
      { ref: leftRef, transform: 'translateX(-40px)', delay: '0s' },
      { ref: rightRef, transform: 'translateX(40px)', delay: '0.2s' },
    ]
    items.forEach(({ ref, transform, delay }) => {
      if (!ref.current) return
      const el = ref.current as HTMLElement
      el.style.opacity = '0'
      el.style.transform = transform
      el.style.transition = `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach(({ ref }) => {
            if (!ref.current) return
            const el = ref.current as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translate(0)'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (leftRef.current) observer.observe(leftRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: '#F7F3EF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div ref={leftRef} className="flex flex-col gap-8">
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight" style={{ color: '#2E2E2E' }}>
              {aboutCTA.heading}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B6570' }}>
              {aboutCTA.subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={aboutCTA.primaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{ background: '#5A2A5D', color: '#FFFFFF' }}
              >
                <span>✦</span>
                {aboutCTA.primaryButton}
              </Link>
              <Link
                href={aboutCTA.secondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{ background: 'transparent', color: '#2E2E2E', border: '1px solid #E4DFE8' }}
              >
                <span>✦</span>
                {aboutCTA.secondaryButton}
              </Link>
            </div>
          </div>

          <div ref={rightRef} style={{ background: '#f3eaf8', borderRadius: '16px', padding: '32px 24px', textAlign: 'center' }}>
            <div className="w-16 h-16 rounded-full bg-[#5B1F6A]/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#5B1F6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p style={{ color: '#5B1F6A', fontWeight: 700, fontSize: '16px', margin: '0 0 8px' }}>Visit Us</p>
            <p style={{ color: '#666', fontSize: '14px', margin: '0 0 16px' }}>Amethyst Skin Clinic, Chennai</p>
            <a
              href="https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I'd%20like%20directions%20to%20the%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#5B1F6A', color: 'white', padding: '10px 24px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px', display: 'inline-block' }}
            >
              Get Directions on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}