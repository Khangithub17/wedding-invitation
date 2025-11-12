import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface BlessingParticle {
  id: number;
  text: string;
  left: number;
  delay: number;
}

const urduBlessings = [
  { urdu: "پیار", english: "Love" },
  { urdu: "خوشی", english: "Happiness" },
  { urdu: "دعائیں", english: "Blessings" },
  { urdu: "محبت", english: "Affection" },
  { urdu: "برکت", english: "Prosperity" },
];

const Guestbook = () => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [blessings, setBlessings] = useState<BlessingParticle[]>([]);
  const [wishes, setWishes] = useState<{ name: string; wish: string }[]>([]);

  // Load wishes from localStorage on mount
  useEffect(() => {
    const savedWishes = localStorage.getItem("wedding-wishes");
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    }
  }, []);

  // Save wishes to localStorage whenever they change
  useEffect(() => {
    if (wishes.length > 0) {
      localStorage.setItem("wedding-wishes", JSON.stringify(wishes));
    }
  }, [wishes]);

  const triggerBlessingRain = () => {
    const newBlessings: BlessingParticle[] = [];
    for (let i = 0; i < 12; i++) {
      const blessing = urduBlessings[Math.floor(Math.random() * urduBlessings.length)];
      newBlessings.push({
        id: Date.now() + i,
        text: `${blessing.urdu} ${blessing.english}`,
        left: Math.random() * 100,
        delay: Math.random() * 0.5
      });
    }
    setBlessings(newBlessings);

    setTimeout(() => {
      setBlessings([]);
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !wish.trim()) {
      toast.error("Please fill in both fields");
      return;
    }

    setWishes([{ name, wish }, ...wishes]);
    triggerBlessingRain();
    toast.success("Your blessing has been added! 💖");
    setName("");
    setWish("");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-ivory via-soft-pink/10 to-champagne/20 relative overflow-hidden">
      {/* Blessing Rain Animation */}
      {blessings.map((blessing) => (
        <div
          key={blessing.id}
          className="absolute text-2xl font-playfair text-rose-gold pointer-events-none animate-[fall_4s_ease-in_forwards]"
          style={{
            left: `${blessing.left}%`,
            animationDelay: `${blessing.delay}s`,
            top: '-50px',
            textShadow: '0 0 10px rgba(183, 110, 121, 0.5)'
          }}
        >
          {blessing.text} 💖
        </div>
      ))}

      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-5xl font-playfair text-rose-gold">
            ✨ Blessing Book ✨
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Share your love and blessings for Saheba & Sufiyan
          </p>
        </div>

        <Card className="p-8 bg-card/80 backdrop-blur-sm border-rose-gold/20 shadow-2xl mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-poppins text-foreground mb-2">
                Your Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border-rose-gold/30 focus:border-rose-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-poppins text-foreground mb-2">
                Your Blessing
              </label>
              <Textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Write your heartfelt wishes for the couple..."
                rows={4}
                className="border-rose-gold/30 focus:border-rose-gold"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white font-poppins"
            >
              Send Your Blessing 💝
            </Button>
          </form>
        </Card>

        {wishes.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-3xl font-playfair text-rose-gold text-center mb-6">
              Blessings Received
            </h3>
            <div className="grid gap-4">
              {wishes.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/60 backdrop-blur-sm border-rose-gold/20 hover:shadow-xl transition-all animate-fade-in"
                >
                  <p className="font-playfair text-rose-gold text-lg mb-2">
                    {item.name}
                  </p>
                  <p className="text-muted-foreground font-poppins">
                    {item.wish}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Guestbook;
