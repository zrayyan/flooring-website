export interface Service {
  title: string
  description: string
  icon: string
  image: string
  category: string
}

export interface Testimonial {
  name: string
  company: string
  message: string
  rating: number
  image: string
}

export interface GalleryImage {
  src: string
  alt: string
  category: string
  before?: string
  after?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}