import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "IELTS Academic",
    score: "Band 8.0",
    quote:
      "The personalized attention I received was incredible. My writing score improved from 6.0 to 7.5 thanks to the detailed feedback sessions.",
  },
  {
    name: "Rahul Mehta",
    course: "Canada Study Visa",
    score: "Approved in 15 days",
    quote:
      "I was rejected twice before. The team here analyzed my profile, corrected my SOP, and helped me get my visa approved in record time.",
  },
  {
    name: "Simran Kaur",
    course: "PTE Academic",
    score: "Score 79+",
    quote:
      "Their computer lab is exactly like the real exam center. Practicing there made me feel so confident on the actual exam day.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-h2 font-heading font-bold mt-2 text-foreground">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-card border border-border shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex text-warning gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-muted-foreground italic h-24">
                  &quot;{t.quote}&quot;
                </p>
              </CardHeader>
              <CardFooter className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {t.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-foreground leading-none">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">
                      {t.course}
                    </span>
                    <span className="text-xs font-semibold bg-success/10 text-success px-2 py-0.5 rounded-full border border-success/20">
                      {t.score}
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
