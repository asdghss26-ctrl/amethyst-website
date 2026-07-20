import type { Metadata } from "next";
import { Reveal } from "@/components/ui/RevealAnimation";

export const metadata: Metadata = {
  title: "Gallery | Amethyst Skin Clinic",
  description: "Explore before and after treatment photos and clinic images from Amethyst Skin Clinic.",
};

const galleryItems = [
  { src: "/images/clinic/clinic entrance.jpg", alt: "Clinic Entrance" },
  { src: "/images/clinic/reception area.jpg", alt: "Reception Area" },
  { src: "/images/clinic/waiting area.jpg", alt: "Waiting Area" },
  { src: "/images/clinic/clinic corridor.JPG", alt: "Clinic Corridor" },
  { src: "/images/clinic/consultation.jpg", alt: "Consultation Room" },
  { src: "/images/clinic/consultation (2).jpg", alt: "Patient Consultation" },
  { src: "/images/clinic/doctor image.jpg", alt: "Dr. Shruthi Pavana Janardhanan" },
  { src: "/images/treatments/Picofusion Treatment.jpg", alt: "Picofusion Treatment" },
  { src: "/images/treatments/20260625_165811.jpg", alt: "Treatment in Progress" },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#F5F0EB] min-h-screen">
      <div className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-dm-serif), serif", color: "#5B1F6A", fontWeight: 600 }}
            >
              Our Gallery
            </h1>
            <p className="text-[#8B7355] text-sm md:text-base mt-4 max-w-lg mx-auto">
              A look inside our clinic and our treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
              <div
                className="card-hover group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: "280px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{item.alt}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
