import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Star, PartyPopper } from "lucide-react";

const CrazyFinale = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [explosions, setExplosions] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameStarted && timeLeft === 0) {
      setGameOver(true);
      triggerFireworks();
    }
  }, [gameStarted, timeLeft]);

  const triggerFireworks = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const fireworks: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
    }> = [];

    // Create fireworks
    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50;
      const velocity = Math.random() * 5 + 3;
      fireworks.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        size: Math.random() * 3 + 2,
      });
    }

    let frame = 0;
    const animate = () => {
      if (frame > 100) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((fw) => {
        fw.x += fw.vx;
        fw.y += fw.vy;
        fw.vy += 0.1; // gravity

        ctx.beginPath();
        ctx.arc(fw.x, fw.y, fw.size, 0, Math.PI * 2);
        ctx.fillStyle = fw.color;
        ctx.fill();
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameStarted || gameOver) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setClicks((prev) => prev + 1);
    setExplosions((prev) => [...prev, { id: Date.now(), x, y }]);

    setTimeout(() => {
      setExplosions((prev) => prev.filter((exp) => exp.id !== Date.now()));
    }, 1000);
  };

  const getMessage = () => {
    if (clicks < 10) return "Keep clicking! 🚀";
    if (clicks < 30) return "You're on fire! 🔥";
    if (clicks < 50) return "Amazing! ⚡";
    if (clicks < 100) return "Unstoppable! 💪";
    return "LEGENDARY GUEST! 👑";
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/10 to-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <Rocket className="w-16 h-16 mx-auto mb-4 text-primary animate-bounce" />
          <h2 className="text-4xl md:text-6xl font-crimson text-foreground mb-4">
            The Grand Finale! 🎆
          </h2>
          <p className="text-2xl md:text-3xl font-playfair text-primary font-bold mb-3 animate-pulse">
            Happy Marriage Life! 💑
          </p>
          <p className="text-muted-foreground text-lg">
            Think you can beat this crazy challenge? 😎
          </p>
        </div>

        {!gameStarted ? (
          <div className="text-center animate-scale-in">
            <div className="bg-card/50 backdrop-blur-sm p-12 rounded-3xl border-2 border-primary/30 shadow-2xl">
              <PartyPopper className="w-20 h-20 mx-auto mb-6 text-primary" />
              <h3 className="text-3xl font-crimson text-foreground mb-4">
                Click Challenge! 💥
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Click as many times as you can in 10 seconds!
              </p>
              <Button
                onClick={() => setGameStarted(true)}
                className="text-2xl px-12 py-8 bg-gradient-to-r from-primary via-primary/80 to-primary hover:scale-110 transition-all duration-300 shadow-xl"
              >
                <Zap className="w-6 h-6 mr-2" />
                Start Challenge!
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-primary/30 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <div className="text-center flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Clicks</p>
                  <p className="text-5xl font-bold text-primary">{clicks}</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Time Left</p>
                  <p className="text-5xl font-bold text-primary">{timeLeft}s</p>
                </div>
              </div>

              <div
                onClick={handleClick}
                className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border-4 border-primary/50 cursor-pointer hover:border-primary transition-all overflow-hidden"
              >
                {explosions.map((exp) => (
                  <div
                    key={exp.id}
                    className="absolute w-20 h-20 pointer-events-none animate-ping"
                    style={{
                      left: `${exp.x}%`,
                      top: `${exp.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Star className="w-full h-full text-primary" />
                  </div>
                ))}

                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl font-crimson text-primary animate-pulse">
                    {gameOver ? `${clicks} Clicks! ${getMessage()}` : "CLICK ME!"}
                  </p>
                </div>
              </div>

              {!gameOver && (
                <p className="text-center text-xl text-muted-foreground mt-6 animate-bounce">
                  {getMessage()}
                </p>
              )}

              {gameOver && (
                <div className="mt-8 text-center space-y-4 animate-fade-in">
                  <p className="text-2xl font-crimson text-foreground">
                    🎉 Congratulations! You're officially a wedding legend! 🎉
                  </p>
                  <Button
                    onClick={() => {
                      setGameStarted(false);
                      setClicks(0);
                      setTimeLeft(10);
                      setGameOver(false);
                    }}
                    className="text-lg px-8 py-6"
                  >
                    Play Again
                  </Button>
                </div>
              )}
            </div>

            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none w-full h-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CrazyFinale;
