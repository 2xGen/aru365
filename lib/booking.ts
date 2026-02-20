/**
 * Booking / Viator affiliate URLs.
 * Set NEXT_PUBLIC_VIATOR_ARUBA_URL to your Viator affiliate link for Aruba
 * (from Viator Partner Selector). Otherwise falls back to Viator Aruba destination.
 */
const VIATOR_ARUBA_DEFAULT = "https://www.viator.com/Aruba/d28";
const VIATOR_ARUBA_URL =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_VIATOR_ARUBA_URL
    ? process.env.NEXT_PUBLIC_VIATOR_ARUBA_URL
    : VIATOR_ARUBA_DEFAULT;

export function getBookToursUrl(): string {
  return VIATOR_ARUBA_URL;
}

/** URL for "See options & book" - can be category-specific later when using API. */
export function getCategoryBookUrl(_categorySlug?: string): string {
  return VIATOR_ARUBA_URL;
}
