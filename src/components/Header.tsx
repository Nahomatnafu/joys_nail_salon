"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E9D5FF] shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/joys_nail_logo_v02.png"
              alt="Joy Nails Logo"
              width={200}
              height={80}
              className="h-14 sm:h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="relative text-gray-700 hover:text-[#6A0DAD] transition-all duration-300 font-medium group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6A0DAD] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#gallery"
              className="relative text-gray-700 hover:text-[#6A0DAD] transition-all duration-300 font-medium group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6A0DAD] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#contact"
              className="relative text-gray-700 hover:text-[#6A0DAD] transition-all duration-300 font-medium group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6A0DAD] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Right side: Book Now + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Book Now Button */}
            <Link
              href="#booking"
              className="hidden sm:block glow-button bg-[#8B5CF6] hover:bg-[#6A0DAD] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Book Now
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl hover:bg-[#F3E8FF] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#6A0DAD]" />
              ) : (
                <Menu className="w-6 h-6 text-[#6A0DAD]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-[#E9D5FF] shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link
            href="#services"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#6A0DAD] hover:bg-[#F3E8FF] px-4 py-3 rounded-xl transition-all duration-300 font-medium"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#6A0DAD] hover:bg-[#F3E8FF] px-4 py-3 rounded-xl transition-all duration-300 font-medium"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#6A0DAD] hover:bg-[#F3E8FF] px-4 py-3 rounded-xl transition-all duration-300 font-medium"
          >
            Contact
          </Link>
          <Link
            href="#booking"
            onClick={closeMenu}
            className="sm:hidden bg-[#8B5CF6] hover:bg-[#6A0DAD] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center mt-2"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  )
}