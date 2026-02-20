/**
 * Viator product codes per pillar. First 4 = top picks (large cards); next 6 = "More options" (smaller cards).
 * Same bulk API call fetches all; pillar template splits by position.
 */
export const pillarProductCodes: Record<string, string[]> = {
  "catamaran-cruises-in-aruba": [
    "119085P1",        // Top pick: Catamaran Dolphin snorkeling
    "2785MORSNORKEL",  // Top pick: Aruba Lunch and Snorkel Half-Day Cruise
    "6593P7",          // Top pick: Luxury Lagoon Cruise
    "8936P1",          // Top pick: Aruba Catamaran Sail with Snorkeling
    "444239P8",        // More: Tropical Sailing Experience with BBQ Lunch or Dinner
    "47607P3",         // More: Aruba Special Champagne Brunch
    "47607P2",         // More: Aruba Afternoon Sailing Snorkeling
    "37387P3",         // More: Afternoon Pirate Sail and Snorkel Cruise
    "2785AFTSNORKEL",  // More: Catalina Bay and Antilla Shipwreck Snorkel Cruise
    "6593P8",          // More: Aruba Sailing and Snorkeling Experience
  ],
  "sunset-and-dinner-cruises-in-aruba": [
    "2785DINNER",      // Top pick: Aruba Dinner Cruise by Catamaran
    "8936P5",          // Top pick: Aruba Sunset Sail – The Arusun Catamaran
    "245508",          // Top pick: Palm Pleasure Sunset Sail
    "119085P2",        // Top pick: Catamaran Dolphin Sunset Cruise
    "6593DINNER",      // More: Aruba Sunset Cruise and Seaside Dinner
    "47607P4",         // More: Aruba Happy Hour Sunset Sail
    "6593P10",         // More: Aruba Sunset Sail Experience
    "2785SUNSET",      // More: Aruba Sunset Catamaran Cruise
    "37387P2",         // More: Sunset Pirate Cruise in Aruba
    "6593P14",         // More: Havanas Sunset Cruise
  ],
  "snorkeling-and-diving-in-aruba": [
    "325347P2",        // Top pick: Discover Scubadiving on Aruba's reef
    "186518P5",        // Top pick: Discover Snorkeling Mangel Halto
    "325347P3",        // Top pick: Turtle spotting snorkeling excursion
    "5567676P3",       // Top pick: Aruba Turtle Spotting Snorkeling Adventure
    "5621222P1",       // More: Private Snorkel and Turtle Spotting
    "2785DIVE",        // More: Red Sail Sports One or Two Tank Scuba Dive
    "15815P2",         // More: South Aruba 2 Tank Dive Experience
    "2785RESORT",      // More: Introductory Diving in Aruba
    "485227P3",        // More: Private Turtle Snorkeling Tres Trapi
    "409014P1",        // More: Private snorkeling and boat ride
    "47607P8",         // More: Private Snorkeling Trip
    "472918P1",        // More: Turtle Snorkeling Dive In and Discover
    "444239P1",        // More: Angelfish Snorkel and Brunch
  ],
  "atv-and-jeep-tours-in-aruba": [
    "6841P7",          // Top pick: Natural Pool and Cave Explorer
    "6687ATV",         // Top pick: Aruba ATV Tour
    "137607P10",       // Top pick: Aruba ATV Tours Single and Double Seater 4-Hour Tour
    "47774P3",         // Top pick: Aruba's Secret Beach and Cave Pool UTV and ATV Adventure
    "137607P12",       // More: Aruba UTV Tours With Natural Pool Swim 2-3-and-4-Seater
    "33158P1",         // More: ATV off-road tour including Natural Pool snorkeling
    "115682P2",        // More: UTV rental
    "109524P2",        // More: 2 SEATER UTV
    "324189P1",        // More: Offroad and Snorkeling Adventure with Aruban Lunch
    "324189P3",        // More: EZ Raider San Nicolas Art Murals and Baby Beach Snorkeling
  ],
  "island-sightseeing-tours-in-aruba": [
    "6593P16",         // Top pick: Aruba Natural Wonders Jeep Tour Caves and Natural Pool
    "7389P1",          // Top pick: Aruba Island Sightseeing Tour
    "137607P19",       // Top pick: Aruba Private Luxury Jeep Tours
    "441143P1",        // Top pick: National Park Safari Tour
    "62666P1",         // More: Aruba Downtown City Walking Tour
    "39473P2",         // More: Aruba Countrysides Tour
    "39473P4",         // More: Off-road Adventure Tour of Aruba
    "5555987P1",       // More: Aruba Eats Food Tour
    "446074P1",        // More: Uncle Howie Tour
    "367744P1",        // More: Party bus with live DJ barhopping
  ],
  "photoshoots-in-aruba": [
    "5628877P6",        // Top pick: Aruba Golden Hour Beach Photoshoot
    "5616292P5",        // Top pick: Family Couple and Engagement Photography
    "474314P1",         // Top pick: Clear Kayak Shoot LUX
    "5563642P1",        // More: Professional Sunset Photoshoot
    "5562515P2",        // More: Capture Memories Lifestyle Photography
    "400174P2",         // More: Clear Canoe Photoshoot + Video
    "472918P1",         // More: Turtle Snorkeling with Photo/Video
    "325347P4",         // More: Private Scuba with Photographer
    "296594P4",         // More: Nighttime Paparazzi Flash
    "5574243P1",        // More: Sunset Photoshoot Professional Beach
  ],
  "horseback-riding-in-aruba": [
    "7927P1",          // Top pick: Small Group Beach Tour
    "14261P1",         // Top pick: Natural Pool Horseback Riding
    "13835P20",        // Top pick: Sunset Rock formation Countryside and Beach
    "7927P13",         // More: Ecological and Beach
    "13835P15",        // More: Sunset Horseback ride
    "13835P2",         // More: Alto Vista Chapel
    "13835P16",        // More: Wariruri Natural Bridge Advanced
  ],
  "romantic-experiences-in-aruba": [
    "6593P11",         // Top pick: Exclusive Dinner Cruise
    "5493518P1",       // Top pick: Eagle Beach Romantic Sunset Picnic Cabana
    "245508",          // Top pick: Palm Pleasure Sunset Sail
    "2785DINNER",      // More: Dinner Cruise Catamaran
    "8936P5",          // More: Arusun Sunset Sail
    "5493518P2",       // More: Beach Romantic Sunset Photoshoot Picnic Cabana
    "5616292P5",       // More: Family Couple Engagement Photography
  ],
  "private-and-luxury-tours-in-aruba": [
    "171319P1",        // Top pick: VIP Airport Hosting Arrival
    "171319P2",        // Top pick: VIP Airport Hosting Departure
    "6687P7",          // Top pick: VIP Luxury SUV Airport Transfer
    "5492822P1",       // Top pick: Private Round Trip Airport Transfer
    "5595542P1",       // More: Private Aruba Charter Snorkeling and Sunset
    "62666P2",         // More: Freedom Charters
    "5585429P11",      // More: Private Jeep Tour Palm Eagle
    "350808P2417",     // More: Aruba Private Jeep Tour Attractions
    "6593P11",         // More: Exclusive Dinner Cruise
    "5493518P1",       // More: Eagle Beach Romantic Sunset Picnic Cabana
  ],
};

/** Returns all product codes for the pillar; same list is used for one bulk API call. First 4 = top picks, rest = more options. */
export function getProductCodesForPillar(pillarSlug: string): string[] {
  const codes = pillarProductCodes[pillarSlug];
  if (!codes || codes.length === 0) return [];
  return codes;
}
