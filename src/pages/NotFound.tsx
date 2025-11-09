import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-4xl font-playfair font-bold text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground font-poppins">Oops! Page not found</p>
        <a 
          href="/" 
          className="text-rose-gold hover:text-rose-gold/80 underline font-poppins transition-colors duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
