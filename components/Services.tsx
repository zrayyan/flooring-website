import { services } from '../lib/data'

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            From residential to commercial and gym floors, we provide everything you need for premium hardwood flooring solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="text-center py-8 bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="/contact"
                  className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-300 w-full text-center"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}