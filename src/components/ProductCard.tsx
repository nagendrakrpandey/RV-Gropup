import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  alcohol: string;
  size: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  alcohol,
  size,
  isNew,
  isBestSeller,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsla(43,74%,49%,0.15)]">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
      
      </div>


      {/* Image */}
      <div className="relative aspect-[3/4] bg-gradient-to-b from-muted/50 to-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand */}
        <p className="text-xs text-primary uppercase tracking-wider mb-1">{brand}</p>
        
        {/* Name */}
        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Details */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="px-2 py-1 bg-muted rounded">{alcohol}</span>
          <span className="px-2 py-1 bg-muted rounded">{size}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
         
        </div>
      </div>
    </div>
  );
};
