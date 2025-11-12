import coupleDance from "@/assets/couple-dance.jpg";

const CoupleDance = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-ivory to-soft-pink/30 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-playfair text-rose-gold mb-3">
            Dancing into Forever 💃🕺
          </h2>
          <p className="text-lg text-muted-foreground font-poppins italic">
            "In every step we take together, our hearts beat as one"
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-rose-gold via-accent to-rose-gold rounded-full mt-4" />
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 to-accent/20 rounded-3xl blur-3xl" />
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border-2 border-rose-gold/20 shadow-[var(--shadow-glow)]">
            <img
              src={coupleDance}
              alt="Saheba and Sufiyan dancing in their wedding attire"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every dance tells a story, and ours begins with love, laughter, and a lifetime of memories to create together. 
            Join us as we take our first steps into forever. ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleDance;
