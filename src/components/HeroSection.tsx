import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const scrollToStory = () => {
    document.getElementById("event-details")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-soft-pink/60 to-ivory/90" />
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-gold/20 animate-float"
            size={24}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 text-rose-gold">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-rose-gold" />
            <Heart className="fill-rose-gold" size={32} />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-rose-gold" />
          </div>
        </div>

        <p className="font-playfair text-base sm:text-xl md:text-2xl text-muted-foreground italic mb-3 max-w-3xl mx-auto px-2">
          "Two souls, one heart, forever intertwined"
        </p>
        
        <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
          Saheba & Sufiyan 💍
        </h1>
        
        <p className="font-playfair text-lg sm:text-2xl md:text-3xl text-rose-gold italic mb-6">
          Begin Their Forever Together
        </p>

        <p className="font-poppins text-sm sm:text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto px-4">
          Join us in celebrating love, laughter, and forever.
        </p>

        <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-accent font-semibold mb-8">
          December 26, 2025
        </p>

        <Button 
          onClick={scrollToStory}
          size="lg"
          className="font-poppins text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-[var(--shadow-romantic)] transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]"
        >
          Scroll to Discover Our Story 💖
        </Button>

        {/* Decorative Bottom Border */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;