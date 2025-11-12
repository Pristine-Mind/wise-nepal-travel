import { Star } from 'lucide-react'

const testimonials = [
  { 
    name: 'Sarah Johnson', 
    rating: 5, 
    text: 'Amazing service! Got the best deal for my Nepal trip. Highly recommended!' 
  },
  { 
    name: 'Michael Chen', 
    rating: 5, 
    text: 'Professional and efficient. Made my travel planning stress-free.' 
  },
  { 
    name: 'Priya Sharma', 
    rating: 5, 
    text: 'Excellent customer support. They helped me find perfect flights within my budget.' 
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of travelers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
