import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import WeImage from "@/assets/we.png";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Calendar, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = WeImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  const stats = [
    { icon: Calendar, value: "2022", label: "Year Founded", color: "text-yellow-500" },
    { icon: Award, value: "30+", label: "Years Experience", color: "text-yellow-500" },
    { icon: Users, value: "100+", label: "Team Members", color: "text-yellow-500" },
    { icon: Star, value: "50+", label: "Premium Products", color: "text-yellow-500" }
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section - Fixed height issues */}
      <section className="relative w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-16 md:pt-20">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          {/* Enhanced Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-[1]" />
          
          {/* Image with proper positioning */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <img
              src={WeImage}
              alt="RV Group - Premium Spirits Company"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                objectPosition: 'center 40%',
              }}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </div>

        {/* Text Content - Fixed positioning */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-3 sm:mb-4 md:mb-6"
            >
              <span className="bg-yellow-500/20 backdrop-blur-sm text-yellow-400 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-semibold">
                About R.V. Group
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-yellow-500 mb-4 sm:mb-5 md:mb-6 leading-tight">
              Who We
              <span className="block text-white mt-1 sm:mt-2">Are</span>
            </h1>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="leading-relaxed"
              >
                Founded in May 2022, R.V. Group is a premium-focused IMFL company driven by visionary
                leadership and deep industry expertise which represents a new generation of Indian liquor
                enterprises—rooted in discipline, driven by ambition, and guided by an uncompromising
                commitment to quality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="leading-relaxed"
              >
                Under the visionary leadership of <span className="text-yellow-400 font-semibold">Mrs. Sarita Rana</span> and{' '}
                <span className="text-yellow-400 font-semibold">Mr. Ajay Rana</span>, first-generation
                entrepreneurs with over three decades of collective industry experience, the Group began
                its journey as an authorized distributor of United Liquors Company.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="leading-relaxed"
              >
                By December 2022, the promoters assumed complete ownership, marking a decisive step
                towards brand-led growth. This momentum culminated in the incorporation of{' '}
                <span className="text-yellow-400 font-semibold">RV Refresh Liquors India Pvt. Ltd.</span>{' '}
                in July 2023.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6 sm:mt-8 md:mt-10"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-xl text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
                onClick={() => navigate('/product')}
              >
                Explore Our Collection
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient overlays for better blending */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* Stats Section - Fixed spacing */}
      <section className="relative bg-black py-12 sm:py-16 md:py-20 border-t border-yellow-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-2 sm:mb-3">
              Our Journey in <span className="text-yellow-500">Numbers</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Milestones that define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-5 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 ${stat.color} mx-auto mb-2 sm:mb-3 md:mb-4`} />
                <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative bg-gradient-to-b from-black to-gray-900 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl p-6 sm:p-8 border border-yellow-500/20"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-yellow-500 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                To become India's most trusted premium spirits company, setting new benchmarks in quality, 
                innovation, and customer satisfaction while celebrating the rich heritage of Indian craftsmanship.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl p-6 sm:p-8 border border-yellow-500/20"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-yellow-500 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                To deliver exceptional spirits that exceed expectations, foster enduring relationships with our 
                partners, and contribute to the community through sustainable practices and ethical business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}