export default function AboutPage() {
  return (
    <main className="pt-20">
      <div className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Expert Wood Flooring</h1>
          <p className="text-lg sm:text-xl">20 years of experience in residential, commercial, and gym floor services</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Our Story</h2>
              <p className="text-gray-600 mb-4 text-center lg:text-left">
                Expert Wood Flooring was founded with a passion for bringing the beauty and warmth of premium hardwood flooring to homes and businesses across the region. With 20 years of experience, we&apos;ve built our reputation on quality craftsmanship, sustainable practices, and exceptional customer service.
              </p>
              <p className="text-gray-600 mb-4 text-center lg:text-left">
                We specialize in residential, commercial, and gym floor services including installation, repair, scrape, sand & refinish. Our commitment to sustainability means we source from responsibly managed forests and use eco-friendly finishing processes.
              </p>
              <p className="text-gray-600 text-center lg:text-left">
                Whether you&apos;re looking for room inspiration, floor refinishing, or a complete installation, our team of certified professionals delivers results that exceed expectations and last for generations.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">About Us Image</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest hardwood materials and expert craftsmanship in every project.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">Environmentally responsible sourcing and eco-friendly finishing processes.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional consultations and room inspiration to help you choose the perfect floors.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}