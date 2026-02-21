export interface SubPage {
  label: string;
  href: string;
}

export interface Pillar {
  slug: string;
  title: string;
  description: string;
  subPages: SubPage[];
  relatedSlugs: string[];
  faqs: { question: string; answer: string }[];
  /** Optional: custom About block text (replaces generic placeholder) */
  about?: string;
  /** Optional: insider tips – shown in a card */
  insiderTips?: string[];
  /** Optional: what to expect – bullet list in a card */
  whatToExpect?: string[];
  /** Optional: who this experience is for – paragraph or bullets in a card */
  whoIsThisFor?: string | string[];
  /** Optional: key highlights – short bullet list */
  highlights?: string[];
}

export const pillars: Pillar[] = [
  {
    slug: "catamaran-cruises-in-aruba",
    title: "Catamaran Cruises in Aruba",
    description:
      "Discover the best daytime catamaran cruises in Aruba, including snorkeling sails, open bar experiences, and scenic coastal adventures along the island's turquoise waters.",
    subPages: [
      { label: "Best morning catamaran cruises", href: "/catamaran-cruises-in-aruba/morning-cruises" },
      { label: "Snorkeling catamaran trips", href: "/catamaran-cruises-in-aruba/snorkeling" },
      { label: "Open bar catamaran sails", href: "/catamaran-cruises-in-aruba/open-bar" },
      { label: "Catamaran cruises for families", href: "/catamaran-cruises-in-aruba/families" },
      { label: "Sailing with BBQ and open bar", href: "/catamaran-cruises-in-aruba/bbq-sails" },
      { label: "Best value catamaran cruises", href: "/catamaran-cruises-in-aruba/best-value" },
    ],
    relatedSlugs: ["sunset-and-dinner-cruises-in-aruba", "snorkeling-and-diving-in-aruba", "private-and-luxury-tours-in-aruba"],
    about:
      "Catamaran cruises are one of the most popular ways to experience Aruba's coast. Stable, spacious hulls make them ideal for families and groups. Most tours include snorkeling at reefs or the Antilla wreck, lunch or snacks, and drinks. Morning and midday sails offer the best visibility and calmest seas; some operators also run sunset options. Compare duration, inclusions, and departure points to find the right trip for you.",
    insiderTips: [
      "Book at least a few days ahead in high season — top-rated cruises fill quickly.",
      "Morning departures usually mean calmer water and better snorkeling visibility.",
      "Bring reef-safe sunscreen and a hat; the deck can get very sunny.",
      "If you want more space and flexibility, look for smaller-group or private options.",
    ],
    whatToExpect: [
      "Check-in at the marina or pickup point; you'll get a safety briefing before boarding.",
      "Sailing time along the coast; many tours pass landmarks and photo spots.",
      "One or more snorkeling stops (equipment typically provided).",
      "Lunch, snacks, or open bar depending on the tour; some include a beach stop.",
      "Return to the marina; total duration is usually 3–5 hours for half-day cruises.",
    ],
    whoIsThisFor: [
      "Couples and families looking for a relaxed day on the water.",
      "Snorkelers who want easy access to reefs without a long boat ride.",
      "Groups who prefer a stable, roomy boat over a small speedboat.",
      "Anyone who wants lunch and drinks included so you can focus on the views.",
    ],
    highlights: [
      "Snorkeling at Aruba's reefs or the Antilla shipwreck",
      "Lunch, snacks, and drinks (often open bar) on board",
      "Stable, spacious catamarans suitable for all ages",
      "Half-day or full-day options; morning and afternoon departures",
    ],
    faqs: [
      { question: "How long do catamaran cruises in Aruba usually last?", answer: "Most daytime catamaran cruises in Aruba run between 3 and 5 hours, often including snorkeling stops and lunch or drinks." },
      { question: "Do I need to book catamaran cruises in advance?", answer: "Yes. Popular catamaran cruises sell out, especially in high season. Booking in advance secures your spot and often better prices." },
      { question: "What is included on a typical catamaran cruise in Aruba?", answer: "Most include the sail, snorkeling gear, instruction, and at least soft drinks. Many add lunch, snacks, and an open bar. Check each tour for exact inclusions." },
      { question: "Is a catamaran cruise in Aruba good for non-swimmers?", answer: "Yes. You can stay on the boat and enjoy the sail and views; snorkeling is optional. Catamarans are stable and spacious, so they suit anyone who prefers to relax on deck." },
      { question: "What should I bring on a catamaran cruise in Aruba?", answer: "Wear swimwear, bring a towel, reef-safe sunscreen, and a hat. Some operators provide wetsuits or rash guards; check when you book. Leave valuables in your hotel or in a dry bag." },
      { question: "Where do catamaran cruises in Aruba depart from?", answer: "Most depart from marinas in the Oranjestad or Palm Beach area. Your confirmation will include the exact pier and check-in time; some tours offer hotel pickup." },
    ],
  },
  {
    slug: "sunset-and-dinner-cruises-in-aruba",
    title: "Sunset and Dinner Cruises in Aruba",
    description:
      "Experience Aruba's most romantic sunset sailing and dinner cruises, featuring golden Caribbean views, gourmet dining, and unforgettable evening moments on the water.",
    subPages: [
      { label: "Best sunset cruises", href: "/sunset-and-dinner-cruises-in-aruba/best-sunset-cruises" },
      { label: "Budget friendly sunset cruises", href: "/sunset-and-dinner-cruises-in-aruba/budget-sunset-cruises" },
      { label: "Dinner cruises", href: "/sunset-and-dinner-cruises-in-aruba/dinner-cruises" },
      { label: "Family-friendly sunset cruises", href: "/sunset-and-dinner-cruises-in-aruba/family-sunset-cruises" },
      { label: "Fun sunset cruises for groups", href: "/sunset-and-dinner-cruises-in-aruba/fun-sunset-cruises" },
      { label: "Romantic sunset sails", href: "/sunset-and-dinner-cruises-in-aruba/romantic" },
    ],
    relatedSlugs: ["catamaran-cruises-in-aruba", "romantic-experiences-in-aruba", "private-and-luxury-tours-in-aruba"],
    about:
      "Sunset and dinner cruises are a highlight of any Aruba trip. Sail along the coast during the golden hour, often with an open bar, and choose between drinks-only sails or full dinner cruises with a meal on board. Options range from intimate catamarans and romantic dinner sails to lively pirate schooners and happy-hour cruises for groups. Most depart 1–2 hours before sunset and last 2–3 hours. Compare dinner vs drinks-only, boat type, and group size to find the right sunset experience.",
    insiderTips: [
      "Book at least a few days ahead in high season—sunset and dinner cruises are popular and fill quickly.",
      "Sunset time changes with the season; cruises adjust departure so you're on the water for the golden hour.",
      "Dinner cruises often have a set menu or buffet; mention dietary needs when you book if possible.",
      "For a quieter, romantic vibe choose a smaller catamaran or dinner sail; for a party atmosphere look for happy-hour or pirate-themed cruises.",
    ],
    whatToExpect: [
      "Check-in at the marina or pickup point; you'll get a safety briefing before boarding.",
      "Sailing along Aruba's coast as the sun goes down. Open bar (and sometimes snacks) on drinks-only sails; dinner cruises include a meal served on board.",
      "Golden-hour views and photo opportunities. Live music or entertainment on many cruises.",
      "Return to the marina in twilight. Most sunset cruises run 2–3 hours from check-in to return.",
    ],
    whoIsThisFor: [
      "Couples looking for a romantic evening on the water.",
      "Families—many sunset cruises are kid-friendly with soft drinks and a relaxed vibe; some offer pirate or themed sails that kids love.",
      "Groups and friends who want a fun happy-hour or dinner sail with open bar.",
      "Anyone who wants to see Aruba's coastline at the most beautiful time of day.",
    ],
    highlights: [
      "Golden-hour sailing along Aruba's coast",
      "Open bar on most sunset cruises (cocktails, beer, wine, soft drinks)",
      "Dinner cruises with buffet or plated meal on board",
      "Catamarans, schooners, and sailboats; romantic to lively options",
    ],
    faqs: [
      { question: "What is included on a sunset dinner cruise in Aruba?", answer: "Most sunset dinner cruises include the sail, a meal (often buffet or plated), drinks (open bar or wine/beer), and sometimes live music or entertainment. Drinks-only sunset cruises typically include open bar and light snacks. Check each operator for exact inclusions." },
      { question: "When is the best time for a sunset cruise in Aruba?", answer: "Sunset times vary by season—roughly 6–7 pm depending on the time of year. Cruises typically depart 1–2 hours before sunset so you're on the water for the golden hour. Operators adjust departure times throughout the year." },
      { question: "How long do sunset cruises in Aruba last?", answer: "Most sunset cruises in Aruba run 2–3 hours from check-in to return. Dinner cruises may be slightly longer to allow time for the meal. Your confirmation will state the exact duration." },
      { question: "Are sunset cruises in Aruba good for families?", answer: "Yes. Many sunset cruises welcome families—soft drinks for kids, open bar for adults, and calm evening waters. Some offer pirate or themed sails that children enjoy. Check age requirements and whether the vibe is romantic-only or family-friendly when you book." },
      { question: "What should I bring on a sunset cruise in Aruba?", answer: "Wear comfortable clothes; a light layer can be useful after sunset. Bring a camera or phone for photos. Most operators provide drinks (and dinner if applicable); you typically don't need to bring food. Leave valuables in your hotel or in a secure bag." },
      { question: "Where do sunset cruises in Aruba depart from?", answer: "Sunset cruises typically depart from marinas in the Palm Beach, Noord, or Oranjestad area. Your booking confirmation will include the exact pier and check-in time. Some tours offer optional hotel pickup for an extra fee." },
    ],
  },
  {
    slug: "snorkeling-and-diving-in-aruba",
    title: "Snorkeling and Diving in Aruba",
    description:
      "Explore Aruba's vibrant marine life with top-rated snorkeling and scuba diving tours, from shallow reef adventures to guided wreck dives in crystal-clear waters.",
    subPages: [
      { label: "Best snorkeling tours", href: "/snorkeling-and-diving-in-aruba/best-snorkeling" },
      { label: "Turtle spotting snorkeling excursion", href: "/snorkeling-and-diving-in-aruba/turtle-spotting-snorkeling-excursion" },
      { label: "Discover snorkeling at Mangel Halto", href: "/snorkeling-and-diving-in-aruba/discover-snorkeling-mangel-halto" },
      { label: "Private snorkeling & boat rides", href: "/snorkeling-and-diving-in-aruba/private-snorkeling-boat-ride" },
      { label: "Scuba diving in Aruba", href: "/snorkeling-and-diving-in-aruba/scuba-diving" },
      { label: "Beginner snorkeling", href: "/snorkeling-and-diving-in-aruba/beginner-snorkeling" },
    ],
    relatedSlugs: ["catamaran-cruises-in-aruba", "water-sports-and-rentals-in-aruba", "things-to-do-in-aruba-with-kids"],
    about:
      "Snorkeling and scuba diving are among the best ways to experience Aruba's clear Caribbean waters. Snorkel tours range from guided reef trips at Mangel Halto and turtle spotting excursions to private boat rides and discover snorkeling for first-timers. Scuba options include discover dives (no certification needed), introductory resort dives, and one- or two-tank boat dives for certified divers. Most snorkel tours include equipment and instruction; dive tours provide gear and briefings. Compare sites, group size, and inclusions to find the right trip.",
    insiderTips: [
      "Book a few days ahead in high season—popular turtle and reef tours fill quickly.",
      "Morning tours often have calmer water and better visibility for snorkeling and diving.",
      "Bring reef-safe sunscreen and a towel; wear swimwear. Operators provide mask, snorkel, and fins.",
      "First-time snorkelers: choose a guided tour with instruction. First-time divers: look for discover scuba or introductory dives—no certification required.",
    ],
    whatToExpect: [
      "Check-in at the meeting point or marina; you'll get a safety briefing and be fitted for gear.",
      "Travel to the site by boat or from shore. Snorkel tours typically visit one or more reefs or turtle spots; dive tours go to reef or wreck sites.",
      "Guided time in the water. Snorkel guides stay with the group; dive tours are with an instructor or dive master.",
      "Return to the start. Snorkel tours usually run 2–4 hours; discover dives and intro dives are shorter; two-tank dives can take a half day.",
    ],
    whoIsThisFor: [
      "First-timers who want to try snorkeling or scuba with equipment and instruction included.",
      "Families—many turtle and reef snorkel tours are kid-friendly; check age limits for diving.",
      "Certified divers who want one- or two-tank boat dives on Aruba's reefs and wrecks.",
      "Couples and groups who prefer private snorkel or boat experiences.",
    ],
    highlights: [
      "Turtle spotting and reef snorkeling (Mangel Halto, Tres Trapi, and more)",
      "Discover scuba and introductory dives—no certification needed",
      "One- and two-tank scuba dives for certified divers",
      "Private snorkeling and boat rides for small groups",
    ],
    faqs: [
      { question: "Where is the best snorkeling in Aruba?", answer: "Popular spots include Mangel Halto (south coast reef), turtle habitats along the coast, Malmok Beach, Boca Catalina, and the Antilla wreck. Many tours combine several sites in one trip. Guided tours take you to the best spots for the day." },
      { question: "Do I need experience to snorkel in Aruba?", answer: "No. Most snorkel tours are suitable for beginners. Operators provide equipment and basic instruction; calm waters make Aruba ideal for first-timers. Mention that you're new when you book so the guide can help you get comfortable." },
      { question: "Do I need to be certified to scuba dive in Aruba?", answer: "No, for discover or introductory dives—these let you try scuba with an instructor and no certification. For one- or two-tank boat dives you need a valid certification (e.g. PADI, SSI) and must show your card at check-in." },
      { question: "What is included on a typical snorkeling or diving tour in Aruba?", answer: "Snorkel tours typically include mask, snorkel, fins, and often a vest or life jacket; guided tours include a guide and instruction. Dive tours include equipment (or you can bring your own), briefing, and dive guide or instructor. Check each listing for exact inclusions and duration." },
      { question: "What should I bring for snorkeling or diving in Aruba?", answer: "Wear swimwear and bring a towel and reef-safe sunscreen. Operators provide snorkel and dive gear unless stated otherwise. For scuba, bring your certification card if you're certified. Avoid wearing sunscreen that harms coral; many operators recommend reef-safe products." },
      { question: "Where do snorkeling and diving tours depart from in Aruba?", answer: "Departure points vary by operator—some leave from marinas, others from beaches or shore. Your booking confirmation will include the exact meeting point and check-in time. Some tours offer optional hotel pickup for an extra fee." },
    ],
  },
  {
    slug: "atv-and-jeep-tours-in-aruba",
    title: "ATV and Jeep Tours in Aruba",
    description:
      "Discover Aruba's rugged desert landscapes, hidden beaches, and the Natural Pool on thrilling ATV, UTV, and jeep safari off-road tours.",
    subPages: [
      { label: "Best ATV tours", href: "/atv-and-jeep-tours-in-aruba/best-atv-tours" },
      { label: "Best UTV tours", href: "/atv-and-jeep-tours-in-aruba/best-utv" },
      { label: "Natural Pool tours", href: "/atv-and-jeep-tours-in-aruba/natural-pool" },
      { label: "ATV desert & coast tours", href: "/atv-and-jeep-tours-in-aruba/atv-desert-tours" },
      { label: "Eco-friendly ATV & EZ Raider", href: "/atv-and-jeep-tours-in-aruba/eco-friendly-atv" },
      { label: "UTV rentals", href: "/atv-and-jeep-tours-in-aruba/utv-rentals" },
    ],
    relatedSlugs: ["island-sightseeing-tours-in-aruba", "water-sports-and-rentals-in-aruba", "private-and-luxury-tours-in-aruba"],
    about:
      "ATV and UTV tours let you explore Aruba's desert, coast, and hidden spots that regular cars can't reach. Options include single- and double-seater ATVs, 2- to 4-seater UTVs, and combo tours that add the Natural Pool, cave pools, Secret Beach, or snorkeling and Aruban lunch. Most tours are half-day (2–4 hours) and run in convoy with a guide. Some include hotel pickup, water, and snacks; others add lunch or a swim stop. You'll need a valid driver's license for most ATV/UTV driving; age and license rules vary by operator.",
    insiderTips: [
      "Book ahead in high season—ATV and UTV tours sell out, especially morning slots.",
      "Wear closed-toe shoes, long pants or clothes you don't mind getting dusty, and bring sunglasses. Avoid loose scarves or long necklaces that could get caught.",
      "Morning tours are often cooler; afternoon can be very hot and dusty. Natural Pool and swim stops are a great way to cool off.",
      "If you don't want to drive, look for UTV options with a guide driving or jeep safaris where the guide drives.",
    ],
    whatToExpect: [
      "Check-in at the operator's base (or hotel pickup if included). You'll sign waivers and get a safety briefing.",
      "Choose your vehicle—single or double ATV, or 2-/3-/4-seater UTV. Helmet and sometimes goggles provided.",
      "Guided off-road ride in convoy with a lead guide. You follow the group at a set pace; no prior ATV or UTV experience needed.",
      "Stops for photos and scenery—often the Natural Pool, cave pools, Secret Beach, north coast desert, or California Lighthouse area.",
      "Swim or snorkel stop on tours that include the Natural Pool, cave pool, or a beach. Bring a swimsuit and towel.",
      "On combo tours: Aruban lunch, snorkeling, or cliff jumping may be included. Check your tour description for what's included.",
      "Return to base (or hotel drop-off). Total duration is typically 2–4 hours for half-day tours; rentals may be half- or full-day.",
    ],
    whoIsThisFor: [
      "Adventure seekers who want to explore Aruba's backcountry and hidden beaches.",
      "Couples and friends—double-seater ATVs and multi-seater UTVs let you share the ride.",
      "Anyone who wants to see the Natural Pool, cave pools, or Secret Beach without a long hike.",
      "Travelers who prefer an active half-day with a mix of driving, scenery, and optional swim or lunch.",
    ],
    highlights: [
      "Off-road ATV and UTV tours across desert and coast",
      "Natural Pool, cave pools, and Secret Beach combos",
      "Single, double, and 2–4 seater options; guided convoy",
      "Tours with snorkeling, swim stops, or Aruban lunch",
    ],
    faqs: [
      { question: "Do I need a license to drive an ATV in Aruba?", answer: "Most ATV and UTV tours require a valid driver's license to drive. Passengers typically don't need one. Age limits (e.g. 18+ to drive, 6+ to ride) vary by operator. Some offer UTVs with a guide driving so you can ride without driving." },
      { question: "What should I bring on an ATV or UTV tour?", answer: "Wear closed-toe shoes, long pants or clothes you don't mind getting dusty, sunglasses, and sunscreen. Many tours include water and sometimes snacks; a few include lunch. Bring a swimsuit and towel if your tour has a Natural Pool or beach stop." },
      { question: "What is the difference between ATV and UTV in Aruba?", answer: "ATVs are typically single or double-seater all-terrain vehicles; UTVs (side-by-sides) seat 2–4 people and often have a cage and seatbelts. Both are used for guided off-road tours. UTVs can be easier for couples or small groups who want to share one vehicle." },
      { question: "Do ATV tours in Aruba go to the Natural Pool?", answer: "Many ATV and UTV tours include a stop at the Natural Pool (Conchi) or nearby cave pools and beaches. Check the tour description—some focus on the Natural Pool and swim, others add snorkeling, Secret Beach, or San Nicolas and Baby Beach." },
      { question: "How long are ATV and UTV tours in Aruba?", answer: "Most ATV and UTV tours run 2–4 hours. Half-day (about 4-hour) tours often include the Natural Pool, cave explorer route, or lunch. Shorter options (2–3 hours) focus on a specific area. Your booking confirmation will state the exact duration." },
      { question: "Where do ATV and UTV tours in Aruba start?", answer: "Tours start at the operator's base, often in the north or near the Natural Pool area. Some operators offer hotel pickup for an extra fee. Your confirmation will include the exact meeting point or pickup details." },
    ],
  },
  {
    slug: "island-sightseeing-tours-in-aruba",
    title: "Island Sightseeing Tours in Aruba",
    description:
      "See the best of Aruba with guided island tours showcasing cultural landmarks, historic sites, scenic viewpoints, and must-visit attractions.",
    subPages: [
      { label: "Best sightseeing tours in Aruba", href: "/island-sightseeing-tours-in-aruba/best-sightseeing-tours" },
      { label: "Half-day island tours", href: "/island-sightseeing-tours-in-aruba/half-day" },
      { label: "Full-day Aruba tours", href: "/island-sightseeing-tours-in-aruba/full-day" },
      { label: "Cultural and history tours", href: "/island-sightseeing-tours-in-aruba/cultural" },
      { label: "Budget & affordable island tours", href: "/island-sightseeing-tours-in-aruba/budget" },
      { label: "Jeep and off-road adventure tours", href: "/island-sightseeing-tours-in-aruba/jeep-offroad" },
    ],
    relatedSlugs: ["atv-and-jeep-tours-in-aruba", "private-and-luxury-tours-in-aruba", "things-to-do-in-aruba-with-kids"],
    about:
      "Island sightseeing tours in Aruba take you to the island's top landmarks—California Lighthouse, Ayo and Casibari rocks, Alto Vista Chapel, Natural Pool, caves, and national park. Options include jeep safaris, bus and van tours, walking tours of Oranjestad, food tours, and private luxury jeep experiences. Half-day and full-day tours are available; many include hotel pickup. Choose a classic island loop, off-road adventure, cultural walk, or food and drink tour to see the best of Aruba.",
    insiderTips: [
      "Book at least a day or two ahead in high season—popular jeep and safari tours fill quickly.",
      "Morning tours are often cooler; full-day tours usually include lunch or a stop where you can eat.",
      "Wear comfortable shoes and bring sunscreen, a hat, and water. Jeep and off-road tours can be dusty.",
      "Walking and food tours are great for exploring Oranjestad on foot; jeep and bus tours cover more ground.",
    ],
    whatToExpect: [
      "Hotel pickup (on many tours) or meet at a central point. Check your confirmation for time and location.",
      "Guided drive or walk—jeep, bus, van, or on foot—with commentary on Aruba's history and sights.",
      "Stops at landmarks such as California Lighthouse, Ayo/Casibari, Alto Vista Chapel, Natural Pool area, caves, or national park—depending on the tour.",
      "Photo opportunities and free time at selected stops. Some tours include a swim stop at the Natural Pool.",
      "On full-day tours: lunch stop or break. On food tours: tastings at local spots.",
      "Return to your hotel or the starting point. Half-day tours typically run 3–4 hours; full-day tours 6–8 hours.",
    ],
    whoIsThisFor: [
      "First-time visitors who want to see Aruba's main landmarks in one day.",
      "Families—bus, van, and jeep tours suit a range of ages; check age requirements for jeep and off-road options.",
      "Culture and history lovers—walking tours and cultural stops bring the island's story to life.",
      "Foodies—Aruba Eats and similar tours combine sightseeing with local tastings.",
    ],
    highlights: [
      "California Lighthouse, Ayo and Casibari, Alto Vista Chapel",
      "Natural Pool, caves, and national park on jeep and safari tours",
      "Oranjestad walking tours and downtown city tours",
      "Food tours, party bus, and private luxury jeep options",
    ],
    faqs: [
      { question: "What are the main sights on an Aruba island tour?", answer: "Tours often include the California Lighthouse, Ayo and Casibari rock formations, Alto Vista Chapel, the Natural Bridge or coastal stops, Natural Pool, caves, and Arikok National Park. Exact stops depend on the tour—jeep tours often cover Natural Pool and caves; bus tours the lighthouse and rock formations." },
      { question: "Are island tours in Aruba good for families?", answer: "Yes. Many sightseeing tours are bus or van-based and suitable for all ages. Jeep and off-road tours may have age or height requirements. Check tour descriptions for age or mobility requirements before you book." },
      { question: "How long are island sightseeing tours in Aruba?", answer: "Half-day tours typically run 3–4 hours; full-day tours 6–8 hours and often include lunch or a break. Walking and food tours are usually 2–4 hours. Your confirmation will state the exact duration." },
      { question: "Do island tours include hotel pickup?", answer: "Many jeep, bus, and van tours include hotel pickup. Walking and food tours often meet at a central point in Oranjestad. Check the tour details and your confirmation for pickup inclusion or extra cost." },
      { question: "What is the difference between a jeep tour and a bus tour in Aruba?", answer: "Jeep tours are off-road or rugged-route experiences—Natural Pool, caves, national park—often in open or semi-open vehicles. Bus and van tours stick to paved roads and cover landmarks like the lighthouse and rock formations in more comfort. Both are guided; choose based on how much adventure you want." },
    ],
  },
  {
    slug: "private-and-luxury-tours-in-aruba",
    title: "Private and Luxury Tours in Aruba",
    description:
      "VIP airport services, private transfers, private boat charters, private jeep tours, and luxury dinner experiences in Aruba. Exclusive and personalized.",
    subPages: [
      { label: "Airport arrival & departure", href: "/private-and-luxury-tours-in-aruba/airport-arrival-departure" },
      { label: "VIP transfers", href: "/private-and-luxury-tours-in-aruba/vip-transfers" },
      { label: "Private boat charter", href: "/private-and-luxury-tours-in-aruba/private-boat-charter" },
      { label: "Private jeep tours", href: "/private-and-luxury-tours-in-aruba/private-jeep-tours" },
      { label: "Luxury dinner experience", href: "/private-and-luxury-tours-in-aruba/luxury-dinner" },
      { label: "Couples & celebrations", href: "/private-and-luxury-tours-in-aruba/couples-celebrations" },
    ],
    relatedSlugs: ["sunset-and-dinner-cruises-in-aruba", "romantic-experiences-in-aruba", "catamaran-cruises-in-aruba", "island-sightseeing-tours-in-aruba"],
    about:
      "Private and luxury tours in Aruba cover VIP airport hosting and transfers, private boat charters for snorkeling and sunset, private jeep tours of the island, and luxury dinner cruises or beach cabana experiences. Book for comfort, privacy, and personalized service.",
    whatToExpect: [
      "VIP airport: meet-and-greet and assistance on arrival or departure so you skip the stress.",
      "Private transfers: door-to-door by luxury SUV or private vehicle, one-way or round-trip.",
      "Private boat charter: your group only—snorkeling, sunset sail, or custom itinerary.",
      "Private jeep: your own jeep and guide for island sights at your pace.",
      "Luxury dinner: exclusive dinner cruise or romantic sunset picnic in a cabana.",
    ],
    whoIsThisFor: [
      "Travelers who want privacy and no shared vehicles or boats.",
      "Couples and small groups celebrating or seeking a premium experience.",
      "Anyone who values time, comfort, and personalized service.",
    ],
    highlights: [
      "VIP airport hosting (arrival and departure)",
      "Private and luxury SUV airport transfers",
      "Private boat charters (snorkeling, sunset)",
      "Private jeep tours of the island",
      "Luxury dinner cruises and beach cabana experiences",
    ],
    faqs: [
      { question: "How much do private tours in Aruba cost?", answer: "Prices vary by group size, duration, and activity. VIP airport hosting, private transfers, and private charters often start in the hundreds of dollars; luxury dinner experiences vary. Check each product for current pricing." },
      { question: "Can I customize a private tour in Aruba?", answer: "Yes. Most private and luxury operators allow custom itineraries, pick-up times, and special requests. Book in advance to arrange details with the operator." },
      { question: "What is VIP airport hosting in Aruba?", answer: "A host meets you at the airport and assists you through arrival (customs, baggage) or departure (check-in, security to gate). First-class, stress-free start or end to your trip." },
      { question: "Are private boat charters only for large groups?", answer: "No. Many private charters suit couples or small groups; you pay for the boat, not per seat. Capacity depends on the vessel—check the product for maximum guests." },
      { question: "What is included in a luxury dinner experience?", answer: "Typically a premium dinner (on a cruise or in a cabana), drinks, and a romantic or exclusive setting. Exact menu and inclusions vary by operator—check the tour details." },
    ],
  },
  {
    slug: "romantic-experiences-in-aruba",
    title: "Romantic Experiences in Aruba",
    description:
      "Romantic experiences in Aruba: sunset sails, dinner cruises, beach cabana picnics, and couple photography. Perfect for honeymoons, proposals, and anniversaries.",
    subPages: [
      { label: "Romantic sunset sails", href: "/romantic-experiences-in-aruba/sunset-sails" },
      { label: "Romantic dinner cruises", href: "/romantic-experiences-in-aruba/dinner-cruises" },
      { label: "Beach cabana & photography", href: "/romantic-experiences-in-aruba/beach-cabana-photography" },
    ],
    relatedSlugs: ["sunset-and-dinner-cruises-in-aruba", "private-and-luxury-tours-in-aruba", "photoshoots-in-aruba"],
    insiderTips: [
      "Book sunset sails and dinner cruises at least a few days ahead in high season—romantic slots fill quickly.",
      "Golden hour (about an hour before sunset) is ideal for photography and cabana picnics; ask your operator for the best time.",
      "For dinner cruises, dress smart-casual or resort evening wear—you'll feel more special and photos will look great.",
      "Tell the operator if you're planning a proposal or anniversary; many can arrange flowers, champagne, or a private moment.",
      "For beach photoshoots, wear solid colors or soft patterns and avoid busy prints; bring a change of outfit if you want variety.",
    ],
    about:
      "Romantic experiences in Aruba include intimate sunset sails, dinner cruises with a meal on the water, luxury cabana picnics on Eagle Beach, and professional couple or engagement photography. Whether you want a sail for two, a dinner under the stars, or a photoshoot on the beach, there's an experience to match.",
    whatToExpect: [
      "Sunset sails: intimate or small-group sails into the golden hour with drinks—Palm Pleasure or Arusun catamaran.",
      "Dinner cruises: sail with a full dinner and open bar—exclusive dinner cruise or Red Sail's catamaran dinner cruise.",
      "Beach cabana & photography: private cabana picnic on Eagle Beach, or combine cabana picnic with a professional photoshoot; or book a dedicated couple or engagement photo session.",
    ],
    whoIsThisFor: [
      "Couples and honeymooners who want memorable experiences.",
      "Anyone planning a proposal or celebrating an anniversary.",
      "Travelers who want professional photos from their Aruba trip.",
    ],
    highlights: [
      "Romantic sunset sails (intimate and small-group options)",
      "Dinner cruises with dinner and drinks on the water",
      "Luxury cabana picnics on Eagle Beach",
      "Beach photoshoot and picnic in a cabana",
      "Couple, engagement and family photography",
    ],
    faqs: [
      { question: "What are the most romantic things to do in Aruba?", answer: "Sunset sails (e.g. Palm Pleasure, Arusun), dinner cruises (exclusive or Red Sail catamaran), luxury cabana picnics on Eagle Beach, and professional couple or engagement photography are among the top romantic experiences. Many operators tailor to proposals and anniversaries." },
      { question: "Is Aruba good for a honeymoon?", answer: "Yes. Aruba is a top honeymoon destination with calm weather, safe environment, and many romantic tours—sunset sails, dinner cruises, beach cabanas, and photography. Book in advance for popular dates." },
      { question: "What is the difference between a sunset sail and a dinner cruise?", answer: "Sunset sails focus on sailing into the golden hour with drinks (and sometimes snacks)—no full dinner. Dinner cruises include a full meal on board plus sailing and drinks. Both can be romantic; choose based on whether you want to eat on the boat or elsewhere." },
      { question: "Can we get professional photos in Aruba?", answer: "Yes. Options include a beach cabana experience with photoshoot included, or a dedicated couple, engagement, or family photography session at the beach or another location. Packages vary by photographer and inclusions." },
      { question: "Where are the best romantic beach experiences in Aruba?", answer: "Eagle Beach is a top spot for luxury cabana picnics and sunset setups. Many photography sessions also take place on Eagle Beach, Palm Beach, or other scenic spots. Your operator will confirm the exact location." },
    ],
  },
  {
    slug: "horseback-riding-in-aruba",
    title: "Horseback Riding in Aruba",
    description:
      "Ride along Aruba's scenic coastline and trails with guided horseback tours—beach rides, sunset rides, and trips to the Natural Pool, Alto Vista Chapel, and Natural Bridge.",
    subPages: [
      { label: "Beach horseback rides", href: "/horseback-riding-in-aruba/beach-rides" },
      { label: "Sunset horseback tours", href: "/horseback-riding-in-aruba/sunset" },
      { label: "Natural Pool & scenic rides", href: "/horseback-riding-in-aruba/natural-pool-scenic" },
    ],
    relatedSlugs: ["romantic-experiences-in-aruba", "island-sightseeing-tours-in-aruba", "things-to-do-in-aruba-with-kids"],
    about:
      "Horseback riding in Aruba lets you explore the coast, countryside, and landmarks on horseback. Options include small-group beach rides, ecological and beach tours (great for cruise guests), sunset rides, and scenic rides to the Natural Pool, Alto Vista Chapel, or Wariruri Natural Bridge. Most tours welcome beginners; one Natural Bridge tour is for advanced riders only.",
    insiderTips: [
      "Book at least a day or two ahead in high season—beach and sunset rides fill quickly.",
      "Wear long pants and closed-toe shoes; avoid flip-flops and loose clothing that could get caught.",
      "Sunset rides are cooler and very popular with couples—book early for the best times.",
      "The Natural Pool and Natural Bridge rides can be rugged; the Wariruri tour is for advanced riders only.",
      "If you're on a cruise, look for shore excursion horseback tours with port pickup and ship-time guarantees.",
    ],
    whatToExpect: [
      "Check in at the ranch. Safety briefing and horse assignment—you'll be matched to a horse that fits your experience.",
      "Guided ride—beach, countryside, sunset, or scenic route to the Natural Pool, Alto Vista Chapel, or Natural Bridge.",
      "Return to the ranch. Duration varies from about 1–2 hours to 3 hours for the advanced Natural Bridge ride.",
    ],
    whoIsThisFor: [
      "Beginners who want a first-time beach or sunset ride with instruction.",
      "Couples looking for a romantic sunset ride.",
      "Experienced riders who want a longer, challenging ride to the Natural Bridge.",
      "Cruise passengers looking for a shore excursion.",
    ],
    highlights: [
      "Beach and small-group horseback rides",
      "Sunset rides (golden hour and cooler temperatures)",
      "Rides to the Natural Pool, Alto Vista Chapel, and Natural Bridge",
      "Shore excursion options for cruise guests",
      "Beginner-friendly options; one advanced riders only",
    ],
    faqs: [
      { question: "Do I need experience to go horseback riding in Aruba?", answer: "No. Most beach, sunset, and ecological rides welcome beginners—you'll get a briefing and be matched with a suitable horse. The Wariruri Natural Bridge 3-hour ride is for advanced riders only." },
      { question: "What should I wear for horseback riding in Aruba?", answer: "Long pants and closed-toe shoes are recommended. Bring sunscreen and a hat. Avoid loose clothing that could get caught. For sunset rides, a light layer is useful." },
      { question: "Are there sunset horseback rides in Aruba?", answer: "Yes. Several operators offer sunset rides timed for the golden hour—often including rock formations, countryside, and beach. Popular with couples." },
      { question: "Can I ride to the Natural Pool on horseback?", answer: "Yes. There is a dedicated Natural Pool horseback riding tour that takes you to Conchi (the Natural Pool) on Aruba's north coast. Terrain can be rugged; check if it's suitable for your level." },
      { question: "Is horseback riding in Aruba good for cruise ship passengers?", answer: "Yes. Some tours are offered as shore excursions with timing and pickup suited to cruise schedules. Check the product for port pickup and return guarantees." },
    ],
  },
  {
    slug: "photoshoots-in-aruba",
    title: "Photoshoots in Aruba",
    description:
      "Professional photoshoots in Aruba: sunset and golden hour beach, family and couple sessions, clear kayak shoots, underwater photography, and fun paparazzi-style shoots.",
    subPages: [
      { label: "Best photoshoots in Aruba", href: "/photoshoots-in-aruba/best-photoshoots" },
      { label: "Sunset photoshoots", href: "/photoshoots-in-aruba/sunset" },
      { label: "Family photoshoots", href: "/photoshoots-in-aruba/family" },
      { label: "Clear kayak shoots", href: "/photoshoots-in-aruba/clear-kayak" },
      { label: "Underwater shoots", href: "/photoshoots-in-aruba/underwater" },
      { label: "Fun shoots", href: "/photoshoots-in-aruba/fun-shoots" },
    ],
    relatedSlugs: ["romantic-experiences-in-aruba", "things-to-do-in-aruba-with-kids", "snorkeling-and-diving-in-aruba"],
    about:
      "Photoshoots in Aruba range from classic sunset and golden hour beach sessions to family and couple photography, clear kayak shoots (including luxury floral setups), underwater photos and video (turtle snorkeling or scuba with a photographer), and fun options like nighttime paparazzi-style flash shoots. Book a session that fits your style and get professional images from your trip.",
    insiderTips: [
      "Book at least a few days to a week ahead in high season—top photographers fill quickly.",
      "Golden hour (about an hour before sunset) gives the best light for beach and sunset shoots.",
      "Wear solid colors or soft patterns; avoid busy prints for the most flattering results.",
      "For clear kayak shoots, bring a change of clothes or towel; you may get a bit wet.",
      "Underwater and scuba shoots require comfort in the water; scuba option is for certified divers only.",
    ],
    whatToExpect: [
      "Meet your photographer (or operator for kayak/underwater) at the agreed time and location.",
      "Session tailored to the type of shoot—beach, kayak, underwater, or paparazzi-style.",
      "Receive your edited images (and video when included) as per the package—often within 1–2 weeks.",
    ],
    whoIsThisFor: [
      "Couples and families who want professional vacation or engagement photos.",
      "Anyone who wants a unique experience (clear kayak, underwater, paparazzi-style).",
      "Certified divers who want underwater photos; snorkelers who want turtle shots with visuals.",
    ],
    highlights: [
      "Sunset and golden hour beach photoshoots",
      "Family, couple and engagement photography",
      "Clear kayak and clear canoe shoots (including LUX floral and cocktails)",
      "Underwater photography (turtle snorkel or private scuba with photographer)",
      "Fun nighttime paparazzi-style flash shoots",
    ],
    faqs: [
      { question: "When is the best time for a photoshoot in Aruba?", answer: "Early morning or late afternoon (golden hour) offer the best light and fewer crowds. Sunset on the beach is the most popular. Clear kayak and underwater shoots can be done in daylight; paparazzi-style is at night." },
      { question: "How far in advance should I book a photoshoot in Aruba?", answer: "Popular photographers book up in high season. Booking a few days to a few weeks ahead is wise; for weddings or special dates, a month or more is safer." },
      { question: "What types of photoshoots are available in Aruba?", answer: "Beach and sunset sessions, family and couple photography, clear kayak shoots (including luxury floral setups), underwater photos (turtle snorkel or scuba with photographer), and fun paparazzi-style nighttime shoots." },
      { question: "Do I get all the photos?", answer: "Packages include a set number of edited digital images (and sometimes video). The exact number and delivery method vary by product—check when you book." },
      { question: "Are clear kayak photoshoots worth it?", answer: "Yes for a unique look—transparent kayak shots are distinctive and popular. Options range from simple clear canoe shoots to LUX setups with floral decor and cocktails." },
    ],
  },
  {
    slug: "airport-transfers-in-aruba",
    title: "Airport Transfers in Aruba",
    description:
      "Book reliable private and luxury airport transfers in Aruba—one-way, round trip, and VIP SUV service to Palm Beach, Eagle Beach, Oranjestad, and beyond.",
    subPages: [
      { label: "Private airport transfers", href: "/airport-transfers-in-aruba/private-airport-transfers" },
      { label: "Round trip airport transfers", href: "/airport-transfers-in-aruba/round-trip-airport-transfers" },
      { label: "One-way airport transfers", href: "/airport-transfers-in-aruba/one-way-airport-transfers" },
      { label: "VIP & luxury airport transfers", href: "/airport-transfers-in-aruba/vip-luxury-airport-transfers" },
      { label: "Airport transfers to Palm & Eagle Beach", href: "/airport-transfers-in-aruba/airport-transfers-palm-eagle-beach" },
      { label: "Airport transfer with tour", href: "/airport-transfers-in-aruba/airport-transfer-with-tour" },
    ],
    relatedSlugs: ["private-and-luxury-tours-in-aruba", "island-sightseeing-tours-in-aruba"],
    about:
      "Aruba airport transfers take the stress out of arrival and departure. Pre-book a private car, luxury SUV, or round-trip service for fixed pricing and a meet-and-greet at Queen Beatrix International Airport. Most services cover the hotel strip (Palm Beach, Eagle Beach, Noord), Oranjestad, and beyond. One-way and round-trip options are available; some operators combine transfer with a short island tour. Book in advance for the best rates and guaranteed availability.",
    insiderTips: [
      "Book at least 24–48 hours ahead so the operator can confirm your flight and meet you on time.",
      "Have your flight number and hotel name ready when you book—drivers often track flights for delays.",
      "Round-trip transfers often cost less per person than two one-ways and lock in both legs.",
      "If you have a lot of luggage or a group, choose a private or SUV option for comfort.",
    ],
    whatToExpect: [
      "After you book, you'll receive a confirmation with meeting instructions (e.g. exit customs, look for a sign with your name).",
      "On arrival: your driver meets you at the airport (often with a sign), helps with bags, and takes you directly to your hotel or address.",
      "On departure: pickup at your hotel at an agreed time; the driver takes you to the airport for your flight.",
      "Vehicles are private cars or SUVs unless you book a shared shuttle. Travel time to the hotel strip is typically 15–25 minutes.",
    ],
    whoIsThisFor: [
      "Travelers who want a hassle-free start and end to their trip without haggling for taxis.",
      "Families and groups with luggage who need space and a fixed price.",
      "Anyone staying in Palm Beach, Eagle Beach, Noord, or Oranjestad who wants door-to-door service.",
      "Visitors who prefer to lock in transfer cost before they fly.",
    ],
    highlights: [
      "Private and luxury SUV options from Queen Beatrix International Airport",
      "One-way and round-trip transfers to hotels and addresses island-wide",
      "Meet-and-greet at the airport; no waiting in taxi lines",
      "Fixed pricing when you pre-book; some operators offer transfer + tour combos",
    ],
    faqs: [
      { question: "How do I get from Aruba airport to my hotel?", answer: "You can pre-book a private transfer, luxury SUV, or shared shuttle. Pre-booking is recommended for fixed pricing and a meet-and-greet at the airport. Your driver will be waiting with a sign and take you directly to your hotel." },
      { question: "How long does the transfer from Aruba airport to the hotel strip take?", answer: "Most hotels in Palm Beach, Eagle Beach, and Noord are 15–25 minutes from Queen Beatrix International Airport. Oranjestad is about 10–15 minutes. Travel time depends on your exact location and traffic." },
      { question: "Should I book a one-way or round-trip airport transfer in Aruba?", answer: "Round-trip is convenient and often better value—you lock in both arrival and departure. One-way is useful if you're only booking an arrival transfer (e.g. you have a rental car for the rest of the trip) or if your departure plans are uncertain." },
      { question: "Are private airport transfers in Aruba worth it?", answer: "Yes for comfort, fixed pricing, and no wait. Your driver meets you at the airport, helps with bags, and takes you straight to your hotel. Especially worthwhile for families, groups, or anyone with lots of luggage." },
      { question: "Do Aruba airport transfers include flight tracking?", answer: "Many operators track your flight and adjust pickup time if you're delayed. Provide your flight number when you book so they can meet you even when flights are late." },
    ],
  },
  {
    slug: "sea-glass-island-aruba",
    title: "Sea Glass Island in Aruba",
    description:
      "Learn how to visit Sea Glass Island in Aruba, what to expect, and the best guided tours to experience this unique and colorful coastal attraction.",
    subPages: [
      { label: "How to get to Sea Glass Island", href: "/sea-glass-island-aruba/how-to-get-there" },
      { label: "Best Sea Glass Island tours", href: "/sea-glass-island-aruba/best-tours" },
      { label: "What to expect", href: "/sea-glass-island-aruba/what-to-expect" },
    ],
    relatedSlugs: ["snorkeling-and-diving-in-aruba", "catamaran-cruises-in-aruba", "water-sports-and-rentals-in-aruba"],
    faqs: [
      { question: "What is Sea Glass Island in Aruba?", answer: "Sea Glass Island (also known as Renaissance Island or a nearby beach) is known for sea glass washed ashore. Some tours include it as a stop." },
      { question: "Can I visit Sea Glass Island on my own?", answer: "Access depends on the location. Some areas are reachable by boat tour only. Check current tour options and access rules." },
    ],
  },
  {
    slug: "water-sports-and-rentals-in-aruba",
    title: "Water Sports and Rentals in Aruba",
    description:
      "Discover the best water sports in Aruba, including jet ski rentals, parasailing, kayaking, paddleboarding, and other exciting ocean activities.",
    subPages: [
      { label: "Jet ski rentals", href: "/water-sports-and-rentals-in-aruba/jet-ski" },
      { label: "Parasailing", href: "/water-sports-and-rentals-in-aruba/parasailing" },
      { label: "Kayaking and paddleboarding", href: "/water-sports-and-rentals-in-aruba/kayak-paddleboard" },
    ],
    relatedSlugs: ["snorkeling-and-diving-in-aruba", "atv-and-jeep-tours-in-aruba", "things-to-do-in-aruba-with-kids"],
    faqs: [
      { question: "What water sports are available in Aruba?", answer: "Jet skis, parasailing, kayaking, paddleboarding, windsurfing, kitesurfing, and banana boats are widely available. Many operators are on the main beaches." },
      { question: "Do I need to book water sports in Aruba in advance?", answer: "Walk-ups are often possible, but booking ahead secures your slot and can save money. Popular activities fill up in peak season." },
    ],
  },
  {
    slug: "things-to-do-in-aruba-with-kids",
    title: "Family Activities in Aruba",
    description:
      "Find the best family-friendly activities in Aruba, from snorkeling adventures and island tours to fun attractions perfect for kids of all ages.",
    subPages: [
      { label: "Best family snorkeling", href: "/things-to-do-in-aruba-with-kids/snorkeling" },
      { label: "Island tours for families", href: "/things-to-do-in-aruba-with-kids/island-tours" },
      { label: "Water activities for kids", href: "/things-to-do-in-aruba-with-kids/water-activities" },
    ],
    relatedSlugs: ["snorkeling-and-diving-in-aruba", "water-sports-and-rentals-in-aruba", "island-sightseeing-tours-in-aruba"],
    faqs: [
      { question: "Is Aruba good for families?", answer: "Yes. Aruba is family-friendly with calm seas, safe environment, and many tours and activities suitable for children. Operators often have age-appropriate options." },
      { question: "What are the best activities for kids in Aruba?", answer: "Snorkeling in calm bays, glass-bottom boat tours, jeep safaris, horseback riding, and beach activities are popular. Many tours offer family discounts." },
    ],
  },
];

const slugSet = new Set(pillars.map((p) => p.slug));

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

export function isPillarSlug(slug: string): boolean {
  return slugSet.has(slug);
}

export function getRelatedPillars(pillar: Pillar): Pillar[] {
  return pillar.relatedSlugs
    .map((s) => getPillarBySlug(s))
    .filter((p): p is Pillar => p !== undefined);
}
