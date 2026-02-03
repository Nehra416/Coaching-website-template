import { CheckCircle } from "lucide-react";

const reasons = [
  "Proven Track Record: 98% Success Rate",
  "Certified & Experienced Trainers",
  "Small Batch Sizes for Personal Attention",
  "Flexible Timings (Morning/Evening/Weekend)",
  "Latest Study Material provided Free",
  "Weekly Mock Tests with Detailed Feedback",
  "State-of-the-art Computer Lab for PTE",
  "End-to-end Visa Counseling Support",
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-primary/10 to-transparent opacity-50 transform skew-x-12 translate-x-32" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-h2 font-heading font-bold mt-2 mb-6 text-foreground">
              We Don&apos;t Just Teach, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                We Transform Careers
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In a crowded market of coaching centers, we stand out by
              prioritizing quality over quantity. Our student-centric approach
              ensures you get the attention you deserve.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-success w-5 h-5 mt-1 shrink-0" />
                  <span className="text-foreground/80 font-medium">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-card border border-border p-8 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
              {/* Content representing value */}
              <div className="h-full border border-border rounded-xl flex items-center justify-center p-8 bg-background/50 backdrop-blur">
                <div className="text-center">
                  <p className="text-6xl font-bold text-foreground mb-2">A+</p>
                  <p className="text-xl text-muted-foreground">Grade Quality</p>
                  <div className="mt-8 flex justify-center gap-2">
                    <span className="block w-20 h-2 bg-primary rounded-full" />
                    <span className="block w-12 h-2 bg-muted rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
