import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Space?</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">Call 929-235-6311 for free estimates on installation, repair, scrape, sand & refinish services.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
