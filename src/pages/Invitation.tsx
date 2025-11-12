import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InvitationCard from "@/components/InvitationCard";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Invitation = () => {
  const [searchParams] = useSearchParams();
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const name = searchParams.get("guest");
    setGuestName(name || "Guest");
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-pink/30 via-ivory to-champagne/30 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <Button
            onClick={() => window.location.href = "/"}
            variant="outline"
            className="mb-4"
          >
            <Home className="mr-2" size={18} />
            Back to Wedding Website
          </Button>
        </div>
        
        <div className="animate-scale-in">
          <InvitationCard guestName={guestName} />
        </div>

        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="font-poppins text-muted-foreground">
            We can't wait to celebrate with you! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
