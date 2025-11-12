'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image';
import MobileMenu from './MobileMenu'
import logo from '../../public/logo.jpeg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-primary'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="Wise Nepal Travel Logo" width={40} height={40} className="rounded-full" />
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-accent' : 'text-white'
              }`}>
                Wise Nepal Travel
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isScrolled 
                      ? 'text-accent hover:text-primary' 
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-colors">
                Book Now
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-accent' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-accent' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        items={navLinks.map(item => item.label)}
      />
    </>
  )
}
