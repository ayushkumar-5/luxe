import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Niche = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const nicheBrands = [
    {
      name: "Maison Francis Kurkdjian",
      origin: "Paris, France",
      founded: "2009",
      signature: "Baccarat Rouge 540",
      description: "Luxury French house known for exceptional craftsmanship and innovative compositions."
    },
    {
      name: "Creed",
      origin: "London, England", 
      founded: "1760",
      signature: "Aventus",
      description: "Historic house serving royalty for over 260 years with handcrafted fragrances."
    },
    {
      name: "Le Labo",
      origin: "New York, USA",
      founded: "2006", 
      signature: "Santal 33",
      description: "Artisanal approach to perfumery with hand-blended compositions and raw materials."
    },
    {
      name: "Byredo",
      origin: "Stockholm, Sweden",
      founded: "2006",
      signature: "Gypsy Water", 
      description: "Contemporary Swedish house translating memories and emotions into unique scents."
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
                Niche & Artisan
              </Badge>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground">
                Exclusive
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Niche Houses
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Discover rare and exceptional fragrances from the world's most prestigious 
                niche perfume houses. Each scent tells a unique story of artistry and passion.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Explore Niche Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Niche Brands Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Featured Niche Houses
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each house represents decades of perfumery expertise and artistic vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nicheBrands.map((brand, index) => (
                <Card key={brand.name} className="group hover:shadow-luxury transition-luxury border-border">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {brand.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{brand.origin}</span>
                        <span>•</span>
                        <span>Est. {brand.founded}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {brand.description}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Signature Scent:</p>
                      <Badge variant="outline" className="font-medium">
                        {brand.signature}
                      </Badge>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary/10 transition-luxury"
                    >
                      View {brand.name} Collection
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden">
                <div className="h-full bg-card rounded-xl border border-border">
                  <FilterSidebar 
                    isOpen={false} 
                    onClose={() => {}}
                    isDesktop={true}
                  />
                </div>
              </div>
            </aside>

            {/* Mobile Filter Sidebar */}
            <FilterSidebar 
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              isDesktop={false}
            />

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              <ProductGrid onFilterClick={() => setIsFilterOpen(true)} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Niche;