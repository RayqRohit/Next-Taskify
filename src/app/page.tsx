import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-hidden selection:bg-[#2563EB] selection:text-white font-body">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
