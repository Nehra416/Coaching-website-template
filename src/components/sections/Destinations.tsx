import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Destinations() {
  const countries = [
    { name: "Canada", code: "CA", img: "bg-red-500" }, // Placeholder for flag
    { name: "United Kingdom", code: "GB", img: "bg-blue-600" },
    { name: "Australia", code: "AU", img: "bg-indigo-600" },
    { name: "USA", code: "US", img: "bg-red-600" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Study Destinations
            </span>
            <h2 className="text-h2 font-heading font-bold mt-2">
              Where Do You Want To Go?
            </h2>
          </div>
          <button className="text-primary font-semibold flex items-center gap-2 hover:underline">
            View All Countries <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c, i) => (
            <Card
              key={i}
              className="group cursor-pointer overflow-hidden border-none shadow-lg"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* Simulated Image Placeholder with Gradient */}
                <div
                  className={`absolute inset-0 ${c.img} opacity-20 group-hover:scale-110 transition-transform duration-500`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-300 opacity-50">
                  {c.code}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{c.name}</h3>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Top Universities & work rights
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
