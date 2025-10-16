import { Card } from "@/components/ui/card";
import { Gamepad2, Smartphone, Palette, Gift } from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Gaming Miniatures",
    description: "Custom miniatures for tabletop games, D&D characters, and collectible figurines.",
  },
  {
    icon: Smartphone,
    title: "Custom Cases",
    description: "Personalized phone cases, controllers, and tech accessories with your unique designs.",
  },
  {
    icon: Palette,
    title: "Art & Decor",
    description: "Decorative pieces, sculptures, and artistic creations to express your style.",
  },
  {
    icon: Gift,
    title: "Personal Gifts",
    description: "One-of-a-kind gifts, keychains, and personalized items for any occasion.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What We
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Print</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From gaming gear to custom gifts, we've got you covered with endless possibilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-card hover:scale-105 group"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-float">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
