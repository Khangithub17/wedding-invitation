import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import LoveClock from "@/components/LoveClock";
import CoupleDance from "@/components/CoupleDance";
import Gallery from "@/components/Gallery";
import AnimalWishes from "@/components/AnimalWishes";
import Guestbook from "@/components/Guestbook";
import RSVPForm from "@/components/RSVPForm";
import ShahbazSurprise from "@/components/ShahbazSurprise";
import QRGenerator from "@/components/QRGenerator";
import SurpriseMessage from "@/components/SurpriseMessage";
import CrazyFinale from "@/components/CrazyFinale";
import Footer from "@/components/Footer";
import LoaderScreen from "@/components/LoaderScreen";
import NightModeToggle from "@/components/NightModeToggle";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoaderScreen onLoadComplete={() => setIsLoading(false)} />}
      <NightModeToggle />
      <div className="min-h-screen bg-background font-poppins">
        <HeroSection />
        <EventDetails />
        <LoveClock />
        <CoupleDance />
        <Gallery />
        <AnimalWishes />
        <Guestbook />
        <RSVPForm />
        <ShahbazSurprise />
        <QRGenerator />
        <SurpriseMessage />
        <CrazyFinale />
        <Footer />
      </div>
    </>
  );
};

export default Index;