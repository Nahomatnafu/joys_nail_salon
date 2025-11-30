"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/professional-nail-art-gallery-image-1-el-a213f623-20251130214025.jpg",
    alt: "French manicure with purple accents"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/glamorous-gel-nails-gallery-image-2-shin-d2853b0a-20251130214025.jpg",
    alt: "Glossy purple gel nails"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/elegant-nail-art-design-gallery-image-3--6568d03d-20251130214025.jpg",
    alt: "Purple ombre nail art"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/luxurious-pedicure-gallery-image-4-beaut-d54e4f98-20251130214025.jpg",
    alt: "Luxury pedicure with lavender polish"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/sophisticated-acrylic-nails-gallery-imag-24bd0b4d-20251130214025.jpg",
    alt: "Elegant acrylic nails"
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/082a7e8f-8dd9-4cee-8111-7e17ad7b4bee/generated_images/premium-nail-care-gallery-image-6-delica-47bc4c8a-20251130214025.jpg",
    alt: "Premium nail care products"
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#E9D5FF] via-[#F3E8FF] to-[#DDD6FE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Gallery Badge */}
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white rounded-full text-[#6A0DAD] font-semibold text-sm shadow-sm">
              Gallery
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our Artistry
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and get inspired for your next visit
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-3xl overflow-hidden purple-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}