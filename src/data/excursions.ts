import { Excursion } from "@/types/excursion"; 
import { EXCURSION_IMAGES, EXCURSION_COVERS, DESTINATION_IMAGES } from "@/lib/images";


export const excursions: Excursion[] = [ 
  // Hurghada 
  { 
    slug: "hurghada-luxor-day-trip", 
    destinationSlug: "hurghada", 
    city: "Luxor",
    title: "Luxor Day Trip", 
    duration: "Full Day", 
    tourStyle: "Private Guided Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Karnak, Valley of the Kings, and Hatshepsut — a legendary day in Luxor with private guidance.", 
    heroImage: EXCURSION_COVERS["hurghada-luxor-day-trip"], 
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
    itinerarySteps: [
      {
        id: "pickup",
        title: "Hotel Pickup (Hurghada)",
        tag: "Transfer",
        description: "Early departure (around 05:30) in a modern A/C vehicle with bottled water."
      },
      {
        id: "karnak",
        title: "Karnak Temple",
        tag: "Culture",
        description: "Explore the vast temple complex and the iconic Hypostyle Hall."
      },
      {
        id: "lunch",
        title: "Lunch",
        tag: "Lunch Included",
        description: "Lunch at a quality local restaurant."
      },
      {
        id: "west-bank",
        title: "West Bank",
        tag: "History",
        description: "Visit the Colossi of Memnon, Valley of the Kings, and Temple of Hatshepsut."
      },
      {
        id: "bazaar",
        title: "Luxor Bazaar Time",
        tag: "Shopping",
        description: "Shopping or café stop before returning to Hurghada."
      },
      {
        id: "return",
        title: "Return to Hurghada",
        tag: "Transfer",
        description: "Relax on the drive back and transfer to your hotel."
      }
    ],
  }, 

  { 
    slug: "hurghada-cairo-day-trip", 
    destinationSlug: "hurghada", 
    city: "Cairo",
    title: "Cairo Day Trip by Car", 
    duration: "Full Day", 
    tourStyle: "Private Guided Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Pyramids, Egyptian Museum, Old Cairo, and Khan el Khalili — Cairo’s icons in one powerful day.", 
    heroImage: EXCURSION_COVERS["hurghada-cairo-day-trip"], 
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
    itinerarySteps: [
      {
        id: "pickup",
        title: "Hotel Pickup (Hurghada)",
        tag: "Transfer",
        description: "Overnight departure (around 02:00) for Cairo in comfort."
      },
      {
        id: "giza",
        title: "Giza Plateau",
        tag: "History",
        description: "Visit the pyramids, Sphinx, and Valley Temple."
      },
      {
        id: "lunch",
        title: "Lunch",
        tag: "Lunch Included",
        description: "Local lunch in Cairo."
      },
      {
        id: "museum",
        title: "Egyptian Museum",
        tag: "Culture",
        description: "Explore the world’s most valuable collection of Ancient Egyptian relics."
      },
      {
        id: "coptic",
        title: "Coptic Cairo",
        tag: "History",
        description: "Historic churches and Ben Ezra Synagogue."
      },
      {
        id: "khan",
        title: "Khan el Khalili",
        tag: "Shopping",
        description: "End the day in Cairo’s famous bazaar."
      },
      {
        id: "return",
        title: "Return to Hurghada",
        tag: "Transfer",
        description: "Drive back and hotel drop-off."
      }
    ],
  }, 

  { 
    slug: "hurghada-jeep-safari", 
    destinationSlug: "hurghada", 
    city: "Hurghada",
    title: "7-Hour Jeep Safari", 
    duration: "7 Hours", 
    tourStyle: "Small Group Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Desert mountains, mirage stop, camel ride, quad bike, BBQ dinner, and an oriental show.", 
    heroImage: EXCURSION_COVERS["hurghada-jeep-safari"], 
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
    itinerarySteps: [
      {
        id: "pickup",
        title: "Pickup & Desert Drive",
        tag: "Transfer",
        description: "4×4 jeep ride into the desert with photo stops."
      },
      {
        id: "mirage",
        title: "Mirage & Bedouin Village",
        tag: "Experience",
        description: "Mirage viewing, cultural stop, tea and village tour."
      },
      {
        id: "camel",
        title: "Camel Ride",
        tag: "Activity",
        description: "Short desert camel ride experience."
      },
      {
        id: "quad",
        title: "Quad Bike Ride",
        tag: "Adventure",
        description: "Ride through the desert near the village."
      },
      {
        id: "dinner",
        title: "Sunset + Dinner + Show",
        tag: "Dinner & Show",
        description: "BBQ dinner with entertainment under the stars."
      },
      {
        id: "return",
        title: "Return to Hurghada",
        tag: "Transfer",
        description: "Drive back and hotel drop-off."
      }
    ],
  },

  {
    slug: "mahmya-island-snorkeling",
    destinationSlug: "hurghada",
    city: "Hurghada",
    title: "Mahmya Island Snorkeling",
    duration: "Full Day",
    tourStyle: "Small Group Tour",
    availability: "Daily Departures",
    shortDescription:
      "A day of pure relaxation and world-class snorkeling on the white sands of Mahmya Island.",
    heroImage: EXCURSION_COVERS["mahmya-island-snorkeling"], 
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
    itinerarySteps: [
      {
        id: "departure",
        title: "Departure",
        tag: "Transfer",
        description: "Morning pickup from your hotel and transfer to the marina."
      },
      {
        id: "boat-journey",
        title: "Boat Journey",
        tag: "Boat",
        description: "Scenic boat ride across the Red Sea to Mahmya Island."
      },
      {
        id: "snorkeling",
        title: "Island Time & Snorkeling",
        tag: "Snorkeling",
        description: "Relax on the beach and explore the vibrant coral reefs."
      },
      {
        id: "lunch",
        title: "Lunch",
        tag: "Lunch Included",
        description: "Enjoy a delicious buffet lunch on the island."
      },
      {
        id: "return",
        title: "Return",
        tag: "Transfer",
        description: "Cruise back to the marina and transfer to your hotel."
      }
    ],
  },

  {
    slug: "giftun-island-snorkeling",
    destinationSlug: "hurghada",
    city: "Hurghada",
    title: "Giftun Island Snorkeling",
    duration: "Full Day",
    tourStyle: "Small Group Tour",
    availability: "Daily Departures",
    shortDescription:
      "Explore the underwater wonders of Giftun Island, a marine protectorate teeming with life.",
    heroImage: EXCURSION_COVERS["giftun-island-snorkeling"], 
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
    itinerarySteps: [
      {
        id: "departure",
        title: "Marina Departure",
        tag: "Boat",
        description: "Board the boat and set sail for the marine park."
      },
      {
        id: "stop-1",
        title: "First Snorkeling Stop",
        tag: "Snorkeling",
        description: "Discover the diversity of Red Sea coral life."
      },
      {
        id: "island",
        title: "Island Visit",
        tag: "Relaxation",
        description: "Time to relax on the sandy shores of Giftun Island."
      },
      {
        id: "stop-2",
        title: "Second Snorkeling Stop",
        tag: "Snorkeling",
        description: "Another chance to explore a different reef system."
      },
      {
        id: "return",
        title: "Sunset Return",
        tag: "Boat",
        description: "Return to the marina as the sun sets over the water."
      }
    ],
  },

  {
    slug: "paradise-island-snorkeling",
    destinationSlug: "hurghada",
    city: "Hurghada",
    title: "Paradise Island Snorkeling",
    duration: "Full Day",
    tourStyle: "Small Group Tour",
    availability: "Daily Departures",
    shortDescription:
      "Experience the Caribbean of the Red Sea at Paradise Island, with turquoise waters and vibrant reefs.",
    heroImage: EXCURSION_COVERS["paradise-island-snorkeling"], 
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
    itinerarySteps: [
      {
        id: "pickup",
        title: "Hotel Pickup",
        tag: "Transfer",
        description: "Morning transfer to the boat pier."
      },
      {
        id: "sailing",
        title: "Sailing to Paradise",
        tag: "Boat",
        description: "Relax on deck as we cruise to the island."
      },
      {
        id: "reef",
        title: "Reef Exploration",
        tag: "Snorkeling",
        description: "Guided snorkeling at two prime locations."
      },
      {
        id: "lunch",
        title: "Island Lunch",
        tag: "Lunch Included",
        description: "Enjoy a meal on the island's shores."
      },
      {
        id: "beach",
        title: "Beach Relaxation",
        tag: "Relaxation",
        description: "Free time for swimming and sunbathing."
      }
    ],
  },

  {
    slug: "hurghada-quad-bike",
    destinationSlug: "hurghada",
    city: "Hurghada",
    title: "Hurghada Quad Bike Adventure",
    duration: "3 Hours",
    tourStyle: "Adventure Tour",
    availability: "Twice Daily",
    shortDescription:
      "Feel the thrill of racing through the Egyptian desert on a powerful quad bike at sunrise or sunset.",
    heroImage: EXCURSION_COVERS["hurghada-quad-bike"], 
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
    itinerarySteps: [
      {
        id: "briefing",
        title: "Safety Briefing",
        tag: "Safety",
        description: "Learn to handle the quad bike with a professional instructor."
      },
      {
        id: "ride",
        title: "Desert Ride",
        tag: "Adventure",
        description: "An hour of exciting riding across the desert plains."
      },
      {
        id: "stop",
        title: "Bedouin Stop",
        tag: "Culture",
        description: "Rest and enjoy traditional tea in a desert camp."
      },
      {
        id: "return",
        title: "Return Ride",
        tag: "Adventure",
        description: "Ride back to the base as the light changes over the dunes."
      }
    ],
  },

  // Cairo Tours (Moved from Experiences)
  {
    slug: "cairo-in-a-day-from-hurghada",
    destinationSlug: "hurghada",
    city: "Cairo",
    title: "Cairo in a Day — Private Air Journey from Hurghada",
    duration: "1 Day",
    tourStyle: "Private | By Plane",
    availability: "Daily Departures",
    shortDescription: "This curated day journey connects Hurghada and Cairo by air, allowing you to experience Egypt’s most iconic landmarks without compromise. With private transfers, an expert Egyptologist, and carefully paced visits, the day unfolds smoothly — focused on meaning, not movement.",
    heroImage: EXCURSION_COVERS["cairo-in-a-day-from-hurghada"],
    image: EXCURSION_IMAGES["cairo-in-a-day-from-hurghada"],
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
    itinerarySteps: [
      {
        id: "pickup",
        title: "Hotel pickup & transfer to airport",
        tag: "Transfer",
        description: "Private transfer from Hurghada to the airport with full assistance."
      },
      {
        id: "flight",
        title: "Flight to Cairo + private welcome",
        tag: "Flight",
        description: "Meet your Egyptologist and driver on arrival for a seamless start."
      },
      {
        id: "giza",
        title: "Giza Plateau",
        tag: "History",
        description: "Pyramids, Sphinx, and the Valley Temple — unhurried and guided."
      },
      {
        id: "lunch",
        title: "Refined local lunch",
        tag: "Lunch Included",
        description: "A curated lunch stop at a trusted Cairo restaurant."
      },
      {
        id: "gem",
        title: "Grand Egyptian Museum (selected galleries)",
        tag: "Culture",
        description: "Explore signature halls and highlights with expert context."
      },
      {
        id: "old-cairo",
        title: "Old Cairo landmarks",
        tag: "History",
        description: "Hanging Church and Ben Ezra Synagogue, with storytelling and history."
      },
      {
        id: "khan",
        title: "Khan El Khalili walk + return flight",
        tag: "Shopping",
        description: "A short guided walk through key lanes, then airport transfer for your flight back."
      }
    ]
  },
  {
    slug: "nile-maxim-dinner-cruise",
    destinationSlug: "cairo",
    city: "Cairo",
    title: "Nile Maxim — Evening Dinner Cruise in Cairo",
    duration: "Evening",
    tourStyle: "Private Transfer | Shared Cruise",
    availability: "Daily Departures",
    shortDescription: "Step aboard the Nile Maxim for a refined dinner cruise designed for relaxed evenings rather than spectacle. Enjoy a carefully prepared menu paired with live Egyptian music, a traditional belly dance performance, and a folkloric show — all set against the glow of Cairo after dark.",
    heroImage: EXCURSION_COVERS["nile-maxim-dinner-cruise"],
    image: EXCURSION_IMAGES["nile-maxim-dinner-cruise"],
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
    itinerarySteps: [
      {
        id: "pickup",
        title: "Pickup",
        tag: "Transfer",
        description: "Hotel pickup and private transfer to board the Nile Maxim."
      },
      {
        id: "boarding",
        title: "Boarding",
        tag: "Check-in",
        description: "Step aboard the cruise ship."
      },
      {
        id: "dinner",
        title: "Dinner & Show",
        tag: "Dinner",
        description: "Enjoy an open dinner service with Egyptian & international options, accompanied by live performances and soft Oriental music."
      },
      {
        id: "return",
        title: "Return",
        tag: "Transfer",
        description: "Return transfer to your hotel."
      }
    ]
  },
  {
    slug: "cairo-beyond-the-pyramids",
    destinationSlug: "cairo",
    city: "Cairo",
    title: "Cairo Beyond the Pyramids — Culture, Faith & Living History",
    duration: "1 Day",
    tourStyle: "Private Guided City Tour",
    availability: "Daily Departures",
    shortDescription: "Designed for travelers who have already seen the pyramids, this full-day city journey explores Cairo’s cultural, religious, and architectural heritage with balance and clarity.",
    heroImage: EXCURSION_COVERS["cairo-beyond-the-pyramids"],
    image: EXCURSION_IMAGES["cairo-beyond-the-pyramids"],
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
    itinerarySteps: [
      {
        id: "gem",
        title: "Grand Egyptian Museum",
        tag: "Culture",
        description: "Begin with curated highlights of the Grand Egyptian Museum."
      },
      {
        id: "citadel",
        title: "Citadel & Mosque",
        tag: "History",
        description: "Visit the Cairo Citadel and the alabaster Mohamed Ali Mosque."
      },
      {
        id: "lunch",
        title: "Lunch",
        tag: "Lunch Included",
        description: "Enjoy lunch at a quality local restaurant."
      },
      {
        id: "khan",
        title: "Khan El Khalili",
        tag: "Shopping",
        description: "A guided walk through the historic bazaar."
      },
      {
        id: "coptic",
        title: "Coptic Cairo",
        tag: "History",
        description: "Conclude with visits to the Hanging Church, Ben Ezra Synagogue, and Abu Serga."
      }
    ]
  },
  {
    slug: "tanoura-night-old-cairo",
    destinationSlug: "cairo",
    city: "Cairo",
    title: "Tanoura Night — Whirling Dervishes of Old Cairo",
    duration: "Evening",
    tourStyle: "Cultural Night Experience",
    availability: "Selected Evenings",
    shortDescription: "Held at the 16th-century Wekalet El Ghoury, this traditional Tanoura performance blends live folkloric music with the hypnotic whirling dance rooted in Sufi tradition.",
    heroImage: EXCURSION_COVERS["tanoura-night-old-cairo"],
    image: EXCURSION_IMAGES["tanoura-night-old-cairo"],
    imageAlt: "Whirling dervishes performing Tanoura dance",
    priceCents: 8000,
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
    notIncluded: ["Personal expenses", "Tipping"],
    category: "Evening Experiences",
    type: "excursion",
    featured: false,
    itinerarySteps: [
      {
        id: "pickup",
        title: "Pickup",
        tag: "Transfer",
        description: "Evening hotel pickup and transfer to Wekalet El Ghoury."
      },
      {
        id: "performance",
        title: "The Performance",
        tag: "Show",
        description: "Witness the mesmerizing live music and traditional Tanoura whirling dervish performance."
      },
      {
        id: "return",
        title: "Return",
        tag: "Transfer",
        description: "Return transfer to your hotel."
      }
    ]
  },
  {
    slug: "cairo-private-photo-session",
    destinationSlug: "cairo",
    city: "Cairo",
    title: "Cairo Through the Lens — Private Photography Experience",
    duration: "Half Day",
    tourStyle: "Private Creative Experience",
    availability: "Upon Request",
    shortDescription: "This experience is designed for travelers who want meaningful memories — not rushed snapshots. With up to three iconic locations, your photographer guides you through natural compositions and light-driven moments.",
    heroImage: EXCURSION_COVERS["cairo-private-photo-session"],
    image: EXCURSION_IMAGES["cairo-private-photo-session"],
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
    itinerarySteps: [
      {
        id: "meet",
        title: "Meet & Plan",
        tag: "Meeting",
        description: "Meet your private photographer to discuss your vision."
      },
      {
        id: "session",
        title: "The Session",
        tag: "Photography",
        description: "Visit up to three iconic locations (e.g., Giza Plateau, Sphinx, Khan El Khalili) for your shoot."
      },
      {
        id: "wrap",
        title: "Wrap Up",
        tag: "Conclusion",
        description: "Conclude the session and discuss delivery of your edited gallery."
      }
    ]
  },
  // New Tours (Alexandria + Pyramids)
  {
    slug: "alexandria-day-trip-from-cairo",
    destinationSlug: "cairo",
    city: "Cairo",
    cities: ["Cairo", "Alexandria"],
    title: "Alexandria Day Trip from Cairo",
    duration: "Full Day",
    tourStyle: "Private Coastal Journey",
    availability: "Every day except Sundays",
    shortDescription: "Trade Cairo’s skyline for sea air. A private day along the Mediterranean—Roman relics, catacombs carved into bedrock, and Alexandria’s most iconic coastal fortress—finished with a refined seafood lunch by the water.",
    heroImage: DESTINATION_IMAGES["alexandria"],
    image: DESTINATION_IMAGES["alexandria"],
    imageAlt: "The Qaitbay Citadel on the Mediterranean coast of Alexandria",
    priceCents: 20000,
    highlights: [
      "Pompey’s Pillar & the Roman quarter",
      "Temple of Serapis ruins",
      "Roman Catacombs (Kom El Shoqafa)",
      "Qaitbay Citadel on the lighthouse site",
      "Bibliotheca Alexandrina (modern landmark)",
      "Seafood lunch on the coast"
    ],
    included: [
      "Private hotel pickup & drop-off",
      "Private air-conditioned vehicle",
      "Private English-speaking expert guide",
      "All admission fees for listed sites",
      "Lunch at a quality local restaurant",
      "Bottled water",
      "All taxes & service charges"
    ],
    notIncluded: [
      "Personal spending",
      "Optional add-ons not listed",
      "Tipping"
    ],
    category: "Day Trips",
    type: "excursion",
    itinerarySteps: [
      {
        id: "pickup",
        title: "Pickup & Departure",
        tag: "Transfer",
        description: "Morning pickup from your Cairo hotel. Settle into a private vehicle and head north toward Alexandria."
      },
      {
        id: "pompeys-pillar",
        title: "Pompey’s Pillar",
        tag: "Ancient Sites",
        description: "Begin with one of Alexandria’s most famous Roman-era monuments, built in honor of Emperor Diocletian."
      },
      {
        id: "serapis-catacombs",
        title: "Serapis & the Catacombs",
        tag: "History",
        description: "Explore the ruins of the Temple of Serapis, then descend into the rock-cut Roman catacombs—three levels carved directly into the bedrock."
      },
      {
        id: "lunch",
        title: "Mediterranean Lunch",
        tag: "Lunch Included",
        description: "Enjoy a fresh seafood lunch at a trusted local spot along the coast."
      },
      {
        id: "qaitbay",
        title: "Qaitbay Citadel",
        tag: "Coastal Landmark",
        description: "Visit the fortress built on the legendary site of the ancient Lighthouse of Alexandria."
      },
      {
        id: "bibliotheca",
        title: "Bibliotheca Alexandrina",
        tag: "Modern Icon",
        description: "End the day at Alexandria’s striking modern library—an architectural symbol of the city’s intellectual legacy."
      },
      {
        id: "return",
        title: "Return to Cairo",
        tag: "Transfer",
        description: "Drive back to Cairo and drop-off at your hotel in the evening."
      }
    ]
  },
  {
    slug: "saqqara-dahshur-pyramids",
    destinationSlug: "cairo",
    city: "Cairo",
    cities: ["Cairo"],
    title: "Saqqara & Dahshur — The Origins of the Pyramid",
    duration: "Full Day",
    tourStyle: "Private Guided Tour",
    availability: "Daily Departures",
    shortDescription: "Venture beyond Giza to the silent desert of Dahshur and the vast necropolis of Saqqara. This is where the pyramid form was born—from the Step Pyramid of Djoser to the Bent and Red Pyramids—offering a deeper, quieter connection to the Old Kingdom.",
    heroImage: EXCURSION_COVERS["hurghada-cairo-day-trip"], // Fallback/Shared
    image: EXCURSION_IMAGES["hurghada-cairo-day-trip"],     // Fallback/Shared
    imageAlt: "The Step Pyramid of Djoser at Saqqara",
    priceCents: 18000,
    highlights: [
      "Step Pyramid of Djoser (Saqqara)",
      "Pyramid of Unas (Pyramid Texts)",
      "Entry into the Red Pyramid (Dahshur)",
      "The Bent Pyramid (panoramic view)",
      "Imhotep Museum",
      "Traditional countryside lunch"
    ],
    included: [
      "Private transfers in A/C vehicle",
      "Expert Egyptologist guide",
      "Entrance fees to all sites",
      "Lunch in a rural setting",
      "Bottled water",
      "All taxes & service charges"
    ],
    notIncluded: [
      "Personal expenses",
      "Tipping"
    ],
    category: "Historical Tours",
    type: "excursion",
    itinerarySteps: [
      {
        id: "pickup",
        title: "Morning Departure",
        tag: "Transfer",
        description: "Morning departure from your hotel to the countryside south of Cairo."
      },
      {
        id: "dahshur",
        title: "Dahshur Necropolis",
        tag: "History",
        description: "Visit the Red Pyramid—the first true smooth-sided pyramid—and the unique Bent Pyramid."
      },
      {
        id: "saqqara",
        title: "Saqqara Complex",
        tag: "Ancient Sites",
        description: "Explore the vast complex of Djoser, the world's oldest stone monumental building."
      },
      {
        id: "lunch",
        title: "Countryside Lunch",
        tag: "Lunch Included",
        description: "Relax with a traditional lunch near the palm groves."
      },
      {
        id: "unas",
        title: "Pyramid of Unas",
        tag: "History",
        description: "Enter the tomb of Unas to see the earliest known Pyramid Texts."
      },
      {
        id: "return",
        title: "Return to Cairo",
        tag: "Transfer",
        description: "Drive back to Cairo through the lush Nile Valley farmlands."
      }
    ]
  },
  {
    slug: "giza-pyramids-grand-egyptian-museum",
    destinationSlug: "cairo",
    city: "Cairo",
    cities: ["Cairo"],
    title: "The Great Pyramids & The Grand Egyptian Museum",
    duration: "Full Day",
    tourStyle: "Private Guided Tour",
    availability: "Daily Departures",
    shortDescription: "The ultimate dialogue between ancient majesty and modern grandeur. Stand before the Great Pyramids of Giza, then immerse yourself in the world’s largest archaeological museum—the Grand Egyptian Museum—where the treasures of the pharaohs find their new home.",
    heroImage: EXCURSION_COVERS["hurghada-cairo-day-trip"], // Fallback/Shared
    image: EXCURSION_IMAGES["hurghada-cairo-day-trip"],     // Fallback/Shared
    imageAlt: "The Great Sphinx and Pyramids of Giza",
    priceCents: 22000,
    highlights: [
      "Giza Plateau (Pyramids & Sphinx)",
      "Grand Egyptian Museum (GEM) - Main Halls",
      "Tutankhamun Galleries (if accessible)",
      "The Hanging Obelisk",
      "Lunch with a view"
    ],
    included: [
      "Private hotel pickup & drop-off",
      "Expert Egyptologist guide",
      "GEM Entry Tickets",
      "Giza Plateau Entry Tickets",
      "Lunch",
      "Bottled water"
    ],
    notIncluded: [
      "Special exhibition tickets",
      "Inside the Great Pyramid ticket",
      "Tipping"
    ],
    category: "Historical Tours",
    type: "excursion",
    itinerarySteps: [
      {
        id: "pickup",
        title: "Pickup",
        tag: "Transfer",
        description: "Morning pickup to begin your journey through time."
      },
      {
        id: "giza",
        title: "Giza Plateau",
        tag: "History",
        description: "Walk in the shadow of Khufu, Khafre, and Menkaure, and greet the Sphinx."
      },
      {
        id: "lunch",
        title: "Lunch",
        tag: "Lunch Included",
        description: "A refined lunch break with views of the pyramids."
      },
      {
        id: "gem",
        title: "Grand Egyptian Museum",
        tag: "Modern Icon",
        description: "Enter the monumental atrium and explore the available galleries of the GEM."
      },
      {
        id: "treasures",
        title: "Ancient Treasures",
        tag: "Culture",
        description: "Witness the restored masterpieces of the ancient world in a state-of-the-art setting."
      },
      {
        id: "return",
        title: "Return",
        tag: "Transfer",
        description: "Transfer back to your hotel."
      }
    ]
  }
];
