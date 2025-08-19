import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Spline 3D Scene - Placeholder with fallback image */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {/* Fallback Hero Image */}
          <img 
            src={heroImage}
            alt="Luxury perfume collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Spline Embed - Replace with actual Spline URL */}
          <iframe
            src="https://my.spline.design/untitled-c97bb4ada238a785ed60b0fe152203e2/"
            className="absolute inset-0 h-full w-full border-0"
            title="3D Perfume Scene"
            loading="lazy"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-serif text-6xl font-bold leading-tight tracking-tight text-foreground lg:text-7xl">
                Find Your
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Signature Scent
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Curated perfumes from timeless houses and niche artisans. 
                Discover notes that tell your story.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero"
                size="lg" 
                className="text-lg px-8 py-4"
              >
                <Link to="/collections" className="flex items-center">
                  Discover Collection
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-luxury text-lg px-8 py-4"
              >
                <Link to="/discovery" className="flex items-center">
                  Take Scent Finder
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Free samples included</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="h-8 w-px bg-primary/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};