"use client"

import { Sparkles, Clock, Heart } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Classic Manicure",
    description: "Traditional nail care with polish application",
    duration: "30 min",
    price: "$35"
  },
  {
    icon: Heart,
    title: "Luxury Pedicure",
    description: "Complete foot care with massage and polish",
    duration: "60 min",
    price: "$55"
  },
  {
    icon: Sparkles,
    title: "Gel Nails",
    description: "Long-lasting gel polish application",
    duration: "45 min",
    price: "$45"
  },
  {
    icon: Clock,
    title: "Acrylic Extensions",
    description: "Full set of acrylic nail enhancements",
    duration: "90 min",
    price: "$65"
  },
  {
    icon: Heart,
    title: "Nail Art Design",
    description: "Custom artistic designs for your nails",
    duration: "60 min",
    price: "$50"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#DBEAFE]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-[#DBEAFE] text-[#1E40AF] rounded-full font-semibold text-sm shadow-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Treatments We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From classic manicures to artistic designs, we have everything you need
          </p>
        </div>

        {/* Services Grid - 2x3 including VIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#60A5FA]/30 cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#DBEAFE] rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#1E40AF] group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1E40AF] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3 group-hover:text-[#1E40AF] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-[#60A5FA]/30 transition-colors duration-300">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-[#1E40AF]">{service.price}</span>
                </div>
              </div>
            )
          })}

          {/* VIP Package - as part of the grid */}
          <div className="group bg-gradient-to-br from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] rounded-3xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col justify-between cursor-pointer relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-sm group-hover:bg-white/30 transition-colors duration-300">
                  ✨ Premium Package
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">VIP Package</h3>
              <p className="text-white/90 mb-4 text-sm sm:text-base">
                Complete luxury experience including manicure, pedicure, gel polish, and nail art
              </p>
            </div>
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4" />
                <span className="text-sm">120 min</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">$150</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}