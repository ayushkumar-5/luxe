import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="relative">
        <div className="container mx-auto px-6 py-16">
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

        {/* Newsletter Section */}
        <section className="bg-card border-y border-border py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Join the Scent Society
              </h2>
              <p className="text-muted-foreground">
                Be the first to discover new arrivals, exclusive releases, and personalized fragrance recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-lg hover:shadow-gold transition-luxury">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Free samples with your first order. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  Luxe
                </h3>
                <p className="text-muted-foreground text-sm">
                  Curating the world's finest fragrances for discerning connoisseurs since 2020.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Shop</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Bestsellers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Niche Brands</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Gift Sets</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Scent Finder</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Size Guide</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Journal</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 Luxe. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;