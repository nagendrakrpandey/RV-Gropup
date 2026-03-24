import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import whiskyBottle from "@/assets/whisky-bottle.jpg";

export const SpecialOffers = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Offer */}
          <div className="relative bg-gradient-to-br from-card via-card to-muted rounded-3xl overflow-hidden border border-primary/30 p-8 md:p-12 min-h-[500px] flex flex-col justify-between group hover:border-primary/60 transition-all duration-500">
            {/* Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Limited Time
            </div>

            {/* Image */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full">
              <img
                src={whiskyBottle}
                alt="Special Offer"
                className="absolute bottom-0 right-0 h-full object-contain
             transform translate-x-10
             group-hover:scale-105 group-hover:-translate-y-4
             transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent" />
            </div>

            <div className="relative z-10 mt-16">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Festive Season
                <span className="block text-primary">Sale</span>
              </h3>

              <p className="text-muted-foreground mb-6 max-w-sm">
                Save up to 30% on premium spirits. Perfect for celebrations and
                gifting.
              </p>

              {/* Countdown */}
              <div className="flex items-center gap-2 text-primary mb-8">
                <Clock className="w-5 h-5" />
                <span className="font-mono text-lg">Ends in: 2d 14h 32m</span>
              </div>

              <Button variant="hero" size="lg" className="group/btn">
                Shop Sale
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Side Offers */}
          <div className="grid gap-8">
            {/* Offer 2 */}
            <div className="relative bg-card rounded-2xl overflow-hidden border border-border p-8 group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-primary text-sm uppercase tracking-widest">
                    New Year Special
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-foreground mt-2">
                    Champagne Collection
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    20% off on all champagnes
                  </p>
                  <Button variant="outline" className="mt-4 group/btn">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  🍾
                </div>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="relative bg-card rounded-2xl overflow-hidden border border-border p-8 group hover:border-primary/50 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-primary text-sm uppercase tracking-widest">
                    Members Only
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-foreground mt-2">
                    VIP Rewards Club
                  </h4>
                  <p className="text-muted-foreground mt-2">
                    Earn points on every purchase
                  </p>
                  <Button variant="outline" className="mt-4 group/btn">
                    Join Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  👑
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
