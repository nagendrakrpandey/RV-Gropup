import whiskyBottle from "@/assets/whisky-bottle.jpg";
import vodkaBottle from "@/assets/vodka-bottle.jpg";
import rumBottle from "@/assets/rum-bottle.jpg";
import ginBottle from "@/assets/gin-bottle.jpg";
import wineBottle from "@/assets/wine-bottle.jpg";

const categories = [
  { name: "Whisky",image: whiskyBottle },
  { name: "ROYAL VIRAT(RVP)", image: vodkaBottle },
  { name: "XO BRANDY", image: rumBottle },
  { name: "Magic Valley", image: ginBottle },
{ name: "Like me", count: 203, image: wineBottle },
];

export const Categories = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">
            Browse By Category
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Shop by <span className="text-primary">Category</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:border-primary hover:shadow-[0_0_60px_hsla(43,74%,49%,0.2)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
