"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe2,
  Plane,
} from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "IELTS Coaching",
    description:
      "Comprehensive training for Academic & General Training modules with 8+ band strategy.",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-200",
  },
  {
    title: "PTE Academic",
    description:
      "Master the PTE exam with our computer-based practice sessions and AI scoring feedback.",
    icon: GraduationCap,
    color: "from-orange-500 to-orange-600",
    shadow: "shadow-orange-200",
  },
  {
    title: "Study Visa",
    description:
      "End-to-end visa assistance for Canada, UK, USA, Australia, and New Zealand.",
    icon: Plane,
    color: "from-purple-500 to-purple-600",
    shadow: "shadow-purple-200",
  },
  {
    title: "Spoken English",
    description:
      "Enhance your fluency, vocabulary, and confidence for professional and personal growth.",
    icon: Globe2,
    color: "from-green-500 to-green-600",
    shadow: "shadow-green-200",
  },
];

export default function Programs() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Our Programs
          </span>
          <h2 className="text-h2 font-heading font-bold mt-2 mb-4 text-foreground">
            Comprehensive Learning Paths
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect course designed to match your study abroad goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border border-border relative overflow-hidden group">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color}`}
                />
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <program.icon size={24} />
                  </div>
                  <CardTitle className="text-foreground">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 text-primary hover:bg-transparent hover:text-primary transition-all group-hover:gap-2"
                  >
                    Explore Course{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
