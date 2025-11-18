import { useEffect, useState } from "react";

const LoveClock = () => {
  const [rotation, setRotation] = useState({ hour: 0, minute: 0, second: 0 });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const loveWords = {
    12: "Trust",
    3: "Smiles", 
    6: "Laughter",
    9: "Forever"
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2025-12-26T18:00:00");
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours() % 12;

      setRotation({
        hour: (hours * 30) + (minutes * 0.5),
        minute: minutes * 6,
        second: seconds * 6
      });
    };

    calculateTimeLeft();
    updateClock();
    
    const interval = setInterval(() => {
      calculateTimeLeft();
      updateClock();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-soft-pink/20 via-champagne/10 to-rose-gold/20">
      <div className="container mx-auto text-center space-y-12">
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-rose-gold">
            Love Through Time
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-poppins italic px-4">
            Every second counts when love is timeless 💍
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Analog Clock */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-rose-gold shadow-2xl bg-gradient-to-br from-ivory via-champagne/50 to-soft-pink/30">
            {/* Love Words instead of numbers */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-rose-gold font-playfair text-lg font-bold">
              {loveWords[12]}
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-gold font-playfair text-lg font-bold">
              {loveWords[3]}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rose-gold font-playfair text-lg font-bold">
              {loveWords[6]}
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-gold font-playfair text-lg font-bold">
              {loveWords[9]}
            </div>

            {/* Clock Center */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-rose-gold rounded-full -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg" />

            {/* Hour Hand */}
            <div 
              className="absolute top-1/2 left-1/2 origin-bottom transition-transform duration-500"
              style={{ 
                transform: `translate(-50%, -100%) rotate(${rotation.hour}deg)`,
                width: '6px',
                height: '80px',
                backgroundColor: 'hsl(var(--rose-gold))',
                borderRadius: '3px'
              }}
            />

            {/* Minute Hand */}
            <div 
              className="absolute top-1/2 left-1/2 origin-bottom transition-transform duration-500"
              style={{ 
                transform: `translate(-50%, -100%) rotate(${rotation.minute}deg)`,
                width: '4px',
                height: '110px',
                backgroundColor: 'hsl(var(--soft-pink))',
                borderRadius: '2px'
              }}
            />

            {/* Second Hand */}
            <div 
              className="absolute top-1/2 left-1/2 origin-bottom transition-transform duration-100"
              style={{ 
                transform: `translate(-50%, -100%) rotate(${rotation.second}deg)`,
                width: '2px',
                height: '120px',
                backgroundColor: 'hsl(var(--champagne))',
                borderRadius: '1px'
              }}
            />
          </div>

          {/* Time Until Wedding */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl w-full">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-rose-gold/20 shadow-xl hover:scale-105 transition-transform"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-rose-gold">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-poppins mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-rose-gold/80 font-poppins italic animate-pulse px-4">
          Counting every heartbeat until forever begins 💕
        </p>
      </div>
    </section>
  );
};

export default LoveClock;
