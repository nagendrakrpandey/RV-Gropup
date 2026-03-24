import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building, Navigation, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  // Office coordinates and details
  const officeLocation = {
    address: "Tower A, ATS Bouquet, Noida Sector - 132, Noida 201304, Uttar Pradesh, India",
    lat: 28.501859, // Approximate coordinates for Noida Sector 132
    lng: 77.363419,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to open Google Maps directions
  const openGoogleMapsDirections = () => {
    const destination = encodeURIComponent(officeLocation.address);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
  };

  // Function to open Google Maps location view
  const openGoogleMapsView = () => {
    const url = `https://www.google.com/maps?q=${officeLocation.lat},${officeLocation.lng}&z=17&hl=en`;
    window.open(url, '_blank');
  };

  // Function to get current location and show directions
  const getDirectionsWithCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const url = `https://www.google.com/maps/dir/${userLat},${userLng}/${officeLocation.lat},${officeLocation.lng}`;
          window.open(url, '_blank');
        },
        (error) => {
          console.error("Error getting location:", error);
          // Fallback to regular directions if location access is denied
          openGoogleMapsDirections();
        }
      );
    } else {
      // Fallback for browsers that don't support geolocation
      openGoogleMapsDirections();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Glossy Overlay */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold/10 to-transparent border border-gold/30 text-xs font-medium tracking-[0.3em] uppercase text-gold">
              Connect With Us
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              We're here to assist you. Reach out for inquiries, partnerships, or to learn more about our premium spirits collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0F0F0F] to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                {/* Glossy background effect */}
                <div className="absolute top-0 right-0 w-40 h-40 -mt-8 -mr-8 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-700" />
                
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center">
                      <Building className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl text-cream">
                        Visit Our <span className="text-gradient-gold">Office</span>
                      </h2>
                      <p className="text-muted-foreground text-sm">Corporate Headquarters</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Experience the excellence of RV Refresh Liquors firsthand. Visit our corporate office to discuss partnerships, explore opportunities, or learn more about our premium offerings.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Corporate Address",
                      lines: [
                        "Tower A, ATS Bouquet",
                        "Noida Sector - 132",
                        "Noida 201304",
                        "Uttar Pradesh, India"
                      ],
                      color: "from-blue-500/10 to-gold/5",
                      borderColor: "border-blue-500/30"
                    },
                    {
                      icon: Phone,
                      title: "Contact Numbers",
                      lines: [
                        "+91-9289874738",
                        "+91 98710 90165",
                        "Toll Free: 1800-XXX-XXXX"
                      ],
                      color: "from-green-500/10 to-gold/5",
                      borderColor: "border-green-500/30"
                    },
                    {
                      icon: Mail,
                      title: "Email Address",
                      lines: [
                        "info@rvrefresh.com"
                      ],
                      color: "from-red-500/10 to-gold/5",
                      borderColor: "border-red-500/30"
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      lines: [
                        "Monday - Friday: 9:00 AM - 7:00 PM",
                        "Saturday: 10:00 AM - 5:00 PM",
                        "Sunday: Closed"
                      ],
                      color: "from-purple-500/10 to-gold/5",
                      borderColor: "border-purple-500/30"
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 group/item"
                    >
                      <div className={`h-12 w-12 rounded-xl ${item.color} border ${item.borderColor} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg text-cream mb-1 group-hover/item:text-gold transition-colors duration-300">
                          {item.title}
                        </h3>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center">
                      <Navigation className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-lg text-cream">Location Map</h3>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl border border-white/10 overflow-hidden relative group/map">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Map visualization */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-gold/5" />
                      <div className="relative z-10 text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                          <MapPin className="h-8 w-8 text-gold" />
                        </div>
                        <p className="text-cream font-medium mb-2">ATS Bouquet, Sector 132</p>
                        <p className="text-muted-foreground text-sm">Noida, Uttar Pradesh</p>
                      </div>
                      
                      {/* Interactive buttons */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                        <button 
                          onClick={getDirectionsWithCurrentLocation}
                          className="px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 rounded-lg text-cream text-sm hover:from-gold/30 hover:to-gold/20 transition-all duration-300 flex items-center gap-2"
                        >
                          <Navigation className="h-4 w-4" />
                          Get Directions
                        </button>
                        <button 
                          onClick={openGoogleMapsView}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-500/10 border border-blue-500/30 rounded-lg text-cream text-sm hover:from-blue-500/30 hover:to-blue-500/20 transition-all duration-300 flex items-center gap-2"
                        >
                          <Globe className="h-4 w-4" />
                          View on Map
                        </button>
                      </div>
                    </div>
                    
                    {/* Additional location action buttons */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button 
                        onClick={openGoogleMapsDirections}
                        className="px-3 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 rounded-lg text-cream text-xs hover:border-gold/30 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <MapPin className="h-3 w-3" />
                        Open in Google Maps
                      </button>
                      <button 
                        onClick={() => {
                          // Copy address to clipboard
                          navigator.clipboard.writeText(officeLocation.address);
                          // You can add a toast notification here
                          alert("Address copied to clipboard!");
                        }}
                        className="px-3 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 rounded-lg text-cream text-xs hover:border-gold/30 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Mail className="h-3 w-3" />
                        Copy Address
                      </button>
                    </div>
                    
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden group">
                {/* Background effects */}
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-all duration-700" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-all duration-700 delay-300" />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="h-px w-8 bg-gold" />
                      <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold">
                        Send Message
                      </span>
                      <div className="h-px w-8 bg-gold" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-cream mb-3">
                      Let's Start a <span className="text-gradient-gold">Conversation</span>
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you promptly.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 px-6"
                    >
                      <div className="relative inline-block mb-6">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/50 flex items-center justify-center mx-auto">
                          <CheckCircle className="h-10 w-10 text-gold" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-ping" />
                      </div>
                      <h3 className="font-serif text-2xl text-cream mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Thank you for reaching out. Our team will review your message and respond within 24-48 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-lg text-cream hover:from-gold/20 hover:to-gold/10 transition-all duration-300 inline-flex items-center gap-2"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-cream/70 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="glass-input w-full px-4 py-3 text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 rounded-lg bg-input/30"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-cream/70 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="glass-input w-full px-4 py-3 text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 rounded-lg bg-input/30"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-cream/70 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="glass-input w-full px-4 py-3 text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 rounded-lg bg-input/30"
                            placeholder="Enter your contact number"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-cream/70 mb-2">
                            Subject *
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="glass-input w-full px-4 py-3 text-cream bg-input/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 rounded-lg appearance-none"
                          >
                            <option value="" className="bg-card">
                              Select inquiry type
                            </option>
                            <option value="general" className="bg-card">
                              General Inquiry
                            </option>
                            <option value="partnership" className="bg-card">
                              Business Partnership
                            </option>
                            <option value="distribution" className="bg-card">
                              Distribution Inquiry
                            </option>
                            <option value="press" className="bg-card">
                              Press & Media
                            </option>
                            <option value="careers" className="bg-card">
                              Career Opportunities
                            </option>
                            <option value="feedback" className="bg-card">
                              Product Feedback
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-cream/70 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="glass-input w-full px-4 py-3 text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 rounded-lg bg-input/30 resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-gold via-amber-500 to-gold text-black font-medium rounded-lg hover:from-amber-400 hover:via-gold hover:to-amber-400 transition-all duration-500 shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-3 group/btn"
                      >
                        <span>Send Message</span>
                        <Send className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>

                      <p className="text-xs text-muted-foreground text-center pt-4 border-t border-white/10">
                        We respect your privacy and will never share your information.
                        Response time: 24-48 hours during business days.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="glass-card p-6 rounded-xl border border-white/10 text-center group hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-5 w-5 text-green-400" />
                  </div>
                  <h4 className="font-serif text-lg text-cream mb-1">Quick Response</h4>
                  <p className="text-xs text-muted-foreground">24-48 hour response time guaranteed</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-white/10 text-center group hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="font-serif text-lg text-cream mb-1">Dedicated Support</h4>
                  <p className="text-xs text-muted-foreground">Personalized assistance for all inquiries</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-gold/10 to-red-500/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.8)_100%)]" />
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="font-serif text-2xl text-cream mb-2">
                    Urgent Business Inquiry?
                  </h3>
                  <p className="text-muted-foreground">
                    For time-sensitive matters, contact our corporate team directly
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+919289874738" 
                    className="px-6 py-3 bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/30 rounded-lg text-cream hover:from-red-500/30 hover:to-red-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Emergency Line: +91-9289874738
                  </a>
                  <a 
                    href="mailto:info@rvrefresh.com" 
                    className="px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-lg text-cream hover:from-amber-500/30 hover:to-amber-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    info@rvrefresh.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;