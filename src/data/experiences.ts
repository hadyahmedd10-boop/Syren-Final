import { Experience } from "@/types/experience";
import { HERO_IMAGES, DESTINATION_IMAGES, EXPERIENCE_IMAGES } from "@/lib/images";
import { getItineraryDayImageSrc } from "@/lib/itinerary-images";

export const experiences: Experience[] = [
  {
    slug: "cairo-after-dark",
    title: "Cairo After Dark",
    destinations: ["cairo"],
    subtitle: "Nightlife, Culture & Hidden Gems",
    duration: "4 Days / 3 Nights",
    cities: "Cairo",
    description: "Experience the electric energy of Cairo after the sun sets. From hidden jazz clubs to midnight street food and illuminated monuments.",
    introduction: "When the sun dips below the horizon, Cairo transforms into a different world. This experience is designed for the modern traveler seeking the city's pulse through its music, art, and legendary nightlife.",
    heroImage: EXPERIENCE_IMAGES["cairo-after-dark"],
    whatsappMessage: "I am interested in the Cairo After Dark experience",
    highlights: [
      "Private midnight tour of Islamic Cairo",
      "VIP access to Zamalek's hidden jazz and art bars",
      "Gourmet street food crawl with a local expert",
      "Late-night Nile felucca party with live music",
    ],
    included: [
      "3 nights luxury boutique accommodation",
      "Private nightlife host & security",
      "All late-night transfers",
      "Select cocktails and tasting menus",
    ],
    notIncluded: [
      "International flights",
      "Personal shopping",
      "Travel insurance",
    ],
    price: {
      amount: 1850,
      currency: "USD",
      perPerson: true
    },
    category: "nightlife",
    itinerary: [
      {
        day: 1,
        title: "Neon Arrival",
        description: "VIP arrival and transfer to a boutique hotel in Zamalek. Welcome cocktails at a rooftop bar overlooking the city lights.",
        meals: "Dinner",
        image: getItineraryDayImageSrc("cairo-after-dark", 1)
      },
      {
        day: 2,
        title: "The Heart of the Night",
        description: "Explore the historic Al-Muizz street under the stars, followed by an exclusive underground music performance.",
        meals: "Breakfast, Late Dinner",
        image: getItineraryDayImageSrc("cairo-after-dark", 2)
      },
      {
        day: 3,
        title: "Boutique Beats",
        description: "Gallery hopping in Downtown Cairo followed by a private Nile cruise with a curated DJ set.",
        meals: "Breakfast, Brunch",
        image: getItineraryDayImageSrc("cairo-after-dark", 3)
      },
      {
        day: 4,
        title: "Morning After",
        description: "Relaxing late brunch before private transfer to the airport.",
        meals: "Brunch",
        image: getItineraryDayImageSrc("cairo-after-dark", 4)
      }
    ]
  },
  {
    slug: "nile-signature",
    title: "Nile Signature",
    destinations: ["luxor-aswan"],
    subtitle: "The Quintessential River Journey",
    duration: "6 Days / 5 Nights",
    cities: "Luxor, Aswan",
    description: "A refined journey along the lifeblood of Egypt. Experience the majesty of the Nile on a private traditionally-styled dahabiya.",
    introduction: "The Nile is the soul of Egypt. This signature experience focuses on the slow, majestic flow of the river, connecting you to the most powerful temples of the south in absolute privacy.",
    heroImage: EXPERIENCE_IMAGES["nile-signature"],
    whatsappMessage: "I am interested in the Nile Signature experience",
    highlights: [
      "Private Dahabiya sailing between Luxor and Aswan",
      "Exclusive dinner at the Temple of Philae",
      "Sunrise hot air balloon over the Valley of the Kings",
      "Private guided visits to Edfu and Kom Ombo",
    ],
    included: [
      "5 nights on a private luxury Dahabiya",
      "Private Egyptologist for the entire journey",
      "All meals prepared by a private chef",
      "All temple entry fees and permits",
    ],
    notIncluded: [
      "Flights to/from Luxor/Aswan",
      "Gratuities for the crew",
      "Personal expenses",
    ],
    price: {
      amount: 3200,
      currency: "USD",
      perPerson: true
    },
    category: "luxury",
    itinerary: [
      {
        day: 1,
        title: "Luxor Embarkation",
        description: "Transfer from Luxor airport to your private Dahabiya. Afternoon visit to Karnak Temple at sunset.",
        meals: "Lunch, Dinner",
        image: getItineraryDayImageSrc("nile-signature", 1)
      },
      {
        day: 2,
        title: "The West Bank",
        description: "Early morning balloon ride followed by the Valley of the Kings. Set sail southward in the afternoon.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("nile-signature", 2)
      },
      {
        day: 3,
        title: "Sailing Through Time",
        description: "A day of pure sailing and relaxation. Stop at local villages and hidden river islands.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("nile-signature", 3)
      },
      {
        day: 4,
        title: "Temples of the South",
        description: "Visit the Horus Temple in Edfu and the unique double temple of Kom Ombo as evening falls.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("nile-signature", 4)
      },
      {
        day: 5,
        title: "Aswan Sanctuary",
        description: "Arrive in Aswan. Visit Philae Temple followed by a farewell dinner on the river.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("nile-signature", 5)
      },
      {
        day: 6,
        title: "Departure",
        description: "Final breakfast on board before private transfer to Aswan airport.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("nile-signature", 6)
      }
    ]
  },
  {
    slug: "5-day-cairo-experience",
    title: "5-Day Cairo Experience",
    destinations: ["cairo"],
    subtitle: "Ancient Wonders & Timeless Culture",
    duration: "5 Days / 4 Nights",
    cities: "Cairo",
    description: "A deep cultural journey through Egypt’s ancient landmarks, museums, and historic neighborhoods — designed for comfort, insight, and authentic discovery.",
    introduction: "Cairo is more than a city; it is a living chronicle of human civilization. Our 5-day curated experience invites you to step beyond the veil of time, offering exclusive access to the monuments and moments that have shaped the world, all while enveloped in the refined comfort of modern luxury.",
    heroImage: EXPERIENCE_IMAGES["5-day-cairo-experience"],
    whatsappMessage: "I am interested in the 5-Day Cairo Experience",
    highlights: [
      "After-hours private access to the Grand Egyptian Museum",
      "Sunrise meditation at the Great Pyramid of Giza",
      "Exclusive guided tour of the Sphinx enclosure",
      "Artisan-led exploration of Islamic Cairo's hidden workshops",
      "Private Felucca sunset sail on the Nile"
    ],
    included: [
      "Private guided tours with expert Egyptologists",
      "4 nights luxury accommodation in Cairo",
      "All airport transfers in private A/C vehicles",
      "Select meals as specified in the itinerary",
      "24/7 dedicated local support & concierge",
      "Entry fees to all mentioned historical sites"
    ],
    notIncluded: [
      "International airfare",
      "Entry visa to Egypt",
      "Personal expenses and gratuities",
      "Optional activities and spa treatments"
    ],
    price: {
      amount: 2450,
      currency: "USD",
      perPerson: true
    },
    category: "cultural",
    itinerary: [
      {
        day: 1,
        title: "Arrival & The Grand Egyptian Museum",
        description: "Arrive at Cairo International Airport where your private host awaits. After a seamless VIP entry, transfer to your luxury residence overlooking the Nile. In the afternoon, enjoy a private, after-hours preview of the Grand Egyptian Museum, followed by a welcome dinner featuring contemporary Egyptian cuisine.",
        meals: "Dinner",
        image: getItineraryDayImageSrc("5-day-cairo-experience", 1)
      },
      {
        day: 2,
        title: "Giza Plateau & The Sphinx",
        description: "Experience the Great Pyramids like never before. Start with a sunrise meditation at the base of Khufu's pyramid, followed by exclusive access to the Sphinx enclosure. Enjoy a gourmet picnic lunch on the plateau before exploring the Solar Boat Museum. The evening is yours to relax or enjoy a private jazz performance.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("5-day-cairo-experience", 2)
      },
      {
        day: 3,
        title: "Islamic Cairo & Hidden Alleys",
        description: "Dive into the heart of historic Cairo. Visit the Citadel of Saladin and the Mosque of Muhammad Ali. Wander through the enchanting Khan el-Khalili bazaar with a local artisan who will guide you to hidden workshops and secret rooftop tea houses. Dinner is served in a restored 19th-century mansion.",
        meals: "Breakfast, Dinner",
        image: getItineraryDayImageSrc("5-day-cairo-experience", 3)
      },
      {
        day: 4,
        title: "Coptic Heritage & The Nile at Sunset",
        description: "Explore the serene atmosphere of Old Cairo, including the Hanging Church and the Ben Ezra Synagogue. After a light lunch, board a private, traditionally-styled Felucca for a sunset sail on the Nile. Sip on local hibiscus tea as the city lights begin to flicker against the twilight sky.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("5-day-cairo-experience", 4)
      },
      {
        day: 5,
        title: "Modern Cairo & Departure",
        description: "Spend your final morning exploring the sophisticated boutiques and galleries of Zamalek. Enjoy a farewell brunch at a riverside garden before your private chauffeur transfers you to the airport for your departure, leaving with memories that will last a lifetime.",
        meals: "Breakfast, Brunch",
        image: getItineraryDayImageSrc("5-day-cairo-experience", 5)
      }
    ]
  },
  {
    slug: "8-day-pyramids-nile-cruise",
    title: "8-Day Pyramids & Nile Cruise Journey",
    destinations: ["cairo", "luxor-aswan"],
    subtitle: "Legends of the Pharaohs",
    duration: "8 Days / 7 Nights",
    cities: "Cairo, Luxor, Aswan",
    description: "An unforgettable journey combining Cairo’s iconic pyramids with a luxury Nile cruise through Upper Egypt’s most legendary temples.",
    introduction: "Experience the full majesty of Ancient Egypt. From the towering pyramids of Giza to the sun-drenched temples of Luxor and Aswan, this 8-day odyssey blends world-class archeology with the serene beauty of a private Nile cruise.",
    heroImage: EXPERIENCE_IMAGES["8-day-pyramids-nile-cruise"],
    whatsappMessage: "I am interested in the 8-Day Pyramids & Nile Cruise Journey",
    highlights: [
      "Luxury 5-star Nile Cruise between Luxor and Aswan",
      "Private Egyptologist for all site visits",
      "Sunset tour of the unique Kom Ombo double temple",
      "VIP access to the Valley of the Kings tombs",
      "Domestic flights included for maximum comfort"
    ],
    included: [
      "Private guided tours with expert Egyptologists",
      "Luxury hotel & 5-star Nile cruise accommodation",
      "Domestic flights (Cairo-Luxor & Aswan-Cairo)",
      "All transfers in private A/C vehicles",
      "Most meals as specified in the itinerary",
      "24/7 dedicated local support & concierge",
      "Entry fees to all mentioned historical sites"
    ],
    notIncluded: [
      "International airfare",
      "Entry visa to Egypt",
      "Personal expenses and gratuities",
      "Optional visit to Abu Simbel (available as add-on)"
    ],
    price: {
      amount: 3850,
      currency: "USD",
      perPerson: true
    },
    category: "luxury",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Your Egyptian story begins with a private greeting at the airport and transfer to your luxury hotel with Pyramids views.",
        meals: "Dinner",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 1)
      },
      {
        day: 2,
        title: "The Pyramids & Memphis",
        description: "Explore the Giza Plateau, the Great Sphinx, and the ancient capital of Memphis with your private Egyptologist.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 2)
      },
      {
        day: 3,
        title: "Fly to Luxor & Embarkation",
        description: "Fly to Luxor and board your luxury Nile cruiser. In the afternoon, visit the magnificent Karnak and Luxor Temples.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 3)
      },
      {
        day: 4,
        title: "Valley of the Kings",
        description: "Cross to the West Bank to discover the Valley of the Kings, the Temple of Hatshepsut, and the Colossi of Memnon.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 4)
      },
      {
        day: 5,
        title: "Edfu & Kom Ombo Temples",
        description: "Sail south to Edfu to visit the Temple of Horus, then continue to the unique double temple of Kom Ombo at sunset.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 5)
      },
      {
        day: 6,
        title: "Aswan & Philae Temple",
        description: "Arrive in Aswan. Visit the beautiful Philae Temple, the Unfinished Obelisk, and the High Dam.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 6)
      },
      {
        day: 7,
        title: "Abu Simbel (Optional) & Fly back to Cairo",
        description: "Optional early morning visit to the breathtaking Abu Simbel temples. Fly back to Cairo for a final farewell dinner.",
        meals: "Breakfast, Dinner",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 7)
      },
      {
        day: 8,
        title: "Final Departure",
        description: "Enjoy a final Egyptian breakfast before your private transfer to Cairo International Airport.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("8-day-pyramids-nile-cruise", 8)
      }
    ]
  },
  {
    slug: "10-day-cairo-nile-red-sea-odyssey",
    title: "10-Day Cairo, Nile & Red Sea Odyssey",
    destinations: ["cairo", "luxor-aswan", "red-sea"],
    subtitle: "From the Pyramids to the Turquoise Coast",
    duration: "10 Days / 9 Nights",
    cities: "Cairo, Aswan, Luxor, Hurghada",
    description: "A comprehensive 10-day journey across Egypt's most iconic landscapes - from the ancient majesty of Cairo and the Nile to the sun-drenched shores of the Red Sea.",
    introduction: "Egypt is a land of contrasts, where the echoes of ancient civilizations meet the serene beauty of the coast. This 10-day odyssey is thoughtfully designed to offer a complete immersion into the heart of Egypt. You will stand before the Great Pyramids, sail the timeless Nile, explore the legendary temples of the south, and finally, find sanctuary on the crystalline shores of Hurghada. Every detail, from the VIP meet-and-greet to the private transfers, is handled with the care and soul that defines Syren.",
    heroImage: EXPERIENCE_IMAGES["10-day-cairo-nile-red-sea-odyssey"],
    whatsappMessage: "I am interested in the 10-Day Cairo, Nile & Red Sea Odyssey",
    highlights: [
      "Full spectrum of Egypt: History, Nile, and Red Sea",
      "Overnight sleeper train experience for authentic travel",
      "Breathtaking mountain temples of Abu Simbel",
      "3 days of pure relaxation on Hurghada's turquoise coast",
      "Comprehensive private logistics for a stress-free journey"
    ],
    included: [
      "Personal meet & greet at Cairo International Airport",
      "9 nights accommodation in luxury & 5-star hotels",
      "All transfers in private, air-conditioned vehicles",
      "Overnight sleeper train from Cairo to Aswan (Dinner & Breakfast included)",
      "Private guided tours with expert Egyptologists",
      "Entrance fees to all mentioned historical sites",
      "Domestic travel from Hurghada to Cairo",
      "24/7 dedicated local support & concierge"
    ],
    notIncluded: [
      "International airfare",
      "Entry visa to Egypt",
      "Optional activities in Hurghada (Snorkeling, Sailing, etc.)",
      "Personal expenses and gratuities"
    ],
    price: {
      amount: 4200,
      currency: "USD",
      perPerson: true
    },
    category: "adventure",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Your journey begins with a seamless arrival. Our team will meet you at the airport, assist with luggage, and transfer you to your hotel. After an uneventful check-in, enjoy a complimentary welcome drink while we discuss your upcoming itinerary. The rest of the day is yours to relax and prepare for the adventure ahead.",
        meals: "Welcome Drink",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 1)
      },
      {
        day: 2,
        title: "The Giza Plateau & Sleeper Train",
        description: "Begin with the Giza Plateau, home to the Great Pyramids and the Sphinx. After an authentic Egyptian lunch, explore the New Grand Egyptian Museum in a special preview experience. As evening falls, board your overnight sleeper train to Aswan, enjoying dinner as the landscapes of the Nile valley pass by.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 2)
      },
      {
        day: 3,
        title: "Aswan's Ancient Treasures",
        description: "Arrive in Aswan and dive straight into history at the Unfinished Obelisk, the largest piece of stonework ever constructed. Continue to the romantic Temple of Philae, dedicated to the goddess Isis. Spend the night in Aswan, soaking in the serene atmosphere of the Nile's most beautiful city.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 3)
      },
      {
        day: 4,
        title: "The Majesty of Abu Simbel",
        description: "A private 3.5-hour drive brings you to the breathtaking Temples of Abu Simbel. Stand in awe before the massive statues of Ramses II and Nefertari, carved directly into the mountain. Return to Aswan in the afternoon for another comfortable evening by the water.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 4)
      },
      {
        day: 5,
        title: "The Valley of the Kings",
        description: "Journey to Luxor, the world's greatest open-air museum. Explore the notorious Valley of the Kings, the Temple of Hatshepsut, and the Colossi of Memnon. Each site tells a story of power, faith, and the eternal quest for immortality. Transfer to your Luxor hotel for the night.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 5)
      },
      {
        day: 6,
        title: "Karnak, Luxor & The Red Sea",
        description: "Discover the immense Karnak Temple Complex and the elegant Luxor Temple. After your final exploration of the south, we drive you in a private vehicle to Hurghada. Arrive at your coastal resort and settle in for a well-deserved escape to the Red Sea.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 6)
      },
      {
        day: 7,
        title: "Red Sea Relaxation",
        description: "A free day in Hurghada to nourish your mind, body, and soul. Relax at the resort, swim in the turquoise waters of the Red Sea, or choose from optional activities like snorkeling or windsurfing. The day is entirely yours.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 7)
      },
      {
        day: 8,
        title: "Sun, Sand & Sailing",
        description: "Another day of coastal bliss. Take advantage of Hurghada's world-class sailing or deep-sea fishing, or simply enjoy the refined amenities of your resort. Another evening to watch the sun set over the crystalline horizon.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 8)
      },
      {
        day: 9,
        title: "Return to Cairo",
        description: "After a final breakfast by the sea, transfer back to Cairo. Enjoy some free time in the capital before your last night in a luxury hotel. Reflect on your journey through the heart of Egypt as the city lights begin to flicker.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 9)
      },
      {
        day: 10,
        title: "Farewell Egypt",
        description: "Wake up to a final 5-star breakfast before your private transfer to Cairo International Airport. Our staff will assist you with your luggage as you bid farewell to the land of the Pharaohs, taking with you memories that will last a lifetime.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("10-day-cairo-nile-red-sea-odyssey", 10)
      }
    ]
  },
  {
    slug: "12-day-egyptian-honeymoon-odyssey",
    title: "12-Day Egyptian Honeymoon Odyssey",
    destinations: ["cairo", "luxor-aswan", "red-sea"],
    subtitle: "Romance, History & The Red Sea",
    duration: "12 Days / 11 Nights",
    cities: "Cairo, Aswan, Nile Cruise, Luxor, Hurghada",
    description: "An enchanting 12-day honeymoon blending the ancient wonders of Cairo and the Nile with the romantic serenity of the Red Sea.",
    introduction: "Your love story deserves a backdrop as timeless as the pyramids and as beautiful as the Red Sea. This 12-day odyssey is crafted for couples seeking the perfect balance of adventure, history, and absolute luxury. From private candlelit dinners in the shadow of ancient temples to sunset cruises on the Nile and days of pure relaxation in Hurghada, every moment is designed to be unforgettable.",
    heroImage: EXPERIENCE_IMAGES["12-day-egyptian-honeymoon-odyssey"],
    whatsappMessage: "I am interested in the 12-Day Egyptian Honeymoon Odyssey",
    highlights: [
      "Private candlelit dinner at the foot of the Giza Pyramids",
      "Romantic sunset Felucca cruise with private musician",
      "Exclusive hot air balloon ride over the Valley of the Kings",
      "Couples' spa treatments and private beach dinners in Hurghada",
      "Luxury suite upgrades throughout the entire journey"
    ],
    included: [
      "9 nights in luxury hotels & 2 nights on a private Dahabiya",
      "All domestic flights and private luxury transfers",
      "Special honeymoon amenities and surprises",
      "Private Egyptologist for all historical site visits",
      "Select romantic dining experiences",
      "24/7 dedicated concierge service"
    ],
    notIncluded: [
      "International airfare",
      "Entry visa to Egypt",
      "Personal shopping and gratuities",
      "Optional excursions not mentioned"
    ],
    price: {
      amount: 5800,
      currency: "USD",
      perPerson: true
    },
    category: "luxury",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Welcome to Egypt. Private VIP transfer to your luxury hotel overlooking the Nile. Enjoy a special welcome amenity and evening at leisure.",
        meals: "Welcome Drink",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 1)
      },
      {
        day: 2,
        title: "Pyramids & Romantic Dinner",
        description: "Explore the Giza Plateau by day. As evening falls, enjoy an exclusive, private dinner with the Pyramids as your backdrop.",
        meals: "Breakfast, Dinner",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 2)
      },
      {
        day: 3,
        title: "Cairo's Hidden Gems",
        description: "Visit the Grand Egyptian Museum and the charming streets of Old Cairo. Afternoon tea at a historic mansion.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 3)
      },
      {
        day: 4,
        title: "Fly to Aswan & Embarkation",
        description: "Fly to Aswan and board your private Dahabiya. Afternoon visit to the romantic Temple of Philae.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 4)
      },
      {
        day: 5,
        title: "Sailing the Nile",
        description: "A day of pure romance and relaxation as you sail north. Enjoy the changing landscapes from the deck.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 5)
      },
      {
        day: 6,
        title: "Temples & Sunset",
        description: "Visit the temples of Kom Ombo and Edfu. A private dinner on a river island under the stars.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 6)
      },
      {
        day: 7,
        title: "Arrival in Luxor",
        description: "Arrive in Luxor. Afternoon visit to the illuminated Luxor Temple followed by a private cocktail hour.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 7)
      },
      {
        day: 8,
        title: "Sunrise over the Valley",
        description: "Private hot air balloon ride at sunrise followed by exploration of the Valley of the Kings.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 8)
      },
      {
        day: 9,
        title: "Fly to Hurghada",
        description: "Transfer to the Red Sea. Settle into your luxury coastal suite with private pool.",
        meals: "Breakfast, Dinner",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 9)
      },
      {
        day: 10,
        title: "Red Sea Bliss",
        description: "A day for relaxation. Enjoy a couples' spa treatment and a private sunset cruise.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 10)
      },
      {
        day: 11,
        title: "Private Beach Day",
        description: "Enjoy a private cabana on the beach. Farewell beach dinner with live music.",
        meals: "Breakfast, Dinner",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 11)
      },
      {
        day: 12,
        title: "Farewell Egypt",
        description: "Final breakfast before your private transfer to the airport for your departure.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("12-day-egyptian-honeymoon-odyssey", 12)
      }
    ]
  },
  {
    slug: "family-adventure",
    title: "The Pharaoh's Quest Family Adventure",
    destinations: ["cairo", "luxor-aswan"],
    subtitle: "History Brought to Life for All Ages",
    duration: "7 Days / 6 Nights",
    cities: "Cairo, Luxor",
    description: "A fun and engaging journey through Ancient Egypt designed specifically for families with children, featuring interactive treasure hunts and hands-on workshops.",
    introduction: "Imagine your children's eyes lighting up as they solve riddles at the Great Pyramid or learn the secrets of mummification in a hands-on workshop. This family-focused odyssey combines the wonders of Egypt with engaging activities that make history come alive for explorers of all ages.",
    heroImage: EXPERIENCE_IMAGES["family-adventure"],
    whatsappMessage: "I am interested in the Family Adventure experience",
    highlights: [
      "Pyramid Treasure Hunt with a junior Egyptologist",
      "Hands-on Papyrus making workshop",
      "Private family felucca sail with traditional music",
      "Donkey ride through the Luxor West Bank villages",
      "Visit to the animal-focused 'Animalia' center in Aswan"
    ],
    included: [
      "Family-friendly private guides",
      "Interactive activity kits for children",
      "6 nights in family-suite accommodations",
      "All internal flights and transfers",
      "Most meals and kid-friendly snacks"
    ],
    notIncluded: [
      "International flights",
      "Visas",
      "Personal expenses"
    ],
    price: {
      amount: 2950,
      currency: "USD",
      perPerson: true
    },
    category: "adventure",
    itinerary: [
      {
        day: 1,
        title: "Welcome to the Land of Wonders",
        description: "Arrive in Cairo and transfer to your hotel. Welcome briefing with your family host and distribution of the 'Pharaoh's Quest' explorer kits.",
        meals: "Dinner",
        image: getItineraryDayImageSrc("family-adventure", 1)
      },
      {
        day: 2,
        title: "The Pyramid Treasure Hunt",
        description: "A morning of discovery at the Giza Plateau. Kids follow clues to find hidden 'treasures' while parents enjoy the majesty of the pyramids.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("family-adventure", 2)
      },
      {
        day: 3,
        title: "Artisans & Hieroglyphs",
        description: "Learn how to write your name in hieroglyphs and create your own papyrus at a traditional workshop. Afternoon visit to the Egyptian Museum.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("family-adventure", 3)
      },
      {
        day: 4,
        title: "Flight to Luxor & River Life",
        description: "Fly to Luxor. Board a private felucca for a sunset sail. Learn traditional Nubian songs and enjoy a BBQ dinner on the riverbank.",
        meals: "Breakfast, Dinner",
        image: getItineraryDayImageSrc("family-adventure", 4)
      },
      {
        day: 5,
        title: "The Valley of the Kings & Donkeys",
        description: "Explore the West Bank tombs followed by a fun donkey ride through the local farming villages to see rural Egyptian life.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("family-adventure", 5)
      },
      {
        day: 6,
        title: "Karnak Temple & Farewell Games",
        description: "Visit the massive Karnak Temple. Afternoon free for pool time or a final family scavenger hunt in the hotel gardens.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("family-adventure", 6)
      },
      {
        day: 7,
        title: "Departure",
        description: "Final family breakfast before transfer to Luxor airport for your flight home.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("family-adventure", 7)
      }
    ]
  },
  {
    slug: "siwa-desert-retreat",
    title: "Siwa Desert Retreat",
    destinations: ["siwa"],
    subtitle: "The Oracle's Sanctuary",
    duration: "5 Days / 4 Nights",
    cities: "Siwa Oasis",
    description: "An escape to one of Egypt's most remote and magical oases. Discover ancient mud-brick fortresses, salt lakes, and the Temple of the Oracle.",
    introduction: "Deep in the Great Sand Sea lies Siwa, an island of green in a world of gold. This retreat is designed for those seeking silence, soul, and a connection to the ancient rhythms of desert life.",
    heroImage: EXPERIENCE_IMAGES["siwa-desert-retreat"],
    whatsappMessage: "I am interested in the Siwa Desert Retreat",
    highlights: [
      "Stay in an authentic eco-lodge built from kershef",
      "Float in the crystalline salt lakes of Siwa",
      "Sunset at Fatnas Island overlooking the lake",
      "Private dinner in the Great Sand Sea dunes",
      "Visit the Temple of the Oracle where Alexander the Great sought wisdom"
    ],
    included: [
      "Private 4x4 desert transfers from Cairo",
      "4 nights in a luxury eco-lodge in Siwa",
      "All meals featuring organic local Siwi cuisine",
      "Private local Siwi guide",
      "All permits and entry fees"
    ],
    notIncluded: [
      "Flights to Egypt",
      "Gratuities",
      "Personal expenses"
    ],
    price: {
      amount: 2800,
      currency: "USD",
      perPerson: true
    },
    category: "adventure",
    itinerary: [
      {
        day: 1,
        title: "Journey to the Oasis",
        description: "Private 4x4 transfer from Cairo through the desert. Arrive in Siwa by sunset and settle into your eco-lodge.",
        meals: "Lunch, Dinner",
        image: getItineraryDayImageSrc("siwa-desert-retreat", 1)
      },
      {
        day: 2,
        title: "Fortresses & Oracles",
        description: "Explore the mud-brick Shali Fortress and the Temple of the Oracle. Afternoon dip in Cleopatra's Bath.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("siwa-desert-retreat", 2)
      },
      {
        day: 3,
        title: "Salt Lakes & Fatnas Island",
        description: "Float in the therapeutic salt lakes before heading to Fatnas Island for a legendary desert sunset.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("siwa-desert-retreat", 3)
      },
      {
        day: 4,
        title: "The Great Sand Sea",
        description: "Venture into the dunes for a 4x4 adventure. Enjoy a private candlelit dinner under the stars in the heart of the desert.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("siwa-desert-retreat", 4)
      },
      {
        day: 5,
        title: "Return to Cairo",
        description: "Final morning in the oasis before the private transfer back to Cairo, carrying the peace of the desert with you.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("siwa-desert-retreat", 5)
      }
    ]
  },
  {
    slug: "wellness-retreat",
    title: "Nile Soul Wellness Retreat",
    destinations: ["aswan"],
    subtitle: "Healing Rhythms of the River",
    duration: "8 Days / 7 Nights",
    cities: "Aswan",
    description: "A transformative wellness journey centered around the healing energy of the Nile in Aswan, featuring traditional Nubian treatments and yoga.",
    introduction: "Aswan is a place of deep peace and ancient healing. This retreat is designed to rejuvenate your spirit through the gentle flow of the Nile, traditional Nubian wellness practices, and daily mindfulness in the most serene settings of Upper Egypt.",
    heroImage: EXPERIENCE_IMAGES["wellness-retreat"],
    whatsappMessage: "I am interested in the Nile Soul Wellness Retreat",
    highlights: [
      "Daily sunrise yoga overlooking the Nile",
      "Traditional Nubian sand bath treatment",
      "Private meditation sessions at Philae Temple",
      "Organic farm-to-table dining on a private island",
      "Sunset sailing on a traditional felucca"
    ],
    included: [
      "7 nights in a luxury boutique wellness resort",
      "All wellness activities and spa treatments",
      "All organic meals and herbal infusions",
      "Private transfers and expert wellness host",
      "Airport VIP assistance"
    ],
    notIncluded: [
      "Flights to Egypt",
      "Gratuities",
      "Personal expenses"
    ],
    price: {
      amount: 3500,
      currency: "USD",
      perPerson: true
    },
    category: "luxury",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Aswan",
        description: "VIP arrival and transfer to your riverfront sanctuary. Evening welcome circle and grounding meditation by the water.",
        meals: "Dinner",
        image: getItineraryDayImageSrc("wellness-retreat", 1)
      },
      {
        day: 2,
        title: "Sunrise Yoga & Island Life",
        description: "Morning yoga session followed by a visit to an organic island farm for a farm-to-table lunch. Afternoon at leisure.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("wellness-retreat", 2)
      },
      {
        day: 3,
        title: "Nubian Healing Traditions",
        description: "Experience a traditional Nubian sand bath or herbal wrap. Afternoon visit to the colorful Nubian villages.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("wellness-retreat", 3)
      },
      {
        day: 4,
        title: "Meditation at Philae",
        description: "Private early morning boat to Philae Temple for a guided meditation session before the crowds arrive.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("wellness-retreat", 4)
      },
      {
        day: 5,
        title: "Sailing & Silence",
        description: "A day of silent sailing on a private felucca. Lunch served on board as you drift past the botanical gardens.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("wellness-retreat", 5)
      },
      {
        day: 6,
        title: "Energy & Flow",
        description: "Advanced yoga and breathwork session. Afternoon spa treatments and sound healing ceremony.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("wellness-retreat", 6)
      },
      {
        day: 7,
        title: "Gratitude & Celebration",
        description: "Final morning yoga and closing ceremony. Farewell dinner on a private terrace overlooking the first cataract.",
        meals: "Breakfast, Lunch, Dinner",
        image: getItineraryDayImageSrc("wellness-retreat", 7)
      },
      {
        day: 8,
        title: "Departure",
        description: "Final sunrise meditation and breakfast before private transfer to Aswan airport.",
        meals: "Breakfast",
        image: getItineraryDayImageSrc("wellness-retreat", 8)
      }
    ]
  },
  {
    slug: "alexandria-coastal-elegance",
    title: "Alexandria Coastal Elegance",
    destinations: ["alexandria"],
    subtitle: "Mediterranean Heritage & Royal Charm",
    duration: "3 Days / 2 Nights",
    cities: "Alexandria",
    description: "Rediscover the Pearl of the Mediterranean. A curated journey through Alexandria's Greco-Roman history and Belle Époque elegance.",
    introduction: "Alexandria is a city of layers, where Mediterranean breezes carry the scent of history. This experience invites you to explore its grand libraries, ancient catacombs, and royal gardens, all while staying in the city's most iconic historic hotel.",
    heroImage: EXPERIENCE_IMAGES["alexandria-coastal-elegance"],
    whatsappMessage: "I am interested in the Alexandria Coastal Elegance experience",
    highlights: [
      "Private tour of the Bibliotheca Alexandrina",
      "Exploration of the Catacombs of Kom El Shoqafa",
      "Sunset at the Citadel of Qaitbay, built on the site of the Lighthouse",
      "Guided walk through the royal gardens of Montaza Palace",
      "Gourmet seafood lunch overlooking the Mediterranean"
    ],
    included: [
      "2 nights in a historic luxury hotel",
      "Private guided tours with local historians",
      "All transfers in private A/C vehicles",
      "Daily breakfast and select gourmet lunches",
      "Entry fees to all historical sites"
    ],
    notIncluded: [
      "International flights",
      "Personal expenses",
      "Dinner (allowing for local exploration)"
    ],
    price: {
      amount: 950,
      currency: "USD",
      perPerson: true
    },
    category: "luxury",
    itinerary: [
      {
        day: 1,
        title: "Mediterranean Arrival",
        description: "Private transfer from Cairo to Alexandria. Check into your historic hotel and enjoy a sunset walk along the Corniche.",
        meals: "Lunch",
        image: getItineraryDayImageSrc("alexandria-coastal-elegance", 1)
      },
      {
        day: 2,
        title: "Greco-Roman Heritage",
        description: "Explore the Catacombs of Kom El Shoqafa and the Citadel of Qaitbay with your private Egyptologist.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("alexandria-coastal-elegance", 2)
      },
      {
        day: 3,
        title: "Royal Gardens & Departure",
        description: "Wander through the Montaza Palace gardens. Enjoy a final seafood lunch before your private transfer.",
        meals: "Breakfast, Lunch",
        image: getItineraryDayImageSrc("alexandria-coastal-elegance", 3)
      }
    ]
  }
];
