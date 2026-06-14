import { Reveal } from "../../ui/RevealAnimation";

const stripImages = [
  { src: '/images/clinic/strip-1.jpg', alt: 'Amethyst Skin Clinic treatment' },
  { src: '/images/clinic/strip-2.jpg', alt: 'Amethyst Skin Clinic procedure' },
  { src: '/images/clinic/strip-3.jpg', alt: 'Amethyst Skin Clinic interior' },
  { src: '/images/clinic/strip-4.jpg', alt: 'Amethyst Skin Clinic doctor' },
]

export default function ImageStripSection() {
  return (
    <section className="py-16 overflow-hidden" style={{ background: '#F7F3EF' }}>
      <div className="flex gap-5 px-6">
        {stripImages.map((img, i) => (
          <Reveal key={i} delay={i * 0.1}>
          <div className="card-hover group relative flex-shrink-0 rounded-2xl overflow-hidden" style={{ width: '320px', height: '400px' }}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}