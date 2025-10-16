import dragonImage from "@/assets/print-dragon.jpg";
import caseImage from "@/assets/print-case.jpg";
import gamingImage from "@/assets/print-gaming.jpg";

const prints = [
  {
    image: dragonImage,
    title: "Custom Dragon Figurine",
    category: "Gaming",
  },
  {
    image: caseImage,
    title: "Geometric Phone Case",
    category: "Tech",
  },
  {
    image: gamingImage,
    title: "Gaming Keycaps",
    category: "Gaming",
  },
];

export const Gallery = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Recent
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Prints</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out some of our latest creations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {prints.map((print, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-card hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={print.image} 
                  alt={print.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs mb-2">
                    {print.category}
                  </div>
                  <h3 className="text-xl font-bold">{print.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
