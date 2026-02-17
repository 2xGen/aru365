"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col items-center text-center gap-8 lg:gap-10 max-w-2xl mx-auto">
          <div>
            <span
              className="font-display font-bold text-2xl text-white block"
              style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
            >
              Aru365
            </span>
            <span className="text-slate-400 text-sm sm:text-base mt-1 block">
              Everything Aruba. 365 Days a Year.
            </span>
          </div>
          <div className="pt-6 border-t border-slate-700/80 w-full">
            <p className="text-slate-400 text-sm leading-relaxed">
              Owned and operated by{" "}
              <Link
                href="/2xgen"
                className="text-aru-cyan hover:text-aru-cyan-dark font-medium transition-colors underline underline-offset-2"
              >
                2xGen LLC
              </Link>{" "}
              — creators of next-gen digital platforms.
            </p>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Aru365. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
