import Gallery from '../../components/Gallery'

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-lg sm:text-xl">Explore our portfolio of residential, commercial, and gym floor projects</p>
        </div>
      </div>
      <Gallery />
    </main>
  )
}