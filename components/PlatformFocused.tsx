"use client";

export function PlatformFocused() {
  return (
    <section
      className="py-20 lg:py-28 bg-slate-50/80"
      aria-labelledby="platform-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2
          id="platform-heading"
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 text-center mb-10"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
        >
          A Platform Fully <span className="text-aru-orange">Focused</span> on Aruba Tours
        </h2>
        <div className="space-y-6 text-slate-600 text-center leading-relaxed">
          <p>
            Aru365 is built as a specialized platform for tours and excursions in Aruba — not a general travel directory.
          </p>
          <p>
            By focusing exclusively on Aruba experiences, we’re creating a structured, easy-to-use resource designed to become the most trusted place to explore and book Aruba tours.
          </p>
          <p>
            Built on years of understanding traveler behavior and search intent, Aru365 is designed to connect visitors directly with the experiences they’re actively searching for.
          </p>
        </div>
      </div>
    </section>
  );
}
