export interface Treatment {
  id: string
  name: string
  img: string
  category: 'hair-loss' | 'acne-scar' | 'pigmentation' | 'vitiligo' | 'quick-procedures' | 'medical-dermatology'
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
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
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
  {
    id: "dutexome-mesotherapy",
    name: "Dutexome Mesotherapy",
    img: "https://images.unsplash.com/photo-1584820927498-cafe8c1c9695?w=800&q=80",
    category: "hair-loss",
    description: "An advanced mesotherapy technique combining Dutasteride and Exosomes to highly target androgenetic alopecia. Exosomes deliver powerful cellular signals while Dutasteride blocks the DHT hormone responsible for hair thinning.",
    benefits: [
      "Targeted DHT blockade at the follicle level",
      "Massive boost in cellular regeneration via exosomes",
      "Reduces hair fall rapidly and thickens existing strands",
      "Less systemic side effects compared to oral DHT blockers"
    ],
    downtime: "None (mild scalp tenderness for 12 hours)",
    duration: "30 - 45 minutes",
    sessions: "4 - 6 sessions, spaced 3-4 weeks apart",
    technology: "Micro-injections of Exosome + Dutasteride complex",
    preCare: [
      "Wash hair thoroughly before the appointment."
    ],
    postCare: [
      "Do not wash hair for 24 hours.",
      "Avoid applying strong chemical hair products for 3 days."
    ]
  },
  {
    id: "hair-mesotherapy",
    name: "Hair Strengthening Mesotherapy",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
    category: "hair-loss",
    description: "A cocktail of essential vitamins, minerals, amino acids, and peptides injected directly into the scalp to nourish hair follicles and improve scalp microcirculation.",
    benefits: [
      "Deeply nourishes the scalp and hair roots",
      "Combats nutritional deficiencies affecting hair growth",
      "Revitalizes dull, lifeless hair",
      "Excellent adjunct to PRP or GFC therapies"
    ],
    downtime: "None",
    duration: "30 minutes",
    sessions: "6 - 8 sessions, spaced 2 weeks apart",
    technology: "Nutrient infusion via micro-needling or micro-injections",
    preCare: [
      "Ensure scalp is clean and dry."
    ],
    postCare: [
      "Avoid intense exercise and sweating for 24 hours."
    ]
  },

  // --- ACNE SCAR ---
  {
    id: "subcision",
    name: "Acne Subcision",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
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
  {
    id: "punch-excision",
    name: "Punch Excision of Scars",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    category: "acne-scar",
    description: "A minor surgical procedure where deep, narrow ice-pick or deep boxcar scars are completely removed using a small punch biopsy tool, and the skin is stitched together to heal as a flat, unnoticeable line.",
    benefits: [
      "Completely removes the scarred tissue",
      "Replaces deep, pitted scars with a tiny, flat linear scar",
      "Highly effective for deep ice-pick scars unresponsive to lasers"
    ],
    downtime: "5 - 7 days (sutures in place)",
    duration: "30 minutes",
    sessions: "Single session (sutures removed after a week)",
    technology: "Sterile surgical punch tool",
    preCare: [
      "Stop blood-thinning supplements 5 days prior."
    ],
    postCare: [
      "Keep the surgical site clean and dry.",
      "Apply prescribed antibiotic ointment daily."
    ]
  },
  {
    id: "papular-scar",
    name: "Papular Scar Treatment",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    category: "acne-scar",
    description: "Targeted therapy for elevated, bumpy papular scars (often found on the chin and nose) using light radiofrequency ablation or fractional CO2 laser to flatten the raised fibrous tissue.",
    benefits: [
      "Flattens bumpy, raised scars effectively",
      "Smooths skin texture and restores facial contours",
      "Safe and controlled tissue ablation"
    ],
    downtime: "3 - 5 days (mild scabbing)",
    duration: "20 minutes",
    sessions: "1 - 3 sessions",
    technology: "Radiofrequency ablation / Fractional Laser",
    preCare: [
      "Avoid active acne breakouts in the treatment zone."
    ],
    postCare: [
      "Do not scratch or prematurely remove scabs.",
      "Strict sun protection to prevent hyperpigmentation."
    ]
  },
  {
    id: "biofillers",
    name: "Biofillers for Scars",
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    category: "acne-scar",
    description: "Using your body's own natural plasma gel (Biofiller) combined with subcision to instantly volumize and lift deep rolling and boxcar scars, providing immediate aesthetic improvement and long-term collagen stimulation.",
    benefits: [
      "100% natural filler derived from your own blood",
      "Zero risk of allergic reactions",
      "Instantly lifts tethered scars while subcision heals",
      "Promotes sustained dermal thickening"
    ],
    downtime: "2 - 4 days (mild swelling and bruising)",
    duration: "45 - 60 minutes",
    sessions: "2 - 4 sessions, spaced 4-6 weeks apart",
    technology: "Plasma gel bio-heating and subcision",
    preCare: [
      "Drink plenty of water before the blood draw.",
      "Avoid NSAIDs for 5 days."
    ],
    postCare: [
      "Avoid massaging the treated area for 48 hours.",
      "Sleep with head slightly elevated to reduce swelling."
    ]
  },

  // --- PIGMENTATION ---
  {
    id: "picolaser",
    name: "Picofacial Toning",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
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
  {
    id: "advanced-peels",
    name: "Advanced Chemical Peels",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    category: "pigmentation",
    description: "Customized medical-grade chemical exfoliation blends (Salicylic, Glycolic, Lactic, TCA, and Yellow Peels) tailored to your skin type to lift away hyperpigmented epidermal layers and stimulate fresh, radiant skin.",
    benefits: [
      "Brightens dull, uneven skin tones",
      "Reduces superficial pigmentation, freckles, and acne marks",
      "Unclogs pores and refines skin texture",
      "Customizable depth depending on downtime availability"
    ],
    downtime: "2 - 7 days (depending on peel depth)",
    duration: "20 - 30 minutes",
    sessions: "3 - 6 sessions, spaced 2-4 weeks apart",
    technology: "Medical-grade topical chemical formulations",
    preCare: [
      "Stop using retinoids and exfoliating acids 3-5 days before.",
      "Avoid waxing or threading the face."
    ],
    postCare: [
      "Do not peel or pick at flaking skin.",
      "Apply thick layers of gentle moisturizer.",
      "Strict sun avoidance and SPF 50+ reapplication."
    ]
  },
  {
    id: "iv-glutathione",
    name: "IV Glutathione",
    img: "https://images.unsplash.com/photo-1584820927498-cafe8c1c9695?w=800&q=80",
    category: "pigmentation",
    description: "Intravenous infusion of Glutathione and Vitamin C, a powerful master antioxidant therapy that neutralizes free radicals, detoxifies the liver, and uniformly brightens the skin from the inside out.",
    benefits: [
      "Provides a systemic, full-body skin brightening effect",
      "High absorption rate compared to oral supplements",
      "Boosts immunity and cellular detoxification",
      "Helps combat stubborn melasma and sun damage"
    ],
    downtime: "None",
    duration: "45 minutes",
    sessions: "8 - 12 sessions, weekly or bi-weekly",
    technology: "Intravenous drip infusion",
    preCare: [
      "Eat a light meal and drink plenty of water before the drip."
    ],
    postCare: [
      "Continue oral Vitamin C supplements if prescribed.",
      "Maintain hydration."
    ]
  },

  // --- VITILIGO ---
  {
    id: "excimer",
    name: "Excimer Laser Therapy",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
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
  {
    id: "mini-punch-grafting",
    name: "Mini Punch Grafting",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    category: "vitiligo",
    description: "A highly specialized surgical technique for stable vitiligo where tiny punches of normally pigmented skin (usually from the thigh or behind the ear) are transplanted into depigmented patches to seed new melanocytes.",
    benefits: [
      "Permanent repigmentation for stable vitiligo patches",
      "Excellent option for areas unresponsive to light therapy",
      "High success rate in carefully selected patients"
    ],
    downtime: "7 - 10 days (dressings on donor and recipient sites)",
    duration: "60 - 120 minutes (varies by area)",
    sessions: "Single session per localized area",
    technology: "Micro-surgical punch grafts",
    preCare: [
      "Ensure vitiligo has been stable (no new patches) for at least 1 year.",
      "Stop blood thinners 1 week prior."
    ],
    postCare: [
      "Keep surgical dressings perfectly dry and intact for 7 days.",
      "Avoid stretching or heavy movement of the grafted areas."
    ]
  },
  {
    id: "5fu-microneedling",
    name: "5FU Microneedling",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "vitiligo",
    description: "A combination procedure using microneedling to create micro-channels in vitiligo patches, followed by the topical application of 5-Fluorouracil (5FU) to deeply stimulate local repigmentation pathways.",
    benefits: [
      "Effective adjunctive therapy for resistant vitiligo spots",
      "Stimulates melanocyte migration from hair follicles",
      "Synergistic when combined with Excimer or targeted phototherapy"
    ],
    downtime: "3 - 5 days (redness and mild scabbing)",
    duration: "30 minutes",
    sessions: "Multiple sessions required, customized per patient",
    technology: "Medical microneedling + Topical chemotherapy agents",
    preCare: [
      "Avoid sun exposure to the patches immediately before treatment."
    ],
    postCare: [
      "Protect treated areas from sun.",
      "Apply prescribed soothing ointments."
    ]
  },

  // --- QUICK PROCEDURES ---
  {
    id: "skin-tag",
    name: "Skin Tag Removal",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
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
  },
  {
    id: "molluscum-needling",
    name: "Molluscum Needling",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    category: "quick-procedures",
    description: "A highly effective, straightforward procedure to clear Molluscum Contagiosum lesions. A sterile needle is used to carefully extract the viral core from each bump, halting the spread of the infection.",
    benefits: [
      "Rapidly stops the viral shedding and spread",
      "Quick, in-office procedure with instant removal",
      "Prevents auto-inoculation to other body parts"
    ],
    downtime: "1 - 3 days (pinpoint scabs)",
    duration: "15 - 30 minutes",
    sessions: "1 - 2 sessions depending on lesion count",
    technology: "Sterile needle extraction",
    preCare: [
      "Do not shave or aggressively scrub the affected areas."
    ],
    postCare: [
      "Apply prescribed antibiotic cream to prevent secondary infection.",
      "Wash hands thoroughly after touching the skin.",
      "Do not share towels or clothing."
    ]
  },
  {
    id: "ingrown-toenail",
    name: "Ingrown Toenail Surgery",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    category: "quick-procedures",
    description: "Surgical intervention for painful, infected ingrown toenails. The procedure involves partial nail avulsion (removing the ingrown edge) and chemical matrixectomy to prevent the nail from growing inward again.",
    benefits: [
      "Immediate relief from severe toe pain and pressure",
      "Resolves chronic nail bed infections",
      "Permanent solution with chemical matrix destruction",
      "Performed completely painlessly under local ring block anesthesia"
    ],
    downtime: "1 - 2 weeks for complete healing",
    duration: "30 - 45 minutes",
    sessions: "Single surgical session",
    technology: "Partial nail avulsion + Phenol matrixectomy",
    preCare: [
      "Wear open-toed footwear (sandals/flip-flops) to the appointment."
    ],
    postCare: [
      "Keep the foot elevated for the first 24-48 hours.",
      "Perform daily dressing changes with antiseptic solutions.",
      "Wear wide, comfortable shoes until fully healed."
    ]
  },
  {
    id: "lump-excision",
    name: "Excision of Lumps & Bumps",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    category: "quick-procedures",
    description: "Minor surgical removal of benign subcutaneous lesions such as lipomas, epidermoid cysts, and dermatofibromas. The mass is carefully excised under local anesthesia and stitched for an aesthetic outcome.",
    benefits: [
      "Permanent removal of bothersome or growing lumps",
      "Histopathological analysis performed for peace of mind",
      "Clean, sterile clinical environment ensuring safety",
      "Fine aesthetic suturing minimizes scarring"
    ],
    downtime: "7 - 14 days (depending on size and location)",
    duration: "45 - 60 minutes",
    sessions: "Single surgical procedure",
    technology: "Minor dermatological surgery",
    preCare: [
      "Inform the doctor if you are on aspirin or blood thinners."
    ],
    postCare: [
      "Keep the surgical wound dry for 48 hours.",
      "Attend follow-up for suture removal (usually 7-14 days).",
      "Avoid heavy lifting or stretching the area."
    ]
  },

  // --- MEDICAL DERMATOLOGY ---
  {
    id: "skin-hair-nail-consult",
    name: "Skin, Hair & Nail Consultations",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "medical-dermatology",
    description: "Comprehensive clinical evaluation and personalized treatment plans for all conditions affecting the skin, hair, and nails — from common concerns to complex disorders.",
    benefits: [
      "Thorough clinical examination with dermatoscopy",
      "Evidence-based diagnosis and treatment",
      "Personalized care plans tailored to your condition",
      "Follow-up monitoring and treatment adjustments"
    ],
    downtime: "None",
    duration: "30 - 45 minutes",
    sessions: "As needed"
  },
  {
    id: "dermoscopy-trichoscopy",
    name: "Dermoscopy, Trichoscopy & Onychoscopy",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "medical-dermatology",
    description: "Advanced non-invasive diagnostic imaging techniques using specialized magnification to evaluate skin lesions, hair/scalp disorders, and nail conditions with precision.",
    benefits: [
      "Non-invasive, painless diagnostic tool",
      "High-magnification imaging for accurate diagnosis",
      "Early detection of skin abnormalities",
      "Guides targeted treatment decisions"
    ],
    downtime: "None",
    duration: "15 - 30 minutes",
    sessions: "As needed"
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    img: "https://images.unsplash.com/photo-1631549916768-4e9861544f17?w=800&q=80",
    category: "medical-dermatology",
    description: "Comprehensive management of psoriasis — a chronic autoimmune condition causing red, scaly patches on the skin. We offer topical, systemic, and biologic treatment options.",
    benefits: [
      "Customized treatment based on severity and type",
      "Topical, systemic, and biologic therapy options",
      "Long-term disease control and flare prevention",
      "Holistic approach addressing triggers and lifestyle"
    ],
    downtime: "None",
    duration: "30 minutes",
    sessions: "Ongoing management"
  },
  {
    id: "infections",
    name: "Infections (Fungal, Viral, Parasitic)",
    img: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=800&q=80",
    category: "medical-dermatology",
    description: "Diagnosis and treatment of skin infections caused by fungi (ringworm, candidiasis), viruses (warts, herpes, molluscum), and parasites (scabies, lice).",
    benefits: [
      "Accurate clinical diagnosis and lab confirmation",
      "Targeted antimicrobial and antifungal therapy",
      "Prevention strategies to avoid recurrence",
      "Family and contact screening when needed"
    ],
    downtime: "None",
    duration: "20 - 30 minutes",
    sessions: "As needed"
  },
  {
    id: "immunobullous",
    name: "Immunobullous Diseases",
    img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
    category: "medical-dermatology",
    description: "Specialized management of autoimmune blistering disorders such as pemphigus and bullous pemphigoid, requiring expert clinical evaluation and long-term immunosuppressive care.",
    benefits: [
      "Expert diagnosis with clinical and histopathological correlation",
      "Immunosuppressive therapy with careful monitoring",
      "Long-term disease control and relapse prevention",
      "Multidisciplinary care coordination"
    ],
    downtime: "None",
    duration: "30 - 45 minutes",
    sessions: "Ongoing management"
  },
  {
    id: "autoimmune-derm",
    name: "Autoimmune Dermatology",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    category: "medical-dermatology",
    description: "Expert management of skin manifestations of autoimmune conditions including Systemic Lupus Erythematosus (SLE), Scleroderma, and Dermatomyositis.",
    benefits: [
      "Specialized evaluation of autoimmune skin signs",
      "Coordinated care with rheumatology when needed",
      "Immunomodulatory treatment protocols",
      "Regular monitoring and flare management"
    ],
    downtime: "None",
    duration: "30 - 45 minutes",
    sessions: "Ongoing management"
  },
  {
    id: "pediatric-derm",
    name: "Pediatric Dermatology",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=800&q=80",
    category: "medical-dermatology",
    description: "Gentle, specialized dermatological care for infants, children, and adolescents — covering eczema, birthmarks, rashes, infections, and all pediatric skin conditions.",
    benefits: [
      "Child-friendly consultation environment",
      "Age-appropriate and safe treatment options",
      "Expert management of childhood eczema and allergies",
      "Guidance for parents on skincare routines"
    ],
    downtime: "None",
    duration: "20 - 30 minutes",
    sessions: "As needed"
  },
  {
    id: "skin-allergy",
    name: "Skin Allergy",
    img: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=800&q=80",
    category: "medical-dermatology",
    description: "Diagnosis and management of allergic skin conditions including urticaria (hives), eczema, atopic dermatitis, and contact dermatitis — identifying triggers and providing lasting relief.",
    benefits: [
      "Comprehensive allergy evaluation and trigger identification",
      "Patch testing and allergy workup when indicated",
      "Customized anti-allergic treatment plans",
      "Long-term management strategies for chronic conditions"
    ],
    downtime: "None",
    duration: "20 - 30 minutes",
    sessions: "As needed"
  },
  {
    id: "hair-conditions",
    name: "Hair Disorders",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    category: "medical-dermatology",
    description: "Clinical evaluation and treatment of hair loss, dandruff, scalp infections, and other hair and scalp disorders using evidence-based dermatological approaches.",
    benefits: [
      "Trichoscopic evaluation for precise diagnosis",
      "Treatment for hair loss, dandruff, and scalp infections",
      "Hormonal and nutritional assessment when needed",
      "Personalized hair care regimen guidance"
    ],
    downtime: "None",
    duration: "30 minutes",
    sessions: "As needed"
  }
]