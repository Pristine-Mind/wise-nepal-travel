import Image from 'next/image';
import pokharaImage from '../../public/pokhara.jpg';
import KathmanduImage from '../../public/kathmandu.jpg';
import ChitwanImage from '../../public/chitwan.jpg';
import Lumbini from '../../public/lumbini.webp';

const destinations = [
  { city: 'Kathmandu', image: KathmanduImage },
  { city: 'Pokhara', image: pokharaImage },
  { city: 'Chitwan', image: ChitwanImage },
  { city: 'Lumbini', image: Lumbini }
]

export default function DestinationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600">Explore the beauty of Nepal</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Image src={dest.image} alt={dest.city} className="object-cover w-full h-full" fill />
                <span className="absolute bottom-2 left-2 bg-accent/80 text-white px-3 py-1 rounded-lg text-lg font-semibold shadow">{dest.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
