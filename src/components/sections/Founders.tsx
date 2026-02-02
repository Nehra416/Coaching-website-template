import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Director & Lead Trainer",
    bio: "Ph.D. in Linguistics with 15+ years of experience in IELTS training. Certified by British Council.",
    // image: "/images/founder1.jpg" // Placeholder fallback
  },
  {
    name: "Sarah Jenkins",
    role: "Head of International Affairs",
    bio: "Ex-Visa Officer with deep insights into immigration policies of Canada and Australia.",
  },
];

export default function Founders() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Our Leadership
          </span>
          <h2 className="text-h2 font-heading font-bold mt-2">
            Meet The Mentors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <Card
              key={i}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-gray-50"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 mb-6 border-4 border-white shadow-md">
                  <AvatarImage src={`/images/founder${i + 1}.webp`} />
                  <AvatarFallback className="text-2xl font-bold bg-primary text-white">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold font-heading mb-1">
                  {founder.name}
                </h3>
                <p className="text-primary font-medium mb-4">{founder.role}</p>
                <p className="text-muted-foreground mb-6">{founder.bio}</p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
