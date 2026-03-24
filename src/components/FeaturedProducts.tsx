import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import whiskyBottle from "@/assets/whisky-bottle.jpg";
import vodkaBottle from "@/assets/vodka-bottle.jpg";
import rumBottle from "@/assets/rum-bottle.jpg";
import ginBottle from "@/assets/gin-bottle.jpg";
import wineBottle from "@/assets/wine-bottle.jpg";
import { useState, useEffect } from "react";

const products = [
  {
    name: "ROYAL VIRAT",
    brand: "PREMIUM MALT WHISKEY",
    image: whiskyBottle,
    isBestSeller: true,
    price: "$49.99",
    alcohol: "43%",
    size: "750ml"
  },
  {
    name: "ROYAL VIRAT(RVP)",
    brand: "GOLD RESERVE",
    image: vodkaBottle,
    isNew: true,
    price: "$39.99",
    alcohol: "40%",
    size: "750ml"
  },
  {
    name: "XXX PREMIUM RUM-COFFEE-INFUSED",
    brand: "XO BRANDY",
    image: rumBottle,
    price: "$54.99",
    alcohol: "42%",
    size: "750ml"
  },
  {
    name: "MAGIC VALLEY",
    brand: "FRESH VIBRANT REFRESHING",
    image: ginBottle,
    isNew: true,
    price: "$44.99",
    alcohol: "40%",
    size: "750ml"
  },
  {
    name: "LIKE ME",
    brand: "READY-TO DRINK COCKTAIL MIX",
    image: wineBottle,
    isBestSeller: true,
    price: "$29.99",
    alcohol: "12%",
    size: "330ml"
  },
];

const tabs = ["Best Sellers", "New Arrivals", "Premium Picks", "On Sale", "All Products"];

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState(4); // Set to "All Products" by default
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isVisible, setIsVisible] = useState(false);

  // Filter products based on active tab
  useEffect(() => {
    switch (activeTab) {
      case 0: // Best Sellers
        setFilteredProducts(products.filter(p => p.isBestSeller));
        break;
      case 1: // New Arrivals
        setFilteredProducts(products.filter(p => p.isNew));
        break;
      case 2: // Premium Picks
        setFilteredProducts(products.filter(p => 
          p.name.includes("PREMIUM") || 
          p.brand.includes("PREMIUM") ||
          p.name.includes("GOLD") ||
          p.brand.includes("GOLD")
        ));
        break;
      case 3: // On Sale
        setFilteredProducts(products.filter(p => p.name === "ROYAL VIRAT" || p.name === "LIKE ME"));
        break;
      case 4: // All Products
        setFilteredProducts(products);
        break;
      default:
        setFilteredProducts(products);
    }
  }, [activeTab]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured-products');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="featured-products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-primary uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 block font-semibold">
            Our Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Featured <span className="text-primary">Spirits</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Explore our handpicked selection of the world's finest spirits, from
            rare whiskies to premium vodkas.
          </p>
        </div>

        {/* Tabs - Horizontal scroll on mobile */}
        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div className="flex overflow-x-auto justify-start lg:justify-center gap-2 sm:gap-3 pb-4 px-4 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-105"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Gradient fade on sides for mobile scroll indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none lg:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none lg:hidden"></div>
        </div>

        {/* Products Grid - Fully Responsive with all products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.name}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard 
                name={product.name}
                brand={product.brand}
                image={product.image}
                price={product.price}
                alcohol={product.alcohol}
                size={product.size}
                isBestSeller={product.isBestSeller}
                isNew={product.isNew}
              />
            </div>
          ))}
        </div>

        {/* Empty State - Shows when no products in category */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-muted-foreground text-sm sm:text-base">
              No products found in this category.
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button 
            variant="gold-outline" 
            size="lg" 
            className="group px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
            onClick={() => setActiveTab(4)}
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};