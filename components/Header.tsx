"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { pillars } from "@/data/pillars";

const HIDDEN_IN_NAV = [
  "sea-glass-island-aruba",
  "water-sports-and-rentals-in-aruba",
  "things-to-do-in-aruba-with-kids",
];

/** Nav label: strip " in Aruba" so we show e.g. "Catamaran Cruises" not "Catamaran Cruises in Aruba". */
function navCategoryLabel(title: string): string {
  return title.replace(/\s+in\s+Aruba$/i, "").trim() || title;
}

export function Header() {
  const pathname = usePathname();
  const [categoriesOpen, setCategoriesOpen] = useState(false);
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

  const isHome = pathname === "/";
  const isBestTours = pathname === "/best-tours-in-aruba";
  const isPartner = pathname === "/partner";

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

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hidden sm:inline-block ${isHome ? "text-aru-orange" : "text-slate-600 hover:text-slate-900"}`}
            >
              Home
            </Link>
            <Link
              href="/best-tours-in-aruba"
              className={`text-sm font-medium transition-colors hidden sm:inline-block ${isBestTours ? "text-aru-orange" : "text-slate-600 hover:text-slate-900"}`}
            >
              Best tours
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
                  {pillars.filter((p) => !HIDDEN_IN_NAV.includes(p.slug)).map((p) => (
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
        </nav>
      </div>
    </header>
  );
}
