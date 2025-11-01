import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center transition-transform group-hover:scale-105">
              <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cohesion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/opportunities" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Opportunities
            </Link>
            <Link to="/community" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Link to="/messages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Messages
            </Link>
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link
                to="/opportunities"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Opportunities
              </Link>
              <Link
                to="/community"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/messages"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Messages
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
