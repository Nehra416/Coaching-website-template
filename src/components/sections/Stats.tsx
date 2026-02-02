"use client";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-500 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
              10k+
            </h3>
            <p className="text-blue-100">Students Mentored</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2 pl-4"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
              98%
            </h3>
            <p className="text-blue-100">Exam Pass Rate</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2 pl-4"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
              50+
            </h3>
            <p className="text-blue-100">Partner Colleges</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2 pl-4"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
              15+
            </h3>
            <p className="text-blue-100">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
