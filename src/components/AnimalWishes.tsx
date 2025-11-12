import { useState } from "react";
import dogWish from "@/assets/dog-wish.jpg";
import catJenno from "@/assets/cat-jenno.jpg";
import catKitty from "@/assets/cat-kitty.jpg";
import catLucy from "@/assets/cat-lucy.jpg";
import catDaisy from "@/assets/cat-daisy.jpg";
import { Card } from "@/components/ui/card";
import { Smile } from "lucide-react";

const AnimalWishes = () => {
  const [clickedAnimals, setClickedAnimals] = useState<number[]>([]);

  const animals = [
    {
      name: "Bruno the Pup 🐕",
      image: dogWish,
      message: "Woof woof! May your love be as loyal as a dog's heart! I promise to be the best ring bearer. Congratulations Saheba & Sufiyan! 🐾💕"
    },
    {
      name: "Jenno 🐱",
      image: catJenno,
      message: "Meow! Your love story is purrfect! Wishing you both endless cuddles and cozy moments together. Love and purrs! 😻💖"
    },
    {
      name: "Kitty 🐱",
      image: catKitty,
      message: "Meow meow! Nine lives aren't enough to express how happy I am for you both! May your days be filled with joy and sunshine! 🌟💕"
    },
    {
      name: "Lucy 🐱",
      image: catLucy,
      message: "Purr purr! You two are absolutely adorable together! Wishing you a lifetime of happiness, treats, and warm naps in the sun! 😽✨"
    },
    {
      name: "Daisy 🐱",
      image: catDaisy,
      message: "Meow! May your marriage be filled with as much grace and elegance as a cat's walk! Congratulations, lovely humans! 💝🐾"
    }
  ];

  const handleAnimalClick = (index: number) => {
    if (!clickedAnimals.includes(index)) {
      setClickedAnimals([...clickedAnimals, index]);
      setTimeout(() => {
        setClickedAnimals(prev => prev.filter(i => i !== index));
      }, 2000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-champagne/30 to-soft-pink/20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-playfair text-rose-gold mb-3">
            🐾 Furry Friends' Wishes 🐾
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Even our adorable friends want to celebrate! (Tap them for smiles!)
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-rose-gold via-accent to-rose-gold rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <Card
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm border-rose-gold/20 shadow-[var(--shadow-romantic)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-scale-in cursor-pointer relative"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => handleAnimalClick(index)}
            >
              {/* Smile Animation */}
              {clickedAnimals.includes(index) && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <Smile
                      key={i}
                      className="absolute text-rose-gold fill-rose-gold animate-heart-float"
                      size={32}
                      style={{
                        left: `${50 + (Math.random() - 0.5) * 80}%`,
                        top: `${50 + (Math.random() - 0.5) * 80}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/30 to-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-rose-gold/30 shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-playfair text-rose-gold mb-3">
                  {animal.name}
                </h3>
                <p className="text-muted-foreground font-poppins leading-relaxed">
                  {animal.message}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalWishes;
