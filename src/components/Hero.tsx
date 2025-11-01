import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-volunteers.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Building Stronger Communities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connect, Collaborate,{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                Create Impact
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Cohesion brings volunteers and communities together. Discover meaningful opportunities, 
              share experiences, and make a real difference in the world around you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/opportunities">
                <Button variant="outline" size="lg">
                  Browse Opportunities
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">12K+</div>
                <div className="text-sm text-muted-foreground">Active Volunteers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Volunteers working together in community"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Join 12,000+</div>
                  <div className="text-xs text-muted-foreground">Active volunteers</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" fill="currentColor" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Make Impact</div>
                  <div className="text-xs text-muted-foreground">Every day counts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
