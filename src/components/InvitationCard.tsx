import heroWedding from "@/assets/hero-wedding.jpg";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface InvitationCardProps {
  guestName: string;
}

const InvitationCard = ({ guestName }: InvitationCardProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Personalized Guest Banner */}
      <div className="mb-6 text-center animate-fade-in">
        <div className="inline-block bg-gradient-to-r from-rose-gold/20 via-rose-gold/30 to-rose-gold/20 backdrop-blur-lg rounded-full px-8 py-4 border-2 border-rose-gold/40 shadow-lg">
          <Sparkles className="inline-block w-5 h-5 text-rose-gold mr-2 mb-1" />
          <span className="font-playfair text-2xl text-foreground font-bold">
            Dear {guestName}
          </span>
          <Sparkles className="inline-block w-5 h-5 text-rose-gold ml-2 mb-1" />
        </div>
      </div>

      {/* Wedding Invitation Card Image */}
      <Card className="overflow-hidden border-4 border-rose-gold/40 shadow-[var(--shadow-glow)] animate-scale-in">
        <div className="relative">
          <img
            src={heroWedding}
            alt="Wedding Invitation for Saheba & Sufiyan"
            className="w-full h-auto object-cover"
          />
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-rose-gold/60" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-rose-gold/60" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-rose-gold/60" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-rose-gold/60" />
        </div>
      </Card>

      {/* Additional Message */}
      <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <p className="font-playfair text-xl text-foreground italic mb-2">
          Your presence would make this day even more special
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
