import { Award, Globe, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Award, label: "Certified Trainers", value: "50+" },
  { icon: Users, label: "Happy Students", value: "12,000+" },
  { icon: Globe, label: "Countries Covered", value: "25+" },
  { icon: BookOpen, label: "Courses Offered", value: "10+" },
];

export default function TrustStrip() {
  return (
    <div className="bg-muted/40 py-12 border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <div className="p-3 bg-card border border-border rounded-full shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
