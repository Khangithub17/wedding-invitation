import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Sparkles, Send, Waves } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MessageBottle = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [bottles, setBottles] = useState<{ name: string; message: string; id: number }[]>([]);
  const [showBottles, setShowBottles] = useState(false);
  const { toast } = useToast();

  const sendMessage = () => {
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and message are required to send a message in a bottle.",
        variant: "destructive",
      });
      return;
    }

    const newBottle = {
      name: name.trim(),
      message: message.trim(),
      id: Date.now()
    };

    setBottles(prev => [...prev, newBottle]);
    setName("");
    setMessage("");

    // Save to localStorage
    const saved = localStorage.getItem("messageBottles");
    const existing = saved ? JSON.parse(saved) : [];
    localStorage.setItem("messageBottles", JSON.stringify([...existing, newBottle]));

    toast({
      title: "Message sent! 🌊",
      description: "Your message has been cast into the ocean of love!",
    });

    // Animate the bottle floating away
    setTimeout(() => {
      const bottleElements = document.querySelectorAll('.bottle-float');
      const lastBottle = bottleElements[bottleElements.length - 1];
      if (lastBottle) {
        lastBottle.classList.add('animate-fade-out');
      }
    }, 100);
  };

  const viewMessages = () => {
    const saved = localStorage.getItem("messageBottles");
    if (saved) {
      setBottles(JSON.parse(saved));
    }
    setShowBottles(!showBottles);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soft-pink/20 via-blue-50/30 to-ivory relative overflow-hidden">
      {/* Animated Waves */}
      <div className="absolute inset-0 opacity-10">
        <Waves className="absolute bottom-0 left-0 w-full text-blue-300 animate-pulse" size={100} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-3">
              🌊 Message in a Bottle 🌊
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-400 via-rose-gold to-blue-400 rounded-full" />
          </div>
          <p className="font-poppins text-lg text-muted-foreground mt-4">
            Cast your heartfelt wishes into the ocean of love
          </p>
        </div>

        <Card className="p-8 sm:p-12 bg-card/90 backdrop-blur-sm border-border shadow-[var(--shadow-glow)]">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-rose-gold" size={32} />
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                Send Your Magical Message
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="bottleName" className="font-poppins text-sm font-medium text-foreground block mb-2">
                  Your Name
                </label>
                <Input
                  id="bottleName"
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-poppins text-base"
                />
              </div>

              <div>
                <label htmlFor="bottleMessage" className="font-poppins text-sm font-medium text-foreground block mb-2">
                  Your Message
                </label>
                <Textarea
                  id="bottleMessage"
                  placeholder="Write your heartfelt message for the couple..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="font-poppins text-base min-h-32"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={sendMessage}
                  size="lg"
                  className="flex-1 font-poppins text-lg py-6 bg-gradient-to-r from-blue-500 to-rose-gold hover:from-blue-600 hover:to-rose-gold/90 text-white shadow-[var(--shadow-romantic)] transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2" size={20} />
                  Cast Into Ocean ✨
                </Button>
                
                <Button
                  onClick={viewMessages}
                  size="lg"
                  variant="outline"
                  className="font-poppins text-lg py-6"
                >
                  <Waves className="mr-2" size={20} />
                  View {bottles.length} {showBottles ? '▼' : '▶'}
                </Button>
              </div>
            </div>

            {/* Display Messages */}
            {showBottles && bottles.length > 0 && (
              <div className="mt-8 space-y-4 animate-scale-in max-h-96 overflow-y-auto">
                <h4 className="font-playfair text-xl text-rose-gold font-semibold mb-4">
                  Messages Found on Shore 🏖️
                </h4>
                {bottles.map((bottle) => (
                  <Card
                    key={bottle.id}
                    className="p-4 bg-gradient-to-br from-blue-50/50 to-soft-pink/30 border-blue-200/50 bottle-float"
                  >
                    <p className="font-poppins text-sm font-semibold text-rose-gold mb-2">
                      From: {bottle.name}
                    </p>
                    <p className="font-poppins text-base text-muted-foreground italic">
                      "{bottle.message}"
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MessageBottle;
