import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2025-12-26T19:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-soft-pink/30 via-ivory to-soft-pink/20">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            The Big Day Arrives In…
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-rose-gold via-accent to-rose-gold rounded-full" />
        </div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {timeUnits.map((unit, index) => (
            <Card 
              key={unit.label}
              className="p-3 sm:p-6 bg-card/80 backdrop-blur-sm border-2 border-rose-gold/20 shadow-[var(--shadow-romantic)] animate-scale-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-rose-gold mb-2">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="font-poppins text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Sweet Message */}
        <p className="font-playfair text-base sm:text-xl md:text-2xl text-muted-foreground italic px-4">
          Counting down to forever with you, Saheba 💞
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;