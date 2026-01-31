"use client"

import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#F3E8FF]">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Decorative Purple Circles */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#C084FC] rounded-full opacity-20 blur-3xl animate-pulse" />
            <div className="absolute left-10 top-40 w-40 h-40 bg-[#6A0DAD] rounded-full opacity-15 blur-2xl" />
            <div className="absolute -left-10 bottom-10 w-52 h-52 bg-[#9333EA] rounded-full opacity-10 blur-3xl" />

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 sm:mb-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10">
              <Sparkles className="w-4 h-4 text-[#C084FC] animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Premium Nail Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 relative z-10">
              Elevate Your Experience
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 relative z-10">
              Indulge in luxury nail care designed to pamper, relax, and transform. Where elegance meets perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10 justify-center lg:justify-start">
              <Link
                href="#booking"
                className="group border-2 border-[#6A0DAD] bg-[#6A0DAD] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#5a0b94] hover:border-[#5a0b94] hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="#services"
                className="group border-2 border-[#6A0DAD] text-[#6A0DAD] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#6A0DAD] hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/luxury-nail-salon-hero-image-elegant-man-71b7aa8b-20251130214025.jpg"
                  alt="Luxury nail salon services"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              {/* Floating decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#C084FC] to-[#6A0DAD] rounded-2xl opacity-80 blur-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}