import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Check } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Mail className="w-7 h-7 text-primary" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stay in the <span className="text-primary">Spirit</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 text-lg">
            Subscribe to our newsletter for exclusive offers, new arrivals, and expert recommendations delivered to your inbox.
          </p>

          {/* Form */}
          {isSubscribed ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 border border-primary/30 rounded-full text-primary">
              <Check className="w-5 h-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 bg-card border-border focus:border-primary rounded-full"
              />
              <Button variant="gold" size="xl" type="submit" className="rounded-full group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          {/* Privacy note */}
          <p className="text-xs text-muted-foreground/70 mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
          </p>
        </div>
      </div>
    </section>
  );
};
