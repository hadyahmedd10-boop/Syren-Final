import { Excursion } from "@/types/excursion"; 
import heroImg from "../../public/images/hero/cairo.jpg"; 
import luxuryImg from "../../public/images/hero/luxury.jpg"; 
import partyImg from "../../public/images/experiences/party.jpg"; 
 
export const excursions: Excursion[] = [ 
  // Hurghada 
  { 
    slug: "hurghada-to-luxor-day-trip", 
    destinationSlug: "hurghada", 
    title: "Luxor Day Trip", 
    duration: "Full Day", 
    tourStyle: "Private Guided Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Karnak, Valley of the Kings, and Hatshepsut — a legendary day in Luxor with private guidance.", 
    heroImage: luxuryImg, 
    image: luxuryImg,
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
    slug: "hurghada-to-cairo-day-trip-by-car", 
    destinationSlug: "hurghada", 
    title: "Cairo Day Trip by Car", 
    duration: "Full Day", 
    tourStyle: "Private Guided Tour", 
    availability: "Daily Departures", 
    shortDescription: 
      "Pyramids, Egyptian Museum, Old Cairo, and Khan el Khalili — Cairo’s icons in one powerful day.", 
    heroImage: heroImg, 
    image: heroImg,
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
    heroImage: partyImg, 
    image: partyImg,
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
]; 
