"use client";

const guides = [
  "Best Tours in Aruba",
  "Best Snorkeling Tours in Aruba",
  "Best ATV Tours in Aruba",
  "Best Sunset Cruises in Aruba",
  "Private vs Group Tours",
  "Top Things to Do in Aruba",
];

export function ComparisonsGuides() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="comparisons-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="comparisons-heading"
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 text-center mb-4"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          Smart Tour <span className="text-aru-cyan">Comparisons</span> & Guides
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-6">
          Choosing the right excursion in Aruba can be overwhelming. Aru365 will include in-depth guides and comparison pages such as:
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
          {guides.map((name, i) => (
            <span
              key={i}
              className="inline-block px-4 py-2 rounded-xl bg-cyan-50 border border-aru-cyan/20 text-slate-700 text-sm font-medium"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-slate-600 text-center max-w-2xl mx-auto">
          These pages are structured around high-intent search queries to help travelers quickly identify the experience that fits their travel style, group size, and budget.
        </p>
      </div>
    </section>
  );
}
