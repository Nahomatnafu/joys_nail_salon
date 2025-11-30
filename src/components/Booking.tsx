"use client"

import { Calendar, Phone, Mail } from "lucide-react"

export default function Booking() {
  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6A0DAD] via-[#8B5CF6] to-[#C084FC]" />
      
      {/* Large Decorative Circles - matching reference image */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#8B5CF6]/30 rounded-full blur-3xl" />
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-[#C084FC]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[#9333EA]/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Book Your Appointment Badge */}
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
                Book Your Appointment
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Reserve Your Spot
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Select your preferred service and time. We can't wait to pamper you!
            </p>
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 soft-shadow">
            <div className="min-h-[500px] flex items-center justify-center bg-white rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6A0DAD] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Calendly Integration Area
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Embed your Calendly booking widget here to allow clients to schedule appointments seamlessly.
                </p>
                
                {/* Quick Contact Section */}
                <div className="bg-[#F3E8FF] rounded-2xl p-6 max-w-md mx-auto">
                  <h4 className="text-[#6A0DAD] font-semibold mb-4 text-lg">Quick Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-[#6A0DAD]">
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[#6A0DAD]">
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">hello@joynails.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}