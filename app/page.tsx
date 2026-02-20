import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomeTopPicks } from "@/components/HomeTopPicks";
import { HomeCategories } from "@/components/HomeCategories";
import { WhyBookWithUs } from "@/components/WhyBookWithUs";
import { Footer } from "@/components/Footer";
import { pillarProductCodes } from "@/data/pillarProducts";
import { getListingByProductCode } from "@/data/listings";
import { getPillarBySlug } from "@/data/pillars";
import { featuredTours } from "@/data/featuredTours";
import { getStaticProductSummaries } from "@/data/staticProductSummaries";
import { fetchProductsBulk } from "@/lib/viator-api";

const SITE_URL = "https://aru365.com";
const DEFAULT_OG_IMAGE =
  "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/aru365/aru365%20tours%20and%20excursions%20in%20aruba.png";

export const metadata: Metadata = {
  title: "Aru365 – Book Best Tours in Aruba | Catamaran, Snorkeling, ATV, Sunset Cruises",
  description:
    "Aruba's dedicated platform for booking the best tours and excursions. Find, compare, and book snorkeling tours, sunset cruises, ATV adventures, and more — all in one place.",
  openGraph: {
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Aru365 – Tours and excursions in Aruba" }],
  },
  alternates: { canonical: SITE_URL },
};

/** Home shows one tour per category using the second pick (index 1) so it differs from best-tours-in-aruba (first pick). */
const HIDDEN_ON_HOMEPAGE = ["airport-transfers-in-aruba", "sea-glass-island-aruba", "water-sports-and-rentals-in-aruba", "things-to-do-in-aruba-with-kids"];
const CATEGORY_SLUGS = (Object.keys(pillarProductCodes) as string[]).filter((s) => !HIDDEN_ON_HOMEPAGE.includes(s));
const PICK_INDEX = 1;

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Aru365 – Book Best Tours in Aruba",
  url: SITE_URL,
  description:
    "Aruba's dedicated platform for booking the best tours and excursions. Find, compare, and book snorkeling tours, sunset cruises, ATV adventures, and more.",
  isPartOf: { "@type": "WebSite", name: "Aru365", url: SITE_URL },
};

export default async function Home() {
  const oneCodePerCategory: { categorySlug: string; productCode: string }[] = [];
  for (const slug of CATEGORY_SLUGS) {
    if (oneCodePerCategory.length >= 6) break;
    const codes = pillarProductCodes[slug];
    if (codes && codes.length > 0) {
      const index = Math.min(PICK_INDEX, codes.length - 1);
      oneCodePerCategory.push({ categorySlug: slug, productCode: codes[index] });
    }
  }

  const allCodes = oneCodePerCategory.map((x) => x.productCode);
  let products: Awaited<ReturnType<typeof fetchProductsBulk>> = [];
  if (allCodes.length > 0) {
    try {
      products = await fetchProductsBulk(allCodes);
    } catch {
      // leave empty
    }
  }

  const codeToProduct = new Map(products.map((p) => [p.productCode, p]));
  let topPicks = oneCodePerCategory
    .slice(0, 6)
    .map(({ categorySlug, productCode }) => {
      const product = codeToProduct.get(productCode);
      if (!product) return null;
      const pillar = getPillarBySlug(categorySlug);
      const listing = getListingByProductCode(categorySlug, productCode);
      const href = listing ? `/${categorySlug}/${listing.slug}` : product.productUrl;
      return {
        categorySlug,
        categoryTitle: pillar?.title ?? categorySlug,
        productCode: product.productCode,
        title: product.title,
        fromPriceDisplay: product.fromPriceDisplay,
        imageUrl: product.imageUrl ?? null,
        href,
        isInternal: !!listing,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  // Fallback: use static snapshot (with images) when API is disabled or fails; else featuredTours
  if (topPicks.length === 0) {
    const staticSummaries = oneCodePerCategory.slice(0, 6).flatMap(({ categorySlug, productCode }) =>
      getStaticProductSummaries([productCode], categorySlug)
    );
    if (staticSummaries.length > 0) {
      topPicks = oneCodePerCategory.slice(0, 6).map(({ categorySlug, productCode }, i) => {
        const s = staticSummaries[i];
        if (!s) return null;
        const pillar = getPillarBySlug(categorySlug);
        const listing = getListingByProductCode(categorySlug, productCode);
        const href = listing ? `/${categorySlug}/${listing.slug}` : s.productUrl;
        return {
          categorySlug,
          categoryTitle: pillar?.title ?? categorySlug,
          productCode: s.productCode,
          title: s.title,
          fromPriceDisplay: s.fromPriceDisplay,
          imageUrl: s.imageUrl ?? null,
          href,
          isInternal: !!listing,
        };
      }).filter((x): x is NonNullable<typeof x> => x !== null);
    }
    if (topPicks.length === 0) {
      topPicks = featuredTours
        .filter((ft) => ft.categorySlug && !HIDDEN_ON_HOMEPAGE.includes(ft.categorySlug))
        .slice(0, 6)
        .map((ft) => ({
          categorySlug: ft.categorySlug!,
          categoryTitle: getPillarBySlug(ft.categorySlug!)?.title ?? ft.categorySlug!,
          productCode: ft.id,
          title: ft.title,
          fromPriceDisplay: ft.fromPriceLabel ?? `From $${ft.fromPrice}`,
          imageUrl: null as string | null,
          href: `/${ft.categorySlug}`,
          isInternal: true,
        }));
    }
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />
      <HomeTopPicks topPicks={topPicks} />
      <HomeCategories />
      <WhyBookWithUs />
      <Footer />
    </main>
  );
}
