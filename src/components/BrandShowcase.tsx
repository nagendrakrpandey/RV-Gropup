import { useEffect, useRef } from "react";

const brands = [
  "ROYAL VIRAT",
  "MAGIC VALLEY",
  "EIGHTY FORTY DRY GIN",
  "PREMIUM CRAFT BEER",
];

export const BrandShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">
            Trusted Brands
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            World-Class <span className="text-primary">Brands</span>
          </h2>
        </div>
      </div>

      {/* Infinite scroll brands */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex gap-16 overflow-hidden whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex items-center justify-center px-8 py-4 group"
            >
              <span className="font-serif text-2xl md:text-3xl text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
