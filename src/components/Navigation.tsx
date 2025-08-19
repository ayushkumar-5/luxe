import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <h1 className="font-serif text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                Luxe
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/collections" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Collections
            </Link>
            <Link 
              to="/niche" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Niche
            </Link>
            <Link 
              to="/discovery" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Discovery
            </Link>
            <Link 
              to="/gifts" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Gifts
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search fragrances..."
                className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
              <span className="ml-2">Account</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
              >
                2
              </Badge>
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};