import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Heart } from "lucide-react";

const SurpriseMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  const handleClick = () => {
    setIsOpen(true);
    // Generate hearts animation
    const newHearts = Array.from({ length: 20 }, (_, i) => i);
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory to-soft-pink/30">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <Button 
          onClick={handleClick}
          size="lg"
          variant="outline"
          className="font-poppins text-lg px-10 py-6 border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-primary-foreground shadow-[var(--shadow-romantic)] transition-all duration-300 hover:scale-105 relative overflow-hidden group"
        >
          <span className="relative z-10">Click here for a surprise 💌</span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/0 via-rose-gold/10 to-rose-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>

        {/* Floating Hearts */}
        {hearts.map((id) => (
          <Heart
            key={id}
            className="absolute text-rose-gold fill-rose-gold animate-heart-float pointer-events-none"
            size={24}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`
            }}
          />
        ))}

        {/* Surprise Message Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl bg-gradient-to-br from-ivory via-soft-pink/30 to-ivory border-2 border-rose-gold/30 shadow-[var(--shadow-glow)]">
            <div className="text-center py-8 px-4 animate-scale-in">
              {/* Decorative Top */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center gap-3 text-rose-gold">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-rose-gold" />
                  <Heart className="fill-rose-gold animate-pulse" size={28} />
                  <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-rose-gold" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-6 font-poppins text-base sm:text-lg text-foreground leading-relaxed">
                <p className="font-playfair text-2xl sm:text-3xl font-semibold text-rose-gold mb-4">
                  Dear Saheba,
                </p>
                
                <p>
                  You're one of the most beautiful souls I know — kind, pure, and full of love.
                </p>
                
                <p>
                  Watching you step into this new chapter fills my heart with happiness.
                </p>
                
                <p>
                  May your journey ahead be filled with laughter, loyalty, and endless memories.
                </p>
                
                <p className="font-playfair text-xl sm:text-2xl text-rose-gold font-semibold pt-4">
                  — Shahbaz ❤️
                </p>
              </div>

              {/* Decorative Bottom */}
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SurpriseMessage;
