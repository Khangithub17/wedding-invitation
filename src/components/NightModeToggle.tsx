import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  brightness: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  twinkle: number;
}

const NightModeToggle = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Firefly[]>([]);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  const romanticQuotes = [
    {
      text: "May your love shine brighter than the stars above",
      icon: "✨"
    },
    {
      text: "Two souls, one heart, forever together",
      icon: "💑"
    },
    {
      text: "Blessed with love that grows stronger each day",
      icon: "🌙"
    },
    {
      text: "Together is a wonderful place to be",
      icon: "💝"
    },
    {
      text: "May your journey be filled with endless love and happiness",
      icon: "🌟"
    },
    {
      text: "Love is not just looking at each other, it's looking in the same direction",
      icon: "💫"
    },
    {
      text: "A lifetime of love, laughter, and happily ever after",
      icon: "💍"
    },
    {
      text: "Two hearts beating as one, forever and always",
      icon: "💞"
    },
    {
      text: "May your love story be as timeless as the stars",
      icon: "⭐"
    },
    {
      text: "Wishing you a lifetime filled with love, joy, and beautiful moments",
      icon: "🎊"
    }
  ];

  useEffect(() => {
    if (!isNightMode) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    // Rotate quotes every 5 seconds
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % romanticQuotes.length);
    }, 5000);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialize stars
    if (starsRef.current.length === 0) {
      for (let i = 0; i < 200; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    }

    // Initialize fireflies
    if (firefliesRef.current.length === 0) {
      for (let i = 0; i < 30; i++) {
        firefliesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          brightness: Math.random()
        });
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 30, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star) => {
        star.twinkle += 0.02;
        const alpha = (Math.sin(star.twinkle) + 1) / 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw constellation (couple's names)
      ctx.save();
      ctx.font = "bold 48px 'Playfair Display', serif";
      ctx.fillStyle = "rgba(183, 110, 121, 0.8)";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(183, 110, 121, 1)";
      ctx.textAlign = "center";
      ctx.fillText("✨ Saheba & Sufiyan ✨", canvas.width / 2, canvas.height / 4);
      ctx.restore();

      // Draw and update fireflies
      firefliesRef.current.forEach((firefly) => {
        // Update position
        firefly.x += firefly.vx;
        firefly.y += firefly.vy;

        // Bounce off edges
        if (firefly.x < 0 || firefly.x > canvas.width) firefly.vx *= -1;
        if (firefly.y < 0 || firefly.y > canvas.height) firefly.vy *= -1;

        // Update brightness
        firefly.brightness += 0.02;

        // Draw firefly
        const alpha = (Math.sin(firefly.brightness) + 1) / 2;
        const gradient = ctx.createRadialGradient(
          firefly.x,
          firefly.y,
          0,
          firefly.x,
          firefly.y,
          15
        );
        gradient.addColorStop(0, `rgba(255, 220, 100, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255, 200, 50, ${alpha * 0.4})`);
        gradient.addColorStop(1, "rgba(255, 200, 50, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, 15, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      clearInterval(quoteInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isNightMode]);

  return (
    <>
      <Button
        onClick={() => setIsNightMode(!isNightMode)}
        className="fixed top-4 right-4 z-50 bg-rose-gold/90 hover:bg-rose-gold text-white rounded-full p-3 shadow-[var(--shadow-glow)] backdrop-blur-sm"
        size="icon"
      >
        {isNightMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      {isNightMode && (
        <>
          <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-40"
          />
          
          {/* Romantic Quote Display */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none max-w-3xl w-full px-4">
            <div className="bg-gradient-to-br from-rose-gold/20 to-accent/20 backdrop-blur-md rounded-3xl p-6 md:p-10 border-2 border-rose-gold/30 shadow-[0_0_50px_rgba(183,110,121,0.3)] animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="text-rose-gold fill-rose-gold animate-pulse" size={28} />
                <Sparkles className="text-yellow-300" size={24} />
              </div>
              
              <p className="text-center text-white font-playfair text-xl md:text-2xl lg:text-3xl italic leading-relaxed animate-scale-in px-4">
                {romanticQuotes[currentQuote].icon} {romanticQuotes[currentQuote].text} {romanticQuotes[currentQuote].icon}
              </p>
              
              <div className="flex justify-center gap-2 mt-8">
                {romanticQuotes.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote 
                        ? "w-8 bg-rose-gold" 
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NightModeToggle;
