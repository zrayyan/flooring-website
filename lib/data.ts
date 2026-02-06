import { Service, Testimonial, GalleryImage } from '../types'

export const services: Service[] = [
  {
    title: 'Installation',
    description: 'Expert installation of premium hardwood flooring for residential, commercial, and gym spaces. Professional craftsmanship with attention to detail.',
    icon: '🔨',
    image: '/images/service-installation.jpg',
    category: 'installation'
  },
  {
    title: 'Repair',
    description: 'Professional repair services for damaged hardwood floors. Restore your floors to their original beauty and functionality.',
    icon: '🛠️',
    image: '/images/service-repair.jpg',
    category: 'repair'
  },
  {
    title: 'Scrape',
    description: 'Specialized scraping services to remove old finishes and prepare floors for refinishing. Essential for deep cleaning and restoration.',
    icon: '🪚',
    image: '/images/service-scrape.jpg',
    category: 'scrape'
  },
  {
    title: 'Sand & Refinish',
    description: 'Complete sanding and refinishing services to rejuvenate your hardwood floors. Bring back the natural shine and beauty of your wood.',
    icon: '✨',
    image: '/images/service-sand-refinish.jpg',
    category: 'sand-refinish'
  }
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    company: 'Homeowner',
    message: 'Expert Wood Flooring transformed our entire home with beautiful oak hardwood. The attention to detail and quality craftsmanship is unmatched. Our floors look stunning and feel luxurious underfoot.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
  },
  {
    name: 'Michael Chen',
    company: 'Architect',
    message: 'As an architect, I appreciate their expertise in sustainable hardwood sourcing. The walnut floors they installed in our project space exceeded all expectations for both aesthetics and durability.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
  },
  {
    name: 'Jennifer Rodriguez',
    company: 'Interior Designer',
    message: 'Their refinishing work on our client\'s century-old hickory floors was exceptional. They preserved the character of the wood while modernizing the finish. Truly premium quality work.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
  },
  {
    name: 'David Thompson',
    company: 'Property Developer',
    message: 'Expert Wood Flooring delivered on time and within budget for our multi-unit project. Their ash flooring installation was flawless, and the sustainable practices align perfectly with our green building initiatives.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
  },
  {
    name: 'Lisa Park',
    company: 'Homeowner',
    message: 'The room inspiration consultation was invaluable. They helped us choose the perfect hardwood that complements our modern farmhouse style. The installation was seamless and professional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
  },
  {
    name: 'Robert Williams',
    company: 'Restaurant Owner',
    message: 'Our restaurant\'s hardwood floors needed urgent repair. Expert Wood Flooring restored them beautifully, maintaining the warm ambiance our customers love while ensuring durability for high-traffic areas.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
  }
]

export const galleryImages: GalleryImage[] = [
  // Oak hardwood images
  { src: '/images/livingroom-oak-01.jpg', alt: 'Beautiful oak hardwood flooring in modern living room', category: 'oak' },
  { src: '/images/livingroom-oak-02.jpg', alt: 'Premium oak floors in contemporary living space', category: 'oak' },
  { src: '/images/livingroom-oak-03.jpg', alt: 'Elegant oak hardwood installation', category: 'oak' },

  // Walnut hardwood images
  { src: '/images/gallery-dining-walnut.jpg', alt: 'Walnut hardwood dining room installation', category: 'walnut' },

  // Hickory hardwood images
  { src: '/images/gallery-kitchen-hickory-01.jpg', alt: 'Hickory floors in gourmet kitchen design', category: 'hickory' },
  { src: '/images/gallery-kitchen-hickory-02.jpg', alt: 'Beautiful hickory hardwood in kitchen space', category: 'hickory' },

  // Ash hardwood images
  { src: '/images/gallery-bedroom-ash-01.jpg', alt: 'Ash hardwood bedroom flooring installation', category: 'ash' },
  { src: '/images/gallery-bedroom-ash-02.jpg', alt: 'Elegant ash floors in bedroom setting', category: 'ash' },
  { src: '/images/gallery-bedroom-ash-03.jpg', alt: 'Premium ash hardwood in master bedroom', category: 'ash' },
  { src: '/images/gallery-bedroom-ash-04.jpg', alt: 'Stunning ash hardwood bedroom floors', category: 'ash' },

  // Refinishing images
  { src: '/images/gallery-refinish-before-after-01.jpg', alt: 'Hardwood floor refinishing transformation - before and after', category: 'refinish' },
  { src: '/images/gallery-refinish-before-after-02.jpg', alt: 'Floor refinishing results showcasing restored beauty', category: 'refinish' },
  { src: '/images/gallery-refinish-before-after-03.jpg', alt: 'Professional hardwood refinishing work', category: 'refinish' },
  { src: '/images/gallery-refinish-before-after-04.jpg', alt: 'Before and after hardwood floor refinishing', category: 'refinish' },

  // Sustainable flooring images
  { src: '/images/gallery-sustainable-oak.jpg', alt: 'Sustainable oak flooring installation with eco-friendly practices', category: 'sustainable' },

  // Custom work images
  { src: '/images/gallery-custom-inlay.jpg', alt: 'Custom hardwood floor inlay design craftsmanship', category: 'custom' },

  // Repair and restoration images
  { src: '/images/gallery-repair-restoration.jpg', alt: 'Hardwood floor repair and restoration work', category: 'repair' },
  { src: '/images/gallery-repair-restoration-02.jpg', alt: 'Professional floor repair and restoration services', category: 'repair' }
]