import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-blue-100">
            We're here to help you plan your perfect trip
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Phone className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-blue-100">+1 (555) 123-4567</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Mail className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-blue-100">info@wisenepaltravel.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <MapPin className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-blue-100">123 Travel Street, USA</p>
          </div>
        </div>
      </div>
    </section>
  )
}