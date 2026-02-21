/**
 * Static snapshot of Viator-style product data for category "Popular choices" cards.
 * Used when the Viator API is unavailable (e.g. production without key or API failure)
 * so production shows the same tour cards as localhost.
 *
 * Shape matches ViatorProductSummary (title, fromPriceDisplay, rating, reviewCount, etc.).
 * productUrl: internal link when we have a listing; else from dump (productUrl) or getCategoryBookUrl().
 */
import type { ViatorProductSummary } from "@/lib/viator-api";
import { getListingByProductCode } from "@/data/listings";
import { getCategoryBookUrl, getViatorProductBookUrl } from "@/lib/booking";

/** Viator API snapshot: run `node scripts/dump-static-product-summaries.mjs` locally (with VIATOR_API_KEY in .env.local) to fill this file. Images and prices are taken from Viator only via this dump—no placeholders. Production then shows Viator titles, prices, ratings, and images without calling the API at runtime. */
import generatedStatic from "./staticProductSummariesGenerated.json";

const generatedByCode = generatedStatic as Record<
  string,
  { title: string; fromPriceDisplay: string; rating: number; reviewCount: number; imageUrl: string | null; freeCancellation: boolean; productUrl?: string | null }
>;

/**
 * Returns the Viator booking URL for a product in www.viator.com format (not shop.live.rc.viator.com).
 * Use for "View options & book" on single tour pages and anywhere we need a product booking link.
 */
export function getViatorProductUrl(productCode: string): string {
  return getViatorProductBookUrl(productCode);
}

/** Static card data per product code (fallback when no generated snapshot). */
const staticByCode: Record<
  string,
  {
    title: string;
    fromPriceDisplay: string;
    rating: number;
    reviewCount: number;
    imageUrl?: string | null;
    freeCancellation?: boolean;
  }
> = {
  // Catamaran (first 4 = top picks – real data so production matches localhost)
  "119085P1": {
    title: "Dolphin Catamaran Snorkel and Sail with Open Bar",
    fromPriceDisplay: "Price from $44",
    rating: 4.7,
    reviewCount: 2382,
    imageUrl: null,
    freeCancellation: true,
  },
  "2785MORSNORKEL": {
    title: "Half-Day Snorkel Sail Tour with Caribbean Lunch",
    fromPriceDisplay: "Price from $85",
    rating: 4.8,
    reviewCount: 720,
    imageUrl: null,
    freeCancellation: true,
  },
  "6593P7": {
    title: "Luxury Lagoon Cruise with Onboard Chef and Signature Cocktails",
    fromPriceDisplay: "Price from $149",
    rating: 4.8,
    reviewCount: 248,
    imageUrl: null,
    freeCancellation: true,
  },
  "8936P1": {
    title: "Arusun Catamaran Sail with Snorkeling in Aruba",
    fromPriceDisplay: "Price from $35",
    rating: 4.8,
    reviewCount: 2449,
    imageUrl: null,
    freeCancellation: true,
  },
  // Catamaran more options
  "444239P8": {
    title: "Tropical Sailing Experience with BBQ Lunch or BBQ Dinner in Aruba",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "47607P3": {
    title: "Premium Catamaran Morning Sail: Snorkeling, Mimosas and Brunch",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "47607P2": {
    title: "Premium Catamaran Afternoon Sail: Snorkeling and Lunch",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "37387P3": {
    title: "Aruba Jolly Pirate Afternoon Sail with Snorkeling",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "2785AFTSNORKEL": {
    title: "Antilla Shipwreck and Catalina Bay Snorkel Sail",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "6593P8": {
    title: "Iconic Aruba Sail and Snorkel Experience",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  // Sunset and dinner (first 4)
  "2785DINNER": {
    title: "Aruba Dinner Cruise by Catamaran",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "8936P5": {
    title: "Aruba Sunset Sail – The Arusun Catamaran",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "245508": {
    title: "Palm Pleasure Sunset Sail",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "119085P2": {
    title: "Catamaran Dolphin Sunset Cruise in Aruba",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  // Sunset more
  "6593DINNER": {
    title: "Aruba Sunset Cruise and Seaside Dinner",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "47607P4": {
    title: "Aruba Happy Hour Sunset Sail",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "6593P10": {
    title: "Aruba Sunset Sail Experience",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "2785SUNSET": {
    title: "Aruba Sunset Catamaran Cruise",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "37387P2": {
    title: "Sunset Pirate Cruise in Aruba",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  "6593P14": {
    title: "Havanas Sunset Cruise",
    fromPriceDisplay: "Price from (see options)",
    rating: 0,
    reviewCount: 0,
    imageUrl: null,
  },
  // Snorkeling
  "325347P2": { title: "Discover Scuba Diving on Aruba's Reef", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "186518P5": { title: "Discover Snorkeling Mangel Halto", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "325347P3": { title: "Turtle Spotting Snorkeling Excursion", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5567676P3": { title: "Aruba Turtle Spotting Snorkeling Adventure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // ATV
  "6841P7": { title: "Natural Pool and Cave Explorer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "6687ATV": { title: "Aruba ATV Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "137607P10": { title: "Aruba ATV Tours Single and Double Seater 4-Hour Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "47774P3": { title: "Aruba's Secret Beach and Cave Pool UTV and ATV Adventure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Island sightseeing
  "6593P16": { title: "Aruba Natural Wonders Jeep Tour Caves and Natural Pool", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "7389P1": { title: "Aruba Island Sightseeing Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "137607P19": { title: "Aruba Private Luxury Jeep Tours", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "441143P1": { title: "National Park Safari Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Photoshoots
  "5628877P6": { title: "Aruba Golden Hour Beach Photoshoot", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5616292P5": { title: "Family Couple and Engagement Photography", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "474314P1": { title: "Clear Kayak Shoot LUX", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5563642P1": { title: "Professional Sunset Photoshoot", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Horseback
  "7927P1": { title: "Small Group Beach Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "14261P1": { title: "Natural Pool Horseback Riding", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "13835P20": { title: "Sunset Rock Formation Countryside and Beach", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "7927P13": { title: "Ecological and Beach Horseback Tour", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Romantic
  "6593P11": { title: "Exclusive Dinner Cruise", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5493518P1": { title: "Eagle Beach Romantic Sunset Picnic Cabana", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5493518P2": { title: "Beach Romantic Sunset Photoshoot Picnic Cabana", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Private & luxury
  "171319P1": { title: "VIP Airport Hosting Arrival", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "171319P2": { title: "VIP Airport Hosting Departure", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "6687P7": { title: "VIP Luxury SUV Airport Transfer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  "5492822P1": { title: "Private Round Trip Airport Transfer", fromPriceDisplay: "Price from (see options)", rating: 0, reviewCount: 0, imageUrl: null },
  // Airport transfers (Aruba) — fallback until you run dump; run `node scripts/dump-static-product-summaries.mjs` for Viator images & live prices
  "12431P5": { title: "Private Airport Transportation Services", fromPriceDisplay: "Price from $45", rating: 0, reviewCount: 0, imageUrl: null },
  "2455AUAAPTRND": { title: "Roundtrip Aruba Airport Transfer", fromPriceDisplay: "Price from $75", rating: 0, reviewCount: 0, imageUrl: null },
  "332620P2": { title: "Private Transfers", fromPriceDisplay: "Price from $40", rating: 0, reviewCount: 0, imageUrl: null },
  "242476P1": { title: "AyCaramba Transfer and Private Tour Aruba", fromPriceDisplay: "Price from $120", rating: 0, reviewCount: 0, imageUrl: null },
  "3046AUAAPTRND": { title: "Roundtrip Aruba Airport Private Transfer", fromPriceDisplay: "Price from $80", rating: 0, reviewCount: 0, imageUrl: null },
  "5597840P1": { title: "Aruba Private Airport Transfer", fromPriceDisplay: "Price from $42", rating: 0, reviewCount: 0, imageUrl: null },
  "7389P5": { title: "One-Way Private Airport Transfer", fromPriceDisplay: "Price from $38", rating: 0, reviewCount: 0, imageUrl: null },
  "5568850P2": { title: "Private Airport Transfers", fromPriceDisplay: "Price from $40", rating: 0, reviewCount: 0, imageUrl: null },
};

/**
 * Returns static product summaries for the given product codes and category.
 * Used when the Viator API returns no data so production shows the same cards as localhost.
 * Builds productUrl: internal link when we have a listing; else Viator product URL from dump (productUrl) or category URL.
 */
export function getStaticProductSummaries(
  productCodes: string[],
  categorySlug: string
): ViatorProductSummary[] {
  const out: ViatorProductSummary[] = [];
  const categoryBookUrl = getCategoryBookUrl(categorySlug);
  for (const code of productCodes) {
    const generated = generatedByCode[code];
    const fallback = staticByCode[code];
    const data = generated ?? fallback;
    if (!data) continue;
    const listing = getListingByProductCode(categorySlug, code);
    const title = listing?.seoTitle ?? data.title;
    const productUrl = listing
      ? `/${categorySlug}/${listing.slug}`
      : getViatorProductBookUrl(code);
    out.push({
      productCode: code,
      title,
      productUrl,
      fromPriceDisplay: data.fromPriceDisplay,
      reviewCount: data.reviewCount,
      rating: data.rating,
      imageUrl: data.imageUrl ?? null,
      freeCancellation: data.freeCancellation ?? false,
    });
  }
  return out;
}
