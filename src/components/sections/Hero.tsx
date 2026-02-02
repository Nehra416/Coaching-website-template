"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Students studying"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-block">
            <span className="bg-primary/20 text-blue-100 border border-primary/30 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md">
              #1 Coaching Institute for IELTS & PTE
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-hero font-heading font-extrabold text-white leading-tight"
          >
            Unlock Your Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              Potential
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-200 max-w-xl leading-relaxed"
          >
            Expert guidance for IELTS, PTE, and Study Visas. Join the thousands
            of students who have realized their study abroad dreams with us.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="text-base px-8 h-12 bg-primary hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary/25"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 bg-transparent text-white border-white hover:bg-white/10 hover:text-white transition-all"
            >
              Book Free Demo
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="pt-8 flex items-center gap-8 text-white/80 border-t border-white/10 mt-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">10k+</p>
              <p className="text-sm">Success Stories</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm">Visa Approval</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-sm">Student Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
