'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Expert Wood Flooring"
              width={200}
              height={60}
              className="mr-3"
            />
            <span className="text-2xl font-bold text-gray-800">Expert Wood Flooring</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-600 transition">Services</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-amber-600 transition">Gallery</Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-amber-600 transition">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-amber-600 transition">Services</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-amber-600 transition">Gallery</Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 transition">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}