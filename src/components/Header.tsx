"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E9D5FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6A0DAD] via-[#8B5CF6] to-[#C084FC] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#C084FC] rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#6A0DAD] to-[#C084FC] bg-clip-text text-transparent">
                Joy Nails
              </span>
              <span className="text-xs text-[#8B5CF6] font-medium tracking-wider">
                LUXURY SALON
              </span>
            </div>
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