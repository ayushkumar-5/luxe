import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  scentFamily: string;
  size: string;
  isNew?: boolean;
}

export const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  scentFamily,
  size,
  isNew = false,
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-luxury cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="h-full w-full object-cover transition-luxury group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground font-medium">
              New
            </Badge>
          )}
          {originalPrice && (
            <Badge variant="destructive" className="font-medium">
              Sale
            </Badge>
          )}
        </div>

        {/* Like Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 h-9 w-9 rounded-full bg-card/80 backdrop-blur-sm border-0 transition-luxury ${
            isLiked ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick Add Button - Shows on Hover */}
        <div className={`absolute inset-x-4 bottom-4 transition-luxury ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button 
            className="w-full bg-gradient-gold hover:shadow-gold transition-luxury font-semibold"
            onClick={(e) => e.stopPropagation()}
          >
            Quick Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{brand}</p>
          <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
            {name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-primary text-primary' 
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Scent Family & Size */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="text-xs">
            {scentFamily}
          </Badge>
          <span>•</span>
          <span>{size}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground text-lg">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};