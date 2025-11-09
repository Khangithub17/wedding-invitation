import { useEffect, useState } from "react";

const LoaderScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-gold/20 via-soft-pink/30 to-champagne/20 backdrop-blur-sm animate-fade-in">
      <div className="text-center space-y-6">
        <div className="relative">
          <h1 
            className="text-8xl font-playfair text-rose-gold animate-pulse"
            style={{ 
              textShadow: '0 0 30px rgba(183, 110, 121, 0.5), 0 0 60px rgba(183, 110, 121, 0.3)',
              animation: 'glow 2s ease-in-out infinite'
            }}
          >
            محبت
          </h1>
          <div className="absolute -inset-4 bg-rose-gold/10 blur-3xl rounded-full animate-pulse" />
        </div>
        <p className="text-2xl font-poppins text-foreground/80 animate-fade-in">
          Love
        </p>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-rose-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-soft-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-champagne rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
      
      <style>{`
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 30px rgba(183, 110, 121, 0.5), 0 0 60px rgba(183, 110, 121, 0.3);
          }
          50% { 
            text-shadow: 0 0 40px rgba(183, 110, 121, 0.8), 0 0 80px rgba(183, 110, 121, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default LoaderScreen;
