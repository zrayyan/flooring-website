import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <main className="pt-20">
      <div className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl">Call 929-235-6311 for free estimates</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">Get In Touch</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div className="text-center lg:text-left">
                    <p className="font-semibold">Phone</p>
                    <p>929-235-6311</p>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-2xl mr-4">📧</span>
                  <div className="text-center lg:text-left">
                    <p className="font-semibold">Email</p>
                    <p>info@expertwoodflooring.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div className="text-center lg:text-left">
                    <p className="font-semibold">Address</p>
                    <p>123 Main Street, City, ST 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-gray-600">
                  We proudly serve the greater metropolitan area and surrounding communities with premium hardwood flooring services.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}