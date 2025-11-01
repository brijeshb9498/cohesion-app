import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share2, TrendingUp, Users, Award, Calendar } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "SC",
    role: "Community Leader",
    time: "2 hours ago",
    content: "Amazing turnout at yesterday's beach cleanup! We collected over 200 pounds of waste and had 45 volunteers show up. This is what community impact looks like! 🌊✨",
    likes: 124,
    comments: 18,
    shares: 7,
    tags: ["Environment", "Beach Cleanup"]
  },
  {
    id: 2,
    author: "Marcus Rodriguez",
    avatar: "MR",
    role: "Volunteer",
    time: "5 hours ago",
    content: "Just completed my 50th volunteer hour this month! The food bank program has been incredibly rewarding. Met so many wonderful people and learned so much about our community's needs.",
    likes: 89,
    comments: 12,
    shares: 4,
    tags: ["Milestone", "Food Bank"]
  },
  {
    id: 3,
    author: "Emily Watson",
    avatar: "EW",
    role: "Organization Admin",
    time: "1 day ago",
    content: "Looking for mentors for our youth education program! We need 10 more volunteers who can commit to 2 hours per week. Experience in teaching is a plus but not required - passion is what matters most! 📚",
    likes: 67,
    comments: 23,
    shares: 15,
    tags: ["Opportunity", "Education"]
  },
  {
    id: 4,
    author: "David Park",
    avatar: "DP",
    role: "Volunteer",
    time: "2 days ago",
    content: "The tree planting event was a huge success! 500 native trees planted across the park. Grateful to everyone who showed up despite the rain. Our future is greener! 🌳",
    likes: 156,
    comments: 31,
    shares: 22,
    tags: ["Environment", "Success Story"]
  }
];

const topContributors = [
  { name: "Sarah Chen", hours: 156, badge: "🏆" },
  { name: "Marcus Rodriguez", hours: 142, badge: "🥈" },
  { name: "Emily Watson", hours: 128, badge: "🥉" },
];

const Community = () => {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Community <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Feed</span>
                </h1>
                <p className="text-muted-foreground">Share your volunteer journey and inspire others</p>
              </div>

              {/* Create Post */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Share Your Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="What's your volunteer story today?"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-end">
                    <Button>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Post
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Posts */}
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{post.author}</h3>
                          <Badge variant="outline" className="text-xs">{post.role}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{post.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-3">{post.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center gap-6 w-full">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        <span>{post.shares}</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Top Contributors
                  </CardTitle>
                  <CardDescription>This month's volunteer leaders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{contributor.badge}</span>
                      <div className="flex-1">
                        <p className="font-medium">{contributor.name}</p>
                        <p className="text-sm text-muted-foreground">{contributor.hours} hours</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Active Members</span>
                    </div>
                    <span className="font-bold text-primary">12,456</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Events This Month</span>
                    </div>
                    <span className="font-bold text-primary">87</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Hours Volunteered</span>
                    </div>
                    <span className="font-bold text-primary">24,891</span>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="font-medium text-sm">Beach Cleanup</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 9:00 AM</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                    <p className="font-medium text-sm">Food Bank Drive</p>
                    <p className="text-xs text-muted-foreground">Dec 18, 2:00 PM</p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent/50 border border-accent">
                    <p className="font-medium text-sm">Mentorship Meetup</p>
                    <p className="text-xs text-muted-foreground">Dec 20, 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
