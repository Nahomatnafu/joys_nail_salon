"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    alt: "Elegant manicure design"
  },
  {
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    alt: "Stylish gel nails"
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80",
    alt: "Professional nail art"
  },
  {
    src: "https://images.unsplash.com/photo-1610992015732-2449b0dd2b8f?w=800&q=80",
    alt: "Luxury pedicure service"
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
    alt: "Beautiful acrylic nails"
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    alt: "Premium nail polish collection"
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-[#BFDBFE] via-[#DBEAFE] to-[#93C5FD]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Gallery Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-6 py-2 bg-white rounded-full text-[#1E40AF] font-semibold text-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              Gallery
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Artistry
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and get inspired for your next visit
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/80 via-[#1E40AF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-base sm:text-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-[#60A5FA]/50 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}