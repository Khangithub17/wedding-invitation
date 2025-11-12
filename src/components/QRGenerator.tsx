import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { QrCode, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRGenerator = () => {
  const [guestName, setGuestName] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const { toast } = useToast();

  const generateQR = () => {
    if (!guestName.trim()) {
      toast({
        title: "Please enter a name",
        description: "Guest name is required to generate the invitation QR code.",
        variant: "destructive",
      });
      return;
    }

    // Create URL to invitation page with guest name
    const invitationUrl = `${window.location.origin}/invitation?guest=${encodeURIComponent(guestName.trim())}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(invitationUrl)}`;
    
    setQrCodeUrl(qrUrl);
    toast({
      title: "QR Code Generated! 🎉",
      description: `Scan the QR code to view ${guestName}'s personalized invitation card!`,
    });
  };

  const downloadQR = () => {
    if (!qrCodeUrl) return;
    
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `wedding-invitation-${guestName.replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "QR Code Downloaded! 📥",
      description: "Your invitation QR code has been saved.",
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-soft-pink/30 to-ivory">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-3">
              Wedding Invitation QR Generator
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-rose-gold via-accent to-rose-gold rounded-full" />
          </div>
          <p className="font-poppins text-lg text-muted-foreground mt-4">
            Create personalized QR codes for your wedding invitations
          </p>
        </div>

        <Card className="p-8 sm:p-12 bg-card/80 backdrop-blur-sm border-border shadow-[var(--shadow-romantic)]">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <QrCode className="text-rose-gold" size={32} />
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                Generate Guest Invitation
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="guestName" className="font-poppins text-sm font-medium text-foreground block mb-2">
                  Guest Name
                </label>
                <Input
                  id="guestName"
                  type="text"
                  placeholder="Enter guest name..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="font-poppins text-base"
                  onKeyDown={(e) => e.key === 'Enter' && generateQR()}
                />
              </div>

              <Button
                onClick={generateQR}
                size="lg"
                className="w-full font-poppins text-lg py-6 bg-rose-gold hover:bg-rose-gold/90 text-primary-foreground shadow-[var(--shadow-romantic)] transition-all duration-300 hover:scale-105"
              >
                Generate QR Code ✨
              </Button>
            </div>

            {qrCodeUrl && (
              <div className="mt-8 space-y-4 animate-scale-in">
                <div className="bg-white p-6 rounded-lg flex justify-center">
                  <img
                    src={qrCodeUrl}
                    alt={`Wedding invitation QR code for ${guestName}`}
                    className="w-64 h-64"
                  />
                </div>
                
                <div className="text-center">
                  <p className="font-poppins text-sm text-muted-foreground mb-2">
                    QR Code for: <span className="font-semibold text-foreground">{guestName}</span>
                  </p>
                  <p className="font-poppins text-xs text-rose-gold mb-4">
                    ✨ Scan this QR code to view a beautiful personalized invitation card!
                  </p>
                  <Button
                    onClick={downloadQR}
                    variant="outline"
                    size="lg"
                    className="font-poppins"
                  >
                    <Download className="mr-2" size={20} />
                    Download QR Code
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QRGenerator;
