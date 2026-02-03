"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  "Personalized 1-on-1 Mentoring",
  "Latest Cambridge Study Material",
  "Mock Tests with AI Analysis",
  "Flexible Morning & Evening Batches",
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="section-padding bg-background overflow-hidden"
      ref={ref}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.png"
                alt="About our institute"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border max-w-[160px] sm:max-w-xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full text-primary shrink-0">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg text-foreground leading-tight">
                    15+ Years
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                    Of Excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              About Us
            </span>
            <h2 className="text-h2 font-heading font-bold text-foreground leading-tight">
              Bridging the Gap Between{" "}
              <span className="text-primary">Dreams</span> and Reality
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are more than just a coaching institute; we are your career
              architects. With over a decade of experience, we have helped
              students achieve their desired scores in IELTS and PTE.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-success h-5 w-5" />
                  <span className="text-foreground/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="px-8 bg-primary hover:bg-primary-600"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
