import { Upload, Cog, Truck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Design",
    description: "Send us your 3D model or describe your idea. We'll help bring it to life!",
  },
  {
    icon: Cog,
    number: "02",
    title: "We Print It",
    description: "Our high-quality printers work their magic to create your custom piece.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Get Your Print",
    description: "Fast delivery or local pickup. Your creation is ready to go!",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            How It
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your custom print is super simple
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-50 animate-glow"></div>
                  <div className="relative h-20 w-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
