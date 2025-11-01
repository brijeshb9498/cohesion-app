import { Search, MessageSquare, BarChart3, Calendar, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Find volunteer opportunities that match your interests, skills, and availability with our intelligent recommendation system.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: MessageSquare,
    title: "Seamless Communication",
    description: "Connect with like-minded volunteers and organizations through integrated messaging, forums, and group discussions.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: BarChart3,
    title: "Track Your Impact",
    description: "Visualize your volunteer journey with comprehensive analytics showing hours contributed and lives impacted.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Manage your volunteer commitments effortlessly with our integrated calendar and reminder system.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Shield,
    title: "Verified Organizations",
    description: "All partner organizations are thoroughly vetted to ensure safe, legitimate, and impactful volunteer experiences.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Community Recognition",
    description: "Earn badges, share achievements, and get recognized for your dedication to making the world a better place.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Make a Difference
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cohesion provides all the tools you need to discover opportunities, connect with communities, 
            and track your volunteer impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
