import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const EventDetails = () => {
  return (
    <section id="event-details" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory to-soft-pink/30">
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
              The Celebration Details
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-rose-gold via-accent to-rose-gold rounded-full" />
          </div>
        </div>

        <Card className="p-8 sm:p-12 bg-card/80 backdrop-blur-sm border-border shadow-[var(--shadow-romantic)] animate-scale-in">
          <div className="space-y-8">
            {/* Venue */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="text-rose-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  Venue
                </h3>
                <p className="font-poppins text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Dawat Party Plot opposite sentosa home city, near jhunjhunwala international school, Chanod Colony, Dungra, Vapi, Gujarat 396191
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="text-rose-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  Time
                </h3>
                <p className="font-poppins text-sm sm:text-base md:text-lg text-muted-foreground">
                  Reception: 6 PM To 11 PM
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.234567!2d72.9089!3d20.3925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIzJzMzLjAiTiA3MsKwNTQnMzIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dawat Party Plot, Vapi - Wedding Venue Location"
              />
            </div>

            {/* RSVP Button */}
            <div className="text-center pt-4">
              <Button 
                size="lg"
                className="font-poppins text-lg px-10 py-6 bg-rose-gold hover:bg-rose-gold/90 text-primary-foreground shadow-[var(--shadow-romantic)] transition-all duration-300 hover:scale-105"
              >
                RSVP Now ✨
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EventDetails;