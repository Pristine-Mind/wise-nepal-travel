'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    passengers: '',
    tripType: 'One Way',
    departure: '',
    arrival: '',
    message: '',
    optIn: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly with the best flight deals.')
    // Here you would typically send data to your API
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && 'checked' in e.target) {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Best Deal</h2>
          <p className="text-xl text-gray-600">
            Fill out the form and we'll contact you with the best prices
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Passengers</label>
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="1"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Trip Type</label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                >
                  <option value="One Way">One Way</option>
                  <option value="Round Trip">Round Trip</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Departure City or Airport</label>
                <input
                  type="text"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="New York"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Arrival City or Airport</label>
                <input
                  type="text"
                  name="arrival"
                  value={formData.arrival}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Kathmandu"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Any additional information..."
              />
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="optIn"
                checked={formData.optIn}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-gray-700">
                Opt-in to receive texts?
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full mt-4 bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all"
            >
              Book Now
            </button>
          </form>
          
          <p className="text-sm text-gray-600 mt-4 text-center">
            By submitting, you agree to receive communications from Wise Nepal Travel.
          </p>
        </div>
      </div>
    </section>
  )
}
