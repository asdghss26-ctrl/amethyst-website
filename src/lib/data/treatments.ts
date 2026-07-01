export interface Treatment {
  id: string
  name: string
  img: string
  category: 'hair-loss' | 'acne-scar' | 'pigmentation' | 'vitiligo' | 'dermatosurgery' | 'medical-dermatology' | 'laser-hair' | 'anti-ageing'
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
    duration: "1.5 hours",
    sessions: "4 - 6 sessions, spaced 4-6 weeks apart",
    technology: "Acellular activated growth factor extraction system",
    preCare: [
      "Wash hair thoroughly on the morning of the procedure.",
      "Stay well hydrated before the blood draw."
    ],
    postCare: [
      "Do not wash or apply products to your scalp for 24 hours.",
      "Avoid vigorous exercise or heavy sweating for 48 hours.",
      "Protect your scalp from direct sun exposure."
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
      "Ideal for advanced or stubborn thinning patterns"
    ],
    downtime: "None (mild redness resolves in a few hours)",
    duration: "45 minutes",
    sessions: "4 - 6 sessions, spaced 4 weeks apart",
    technology: "Low-speed centrifugation protocol preserving fibrin matrix",
    preCare: [
      "Wash hair thoroughly on the morning of the procedure.",
      "Stay well hydrated before the blood draw."
    ],
    postCare: [
      "Do not wash or apply products to your scalp for 24 hours.",
      "Avoid vigorous exercise or heavy sweating for 48 hours.",
      "Protect your scalp from direct sun exposure."
    ]
  },
  {
    id: "hair-threads",
    name: "Hair Threads",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    category: "hair-loss",
    description: "PDO (Polydioxanone) threads are ultra-fine, absorbable sutures placed into the scalp. They trigger a localized healing response, encouraging collagen synthesis and long-term hair follicle rejuvenation.",
    benefits: [
      "Provides structural support to thinning scalp regions",
      "Continuous micro-circulation stimulation over 6-8 months",
      "Fully absorbable PDO threads with high safety profile",
      "Can be combined with GFC or PRP for compounded results"
    ],
    downtime: "Minimal (mild bruising or soreness for 2-3 days)",
    duration: "45 - 60 minutes",
    sessions: "Single session, repeatable after 8-12 months",
    technology: "FDA-approved absorbable Polydioxanone (PDO) threads",
    preCare: [
      "Wash hair thoroughly on the morning of the procedure.",
      "Stay well hydrated before the blood draw."
    ],
    postCare: [
      "Avoid massaging or scratching the treated scalp areas for 1 week.",
      "Do not wash or apply products to your scalp for 24 hours.",
      "Avoid vigorous exercise or heavy sweating for 48 hours.",
      "Protect your scalp from direct sun exposure."
    ]
  },
  {
    id: "dutexome-mesotherapy",
    name: "Dutexome Mesotherapy",
    img: "https://images.unsplash.com/photo-1584820927498-cafe8c1c9695?w=800&q=80",
    category: "hair-loss",
    description: "An advanced mesotherapy technique combining Dutasteride and Exosomes to target androgenetic alopecia. Exosomes deliver powerful cellular signals while Dutasteride blocks the DHT hormone responsible for hair thinning.",
    benefits: [
      "Targeted DHT blockade at the follicle level",
      "Massive boost in cellular regeneration via exosomes",
      "Reduces hair fall rapidly and thickens existing strands",
      "Less systemic side effects compared to oral DHT blockers"
    ],
    downtime: "None (mild scalp tenderness for 12 hours)",
    duration: "30 - 45 minutes",
    sessions: "6 sessions, spaced 3-4 weeks apart",
    technology: "Micro-injections of Exosome + Dutasteride complex",
    preCare: [
      "Wash hair thoroughly on the morning of the procedure.",
      "Stay well hydrated before the blood draw."
    ],
    postCare: [
      "Do not wash or apply products to your scalp for 24 hours.",
      "Avoid vigorous exercise or heavy sweating for 48 hours.",
      "Protect your scalp from direct sun exposure."
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
      "Best for telogen effluvium",
      "Revitalizes dull, lifeless hair",
      "Excellent adjunct to PRP or GFC therapies"
    ],
    downtime: "None",
    duration: "30 minutes",
    sessions: "6 - 8 sessions, spaced 2 weeks apart",
    technology: "Nutrient infusion via micro-needling or micro-injections",
    preCare: [
      "Wash hair thoroughly on the morning of the procedure.",
      "Stay well hydrated before the blood draw."
    ],
    postCare: [
      "Do not wash or apply products to your scalp for 24 hours.",
      "Avoid vigorous exercise or heavy sweating for 48 hours.",
      "Protect your scalp from direct sun exposure."
    ]
  },
  {
    id: "ils-alopecia",
    name: "ILS – Intralesional Steroid",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    category: "hair-loss",
    description: "Intralesional Steroid (ILS) injections deliver corticosteroids directly into the affected scalp patches to suppress the autoimmune response causing alopecia areata, promoting rapid hair regrowth.",
    benefits: [
      "Targeted treatment for alopecia areata patches",
      "Rapid suppression of localized immune response",
      "Promotes visible hair regrowth in treated areas",
      "Quick in-clinic procedure with no downtime"
    ],
    downtime: "None",
    duration: "20 minutes",
    sessions: "1 - 3 sessions, as recommended"
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
    downtime: "4 - 5 days (mild swelling and localized bruising)",
    duration: "40 minutes",
    sessions: "3 - 4 sessions, as needed",
    technology: "Nokor needle or cannula-based subcision system",
    preCare: [
      "Use regular prescribed skincare.",
      "Stop actives and acne creams 3 days prior to the procedure."
    ],
    postCare: [
      "Avoid picking on scabs or marks.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
    ]
  },
  {
    id: "mnrf",
    name: "MNRF Microneedling",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "acne-scar",
    description: "Microneedling Radiofrequency (MNRF) delivers controlled RF energy deep into the dermis through insulated micro-needles. This stimulates intense collagen and elastin production while sparing the epidermis.",
    benefits: [
      "Improves deep acne scars, pores, and skin laxity",
      "Safe for all skin types, including darker skin tones",
      "Minimal risk of post-inflammatory hyperpigmentation (PIH)",
      "Reduces active oil production and sebum flow"
    ],
    downtime: "4 - 7 days (mild redness and dry sand-like micro-crusts)",
    duration: "1 hour (plus numbing cream time)",
    sessions: "4 - 6 sessions, spaced 4 weeks apart",
    technology: "Fractional radiofrequency with insulated gold-plated microneedles",
    preCare: [
      "Use regular prescribed skincare.",
      "Stop actives and acne creams 3 days prior to the procedure."
    ],
    postCare: [
      "Apply antibiotic recovery creams as instructed by the doctor.",
      "Avoid picking on scabs or marks.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
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
    downtime: "5 days",
    duration: "20 - 30 minutes",
    sessions: "3 - 4 sessions, spaced 6 weeks apart",
    technology: "High-precision localized Trichloroacetic Acid application",
    preCare: [
      "Stop actives 3 days before the procedure."
    ],
    postCare: [
      "Avoid picking on scabs or marks.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
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
      "Follow prescribed skincare.",
      "Avoid actives and acne creams 3 days prior to the procedure."
    ],
    postCare: [
      "Avoid picking on scabs or marks.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
    ]
  },
  {
    id: "papular-scar",
    name: "Papular Scar Treatment",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    category: "acne-scar",
    description: "Targeted therapy for elevated, bumpy papular scars (often found on the chin and nose) using ablative CO2 laser to flatten the raised fibrous tissue.",
    benefits: [
      "Flattens bumpy, raised scars effectively",
      "Smooths skin texture and restores facial contours",
      "Safe and controlled tissue ablation"
    ],
    downtime: "3 - 5 days (mild scabbing)",
    duration: "20 minutes",
    sessions: "2 - 3 sessions",
    technology: "Ablative CO2 Laser",
    preCare: [
      "Use regular prescribed skincare.",
      "Stop actives and acne creams 3 days prior to the procedure."
    ],
    postCare: [
      "Apply antibiotic recovery creams as instructed by the doctor.",
      "Avoid picking on scabs or marks.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
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
    downtime: "4 - 5 days (mild swelling and bruising)",
    duration: "45 - 60 minutes",
    sessions: "1 - 2 sessions, spaced 4-6 weeks apart",
    technology: "Plasma gel bio-heating and subcision",
    preCare: [
      "Use regular prescribed skincare.",
      "Stop actives and acne creams 3 days prior to the procedure."
    ],
    postCare: [
      "Avoid picking on scabs or marks.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
    ]
  },
  {
    id: "threads-acne-scars",
    name: "Threads for Acne Scars",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    category: "acne-scar",
    description: "Absorbable PDO threads are strategically placed beneath acne scars to lift depressed tissue and stimulate collagen remodeling, providing gradual and natural scar improvement.",
    benefits: [
      "Lifts depressed scars from beneath the skin",
      "Stimulates long-term collagen production",
      "Fully absorbable threads with high safety profile",
      "Can be combined with other scar treatments for enhanced results"
    ],
    downtime: "2 - 3 days (mild swelling)",
    duration: "45 minutes",
    sessions: "1 - 2 sessions per year",
    technology: "Absorbable Polydioxanone (PDO) threads",
    preCare: [
      "Use regular prescribed skincare.",
      "Stop actives and acne creams 3 days prior to the procedure."
    ],
    postCare: [
      "Avoid massaging the face for 1 week.",
      "Avoid picking on scabs or marks.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
    ]
  },

  {
    id: "co2-laser-acne",
    name: "CO2 Laser for Acne Scars",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    category: "acne-scar",
    description: "Fractional CO2 laser helps in resurfacing superficial scars. Ablative CO2 helps in shouldering and smoothening out scar edges. A great multistep treatment for improving acne scars.",
    benefits: [
      "Highly effective multistep scar revision",
      "Resurfaces superficial scars and texture",
      "Smoothens sharp edges of boxcar or deep scars"
    ],
    downtime: "7 to 10 days",
    duration: "45 - 60 minutes",
    sessions: "3 to 5 sessions, spaced 4-6 weeks apart",
    technology: "Fractional & Ablative CO2 Laser",
    preCare: [
      "Use regular prescribed skincare.",
      "Stop actives and acne creams 3 days prior to the procedure."
    ],
    postCare: [
      "Gentle skin care.",
      "Avoid sun exposure.",
      "Do not pick on scabs."
    ]
  },
  {
    id: "prp-acne",
    name: "Platelet Rich Plasma for Acne Scars",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "acne-scar",
    description: "Utilizes the healing power of your own blood platelets to accelerate tissue repair and boost collagen production. Frequently used in combination with other scar treatments.",
    benefits: [
      "Accelerates natural healing and reduces downtime",
      "Boosts collagen synthesis for scar filling",
      "Excellent when combined with lasers or subcision"
    ],
    downtime: "3 to 5 days",
    duration: "45 mins",
    sessions: "3 to 5 sessions, spaced 4 weeks apart",
    technology: "Autologous Platelet Rich Plasma",
    preCare: [
      "Drink plenty of water before the blood draw.",
      "Stop actives and acne creams 3 days prior."
    ],
    postCare: [
      "Gentle skin care.",
      "Avoid sun exposure.",
      "Do not pick on scabs or marks."
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
      "Uses photoacoustic energy instead of photomechanical",
      "Increases skin radiance and refines overall texture",
      "Minimal downtime compared to traditional Q-switched lasers"
    ],
    downtime: "Minimal (mild flush for 2-4 hours, rarely 1-2 days)",
    duration: "30 mins",
    sessions: "4 to 6",
    technology: "Picosecond technology",
    preCare: [
      "Avoid strong exfoliation 3 days prior to procedure."
    ],
    postCare: [
      "Avoid steam, sauna, swimming, heavy exercise, facials, direct sun exposure, waxing, and threading face for next 3 to 5 days.",
      "Keep routine simple with gentle cleanser, moisturiser, sunscreen and recovery cream if prescribed."
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
    downtime: "0 to 7 days",
    duration: "45 mins",
    sessions: "4 to 6 sessions",
    technology: "Fractional micro-lens picosecond laser + electroporation infusion",
    preCare: [
      "Avoid strong exfoliation 3 days prior to procedure."
    ],
    postCare: [
      "Avoid steam, sauna, swimming, heavy exercise, facials, direct sun exposure, waxing, and threading face for next 3 to 5 days.",
      "Keep routine simple with gentle cleanser, moisturiser, sunscreen and recovery cream if prescribed.",
      "Do not pick on dry skin, keep moisturising."
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
      "Avoid strong exfoliation 3 days prior to procedure."
    ],
    postCare: [
      "Follow home care guide prescribed by doctor strictly.",
      "Do not pick on skin in peeling phase.",
      "Apply plenty of moisturiser.",
      "Avoid steam, sauna, swimming, heavy exercise, facials, direct sun exposure, waxing threading face for next 7 days."
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
    downtime: "0 to 7 days (depending on the peel)",
    duration: "20 - 30 minutes",
    sessions: "4 to 6 sessions",
    technology: "Medical-grade topical chemical formulations",
    preCare: [
      "Avoid strong exfoliation 3 days prior to procedure."
    ],
    postCare: [
      "Avoid steam, sauna, swimming, heavy exercise, facials, direct sun exposure, waxing, and threading face for next 3 to 5 days.",
      "Keep routine simple with gentle cleanser, moisturiser, sunscreen and recovery cream if prescribed.",
      "Do not pick on flaking skin.",
      "Apply plenty of moisturiser."
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
  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    img: "https://images.unsplash.com/photo-1590246814883-578aeccbd186?w=800&q=80",
    category: "pigmentation",
    description: "Advanced picosecond laser technology safely and effectively breaks down tattoo ink particles in the skin, allowing the body's immune system to naturally clear them over time.",
    benefits: [
      "Effective for a wide range of ink colors",
      "Fewer sessions required compared to older laser technologies",
      "Lower risk of scarring and skin damage",
      "Targets ink precisely while preserving surrounding tissue"
    ],
    downtime: "Minimal (mild redness and swelling)",
    duration: "20 to 40 minutes",
    sessions: "6 to 8 sessions",
    technology: "Picosecond laser technology",
    preCare: [
      "Apply numbing cream as instructed."
    ],
    postCare: [
      "Apply recovery cream twice a day for 7 days.",
      "Keep area moisturised."
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
    downtime: "1 to 2 days",
    duration: "10 - 20 minutes",
    sessions: "10 to 16 sessions",
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
    downtime: "3 to 5 days",
    duration: "30 minutes",
    sessions: "3 to 5 sessions",
    technology: "Medical microneedling + Topical chemotherapy agents",
    preCare: [
      "Avoid sun exposure to the patches immediately before treatment."
    ],
    postCare: [
      "Protect treated areas from sun.",
      "Apply prescribed soothing ointments."
    ]
  },

  {
    id: "nces",
    name: "Non-Cultured Epidermal Suspension (NCES)",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "vitiligo",
    description: "An advanced cellular grafting technique where a small donor skin sample is processed to separate melanocytes and keratinocytes, which are then transplanted as a suspension onto the dermabraded vitiligo patch. Ideal for treating larger areas.",
    benefits: [
      "Can treat much larger areas than punch grafting",
      "Excellent color match and cosmetic outcome",
      "High success rate for stable vitiligo"
    ],
    downtime: "7 to 10 days",
    duration: "2 hours",
    sessions: "Usually single session",
    technology: "Cellular transplant surgery",
    preCare: [
      "Vitiligo must be stable for at least 1 year."
    ],
    postCare: [
      "Strict immobilization of the treated area for 7 days.",
      "Keep dressings completely dry."
    ]
  },
  {
    id: "blister-grafting",
    name: "Blister Skin Grafting",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    category: "vitiligo",
    description: "A specialized surgical technique that uses suction to create a blister on normal pigmented skin (donor site). The roof of the blister, containing melanocytes, is carefully removed and transplanted to the vitiligo patch.",
    benefits: [
      "No scarring at the donor site",
      "Excellent cosmetic color matching",
      "Safe and highly effective for localized stable vitiligo"
    ],
    downtime: "7 to 10 days",
    duration: "2 to 3 hours",
    sessions: "Usually single session",
    technology: "Suction blister epidermal grafting (SBEG)",
    preCare: [
      "Vitiligo must be stable for at least 1 year."
    ],
    postCare: [
      "Keep dressings perfectly dry for 7 days.",
      "Avoid friction on donor and recipient sites."
    ]
  },

  // --- DERMATOSURGERY ---
  {
    id: "skin-tag",
    name: "Skin Tag Removal",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    category: "dermatosurgery",
    description: "Quick, safe removal of benign skin tags and growths using radiofrequency electrocautery under local numbing, resulting in clean, flat skin healing.",
    benefits: [
      "Instant, single-session clearance of bothersome skin tags",
      "Minimal scarring with clean healing and cosmetic results",
      "Performed under local numbing cream for comfortable treatment",
      "Prevents tags from catching on clothing or jewelry"
    ],
    downtime: "7 days for scabs to fall off",
    duration: "15 - 30 minutes",
    sessions: "Single session (unless tags are widespread)",
    technology: "Radiofrequency electrocautery",
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
    category: "dermatosurgery",
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
      "Avoid heavy cosmetic products or make-up for 24 hours.",
      "Apply antibiotic cream for 7 days."
    ]
  },
  {
    id: "earlobe",
    name: "Surgical Ear Lobe Repair",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    category: "dermatosurgery",
    description: "Surgical closure of split, torn, or stretched earlobes under local anesthesia to restore an aesthetic, unified shape suitable for re-piercing.",
    benefits: [
      "Restores structural integrity and aesthetics of the earlobe",
      "Performed in-office with local anesthesia (painless)",
      "Allows safe re-piercing after complete healing (approx. 8 weeks)"
    ],
    downtime: "7 to 10 days",
    duration: "1 hour",
    sessions: "Single procedure",
    technology: "Aseptic surgical reconstruction and micro-suturing",
    preCare: [
      "Avoid wearing heavy jewelry or earrings to the clinic."
    ],
    postCare: [
      "Keep area dry till suture removal.",
      "Suture removal after 7 to 10 days."
    ]
  },
  {
    id: "non-surgical-earlobe",
    name: "Non-Surgical Ear Lobe Repair",
    img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&q=80",
    category: "dermatosurgery",
    description: "Meant for minor defects, this procedure uses TCA to seal the hole without surgery. It is performed in sterile conditions by an expert dermatologist.",
    benefits: [
      "No stitches or incisions required",
      "Quick and relatively painless",
      "Excellent cosmetic outcome for minor tears"
    ],
    downtime: "1 to 3 days",
    duration: "15 - 30 minutes",
    sessions: "1 to 3 sessions",
    technology: "Trichloroacetic Acid (TCA) application",
    preCare: [
      "Ensure the earlobe is clean and free of makeup or creams."
    ],
    postCare: [
      "Keep the covering tape on for 1 to 3 days."
    ]
  },
  {
    id: "ear-piercing",
    name: "Ear Piercing",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "dermatosurgery",
    description: "Safe, sterile ear piercing performed by a dermatologist using the advanced Inverness system. We offer a variety of earring options.",
    benefits: [
      "Medical-grade sterile environment",
      "Precise placement by a medical professional",
      "Gentle piercing action with the Inverness system"
    ],
    downtime: "0 days",
    duration: "15 - 30 minutes",
    sessions: "Single session",
    technology: "Inverness piercing system",
    preCare: [
      "Ensure you are in good general health."
    ],
    postCare: [
      "Keep rotating the ear piercing daily thrice.",
      "Apply solution daily twice for 6 to 8 weeks."
    ]
  },
  {
    id: "biopsy",
    name: "Diagnostic Skin Biopsy",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    category: "dermatosurgery",
    description: "A small, precise diagnostic sample of skin tissue is taken (excision biopsy and punch biopsy 4mm only) under local anesthesia and sent for dermatopathological evaluation to determine the exact diagnosis of skin conditions.",
    benefits: [
      "Provides definitive histopathological diagnosis",
      "Essential for confirming suspected skin lesions or rashes",
      "Safe, sterile in-office surgical procedure"
    ],
    downtime: "5 to 10 days",
    duration: "20 - 30 minutes",
    sessions: "Single diagnostic procedure",
    technology: "Sterile biopsy punches (4mm) or excision",
    preCare: [
      "Inform the doctor of any history of bleeding disorders or anticoagulants."
    ],
    postCare: [
      "Keep biopsy site dry and clean.",
      "Suture removal at 5 to 10 days based on site."
    ]
  },
  {
    id: "molluscum-needling",
    name: "Molluscum Needling",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    category: "dermatosurgery",
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
    category: "dermatosurgery",
    description: "Surgical intervention for painful, infected ingrown toenails. The procedure involves partial nail avulsion (removing the ingrown edge) and chemical matrixectomy to prevent the nail from growing inward again.",
    benefits: [
      "Immediate relief from severe toe pain and pressure",
      "Resolves chronic nail bed infections",
      "Permanent solution with chemical matrix destruction",
      "Performed completely painlessly under local ring block anesthesia"
    ],
    downtime: "1 - 2 weeks for complete healing (14 days)",
    duration: "45 min to 1 hour",
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
    category: "dermatosurgery",
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
  {
    id: "keloid-scar",
    name: "Keloid & Hypertrophic Scar Treatment",
    img: "https://images.unsplash.com/photo-1584820927498-cafe8c1c9695?w=800&q=80",
    category: "dermatosurgery",
    description: "A powerful combination treatment utilizing CO2 laser, intralesional steroids, and triple combination injections to significantly flatten and improve the appearance of keloids and hypertrophic scars.",
    benefits: [
      "Reduces scar thickness and redness",
      "Alleviates itching and discomfort",
      "Multi-modality approach for stubborn scars",
      "Prevents further scar growth"
    ],
    downtime: "3 to 5 days",
    duration: "30 - 45 minutes",
    sessions: "Multiple sessions as advised by the doctor",
    technology: "CO2 Laser & Intralesional Injections",
    preCare: [
      "Clean the area thoroughly before treatment."
    ],
    postCare: [
      "Keep the treated area clean and protected from the sun.",
      "Apply prescribed topical ointments as directed."
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
  },

  // --- LASER HAIR REDUCTION ---
  {
    id: "ndyag-laser-hair",
    name: "Long Pulsed Nd:YAG Laser",
    img: "https://images.unsplash.com/photo-1590246814883-578aeccbd186?w=800&q=80",
    category: "laser-hair",
    description: "A highly effective laser hair reduction system specifically safe for darker skin types (Fitzpatrick IV-VI). It bypasses the epidermis to target the deep hair follicles.",
    benefits: [
      "Safest option for Indian skin tones",
      "Effectively targets deep, coarse hair",
      "Reduces ingrown hairs and shaving bumps"
    ],
    downtime: "None (mild redness for a few hours)",
    duration: "30 - 60 minutes",
    sessions: "6 to 8 sessions",
    technology: "1064nm Long Pulsed Nd:YAG",
    preCare: [
      "Shave the area 24 hours before treatment.",
      "Avoid waxing or plucking for 4 weeks."
    ],
    postCare: [
      "Apply soothing aloe or prescribed cream.",
      "Strict sun protection for the treated area."
    ]
  },
  {
    id: "diode-laser-hair",
    name: "Quadruple Wavelength Diode Laser",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "laser-hair",
    description: "An advanced, virtually painless laser system that combines four wavelengths simultaneously to target different depths of the hair follicle for maximum clearance.",
    benefits: [
      "Virtually painless treatment with built-in cooling",
      "Fast procedure times for large areas",
      "Effective on various hair colors and types"
    ],
    downtime: "None",
    duration: "20 - 45 minutes",
    sessions: "6 to 8 sessions",
    technology: "Quadruple Wavelength Diode (755nm, 810nm, 940nm, 1064nm)",
    preCare: [
      "Shave the area 24 hours prior to the session.",
      "Avoid tanning or sunburns."
    ],
    postCare: [
      "Apply gentle moisturizer.",
      "Avoid hot showers or saunas for 24 hours."
    ]
  },

  // --- ANTI-AGEING ---
  {
    id: "skin-boosters",
    name: "Skin Boosters",
    img: "https://images.unsplash.com/photo-1613256086776-805c6d3bc0a6?w=800&q=80",
    category: "anti-ageing",
    description: "Skin boosters are microinjections of hyaluronic acid that deeply hydrate the skin, improve elasticity, and enhance overall skin quality.",
    benefits: [
      "Deeply hydrates the skin",
      "Improves elasticity",
      "Enhances overall skin quality"
    ],
    downtime: "Minimal",
    duration: "Procedure: 20–30 minutes",
    sessions: "2–3 sessions, 4 weeks apart | Maintenance: Every 6–9 months",
    technology: "Micro-injections of Hyaluronic Acid",
    preCare: [
      "Avoid alcohol for 24 hours.",
      "Avoid blood-thinning medications if medically appropriate."
    ],
    postCare: [
      "Avoid makeup for 12 hours.",
      "Avoid strenuous exercise for 24 hours.",
      "Apply sunscreen daily."
    ]
  },
  {
    id: "profhilo",
    name: "Profhilo",
    img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&q=80",
    category: "anti-ageing",
    description: "Profhilo is an injectable bio-remodeling treatment of pure hyaluronic acid that stimulates collagen and elastin production while deeply hydrating the skin.",
    benefits: [
      "Improves skin hydration and enhances elasticity",
      "Reduces skin laxity",
      "Smoothens fine lines and improves skin texture",
      "Natural skin rejuvenation"
    ],
    downtime: "Minimal",
    duration: "Consultation: 15–20 minutes | Procedure: 20–30 minutes",
    sessions: "Two sessions, four weeks apart | Maintenance every six months",
    technology: "Bio Aesthetic Point (BAP) injection with High-purity stabilized hyaluronic acid",
    preCare: [
      "Avoid alcohol for 24 hours.",
      "Avoid blood-thinning medications if medically appropriate.",
      "Inform your dermatologist of any active skin infections.",
      "Arrive with clean skin."
    ],
    postCare: [
      "Avoid touching injection sites for 24 hours.",
      "Avoid strenuous exercise for 24 hours.",
      "Avoid excessive heat for 48 hours.",
      "Use sunscreen daily.",
      "Continue a gentle skincare routine."
    ]
  },
  {
    id: "nctf",
    name: "NCTF",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "anti-ageing",
    description: "New Cellular Treatment Factor (NCTF) is a unique anti-aging, poly-revitalizing complex comprising over 50 active ingredients (vitamins, amino acids, minerals) injected superficially.",
    benefits: [
      "Nourishes the skin with essential nutrients",
      "Improves skin brightness and pore size",
      "Excellent for face, neck, and décolletage"
    ],
    downtime: "1 day (mild redness)",
    duration: "30 minutes",
    sessions: "3 to 5 sessions, spaced 15 days apart",
    technology: "Mesotherapy / Microneedling delivery",
    preCare: ["Arrive with a clean face."],
    postCare: ["Avoid makeup for 12 hours."]
  },
  {
    id: "jalupro",
    name: "Jalupro",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    category: "anti-ageing",
    description: "An injectable amino acid replacement therapy combined with hyaluronic acid. It acts as a bio-revitalizer to dramatically improve skin texture and minimize wrinkles.",
    benefits: [
      "Feeds fibroblasts with amino acids to produce collagen",
      "Highly effective for under-eye dark circles and hollows",
      "Restores volume and elasticity"
    ],
    downtime: "1 - 2 days",
    duration: "30 minutes",
    sessions: "3 - 4 sessions, spaced 1-2 weeks apart",
    technology: "Amino Acid Bio-revitalization",
    preCare: ["Avoid blood thinners 3 days prior."],
    postCare: ["Avoid intense heat and direct sun for 48 hours."]
  },
  {
    id: "pdrn-pn",
    name: "PDRN/PN (Salmon DNA Therapy)",
    img: "https://images.unsplash.com/photo-1590246814883-578aeccbd186?w=800&q=80",
    category: "anti-ageing",
    description: "Harnessing Polynucleotides (PN) and Polydeoxyribonucleotide (PDRN) derived from salmon DNA, this advanced treatment repairs damaged skin at a cellular level and intensely promotes tissue regeneration.",
    benefits: [
      "Accelerates wound healing and skin barrier repair",
      "Highly anti-inflammatory (great for rosacea or sensitive skin)",
      "Reverses signs of photo-aging and thinned skin"
    ],
    downtime: "1 - 3 days (small bumps or mild swelling)",
    duration: "45 minutes",
    sessions: "3 - 4 sessions, spaced 3-4 weeks apart",
    technology: "Polynucleotide bio-stimulation",
    preCare: ["Stop actives 3 days before."],
    postCare: ["Do not touch or massage the face heavily for 24 hours."]
  },
  {
    id: "exosome",
    name: "Exosome Therapy",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    category: "anti-ageing",
    description: "The frontier of regenerative aesthetics. Billions of stem cell-derived exosomes are delivered into the skin to dramatically signal cellular repair, collagen production, and profound rejuvenation.",
    benefits: [
      "The most potent cellular signaling treatment available",
      "Reduces inflammation and accelerates healing by 300%",
      "Improves overall skin age and health at a molecular level"
    ],
    downtime: "None to 1 day",
    duration: "45 minutes",
    sessions: "3 sessions, spaced 4 weeks apart",
    technology: "Topical application post-microneedling/laser",
    preCare: ["Avoid anti-inflammatory medications for 3 days."],
    postCare: ["Do not wash face for 12 hours to allow full absorption."]
  },
  {
    id: "fillers",
    name: "Dermal Fillers",
    img: "https://images.unsplash.com/photo-1613256086776-805c6d3bc0a6?w=800&q=80",
    category: "anti-ageing",
    description: "Hyaluronic acid-based injectable gels that restore facial volume, improve contour, and soften static wrinkles that are tailored to enhance facial balance while maintaining natural proportions.",
    benefits: [
      "Restores facial volume and improves facial harmony",
      "Defines cheeks, chin, and jawline",
      "Softens nasolabial folds and marionette lines",
      "Enhances lips naturally for immediate rejuvenation"
    ],
    downtime: "Minimal (mild swelling/bruising possible)",
    duration: "Consultation: 20–30 minutes | Procedure: 30–60 minutes",
    sessions: "Immediate improvement | Final results: 1–2 weeks | Longevity: 9–18 months",
    technology: "Ultra-fine needles with Premium cross-linked hyaluronic acid",
    preCare: [
      "Avoid alcohol for 24 hours.",
      "Avoid blood-thinning medications or supplements when medically appropriate.",
      "Inform your dermatologist about previous fillers, allergies, or autoimmune conditions.",
      "Avoid dental procedures for two weeks before treatment when possible."
    ],
    postCare: [
      "Avoid touching treated areas for 24 hours.",
      "Avoid intake of hot or luke warm food for 1 week.",
      "Avoid hot water bath.",
      "Apply cold compresses if swelling occurs.",
      "Avoid strenuous exercise for 24–48 hours.",
      "Avoid facial massages for two weeks.",
      "Sleep on your back for the first night if advised."
    ]
  },
  {
    id: "facial-threads",
    name: "Facial Threads for Lifting",
    img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&q=80",
    category: "anti-ageing",
    description: "A minimally invasive alternative to a surgical facelift. Absorbable cogged threads are inserted beneath the skin to physically lift sagging tissue (jowls, cheeks) while stimulating localized collagen.",
    benefits: [
      "Immediate mechanical lift of sagging facial tissues",
      "Long-term collagen stimulation along the thread paths",
      "Defines jawline and lifts mid-face non-surgically"
    ],
    downtime: "3 - 7 days (swelling, mild bruising, and tightness)",
    duration: "60 minutes",
    sessions: "Single session (results last 1-2 years)",
    technology: "PDO / PLLA Lifting Threads",
    preCare: ["Avoid blood thinners for 1 week. Prepare for some downtime."],
    postCare: ["Sleep on your back for 1 week. Avoid wide mouth opening or rigorous chewing."]
  },
  {
    id: "hifu",
    name: "HIFU (High-Intensity Focused Ultrasound)",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "anti-ageing",
    description: "HIFU is a non-surgical skin-tightening treatment that delivers focused ultrasound energy to deeper skin layers, stimulating collagen remodeling for gradual lifting and firming.",
    benefits: [
      "Non-surgical lifting of the neck, chin, and brow",
      "Stimulates deep foundational collagen",
      "Gradual lifting and firming"
    ],
    downtime: "None (Mild tenderness may last a few days)",
    duration: "Procedure: 45–90 minutes",
    sessions: "Results begin: 6–8 weeks | Maximum improvement: 3–6 months | Lasts: 12–18 months",
    technology: "High-Intensity Focused Ultrasound",
    preCare: [
      "Clean skin on the day of treatment.",
      "Avoid active infections or open wounds."
    ],
    postCare: [
      "Resume normal skincare the next day.",
      "Use sunscreen.",
      "Avoid excessive heat for 24 hours."
    ]
  },
  {
    id: "botulinum-toxin",
    name: "Botulinum Toxin (Botox)",
    img: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&q=80",
    category: "anti-ageing",
    description: "Botulinum toxin is a purified neuroprotein that temporarily relaxes targeted facial muscles responsible for dynamic wrinkles and also softens expression lines while maintaining natural facial movement.",
    benefits: [
      "Softens dynamic wrinkles",
      "Prevents formation of deeper expression lines",
      "Natural-looking facial rejuvenation",
      "Improved facial symmetry"
    ],
    downtime: "Minimal",
    duration: "Consultation: 15–20 minutes | Procedure: 10–20 minutes",
    sessions: "Visible results: 3–7 days | Full effect: 10–14 days | Longevity: 3–5 months",
    technology: "Micro-injections using ultra-fine needles for facial muscle",
    preCare: [
      "Avoid alcohol for 24 hours.",
      "Use regular prescribed skincare.",
      "Avoid blood-thinning medications or supplements (only after physician approval).",
      "Inform your dermatologist about pregnancy, breastfeeding, neuromuscular disorders, or previous reactions."
    ],
    postCare: [
      "Do not rub or massage treated areas for 24 hours.",
      "Stay upright for at least 4 hours.",
      "Avoid strenuous exercise for 24 hours.",
      "Avoid saunas, steam rooms, and excessive heat for 24–48 hours.",
      "Use gentle cleanser, moisturiser, and SPF 50 PA++++ sunscreen."
    ]
  }
]