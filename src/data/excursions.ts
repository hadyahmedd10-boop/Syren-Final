import { Excursion } from "@/types/excursion"; 
import { EXCURSION_IMAGES } from "@/lib/images";


export const excursions: Excursion[] = [ 
  // Hurghada 
  { 
    slug: "hurghada-luxor-day-trip", 
    destinationSlug: "hurghada", 
    title: "Luxor Day Trip", 
    duration: "Full Day", 
    tourStyle: "Private Guided Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Karnak, Valley of the Kings, and Hatshepsut — a legendary day in Luxor with private guidance.", 
    heroImage: EXCURSION_IMAGES["hurghada-luxor-day-trip"], 
    image: EXCURSION_IMAGES["hurghada-luxor-day-trip"],
    imageAlt: "Ancient Egyptian temple architecture in Luxor",
    priceCents: 45000, // $450.00
    highlights: [ 
      "Karnak Temple Complex", 
      "Colossi of Memnon", 
      "Valley of the Kings (3 tombs included)", 
      "Temple of Queen Hatshepsut", 
      "Bazaar / café time in Luxor", 
    ], 
    included: [ 
      "Private A/C vehicle transfers", 
      "Expert English-speaking guide", 
      "Entrance fees to mentioned sights", 
      "Lunch at quality restaurant", 
      "Bottled water onboard", 
      "All service charges and taxes", 
    ], 
    notIncluded: [ 
      "Special tomb tickets (e.g., Tutankhamun)", 
      "Personal expenses", 
      "Tipping", 
    ], 
    itinerary: [ 
      { 
        time: "05:30", 
        title: "Hotel Pickup (Hurghada)", 
        description: 
          "Early departure in a modern A/C vehicle with bottled water.", 
      }, 
      { 
        title: "Karnak Temple", 
        description: 
          "Explore the vast temple complex and the iconic Hypostyle Hall.", 
      }, 
      { 
        title: "Lunch", 
        description: "Lunch at a quality local restaurant (included).", 
      }, 
      { 
        title: "West Bank", 
        description: 
          "Colossi of Memnon → Valley of the Kings → Temple of Hatshepsut.", 
      }, 
      { 
        title: "Luxor Bazaar Time", 
        description: 
          "Shopping or café stop before returning to Hurghada.", 
      }, 
      { 
        title: "Return to Hurghada", 
        description: "Relax on the drive back and transfer to your hotel.", 
      }, 
    ], 
  }, 

  { 
    slug: "hurghada-cairo-day-trip", 
    destinationSlug: "hurghada", 
    title: "Cairo Day Trip by Car", 
    duration: "Full Day", 
    tourStyle: "Private Guided Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Pyramids, Egyptian Museum, Old Cairo, and Khan el Khalili — Cairo’s icons in one powerful day.", 
    heroImage: EXCURSION_IMAGES["hurghada-cairo-day-trip"], 
    image: EXCURSION_IMAGES["hurghada-cairo-day-trip"],
    imageAlt: "The Great Pyramids of Giza at sunset",
    priceCents: 60000, // $600.00
    highlights: [ 
      "Giza Pyramids & Sphinx", 
      "Egyptian Museum (Treasures Room)", 
      "Coptic Cairo (Hanging Church & Ben Ezra)", 
      "Khan el Khalili Bazaar", 
    ], 
    included: [ 
      "Private A/C vehicle transfers", 
      "Private English expert guide", 
      "Entrance fees to mentioned sights", 
      "Lunch meal at local restaurant", 
      "Bottled water onboard", 
      "All service charges and taxes", 
    ], 
    notIncluded: ["Mummies Room ticket (optional)", "Personal expenses", "Tipping"], 
    itinerary: [ 
      { 
        time: "02:00", 
        title: "Hotel Pickup (Hurghada)", 
        description: "Overnight departure for Cairo in comfort.", 
      }, 
      { 
        title: "Giza Plateau", 
        description: "Visit the pyramids, Sphinx, and Valley Temple.", 
      }, 
      { 
        title: "Lunch", 
        description: "Local lunch in Cairo (included).", 
      }, 
      { 
        title: "Egyptian Museum", 
        description: 
          "Explore the world’s most valuable collection of Ancient Egyptian relics.", 
      }, 
      { 
        title: "Coptic Cairo", 
        description: "Historic churches and Ben Ezra Synagogue.", 
      }, 
      { 
        title: "Khan el Khalili", 
        description: "End the day in Cairo’s famous bazaar.", 
      }, 
      { 
        title: "Return to Hurghada", 
        description: "Drive back and hotel drop-off.", 
      }, 
    ], 
  }, 

  { 
    slug: "hurghada-jeep-safari", 
    destinationSlug: "hurghada", 
    title: "7-Hour Jeep Safari", 
    duration: "7 Hours", 
    tourStyle: "Small Group Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Desert mountains, mirage stop, camel ride, quad bike, BBQ dinner, and an oriental show.", 
    heroImage: EXCURSION_IMAGES["hurghada-jeep-safari"], 
    image: EXCURSION_IMAGES["hurghada-jeep-safari"],
    imageAlt: "A group of travelers enjoying a desert safari in Hurghada",
    priceCents: 15000, // $150.00
    highlights: [ 
      "4×4 desert drive (Sinai desert mountains)", 
      "Mirage stop & panoramic views", 
      "Camel ride and Bedouin village visit", 
      "Quad bike desert ride", 
      "BBQ dinner + oriental show", 
    ], 
    included: [ 
      "Hotel pickup & return", 
      "Desert safari tour guide", 
      "Jeep 4×4 transfers", 
      "Camel ride + quad bike", 
      "BBQ dinner + soft drinks", 
      "All taxes & service charge", 
    ], 
    notIncluded: ["Personal spending money", "Optional extras", "Tipping"], 
    itinerary: [ 
      { 
        title: "Pickup & Desert Drive", 
        description: "4×4 jeep ride into the desert with photo stops.", 
      }, 
      { 
        title: "Mirage & Bedouin Village", 
        description: "Mirage viewing, cultural stop, tea and village tour.", 
      }, 
      { 
        title: "Camel Ride", 
        description: "Short desert camel ride experience.", 
      }, 
      { 
        title: "Quad Bike Ride", 
        description: "Ride through the desert near the village.", 
      }, 
      { 
        title: "Sunset + Dinner + Show", 
        description: "BBQ dinner with entertainment under the stars.", 
      }, 
      { 
        title: "Return to Hurghada", 
        description: "Drive back and hotel drop-off.", 
      }, 
    ], 
  },

  {
    slug: "mahmya-island-snorkeling",
    destinationSlug: "hurghada",
    title: "Mahmya Island Snorkeling",
    duration: "Full Day",
    tourStyle: "Small Group Tour",
    availability: "Daily Departures",
    shortDescription:
      "A day of pure relaxation and world-class snorkeling on the white sands of Mahmya Island.",
    heroImage: EXCURSION_IMAGES["mahmya-island-snorkeling"], 
    image: EXCURSION_IMAGES["mahmya-island-snorkeling"],
    imageAlt: "Crystal clear waters of Mahmya Island",
    priceCents: 9500, // $95.00
    highlights: [
      "Boat trip to Giftun Island National Park",
      "Snorkeling in protected coral reefs",
      "White sandy beach relaxation",
      "Buffet lunch at Mahmya restaurant",
    ],
    included: [
      "Hotel pickup & return",
      "Boat transfers",
      "Snorkeling equipment",
      "Buffet lunch",
      "National Park fees",
    ],
    notIncluded: ["Personal expenses", "Drinks at the bar", "Tipping"],
    itinerary: [
      {
        title: "Departure",
        description: "Morning pickup from your hotel and transfer to the marina.",
      },
      {
        title: "Boat Journey",
        description: "Scenic boat ride across the Red Sea to Mahmya Island.",
      },
      {
        title: "Island Time & Snorkeling",
        description: "Relax on the beach and explore the vibrant coral reefs.",
      },
      {
        title: "Lunch",
        description: "Enjoy a delicious buffet lunch on the island.",
      },
      {
        title: "Return",
        description: "Cruise back to the marina and transfer to your hotel.",
      },
    ],
  },

  {
    slug: "giftun-island-snorkeling",
    destinationSlug: "hurghada",
    title: "Giftun Island Snorkeling",
    duration: "Full Day",
    tourStyle: "Small Group Tour",
    availability: "Daily Departures",
    shortDescription:
      "Explore the underwater wonders of Giftun Island, a marine protectorate teeming with life.",
    heroImage: EXCURSION_IMAGES["giftun-island-snorkeling"], 
    image: EXCURSION_IMAGES["giftun-island-snorkeling"],
    imageAlt: "Colorful fish swimming in Giftun Island reefs",
    priceCents: 6500, // $65.00
    highlights: [
      "Multiple snorkeling stops in the Red Sea",
      "Visit to Giftun Island beach",
      "Chances to see dolphins in the wild",
      "Freshly prepared lunch on board",
    ],
    included: [
      "All transfers",
      "Snorkeling gear",
      "Lunch and soft drinks",
      "Professional snorkeling guide",
    ],
    notIncluded: ["Personal expenses", "Tipping"],
    itinerary: [
      {
        title: "Marina Departure",
        description: "Board the boat and set sail for the marine park.",
      },
      {
        title: "First Snorkeling Stop",
        description: "Discover the diversity of Red Sea coral life.",
      },
      {
        title: "Island Visit",
        description: "Time to relax on the sandy shores of Giftun Island.",
      },
      {
        title: "Second Snorkeling Stop",
        description: "Another chance to explore a different reef system.",
      },
      {
        title: "Sunset Return",
        description: "Return to the marina as the sun sets over the water.",
      },
    ],
  },

  {
    slug: "paradise-island-snorkeling",
    destinationSlug: "hurghada",
    title: "Paradise Island Snorkeling",
    duration: "Full Day",
    tourStyle: "Small Group Tour",
    availability: "Daily Departures",
    shortDescription:
      "Experience the Caribbean of the Red Sea at Paradise Island, with turquoise waters and vibrant reefs.",
    heroImage: EXCURSION_IMAGES["paradise-island-snorkeling"], 
    image: EXCURSION_IMAGES["paradise-island-snorkeling"],
    imageAlt: "The turquoise lagoon of Paradise Island",
    priceCents: 7500, // $75.00
    highlights: [
      "Luxury boat transfer to Paradise Island",
      "Vibrant coral reef exploration",
      "Caribbean-style beach experience",
      "Island lunch with panoramic views",
    ],
    included: [
      "Hotel transfers",
      "Snorkeling equipment",
      "Island entrance fees",
      "Lunch and beverages",
    ],
    notIncluded: ["Personal expenses", "Tipping"],
    itinerary: [
      {
        title: "Hotel Pickup",
        description: "Morning transfer to the boat pier.",
      },
      {
        title: "Sailing to Paradise",
        description: "Relax on deck as we cruise to the island.",
      },
      {
        title: "Reef Exploration",
        description: "Guided snorkeling at two prime locations.",
      },
      {
        title: "Island Lunch",
        description: "Enjoy a meal on the island's shores.",
      },
      {
        title: "Beach Relaxation",
        description: "Free time for swimming and sunbathing.",
      },
    ],
  },

  {
    slug: "hurghada-quad-bike",
    destinationSlug: "hurghada",
    title: "Hurghada Quad Bike Adventure",
    duration: "3 Hours",
    tourStyle: "Adventure Tour",
    availability: "Twice Daily",
    shortDescription:
      "Feel the thrill of racing through the Egyptian desert on a powerful quad bike at sunrise or sunset.",
    heroImage: EXCURSION_IMAGES["hurghada-quad-bike"], 
    image: EXCURSION_IMAGES["hurghada-quad-bike"],
    imageAlt: "Quad bikers racing through the desert dunes",
    priceCents: 5500, // $55.00
    highlights: [
      "Adrenaline-fueled desert ride",
      "Traditional Bedouin tea stop",
      "Stunning desert landscape views",
      "Expert safety briefing and guide",
    ],
    included: [
      "Hotel pickup & return",
      "Quad bike rental",
      "Safety helmet",
      "Bedouin tea",
    ],
    notIncluded: ["Scarf and goggles (available for rent)", "Tipping"],
    itinerary: [
      {
        title: "Safety Briefing",
        description: "Learn to handle the quad bike with a professional instructor.",
      },
      {
        title: "Desert Ride",
        description: "An hour of exciting riding across the desert plains.",
      },
      {
        title: "Bedouin Stop",
        description: "Rest and enjoy traditional tea in a desert camp.",
      },
      {
        title: "Return Ride",
        description: "Ride back to the base as the light changes over the dunes.",
      },
    ],
  },

  // Cairo Tours (Moved from Experiences)
  {
    slug: "cairo-in-a-day-from-hurghada",
    destinationSlug: "hurghada",
    title: "Cairo in a Day — Private Air Journey from Hurghada",
    duration: "1 Day",
    tourStyle: "Private | By Plane",
    availability: "Daily Departures",
    shortDescription: "This curated day journey connects Hurghada and Cairo by air, allowing you to experience Egypt’s most iconic landmarks without compromise. With private transfers, an expert Egyptologist, and carefully paced visits, the day unfolds smoothly — focused on meaning, not movement.",
    heroImage: "/images/excursions/cairo-in-a-day-from-hurghada/cover.jpg",
    image: "/images/excursions/cairo-in-a-day-from-hurghada/cover.jpg",
    imageAlt: "Private air journey to Cairo from Hurghada",
    priceCents: 35000,
    highlights: [
      "The Giza Plateau: the Great Pyramids, Sphinx, and Valley Temple",
      "Refined local lunch in Cairo",
      "The Grand Egyptian Museum (selected galleries & highlights)",
      "Old Cairo: Hanging Church & Ben Ezra Synagogue",
      "Islamic Cairo & a guided walk through Khan El Khalili’s most authentic lanes"
    ],
    included: [
      "Private transfers",
      "Expert Egyptologist",
      "Domestic flights",
      "Lunch",
      "Entrance fees"
    ],
    notIncluded: [],
    category: "Day Tours",
    type: "excursion",
    featured: false,
    itinerary: [
      {
        title: "The Cairo Day Journey",
        description: "Early transfer from your Hurghada hotel to the airport for a short domestic flight to Cairo. Upon arrival, enjoy a private welcome by your Egyptologist and driver. Visit the Giza Plateau, enjoy a refined local lunch, and explore selected galleries of the Grand Egyptian Museum. Continue to Old Cairo to see the Hanging Church and Ben Ezra Synagogue, followed by a guided walk through Khan El Khalili. Return to Cairo Airport for your evening flight back to Hurghada — supported every step of the way."
      }
    ]
  },
  {
    slug: "nile-maxim-dinner-cruise",
    destinationSlug: "cairo",
    title: "Nile Maxim — Evening Dinner Cruise in Cairo",
    duration: "Evening",
    tourStyle: "Private Transfer | Shared Cruise",
    availability: "Daily Departures",
    shortDescription: "Step aboard the Nile Maxim for a refined dinner cruise designed for relaxed evenings rather than spectacle. Enjoy a carefully prepared menu paired with live Egyptian music, a traditional belly dance performance, and a folkloric show — all set against the glow of Cairo after dark.",
    heroImage: "/images/excursions/nile-maxim-dinner-cruise/cover.jpg",
    image: "/images/excursions/nile-maxim-dinner-cruise/cover.jpg",
    imageAlt: "Nile Maxim dinner cruise in Cairo",
    priceCents: 12000,
    highlights: [
      "Open dinner service with Egyptian & international options",
      "Live Egyptian music and soft Oriental melodies",
      "Traditional belly dance and folkloric show",
      "Views of Cairo’s illuminated skyline"
    ],
    included: [
      "Hotel pickup and private transfer",
      "Dinner cruise ticket",
      "Open buffet dinner",
      "Live entertainment"
    ],
    notIncluded: [],
    category: "Evening Experiences",
    type: "excursion",
    featured: false,
    itinerary: [
      {
        title: "Evening on the Nile",
        description: "Hotel pickup and private transfer to board the Nile Maxim. Enjoy an open dinner service with Egyptian & international options, accompanied by live performances and soft Oriental music. Return transfer to your hotel."
      }
    ]
  },
  {
    slug: "cairo-beyond-the-pyramids",
    destinationSlug: "cairo",
    title: "Cairo Beyond the Pyramids — Culture, Faith & Living History",
    duration: "1 Day",
    tourStyle: "Private Guided City Tour",
    availability: "Daily Departures",
    shortDescription: "Designed for travelers who have already seen the pyramids, this full-day city journey explores Cairo’s cultural, religious, and architectural heritage with balance and clarity.",
    heroImage: "/images/excursions/cairo-beyond-the-pyramids/cover.jpg",
    image: "/images/excursions/cairo-beyond-the-pyramids/cover.jpg",
    imageAlt: "Cultural tour of Cairo beyond the pyramids",
    priceCents: 0,
    highlights: [
      "Grand Egyptian Museum (curated highlights)",
      "Cairo Citadel & Mohamed Ali Mosque",
      "Lunch at a quality local restaurant",
      "Khan El Khalili Bazaar (guided walk)",
      "Coptic Cairo: Hanging Church, Ben Ezra Synagogue, Abu Serga"
    ],
    included: [
      "Private transfers",
      "Expert Egyptologist guide",
      "Lunch",
      "Entrance fees"
    ],
    notIncluded: [],
    category: "Cultural Tours",
    type: "excursion",
    itinerary: [
      {
        title: "Culture, Faith & History",
        description: "Begin with curated highlights of the Grand Egyptian Museum, followed by a visit to the Cairo Citadel & Mohamed Ali Mosque. Enjoy lunch at a quality local restaurant before a guided walk through Khan El Khalili Bazaar. Conclude with Coptic Cairo, visiting the Hanging Church, Ben Ezra Synagogue, and Abu Serga."
      }
    ]
  },
  {
    slug: "tanoura-night-old-cairo",
    destinationSlug: "cairo",
    title: "Tanoura Night — Whirling Dervishes of Old Cairo",
    duration: "Evening",
    tourStyle: "Cultural Night Experience",
    availability: "Selected Evenings",
    shortDescription: "Held at the 16th-century Wekalet El Ghoury, this traditional Tanoura performance blends live folkloric music with the hypnotic whirling dance rooted in Sufi tradition.",
    heroImage: "/images/excursions/tanoura-night-old-cairo/cover.jpg",
    image: "/images/excursions/tanoura-night-old-cairo/cover.jpg",
    imageAlt: "Whirling dervishes performing Tanoura dance",
    priceCents: 0,
    highlights: [
      "Historic venue: Wekalet El Ghoury (16th century)",
      "Traditional Tanoura whirling dervish performance",
      "Live folkloric music"
    ],
    included: [
      "Evening hotel pickup and return transfer",
      "Performance tickets",
      "Private vehicle"
    ],
    notIncluded: [],
    category: "Evening Experiences",
    type: "excursion",
    featured: false,
    itinerary: [
      {
        title: "The Whirling Dervishes",
        description: "Evening hotel pickup and transfer to Wekalet El Ghoury. Witness the mesmerizing live music and Tanoura performance. Return transfer to your hotel."
      }
    ]
  },
  {
    slug: "cairo-private-photo-session",
    destinationSlug: "cairo",
    title: "Cairo Through the Lens — Private Photography Experience",
    duration: "Half Day",
    tourStyle: "Private Creative Experience",
    availability: "Upon Request",
    shortDescription: "This experience is designed for travelers who want meaningful memories — not rushed snapshots. With up to three iconic locations, your photographer guides you through natural compositions and light-driven moments.",
    heroImage: "/images/excursions/cairo-private-photo-session/cover.jpg",
    image: "/images/excursions/cairo-private-photo-session/cover.jpg",
    imageAlt: "Private photography session in Cairo",
    priceCents: 25000,
    highlights: [
      "Private professional photographer guide",
      "20 professionally edited images included",
      "Full digital gallery access",
      "Flexible start time",
      "Locations: Giza Plateau, Sphinx area, Khan El Khalili"
    ],
    included: [
      "Private photographer",
      "20 professionally edited images",
      "Full digital gallery"
    ],
    notIncluded: [
      "Entrance fees to locations",
      "Transportation (unless arranged)"
    ],
    category: "Creative Experiences",
    type: "excursion",
    featured: false,
    itinerary: [
      {
        title: "Cairo Through the Lens",
        description: "Meet your private photographer for a half-day session. Visit up to three iconic locations such as the Giza Plateau, Sphinx area, or Khan El Khalili. Your photographer will guide you through natural compositions and light-driven moments."
      }
    ]
  }
]; 
