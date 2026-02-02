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
    <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-20 transform skew-x-12 translate-x-32" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-400 font-semibold tracking-wide uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-h2 font-heading font-bold mt-2 mb-6 text-white">
              We Don&apos;t Just Teach, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                We Transform Careers
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              In a crowded market of coaching centers, we stand out by
              prioritizing quality over quantity. Our student-centric approach
              ensures you get the attention you deserve.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" />
                  <span className="text-gray-300 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-8 border border-gray-700 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
              {/* Content representing value */}
              <div className="h-full border border-gray-600 rounded-xl flex items-center justify-center p-8 bg-gray-800/50 backdrop-blur">
                <div className="text-center">
                  <p className="text-6xl font-bold text-white mb-2">A+</p>
                  <p className="text-xl text-gray-400">Grade Quality</p>
                  <div className="mt-8 flex justify-center gap-2">
                    <span className="block w-20 h-2 bg-primary-500 rounded-full" />
                    <span className="block w-12 h-2 bg-gray-600 rounded-full" />
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
