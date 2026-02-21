/**
 * Unified tour listings module for categories with custom listing pages.
 * Aggregates catamaran, sunset, snorkeling, and ATV listings for routing and display.
 */
import type { TourListing } from "./catamaranListings";
import {
  catamaranCategorySlug,
  catamaranListings,
} from "./catamaranListings";
import {
  sunsetCategorySlug,
  sunsetListings,
} from "./sunsetListings";
import {
  snorkelingCategorySlug,
  snorkelingListings,
} from "./snorkelingListings";
import {
  atvCategorySlug,
  atvListings,
} from "./atvListings";
import {
  islandSightseeingCategorySlug,
  islandSightseeingListings,
} from "./islandSightseeingListings";
import {
  privateLuxuryCategorySlug,
  privateLuxuryListings,
} from "./privateLuxuryListings";
import {
  romanticExperiencesCategorySlug,
  romanticExperiencesListings,
} from "./romanticExperiencesListings";
import {
  horsebackRidingCategorySlug,
  horsebackRidingListings,
} from "./horsebackRidingListings";
import {
  photoshootsCategorySlug,
  photoshootsListings,
} from "./photoshootsListings";
import {
  airportTransfersCategorySlug,
  airportTransfersListings,
} from "./airportTransfersListings";

export type { TourListing };

const listingMap: Record<string, TourListing[]> = {
  [catamaranCategorySlug]: catamaranListings,
  [sunsetCategorySlug]: sunsetListings,
  [snorkelingCategorySlug]: snorkelingListings,
  [atvCategorySlug]: atvListings,
  [islandSightseeingCategorySlug]: islandSightseeingListings,
  [privateLuxuryCategorySlug]: privateLuxuryListings,
  [romanticExperiencesCategorySlug]: romanticExperiencesListings,
  [horsebackRidingCategorySlug]: horsebackRidingListings,
  [photoshootsCategorySlug]: photoshootsListings,
  [airportTransfersCategorySlug]: airportTransfersListings,
};

/** Category slugs that have tour listing pages (for routing) */
export const categorySlugsWithListings: string[] = [
  catamaranCategorySlug,
  sunsetCategorySlug,
  snorkelingCategorySlug,
  atvCategorySlug,
  islandSightseeingCategorySlug,
  privateLuxuryCategorySlug,
  romanticExperiencesCategorySlug,
  horsebackRidingCategorySlug,
  photoshootsCategorySlug,
  airportTransfersCategorySlug,
];

/** Resolve a tour listing by category and tour slug; returns null if not found */
export function getTourListing(
  categorySlug: string,
  tourSlug: string
): TourListing | null {
  const listings = listingMap[categorySlug];
  if (!listings) return null;
  return listings.find((l) => l.slug === tourSlug) ?? null;
}

/** All tour listings for a category (for generateStaticParams) */
export function getTourListingsByCategory(
  categorySlug: string
): TourListing[] {
  const listings = listingMap[categorySlug];
  return listings ?? [];
}

/** Get listing by category + product code (for pillar cards: link to internal page when we have one) */
export function getListingByProductCode(
  categorySlug: string,
  productCode: string
): TourListing | null {
  const listings = listingMap[categorySlug];
  if (!listings) return null;
  return listings.find((l) => l.productCode === productCode) ?? null;
}
