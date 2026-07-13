'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { galleryBadge, galleryHeading } from '@/lib/data/about'

const galleryImages = [
  { src: '/images/clinic/reception area.jpg', alt: 'Reception Area' },
  { src: '/images/clinic/about-clinic-home.jpg', alt: 'Procedure Room' },
  { src: '/images/clinic/consultation (2).jpg', alt: 'Patient Consultation' },
  { src: '/images/clinic/clinic entrance.jpg', alt: 'Clinic Entrance' },
  { src: '/images/clinic/waiting area.jpg', alt: 'Waiting Area' },
  { src: '/images/clinic/clinic corridor.JPG', alt: 'Clinic Corridor' },
]

export default function GalleryGridSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = gridRef.current?.querySelectorAll('.gallery-item') as NodeListOf<HTMLElement>
          items?.forEach((item: HTMLElement, i: number) => {
            setTimeout(() => {
              item.style.opacity = '1'
              item.style.transform = 'scale(1)'
            }, i * 100)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32" style={{ background: '#F7F3EF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">
              {galleryBadge}
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal max-w-2xl mx-auto" style={{ color: '#2E2E2E' }}>
            {galleryHeading}
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ height: '260px', opacity: 0, transform: 'scale(0.95)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}