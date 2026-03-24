import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, Star, Package, Filter, ChevronRight, 
  ChevronLeft, X, Search, Heart, ShoppingCart, 
  TrendingUp, Shield, Truck, Zap, Tag, 
  Sparkles, ArrowRight, Check, Award, GlassWater, Wine, Beer, Coffee, Droplets
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import kalindriWhisky from "@/assets/whisky-bottle.jpg";
import blueHuntWhiskey from "@/assets/magic vodka.jpg";
import royalViratWhiskey from "@/assets/3.jpeg";
import kalindri from "@/assets/kalindri2.jpeg";
import kalindri1 from "@/assets/super.jpeg";
import magicVodka1 from "@/assets/32.jpeg";
import magicVodka from "@/assets/3.1.jpeg";
import magicGreenVodka from "@/assets/33.jpeg";
import msGoldRum from "@/assets/ms goldxxx rum.jpg";
import eightyFortyGin from "@/assets/gin.png";
import royalViratBrandy from "@/assets/rum-bottle.jpg";
import royalViratGreenBeer from "@/assets/Royal Virat Green.png";
import royalViratRedBeer from "@/assets/Royal viral red beer.png";
import LIKEME from "@/assets/wine-bottle.jpg"
import royalVirat15Beer from "@/assets/Royal virat .png";
import blueHuntSoda from "@/assets/Blue hunt Soda.png";
import blueHuntWater from "@/assets/Blue Hunt Water.png";

const allProducts = [
  {
    id: 1,
    name: "ROYAL VIRAT-PREMIUM MALT WISKEY",
    category: "Whiskey",
    image: kalindriWhisky,
    description: "Primium Malt Whiskey",

fullDescription: "Royal Virat Premium Malt Whiskey is a tribute to strength, legacy, and quiet authority. Crafted for those who lead with confidence rather than noise, Royal Virat blends select malt spirits with fine grain whiskies to create a refined and balanced character. Every sip reflects royal composure—smooth, mature, and dignified. Inspired by timeless royalty and modern ambition, Royal Virat is not just a whiskey; it is a statement of class and command. With its bright golden color, warm malt aroma, hints of honeyed oak and subtle spice, the whisky delivers a smooth malt richness on the palate with touches of vanilla and gentle wood. The finish is long, rounded, and elegant with a lingering warmth that defines its premium character. Best enjoyed neat or on the rocks to appreciate its true malt depth, Royal Virat also adds a premium touch to classic whisky cocktails.",


    features: [],
    stock: 45,
    discount: 17,
    tags: ["Premium", "Limited", "Bestseller"]
  },
  {
    id: 2,
    name: "ROYAL VIRAT (RVP) ",
    category: "Whiskey",
    image: blueHuntWhiskey,
description: "Gold Reserve",

fullDescription: "Royal Virat Gold Reserve Malt Whiskey is a premium blend created for individuals who value distinction and refined taste. Carefully crafted by blending select malt spirits with fine grain whiskies, it achieves a smooth, balanced character that reflects true craftsmanship.\n\nEvery sip reveals a rich and elegant profile—smooth, mature, and dignified. The whisky delivers warm malt depth with subtle layers of oak and gentle sweetness, creating a refined tasting experience that lingers pleasantly.\n\nInspired by timeless royalty and modern ambition, Royal Virat Gold Reserve is more than just a whisky. It is a symbol of confidence, prestige, and leadership. Designed for moments that deserve something exceptional, it stands as a statement of class and command.",
    features: [],
    specifications: [
      { label: "Alcohol Content", value: "42% ABV" },
      { label: "Volume", value: "750ml" },
      { label: "Type", value: "Blended Whisky" },
      { label: "Aging", value: "8 Years" }
    ],
    stock: 38,
    discount: 15,
    tags: ["Premium", "Aged", "Smooth"]
  },
  {
    id: 3,
    name: "KALINDRI",
    category: "Whiskey",
    price: 3499,
    originalPrice: 3999,
    rating: 4.9,
    reviews: 142,
    image: kalindri,
    description: "Ultra Premimum Single Malt Whiskey",
fullDescription: "KALINDRI Ultra Premium Single Malt Whiskey is a celebration of India's timeless heritage, crafted with precision and an uncompromising commitment to excellence. Inspired by the ancient river cultures of India—symbols of patience, purity, and balance—KALINDRI represents a spirit that flows deep with character and refinement.\n\nHeritage-Inspired Character: Carefully crafted using select malted barley and traditional distillation techniques, KALINDRI delivers a rich and layered flavor profile with subtle notes of oak, warm spices, and gentle sweetness, reflecting both depth and elegance.\n\nCrafted with Tradition: Each batch is produced with respect for time-honored whisky-making traditions while embracing modern refinement. The meticulous process ensures a smooth, complex spirit that embodies balance and sophistication.\n\nExceptional Smoothness: With its deep golden hue, refined aroma, and long, elegant finish, KALINDRI offers a luxurious tasting experience. Designed for those who appreciate authenticity and distinction, it is best enjoyed neat, on the rocks, or savored slowly in moments of celebration.",
    features: [],
    specifications: [
      { label: "Alcohol Content", value: "40% ABV" },
      { label: "Volume", value: "750ml" },
      { label: "Type", value: "Premium Blended Whisky" },
      { label: "Aging", value: "12 Years" }
    ],
    stock: 52,
    discount: 13,
    tags: ["Premium", "Royal", "Smooth"]
  },
  {
    id: 4,
    name: "BLUE HUNT",
    category: "Whiskey",
    price: 3499,
    image: royalViratWhiskey,
    description: "Classic whiskey",
fullDescription: "Blue Hunt Classic Whiskey is bold, lively, and unapologetically social. Created for those who thrive in motion—late nights, loud laughter, and unforgettable gatherings—it delivers a smooth yet spirited profile that fits every occasion.\n\nBalanced and Versatile Character: Carefully blended to achieve an approachable and well-balanced flavor, Blue Hunt Classic offers smooth grain richness with gentle hints of oak and subtle spice, creating a lively yet easy-drinking whiskey.\n\nCrafted for Every Celebration: Designed to be accessible and versatile, this classic blend complements a variety of moments—from energetic parties to relaxed evenings with friends. Its balanced character makes it enjoyable both neat and in mixed drinks.\n\nSmooth and Enjoyable Finish: With a refined texture and a warm, satisfying finish, Blue Hunt Classic Whiskey stands as the perfect companion for celebrations, friendships, and everyday wins.",
    features: [],
    specifications: [
      { label: "Alcohol Content", value: "40% ABV" },
      { label: "Volume", value: "750ml" },
      { label: "Type", value: "Premium Blended Whisky" },
      { label: "Aging", value: "12 Years" }
    ],
    stock: 52,
    discount: 13,
    tags: ["Premium", "Royal", "Smooth"]
  },
  
  {
    id: 5,
    name: "KALINDRI SUPER(SPECIAL RESERVE)",
    category: "Whiskey",
    image:kalindri1,
    description: "Ultra Premium Single Malt Whiskey (Special Reserve Edition).",
    
    fullDescription: "KALINDRI Ultra Premium Whiskey celebrates tradition, craftsmanship, and sophisticated taste. Created for connoisseurs who seek distinction, it combines select malted barley and premium grains to achieve a smooth, balanced character with depth and complexity.\n\nRich and Layered Flavor: KAWAL delivers a full-bodied palate with notes of honeyed oak, warm spices, and subtle vanilla, creating a luxurious and memorable tasting experience.\n\nAged to Perfection: Carefully matured in seasoned oak barrels, each batch achieves a golden amber hue and a refined aroma, enhancing both smoothness and complexity.\n\nSophisticated Finish: KAWAL leaves a long, elegant finish with lingering warmth, making it ideal for sipping neat, on the rocks, or as the foundation of a premium cocktail.",

    features: [],
    specifications: [
    ],
    
  },
  {
    id: 6,
    name: "Magic Valley Vodka",
    category: "Vodka",
    
    image: magicVodka1,
    description: "ORIGINAL.",
    fullDescription: "Magic Valley Original Vodka is the purest expression of the brand, crystal-clear and impeccably smooth. Crafted to highlight its refined character, it offers a neutral profile with subtle grain notes and a clean, elegant finish.\n\nVersatile and Smooth: Enjoyed neat, on the rocks, or as the foundation of classic cocktails, Magic Valley Original transforms ordinary moments into extraordinary experiences. Its ultra-smooth texture ensures every sip is silky and satisfying.\n\nCrafted to Perfection: Distilled multiple times and carefully filtered, Magic Valley Original embodies excellence in every drop. The meticulous production process guarantees unmatched clarity, consistency, and premium quality, making it a vodka of choice for connoisseurs and enthusiasts alike.",
    features: [],
    specifications: [

    ],

  },

  {
    id: 7,
    name: "Magic Green Vodka",
    category: "Vodka",
    price: 1699,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 67,
    image:magicGreenVodka,
    description: "GREEN APPLE.",
    fullDescription: "Magic Valley Green Apple Vodka offers a refreshing twist on classic vodka, blending the vibrant essence of green apples with the ultra-smooth purity that defines the Magic Valley brand.\n\nUnique Flavor Profile: This variant delivers a crisp, subtly sweet taste that enlivens the palate without overpowering the vodka’s smooth character. Perfect for chilled shots, vibrant cocktails, or refreshing mixers, it brings energy and freshness to every sip.\n\nPremium Craftsmanship: Crafted with the same dedication to excellence as Magic Valley Original, each bottle undergoes meticulous quality checks to ensure unmatched clarity, consistency, and taste. Magic Valley Green Apple Vodka embodies youthful energy, vibrancy, and refined smoothness.",
    features: [],
    specifications: [
    
    ],
    stock: 85,
    discount: 15,
    tags: ["Unique", "Premium", "Smooth"]
  },
  {
    id: 8 ,
    name: "Magic valley",
    category: "Vodka",
    price: 1699,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 67,
    image: magicVodka,
    description: "strawberry.",
fullDescription: "Magic Valley Strawberry Vodka offers a lively twist on classic vodka, blending the fresh, fruity essence of strawberries with the ultra-smooth purity that defines the Magic Valley brand.\n\nUnique Flavor Profile: This variant delivers a bright, crisp, and subtly sweet taste that enlivens the palate without overpowering the vodka’s smooth character. Perfect for chilled shots, fruity cocktails, or refreshing mixers, it brings youthful energy and vibrancy to every sip.\n\nPremium Craftsmanship: Crafted with the same dedication to excellence as Magic Valley Original, each bottle undergoes meticulous quality checks to ensure unmatched clarity, consistency, and taste. Magic Valley Strawberry Vodka embodies freshness, vitality, and refined smoothness.",
    features: [],
    specifications: [
    ],
    stock: 85,
    discount: 15,
    tags: ["Unique", "Premium", "Smooth"]
  },
  {
    id: 9,
    name: "MS Gold XXX Special Rum",
    category: "Rum",
    price: 1899,
    originalPrice: 2299,
    rating: 4.7,
    reviews: 78,
    image: msGoldRum,
    description: "MS Gold XXX Special Rum is more than just a drink - it's an experience of richness, strength, and unmatched smoothness.",
   fullDescription: `MS Gold XXX Premium Rum is a tribute to fearless spirit and refined power. Inspired by classic old-world craftsmanship and bold personalities, this rum is crafted for those who lead from the front.

Rich in color, strong in character, and exceptionally smooth in experience — MS Gold stands for confidence, celebration, and uncompromising taste.

Whether it’s a late-night gathering, an intimate celebration, or a premium bar pour, MS Gold commands attention and delivers a truly elevated drinking experience.`,

    features: [],
    specifications: [
      { label: "Alcohol Content", value: "42.8% ABV" },
      { label: "Volume", value: "750ml" },
      { label: "Type", value: "Premium Rum" },
      { label: "Aging", value: "Premium Oak Barrels" }
    ],
    stock: 65,
    discount: 17,
    tags: ["Special", "Rich", "Smooth"]
  },
  {
    id: 10,
    name: "Eighty Forty Dry Gin",
    category: "Gin",
    price: 2199,
    originalPrice: 2599,
    rating: 4.8,
    reviews: 94,
    image: eightyFortyGin,
    description: "WILD BOULEWARD DRY GIN",
 fullDescription: `Inspired by the grand boulevards of the world—where culture flows, and
refinement reigns—WILD BOULEVARD Ginger Infused Premium Dry Gin is a
contemporary expression of sophistication with an adventurous soul. Born at the
crossroads of untamed botanicals and metropolitan elegance, this premium Gin
is carefully distilled and gently infused with ginger. It unfolds with crisp juniper,
citrus brightness, and a lingering warmth that is both bold and graceful.

WILD BOULEVARD is bold without being overpowering—crafted for those who
appreciate depth, clarity, and character in every sip. Whether served classic or as
the foundation of refined cocktails, it transforms every pour into an elevated
experience. A spirit designed to be savoured slowly, celebrated quietly, and
remembered long after the glass is empty.

A signature infusion of natural ginger for a smooth yet spirited character.`,
features: [],
    specifications: [
      { label: "Alcohol Content", value: "43% ABV" },
      { label: "Volume", value: "750ml" },
      { label: "Type", value: "Dry Gin" },
      { label: "Botanicals", value: "6+" }
    ],
    stock: 42,
    discount: 15,
    tags: ["Botanical", "Artisanal", "Craft"]
  },
  {
    id: 11,
    name: "Royal Virat XO Brandy",
    category: "Brandy",
    price: 4299,
    originalPrice: 4999,
    rating: 5.0,
    reviews: 56,
    image: royalViratBrandy,
    description: "Royal Virat XO Brandy is a celebration of timeless elegance and masterful craftsmanship.",
fullDescription: `Crafted for connoisseurs who appreciate complexity, XXX Very Premium Rum is an audacious blend of expertly aged rum infused with the bold intensity of roasted coffee and a subtle touch of warming spices. Every sip unfolds like a slow-burning experience—layered, smooth, and irresistibly bold.

The aroma opens with rich espresso notes and hints of dark cocoa, followed by a gentle trail of spice that awakens the senses. On the palate, velvety coffee richness blends seamlessly with the rum’s natural sweetness, while whispers of spice add warmth and intrigue, lingering long after the last sip.

This is not just a drink—it’s a statement of taste.`,
    features: [],
    specifications: [
      { label: "Alcohol Content", value: "40% ABV" },
      { label: "Volume", value: "750ml" },
      { label: "Type", value: "XO Brandy" },
      { label: "Aging", value: "Extra Old" }
    ],
    stock: 28,
    discount: 14,
    tags: ["XO", "Premium", "Luxury"]
  },
  {
    id: 12,
    name: "ROYAL VIRAT",
    category: "Beer",
    price: 399,
    originalPrice: 499,
    rating: 4.6,
    reviews: 112,
    image: royalVirat15Beer,
    description: "IT'S NOT A JUST A DRINK-IT'S AN ATTITUTDE",
    fullDescription: `Sparkling Grape is crafted for the new generation that plays hard, dreams big, and owns the night. Infused with a refreshing burst of sparkling grape flavour, this beer delivers a surprisingly smooth taste with a powerful 15% alcohol strength—designed for those who don’t settle for ordinary. Every sip feels fresh, vibrant, and bold, making it the perfect fuel for late-night parties, high-energy moments, and unforgettable celebrations.

Packed in a sleek bottle, Royal Virat Sparkling Grape is a refreshing, exotic drink with a twist of grape mystery. A perfect treat for your taste buds, it offers a unique experience unlike anything you have tried before. Easy to carry and impossible to ignore, it is crafted for those who enjoy standing out in every moment.

Volume: 375 ml  
Alcohol Strength: 15% ABV`,
    features: [],
    specifications: [
      { label: "Alcohol Content", value: "15% ABV" },
      { label: "Volume", value: "650ml" },
      { label: "Type", value: "Premium Craft Beer" },
      { label: "Style", value: "Strong Lager" }
    ],
    stock: 150,
    discount: 20,
    tags: ["Craft", "Strong", "Premium"]
  },
  {
    id: 13,
    name: "Blue Hunt Soda",
    category: "Soda",
    price: 49,
    originalPrice: 59,
    rating: 4.3,
    reviews: 234,
    image: blueHuntSoda,
    description: "Blue Hunt Soda is a refreshing, crisp beverage crafted to invigorate your senses and elevate your moments.",
    fullDescription: "Blue Hunt Soda is a refreshing, crisp beverage crafted to invigorate your senses and elevate your moments. With its perfect fizz and clean taste, Blue Hunt Soda is the ideal companion for celebrations, mixers, or everyday refreshment. Crisp and Refreshing Taste: Blue Hunt Soda offers a sparkling burst of refreshment with every sip. Its clean, effervescent profile is perfectly balanced, making it a versatile choice for enjoying on its own or as a base for your favorite cocktails and mocktails.\n\nPremium Quality: Crafted with precision and care, Blue Hunt Soda is made from the purest ingredients, ensuring consistent quality and a sparkling experience every time. Its perfect level of carbonation delivers the ideal fizz, enhancing every drink it complements.",
    features: ["Perfect Fizz", "Clean Taste", "Refreshing", "Premium Quality", "Versatile"],
    specifications: [
      { label: "Volume", value: "250ml" },
      { label: "Type", value: "Carbonated Beverage" },
      { label: "Flavor", value: "Original" },
      { label: "Packaging", value: "Bottle" }
    ],
    stock: 500,
    discount: 17,
    tags: ["Refreshing", "Sparkling", "Versatile"]
  },
  {
    id: 14,
    name: "Blue Hunt Water",
    category: "Water",
    price: 29,
    originalPrice: 39,
    rating: 4.8,
    reviews: 189,
    image: blueHuntWater,
    description: "Blue Hunt Water Bottle is a premium hydration solution designed to keep you refreshed and energized throughout the day.",
    fullDescription: "Blue Hunt Water Bottle is a premium hydration solution designed to keep you refreshed and energized throughout the day. With its sleek design and high-quality, crystal-clear water, Blue Hunt ensures purity and satisfaction with every sip.\n\nPure and Fresh Taste: Blue Hunt Water Bottle delivers the purest water, sourced and filtered to perfection. Its crisp, clean taste ensures maximum refreshment, making it ideal for any occasion, whether you're at home, at work, or on the go.\n\nConvenient and Stylish Design: The Blue Hunt Water Bottle features a sleek, ergonomic design that fits comfortably in your hand and bag. Its durable packaging ensures freshness, while its modern branding makes it a stylish choice for all your hydration needs.",
    features: ["Pure & Fresh", "Crystal Clear", "Sleek Design", "Ergonomic", "Premium Quality"],
    specifications: [
      { label: "Volume", value: "1 Liter" },
      { label: "Type", value: "Mineral Water" },
      { label: "Packaging", value: "PET Bottle" },
      { label: "Source", value: "Natural Spring" }
    ],
    stock: 1000,
    discount: 26,
    tags: ["Pure", "Hydration", "Premium"]
  },
   {
    id: 15,
    name: "LIKE ME",
    category: "LIKE ME",
    price: 1899,
    originalPrice: 2299,
    rating: 4.7,
    reviews: 78,
    image: LIKEME,
    description: "Ready-To-Drink Cocktail Mix",
   fullDescription: `LIKE ME is your go-to party drink when vibes matter
more than mixology. Crafted for bold, social, always-on
Gen-Z adults, LIKE ME™ delivers classic cocktails with
a fresh, fun twist — no bartending skills required.
Whether it’s a house party, rooftop hangout, festival
pre-game, or chill get-together, LIKE ME™ keeps
things light, refreshing, and effortlessly cool`,

    features: [],
    specifications: [
      { label: "Alcohol Content", value: "42.8% ABV" },
      { label: "Volume", value: "750ml" },
      { label: "Type", value: "Premium Rum" },
      { label: "Aging", value: "Premium Oak Barrels" }
    ],
    stock: 65,
    discount: 17,
    tags: ["Special", "Rich", "Smooth"]
  },
];

const categories = [
  { name: "All", count: 15, icon: <ShoppingBag size={16} />, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Whiskey", count: 5, icon: <Award size={16} />, color: "from-amber-500/20 to-yellow-500/20" },
  { name: "Vodka", count: 3, icon: <Zap size={16} />, color: "from-blue-400/20 to-sky-500/20" },
  { name: "Rum", count: 1, icon: <Package size={16} />, color: "from-brown-500/20 to-amber-800/20" },
  { name: "Gin", count: 1, icon: <Sparkles size={16} />, color: "from-green-500/20 to-emerald-500/20" },
  { name: "Brandy", count: 1, icon: <TrendingUp size={16} />, color: "from-red-500/20 to-orange-500/20" },
  { name: "LIKE ME", count: 1, icon: <Beer size={16} />, color: "from-yellow-500/20 to-amber-500/20" },
  { name: "Beer", count: 1, icon: <Beer size={16} />, color: "from-yellow-500/20 to-amber-500/20" },
  { name: "Soda", count: 1, icon: <GlassWater size={16} />, color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Water", count: 1, icon: <Droplets size={16} />, color: "from-blue-300/20 to-cyan-400/20" },
];

const filters = {
  price: [
    { label: "Under ₹500", value: [0, 499] },
    { label: "₹500 - ₹2000", value: [500, 2000] },
    { label: "₹2000 - ₹5000", value: [2000, 5000] },
    { label: "Above ₹5000", value: [5000, 100000] }
  ],
  rating: [
    { label: "4.5 & above", value: 4.5 },
    { label: "4.0 & above", value: 4.0 },
    { label: "3.5 & above", value: 3.5 }
  ],
  discount: [
    { label: "10% & above", value: 10 },
    { label: "15% & above", value: 15 },
    { label: "20% & above", value: 20 }
  ]
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    rating: [],
    discount: [],
    sort: "featured"
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Filtered products based on selections
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }
    
    // Search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.fullDescription.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Price filter
    if (selectedFilters.price.length > 0) {
      const priceMatch = selectedFilters.price.some(range => {
        return product.price >= range[0] && product.price <= range[1];
      });
      if (!priceMatch) return false;
    }
    
    // Rating filter
    if (selectedFilters.rating.length > 0) {
      const ratingMatch = selectedFilters.rating.some(minRating => {
        return product.rating >= minRating;
      });
      if (!ratingMatch) return false;
    }
    
    // Discount filter
    if (selectedFilters.discount.length > 0) {
      const discountMatch = selectedFilters.discount.some(minDiscount => {
        return product.discount >= minDiscount;
      });
      if (!discountMatch) return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedFilters.sort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Handle filter selection
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const currentValues = prev[filterType];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [filterType]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentValues, value]
        };
      }
    });
    setCurrentPage(1);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters({
      price: [],
      rating: [],
      discount: [],
      sort: "featured"
    });
    setSelectedCategory("All");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Quick view functionality
  const openQuickView = (product) => {
    setQuickView(product);
  };

  // Calculate savings
  const calculateSavings = (price, originalPrice) => {
    return originalPrice - price;
  };

  // Format price with Indian Rupee symbol
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case "Whiskey": return <Award className="text-amber-500" />;
      case "Vodka": return <Zap className="text-blue-400" />;
      case "Rum": return <Package className="text-amber-800" />;
      case "Gin": return <Sparkles className="text-green-500" />;
      case "Brandy": return <TrendingUp className="text-red-500" />;
      case "Beer": return <Beer className="text-yellow-500" />;
      case "Soda": return <GlassWater className="text-cyan-500" />;
      case "Water": return <Droplets className="text-blue-300" />;
      default: return <ShoppingBag className="text-gold" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0A0A0A] to-background" />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 text-xs font-medium tracking-[0.3em] uppercase text-gold/80"
            >
              <Sparkles size={14} />
              RV Spirit Premium Collection
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-5xl md:text-7xl text-cream mb-6"
            >
              Our <span className="text-gradient-gold">Premium</span> Spirits
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Discover our curated collection of premium spirits and beverages, each crafted with precision and passion. 
              From rare aged whiskies to refreshing sodas, find your perfect pour.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60" size={20} />
                <input
                  type="text"
                  placeholder="Search products by name, category, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-primary/10 border border-gold/20 text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 border-y border-gold/10 bg-gradient-to-r from-gold/5 via-transparent to-gold/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Premium Products", value: "13+" },
              { label: "Happy Customers", value: "10K+" },
              { label: "Years Excellence", value: "25+" },
              { label: "Categories", value: "8" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="font-serif text-xl text-cream mb-4 flex items-center gap-2">
                    <ShoppingBag size={20} />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setCurrentPage(1);
                        }}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === cat.name
                            ? "bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 text-gold"
                            : "text-muted-foreground hover:text-cream hover:bg-primary/10"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${cat.color} flex items-center justify-center`}>
                            {cat.icon}
                          </div>
                          <span>{cat.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          selectedCategory === cat.name ? "bg-background/30" : "bg-primary/10"
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Clear Filters Button */}
                {(Object.values(selectedFilters).some(arr => arr.length > 0) || selectedCategory !== "All") && (
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 text-red-400 hover:border-red-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <X size={16} />
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 text-gold"
              >
                <Filter size={18} />
                {showFilters ? "Hide Filters" : "Show Filters"}
                {Object.values(selectedFilters).some(arr => arr.length > 0) && (
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </button>
              
              <div className="flex items-center gap-4">

              </div>
            </div>

            {/* Mobile Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mb-8 overflow-hidden"
                >
                  <div className="glass-card p-6 rounded-xl space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="font-serif text-lg text-cream mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat.name}
                            onClick={() => {
                              setSelectedCategory(cat.name);
                              setCurrentPage(1);
                              setShowFilters(false);
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 flex items-center gap-2 ${
                              selectedCategory === cat.name
                                ? "bg-gradient-to-r from-gold to-gold-light text-primary-foreground"
                                : "bg-primary/10 text-muted-foreground hover:text-cream"
                            }`}
                          >
                            <div className="h-4 w-4">
                              {cat.icon}
                            </div>
                            {cat.name} ({cat.count})
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Clear Filters */}
                    {(Object.values(selectedFilters).some(arr => arr.length > 0) || selectedCategory !== "All") && (
                      <button
                        onClick={() => {
                          clearFilters();
                          setShowFilters(false);
                        }}
                        className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 text-red-400 hover:border-red-500/40 transition-all duration-300"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h2 className="font-serif text-2xl text-cream">
                    {selectedCategory === "All" ? "All Products" : `${selectedCategory} Collection`}
                  </h2>
                  <p className="text-muted-foreground">
                    Showing {currentProducts.length} of {filteredProducts.length} products
                    {searchQuery && ` for "${searchQuery}"`}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              {currentProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <div className="glass-card p-4 rounded-xl h-full flex flex-col border border-gold/10 hover:border-gold/40 transition-all duration-500 overflow-hidden">
                          {/* Product Image - Height increased */}
                          <div className="relative overflow-hidden rounded-lg h-80 mb-4"> {/* Changed from h-64 to h-80 */}
                            {/* Image */}
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                         
                            {/* Quick View Button */}
                            <button
                              onClick={() => openQuickView(product)}
                              className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-gold/20 text-cream text-sm hover:bg-gold hover:text-primary-foreground z-10"
                            >
                              Quick View
                            </button>
                            
                         

                            {/* Category Badge */}
                            <div className="absolute top-3 left-3">
                              <span className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-background/80 backdrop-blur-sm border border-gold/20 text-gold">
                                {product.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Product Info */}
                          <div className="flex-grow">
                            {/* Category & Rating */}
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {getCategoryIcon(product.category)}
                                <span className="text-xs text-gold uppercase tracking-wider font-medium">
                                  {product.category}
                                </span>
                              </div>
                            </div>
                            
                            {/* Product Name */}
                            <h3 className="font-serif text-lg text-cream mb-2 line-clamp-1">
                              {product.name}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {product.description}
                            </p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-1 mb-4">
                              {product.features.slice(0, 3).map((feature, idx) => (
                                <span key={idx} className="px-2 py-1 text-xs rounded bg-primary/10 text-muted-foreground border border-primary/20">
                                  {feature}
                                </span>
                              ))}
                            </div>
                           
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="h-10 w-10 rounded-full bg-primary/10 border border-gold/20 flex items-center justify-center text-cream disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                              currentPage === pageNum
                                ? "bg-gradient-to-r from-gold to-gold-light text-primary-foreground shadow-lg"
                                : "bg-primary/10 text-cream hover:bg-primary/20 border border-gold/10"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="h-10 w-10 rounded-full bg-primary/10 border border-gold/20 flex items-center justify-center text-cream disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20">
                  <ShoppingBag size={72} className="text-gold/40 mx-auto mb-6" />
                  <h3 className="text-2xl font-serif text-cream mb-3">No Products Found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    We couldn't find any products matching your criteria. Try adjusting your filters or search term.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 text-gold hover:border-gold/40 transition-all duration-300"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickView && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
              onClick={() => setQuickView(null)}
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="max-w-6xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              >
                <button
                  onClick={() => setQuickView(null)}
                  className="absolute -top-12 -right-4 z-10 h-10 w-10 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center text-cream hover:bg-red-500/30 hover:text-red-300 transition-colors border border-gold/20 hover:border-red-500/50 shadow-xl"
                >
                  <X size={20} />
                </button>

                <div className="glass-card p-8 border border-gold/20 shadow-2xl shadow-black/50"> {/* Changed p-6 to p-8 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {/* Changed gap-8 to gap-12 */}
                    {/* Product Image - Larger size */}
                    <div className="relative h-[500px] overflow-hidden rounded-xl"> {/* Changed h-96 to h-[500px] */}
                      <img 
                        src={quickView.image} 
                        alt={quickView.name}
                        className="absolute inset-0 w-full h-full object-contain" 
                       
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-background/5 to-transparent" />
                    
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-gold/20 text-gold text-sm font-medium">
                          {quickView.category}
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex flex-col justify-center p-4">
                      <div className="mb-8"> {/* Increased margin-bottom */}
                        <div className="flex items-center gap-3 mb-3">
                          {getCategoryIcon(quickView.category)}
                          <span className="text-sm text-gold uppercase tracking-wider font-medium">
                            {quickView.category}
                          </span>
                        </div>
                        
                        <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4"> {/* Increased text size */}
                          {quickView.name}
                        </h2>
                        
                        <div className="flex items-center gap-4 mb-6">
                        
                          
                          {/* Stock Status */}
                          <span className={`px-3 py-1 text-sm rounded-lg ${
                            quickView.stock > 50 ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                            quickView.stock > 20 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
                            'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}>
                            {quickView.stock > 50 ? 'In Stock' : quickView.stock > 20 ? 'Low Stock' : 'Last Few'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-medium text-gold mb-3 flex items-center gap-3">
                            <span className="h-1 w-10 bg-gradient-to-r from-gold to-transparent rounded-full" />
                            Description
                          </h4>
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base"> {/* Added text-base */}
                            {quickView.fullDescription}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-gold mb-3 flex items-center gap-3">
                            <span className="h-1 w-10 bg-gradient-to-r from-gold to-transparent rounded-full" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {quickView.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                                <Check size={16} className="text-gold" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

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
      
      {/* CSS Styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100vw) rotate(360deg); }
        }
        
        .line-clamp-1 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; }
        .line-clamp-2 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
        
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
      `}</style>
    </div>
  );
};

export default ProductsPage;