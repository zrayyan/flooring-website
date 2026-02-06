'use client'

import { useState } from 'react'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback Background */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl h-full flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Expert Wood Flooring
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            20 years of experience in residential, commercial, and gym floor installation, repair, scrape, sand & refinish. Call 929-235-6311 for free estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-700 transition duration-300 text-center w-full sm:w-auto"
            >
              Get Free Quote
            </a>
            <a
              href="/gallery"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 text-center w-full sm:w-auto"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}