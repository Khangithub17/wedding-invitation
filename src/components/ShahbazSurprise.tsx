import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Heart, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ShahbazSurprise = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (showSurprise) {
      // Create floating hearts
      const newHearts = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setHearts(newHearts);
    }
  }, [showSurprise]);

  const surpriseMessages = [
    "From your best friend, Shahbaz Khan 🤝",
    "You've been an amazing friend, Saheba",
    "Your friendship means the world to me ✨",
    "Best friends are the family we choose for ourselves",
    "Here's to the memories we've shared and the ones yet to come"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (showSurprise) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % surpriseMessages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showSurprise]);

  const handleCloneMessage = () => {
    const fullMessage = `To My Beautiful Saheba\n\n${surpriseMessages.join('\n')}\n\nForever yours,\nShahbaz Khan 💍`;
    navigator.clipboard.writeText(fullMessage).then(() => {
      toast({
        title: "Message Copied! 📋",
        description: "The surprise message has been copied to your clipboard.",
      });
    }).catch(() => {
      toast({
        title: "Copy Failed",
        description: "Could not copy message to clipboard.",
        variant: "destructive",
      });
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {!showSurprise ? (
          <div className="animate-fade-in">
            <Gift className="w-20 h-20 mx-auto mb-6 text-primary animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-crimson text-foreground mb-4">
              A Special Message
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Shahbaz has a surprise for Saheba...
            </p>
            <Button
              onClick={() => setShowSurprise(true)}
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Click to Reveal
            </Button>
          </div>
        ) : (
          <div className="relative animate-scale-in">
            {/* Floating Hearts */}
            {hearts.map((heart) => (
              <Heart
                key={heart.id}
                className="absolute text-primary/30 animate-float"
                style={{
                  left: `${heart.x}%`,
                  animationDelay: `${heart.delay}s`,
                  fontSize: `${Math.random() * 20 + 20}px`,
                }}
              />
            ))}

            {/* Main Message */}
            <div className="relative z-10 bg-card/80 backdrop-blur-lg p-12 rounded-3xl border-2 border-primary/30 shadow-2xl">
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
              
              <h2 className="text-5xl md:text-6xl font-crimson text-primary mb-8 animate-fade-in">
                To My Beautiful Saheba
              </h2>

              <div className="min-h-[120px] flex items-center justify-center">
                <p className="text-2xl md:text-3xl font-crimson text-foreground leading-relaxed animate-fade-in">
                  {surpriseMessages[currentMessage]}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="mt-8 flex justify-center gap-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>

              <div className="mt-12 text-right">
                <p className="text-xl font-crimson text-muted-foreground italic">
                  Forever yours,
                </p>
                <p className="text-3xl font-crimson text-primary mt-2">
                  Shahbaz Khan 💍
                </p>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={handleCloneMessage}
                  variant="outline"
                  size="lg"
                  className="font-poppins"
                >
                  <Copy className="mr-2" size={20} />
                  Clone Message
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s infinite;
        }
      `}</style>
    </section>
  );
};

export default ShahbazSurprise;
