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
    <section className="section-padding bg-white overflow-hidden" ref={ref}>
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
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">15+ Years</p>
                  <p className="text-sm text-muted-foreground">
                    Of Excellence in Coaching
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
            <h2 className="text-h2 font-heading font-bold text-gray-900 leading-tight">
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
                  <CheckCircle2 className="text-green-500 h-5 w-5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="px-8 bg-primary-600 hover:bg-primary-700"
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
