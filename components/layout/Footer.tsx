import { Plane } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Wise Nepal Travel</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for affordable flights to Nepal.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="" className="hover:text-blue-400 transition-colors">Destinations</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Flight Booking</li>
              <li>Travel Consultation</li>
              <li>Group Travel</li>
              <li>Custom Packages</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {currentYear} Wise Nepal Travel LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
