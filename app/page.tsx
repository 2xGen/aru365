import { Hero } from "@/components/Hero";
import { FindBestTours } from "@/components/FindBestTours";
import { ComparisonsGuides } from "@/components/ComparisonsGuides";
import { PlatformFocused } from "@/components/PlatformFocused";
import { LaunchingSoon } from "@/components/LaunchingSoon";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FindBestTours />
      <ComparisonsGuides />
      <PlatformFocused />
      <LaunchingSoon />
      <Footer />
    </main>
  );
}
