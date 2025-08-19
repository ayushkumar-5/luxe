import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List, ArrowUpDown } from "lucide-react";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";

interface ProductGridProps {
  onFilterClick: () => void;
}

export const ProductGrid = ({ onFilterClick }: ProductGridProps) => {
  const products = [
    {
      id: "1",
      name: "Midnight Bloom",
      brand: "Luxe",
      price: 185,
      originalPrice: 220,
      image: perfume1,
      rating: 4.8,
      reviewCount: 127,
      scentFamily: "Floral",
      size: "50ml",
      isNew: true,
    },
    {
      id: "2", 
      name: "Golden Amber",
      brand: "Maison Élégante",
      price: 265,
      image: perfume2,
      rating: 4.9,
      reviewCount: 89,
      scentFamily: "Oriental",
      size: "75ml",
    },
    {
      id: "3",
      name: "Velvet Rose",
      brand: "Noire Collection",
      price: 195,
      image: perfume3,
      rating: 4.7,
      reviewCount: 156,
      scentFamily: "Woody",
      size: "50ml",
    },
    {
      id: "4",
      name: "Obsidian Noir",
      brand: "Luxe Artisan",
      price: 310,
      image: perfume4,
      rating: 4.6,
      reviewCount: 73,
      scentFamily: "Fresh",
      size: "100ml",
      isNew: true,
    },
    {
      id: "5",
      name: "Crystal Musk",
      brand: "Luxe",
      price: 145,
      originalPrice: 175,
      image: perfume1,
      rating: 4.5,
      reviewCount: 201,
      scentFamily: "Citrus",
      size: "30ml",
    },
    {
      id: "6",
      name: "Ivory Petals", 
      brand: "Maison Élégante",
      price: 225,
      image: perfume2,
      rating: 4.8,
      reviewCount: 92,
      scentFamily: "Gourmand",
      size: "75ml",
    }
  ];

  return (
    <div className="space-y-6">
      {/* Collection Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-4xl font-bold text-foreground">
              Signature Collection
            </h1>
            <p className="text-muted-foreground mt-2">
              Discover our curated selection of premium fragrances
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4 mr-2" />
              Grid
            </Button>
            <Button variant="ghost" size="sm">
              <List className="h-4 w-4 mr-2" />
              List
            </Button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={onFilterClick}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Showing:</span>
              <Badge variant="outline">{products.length} products</Badge>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Best Match
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <Button
          variant="outline"
          size="lg"
          className="px-8 hover:bg-primary/10 transition-luxury"
        >
          Load More Products
        </Button>
      </div>
    </div>
  );
};