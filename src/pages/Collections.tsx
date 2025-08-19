import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Collections = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const collections = [
    {
      name: "Signature Collection",
      description: "Our most beloved and iconic fragrances",
      count: 24,
      featured: true
    },
    {
      name: "Evening Elegance",
      description: "Sophisticated scents for special occasions",
      count: 16,
      featured: false
    },
    {
      name: "Daily Luxe",
      description: "Refined fragrances for everyday wear",
      count: 18,
      featured: false
    },
    {
      name: "Limited Edition",
      description: "Exclusive releases and seasonal offerings",
      count: 8,
      featured: true
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
                Curated Collections
              </Badge>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground">
                Our Fragrance
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Collections
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Discover carefully curated collections that tell unique olfactory stories. 
                From everyday elegance to special occasion sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {collections.map((collection, index) => (
              <div
                key={collection.name}
                className={`
                  group relative bg-card rounded-xl p-8 border border-border hover:shadow-luxury transition-luxury cursor-pointer
                  ${collection.featured ? 'md:col-span-2 bg-gradient-to-br from-card to-secondary/20' : ''}
                `}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {collection.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {collection.description}
                      </p>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {collection.count} fragrances
                    </Badge>
                  </div>
                  
                  <Button 
                    className="group-hover:shadow-gold transition-luxury bg-gradient-gold"
                  >
                    Explore Collection
                  </Button>
                </div>
                
                {collection.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
            ))}
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

export default Collections;