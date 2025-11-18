import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const RomanticQuotes = () => {
  const quotes = [
    {
      text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
      author: "Maya Angelou"
    },
    {
      text: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn"
    },
    {
      text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      author: "Lao Tzu"
    },
    {
      text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss"
    },
    {
      text: "To love and be loved is to feel the sun from both sides.",
      author: "David Viscott"
    },
    {
      text: "Dear Saheba, watching you embrace this beautiful journey fills my heart with joy. May your love story be eternal, your laughter endless, and your happiness infinite. Here's to forever with Sufiyan! 💕",
      author: "With love, Shahbaz"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-ivory via-champagne/20 to-soft-pink/30 relative overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-gold/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-rose-gold mb-3">
            Words of Love 💌
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-poppins px-4">
            Beautiful words for a beautiful soul
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-rose-gold via-accent to-rose-gold rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/60 backdrop-blur-sm border-rose-gold/20 shadow-[var(--shadow-romantic)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-fade-in ${
                index === quotes.length - 1 ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-gold fill-rose-gold/20" />
                <p className="text-sm sm:text-base md:text-lg font-poppins text-foreground leading-relaxed italic">
                  "{quote.text}"
                </p>
                <p className="text-xs sm:text-sm font-playfair text-rose-gold">
                  — {quote.author}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RomanticQuotes;
