"use client";
import { Mic, Headphones, Book, Pen } from "lucide-react";

const modules = [
  {
    icon: Headphones,
    title: "Listening",
    desc: "30-minute intense sessions with native accents.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Book,
    title: "Reading",
    desc: "Strategies to tackle Comprehensions & Speed Reading.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Pen,
    title: "Writing",
    desc: "Master Task 1 & Task 2 with structured templates.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Mic,
    title: "Speaking",
    desc: "1-on-1 Interviews and cue card practice focused on fluency.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
];

export default function Modules() {
  return (
    <section className="section-padding bg-muted/30 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Course Modules
            </span>
            <h2 className="text-h2 font-heading font-bold mb-4 sm:mb-6 mt-2 text-foreground">
              Master Every Aspect <br className="hidden sm:block" /> of
              IELTS/PTE
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              We break down the exam into manageable modules, ensuring you gain
              proficiency in every section. Our targeted approach maximizes your
              band score.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${mod.bg} ${mod.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <mod.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-foreground">
                      {mod.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-linear-to-br from-primary/10 to-accent/10 rounded-3xl p-6 sm:p-8 flex items-center justify-center overflow-hidden">
            {/* Abstract Visual Representation */}
            <div className="grid grid-cols-2 gap-4 w-full h-full opacity-30">
              <div className="bg-primary rounded-2xl blur-xl animate-pulse-slow"></div>
              <div className="bg-accent rounded-2xl blur-xl animate-pulse-slow delay-700"></div>
              <div className="bg-secondary rounded-2xl blur-xl animate-pulse-slow delay-1000"></div>
              <div className="bg-success rounded-2xl blur-xl animate-pulse-slow delay-500"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-center bg-card/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 dark:border-white/5 w-full max-w-[200px] sm:max-w-[240px]">
                <p className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  8.0+
                </p>
                <p className="font-medium text-xs sm:text-sm text-muted-foreground mt-2 tracking-wide uppercase">
                  Target Band Score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
