export interface Treatment {
  id: string
  name: string
  img: string
  category: 'hair-loss' | 'acne-scar' | 'pigmentation' | 'vitiligo' | 'quick-procedures'
  description: string
  benefits: string[]
  downtime: string
  duration: string
  sessions: string
  technology?: string
  preCare?: string[]
  postCare?: string[]
}

export const treatments: Treatment[] = [
  // --- HAIR LOSS ---
  {
    id: "prp-hair",
    name: "PRP Hair Therapy",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=300&auto=format&fit=crop",
    category: "hair-loss",
    description: "Platelet-Rich Plasma (PRP) therapy uses your own blood platelets to stimulate dormant hair follicles, accelerate cellular regeneration, and reverse hair thinning.",
    benefits: [
      "Naturally stimulates hair growth factors",
      "Increases hair follicle thickness and density",
      "Improves scalp blood circulation",
      "Non-surgical with zero risk of allergic reaction"
    ],
    downtime: "Minimal (mild scalp tenderness for 12-24 hours)",
    duration: "45 - 60 minutes",
    sessions: "4 - 6 sessions, spaced 4 weeks apart",
    technology: "Double-spin centrifugation for high platelet concentration",
    preCare: [
      "Wash hair thoroughly on the morning of the procedure.",
      "Avoid blood thinners or anti-inflammatory drugs 3 days prior.",
      "Stay well hydrated before the blood draw."
    ],
    postCare: [
      "Do not wash or apply products to your scalp for 24 hours.",
      "Avoid vigorous exercise or heavy sweating for 48 hours.",
      "Protect your scalp from direct sun exposure."
    ]
  },
  {
    id: "gfc-hair",
    name: "GFC Hair Therapy",
    img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=300&auto=format&fit=crop",
    category: "hair-loss",
    description: "Growth Factor Concentrate (GFC) is an advanced, highly purified therapy derived from your platelets. It delivers specific activated growth factors directly to the root for superior, consistent hair restoration.",
    benefits: [
      "Highly concentrated, acellular preparation for maximum safety",
      "Pain-free administration with minimal scalp irritation",
      "Faster onset of visible hair density improvement",
      "Reduces hair fall within the first few sessions"
    ],
    downtime: "None (immediate return to normal activities)",
    duration: "30 - 45 minutes",
    sessions: "3 - 4 sessions, spaced 4-6 weeks apart",
    technology: "Acellular activated growth factor extraction system",
    preCare: [
      "Avoid smoking or alcohol consumption 24 hours before.",
      "Cleanse scalp prior to treatment."
    ],
    postCare: [
      "Avoid hair styling tools, coloring, or harsh chemicals for 4 days.",
      "Keep scalp clean and use prescribed anti-septic lotions if requested."
    ]
  },
  {
    id: "iprf-scalp",
    name: "iPRF Scalp Care",
    img: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=300&auto=format&fit=crop",
    category: "hair-loss",
    description: "injectable Platelet-Rich Fibrin (iPRF) is a secondary generation platelet concentrate. Formulated without anticoagulants, it forms a fibrin matrix that slowly releases growth factors over an extended period.",
    benefits: [
      "Slow, sustained release of growth factors for longer stimulation",
      "Rich in white blood cells and stem cells for tissue regeneration",
      "100% natural, chemical-free formulation",
      "Ideal for advanced or stubborn thinning patterns"
    ],
    downtime: "None (mild redness resolves in a few hours)",
    duration: "45 minutes",
    sessions: "4 sessions, spaced 4 weeks apart",
    technology: "Low-speed centrifugation protocol preserving fibrin matrix",
    preCare: [
      "Avoid NSAIDs (ibuprofen, aspirin) for 1 week before treatment.",
      "Drink plenty of water before your appointment."
    ],
    postCare: [
      "Refrain from washing hair or hot showers for 24 hours.",
      "Avoid swimming, steam rooms, or saunas for 3 days."
    ]
  },
  {
    id: "hair-threads",
    name: "Hair Threads",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=300&auto=format&fit=crop",
    category: "hair-loss",
    description: "Polydioxanone (PDO) threads are ultra-fine, absorbable sutures placed into the scalp. They trigger a localized healing response, encouraging collagen synthesis and long-term hair follicle rejuvenation.",
    benefits: [
      "Provides structural support to thinning scalp regions",
      "Continuous micro-circulation stimulation over 6-8 months",
      "Fully absorbable threads with high safety profile",
      "Can be combined with GFC or PRP for compounded results"
    ],
    downtime: "Minimal (mild bruising or soreness for 2-3 days)",
    duration: "45 - 60 minutes",
    sessions: "Single session, repeatable after 8-12 months",
    technology: "FDA-approved absorbable Polydioxanone (PDO) threads",
    preCare: [
      "Refrain from taking blood-thinning supplements (Vitamin E, Fish Oil) for 5 days.",
      "Clean scalp thoroughly."
    ],
    postCare: [
      "Avoid massaging or scratching the treated scalp areas for 1 week.",
      "Do not perform strenuous head-down exercises for 3 days."
    ]
  },

  // --- ACNE SCAR ---
  {
    id: "subcision",
    name: "Acne Subcision",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=300&auto=format&fit=crop",
    category: "acne-scar",
    description: "A specialized surgical procedure that releases tethered fibrotic bands binding deep acne scars to underlying tissue. This lifts depressed scars and promotes natural collagen remodeling.",
    benefits: [
      "Highly effective for rolling, deep, and depressed scars",
      "Directly targets the root cause of skin tethering",
      "Yields permanent improvement in skin contour",
      "Creates space for biofillers or PRP to optimize healing"
    ],
    downtime: "3 - 5 days (mild swelling and localized bruising)",
    duration: "30 - 45 minutes",
    sessions: "2 - 3 sessions, depending on scar severity",
    technology: "Nokor needle or cannula-based subcision system",
    preCare: [
      "Ensure there is no active inflammatory acne in the treatment area.",
      "Avoid blood thinners for 5 days before the procedure."
    ],
    postCare: [
      "Apply ice packs to minimize swelling for the first 24 hours.",
      "Keep the needle entry points clean and apply prescribed antibiotic ointment.",
      "Wear broad-spectrum sunscreen daily."
    ]
  },
  {
    id: "mnrf",
    name: "MNRF Microneedling",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=300&auto=format&fit=crop",
    category: "acne-scar",
    description: "Microneedling Fractional Radiofrequency (MNRF) delivers controlled RF energy deep into the dermis through insulated micro-needles. This stimulates intense collagen and elastin production while sparing the epidermis.",
    benefits: [
      "Improves deep acne scars, pores, and skin laxity",
      "Safe for all skin types, including darker skin tones",
      "Minimal risk of post-inflammatory hyperpigmentation (PIH)",
      "Reduces active oil production and sebum flow"
    ],
    downtime: "2 - 3 days (mild redness and dry sand-like micro-crusts)",
    duration: "45 minutes (plus 30 minutes for numbing cream)",
    sessions: "3 - 5 sessions, spaced 4 weeks apart",
    technology: "Fractional radiofrequency with insulated gold-plated microneedles",
    preCare: [
      "Avoid retinol or active acids 3 days prior.",
      "Ensure no active cold sores are present."
    ],
    postCare: [
      "Moisturize skin frequently with a gentle, non-comedogenic barrier cream.",
      "Do not pick at the micro-crusts; let them shed naturally.",
      "Strict sun protection is mandatory for at least 7 days."
    ]
  },
  {
    id: "tca-cross",
    name: "TCA Cross Scar Care",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=300&auto=format&fit=crop",
    category: "acne-scar",
    description: "Chemical Reconstruction of Skin Scars (CROSS) using high-concentration Trichloroacetic Acid (TCA) applied precisely to individual ice-pick and narrow boxcar scars to trigger localized necrosis and skin rebuilding.",
    benefits: [
      "Specific focus on challenging, deep ice-pick scars",
      "High local efficacy with minimal damage to surrounding skin",
      "Significant remodeling of deep scar tissue walls",
      "Permanent, cumulative improvements over time"
    ],
    downtime: "5 - 7 days (frosting followed by dark scab formation)",
    duration: "20 - 30 minutes",
    sessions: "3 - 4 sessions, spaced 6 weeks apart",
    technology: "High-precision localized Trichloroacetic Acid application",
    preCare: [
      "Stop active topical exfoliators (AHAs, BHAs, retinoids) 5 days before.",
      "Prep skin with prescribed melanin inhibitors if advised."
    ],
    postCare: [
      "Do not pick, scratch, or peel off scabs prematurely.",
      "Apply ointment/vaseline to scabbed areas until they fall off.",
      "Avoid direct sunlight and apply SPF 50+ regularly."
    ]
  },

  // --- PIGMENTATION ---
  {
    id: "picolaser",
    name: "Picolaser Toning",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=300&auto=format&fit=crop",
    category: "pigmentation",
    description: "Using ultra-short picosecond pulses of laser energy, this system shatters stubborn pigments into microscopic particles. Your immune system then clears these particles, resulting in a bright, even skin tone.",
    benefits: [
      "Targets sun spots, freckles, melasma, and tattoo ink",
      "Extremely fast photo-mechanical action, avoiding heat damage",
      "Increases skin radiance and refines overall texture",
      "Minimal downtime compared to traditional Q-switched lasers"
    ],
    downtime: "Minimal (mild flush for 2-4 hours, rarely 1-2 days)",
    duration: "30 minutes",
    sessions: "4 - 6 sessions, spaced 3-4 weeks apart",
    technology: "Picosecond Nd:YAG Laser (1064nm and 532nm wavelengths)",
    preCare: [
      "Avoid tanning, sunburn, or heavy sun exposure for 2 weeks prior.",
      "Discontinue photosensitizing skin products 3 days before."
    ],
    postCare: [
      "Keep skin hydrated using a lightweight moisturizer.",
      "Apply mineral sunscreen every 3 hours.",
      "Avoid scrubs, saunas, and swimming pools for 48 hours."
    ]
  },
  {
    id: "picofusion",
    name: "Picofusion Treatment",
    img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c9?q=80&w=300&auto=format&fit=crop",
    category: "pigmentation",
    description: "An advanced combination protocol linking picosecond laser toning with the transdermal delivery of potent brightening antioxidants like Glutathione and Vitamin C, targeting multiple pigment pathways.",
    benefits: [
      "Compounded efficacy for refractory melasma and hyperpigmentation",
      "Boosts skin cell defense against oxidative stress",
      "Restores natural skin hydration and youthful glow",
      "Simultaneously refines pore size and fine lines"
    ],
    downtime: "None (slight temporary redness for 1-2 hours)",
    duration: "45 minutes",
    sessions: "3 - 5 sessions, spaced 3 weeks apart",
    technology: "Fractional micro-lens picosecond laser + electroporation infusion",
    preCare: [
      "Avoid waxing or chemical peels 1 week prior.",
      "Inform the doctor if you have a history of cold sores."
    ],
    postCare: [
      "Avoid applying make-up for 12 hours.",
      "Use only gentle cleansers and barrier repair moisturizers."
    ]
  },
  {
    id: "cosmelan",
    name: "Cosmelan Peel",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=300&auto=format&fit=crop",
    category: "pigmentation",
    description: "The gold standard global depigmentation method. A two-stage professional treatment (in-clinic mask followed by a strict home-care routine) that highly regulates melanin synthesis and clears deep-seated pigment.",
    benefits: [
      "Highly effective for severe melasma, chloasma, and senile spots",
      "Compatible with all skin phototypes (Fitzpatrick scale I-VI)",
      "High safety profile with rapid depigmenting action",
      "Restores luminosity and rejuvenates skin texture"
    ],
    downtime: "7 - 10 days (significant skin peeling, redness, and tightness)",
    duration: "30 minutes in-clinic (mask stays on for 8-12 hours at home)",
    sessions: "Single in-clinic procedure + 6 months home maintenance",
    technology: "Tyrosinase-inhibiting chemical peel formulation",
    preCare: [
      "Stop all active skincare/exfoliation 1 week before.",
      "Do not combine with any other facial procedures for 2 weeks."
    ],
    postCare: [
      "Follow the home-care guide strictly using Cosmelan 2, Hydra-Vital, and Melan Recovery.",
      "Wash off mask at the exact time indicated by the dermatologist.",
      "Avoid direct sun exposure completely during the peeling phase."
    ]
  },

  // --- VITILIGO ---
  {
    id: "excimer",
    name: "Excimer Laser Therapy",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop",
    category: "vitiligo",
    description: "A highly targeted monochromatic UVB light therapy delivering 308nm wavelength to patch areas. It stimulates dormant melanocytes in hair follicles to migrate and repigment vitiligo patches without affecting healthy skin.",
    benefits: [
      "Precise targeting avoids exposing surrounding healthy skin",
      "FDA-approved treatment for localized vitiligo and psoriasis",
      "Pain-free, quick sessions with no systemic side effects",
      "Encourages high rate of pigment restoration"
    ],
    downtime: "None (occasional mild pinkness for a few hours)",
    duration: "10 - 20 minutes",
    sessions: "2 sessions per week, for 12-24 weeks",
    technology: "308nm Monochromatic Excimer Light System",
    preCare: [
      "Clean the skin thoroughly; do not apply lotions or sunscreen on target areas beforehand.",
      "Cover or protect eyes if treating facial spots."
    ],
    postCare: [
      "Apply calming moisturizers if mild warmth or irritation is felt.",
      "Keep the treated area protected from accidental heavy sun exposure."
    ]
  },

  // --- QUICK PROCEDURES ---
  {
    id: "skin-tag",
    name: "Skin Tag Removal",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format&fit=crop",
    category: "quick-procedures",
    description: "Quick, safe removal of benign skin tags and growths using radiofrequency electrocautery or cryotherapy under local numbing, resulting in clean, flat skin healing.",
    benefits: [
      "Instant, single-session clearance of bothersome skin tags",
      "Minimal scarring with clean healing and cosmetic results",
      "Performed under local numbing cream for comfortable treatment",
      "Prevents tags from catching on clothing or jewelry"
    ],
    downtime: "3 - 5 days (small, dry scabs that shed naturally)",
    duration: "15 - 30 minutes",
    sessions: "Single session (unless tags are widespread)",
    technology: "Radiofrequency electrocautery or liquid nitrogen cryo-probe",
    preCare: [
      "Inform the doctor of any pacemakers or metal implants if using RF."
    ],
    postCare: [
      "Apply anti-bacterial cream twice daily until scabs fall off.",
      "Do not pick at the scabs; keep the area clean and dry."
    ]
  },
  {
    id: "milia",
    name: "Milia Extraction",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=300&auto=format&fit=crop",
    category: "quick-procedures",
    description: "Meticulous sterile extraction of deep, keratin-filled cysts (milia) using a fine micro-lance to restore a smooth skin surface.",
    benefits: [
      "Safely removes milia without damaging the skin",
      "Prevents skin scarring or infection from DIY popping",
      "Instantly improves skin texture around delicate eye areas"
    ],
    downtime: "1 - 2 days (tiny pin-point scabs)",
    duration: "15 - 20 minutes",
    sessions: "Single session",
    technology: "Sterile micro-lance evacuation technique",
    preCare: [
      "Avoid wearing make-up to the appointment."
    ],
    postCare: [
      "Keep skin clean and dry.",
      "Avoid heavy cosmetic products or make-up for 24 hours."
    ]
  },
  {
    id: "earlobe",
    name: "Ear Lobe Repair",
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=300&auto=format&fit=crop",
    category: "quick-procedures",
    description: "Surgical closure of split, torn, or stretched earlobes under local anesthesia to restore an aesthetic, unified shape suitable for re-piercing.",
    benefits: [
      "Restores structural integrity and aesthetics of the earlobe",
      "Performed in-office with local anesthesia (painless)",
      "Allows safe re-piercing after complete healing (approx. 8 weeks)"
    ],
    downtime: "7 days (sutures are removed after 1 week)",
    duration: "30 - 45 minutes",
    sessions: "Single procedure",
    technology: "Aseptic surgical reconstruction and micro-suturing",
    preCare: [
      "Avoid wearing heavy jewelry or earrings to the clinic."
    ],
    postCare: [
      "Keep the dressing dry for the first 48 hours.",
      "Return after 7 days for suture removal.",
      "Do not re-pierce the earlobe for at least 8-12 weeks."
    ]
  },
  {
    id: "biopsy",
    name: "Diagnostic Skin Biopsy",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351167?q=80&w=300&auto=format&fit=crop",
    category: "quick-procedures",
    description: "A small, precise diagnostic sample of skin tissue is taken (punch or shave biopsy) under local anesthesia and sent for dermatopathological evaluation to determine the exact diagnosis of skin conditions.",
    benefits: [
      "Provides definitive histopathological diagnosis",
      "Essential for confirming suspected skin lesions or rashes",
      "Safe, sterile in-office surgical procedure"
    ],
    downtime: "5 - 7 days (heals with minor stitch or dressings)",
    duration: "20 - 30 minutes",
    sessions: "Single diagnostic procedure",
    technology: "Sterile biopsy punches (2mm - 4mm) or shave excisions",
    preCare: [
      "Inform the doctor of any history of bleeding disorders or anticoagulants."
    ],
    postCare: [
      "Change dressings daily as instructed.",
      "Keep the biopsy site clean with soap and water after 24 hours.",
      "Avoid heavy stretching of the biopsy site area."
    ]
  }
]