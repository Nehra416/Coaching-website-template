"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-[#192025]">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Students studying"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#192025] via-[#192025]/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="bg-[#A49692]/15 text-[#A49692] border border-[#A49692]/20 px-4 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-md">
                #1 Coaching Institute for IELTS & PTE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-hero font-heading font-extrabold text-white leading-[1.1] md:leading-tight"
            >
              Unlock Your Global{" "}
              <span className="text-[#AE8463]">Potential</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-[#C8B6AD] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Expert guidance for IELTS, PTE, and Study Visas. Join the
              thousands of students who have realized their study abroad dreams
              with us.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-12 bg-[#AE8463] hover:bg-[#9C7556] text-white transition-all shadow-lg hover:shadow-[#AE8463]/25"
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 h-12 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white transition-all"
              >
                Book Free Demo
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-[#394246] mt-8"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  10k+
                </p>
                <p className="text-xs md:text-sm text-[#C8B6AD]">
                  Success Stories
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-bold text-white">98%</p>
                <p className="text-xs md:text-sm text-[#C8B6AD]">
                  Visa Approval
                </p>
              </div>
              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  4.9/5
                </p>
                <p className="text-xs md:text-sm text-[#C8B6AD]">
                  Student Rating
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
