import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import LoveClock from "@/components/LoveClock";
import Gallery from "@/components/Gallery";
import Guestbook from "@/components/Guestbook";
import QRGenerator from "@/components/QRGenerator";
import SurpriseMessage from "@/components/SurpriseMessage";
import Footer from "@/components/Footer";
import LoaderScreen from "@/components/LoaderScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoaderScreen onLoadComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-background font-poppins">
        <HeroSection />
        <EventDetails />
        <LoveClock />
        <Gallery />
        <Guestbook />
        <QRGenerator />
        <SurpriseMessage />
        <Footer />
      </div>
    </>
  );
};

export default Index;