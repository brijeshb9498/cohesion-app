import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Clock, Users, Heart } from "lucide-react";
import { useState } from "react";

const opportunities = [
  {
    id: 1,
    title: "Beach Cleanup Drive",
    organization: "Ocean Guardians",
    location: "Santa Monica Beach",
    date: "Dec 15, 2025",
    duration: "3 hours",
    volunteers: "12/20",
    category: "Environment",
    description: "Join us for a community beach cleanup to protect marine life and keep our shores beautiful.",
    image: "🌊"
  },
  {
    id: 2,
    title: "Food Bank Volunteer",
    organization: "Community Kitchen",
    location: "Downtown Center",
    date: "Dec 18, 2025",
    duration: "4 hours",
    volunteers: "8/15",
    category: "Social",
    description: "Help sort and distribute food to families in need. No experience required.",
    image: "🍲"
  },
  {
    id: 3,
    title: "Youth Mentorship Program",
    organization: "Future Leaders",
    location: "Virtual/Hybrid",
    date: "Ongoing",
    duration: "2 hours/week",
    volunteers: "25/30",
    category: "Education",
    description: "Guide and inspire young minds through weekly mentorship sessions.",
    image: "📚"
  },
  {
    id: 4,
    title: "Animal Shelter Support",
    organization: "Paws & Hearts",
    location: "Westside Shelter",
    date: "Dec 20, 2025",
    duration: "3 hours",
    volunteers: "15/20",
    category: "Animals",
    description: "Care for rescued animals, help with feeding, walking, and socializing.",
    image: "🐾"
  },
  {
    id: 5,
    title: "Senior Center Activities",
    organization: "Golden Years Foundation",
    location: "Riverside Community",
    date: "Dec 22, 2025",
    duration: "2 hours",
    volunteers: "10/15",
    category: "Social",
    description: "Organize games, crafts, and conversation with senior community members.",
    image: "👵"
  },
  {
    id: 6,
    title: "Tree Planting Initiative",
    organization: "Green Future",
    location: "Central Park",
    date: "Dec 25, 2025",
    duration: "5 hours",
    volunteers: "30/50",
    category: "Environment",
    description: "Plant native trees to combat climate change and create green spaces.",
    image: "🌳"
  }
];

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || opp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Volunteer <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Opportunities</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover meaningful ways to make a difference in your community
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search opportunities..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Environment">Environment</SelectItem>
                <SelectItem value="Social">Social</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Animals">Animals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{opportunity.image}</div>
                    <Badge variant="secondary">{opportunity.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription>{opportunity.organization}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{opportunity.date} • {opportunity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{opportunity.volunteers} volunteers</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group-hover:bg-primary transition-colors">
                    <Heart className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No opportunities found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Opportunities;
