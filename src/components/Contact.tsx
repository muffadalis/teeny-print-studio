import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Get In
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? Send us a message!
          </p>
        </div>
        
        <Card className="p-8 bg-card border-border shadow-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-border"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background border-border resize-none"
              />
            </div>
            
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </Card>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:prints@example.com" className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors">
              <Mail className="h-5 w-5" />
              prints@example.com
            </a>
            <a href="#" className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors">
              <MessageSquare className="h-5 w-5" />
              Discord: @3dprints
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
