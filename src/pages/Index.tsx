import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";
import Gallery from "@/components/Gallery";
import QRGenerator from "@/components/QRGenerator";
import SurpriseMessage from "@/components/SurpriseMessage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <HeroSection />
      <EventDetails />
      <CountdownTimer />
      <Gallery />
      <QRGenerator />
      <SurpriseMessage />
      <Footer />
    </div>
  );
};

export default Index;