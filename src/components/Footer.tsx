import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, CreditCard, Shield, Star } from "lucide-react";
import Logo from "@/assets/Logo.png";
const footerLinks = {
  "Shop": [
    { name: "All Products", href: "#" },
    { name: "Whisky", href: "#" },
    { name: "Vodka", href: "#" },
    { name: "Rum & Gin", href: "#" },
    { name: "Wine & Champagne", href: "#" },
    { name: "Premium Spirits", href: "#" },
  ],
  "Customer Service": [
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Track Order", href: "#" },
  ],
  "Company": [
    { name: "About Us", href: "#" },
    { name: "Store Locator", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
  ],
  "Legal": [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Responsible Drinking", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Trust badges */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
  <Star className="w-6 h-6 text-primary" />
</div>
<div>
  <h4 className="font-semibold text-foreground">Exclusive Deals</h4>
  <p className="text-sm text-muted-foreground">
    Special offers on every purchase
  </p>
</div>

            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Secure Payment</h4>
                <p className="text-sm text-muted-foreground">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">100% Authentic</h4>
                <p className="text-sm text-muted-foreground">Genuine products only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="/" className="inline-flex items-center space-x-2 mb-6">
          
            <img
              src={Logo}
              alt="RV Spirit Logo"
              className="h-22 w-40 object-contain"
            />
            </a>
            
            <p className="text-muted-foreground mb-6 max-w-xs">
              India's premier destination for the world's finest spirits. Quality, authenticity, and exceptional service since 2020.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tower A, ATS Bouquet, Sector-132, Noida 201304</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9289874738</span>
              </a>
              <a href="mailto:hello@rvspirit.in" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Info@rvgroupindia.com</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 RV Spirit. All rights reserved. Drink Responsibly.
            </p>
            
            {/* Age disclaimer */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-6 h-6 rounded-full border border-destructive flex items-center justify-center">
                <span className="text-xs text-destructive font-bold">21+</span>
              </div>
              <span>For adults of legal drinking age only</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
