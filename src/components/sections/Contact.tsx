import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 sm:py-20 bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl bg-card border border-border shadow-2xl">
          {/* Contact Info Side */}
          <div className="bg-primary p-6 sm:p-8 md:p-10 text-primary-foreground flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4 sm:mb-6 text-center sm:text-left">
                Get in Touch
              </h2>
              <p className="text-primary-foreground/80 mb-6 sm:mb-8 text-base text-center sm:text-left">
                Ready to start your journey? Visit us or drop a message.
                We&apos;d love to hear from you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-foreground mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold">Visit Us</h5>
                    <p className="text-primary-foreground/70 text-sm sm:text-base">
                      123 Education Lane, Knowledge Park
                      <br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary-foreground mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold">Call Us</h5>
                    <p className="text-primary-foreground/70 text-sm sm:text-base">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary-foreground mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold">Email Us</h5>
                    <p className="text-primary-foreground/70 text-sm sm:text-base">
                      admissions@coaching.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary-foreground mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold">Opening Hours</h5>
                    <p className="text-primary-foreground/70 text-sm sm:text-base">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 hidden sm:block">
              {/* Map Placeholder */}
              <div className="w-full h-48 bg-black/20 rounded-xl flex items-center justify-center border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222993.98531839202!2d75.59072417645152!3d29.156390001607548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1770633658266!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  title="Location Map"
                />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center sm:text-left">
              Book a Free Consultation
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input placeholder="John" className="h-10 sm:h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="h-10 sm:h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-10 sm:h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+91 90000 00000"
                  className="h-10 sm:h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Interested In
                </label>
                <select className="flex h-10 sm:h-12 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground transition-all">
                  <option>IELTS Coaching</option>
                  <option>PTE Coaching</option>
                  <option>Study Visa</option>
                  <option>Spoken English</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your goals..."
                  className="min-h-[100px] text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 h-10 sm:h-12 text-base sm:text-lg text-primary-foreground transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
