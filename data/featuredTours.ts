/**
 * Featured / top-pick tours for homepage and best-tours page.
 * Replace with Viator API data when integrated.
 */
export interface FeaturedTour {
  id: string;
  title: string;
  fromPrice: string;
  fromPriceLabel?: string;
  categorySlug?: string;
}

export const featuredTours: FeaturedTour[] = [
  { id: "1", title: "Catamaran Sail & Snorkel", fromPrice: "89", fromPriceLabel: "From $89", categorySlug: "catamaran-cruises-in-aruba" },
  { id: "2", title: "Sunset Dinner Cruise", fromPrice: "99", fromPriceLabel: "From $99", categorySlug: "sunset-and-dinner-cruises-in-aruba" },
  { id: "3", title: "ATV Island Adventure", fromPrice: "129", fromPriceLabel: "From $129", categorySlug: "atv-and-jeep-tours-in-aruba" },
  { id: "4", title: "Snorkeling & Beach Trip", fromPrice: "69", fromPriceLabel: "From $69", categorySlug: "snorkeling-and-diving-in-aruba" },
  { id: "5", title: "Private Boat Charter", fromPrice: "299", fromPriceLabel: "From $299", categorySlug: "private-and-luxury-tours-in-aruba" },
  { id: "6", title: "Island Sightseeing Tour", fromPrice: "59", fromPriceLabel: "From $59", categorySlug: "island-sightseeing-tours-in-aruba" },
];
