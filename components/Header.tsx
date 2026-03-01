"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { pillars } from "@/data/pillars";

const HIDDEN_IN_NAV = ["things-to-do-in-aruba-with-kids"];

/** Nav label: strip " in Aruba" so we show e.g. "Catamaran Cruises" not "Catamaran Cruises in Aruba". */
function navCategoryLabel(title: string): string {
  return title.replace(/\s+in\s+Aruba$/i, "").trim() || title;
}

const navPillars = pillars.filter((p) => !HIDDEN_IN_NAV.includes(p.slug));

export function Header() {
  const pathname = usePathname();
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isBestTours = pathname === "/best-tours-in-aruba";
  const isToursExcursions = pathname === "/tours-excursions";
  const isPartner = pathname === "/partner";

  const navLinkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${active ? "text-aru-orange" : "text-slate-600 hover:text-slate-900"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-14 sm:h-16" aria-label="Main">
          <Link
            href="/"
            className="font-display font-bold text-xl text-slate-900 hover:opacity-90 transition-opacity flex-shrink-0"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            <span className="text-aru-orange">Aru</span>
            <span className="text-aru-cyan">365</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/" className={navLinkClass(isHome)}>
              Home
            </Link>
            <Link href="/best-tours-in-aruba" className={navLinkClass(isBestTours)}>
              Best tours
            </Link>
            <Link href="/tours-excursions" className={navLinkClass(isToursExcursions)}>
              All tours
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCategoriesOpen((o) => !o)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                aria-expanded={categoriesOpen}
                aria-haspopup="true"
                id="categories-menu-button"
              >
                Categories
                <svg
                  className={`w-4 h-4 transition-transform ${categoriesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {categoriesOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-72 max-h-[min(70vh,400px)] overflow-y-auto rounded-xl border border-slate-200 bg-white py-2 shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="categories-menu-button"
                >
                  {navPillars.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}`}
                      role="menuitem"
                      onClick={() => setCategoriesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {navCategoryLabel(p.title)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile: hamburger + slide-out menu */}
          <div className="flex items-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2 -mr-2 text-slate-600 hover:text-slate-900 rounded-lg aria-expanded:bg-slate-100"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile nav panel */}
        <div
          id="mobile-nav"
          className={`sm:hidden overflow-hidden transition-[max-height] duration-200 ease-out ${mobileMenuOpen ? "max-h-[80vh]" : "max-h-0"}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="pb-4 pt-2 border-t border-slate-200/80 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-3 rounded-lg ${navLinkClass(isHome)}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/best-tours-in-aruba"
              className={`block px-3 py-3 rounded-lg ${navLinkClass(isBestTours)}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Best tours
            </Link>
            <Link
              href="/tours-excursions"
              className={`block px-3 py-3 rounded-lg ${navLinkClass(isToursExcursions)}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              All tours
            </Link>
            <div className="pt-2 mt-2 border-t border-slate-100">
              <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Categories
              </p>
              {navPillars.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navCategoryLabel(p.title)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
