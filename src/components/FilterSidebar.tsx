import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { X, SlidersHorizontal } from "lucide-react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDesktop?: boolean;
}

export const FilterSidebar = ({ isOpen, onClose, isDesktop = false }: FilterSidebarProps) => {
  const categories = [
    "Eau de Parfum",
    "Eau de Toilette", 
    "Parfum",
    "Eau de Cologne",
    "Unisex"
  ];

  const scentFamilies = [
    { name: "Floral", count: 24 },
    { name: "Woody", count: 18 },
    { name: "Oriental", count: 15 },
    { name: "Citrus", count: 12 },
    { name: "Fresh", count: 9 },
    { name: "Gourmand", count: 7 }
  ];

  const brands = [
    { name: "Tom Ford", count: 12 },
    { name: "Creed", count: 8 },
    { name: "Maison Margiela", count: 6 },
    { name: "Byredo", count: 5 },
    { name: "Le Labo", count: 4 }
  ];

  return (
    <>
      {/* Overlay - Only show for mobile */}
      {!isDesktop && isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        ${isDesktop 
          ? 'relative h-full w-full bg-transparent border-0' 
          : `fixed top-0 left-0 h-full w-80 bg-card border-r border-border z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
        }
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-xl font-semibold">Filters</h2>
            </div>
            {!isDesktop && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filters Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  defaultValue={[50, 300]}
                  max={500}
                  min={20}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$20</span>
                  <span>$500</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    $50 - $300
                  </Badge>
                </div>
              </div>
            </div>

            <Separator />

            {/* Category */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Category</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <label
                      htmlFor={category}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Scent Family */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Scent Family</h3>
              <div className="space-y-3">
                {scentFamilies.map((scent) => (
                  <div key={scent.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={scent.name} />
                      <label
                        htmlFor={scent.name}
                        className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                      >
                        {scent.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {scent.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Brands */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Brand</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={brand.name} />
                      <label
                        htmlFor={brand.name}
                        className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                      >
                        {brand.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {brand.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Size */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Size</h3>
              <div className="grid grid-cols-2 gap-2">
                {["30ml", "50ml", "75ml", "100ml"].map((size) => (
                  <Badge
                    key={size}
                    variant="outline"
                    className="justify-center py-2 cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    {size}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border space-y-3">
            <Button className="w-full bg-gradient-gold hover:shadow-gold transition-luxury">
              Apply Filters
            </Button>
            <Button variant="outline" className="w-full">
              Reset All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};