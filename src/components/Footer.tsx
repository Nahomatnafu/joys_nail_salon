"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#4C0A78] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/joys_nail_logo_v02.png"
                alt="Joy Nails Logo"
                width={160}
                height={64}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              Premium nail care services in a luxurious, relaxing environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-white/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-white/80 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li>123 Beauty Lane</li>
              <li>City, State 12345</li>
              <li>(555) 123-4567</li>
              <li>hello@joynails.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-3 text-white/80">
              <li>Monday - Friday: 9am - 7pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 11am - 5pm</li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Joy Nails. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}