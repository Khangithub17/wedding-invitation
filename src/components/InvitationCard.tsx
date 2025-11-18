import { Heart, MapPin, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface InvitationCardProps {
  guestName: string;
}

const InvitationCard = ({ guestName }: InvitationCardProps) => {
  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-ivory via-soft-pink/40 to-champagne/30 border-2 border-rose-gold/40 shadow-[var(--shadow-glow)] overflow-hidden">
      {/* Decorative Header */}
      <div className="relative bg-gradient-to-r from-rose-gold to-accent p-8 text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative z-10">
          <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-white fill-white mx-auto mb-3 animate-pulse" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-playfair text-white font-bold">
            You're Invited!
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 sm:p-12 space-y-6">
        {/* Guest Name */}
        <div className="text-center border-b-2 border-rose-gold/20 pb-6">
          <p className="text-xs sm:text-sm font-poppins text-muted-foreground mb-2">
            Dear
          </p>
          <h2 className="text-2xl sm:text-3xl font-playfair text-rose-gold font-bold">
            {guestName}
          </h2>
        </div>

        {/* Couple Names */}
        <div className="text-center py-6">
          <p className="text-sm sm:text-base md:text-lg font-poppins text-muted-foreground mb-4 px-2">
            Together with their families
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-foreground font-bold mb-2">
            Saheba
          </h3>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-rose-gold" />
            <Heart className="text-rose-gold fill-rose-gold" size={20} />
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-foreground font-bold">
            Sufiyan
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-poppins text-muted-foreground mt-4 px-2">
            request the honor of your presence at their wedding ceremony
          </p>
        </div>

        {/* Event Details */}
        <div className="space-y-4 bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-gold/20">
          <div className="flex items-start gap-4">
            <Calendar className="text-rose-gold mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-poppins text-xs sm:text-sm text-muted-foreground">Date</p>
              <p className="font-playfair text-lg sm:text-xl text-foreground font-semibold">
                December 26, 2025
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-rose-gold mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-poppins text-xs sm:text-sm text-muted-foreground">Time</p>
              <p className="font-playfair text-lg sm:text-xl text-foreground font-semibold">
                6:00 PM - 11:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-rose-gold mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-poppins text-xs sm:text-sm text-muted-foreground">Venue</p>
              <p className="font-playfair text-base sm:text-lg text-foreground font-semibold">
                Dawat Party Plot
              </p>
              <p className="font-poppins text-xs sm:text-sm text-muted-foreground mt-1">
                Opposite Sentosa Home City, Near Jhunjhunwala International School,
                Chanod Colony, Dungra, Vapi, Gujarat 396191
              </p>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center pt-6 border-t-2 border-rose-gold/20">
          <p className="font-poppins text-base text-muted-foreground italic">
            Your presence will make our day even more special! 💕
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <Heart className="text-rose-gold fill-rose-gold animate-pulse" size={16} />
            <Heart className="text-rose-gold fill-rose-gold animate-pulse" size={16} style={{ animationDelay: "0.2s" }} />
            <Heart className="text-rose-gold fill-rose-gold animate-pulse" size={16} style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InvitationCard;
