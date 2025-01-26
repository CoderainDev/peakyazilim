'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

// Navbar.tsx içinde
const navLinks = [
    { href: '#services-content', label: 'Hizmetler', id: 'nav-services' },
    { href: '#about', label: 'Hakkımızda', id: 'nav-about' },
    { href: '#why-us', label: 'Neden Biz?', id: 'nav-why-us' },
    { href: '#contact', label: 'İletişim', id: 'nav-contact' }
]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="/peakyazilim.png"
              alt="Peak Yazılım"
              width={150}
              height={40}
              className="brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, id }) => (
              <Link
                key={`desktop-${id}`}
                href={href}
                className="text-gray-300 hover:text-primary transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:inline-flex btn-cyber-sm"
          >
            Teklif Al
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMobileMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map(({ href, label, id }) => (
              <Link
                key={`mobile-${id}`}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-primary transition-colors px-4 py-2"
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block btn-cyber-sm mx-4"
            >
              Teklif Al
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}