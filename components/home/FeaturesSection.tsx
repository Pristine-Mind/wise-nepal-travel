import { DollarSign, Clock, Shield, CheckCircle } from 'lucide-react'

const features = [
  { 
    icon: DollarSign, 
    title: 'Best Prices', 
    desc: 'Competitive rates on all flights to Nepal' 
  },
  { 
    icon: Clock, 
    title: 'Fast Booking', 
    desc: '24/7 customer support and quick processing' 
  },
  { 
    icon: Shield, 
    title: 'Secure & Reliable', 
    desc: 'Licensed and trusted travel agency' 
  },
  { 
    icon: CheckCircle, 
    title: 'Easy Process', 
    desc: 'Simple booking with expert assistance' 
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">
            We make your journey to Nepal seamless and affordable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
