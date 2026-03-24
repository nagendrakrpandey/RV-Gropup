import { useState, useRef, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ZoomIn, MapPin, Clock, Building, Warehouse, Factory, 
  ChevronLeft, ChevronRight, Shield, Users, Zap, Thermometer, 
  Truck, Settings, Coffee 
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import your images from assets
import factory1 from "@/assets/1.jpeg";
import factory2 from "@/assets/2.jpeg";
import factory4 from "@/assets/4.jpeg";
import factory5 from "@/assets/5.jpeg";
import factory6 from "@/assets/6.png";
import factory7 from "@/assets/7.png";

// Factory & Warehouse photos data with actual images
const factoryPhotos = [
  {
    id: 1,
    name: "Main Production Floor",
    category: "Production",
    location: "Building A",
    year: "Est. 1998",
    image: factory1,
    description: "Our state-of-the-art production floor with precision machinery and quality control stations.",
    details: "Spanning over 10,000 sq.ft., equipped with automated production lines running 24/7 with robotic arms and AI-assisted quality monitoring.",
    features: ["Automated Assembly Lines", "Robotic Precision", "ISO 9001 Certified", "Real-time Monitoring"]
  },
  {
    id: 2,
    name: "Raw Materials Warehouse",
    category: "Siting Area",
    location: "Warehouse 3",
    year: "Renovated 2022",
    image: factory2,
    description: "Climate-controlled storage for premium raw materials ensuring quality preservation.",
    details: "Temperature maintained at 18°C with humidity control systems and real-time monitoring. RFID tracking for all inventory.",
    features: ["Climate Controlled", "RFID Tracking", "24/7 Security", "Automated Inventory"]
  },
 
  {
    id: 4,
    name: "Automated Bottling Line",
    category: "Production",
    location: "Packaging Hall",
    year: "Automated 2023",
    image: factory4,
    description: "High-speed automated bottling and packaging line with precision filling technology.",
    details: "Capacity of 5,000 bottles per hour with laser-guided quality inspection systems. Zero-touch contamination process.",
    features: ["5,000 bottles/hour", "Laser Inspection", "Zero Contamination", "Automated Packaging"]
  },
  {
    id: 5,
    name: "Finished Goods Storage",
    category: "Storage",
    location: "Main Warehouse",
    year: "Expanded 2021",
    image: factory5,
    description: "Organized storage facility for finished products awaiting distribution.",
    details: "20,000 pallet capacity with automated retrieval systems and inventory management. FIFO system implementation.",
    features: ["20,000 Pallets", "Automated Retrieval", "FIFO System", "Smart Shelving"]
  },
  {
    id: 6,
    name: "Industrial Power Plant",
    category: "Utilities",
    location: "Energy Center",
    year: "Energy Efficient",
    image: factory6,
    description: "High-efficiency steam generation systems powering our production processes.",
    details: "Condensing boilers with 95% efficiency and heat recovery systems reducing energy consumption by 30%. Solar hybrid system installed.",
    features: ["95% Efficiency", "Heat Recovery", "Solar Hybrid", "Green Energy"]
  },
  {
    id: 7,
    name: "Modern Loading Dock",
    category: "Warehouse",
    location: "Shipping Bay",
    year: "24/7 Operations",
    image: factory7,
    description: "Modern loading docks equipped for efficient dispatch and logistics operations.",
    details: "12 loading bays with hydraulic levelers and real-time tracking integration. GPS-enabled fleet management.",
    features: ["12 Loading Bays", "Hydraulic Systems", "GPS Tracking", "24/7 Operations"]
  }
];

const categories = [
  { name: "All", icon: <Building size={16} />, count: 7, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Production", icon: <Factory size={16} />, count: 2, color: "from-gold/20 to-orange-500/20" },
  { name: "Storage", icon: <Warehouse size={16} />, count: 2, color: "from-emerald-500/20 to-green-500/20" },
  { name: "Utilities", icon: <Zap size={16} />, count: 1, color: "from-yellow-500/20 to-amber-500/20" },
  { name: "Warehouse", icon: <Truck size={16} />, count: 1, color: "from-indigo-500/20 to-blue-500/20" }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxRef = useRef(null);

  const filteredPhotos = selectedCategory === "All" 
    ? factoryPhotos 
    : factoryPhotos.filter(p => p.category === selectedCategory);

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setLightboxIndex(index);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
    setLightboxIndex(newIndex);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedPhoto) return;
    
    if (e.key === 'ArrowRight') {
      navigateLightbox('next');
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox('prev');
    } else if (e.key === 'Escape') {
      setSelectedPhoto(null);
    }
  };

  // Add event listener for keyboard navigation - useEffect का उपयोग करें
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]); // selectedPhoto dependency add की है

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0A0A0A] to-background" />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-32 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float 20s infinite linear ${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 text-xs font-medium tracking-[0.3em] uppercase text-gold/80"
            >
              <Factory size={14} />
              Manufacturing Excellence Since 1998
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight"
            >
              Where <span className="text-gradient-gold">Quality</span><br />
              Meets <span className="text-gradient-gold">Innovation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
            >
              Step inside our world-class manufacturing facilities. Experience the precision, 
              technology, and dedication that goes into crafting excellence across 50,000+ sq.ft. of advanced infrastructure.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              {[
                { icon: <Factory />, value: "24/7", label: "Operations" },
                { icon: <Warehouse />, value: "50K+", label: "Square Feet" },
                { icon: <Clock />, value: "25+", label: "Years Experience" },
                { icon: <Shield />, value: "ISO", label: "Certified" }
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-gold/5 to-transparent border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="font-serif text-2xl text-gold mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Category Filter */}
      <section className="sticky top-20 z-40 py-6 bg-background/90 backdrop-blur-xl border-b border-gold/10 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <motion.button
                  key={cat.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`relative overflow-hidden group ${isSelected ? 'ring-2 ring-gold/50' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
                  <div className={`relative flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-gold to-gold-light text-primary-foreground shadow-lg shadow-gold/30"
                      : "bg-primary/10 text-muted-foreground hover:bg-primary/20 border border-gold/10"
                  }`}>
                    {cat.icon}
                    <span className="font-medium">{cat.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isSelected ? "bg-background/30" : "bg-primary/20"
                    }`}>
                      {cat.count}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(photo, index)}
                >
                  {/* Enhanced Luxury Card */}
                  <div className="glass-card p-4 cursor-pointer group hover:border-gold/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Image Container with Real Image */}
                    <div className="relative overflow-hidden rounded-xl h-64 mb-4 flex-shrink-0">
                      <img 
                        src={photo.image} 
                        alt={photo.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-gold border border-gold/30">
                          {photo.category === "Production" && <Factory size={12} />}
                          {photo.category === "Storage" && <Warehouse size={12} />}
                          {photo.category === "Laboratory" && <ZoomIn size={12} />}
                          {photo.category === "Utilities" && <Zap size={12} />}
                          {photo.category === "Logistics" && <Truck size={12} />}
                          {photo.category}
                        </span>
                      </div>
                      
                      {/* View Button */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold/90 to-gold-light/90 backdrop-blur-sm flex items-center justify-center border border-gold shadow-lg shadow-gold/30">
                          <ZoomIn className="text-primary-foreground" size={18} />
                        </div>
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute bottom-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-background/90 backdrop-blur-sm text-xs font-medium text-cream">
                          {photo.year}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="flex-grow">
                      <div className="mb-3">
                        <h3 className="font-serif text-xl text-cream mb-2 line-clamp-1">
                          {photo.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                          {photo.description}
                        </p>
                      </div>
                      
                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {photo.features?.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-muted-foreground border border-primary/20">
                            {feature}
                          </span>
                        ))}
                        {photo.features?.length > 2 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-gold/10 text-gold border border-gold/20">
                            +{photo.features.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      {/* Footer Info */}
                      <div className="pt-4 mt-auto border-t border-gold/10">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <MapPin size={14} />
                            {photo.location}
                          </span>
                          <span className="text-gold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                            View Details
                            <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Enhanced Empty State */}
          {filteredPhotos.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24"
            >
              <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-6">
                <Factory size={72} className="text-gold/40" />
              </div>
              <h3 className="text-2xl font-serif text-cream mb-3">No Photos Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                We're currently updating this section with more photos of our {selectedCategory.toLowerCase()} facilities.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 text-gold hover:border-gold/40 transition-all duration-300"
              >
                View All Facilities
              </button>
            </motion.div>
          )}
          
          {/* Gallery Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-10 border-t border-gold/10"
          >
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Showing {filteredPhotos.length} of {factoryPhotos.length} premium facilities
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
              onClick={() => setSelectedPhoto(null)}
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="max-w-6xl w-full pointer-events-auto relative"
                ref={lightboxRef}
              >
                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('prev');
                  }}
                  className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center text-cream border border-gold/30 hover:bg-gold hover:border-gold transition-all duration-300 shadow-2xl shadow-black/50 hover:scale-110"
                >
                  <ChevronLeft size={28} />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('next');
                  }}
                  className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center text-cream border border-gold/30 hover:bg-gold hover:border-gold transition-all duration-300 shadow-2xl shadow-black/50 hover:scale-110"
                >
                  <ChevronRight size={28} />
                </button>
                
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute -top-4 -right-4 md:-top-12 md:-right-12 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center text-cream hover:bg-red-500/30 hover:text-red-300 transition-colors border border-gold/20 hover:border-red-500/50 shadow-xl"
                >
                  <X size={20} />
                </button>

                {/* Lightbox Content */}
                <div className="glass-card p-6 border border-gold/20 shadow-2xl shadow-black/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="relative h-[500px] overflow-hidden rounded-xl group">
                      <img 
                        src={selectedPhoto.image} 
                        alt={selectedPhoto.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Image Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                      
                      {/* Top Info */}
                      <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                        <div>
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl text-sm font-medium text-gold border border-gold/30">
                            {selectedPhoto.category}
                            <span className="h-1 w-1 rounded-full bg-gold/60" />
                            {selectedPhoto.year}
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground bg-background/60 backdrop-blur-xl px-3 py-1.5 rounded-lg">
                            Photo {lightboxIndex + 1} of {filteredPhotos.length}
                          </div>
                        </div>
                      </div>
                      
                      {/* Location Badge */}
                      <div className="absolute bottom-6 left-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-xl text-cream">
                          <MapPin size={16} className="text-gold" />
                          <span className="text-sm font-medium">{selectedPhoto.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Details Section */}
                    <div className="flex flex-col justify-center p-4">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg shadow-gold/30">
                          {selectedPhoto.category === "Production" && <Factory size={28} className="text-primary-foreground" />}
                          {selectedPhoto.category === "Storage" && <Warehouse size={28} className="text-primary-foreground" />}
                          {selectedPhoto.category === "Laboratory" && <ZoomIn size={28} className="text-primary-foreground" />}
                          {selectedPhoto.category === "Utilities" && <Zap size={28} className="text-primary-foreground" />}
                          {selectedPhoto.category === "Logistics" && <Truck size={28} className="text-primary-foreground" />}
                        </div>
                        <div>
                          <span className="text-xs text-gold uppercase tracking-wider font-medium">
                            {selectedPhoto.category} FACILITY
                          </span>
                          <h2 className="font-serif text-3xl lg:text-4xl text-cream mt-1">
                            {selectedPhoto.name}
                          </h2>
                        </div>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-sm font-medium text-gold/80 mb-3 flex items-center gap-2">
                            <span className="h-1 w-6 bg-gradient-to-r from-gold to-transparent rounded-full" />
                            Overview
                          </h4>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {selectedPhoto.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gold/80 mb-3 flex items-center gap-2">
                            <span className="h-1 w-6 bg-gradient-to-r from-gold to-transparent rounded-full" />
                            Technical Specifications
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {selectedPhoto.details}
                          </p>
                        </div>
                        
                        {/* Features Grid */}
                        {selectedPhoto.features && (
                          <div>
                            <h4 className="text-sm font-medium text-gold/80 mb-3 flex items-center gap-2">
                              <span className="h-1 w-6 bg-gradient-to-r from-gold to-transparent rounded-full" />
                              Key Features
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {selectedPhoto.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                                  </div>
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-gold/10">
                            <Building size={20} className="text-gold mx-auto mb-3" />
                            <span className="text-sm text-muted-foreground block mb-1">Location</span>
                            <span className="text-cream font-medium">{selectedPhoto.location}</span>
                          </div>
                          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-gold/10">
                            <Clock size={20} className="text-gold mx-auto mb-3" />
                            <span className="text-sm text-muted-foreground block mb-1">Operational Status</span>
                            <span className="text-cream font-medium">Active • 24/7</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="luxury-divider mt-8" />
                      
                      <div className="pt-6">
                        <p className="text-xs text-muted-foreground text-center">
                          Use ← → arrow keys to navigate • Press ESC or click outside to close
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <Footer />
      
      {/* CSS को global CSS file में add करें या inline style में करें */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateX(-100%) rotate(0deg);
          }
          100% {
            transform: translateX(100vw) rotate(360deg);
          }
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-gradient-gold {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #F0C420 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .luxury-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
        }
      `}</style>
    </div>
  );
};

export default Gallery;