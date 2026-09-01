import { Crop, CropDisease } from '../types';

export const CROPS_DATA: Crop[] = [
  {
    id: 'tomato',
    name: 'Tomato',
    botanicalName: 'Solanum lycopersicum',
    category: 'Vegetable',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    iconName: 'apple',
    commonDiseases: ['Early Blight', 'Late Blight', 'Leaf Mold', 'Septoria Spot'],
    description: 'High-value Solanaceous vegetable vulnerable to fungal foliar spots during warm, humid conditions.',
    idealConditions: '20°C - 28°C, well-drained loamy soil, pH 6.0 - 6.8'
  },
  {
    id: 'potato',
    name: 'Potato',
    botanicalName: 'Solanum tuberosum',
    category: 'Vegetable',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    iconName: 'circle-dot',
    commonDiseases: ['Late Blight', 'Early Blight', 'Blackleg'],
    description: 'Staple tuber crop highly prone to devastating Phytophthora infestans (Late Blight) under cool, damp fog.',
    idealConditions: '15°C - 20°C, loose sandy loam, consistent moisture'
  },
  {
    id: 'corn',
    name: 'Corn (Maize)',
    botanicalName: 'Zea mays',
    category: 'Cereal',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    iconName: 'wheat',
    commonDiseases: ['Common Rust', 'Northern Leaf Blight', 'Cercospora Spot'],
    description: 'Vital grain crop susceptible to airborne rust spores and leaf blights during high relative humidity.',
    idealConditions: '22°C - 32°C, deep rich organic soil, full sun'
  },
  {
    id: 'wheat',
    name: 'Wheat',
    botanicalName: 'Triticum aestivum',
    category: 'Cereal',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    iconName: 'wheat',
    commonDiseases: ['Leaf Rust', 'Stem Rust', 'Powdery Mildew'],
    description: 'Global cereal staple that requires proactive rust monitoring during the tillering and heading phases.',
    idealConditions: '15°C - 24°C, clay loam, moderate rainfall'
  },
  {
    id: 'rice',
    name: 'Rice (Paddy)',
    botanicalName: 'Oryza sativa',
    category: 'Cereal',
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80',
    iconName: 'sprout',
    commonDiseases: ['Rice Blast (Magnaporthe)', 'Brown Spot', 'Bacterial Blight'],
    description: 'Water-intensive grain crop where dense planting and high nitrogen exacerbate fungal blast infections.',
    idealConditions: '20°C - 35°C, alluvial clay with standing water control'
  },
  {
    id: 'cotton',
    name: 'Cotton',
    botanicalName: 'Gossypium hirsutum',
    category: 'Cash Crop',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
    iconName: 'flower',
    commonDiseases: ['Leaf Curl Virus (CLCuV)', 'Bacterial Blight', 'Alternaria Spot'],
    description: 'Major fiber crop vulnerable to whitefly-transmitted viral leaf curling and fungal boll rots.',
    idealConditions: '25°C - 35°C, deep black cotton soil, high sunlight'
  },
  {
    id: 'apple',
    name: 'Apple',
    botanicalName: 'Malus domestica',
    category: 'Fruit',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
    iconName: 'apple',
    commonDiseases: ['Apple Scab (Venturia)', 'Black Rot', 'Cedar Apple Rust'],
    description: 'Orchard tree fruit susceptible to fungal lesions on leaves and developing fruit skin in spring rains.',
    idealConditions: '12°C - 24°C, well-aerated hillside soils, winter chilling'
  },
  {
    id: 'pepper',
    name: 'Bell Pepper / Chili',
    botanicalName: 'Capsicum annuum',
    category: 'Vegetable',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
    iconName: 'flame',
    commonDiseases: ['Bacterial Spot', 'Early Blight', 'Anthracnose'],
    description: 'Warm-season solanaceous crop affected by water-soaked necrotic leaf spots and fruit rot.',
    idealConditions: '21°C - 29°C, fertile loam, moderate moisture'
  },
  {
    id: 'grape',
    name: 'Grape',
    botanicalName: 'Vitis vinifera',
    category: 'Fruit',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80',
    iconName: 'grape',
    commonDiseases: ['Black Rot (Guignardia)', 'Powdery Mildew', 'Esca (Black Measles)'],
    description: 'Vineyard fruit crop where canopy density and spring humidity trigger berry shrivel and leaf blotches.',
    idealConditions: '18°C - 30°C, gravelly loam, good air drainage'
  }
];

export const DISEASES_DATABASE: CropDisease[] = [
  {
    id: 'tomato-early-blight',
    name: 'Tomato Early Blight',
    scientificName: 'Alternaria solani',
    cropId: 'tomato',
    cropName: 'Tomato',
    severity: 'moderate',
    symptoms: [
      'Dark brown to black spots with concentric target-like rings on older lower leaves',
      'Yellow halo surrounding necrotic brown leaf lesions',
      'Premature defoliation starting from the bottom of the plant upward',
      'Sunscald on exposed green fruit due to canopy loss'
    ],
    possibleCauses: [
      'Prolonged leaf wetness from overhead irrigation or heavy morning dew',
      'Warm temperatures between 24°C - 29°C paired with humidity > 80%',
      'Infected crop residue left in soil from previous Solanaceous seasons',
      'Stressed plants suffering from nitrogen or potassium deficiency'
    ],
    visualCharacteristics: 'Concentric brown target rings on lower foliage with chlorotic yellow boundaries.',
    treatment: {
      immediateSteps: [
        'Prune off all infected lower leaves showing target spots using sanitized shears.',
        'Dispose of infected foliage immediately away from the field; do not compost.',
        'Switch strictly from overhead sprinkler watering to ground-level drip or furrow irrigation.',
        'Apply an organic mulch layer (straw or plastic) around the base to prevent soil splash.'
      ],
      agriculturalPractices: [
        'Practice a 3-to-4 year crop rotation away from tomatoes, potatoes, eggplants, and peppers.',
        'Increase row spacing (at least 60–90 cm) and stake plants upright to optimize airflow.',
        'Sanitize stakes, cages, and pruning equipment with 10% bleach solution between rows.',
        'Test soil and maintain balanced potassium and calcium levels to bolster cell wall resistance.'
      ],
      preventionMethods: [
        'Plant certified disease-resistant tomato cultivars (marked with "A" or "AS" resistance).',
        'Avoid working in the field when crop foliage is damp or covered in morning dew.',
        'Incorporate bio-fungicide soil drenches (Trichoderma harzianum) at seedling transplant.'
      ],
      organicRemedies: [
        'Copper Octanoate (liquid copper soap) or Bordeaux mixture applied at first sign of disease.',
        'Bacillus subtilis bio-fungicide foliar spray applied every 7–10 days in humid periods.',
        'Neem seed oil extract (cold-pressed 0.5%) for mild preventative suppression.'
      ],
      safeChemicalOptions: [
        'Chlorothalonil (broad-spectrum protective contact fungicide).',
        'Mancozeb or Azoxystrobin (consult local agricultural extension for registered formulations).'
      ],
      dosageSafetyNotes: 'Always follow manufacturer label instructions exactly. Apply protective sprays in the early morning or calm late afternoon to prevent leaf scorch and drift.',
      safetyPrecautions: [
        'Wear protective nitrile gloves, eye goggles, and a face respirator during spray preparation.',
        'Respect the mandatory Pre-Harvest Interval (PHI) of 3 to 7 days before picking tomatoes.',
        'Never spray near open water bodies, bee hives during foraging hours, or in windy conditions.',
        'Always consult your local government agricultural extension officer before chemical purchase.'
      ],
      recommendedProductTypes: ['Copper Fungicide', 'Bio-Fungicide (Bacillus subtilis)', 'Drip Irrigation Kit', 'Pruning Shears', 'Protective Respirator']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
        caption: 'Tomato leaf exhibiting brown concentric lesions with yellow chlorotic margins.'
      },
      {
        url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80',
        caption: 'Early blight target spot spreading across solanaceous foliar tissue.'
      }
    ]
  },
  {
    id: 'tomato-late-blight',
    name: 'Tomato Late Blight',
    scientificName: 'Phytophthora infestans',
    cropId: 'tomato',
    cropName: 'Tomato',
    severity: 'severe',
    symptoms: [
      'Large, irregular water-soaked pale green or brownish-black lesions on leaves and stems',
      'White cottony fungal sporulation visible on the underside of leaves in damp weather',
      'Rapid collapse and dark browning of entire stems and branches in 2–4 days',
      'Firm, dark greasy brown rot developing on green and ripening tomato fruit'
    ],
    possibleCauses: [
      'Cool, foggy, and wet weather (15°C - 22°C) with persistent humidity > 90%',
      'Wind-blown sporangia travelling from infected volunteer potato or tomato plants up to miles away',
      'Infected seed tubers or greenhouse transplants brought into the field'
    ],
    visualCharacteristics: 'Rapidly expanding water-soaked dark gray/brown blotches with white underside mold.',
    treatment: {
      immediateSteps: [
        'Promptly rogue out and destroy severely infected plants; bag them on-site to avoid spore drift.',
        'Do not overhead water; keep foliage completely dry.',
        'Notify neighboring farmers immediately, as late blight spores spread rapidly via wind.',
        'Apply a curative/protective fungicide barrier to non-symptomatic surrounding crops.'
      ],
      agriculturalPractices: [
        'Eliminate all volunteer potato and tomato plants in and around fields before planting.',
        'Ensure wide spacing and high staking for maximum sunlight and rapid wind drying.',
        'Use plastic mulch to avoid soil contact.'
      ],
      preventionMethods: [
        'Plant late blight-resistant hybrid varieties (such as Defiant, Mountain Merit, or Plum Regal).',
        'Monitor regional agricultural blight forecast alerts regularly.',
        'Apply preventative copper or biological protectants before anticipated wet fog spells.'
      ],
      organicRemedies: [
        'Fixed Copper Hydroxide or Copper Sulfate (Bordeaux mixture) applied thoroughly to upper & lower leaf surfaces.',
        'Potassium phosphite foliar sprays for systemic plant defense stimulation.'
      ],
      safeChemicalOptions: [
        'Dimethomorph, Cymoxanil, or Mandipropamid formulated fungicides registered for blight.'
      ],
      dosageSafetyNotes: 'Late blight moves aggressively. Follow spray intervals strictly (every 5–7 days during high blight pressure). Read label instructions.',
      safetyPrecautions: [
        'Use full PPE (chemical-resistant coveralls, gloves, mask).',
        'Follow designated re-entry intervals (REI) and harvest intervals (PHI).',
        'Dispose of chemical containers safely according to environmental guidelines.'
      ],
      recommendedProductTypes: ['Copper Hydroxide Spray', 'Systemic Anti-Blight Fungicide', 'Heavy Duty Knapsack Sprayer', 'Nitrile Gloves']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
        caption: 'Tomato foliage displaying water-soaked dark necrosis from late blight.'
      }
    ]
  },
  {
    id: 'potato-late-blight',
    name: 'Potato Late Blight',
    scientificName: 'Phytophthora infestans',
    cropId: 'potato',
    cropName: 'Potato',
    severity: 'severe',
    symptoms: [
      'Irregular water-soaked dark patches on leaf tips and margins',
      'Foliage turns rapidly dark brown to black and wilts under wet conditions',
      'White mildew growth on leaf undersides in morning humidity',
      'Tubers exhibit shallow reddish-brown granular dry rot under the skin'
    ],
    possibleCauses: [
      'Infected seed potatoes planted without certified disease-free verification',
      'Extended periods of cool rain and high humidity (10°C - 20°C)',
      'Spore wash from foliage down into the soil ridges during heavy rains'
    ],
    visualCharacteristics: 'Dark brown water-soaked blotches on potato leaves with white mold beneath.',
    treatment: {
      immediateSteps: [
        'Halt all overhead sprinkler irrigation immediately.',
        'Hilling up soil deeply around potato ridges to prevent spores washing into tubers.',
        'Cut and destroy infected vines 2 weeks prior to harvest to prevent tuber contamination.'
      ],
      agriculturalPractices: [
        'Plant only government-certified disease-free seed tubers.',
        'Destroy cull piles and self-seeded potato sprouts in field margins.',
        'Allow tubers to cure with dry skin for 10–14 days in well-ventilated storage.'
      ],
      preventionMethods: [
        'Utilize resistant potato varieties where accessible in local markets.',
        'Maintain strict protective fungicide schedules during wet foggy seasons.'
      ],
      organicRemedies: [
        'Liquid Copper soap spray applied at 7-day intervals during high risk weather.',
        'Biological spray with Streptomyces or Bacillus bio-fungicides.'
      ],
      safeChemicalOptions: [
        'Metalaxyl / Mancozeb systemic formulations (as approved by local agriculture departments).'
      ],
      dosageSafetyNotes: 'Always verify registered chemical dosage per hectare with local agricultural supply agents.',
      safetyPrecautions: [
        'Never spray into the wind.',
        'Keep livestock and children out of sprayed fields during re-entry windows.',
        'Store all agricultural chemicals in locked, ventilated storage.'
      ],
      recommendedProductTypes: ['Certified Seed Tubers', 'Copper Hydroxide Powder', 'Ridge Hilling Tools', 'Protective Eyewear']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
        caption: 'Potato leaves showing typical dark water-soaked late blight symptoms.'
      }
    ]
  },
  {
    id: 'corn-common-rust',
    name: 'Corn Common Rust',
    scientificName: 'Puccinia sorghi',
    cropId: 'corn',
    cropName: 'Corn (Maize)',
    severity: 'moderate',
    symptoms: [
      'Small, circular to elongate golden-brown to cinnamon-brown pustules on both leaf surfaces',
      'Pustules rupture epidermal tissue, releasing powdery rust-colored spores upon touch',
      'Heavily infected leaves turn yellow, dry out, and undergo premature death',
      'Reduced photosynthetic leaf area leading to smaller ear fill and poor grain yield'
    ],
    possibleCauses: [
      'Airborne rust urediniospores carried by high-altitude southern wind currents',
      'Moderate temperatures (16°C - 25°C) combined with high relative humidity and 6+ hours of leaf moisture',
      'Late-planted corn fields emerging during peak regional spore flights'
    ],
    visualCharacteristics: 'Elevated reddish-brown powdery blisters scattered across corn leaf blades.',
    treatment: {
      immediateSteps: [
        'Assess the growth stage: if corn is before tasseling (VT stage) and rust covers > 5% leaf area, treatment is critical.',
        'Ensure balanced irrigation; avoid stress from dry spells or nitrogen shortages.',
        'Avoid walking through dense corn rows while wet to prevent manual spore transport.'
      ],
      agriculturalPractices: [
        'Plant early in the season to allow plants to mature past the most vulnerable vegetative stages.',
        'Incorporate deep tillage or crop residue burial in fields with historical rust pressure.',
        'Rotate maize crops with non-grass crops such as soybeans, peanuts, or pulses.'
      ],
      preventionMethods: [
        'Select hybrid corn cultivars with specific genetic resistance (Rp gene resistance).',
        'Apply foliar bio-fungicides proactively when weather forecasts predict extended overcast drizzle.'
      ],
      organicRemedies: [
        'Sulfur-based dust or wettable sulfur foliar applications.',
        'Neem-derived Azadirachtin preventative foliar solutions.'
      ],
      safeChemicalOptions: [
        'Triazole (e.g., Propiconazole) or Strobilurin (e.g., Pyraclostrobin) class fungicides.'
      ],
      dosageSafetyNotes: 'Fungicides are most cost-effective when applied between late vegetative (V12) and early silking (R1). Consult certified crop advisors.',
      safetyPrecautions: [
        'Wear protective gloves and eye shields when handling wettable powders.',
        'Check wind speed (< 10 km/h) before spraying tall maize stands to prevent drift.'
      ],
      recommendedProductTypes: ['Wettable Sulfur', 'Strobilurin Fungicide', 'Motorized Knapsack Sprayer', 'Respirator Mask']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
        caption: 'Maize blade covered in powdery cinnamon-brown common rust pustules.'
      }
    ]
  },
  {
    id: 'rice-blast',
    name: 'Rice Blast',
    scientificName: 'Magnaporthe oryzae',
    cropId: 'rice',
    cropName: 'Rice (Paddy)',
    severity: 'severe',
    symptoms: [
      'Spindle-shaped or diamond-shaped lesions with gray/whitish centers and dark brown margins on leaves',
      'Lesions enlarge and coalesce, causing entire leaf blades to wither and desiccate',
      'Rotary blackened necrosis at the panicle node ("Neck Blast"), causing grains to become chaffy and empty',
      'Severe lodging of brittle paddy stems near the water line'
    ],
    possibleCauses: [
      'Excessive application of chemical nitrogen fertilizer promoting soft, lush vegetative tissue',
      'Extended periods of overcast, drizzly weather (20°C - 28°C) with prolonged dew duration',
      'Low night temperatures and high day humidity in dense lowland paddy fields'
    ],
    visualCharacteristics: 'Spindle-shaped diamond eye spots with ash-gray center on paddy leaves.',
    treatment: {
      immediateSteps: [
        'Immediately stop applying urea and high-nitrogen fertilizers to the affected paddy.',
        'Maintain a continuous shallow water layer (5–7 cm) in the field to buffer temperature shocks.',
        'Apply recommended blast fungicide at first detection before panicle emergence.'
      ],
      agriculturalPractices: [
        'Split nitrogen fertilizer applications into 3–4 smaller doses rather than heavy basal dumping.',
        'Apply silicon-rich amendments (calcium silicate) or rice husk ash to strengthen leaf cuticle silica cells.',
        'Burn or deeply incorporate infected rice stubble following harvest.'
      ],
      preventionMethods: [
        'Perform hot water or bio-agent seed treatment (Trichoderma viride) prior to nursery sowing.',
        'Plant certified blast-resistant rice cultivars appropriate for the agro-ecological zone.'
      ],
      organicRemedies: [
        'Pseudomonas fluorescens bio-formulation foliar spray (0.2% concentration).',
        'Neem cake soil application mixed into paddy soil.'
      ],
      safeChemicalOptions: [
        'Tricyclazole, Isoprothiolane, or Kasugamycin (standard agricultural paddy treatments).'
      ],
      dosageSafetyNotes: 'Follow label rates strictly for paddy water safety. Do not drain chemically treated paddy water into communal fish ponds.',
      safetyPrecautions: [
        'Wear tall rubber boots and waterproof protective clothing while applying in flooded paddies.',
        'Observe minimum 14-day pre-harvest interval.'
      ],
      recommendedProductTypes: ['Tricyclazole 75% WP', 'Pseudomonas Bio-Fungicide', 'Silicon Soil Tonic', 'Paddy Rubber Boots']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80',
        caption: 'Rice paddy leaf showing typical diamond-shaped blast lesions.'
      }
    ]
  },
  {
    id: 'apple-scab',
    name: 'Apple Scab',
    scientificName: 'Venturia inaequalis',
    cropId: 'apple',
    cropName: 'Apple',
    severity: 'moderate',
    symptoms: [
      'Olive-green to velvety dark brown circular spots on emerging leaves in spring',
      'Infected leaves become puckered, distorted, and drop prematurely in mid-summer',
      'Cork-like brown scabby crusts forming on developing apple fruits',
      'Severe fruit cracking and stunted, deformed harvest'
    ],
    possibleCauses: [
      'Overwintered fungal ascospores released from fallen leaves during wet spring rains',
      'Wet foliage sustained for 9–18 hours at temperatures between 15°C - 24°C',
      'Dense unpruned tree canopies preventing sunlight penetration and breeze'
    ],
    visualCharacteristics: 'Velvety olive-brown circular lesions on apple foliage and rough corky fruit scabs.',
    treatment: {
      immediateSteps: [
        'Rake and shred or compost all fallen autumn apple leaves to eliminate primary overwintering inoculum.',
        'Prune central canopy branches during dormant season to open up sunlight corridors.',
        'Apply protective organic or mineral sprays prior to anticipated spring rain events.'
      ],
      agriculturalPractices: [
        'Mow orchard floor regularly and apply 5% urea spray to fallen leaves in autumn to accelerate leaf decay.',
        'Maintain clean under-canopy ground free from overgrown weeds.'
      ],
      preventionMethods: [
        'Plant scab-resistant apple cultivars (such as Liberty, Enterprise, Freedom, or GoldRush).',
        'Install orchard weather stations or follow local degree-day scab infection models.'
      ],
      organicRemedies: [
        'Liquid lime sulfur applied during dormant to green tip stages.',
        'Micronized wettable sulfur or Potassium bicarbonate sprays during active foliar growth.'
      ],
      safeChemicalOptions: [
        'Captan, Mancozeb, or Difenoconazole protective orchard sprays.'
      ],
      dosageSafetyNotes: 'Do not spray sulfur within 14 days of oil sprays to prevent severe foliar phytotoxicity.',
      safetyPrecautions: [
        'Use dedicated orchard spray PPE including face shield and rubber gloves.',
        'Calibrate orchard mist blowers to avoid excessive drift into adjacent zones.'
      ],
      recommendedProductTypes: ['Lime Sulfur Solution', 'Captan Orchard Protectant', 'Telescopic Pruning Shears', 'Orchard Safety Goggles']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
        caption: 'Apple leaf with olive-velvety scab lesions.'
      }
    ]
  },
  {
    id: 'pepper-bacterial-spot',
    name: 'Pepper Bacterial Spot',
    scientificName: 'Xanthomonas campestris pv. vesicatoria',
    cropId: 'pepper',
    cropName: 'Bell Pepper / Chili',
    severity: 'moderate',
    symptoms: [
      'Small, water-soaked dark spots appearing on leaves, turning dark brown with yellow halos',
      'Spots may appear slightly raised or blister-like on the underside of pepper leaves',
      'Premature defoliation leaving stems bare and exposing pepper pods to sunscald',
      'Rough, raised wart-like brown scabs developing on green and red pepper fruit skin'
    ],
    possibleCauses: [
      'Bacterial pathogen spreading via splashing rain, overhead sprinkler water, or handling wet plants',
      'Warm temperatures (24°C - 30°C) accompanied by frequent heavy rains and high humidity',
      'Contaminated seed lots or infected commercial transplants'
    ],
    visualCharacteristics: 'Water-soaked brownish speckles surrounded by yellow haloes on pepper leaves.',
    treatment: {
      immediateSteps: [
        'Never cultivate or touch pepper plants while foliage is wet.',
        'Remove severely blighted individual plants in early localized stages.',
        'Switch to drip irrigation directly at the soil line to eliminate leaf splash.'
      ],
      agriculturalPractices: [
        'Enforce 2-year non-solanaceous crop rotation.',
        'Incorporate bio-fumigant cover crops (mustard/brassica) prior to bed preparation.'
      ],
      preventionMethods: [
        'Soak pepper seeds in 50°C hot water for 25 minutes prior to germination to eliminate seed-borne bacteria.',
        'Select bacterial spot-resistant bell pepper hybrids (races 1–5 resistance).'
      ],
      organicRemedies: [
        'Fixed Copper Hydroxide mixed with Mancozeb (standard synergized preventative wash).',
        'Bacillus amyloliquefaciens or bacteriophage bio-control solutions.'
      ],
      safeChemicalOptions: [
        'Agricultural Copper Bactericides with registered adjuvant stickers.'
      ],
      dosageSafetyNotes: 'Repeated copper usage can lead to resistance; alternate with bio-controls.',
      safetyPrecautions: [
        'Wash tools and hands with soap and water after field work.',
        'Wear chemical apron and goggles during tank mixing.'
      ],
      recommendedProductTypes: ['Copper Bactericide', 'Hot Water Seed Treatment Thermometer', 'Drip Tape Tubing', 'Nitrile Gloves']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
        caption: 'Bell pepper leaf with necrotic bacterial leaf spot lesions.'
      }
    ]
  },
  {
    id: 'cotton-leaf-curl',
    name: 'Cotton Leaf Curl Virus',
    scientificName: 'Cotton leaf curl virus (CLCuV)',
    cropId: 'cotton',
    cropName: 'Cotton',
    severity: 'severe',
    symptoms: [
      'Upward or downward curling and thickening of leaf margins',
      'Vein swelling and dark green thickening along secondary foliar veins ("vein enation")',
      'Formation of small cup-like enations or miniature leaves on the undersides of main leaves',
      'Severe plant stunting, flower drop, and drastic reduction in cotton boll size and fiber yield'
    ],
    possibleCauses: [
      'Transmission by the Silverleaf Whitefly (Bemisia tabaci) vector feeding on phloem sap',
      'Presence of weed hosts (such as Parthenium, Abutilon, and Datura) harboring virus reservoirs',
      'Susceptible non-resistant cotton varieties grown in high-density cotton belts'
    ],
    visualCharacteristics: 'Intense upward curling of leaves with thickened, dark green veins and enations.',
    treatment: {
      immediateSteps: [
        'Rogue out early infected cotton seedlings showing leaf curl before whitefly populations surge.',
        'Eradicate host weeds (Parthenium, wild mallow) within and around field borders.',
        'Install yellow sticky traps (25–30 traps/hectare) to monitor and catch whitefly vectors.'
      ],
      agriculturalPractices: [
        'Plant border barrier crops (such as sorghum, maize, or pearl millet) to intercept flying whiteflies.',
        'Avoid excessive early-season synthetic pyrethroid sprays that eliminate natural whitefly predators (ladybugs, lacewings).',
        'Ensure balanced nutrition with adequate potassium and micronutrients (zinc, boron).'
      ],
      preventionMethods: [
        'Sow only CLCuV-resistant Bt/hybrid cotton seed certified by regional agricultural universities.',
        'Maintain a clean fallow period between cotton cropping cycles.'
      ],
      organicRemedies: [
        'Neem oil 1500 ppm or fish oil rosin soap foliar spray for natural whitefly suppression.',
        'Verticillium lecanii or Beauveria bassiana entomopathogenic fungal bio-pesticides.'
      ],
      safeChemicalOptions: [
        'Spirotetramat, Pyriproxyfen, or Diafenthiuron (selective insect growth regulators for whitefly).'
      ],
      dosageSafetyNotes: 'Target vector whiteflies on the underside of leaves during early morning. Rotate chemical modes of action to prevent insecticide resistance.',
      safetyPrecautions: [
        'Always wear respirator, eye protection, and rubber gloves during pesticide handling.',
        'Adhere to bee safety guidelines; never spray open cotton blooms during active pollinator hours.'
      ],
      recommendedProductTypes: ['Yellow Sticky Traps', 'Cold-Pressed Neem Oil 1500ppm', 'Whitefly Bio-Pesticide', 'PPE Chemical Suit']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
        caption: 'Cotton plant showing upward foliar curling and thickened leaf veins.'
      }
    ]
  },
  {
    id: 'crop-healthy',
    name: 'Healthy Crop Foliage',
    scientificName: 'No Pathogen Detected',
    cropId: 'all',
    cropName: 'General Crop',
    isHealthy: true,
    severity: 'mild',
    symptoms: [
      'Vibrant, uniform green leaf pigmentation without chlorosis or yellowing',
      'Crisp leaf margins free from necrosis, ragged holes, or lesions',
      'Strong, upright stem architecture with normal turgidity',
      'No fungal sporulation, powdery residue, or bacterial water-soaking present'
    ],
    possibleCauses: [
      'Optimal agronomic management, balanced soil nutrition, and clean irrigation water',
      'Effective disease prevention, timely pruning, and good field hygiene'
    ],
    visualCharacteristics: 'Uniform green, healthy cuticle surface with no disease lesions.',
    treatment: {
      immediateSteps: [
        'Continue regular monitoring and good agronomic stewardship.',
        'Maintain balanced watering schedule suited to current weather conditions.',
        'Ensure soil organic matter remains nourished with quality compost.'
      ],
      agriculturalPractices: [
        'Keep records of healthy crop cycles for seasonal planning.',
        'Scout fields weekly, inspecting lower leaf undersides and new flush growth.',
        'Support beneficial insects by maintaining flowering boundary strips.'
      ],
      preventionMethods: [
        'Preventative probiotic soil inoculation with mycorrhizae and Trichoderma.',
        'Regular soil testing once per year before sowing.'
      ],
      organicRemedies: [
        'Compost tea or seaweed extract foliar tonic for immune vigor.',
        'Bio-fertilizer inoculants (Azotobacter, Phosphate Solubilizing Bacteria).'
      ],
      safeChemicalOptions: [
        'No chemical application required. Preserve beneficial field ecology.'
      ],
      dosageSafetyNotes: 'Avoid unnecessary prophylactic chemical sprays which may kill beneficial predators and waste farmer capital.',
      safetyPrecautions: [
        'Store all farm tools clean and dry.',
        'Practice sustainable farming.'
      ],
      recommendedProductTypes: ['Organic Seaweed Foliar Tonic', 'Soil Testing Kit', 'Drip Irrigation Maintenance Kit', 'Compost Booster']
    },
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
        caption: 'Healthy vibrant green foliage free of disease spots.'
      }
    ]
  }
];

export const SAMPLE_SCAN_IMAGES = [
  {
    id: 'sample-tomato-eb',
    title: 'Tomato — Early Blight',
    crop: 'Tomato',
    diseaseName: 'Tomato Early Blight',
    diseaseId: 'tomato-early-blight',
    imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    description: 'Target-like brown spots with yellow chlorotic halos on tomato leaf.'
  },
  {
    id: 'sample-potato-lb',
    title: 'Potato — Late Blight',
    crop: 'Potato',
    diseaseName: 'Potato Late Blight',
    diseaseId: 'potato-late-blight',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    description: 'Dark water-soaked necrotic leaf margin blotches.'
  },
  {
    id: 'sample-corn-rust',
    title: 'Corn — Common Rust',
    crop: 'Corn',
    diseaseName: 'Corn Common Rust',
    diseaseId: 'corn-common-rust',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    description: 'Powdery cinnamon-brown pustules on maize blade.'
  },
  {
    id: 'sample-rice-blast',
    title: 'Rice — Rice Blast',
    crop: 'Rice',
    diseaseName: 'Rice Blast',
    diseaseId: 'rice-blast',
    imageUrl: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80',
    description: 'Spindle-shaped diamond spots with ash gray center.'
  },
  {
    id: 'sample-healthy-leaf',
    title: 'Healthy Leaf Sample',
    crop: 'General Crop',
    diseaseName: 'Healthy Crop Foliage',
    diseaseId: 'crop-healthy',
    imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant green leaf free of disease symptoms.'
  }
];
