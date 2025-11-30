"use client"

import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#F3E8FF]">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Decorative Purple Circles */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#C084FC] rounded-full opacity-20 blur-3xl" />
            <div className="absolute left-10 top-40 w-40 h-40 bg-[#6A0DAD] rounded-full opacity-15 blur-2xl" />
            <div className="absolute -left-10 bottom-10 w-52 h-52 bg-[#9333EA] rounded-full opacity-10 blur-3xl" />

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-8 shadow-sm relative z-10">
              <Sparkles className="w-4 h-4 text-[#C084FC]" />
              <span className="text-sm font-medium text-gray-700">Premium Nail Care</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 relative z-10">
              Elevate Your Experience
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-600 leading-relaxed max-w-lg relative z-10">
              Indulge in luxury nail care designed to pamper, relax, and transform. Where elegance meets perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link
                href="#booking"
                className="border-2 border-[#6A0DAD] text-[#6A0DAD] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6A0DAD] hover:text-white transition-all duration-300 text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="#services"
                className="border-2 border-[#6A0DAD] text-[#6A0DAD] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6A0DAD] hover:text-white transition-all duration-300 text-center"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-white p-4 rounded-3xl shadow-lg">
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/luxury-nail-salon-hero-image-elegant-man-71b7aa8b-20251130214025.jpg"
                  alt="Luxury nail salon services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}