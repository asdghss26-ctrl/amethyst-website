import { Reveal } from "../../ui/RevealAnimation";

const images = [
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', alt: 'Amethyst Skin Clinic treatment' },
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', alt: 'Amethyst Skin Clinic procedure' },
  { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80', alt: 'Amethyst Skin Clinic interior' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', alt: 'Amethyst Skin Clinic doctor' },
]

export default function ImageStripSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: '#F7F3EF' }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Top row: single large image */}
        <Reveal delay={0.1}>
          <div
            className="group relative overflow-hidden rounded-[16px] mb-2"
            style={{ height: 300, boxShadow: "0 8px 24px rgba(91,31,106,0.12)" }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>

        {/* Bottom row: three equal images */}
        <div className="grid grid-cols-3 gap-2">
          {images.slice(1).map((img, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1}>
              <div
                className="group relative overflow-hidden rounded-[12px]"
                style={{ height: 180, boxShadow: "0 8px 24px rgba(91,31,106,0.12)" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}