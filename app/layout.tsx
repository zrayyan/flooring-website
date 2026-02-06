import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Expert Wood Flooring - Premium Hardwood Flooring Solutions',
    template: '%s | Expert Wood Flooring'
  },
  description: 'Expert wood flooring with 20 years of experience. Specializing in residential, commercial, and gym floor installation, repair, scrape, sand & refinish. Call 929-235-6311 for free estimates.',
  keywords: ['hardwood flooring', 'wood flooring', 'floor installation', 'floor repair', 'floor refinishing', 'residential flooring', 'commercial flooring', 'gym flooring', 'scrape and sand', 'free estimates'],
  authors: [{ name: 'Expert Wood Flooring' }],
  creator: 'Expert Wood Flooring',
  publisher: 'Expert Wood Flooring',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://expertwoodflooring.com',
    title: 'Expert Wood Flooring - Premium Hardwood Flooring Solutions',
    description: 'Expert wood flooring with 20 years of experience. Specializing in residential, commercial, and gym floor services.',
    siteName: 'Expert Wood Flooring',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Expert Wood Flooring - Premium Hardwood Flooring Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Wood Flooring - Premium Hardwood Flooring Solutions',
    description: 'Expert wood flooring with 20 years of experience.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
