"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DoctorBioSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden"
            style={{
              borderRadius: "16px",
              height: "580px",
              boxShadow: "0 12px 40px rgba(91,31,106,0.18)",
            }}
          >
            <Image
              src="/images/doctor/dr-shruthi.jpg"
              alt="Dr. Shruthi Pavana Janardhanan"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Bio Details */}
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#5B1F6A] font-serif mb-2">
                Dr. Shruthi Pavana Janardhanan
              </h2>
              <p className="text-[#8E5C8F] text-sm md:text-base font-medium tracking-wide uppercase">
                Lead Dermatologist & Aesthetic Specialist
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {['MBBS', 'MD.DVL', 'DNB.DVL', 'MNAMS', 'MRCP SCE DERM(UK)'].map((cred, i) => (
                <span key={i} className="px-3 py-1.5 bg-white text-[#5B1F6A] text-xs font-bold rounded-full border border-[#e8d5f0] shadow-sm">
                  {cred}
                </span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-5 text-[#6B6570] text-[15px] leading-[1.8] border-l-2 border-[#d4a8e8] pl-6 relative"
            >
              {/* Decorative accent */}
              <div className="absolute left-[-2px] top-0 w-[2px] h-12 bg-[#5B1F6A]" />

              <p>
                <strong className="text-[#5B1F6A] font-semibold">Dr. Shruthi Pavana Janardhanan</strong> is a board-certified dermatologist with a strong academic background and versatile clinical experience. She completed her MD in Dermatology from the prestigious Madras Medical College, followed by a DNB from the National Board of Examinations and the MRCP SCE in Dermatology (UK).
              </p>
              <p>
                She has extensive experience in both clinical and aesthetic dermatology, with advanced training in injectables and energy-based devices. Her professional journey includes work at leading dermatology centers in Chennai and Mumbai.
              </p>
              <p>
                Dr. Shruthi has authored three published research articles and is an active member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL), the Indian Association for the Study of Sexually Transmitted Diseases (IASTD), and the National Academy of Medical Sciences (NAMS).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
