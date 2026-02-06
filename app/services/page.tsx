import Services from '../../components/Services'

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg sm:text-xl">Installation, Repair, Scrape, Sand & Refinish - Residential, Commercial, Gym Floors</p>
        </div>
      </div>
      <Services />
    </main>
  )
}