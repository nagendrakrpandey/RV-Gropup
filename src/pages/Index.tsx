import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Categories } from "@/components/Categories";
import { BrandShowcase } from "@/components/BrandShowcase";
import { SpecialOffers } from "@/components/SpecialOffers";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AgeVerification } from "@/components/AgeVerification";

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      <AgeVerification onVerified={() => setIsVerified(true)} />
      
      <div className={`min-h-screen bg-background ${!isVerified ? 'hidden' : ''}`}>
        <Header />
        
        <main>
          <Hero />
          <FeaturedProducts />
          <Categories />
          <BrandShowcase />
          <SpecialOffers />
          <Newsletter />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
