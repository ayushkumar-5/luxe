import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Heart, Star, Package, Sparkles } from "lucide-react";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";

const Gifts = () => {
  const giftCollections = [
    {
      title: "Romantic Gestures",
      description: "Express love with these enchanting fragrances",
      price: "From $185",
      image: perfume1,
      items: "3 items included"
    },
    {
      title: "Luxury Essentials",
      description: "Premium gift set for the discerning individual", 
      price: "From $295",
      image: perfume2,
      items: "5 items included"
    },
    {
      title: "Discovery Journey",
      description: "Sample set to explore new fragrance territories",
      price: "From $95",
      image: perfume3,
      items: "8 samples included"
    }
  ];

  const occasions = [
    {
      title: "Anniversaries",
      description: "Celebrate milestones with memorable scents",
      icon: Heart,
      popular: "Midnight Bloom, Golden Amber"
    },
    {
      title: "Birthdays",
      description: "Make their special day unforgettable",
      icon: Gift,
      popular: "Velvet Rose, Crystal Musk"
    },
    {
      title: "Holidays",
      description: "Seasonal fragrances for festive moments", 
      icon: Star,
      popular: "Obsidian Noir, Ivory Petals"
    },
    {
      title: "Just Because",
      description: "Surprise someone special any day",
      icon: Sparkles,
      popular: "Discovery Sets, Mini Collections"
    }
  ];

  const services = [
    {
      title: "Personal Gift Consultation",
      description: "Expert advice to find the perfect fragrance gift",
      duration: "30 min consultation"
    },
    {
      title: "Custom Gift Wrapping",
      description: "Elegant packaging with personalized message",
      duration: "Complimentary service"
    },
    {
      title: "Fragrance Engraving", 
      description: "Add a personal touch to select bottles",
      duration: "2-3 business days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Perfect Gifts
              </Badge>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground">
                The Gift of
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Luxury Fragrance
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Create unforgettable moments with curated gift sets and personalized 
                fragrance experiences. Every gift tells a story.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Gift className="h-5 w-5 mr-2" />
                Shop Gift Sets
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-card/50 backdrop-blur-sm">
                <Package className="h-5 w-5 mr-2" />
                Custom Gifts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Collections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Curated Gift Collections
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thoughtfully assembled sets for every taste and occasion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {giftCollections.map((collection, index) => (
                <Card key={collection.title} className="group hover:shadow-luxury transition-luxury border-border overflow-hidden">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-luxury"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {collection.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {collection.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">
                        {collection.price}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {collection.items}
                      </Badge>
                    </div>
                    
                    <Button className="w-full bg-gradient-gold hover:shadow-gold transition-luxury">
                      Select Gift
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Gifts for Every Occasion
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find the perfect fragrance gift for any special moment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {occasions.map((occasion) => (
                <Card key={occasion.title} className="text-center hover:shadow-luxury transition-luxury border-border">
                  <CardContent className="p-6 space-y-4">
                    <occasion.icon className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {occasion.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {occasion.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Popular Choices:</p>
                      <p className="text-xs text-muted-foreground">
                        {occasion.popular}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 transition-luxury">
                      Shop {occasion.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gift Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Personalized Gift Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Make your gift extra special with our exclusive services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="text-center hover:shadow-luxury transition-luxury border-border">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <Badge variant="outline">
                      {service.duration}
                    </Badge>
                    <Button variant="outline" className="w-full hover:bg-primary/10 transition-luxury">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Need Help Choosing the Perfect Gift?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our fragrance experts are here to help you find the ideal scent for your special someone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-card/50 backdrop-blur-sm">
                Contact Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gifts;