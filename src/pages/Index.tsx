import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BuildingScrollAnimation from "@/components/BuildingScrollAnimation";
import BridgeScrollAnimation from "@/components/BridgeScrollAnimation";
import CityScrollAnimation from "@/components/CityScrollAnimation";
import TowerScrollAnimation from "@/components/TowerScrollAnimation";
import MosqueScrollAnimation from "@/components/MosqueScrollAnimation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BuildingScrollAnimation />
      <section className="bg-secondary/30">
        <BridgeScrollAnimation />
      </section>
      <CityScrollAnimation />
      <section className="bg-secondary/30">
        <TowerScrollAnimation />
      </section>
      <MosqueScrollAnimation />
      <Footer />
    </div>
  );
};

export default Index;
