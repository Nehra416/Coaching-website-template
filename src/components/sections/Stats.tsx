"use client";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-20 bg-muted text-foreground relative overflow-hidden transition-colors duration-300">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-primary to-accent">
              10k+
            </h3>
            <p className="text-muted-foreground font-medium">
              Students Mentored
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2 pl-4"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-primary to-accent">
              98%
            </h3>
            <p className="text-muted-foreground font-medium">Exam Pass Rate</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2 pl-4"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-primary to-accent">
              50+
            </h3>
            <p className="text-muted-foreground font-medium">
              Partner Colleges
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2 pl-4"
          >
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-primary to-accent">
              15+
            </h3>
            <p className="text-muted-foreground font-medium">
              Years Experience
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
