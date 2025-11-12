'use client'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(https://admin.ntb.gov.np/image-cache/Phewa_by_SS-1630389608.JPG?p=1280&s=ca287cf3c1f8f1efafaeba0c77643e97)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-accent opacity-40"></div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Affordable Flights to Nepal
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Your trusted partner for the best deals on flights to Nepal. Save time, save money.
        </p>
        <button
          onClick={scrollToBooking}
          className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
        >
          <span>Get Your Quote</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
