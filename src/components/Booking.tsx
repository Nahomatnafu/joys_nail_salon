"use client"

import { useEffect } from "react"
import { Phone, Mail } from "lucide-react"

export default function Booking() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section id="booking" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] via-[#3B82F6] to-[#60A5FA]" />

      {/* Large Decorative Circles - matching reference image */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#3B82F6]/30 rounded-full blur-3xl" />
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[#2563EB]/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Book Your Appointment Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm shadow-lg">
                Book Your Appointment
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Reserve Your Spot
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Select your preferred service and time. We can't wait to pamper you!
            </p>
          </div>

          {/* Calendly Embed */}
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden"
            data-url="https://calendly.com/nahomg116/30min?background_color=1e40af&text_color=ffffff&primary_color=60a5fa"
            style={{ minWidth: "320px", height: "700px" }}
          />

          {/* Quick Contact Section */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-4 sm:py-6">
              <p className="text-white/80 font-medium">Or contact us directly:</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a href="tel:6126852161" className="flex items-center gap-2 text-white hover:text-[#60A5FA] transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">612-685-2161</span>
                </a>
                <a href="mailto:hello@lakesidenailspa.com" className="flex items-center gap-2 text-white hover:text-[#60A5FA] transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">hello@lakesidenailspa.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}