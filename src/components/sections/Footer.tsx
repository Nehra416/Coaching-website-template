"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Founders", href: "#founders" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Programs",
    links: [
      { name: "IELTS Coaching", href: "#programs" },
      { name: "PTE Academic", href: "#programs" },
      { name: "Spoken English", href: "#programs" },
      { name: "Study Visa", href: "#programs" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#faq" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-muted pt-20 pb-10 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Coaching<span className="text-primary">Institute</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Empowering students to achieve their dreams of studying abroad and
              mastering the English language with world-class coaching.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold text-foreground mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-12 border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Coaching Institute. All rights
            reserved.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-3 md:gap-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary" />
              <span>info@coachinginstitute.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} className="text-primary" />
              <span>+1 (234) 567-890</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
