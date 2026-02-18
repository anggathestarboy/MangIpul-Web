'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tentang', href: '/About' },
    { label: 'Produk', href: '/Products' },
    { label: 'Testimoni', href: '/#testimonials' },
    { label: 'Kontak', href: '/Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo di Kiri */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-17 h-10 md:w-17 md:h-12">
                <Image
                  src="/logo.png"
                  alt="Mang Ipul Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 128px, 160px"
                />
              
              </div>
              <h1 className=' text-2xl font-bold'>Mangs Ipul</h1>
            </Link>
          </div>

          {/* Navigasi di Tengah (Desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-dark hover:text-primary font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Button di Kanan (Desktop) */}
  <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
  <Link
    href="/Login"
    className="
      px-4 py-2
      border border-orange-700
      text-orange-700 font-medium
      rounded-lg
      hover:bg-orange-500 hover:text-white
      transition duration-300
    "
  >
    Masuk
  </Link>

  <Link
    href="/Register"
    className="
      px-4 py-2
      bg-orange-700 text-white
      font-medium
      rounded-lg
      hover:bg-orange-400
      transition duration-300
    "
  >
    Daftar
  </Link>
</div>


          {/* Mobile Menu Button (Kanana) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-dark"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-200 space-y-2">
              <Link
                href="/Login"
                className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                href="/Register"
                className="block px-3 py-2 bg-primary text-white font-medium rounded-md hover:bg-orange-600 transition duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar
              </Link>
           
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}