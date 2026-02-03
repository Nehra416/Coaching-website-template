"use client";
import { motion } from "framer-motion";
import { ClipboardList, BookOpen, PenTool, Plane } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Initial Assessment",
    description:
      "We evaluate your current level to create a customized study plan.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Intensive Prep",
    description:
      "Join our rigorous coaching sessions with daily scored mock tests.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: PenTool,
    title: "Exam Application",
    description:
      "We help you book your exam date and guide you through the process.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Plane,
    title: "Visa Filing",
    description:
      "Our experts assist with university selection and visa documentation.",
    color: "bg-green-100 text-green-600",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-background transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            How It Works
          </span>
          <h2 className="text-h2 font-heading font-bold mt-2 mb-4 text-foreground">
            Your Pathway to Success
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven 4-step process to transform your study abroad dreams into
            reality.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-6 rounded-xl border border-border shadow-lg relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 mx-auto shadow-inner`}
                >
                  <step.icon size={32} />
                </div>
                <div className="absolute top-6 right-6 font-bold text-6xl text-muted/20 opacity-30 select-none">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-center text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
