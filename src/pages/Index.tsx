import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import LoveClock from "@/components/LoveClock";
import CoupleDance from "@/components/CoupleDance";
import Gallery from "@/components/Gallery";
import AnimalWishes from "@/components/AnimalWishes";
import RomanticQuotes from "@/components/RomanticQuotes";
import Guestbook from "@/components/Guestbook";
import MessageBottle from "@/components/MessageBottle";
import QRGenerator from "@/components/QRGenerator";
import SurpriseMessage from "@/components/SurpriseMessage";
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
        <RomanticQuotes />
        <Guestbook />
        <MessageBottle />
        <QRGenerator />
        <SurpriseMessage />
        <Footer />
      </div>
    </>
  );
};

export default Index;