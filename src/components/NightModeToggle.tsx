import { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Firefly[]>([]);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isNightMode) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

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
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-40"
        />
      )}
    </>
  );
};

export default NightModeToggle;
