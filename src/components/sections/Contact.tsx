import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Contact Info Side */}
          <div className="bg-primary-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Get in Touch
              </h2>
              <p className="text-blue-200 mb-12 text-lg">
                Ready to start your journey? Visit us or drop a message. We'd
                love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1" />
                  <div>
                    <h5 className="font-bold">Visit Us</h5>
                    <p className="text-blue-200">
                      123 Education Lane, Knowledge Park
                      <br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1" />
                  <div>
                    <h5 className="font-bold">Call Us</h5>
                    <p className="text-blue-200">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" />
                  <div>
                    <h5 className="font-bold">Email Us</h5>
                    <p className="text-blue-200">admissions@coaching.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-accent mt-1" />
                  <div>
                    <h5 className="font-bold">Opening Hours</h5>
                    <p className="text-blue-200">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              {/* Map Placeholder */}
              <div className="w-full h-48 bg-blue-800 rounded-xl opacity-50 flex items-center justify-center">
                <span className="text-sm uppercase tracking-widest opacity-70">
                  Map Integration
                </span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Book a Free Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input type="tel" placeholder="+91 90000 00000" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Interested In</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>IELTS Coaching</option>
                  <option>PTE Coaching</option>
                  <option>Study Visa</option>
                  <option>Spoken English</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us about your goals..." />
              </div>

              <Button type="submit" className="w-full bg-primary h-12 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
