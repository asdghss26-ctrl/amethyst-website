export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: "hair-loss",
    icon: "✦",
    title: "Hair Loss Treatments",
    description: "PRP, GFC, iPRF, Mesotherapy & Threads",
  },
  {
    id: "acne-scar",
    icon: "◈",
    title: "Acne Scar Revision",
    description: "Subcision, MNRF, TCA Cross & Biofillers",
  },
  {
    id: "pigmentation",
    icon: "☀",
    title: "Pigmentation Correction",
    description: "Picofacial, Picofusion & Cosmelan Peel",
  },
  {
    id: "vitiligo",
    icon: "⬡",
    title: "Vitiligo Treatments",
    description: "Excimer Laser, Mini Punch Grafting & 5FU",
  },
  {
    id: "quick-procedures",
    icon: "✚",
    title: "Quick Procedures",
    description: "Minor clinical treatments performed with maximum safety and minimal recovery (Skin Tag, Milia, Ear Lobe Repair, Skin Biopsy).",
  },
]