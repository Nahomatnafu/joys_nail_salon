"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E9D5FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/joys_nail_logo.png"
              alt="Joy Nails Logo"
              width={150}
              height={60}
              className="h-14 w-auto group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-[#6A0DAD] transition-colors font-medium"
            >
              Services
            </Link>
            <Link 
              href="#gallery" 
              className="text-gray-700 hover:text-[#6A0DAD] transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-[#6A0DAD] transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Book Now Button */}
          <Link 
            href="#booking"
            className="glow-button bg-[#C084FC] hover:bg-[#A855F7] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}