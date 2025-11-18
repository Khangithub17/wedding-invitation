import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Heart, UserPlus, Utensils } from "lucide-react";

const RSVPForm = () => {
  const [guestName, setGuestName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [mealPreference, setMealPreference] = useState("");
  const [plusOnes, setPlusOnes] = useState("0");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guestName || !attendance) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and attendance status",
        variant: "destructive",
      });
      return;
    }

    if (attendance === "yes" && !mealPreference) {
      toast({
        title: "Missing Information",
        description: "Please select your meal preference",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const rsvps = JSON.parse(localStorage.getItem("rsvps") || "[]");
      rsvps.push({
        name: guestName,
        attendance,
        mealPreference: attendance === "yes" ? mealPreference : "N/A",
        plusOnes: attendance === "yes" ? plusOnes : "0",
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("rsvps", JSON.stringify(rsvps));

      toast({
        title: "RSVP Submitted! 🎉",
        description: attendance === "yes" 
          ? "We can't wait to celebrate with you!" 
          : "You'll be missed, but we understand!",
      });

      // Reset form
      setGuestName("");
      setAttendance("");
      setMealPreference("");
      setPlusOnes("0");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Heart className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-crimson text-foreground mb-4">
            RSVP to Our Wedding
          </h2>
          <p className="text-muted-foreground text-lg">
            Please let us know if you can join us in our celebration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl animate-scale-in">
          {/* Guest Name */}
          <div className="space-y-2">
            <Label htmlFor="guestName" className="text-lg font-crimson">
              Your Name *
            </Label>
            <Input
              id="guestName"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter your full name"
              className="text-lg h-12"
              required
            />
          </div>

          {/* Attendance */}
          <div className="space-y-4">
            <Label className="text-lg font-crimson">
              Will you be attending? *
            </Label>
            <RadioGroup value={attendance} onValueChange={setAttendance}>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer flex-1 text-base">
                  ✨ Yes, I'll be there!
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer flex-1 text-base">
                  💔 Unfortunately, I can't make it
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Conditional fields for "Yes" attendance */}
          {attendance === "yes" && (
            <>
              {/* Meal Preference */}
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="meal" className="text-lg font-crimson flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Meal Preference *
                </Label>
                <Select value={mealPreference} onValueChange={setMealPreference}>
                  <SelectTrigger className="text-lg h-12">
                    <SelectValue placeholder="Select your meal preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetarian">🥗 Vegetarian</SelectItem>
                    <SelectItem value="non-vegetarian">🍗 Non-Vegetarian</SelectItem>
                    <SelectItem value="vegan">🌱 Vegan</SelectItem>
                    <SelectItem value="special">🍽️ Special Dietary Requirements</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Plus Ones */}
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="plusOnes" className="text-lg font-crimson flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Number of Plus Ones
                </Label>
                <Select value={plusOnes} onValueChange={setPlusOnes}>
                  <SelectTrigger className="text-lg h-12">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Just Me</SelectItem>
                    <SelectItem value="1">+1 Guest</SelectItem>
                    <SelectItem value="2">+2 Guests</SelectItem>
                    <SelectItem value="3">+3 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-lg h-14 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Submit RSVP
              </span>
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Required fields
        </p>
      </div>
    </section>
  );
};

export default RSVPForm;
