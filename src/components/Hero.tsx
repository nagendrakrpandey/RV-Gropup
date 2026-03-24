import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import slide1 from "@/assets/3h.png";
import slide2 from "@/assets/2b.png";
import slide3 from "@/assets/3b.png";

const images = [
  {
    src: slide1,
    title: "Premium Spirits Collection",
    subtitle: "Experience the Finest Quality",
    cta: "Shop Now"
  },
  {
    src: slide2,
    title: "Exclusive Whiskey Selection",
    subtitle: "Discover Our Premium Range",
    cta: "Explore Collection"
  },
  {
    src: slide3,
    title: "Celebrate in Style",
    subtitle: "Limited Time Offers Available",
    cta: "View Offers"
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  // Auto Slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setImageLoaded(false); // Reset image loaded state on slide change
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setImageLoaded(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setImageLoaded(false);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setImageLoaded(false);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Slider - Fixed image display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/30 z-[1]" />
          <img
            src={images[current].src}
            alt={`Slide ${current + 1} - ${images[current].title}`}
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: 'center center',
              width: '100%',
              height: '100%'
            }}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay with Gradient - Improved for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 z-[2]" />
      
      {/* Additional gradient for edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-[2]" />

      {/* Content Overlay - Centered properly */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-[3]">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block text-amber-400 text-xs sm:text-sm md:text-base uppercase tracking-wider font-semibold mb-2 sm:mb-3 md:mb-4 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-500/30"
          >
            Welcome to Royal Virat Spirits
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl"
          >
            {images[current].title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4 drop-shadow-lg"
          >
            {images[current].subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 md:px-10 md:py-4 rounded-full"
              onClick={() => navigate('/product')}
            >
              {images[current].cta}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows - Responsive and touch-friendly */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-[4] bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-2.5 md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-[4] bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-2.5 md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Navigation Dots - Responsive with better styling */}
      <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-1/2 z-[4] flex -translate-x-1/2 gap-1.5 sm:gap-2 md:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "bg-amber-500 w-5 sm:w-6 md:w-8 h-1.5 sm:h-2 rounded-full"
                : "bg-white/60 hover:bg-white/90 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Optional, hidden on mobile */}
      <div className="hidden lg:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[4] animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-1.5 sm:h-2 bg-white/80 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Slide Counter - Optional */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 z-[4] bg-black/60 backdrop-blur-md rounded-full px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-white text-[10px] sm:text-xs md:text-sm font-mono border border-white/20">
        {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </div>

      {/* Preload next image for smooth transition */}
      <link rel="preload" as="image" href={images[(current + 1) % images.length].src} />
    </section>
  );
};