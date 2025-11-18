import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-soft-pink via-soft-pink/50 to-ivory border-t border-rose-gold/20">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Made with love message */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-poppins">
          <span>Made with</span>
          <Heart className="fill-rose-gold text-rose-gold animate-pulse" size={20} />
          <span>by your forever friend</span>
        </div>
        
        <p className="font-playfair text-xl sm:text-2xl font-semibold text-rose-gold">
          Shahbaz Khan
        </p>

        {/* Decorative divider */}
        <div className="flex justify-center py-4">
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;