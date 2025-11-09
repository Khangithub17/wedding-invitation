import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Elegant table setting with rose gold candles" },
    { src: gallery2, alt: "Beautiful bridal bouquet" },
    { src: gallery3, alt: "Wedding rings on silk fabric" },
    { src: gallery4, alt: "Elegant wedding cake" },
    { src: gallery5, alt: "Venue decoration with fairy lights" },
    { src: gallery6, alt: "Champagne glasses celebration" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-soft-pink/20 to-ivory">
      <div className="max-w-7xl mx-auto animate-fade-in">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Memories & Magic
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-rose-gold via-accent to-rose-gold rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-[var(--shadow-romantic)] animate-scale-in hover:shadow-[var(--shadow-glow)] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;