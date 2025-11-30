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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-[#F3E8FF] text-[#6A0DAD] rounded-full font-semibold text-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Treatments We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From classic manicures to artistic designs, we have everything you need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-purple-50"
              >
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#6A0DAD]" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <span className="text-2xl font-bold text-[#6A0DAD]">{service.price}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* VIP Package */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#6A0DAD] via-[#8B5CF6] to-[#C084FC] rounded-3xl p-8 sm:p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold text-sm">
                    Premium Package
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3">VIP Package</h3>
                <p className="text-white/90 mb-4 max-w-xl">
                  Complete luxury experience including manicure, pedicure, gel polish, and custom nail art design
                </p>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>120 min</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-5xl font-bold mb-2">$150</div>
                <button className="bg-white text-[#6A0DAD] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}